import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { i18n } from "../i18n-config";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request: NextRequest): string | undefined {
    // Negotiator expects plain object so we need to transform headers
    const negotiatorHeaders: Record<string, string> = {};
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

    // @ts-expect-error locales are readonly
    const locales: string[] = i18n.locales;

    // Use negotiator and intl-localematcher to get best locale
    let languages: string[];
    try {
        languages = new Negotiator({ headers: negotiatorHeaders }).languages(
            locales
        );
    } catch {
        languages = [i18n.defaultLocale];
    }

    const locale = matchLocale(languages, locales, i18n.defaultLocale);
    return locale;
}

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    // Check if there should be a redirect
    const shouldHandleLocale =
        // Ignore Next.js internals and API routes
        !pathname.startsWith("/_next") &&
        !pathname.startsWith("/api") &&
        // Ignore files in public folder with extensions
        !pathname.match(/\.(.*)$/) &&
        // Ignore favicon
        pathname !== "/favicon.ico";

    if (!shouldHandleLocale) {
        return NextResponse.next();
    }

    // Check if the pathname already includes a locale
    const pathnameHasLocale = i18n.locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) {
        return NextResponse.next();
    }

    // Redirect if no locale
    const locale = getLocale(request);

    // Handle root path redirect to localized home
    if (pathname === "/") {
        return NextResponse.redirect(
            new URL(`/${locale}/home`, request.url)
        );
    }

    return NextResponse.redirect(
        new URL(
            `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
            request.url
        )
    );
}

export const config = {
    // Matcher ignoring _next, api, and all static files
    matcher: [
        "/((?!_next|api|[\\w-]+\\.\\w+).*)",
    ],
};