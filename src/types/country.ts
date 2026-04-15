export type CountryService = {
  title: string;
  heading: string;
  list: string[];
};
type Section = {
  heading: string;
  subHeading?: string;
  paragraph?: string;
  focusText?: string;
  list?: string[];
};

export type CCSLContent = {
  hero: {
    heading: string;
    paragraph: string;
    focusText: string;
  };
  whyClientChoose: Section;
  whatWeDo: Section;
  howWeWork: Section;
  OurResearch: Section;
  QuantitativeResearch: Section;
  QualitativeResearch: Section;
  PanelsCommunities: Section;
  MobileResearch: Section;
  BiometricsNeuromarketing: Section;
  AnalyticalServices: Section;
  SocialDigitalAnalytics: Section;
  ResearchPlatformScripting: Section;
  IndustryWeServe: Section;
  EngagementModelsClients: Section;
  GetTouchBangladesh: Section;
  GetTouchOtherCountries: Section;
};
