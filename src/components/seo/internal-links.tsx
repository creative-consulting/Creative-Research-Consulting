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
    title:
      "Leading Market Research Company in Bangladesh - Creative Consulting",
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
    href: "/en/services/capi-surveys",
    title: "CAPI Survey Services - Computer Assisted Personal Interviews",
  },
  catiServices: {
    text: "CATI services Bangladesh",
    href: "/en/services/cati-services",
    title: "Professional CATI Services - Telephone Interview Solutions",
  },
  cawiPanel: {
    text: "CAWI online panel Bangladesh",
    href: "/en/services/cawi-online-panel",
    title: "CAWI Online Panel Services - Web-based Survey Solutions",
  },

  // Industry links
  fmcgResearch: {
    text: "FMCG research Bangladesh",
    href: "/en/industries/fmcg",
    title: "FMCG Market Research Services in Bangladesh",
  },
  healthcareResearch: {
    text: "healthcare research Bangladesh",
    href: "/en/industries/healthcare",
    title: "Healthcare Market Research and Consumer Insights",
  },
};

export const getInternalLink = (
  keyword: keyof typeof KeywordLinks
): InternalLink => {
  return KeywordLinks[keyword];
};
