import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/private/', '/api/', '/_next/'],
        },
        sitemap: 'https://creativeresearch.com.bd/sitemap.xml',
    }
}