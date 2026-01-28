import { SITE_CONFIG } from '../constants';

const robotsConfig = {
  rules: [
    {
      userAgent: '*',
      allow: '/',
      disallow: ['/_next/', '/api/'],
    },
  ],
  sitemap: `${SITE_CONFIG.domain}/sitemap.xml`,
};

export default function robots() {
  return robotsConfig;
}
