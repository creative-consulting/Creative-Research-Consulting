"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

declare global {
  interface Window {
    gtag?: (
      command: "config" | "event" | "js",
      measurementId: string,
      config?: Record<string, string | number | boolean>
    ) => void;
  }
}

export const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

export const GoogleAnalytics = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!GA_MEASUREMENT_ID || !window.gtag) return;

    const url =
      pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "");

    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }, [pathname, searchParams]);

  return null;
};
export const trackSEOEvent = (
  eventName: string,
  parameters: Record<string, string | number | boolean>
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, {
      ...parameters,
      event_category: "SEO",
      event_label: window.location.pathname,
    });
  }
};

export default GoogleAnalytics;
