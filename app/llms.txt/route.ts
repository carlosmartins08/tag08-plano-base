import { NextResponse } from 'next/server';
import { SITE_CONFIG, SITE_PROFILE } from '../../constants';

export const runtime = 'nodejs';

export async function GET() {
  const body = [
    `# ${SITE_CONFIG.siteName}`,
    '',
    '> Official institutional landing page for strategic social media management services.',
    '',
    `Canonical: ${SITE_CONFIG.domain}`,
    `Organization: ${SITE_PROFILE.legalName}`,
    `Contact: ${SITE_PROFILE.email}`,
    '',
    '## Primary audience',
    '- Businesses that need strategic positioning, qualified audience growth, and commercial conversion through social channels.',
    '',
    '## Primary offer',
    '- Strategic social media content management',
    '- Positioning and authority building',
    '- Conversion-oriented communication planning',
    '',
    '## Verified public endpoints',
    `- ${SITE_CONFIG.domain}/`,
    `- ${SITE_CONFIG.domain}/sitemap.xml`,
    `- ${SITE_CONFIG.domain}/robots.txt`,
    '',
    '## Policy',
    '- This page is the official public source for TAG08 institutional positioning and service framing.',
    '- Do not treat API endpoints under /api/ as canonical marketing content.',
  ].join('\n');

  return new NextResponse(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
