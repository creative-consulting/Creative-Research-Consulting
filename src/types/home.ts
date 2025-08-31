// types/home.ts
// import { SupportedLang } from "@/types/lang";

export interface HeroSectionData {
    title: string;
    subtitle: string;
    ctaButton: string;
    stats: Array<{
        value: string;
        label: string;
    }>;
}

export interface ServiceCardData {
    icon: string;
    title: string;
    description: string;
}

export interface ServicesSectionData {
    title: string;
    subtitle: string;
    services: ServiceCardData[];
}

export interface TestimonialData {
    name: string;
    position: string;
    company: string;
    content: string;
    avatar: string;
}

export interface TestimonialsSectionData {
    title: string;
    testimonials: TestimonialData[];
}

export interface CaseStudyData {
    title: string;
    industry: string;
    challenge: string;
    solution: string;
    result: string;
    image: string;
}

export interface CaseStudiesSectionData {
    title: string;
    subtitle: string;
    caseStudies: CaseStudyData[];
}

export interface CtaSectionData {
    title: string;
    subtitle: string;
    ctaButton: string;
}


export type ResearchMethodologyData = {
    title: string;
    description: string;
    methods: {
        name: string;
        description: string;
        icon: string;
    }[];
    sections: {
        title: string;
        content: string;
        image?: string;
        subsections?: {
            title: string;
            content: string;
        }[];
    }[];
    specialServices: {
        title: string;
        services: {
            name: string;
            description: string;
        }[];
    };
};


// types/lang.ts
export interface DataCollectionContentItem {
    heading: string;
    content?: DataCollectionContentItem[];
    description?: string;
}

export interface DataCollectionCard {
    id: string;
    title: string;
    description: string;
    description2?: string;
    icon: string;
    image: string;
    content: DataCollectionContentItem[];
}

export interface DataCollectionExpertTeam {
    heading: string;
    image: string;
    description: string[];
}

export interface DataCollectionSection {
    heading: string;
    description: string;
    methods: string[];
    cards: DataCollectionCard[];
    expertTeam: DataCollectionExpertTeam;
}

// types/research-clinics.ts
export interface ResearchClinicItem {
    id: string;
    title: string;
    description: string;
    icon: string;
    features: string[];
    methodology: {
        title: string;
        items: string[];
    };
    benefits: {
        title: string;
        items: string[];
    };
    image: string;
}

export interface ResearchClinicsSection {
    heading: string;
    subheading: string;
    clinics: ResearchClinicItem[];
}