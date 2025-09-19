// src/lib/metadata.ts
import { Metadata } from 'next'
import { SupportedLang } from '@/types/lang'

type PageMeta = {
    title: string
    description: string
    keywords: string[]
}

type MetaData = {
    en: Record<string, PageMeta>
    bn: Record<string, PageMeta>
}

const metaData: MetaData = {
    en: {
        home: {
            title: "Leading Market Research Company in Bangladesh | Creative Consulting",
            description: "Top market research and social research agency in Bangladesh. CAPI, CATI, CAWI surveys, FGDs, IDIs. Fieldwork partner for international research companies.",
            keywords: ["market research company Bangladesh", "social research agency Bangladesh", "fieldwork partner Bangladesh", "CAPI surveys Bangladesh", "research consultancy Dhaka"],

        },
        about: {
            title: "About Us - Best Research Firm in Bangladesh | Creative Consulting",
            description: "Leading Bangladesh research agency with ESOMAR standards. Quantitative & qualitative research, nationwide surveys, opinion polls. Trusted by international clients.",
            keywords: ["best research firm Bangladesh", "ESOMAR research Bangladesh", "quantitative qualitative research", "opinion poll company Bangladesh"]
        },
        services: {
            title: "Research Services - CAPI CATI CAWI Surveys | Bangladesh Research Agency",
            description: "Complete research services in Bangladesh: CAPI, CATI, CAWI surveys, FGDs, IDIs, ethnographic research. Data collection services nationwide.",
            keywords: ["CAPI surveys Bangladesh", "CATI services Bangladesh", "CAWI online panel Bangladesh", "data collection services Bangladesh", "FGD recruitment Bangladesh"]
        },
        solutions: {
            title: "Research Solutions - Market & Social Research | Bangladesh Consultancy",
            description: "Comprehensive research solutions: market research, social research, political research, development research. Fieldwork support for international agencies.",
            keywords: ["market social research consultancy Bangladesh", "fieldwork support international research", "political research Bangladesh", "development NGO research Bangladesh"]
        },
        industries: {
            title: "Industry Research - FMCG Healthcare Financial | Bangladesh Research",
            description: "Specialized industry research in Bangladesh: FMCG, healthcare, financial inclusion, education. Consumer insights and UX research services.",
            keywords: ["FMCG research Bangladesh", "healthcare research Bangladesh", "financial inclusion research Bangladesh", "consumer insights Bangladesh", "UX research agency Bangladesh"]
        }
    },
    bn: {
        home: {
            title: "বাংলাদেশের শীর্ষ মার্কেট রিসার্চ কোম্পানি | ক্রিয়েটিভ কনসালটিং",
            description: "বাংলাদেশের নম্বর ১ মার্কেট রিসার্চ ও সামাজিক গবেষণা সংস্থা। সিএপিআই, সিএটিআই, সিএডব্লিউআই সার্ভে, এফজিডি, আইডিআই সেবা।",
            keywords: ["বাংলাদেশ মার্কেট রিসার্চ", "সামাজিক গবেষণা সংস্থা", "জরিপ কোম্পানি ঢাকা", "গবেষণা পরামর্শ"]
        }
    }
}

export const generatePageMetadata = (
    lang: SupportedLang,
    page: string,
    customData?: {
        title?: string
        description?: string
        keywords?: string[]
        url?: string
        images?: { url: string; width: number; height: number; alt: string }[]
    }
): Metadata => {
    const baseUrl = 'https://creativeresearch.com.bd'

    // Only use 'en' or 'bn' for metaData lookup, fallback to 'en' if unsupported
    const metaLang = lang === 'bn' ? 'bn' : 'en'
    const pageData = metaData[metaLang][page] || metaData.en[page] || metaData.en.home

    return {
        title: customData?.title || pageData.title,
        description: customData?.description || pageData.description,
        keywords: customData?.keywords || pageData.keywords,

        openGraph: {
            title: customData?.title || pageData.title,
            description: customData?.description || pageData.description,
            url: customData?.url || `${baseUrl}/${lang}/${page}`,
            siteName: "Creative Consulting",
            locale: lang === 'bn' ? 'bn_BD' : lang === 'hi' ? 'hi_IN' : 'en_US',
            type: 'website',
            images: customData?.images || [
                {
                    // url: `${baseUrl}/images/og-image-${page}.jpg`,
                    url: `${baseUrl}/images/logo.png`,
                    width: 1200,
                    height: 630,
                    alt: pageData.title
                }
            ]
        },

        twitter: {
            card: 'summary_large_image',
            title: customData?.title || pageData.title,
            description: customData?.description || pageData.description,
            images: [`${baseUrl}/images/twitter-image-${page}.jpg`]
        },

        alternates: {
            canonical: `${baseUrl}/${lang}/${page}`,
            languages: {
                'en': `${baseUrl}/en/${page}`,
                'bn': `${baseUrl}/bn/${page}`,
                'hi': `${baseUrl}/hi/${page}`
            }
        },

        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1
            }
        }
    }
}