// Add these to your existing types in types/lang.ts

export interface GlobalApproachData {
    heading: string;
    text: string;
    image?: string;
}

export interface WhyChooseUsInternationalData {
    heading: string;
    features: {
        title: string;
        text: string;
        icon: string;
    }[];
}

export interface ReliableInsightsData {
    heading: string;
    text: string;
    services: {
        title: string;
        items: string[];
    }[];
    image?: string;
}

export interface HistoryTimelineData {
    heading: string;
    events: {
        year: string;
        title: string;
        description: string;
    }[];
}

export interface CollaborationData {
    heading: string;
    text: string;
    contactMethods: {
        type: string;
        value: string;
    }[];
    cta?: {
        text: string;
        link: string;
    };
}

export interface JoinUsData {
    heading: string;
    text: string;
    opportunities: string[];
    formFields: {
        label: string;
        type: string;
        options?: string[];
        name: string;
    }[];
    submitText: string;
}

export interface TrustedPartnerData {
    heading: string;
    subheading: string;
    features: string[];
}