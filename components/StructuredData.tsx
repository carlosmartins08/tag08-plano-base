import Script from 'next/script';
import { SITE_CONFIG, SITE_PROFILE } from '../constants';

export default function StructuredData() {
  const organizationId = `${SITE_CONFIG.domain}/#organization`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': organizationId,
        name: SITE_PROFILE.legalName,
        alternateName: SITE_CONFIG.siteName,
        url: SITE_CONFIG.domain,
        logo: `${SITE_CONFIG.domain}${SITE_PROFILE.logoPath}`,
        image: `${SITE_CONFIG.domain}${SITE_PROFILE.logoPath}`,
        email: SITE_PROFILE.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: SITE_PROFILE.address.streetAddress,
          addressLocality: SITE_PROFILE.address.addressLocality,
          addressRegion: SITE_PROFILE.address.addressRegion,
          addressCountry: SITE_PROFILE.address.addressCountry,
        },
        sameAs: Object.values(SITE_PROFILE.socialProfiles),
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'customer support',
            email: SITE_PROFILE.email,
            availableLanguage: SITE_CONFIG.locales,
            areaServed: ['BR', 'ES', 'US', 'FR'],
          },
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_CONFIG.domain}/#website`,
        name: SITE_CONFIG.siteName,
        url: SITE_CONFIG.domain,
        publisher: {
          '@id': organizationId,
        },
      },
      {
        '@type': 'Service',
        '@id': `${SITE_CONFIG.domain}/#service`,
        name: 'Plano Base TAG08',
        serviceType: 'Marketing Digital Estrategico',
        provider: {
          '@id': organizationId,
        },
        areaServed: ['BR', 'ES', 'US', 'FR'],
      },
    ],
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
