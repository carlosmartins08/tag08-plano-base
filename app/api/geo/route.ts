import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

const COUNTRY_HEADER_KEYS = [
  'x-vercel-ip-country',
  'cf-ipcountry',
  'x-country-code',
  'x-geo-country',
  'x-appengine-country',
] as const;

const normalizeCountryCode = (countryCode: string | null): string | null => {
  if (!countryCode) {
    return null;
  }

  const normalized = countryCode.trim().toUpperCase();
  return /^[A-Z]{2}$/.test(normalized) ? normalized : null;
};

export async function GET() {
  const requestHeaders = await headers();

  let countryCode: string | null = null;
  let source: string | null = null;

  for (const headerKey of COUNTRY_HEADER_KEYS) {
    const normalized = normalizeCountryCode(requestHeaders.get(headerKey));
    if (normalized) {
      countryCode = normalized;
      source = headerKey;
      break;
    }
  }

  return NextResponse.json(
    {
      countryCode,
      source,
    },
    {
      headers: {
        'Cache-Control': 'no-store, max-age=0',
      },
    },
  );
}
