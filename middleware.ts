import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['pt', 'en', 'es', 'fr'];
const defaultLocale = 'pt';

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    // Check if the pathname is missing a locale
    const pathnameIsMissingLocale = locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    if (pathnameIsMissingLocale) {
        // If it's the root, or any path without locale, redirect to the default locale
        // But exclude files in public folder (like images, robots.txt, etc)
        // The matcher already handles most of this, but it's good to be safe.
        return NextResponse.redirect(
            new URL(`/${defaultLocale}${pathname}${request.nextUrl.search}`, request.url)
        );
    }
}

export const config = {
    matcher: [
        // Skip all internal paths (_next) and public files
        '/((?!_next|api|static|.*\\..*).*)',
    ],
};
