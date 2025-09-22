interface InternalLink {
  text: string;
  href: string;
  title?: string;
}

export const KeywordLinks = {
  // Primary keyword links
  marketResearch: {
    text: "market research company in Bangladesh",
    href: "/en/home",
    title: "Market Research Company in Bangladesh - Creative Consulting",
    // "Leading Market Research Company in Bangladesh - Creative Consulting",
  },
  socialResearch: {
    text: "social research agency in Bangladesh",
    href: "/en/about",
    title: "Top Social Research Agency in Bangladesh",
  },
  fieldworkPartner: {
    text: "fieldwork partner for research",
    href: "/en/services",
    title: "Reliable Fieldwork Partner for International Research Companies",
  },

  // Service-specific links
  capiSurveys: {
    text: "CAPI surveys in Bangladesh",
    href: "/en/home",
    title: "CAPI Survey Services - Computer Assisted Personal Interviews",
  },
  catiServices: {
    text: "CATI services Bangladesh",
    href: "/en/home",
    title: "Professional CATI Services - Telephone Interview Solutions",
  },
  cawiPanel: {
    text: "CAWI online panel Bangladesh",
    href: "/en/home",
    title: "CAWI Online Panel Services - Web-based Survey Solutions",
  },

  // Industry links
  fmcgResearch: {
    text: "FMCG research Bangladesh",
    href: "/en/industries",
    title: "FMCG Market Research Services in Bangladesh",
  },
  healthcareResearch: {
    text: "healthcare research Bangladesh",
    href: "/en/industries",
    title: "Healthcare Market Research and Consumer Insights",
  },
};

export const getInternalLink = (
  keyword: keyof typeof KeywordLinks
): InternalLink => {
  return KeywordLinks[keyword];
};
