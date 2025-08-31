// app/api/contact/route.ts
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
const rateLimit = new Map();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 5; // Max 5 requests per window

export async function POST(request: NextRequest) {
  // Get IP address from headers
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
    // Parse JSON data (since your frontend sends JSON)
    const formData = await request.json();

    // Validate required fields based on your frontend form
    const requiredFields = ['name', 'email', 'interest', 'market', 'message'];
    for (const field of requiredFields) {
      if (!formData[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Validate email format
    const email = formData.email;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizeInput = (input: unknown): string => {
      if (typeof input !== 'string') return '';
      return input.trim().replace(/<script.*?>.*?<\/script>/gi, '');
    };

    const name = sanitizeInput(formData.name);
    const company = sanitizeInput(formData.company || '');
    const phone = sanitizeInput(formData.phone || '');
    const emailSanitized = sanitizeInput(formData.email);
    const interest = sanitizeInput(formData.interest);
    const market = sanitizeInput(formData.market);
    const message = sanitizeInput(formData.message);

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
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Contact Form Submission</h1>
          </div>
          <div class="content">
            <div class="field">
              <span class="label">Name:</span>
              <span>${name}</span>
            </div>
            ${company ? `
            <div class="field">
              <span class="label">Company:</span>
              <span>${company}</span>
            </div>
            ` : ''}
            <div class="field">
              <span class="label">Email:</span>
              <span>${emailSanitized}</span>
            </div>
            ${phone ? `
            <div class="field">
              <span class="label">Phone:</span>
              <span>${phone}</span>
            </div>
            ` : ''}
            <div class="field">
              <span class="label">Solution Area of Interest:</span>
              <span>${interest}</span>
            </div>
            <div class="field">
              <span class="label">Market:</span>
              <span>${market}</span>
            </div>
            <div class="field">
              <span class="label">Research Objectives:</span>
              <span>${message}</span>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    // Prepare email text version for clients that don't support HTML
    const emailText = `
      New Contact Form Submission
      ===========================
      
      Name: ${name}
      ${company ? `Company: ${company}` : ''}
      Email: ${emailSanitized}
      ${phone ? `Phone: ${phone}` : ''}
      Solution Area of Interest: ${interest}
      Market: ${market}
      Research Objectives: ${message}
    `;

    // Send email using Resend
    const { data: emailData, error: emailError } = await resend.emails.send({
      from: "onboarding@resend.dev",
      // to: process.env.TO_EMAIL_ADDRESS!,
      subject: `New Contact Form: ${name}`,
      // html: emailHtml,
      // text: emailText,
      to: process.env.TO_EMAIL_ADDRESS!,
      html: emailHtml,
      text: emailText,
      // attachments: attachments.length > 0 ? attachments : undefined,
    });

    if (emailError) {
      console.error('Resend API error:', emailError);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Form submitted successfully!', emailId: emailData?.id },
      { status: 200 }
    );

  } catch (error) {
    console.error('Unexpected error processing form:', error);
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