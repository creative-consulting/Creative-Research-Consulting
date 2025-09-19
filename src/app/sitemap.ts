// src/app/sitemap.ts
import { MetadataRoute } from "next";
import { i18n } from "../../i18n-config";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://creativeresearch.com.bd";

    const pages = [
        "home",
        "about",
        "services",
        "solutions",
        "industries",
        "methodology",
        "contact",
        "faq",
        "blogs",
    ];

    const servicePages = [
        "all",
        "concept-development-strategy",
        "concept-development",
        "demographics",
        "market-sectors",
        "media-research",
        "new-product-research",
        "public-opinion-political",
        "research-services",
        "research-solutions",
        "retail-research",
    ];

    const solutionPages = [
        "all",
        "customized-research",
        "data-analytics",
        "fieldwork",
        "market-research",
        "political-research",
        "retail-audit",
        "social-research",
        "survey-scripting",
        "telephonic-survey",
    ];

    const countries = [
        "bahrain", "bangladesh", "china", "hong-kong", "india", "indonesia",
        "iran", "iraq", "japan", "jordan", "kuwait", "lebanon", "malaysia",
        "myanmar", "nepal", "pakistan", "philippines", "qatar", "saudi-arabia",
        "singapore", "sri-lanka", "thailand", "united-arab-emirates",
    ];

    const sitemapEntries: MetadataRoute.Sitemap = [];

    i18n.locales.forEach((locale) => {
        // Main pages
        pages.forEach((page) => {
            sitemapEntries.push({
                url: `${baseUrl}/${locale}/${page}`,
                lastModified: new Date(),
                changeFrequency:
                    page === "home"
                        ? "daily"
                        : page === "blogs"
                            ? "weekly"
                            : "monthly",
                priority:
                    page === "home" ? 1 : page === "about" ? 0.9 : 0.8,
            });
        });

        // Top-level section routes (services, solutions, industries, methodology)
        ["services", "solutions", "industries", "methodology"].forEach(
            (section) => {
                sitemapEntries.push({
                    url: `${baseUrl}/${locale}/${section}`,
                    lastModified: new Date(),
                    changeFrequency: "weekly",
                    priority: 0.85,
                });
            }
        );

        // Services subpages
        servicePages.forEach((service) => {
            sitemapEntries.push({
                url: `${baseUrl}/${locale}/services/${service}`,
                lastModified: new Date(),
                changeFrequency: "monthly",
                priority: 0.7,
            });
        });

        // Solutions subpages
        solutionPages.forEach((solution) => {
            sitemapEntries.push({
                url: `${baseUrl}/${locale}/solutions/${solution}`,
                lastModified: new Date(),
                changeFrequency: "monthly",
                priority: 0.7,
            });
        });

        // Country market research pages
        countries.forEach((country) => {
            sitemapEntries.push({
                url: `${baseUrl}/${locale}/market-research/${country}`,
                lastModified: new Date(),
                changeFrequency: "monthly",
                priority: 0.6,
            });
        });

        // Example industries page
        sitemapEntries.push({
            url: `${baseUrl}/${locale}/industries/personal-care`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        });
    });

    return sitemapEntries;
}
