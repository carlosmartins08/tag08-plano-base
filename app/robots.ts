const robotsConfig = {
  rules: [
    {
      userAgent: '*',
      allow: '/',
    },
  ],
  sitemap: 'https://tag08.com.br/sitemap.xml',
};

export default function robots() {
  return robotsConfig;
}
