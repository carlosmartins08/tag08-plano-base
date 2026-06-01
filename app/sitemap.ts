import { SITE_CONFIG } from '../constants';
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_CONFIG.domain,
      lastModified: new Date('2026-06-01T00:00:00.000Z'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_CONFIG.domain}/llms.txt`,
      lastModified: new Date('2026-06-01T00:00:00.000Z'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];
}
