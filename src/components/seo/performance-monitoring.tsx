"use client";

import { useEffect } from "react";
import { trackSEOEvent } from "../analytics/google-analytics";
import type { Metric } from "web-vitals";

export const SEOPerformanceMonitoring = () => {
  useEffect(() => {
    // Track Core Web Vitals for SEO
    if (typeof window !== "undefined") {
      import("web-vitals").then(({ getCLS, getLCP }) => {
        getCLS((metric: Metric) => {
          trackSEOEvent("core_web_vitals", {
            metric_name: "CLS",
            value: metric.value,
          });
        });

        getLCP((metric: Metric) => {
          trackSEOEvent("core_web_vitals", {
            metric_name: "LCP",
            value: metric.value,
          });
        });
      });
    }
  }, []);

  return null;
};

// Conversion tracking for SEO
export const trackSEOConversion = (conversionType: string, value?: number) => {
  trackSEOEvent("seo_conversion", {
    conversion_type: conversionType,
    value: value || 1,
    currency: "BDT",
  });
};

// Track form submissions from organic traffic
export const trackOrganicFormSubmission = (formType: string) => {
  const referrer = document.referrer;
  const isOrganic = referrer.includes("google") || referrer.includes("bing");

  if (isOrganic) {
    trackSEOEvent("organic_form_submission", {
      form_type: formType,
      traffic_source: "organic",
    });
  }
};
