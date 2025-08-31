export interface ContactFormField {
    name: string;
    label: string;
    type: "select" | "textarea" | "text" | "tel" | "email";
    placeholder?: string;
    required?: boolean;
    options?: { value: string; label: string; link?: string }[];
    maxLength?: number;
}

export interface ContactFormField {
    name: string;
    label: string;
    type: "select" | "textarea" | "text" | "tel" | "email";
    placeholder?: string;
    required?: boolean;
    options?: { value: string; label: string; link?: string }[];
    maxLength?: number;
}

export interface HeroButton {
    name: string;
    link: string;
}

export interface ContactPageData {
    hero: {
        title: string;
        subtitle: string;
        buttons: HeroButton[];

    };
    importantText: string;
    form: {
        title: string;
        submitText?: string;
        fields?: Array<ContactFormField>;
    };
    locations: {
        title: string;
        offices: Array<{
            id: string;
            name: string;
            address: string;
            link?: string;
        }>;
    };
    contactMethods: {
        heading: string;
        pragraph: string;
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
    formFields: ContactFormField[];
    mapEmbedUrl: string;
}