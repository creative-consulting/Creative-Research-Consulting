// app/api/join/with-us/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Validate environment variables on startup
if (!process.env.RESEND_API_KEY) {
  console.error('RESEND_API_KEY is not set in environment variables');
}

if (!process.env.TO_EMAIL_ADDRESS) {
  console.error('TO_EMAIL_ADDRESS is not set in environment variables');
}

// Rate limiting configuration
const rateLimit = new Map<string, { count: number; lastRequest: number }>();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 5; // Max 5 requests per window

export async function POST(request: NextRequest) {
  // Get IP address from headers (corrected approach)
  const forwardedFor = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  const ip = forwardedFor?.split(',')[0] || realIp || 'unknown';

  const now = Date.now();

  // Clean up old entries
  for (const [key, value] of rateLimit.entries()) {
    if (now - value.lastRequest > RATE_LIMIT_WINDOW_MS) {
      rateLimit.delete(key);
    }
  }

  // Check rate limit
  const clientRateLimit = rateLimit.get(ip) || { count: 0, lastRequest: 0 };
  if (now - clientRateLimit.lastRequest < RATE_LIMIT_WINDOW_MS &&
    clientRateLimit.count >= RATE_LIMIT_MAX_REQUESTS) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }

  // Update rate limit
  rateLimit.set(ip, {
    count: clientRateLimit.count + 1,
    lastRequest: now
  });

  try {
    // Parse form data
    const formData = await request.formData();

    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'location', 'fieldOfInterest'];
    for (const field of requiredFields) {
      if (!formData.get(field)) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Validate email format
    const email = formData.get('email') as string;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate file if present
    const file = formData.get('file') as File | null;
    if (file && file.size > 0) {
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        return NextResponse.json(
          { error: 'File size must be less than 5MB' },
          { status: 400 }
        );
      }

      // Check file type
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ];

      if (!allowedTypes.includes(file.type)) {
        return NextResponse.json(
          { error: 'Only PDF, DOC, and DOCX files are allowed' },
          { status: 400 }
        );
      }
    }

    // Sanitize inputs - fixed the any type issue
    const sanitizeInput = (input: unknown): string => {
      if (typeof input !== 'string') return '';
      return input.trim().replace(/<script.*?>.*?<\/script>/gi, '');
    };

    const name = sanitizeInput(formData.get('name'));
    const phone = sanitizeInput(formData.get('phone'));
    const location = sanitizeInput(formData.get('location'));
    const message = sanitizeInput(formData.get('message') || '');

    // Process field of interest (could be array or string)
    let fieldOfInterest: string[];
    const fieldData = formData.getAll('fieldOfInterest');

    if (fieldData.length > 0) {
      fieldOfInterest = fieldData.map(f => sanitizeInput(f));
    } else {
      const singleField = formData.get('fieldOfInterest');
      fieldOfInterest = typeof singleField === 'string' ? [sanitizeInput(singleField)] : [];
    }

    // Prepare email content
    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(to right, #4F46E5, #EC4899); padding: 20px; color: white; text-align: center; }
          .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; display: block; margin-bottom: 5px; }
          .attachment { background: #eee; padding: 10px; border-radius: 4px; margin-top: 10px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Job Application</h1>
          </div>
          <div class="content">
            <div class="field">
              <span class="label">Name:</span>
              <span>${name}</span>
            </div>
            <div class="field">
              <span class="label">Email:</span>
              <span>${email}</span>
            </div>
            <div class="field">
              <span class="label">Phone:</span>
              <span>${phone}</span>
            </div>
            <div class="field">
              <span class="label">Location:</span>
              <span>${location}</span>
            </div>
            <div class="field">
              <span class="label">Field of Interest:</span>
              <span>${fieldOfInterest.join(', ')}</span>
            </div>
            ${message ? `
            <div class="field">
              <span class="label">Message:</span>
              <span>${message}</span>
            </div>
            ` : ''}
            ${file && file.size > 0 ? `
            <div class="field">
              <span class="label">Attachment:</span>
              <div class="attachment">
                ${file.name} (${Math.round(file.size / 1024)} KB)
              </div>
            </div>
            ` : ''}
          </div>
        </div>
      </body>
      </html>
    `;

    // Prepare email text version for clients that don't support HTML
    const emailText = `
      New Job Application Received
      ============================
      
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Location: ${location}
      Field of Interest: ${fieldOfInterest.join(', ')}
      ${message ? `Message: ${message}` : ''}
      ${file && file.size > 0 ? `Attachment: ${file.name} (${Math.round(file.size / 1024)} KB)` : ''}
    `;

    // Prepare attachments if file exists
    const attachments = [];
    if (file && file.size > 0) {
      const fileBuffer = Buffer.from(await file.arrayBuffer());
      attachments.push({
        filename: file.name,
        content: fileBuffer,
      });
    }

    // Send email using Resend
    const { data: emailData, error: emailError } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.TO_EMAIL_ADDRESS!,
      subject: `New Job Application: ${name}`,
      html: emailHtml,
      text: emailText,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    if (emailError) {
      console.error('Resend API error:', emailError);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Application submitted successfully!', emailId: emailData?.id },
      { status: 200 }
    );

  } catch (error) {
    console.error('Unexpected error processing application:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}

export async function PUT() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}

export async function PATCH() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}