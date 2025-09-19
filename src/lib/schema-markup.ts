// lib/schema-markup.ts
export const generateOrganizationSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Creative Consulting",
    "alternateName": "Creative Consulting Bangladesh",
    "description": "Leading market research and social research agency in Bangladesh providing CAPI, CATI, CAWI surveys, FGDs, IDIs and comprehensive data collection services",
    "url": "https://creativeresearch.com.bd",
    "logo": "https://creativeresearch.com.bd/logo.png",
    "image": "https://creativeresearch.com.bd/images/creative-consulting-office.jpg",
    "telephone": "+880-2-XXXXXXX",
    "email": "info@creativeresearch.com.bd",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Your Office Address",
        "addressLocality": "Dhaka",
        "addressRegion": "Dhaka Division",
        "postalCode": "1000",
        "addressCountry": "BD"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 23.8103,
        "longitude": 90.4125
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "foundingDate": "2010",
    "numberOfEmployees": "50-100",
    "areaServed": {
        "@type": "Country",
        "name": "Bangladesh"
    },
    "serviceArea": {
        "@type": "Country",
        "name": "Bangladesh"
    },
    "knowsAbout": [
        "Market Research",
        "Social Research",
        "CAPI Surveys",
        "CATI Services",
        "CAWI Online Panels",
        "Focus Group Discussions",
        "In-depth Interviews",
        "Data Collection",
        "Opinion Polls",
        "Consumer Research"
    ],
    "sameAs": [
        "https://facebook.com/yourpage",
        "https://linkedin.com/company/yourcompany",
        "https://twitter.com/yourhandle"
    ]
})

export const generateLocalBusinessSchema = () => ({
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Creative Consulting - Market Research Company",
    "description": "Best research firm in Bangladesh offering market research, social research, opinion polls, CAPI/CATI/CAWI surveys, FGDs, IDIs across all 64 districts",
    "url": "https://creativeresearch.com.bd",
    "telephone": "+880-2-XXXXXXX",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Your Office Address",
        "addressLocality": "Dhaka",
        "addressRegion": "Dhaka Division",
        "postalCode": "1000",
        "addressCountry": "BD"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 23.8103,
        "longitude": 90.4125
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "$",
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "50"
    },
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Research Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "CAPI Surveys Bangladesh",
                    "description": "Computer Assisted Personal Interview surveys nationwide"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "CATI Services Bangladesh",
                    "description": "Computer Assisted Telephone Interview services"
                }
            }
        ]
    }
})

export const generateServiceSchema = (service: { title: string; text: string }) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.text,
    "provider": {
        "@type": "Organization",
        "name": "Creative Consulting",
        "url": "https://creativeresearch.com.bd"
    },
    "areaServed": {
        "@type": "Country",
        "name": "Bangladesh"
    },
    "serviceType": "Market Research",
    "category": "Business Services"
})

export const generateBreadcrumbSchema = (breadcrumbs: Array<{ name: string, url: string }>) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((breadcrumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": breadcrumb.name,
        "item": breadcrumb.url
    }))
})

export const generateFAQSchema = (faqs: Array<{ question: string, answer: string }>) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
        }
    }))
})

export const generateArticleSchema = (article: { title: string; excerpt: string; image: string; publishDate: string; modifiedDate: string; url: string }) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt,
    "image": article.image,
    "author": {
        "@type": "Organization",
        "name": "Creative Consulting"
    },
    "publisher": {
        "@type": "Organization",
        "name": "Creative Consulting",
        "logo": {
            "@type": "ImageObject",
            "url": "https://creativeresearch.com.bd/logo.png"
        }
    },
    "datePublished": article.publishDate,
    "dateModified": article.modifiedDate,
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": article.url
    }
})

export const generateWebsiteSchema = () => ({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Creative Consulting - Market Research Company Bangladesh",
    "alternateName": "Creative Consulting Bangladesh",
    "url": "https://creativeresearch.com.bd",
    "potentialAction": {
        "@type": "SearchAction",
        "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://creativeresearch.com.bd/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
    },
    "sameAs": [
        // "https://facebook.com/creativeresearch",
        // "https://linkedin.com/company/creativeresearch"
    ]
})