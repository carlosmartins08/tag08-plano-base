import { SITE_CONFIG } from '../constants';

export default function sitemap() {
  const routes = SITE_CONFIG.locales.flatMap((locale) => [
    {
      url: `${SITE_CONFIG.domain}/${locale}`,
      lastModified: new Date(),
      changefreq: 'monthly',
      priority: 1,
    }
  ]);

  return routes;
}
