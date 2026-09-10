import { SITE_CONFIG } from '../constants';
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-09-10T00:00:00.000Z');

  return [
    ...['pt', 'en', 'es', 'fr'].map((lang) => ({
      url: `${SITE_CONFIG.domain}/${lang}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: lang === 'pt' ? 1 : 0.8,
    })),
    {
      url: `${SITE_CONFIG.domain}/llms.txt`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];
}
