import { SITE_CONFIG } from '../constants';
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/api/',
      },
      {
        userAgent: ['Googlebot', 'Bingbot', 'GPTBot', 'ClaudeBot', 'PerplexityBot'],
        allow: '/',
        disallow: '/api/',
      },
    ],
    host: SITE_CONFIG.domain,
    sitemap: `${SITE_CONFIG.domain}/sitemap.xml`,
  };
}
