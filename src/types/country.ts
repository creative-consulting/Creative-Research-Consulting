// // types/ccsl-research.ts
// export interface CCSLResearchService {
//     title: string;
//     description: string;
//     methods?: string[];
//     applications?: string[];
//     deliverables?: string[];
//     icon?: string;
// }

// export interface CCSLResearchSection {
//     title: string;
//     subtitle?: string;
//     services: CCSLResearchService[];
// }

// export interface CCSLCountryData {
//     name: string;
//     coverage: string;
//     languages: string;
//     qcProcess: string;
//     fieldOffices: string[];
//     imageUrl?: string;
// }

// export interface CCSLResearchPageData {
//     hero: {
//         title: string;
//         subtitle: string;
//         description: string;
//         standards: string;
//         imageUrl?: string;
//     };
//     whyChooseUs: {
//         title: string;
//         points: {
//             title: string;
//             description: string;
//             icon: string;
//         }[];
//     };
//     whatWeDo: {
//         title: string;
//         services: {
//             title: string;
//             description?: string;
//             items?: string[];
//         }[];
//     };
//     howWeWork: {
//         title: string;
//         steps: {
//             step: string;
//             title: string;
//             description: string;
//         }[];
//     };
//     researchSolutions: {
//         title: string;
//         services: string[];
//     };
//     quantitativeResearch: CCSLResearchSection;
//     qualitativeResearch: CCSLResearchSection;
//     dataCollection: {
//         title: string;
//         coverage: string;
//         languages: string;
//         qcCompliance: string;
//         outputs: string[];
//     };
//     panelsCommunities: {
//         title: string;
//         weHandle: string[];
//         youGet: string[];
//     };
//     mobileResearch: {
//         title: string;
//         useCases: string[];
//         toolkit: string[];
//         deliverables: string[];
//     };
//     biometrics: {
//         title: string;
//         description: string;
//         methods: string[];
//         outputs: string[];
//     };
//     analyticalServices: {
//         title: string;
//         techniques: string[];
//         visualization: string[];
//         deliverables: string[];
//     };
//     socialDigitalAnalytics: {
//         title: string;
//         description: string;
//         useCases: string[];
//     };
//     researchPlatform: {
//         title: string;
//         platforms: string[];
//         security: string[];
//     };
//     industries: {
//         title: string;
//         list: string[];
//     };
//     engagementModels: {
//         title: string;
//         models: string[];
//     };
//     contact: {
//         title: string;
//         emails: {
//             region: string;
//             address: string;
//         }[];
//     };
//     countryData: CCSLCountryData;
// }

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
