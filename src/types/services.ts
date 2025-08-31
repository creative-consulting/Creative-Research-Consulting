export interface ServicesHeroData {
    titleSequences: string[];
    subtitle: string;
    ctaText: string;
}


export interface ServiceData {
    id: number;
    name: string;
    description: string;
    icon: string;
    color: string;
    image: string;
}


export interface ServicesGridData {
    title: string;
    subtitle: string;
    services: ServiceData[];
};
export interface ServicesGridData {
    title: string;
    subtitle: string;
    services: ServiceData[];
};
export interface ServiceFeature {
    icon: string;
    title: string;
    description: string;
}
export interface ServicesFeaturesData {
    title: string;
    subtitle: string;
    items: ServiceFeature[];
};
export interface ServicesCtaData {
    title: string;
    subtitle: string;
    ctaText: string;
};