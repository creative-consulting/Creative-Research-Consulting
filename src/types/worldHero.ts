export interface HeroIndicator {
    value: string;
    label: string;
}

export interface HeroButtonTexts {
    primary: string;
    secondary: string;
}

export interface HeroData {
    title: string;
    titleSequences: (string | number)[];
    descriptionSequences: (string | number)[];
    indicators: HeroIndicator[];
    buttonTexts: HeroButtonTexts;
}

