import Script from "next/script";
import { Suspense } from "react";
// import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { SEOPerformanceMonitoring } from "@/components/seo/performance-monitoring";
import { SearchConsoleVerification } from "@/components/analytics/search-console-verification";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import GoogleAnalytics from "@/components/analytics/google-analytics";
import LottieAnimation from "@/components/lottie/LottieAnimaton";

export const metadata = {
  title: "Creative Consulting",
  description: "Market Research and Consulting Company",
  keywords: ["market research", "social research", "consulting", "Bangladesh"],
};
{
  /* <meta name="google-site-verification" content="ChEEbZIfgYysgl5ToFnpwOI2lWEwHh47KzRSzc9Zs3s" /> */
}

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

        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-HP3TB0KWZS"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-HP3TB0KWZS');
</script> */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-HP3TB0KWZS"
          security="after"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
             window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-HP3TB0KWZS');
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
          <Analytics />
        </Suspense>
        <div className="z-[999999999999999] relative">
          <div className="fixed sm:bottom-6 bottom-4 right-4">
            <LottieAnimation />
          </div>
        </div>
      </body>
    </html>
  );
}
