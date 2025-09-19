import Script from "next/script";
import { Suspense } from "react";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { SEOPerformanceMonitoring } from "@/components/seo/performance-monitoring";
import { SearchConsoleVerification } from "@/components/analytics/search-console-verification";
import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata = {
  title: "Creative Consulting",
  description: "Market Research and Consulting Company",
  keywords: ["market research", "social research", "consulting", "Bangladesh"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <SearchConsoleVerification />

        {/* Google Analytics base script */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX', { send_page_view: true });
          `}
        </Script>
      </head>
      <body>
        {children}
        <SEOPerformanceMonitoring />
        <Toaster />

        {/* GA navigation tracking wrapped in Suspense */}
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
      </body>
    </html>
  );
}
