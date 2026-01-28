const SITE_URL = 'https://tag08.com.br';

export default function sitemap() {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changefreq: 'monthly',
      priority: 1,
    },
  ];
}
