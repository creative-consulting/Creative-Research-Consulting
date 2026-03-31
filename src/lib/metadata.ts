// src/lib/metadata.ts
import { Metadata } from "next";
import { SupportedLang } from "@/types/lang";

type PageMeta = {
  title: string;
  description: string;
  keywords: string[];
};

type MetaData = {
  en: Record<string, PageMeta>;
  bn: Record<string, PageMeta>;
};

const metaData: MetaData = {
  en: {
    home: {
      title:
        "Leading Market Research Company in Bangladesh | Creative Consulting",
      description:
        "Top market research and social research agency in Bangladesh. CAPI, CATI, CAWI surveys, FGDs, IDIs. Fieldwork partner for international research companies.",
      keywords: [
        "market research company Bangladesh",
        "social research agency Bangladesh",
        "fieldwork partner Bangladesh",
        "CAPI surveys Bangladesh",
        "research consultancy Dhaka",
      ],
    },
    about: {
      title:
        "Trusted Market Research Company in Bangladesh | About Creative Research",
      description:
        "Learn about Creative Research, a trusted Bangladesh-based market research company with expertise in fieldwork, data collection, and insights across global markets.",
      keywords: [
        "about market research company Bangladesh",
        "social research company in Bangladesh",
        "data collection experts Asia",
        "Europe and North America",
        "Middle East",
        "Europe and North America, fieldwork team Bangladesh",
        "market research Bangladesh",
        "fieldwork agency Bangladesh",
        "CATI CAWI services",
        "qualitative research",
        "quantitative research",
        "data collection company",
        "Asia",
        "Europe and North America research partner",
      ],
    },
    services: {
      title: "Market Research Services in Bangladesh| CATI, CAWI, Qual & Quant",
      description:
        "Full-service market research agency offering CATI, CAWI, F2F, qualitative and quantitative research services with high-quality fieldwork execution.",
      keywords: [
        "CATI research services Bangladesh",
        "CAWI surveys",
        "face-to-face interviews",
        "qualitative research",
        "quantitative research",
        "survey company Bangladesh",
      ],
    },
    solutions: {
      title:
        "Market Research Service provider in Bangladesh | Fieldwork Agency in Bangladesh",
      description:
        "Explore customized market research solutions including consumer insights, brand tracking, and data-driven strategies tailored for Asia, Middle East, Africa, Europe and North America markets.",
      keywords: [
        "market research solutions",
        "consumer insights Bangladesh",
        "brand research",
        "business intelligence solutions",
        "research consulting",
      ],
    },
    industries: {
      title: "Top Market and Social Research Company in Bangladesh and Global",
      description:
        "Creative Research serves FMCG, retail, healthcare, telecom, and more with specialized market research and fieldwork solutions in Bangladesh and beyond.",
      keywords: [
        "FMCG research Bangladesh",
        "retail research",
        "healthcare research",
        "telecom research",
        "industry research services Bangladesh",
      ],
    },
    methodology: {
      title:
        "Market Research Methodology in Bangladesh| Data Collection & Fieldwork in Bangladesh",
      description:
        "Our research methodology ensures accurate data collection through CATI, CAWI, F2F and robust quality control processes for reliable insights.",
      keywords: [
        "research methodology Bangladesh",
        "data collection methods",
        "survey methodology",
        "fieldwork process",
        "quality control research",
      ],
    },
    blogs: {
      title:
        "Market Research Blog | Consumer Insights & Industry Trends Bangladesh",
      description:
        "Explore our market research blog for the latest consumer insights, industry trends, and expert analysis in Bangladesh. Stay updated with FMCG, healthcare, and financial research.",
      keywords: [
        "market research blog Bangladesh",
        "consumer insights blog",
        "industry trends Bangladesh",
        "FMCG insights Bangladesh",
        "healthcare research blog",
        "UX research blog",
        "market research articles",
      ],
    },
    faq: {
      title: "Full Research Service company in Bangladesh - FAQ",
      description:
        "Find answers to common questions about our market research services, methodologies, timelines, and data quality standards.",
      keywords: [
        "market research FAQ",
        "research services questions",
        "survey process Bangladesh",
        "data collection FAQs",
      ],
    },
    // contact: {
    //   title: "Contact with Creative Consulting",
    //   description:
    //     "Find answers to common questions about our market research services, methodologies, timelines, and data quality standards.",
    //   keywords: [
    //     "market research FAQ",
    //     "research services questions",
    //     "survey process Bangladesh",
    //     "data collection FAQs",
    //   ],
    // },
  },
  bn: {
    home: {
      title: "বাংলাদেশের শীর্ষ মার্কেট রিসার্চ কোম্পানি | ক্রিয়েটিভ কনসালটিং",
      description:
        "বাংলাদেশের নম্বর ১ মার্কেট রিসার্চ ও সামাজিক গবেষণা সংস্থা। সিএপিআই, সিএটিআই, সিএডব্লিউআই সার্ভে, এফজিডি, আইডিআই সেবা।",
      keywords: [
        "বাংলাদেশ মার্কেট রিসার্চ",
        "সামাজিক গবেষণা সংস্থা",
        "জরিপ কোম্পানি ঢাকা",
        "গবেষণা পরামর্শ",
      ],
    },
  },
};

export const generatePageMetadata = (
  lang: SupportedLang,
  page: string,
  customData?: {
    title?: string;
    description?: string;
    keywords?: string[];
    url?: string;
    images?: { url: string; width: number; height: number; alt: string }[];
  },
): Metadata => {
  const baseUrl = "https://creativeresearch.com.bd";

  // Only use 'en' or 'bn' for metaData lookup, fallback to 'en' if unsupported
  const metaLang = lang === "bn" ? "bn" : "en";
  const pageData =
    metaData[metaLang][page] || metaData.en[page] || metaData.en.home;

  return {
    title: customData?.title || pageData.title,
    description: customData?.description || pageData.description,
    keywords: customData?.keywords || pageData.keywords,

    openGraph: {
      title: customData?.title || pageData.title,
      description: customData?.description || pageData.description,
      url: customData?.url || `${baseUrl}/${lang}/${page}`,
      siteName: "Creative Consulting",
      locale: lang === "bn" ? "bn_BD" : lang === "hi" ? "hi_IN" : "en_US",
      type: "website",
      images: customData?.images || [
        {
          // url: `${baseUrl}/images/og-image-${page}.jpg`,
          url: `${baseUrl}/images/logo.png`,
          width: 1200,
          height: 630,
          alt: pageData.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: customData?.title || pageData.title,
      description: customData?.description || pageData.description,
      images: [`${baseUrl}/images/twitter-image-${page}.jpg`],
    },

    alternates: {
      canonical: `${baseUrl}/${lang}/${page}`,
      languages: {
        en: `${baseUrl}/en/${page}`,
        bn: `${baseUrl}/bn/${page}`,
        hi: `${baseUrl}/hi/${page}`,
      },
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
};
