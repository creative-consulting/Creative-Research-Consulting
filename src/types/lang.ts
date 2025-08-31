// Supported Languages
export type SupportedLang = "en" | "bn" | "hi";

// NavBar Types
export interface NavItem {
  title: string;
  link: string;
  child?: NavItem[]; // Sub-navigation
  megaMenu?: boolean; // Optional: supports mega menu flag
}

export interface NavData {
  navItems: NavItem[];
  btnText: string; // Call-to-action text (e.g. Request Quote)
}

// Header Types
export interface HeaderItems {
  icon: string;
  link: string;
  title: string;
}

export interface HeaderData {
  left: HeaderItems[];
  right: HeaderItems[];
}

// Hero Section
export interface HeroData {
  videoPath: string;
  videoAlt: string;
  fallbackImage: string;
  heading: string;
  slowgan: string;
  navigation: {
    title: string;
    link: string;
  };
}

// Market Research Page Section
export interface MarketResearchType {
  description: string;
  upperText?: string[];
  features: {
    heading: string;
    allFeatures: string[];
  };
  underText?: string[];
}

// home-hero
export interface HomeAbout {
  heading: string;
  text: string;
  btnText: string;
}

// Footer Types
export interface FooterData {
  one: {
    top: {
      heading: string;
      info: {
        title: string;
        icon: string;
        link?: string;
      }[];
    };
    bottom: {
      heading: string;
      contacts: {
        name: string;
        icon: string;
        link: string;
        color: string;
      }[];
    };
  };
  two: {
    heading: string;
    links: {
      title: string;
      link: string;
    }[];
  };
  three: {
    heading: string;
    links: {
      title: string;
      link: string;
    }[];
  };
  four: {
    heading: string;
    links: {
      title: string;
      link: string;
    }[];
    logins: {
      title: string;
      link: string;
    }[];
  };
}

export interface Service {
  icon: string;
  title: string;
  text: string;
  link: string;
}

export interface ServicesSection {
  subHeading: string;
  heading: string;
  services: Service[];
}

export interface SlideData {
  image: string;
  heading: string;
  text?: string;
  btnText?: string;
  link?: string;
}

export interface HeroBannerData {
  backgroundImage: string;
  heading: string;
  text: string;
  firstButton?: {
    name: string;
    link: string;
  };
  secondButton?: {
    name: string;
    link: string;
  };
}

export type StoryItem = {
  title: string;
  link?: string;
  alt?: string;
};

export type OurStoryData = {
  image: string;
  heading: string;
  text1: string;
  text2: string;
  text3: string;
  stroyItems: StoryItem[];
};

export interface ValueItem {
  title: string;
  text: string;
}

export interface HowWeAddValueData {
  heading: string;
  text: string;
  tex2: string;
  valueItems: ValueItem[];
}
export interface FieldworkExcellenceData {
  image: string;
  heading: string;
  text1: string;
  text2: string;
  listHeading: string;
  listItems: string[];
}

export interface FeatureItem {
  title: string;
  icon: string;
}

export interface WhyChooseUsData {
  heading: string;
  features: FeatureItem[];
  text: string;
}

export interface VideoHeroData {
  videoPath: string;
  videoAlt: string;
  fallbackImage: string;
  heading: string;
  slowgan: string;
  navigation: {
    title: string;
    link: string;
  };
}

// export interface MarketResearchType {
//     description: string;
//     features: {
//         heading: string;
//         allFeatures: string[];
//     };
// };

export interface SocialResearchData {
  description: string;
  features: {
    heading: string;
    allFeatures: string[];
  };
}

export type Metric = {
  value: string;
  label: string;
};

export type Testimonial = {
  id: number;
  rating: number;
  content: string;
  author: string;
  position: string;
  company?: string;
  avatar?: string;
  date?: string;
  project?: string;
  metrics?: Metric[];
  logo?: string; // Optional company logo
};

export type Client = {
  id: number | string;
  name: string;
  logo: string;
  width?: number;
  height?: number;
  category?: string; // e.g., "Fortune 500", "Startup", "Enterprise"
  featured?: boolean; // For highlighting certain clients
};

export type CTA = {
  text: string;
  href: string;
  variant?: "primary" | "secondary" | "outline";
  icon?: boolean; // Whether to show an arrow icon
};

export type ClientsSectionProps = {
  title: string;
  subtitle?: string;
  tagline?: string; // Smaller text above the title
  clients: Client[];
  cta?: CTA;
  showTestimonials?: boolean;
  testimonials?: Testimonial[];
  marqueeSpeed?: number; // Customize animation speed
  layout?: "default" | "centered" | "minimal";
  theme?: {
    primaryColor?: string;
    secondaryColor?: string;
    textColor?: string;
  };
  className?: string; // Additional className for custom styling
};

export type HomeIndustryStat = {
  value: string;
  label: string;
};

export type HomeIndustry = {
  id: string;
  name: string;
  description: string;
  icon: string; // Name of the icon component
  stats?: HomeIndustryStat[];
};

export type HomeIndustriesSectionData = {
  title: string;
  description: string;
  industries: HomeIndustry[];
};

export type HomeMethodology = {
  id: string;
  title: string;
  description: string;
  icon: string; // Name of the icon component
  benefits: string[];
};

export type HomeBlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
};

export type HomeContactInfo = {
  email: string;
  phone: string;
  address: string;
  socialMedia?: {
    twitter?: string;
    linkedin?: string;
    facebook?: string;
  };
};

export type HomeTeamMember = {
  id: string;
  name: string;
  position: string;
  bio: string;
  expertise: string[];
  image: string;
};

export type HomeCaseStudy = {
  id: string;
  title: string;
  description: string;
  industry: string;
  results: string[];
  image: string;
};

// types/contact.ts


// Example usage in your page component:
// const contactData: ContactPageData = await getLangData(lang, "screen/contact");

import { ReactNode } from "react";

export type InputFieldType =
  | "text"
  | "email"
  | "tel"
  | "password"
  | "number"
  | "url";
export type AllFieldTypes = InputFieldType | "textarea" | "select";

export interface BaseFieldProps {
  label?: string;
  error?: string;
  wrapperClassName?: string;
  description?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  id?: string;
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
  BaseFieldProps {
  type?: InputFieldType;
  icon?: ReactNode;
  variant?: "default" | "error" | "disabled";
  customSize?: "sm" | "md" | "lg";
}

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  BaseFieldProps {
  showCharCount?: boolean;
  variant?: "default" | "error" | "disabled";
  customSize?: "sm" | "md" | "lg";
}

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement>,
  BaseFieldProps {
  options: SelectOption[];
  placeholder?: string;
  icon?: ReactNode;
  variant?: "default" | "error" | "disabled";
  customSize?: "sm" | "md" | "lg";
}

export interface ContactFormProps {
  fields: Array<{
    name: string;
    label: string;
    type: AllFieldTypes;
    placeholder?: string;
    required?: boolean;
    description?: string;
    options?: SelectOption[];
  }>;
  submitText: string;
  onSubmit: (data: Record<string, unknown>) => Promise<void>;
}

export interface ContactPageData {
  hero: {
    title: string;
    subtitle: string;
  };
  form: {
    title: string;
    submitText: string;
    fields: {
      name: string;
      label: string;
      type: "text" | "email" | "tel" | "textarea";
      placeholder: string;
      required: boolean;
    }[];
  };
  locations: {
    title: string;
    offices: Array<{
      id: number;
      name: string;
      address: string;
      link?: string;
    }>;
  };
  contactMethods: {
    title: string;
    email: string;
    phone: string;
    hours: string;
  };
  teamContacts?: {
    title: string;
    subtitle: string;
    members: Array<{
      id: string;
      name: string;
      position: string;
      email: string;
      avatar: string;
      bio: string;
    }>;
  };
  mapEmbedUrl: string;
}

export type IndustriesType = {
  description: string;
  listArea: {
    heading: string;
    list: Array<{
      title: string;
      items: string[];
    }>;
  };
  tableArea: {
    heading: string;
    table: Array<{
      "type-of-study": string;
      background: string;
      objective: string;
      "approach-&-methodology": string;
      findings: string;
      recommendations: string;
    }>;
  };
};

export interface SolutionItem {
  icon: string;
  title: string;
  description: string;
  features: string[];
  imageUrl: string;
}

export interface SolutionsGridData {
  title: string;
  description: string;
  solutions: SolutionItem[];
}

export interface ProcessStepData {
  step: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProcessSectionData {
  title: string;
  description: string;
  steps: ProcessStepData[];
  dittails?: [
    {
      heading: string;
      description: string;
      image: string;
      content: string[];
    }
  ];
}

export interface CtaSectionData {
  title: string;
  description: string;
  ctaText: string;
}

// export interface Industry {
//     id: number;
//     name: string;
//     icon: string;
//     color: string;
//     image: string;
//     overview: string;
//     keyFocusAreas: {
//         title: string;
//         items: string[];
//     }[];
// }

export interface IndustriesHeroData {
  title: string;
  subtitle: string;
  ctaText: string;
}

// export interface IndustriesGridData {
//     title: string;
//     description: string;
//     industries: Omit<Industry, 'overview' | 'keyFocusAreas'>[]; // Simplified for grid
// }

// export interface IndustryDetailsData {
//     industries: Industry[]; // Full data for details
// }

// export interface MethodologyItem {
//     icon: string;
//     title: string;
//     description: string;
// }

// export interface MethodologySectionData {
//     title: string;
//     description: string;
//     items: MethodologyItem[];
// }

// export interface IndustriesCtaData {
//     title: string;
//     description: string;
//     ctaText: string;
// }

// Add these to your existing types
export interface IndustryData {
  id: number;
  name: string;
  description: string;
  icon: string;
  color: string;
  image: string;
}

export interface MethodologyData {
  icon: string;
  title: string;
  description: string;
  list?: string[]; // Optional list of items
}

export interface IndustriesPageData {
  hero: {
    titleSequences: string[];
    subtitle: string;
    ctaText: string;
  };
  industriesGrid: {
    title: string;
    subtitle: string;
    industries: IndustryData[];
  };
  methodology: {
    title: string;
    subtitle: string;
    methods: MethodologyData[];
  };
  cta: {
    title: string;
    subtitle: string;
    ctaText: string;
  };
}

export interface ServiceData {
  id: number;
  name: string;
  description: string;
  icon: string;
  color: string;
  image: string;
}

export interface ServiceFeature {
  icon: string;
  title: string;
  description: string;
}

export interface ServicesPageData {
  hero: {
    titleSequences: string[];
    subtitle: string;
    ctaText: string;
  };
  servicesGrid: {
    title: string;
    subtitle: string;
    services: ServiceData[];
  };
  features: {
    title: string;
    subtitle: string;
    items: ServiceFeature[];
  };
  cta: {
    title: string;
    subtitle: string;
    ctaText: string;
  };
}

export interface MethodologyPageStep {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: string;
  color: string;
}
export interface MethodologyPageApproach {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: string;
  color: string;
}

export interface MethodologyPageHero {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}
export interface MethodologyProcessData {
  title: string;
  subtitle: string;
  steps: MethodologyPageStep[];
}
export interface MethodologyApproachData {
  title: string;
  subtitle: string;
  principles: MethodologyPageApproach[];
}
export interface MethodologyCTAData {
  title: string;
  subtitle: string;
  ctaText: string;
}
