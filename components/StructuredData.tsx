import Script from 'next/script';
import { SITE_CONFIG, SITE_PROFILE, WHATSAPP_CONTACTS } from '../constants';

export default function StructuredData() {
  const organizationId = `${SITE_CONFIG.domain}/#organization`;
  const websiteId = `${SITE_CONFIG.domain}/#website`;
  const serviceId = `${SITE_CONFIG.domain}/#service`;
  const webpageId = `${SITE_CONFIG.domain}/#webpage`;

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
            telephone: `+${WHATSAPP_CONTACTS.br.phone}`,
            url: `https://wa.me/${WHATSAPP_CONTACTS.br.phone}`,
            email: SITE_PROFILE.email,
            availableLanguage: SITE_CONFIG.locales,
            areaServed: ['BR', 'ES', 'US', 'FR'],
          },
        ],
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        name: SITE_CONFIG.siteName,
        url: SITE_CONFIG.domain,
        inLanguage: SITE_CONFIG.locales,
        publisher: {
          '@id': organizationId,
        },
      },
      {
        '@type': 'Service',
        '@id': serviceId,
        name: 'Plano Base TAG08',
        serviceType: 'Gestão Estratégica de Redes Sociais',
        description:
          'Estrutura recorrente de planejamento editorial e produção de conteúdo para negócios com oferta ativa que precisam organizar a presença digital com mais consistência.',
        audience: {
          '@type': 'BusinessAudience',
          audienceType: 'Negócios com oferta ativa que precisam de uma rotina recorrente de comunicação',
        },
        provider: {
          '@id': organizationId,
        },
        offers: {
          '@type': 'Offer',
          url: `${SITE_CONFIG.domain}/pt`,
          category: 'Gestão de Redes Sociais',
        },
      },
      {
        '@type': 'WebPage',
        '@id': webpageId,
        url: SITE_CONFIG.domain,
        name: `${SITE_CONFIG.siteName} | Strategic Social Media Content Management`,
        isPartOf: {
          '@id': websiteId,
        },
        about: {
          '@id': serviceId,
        },
        inLanguage: SITE_CONFIG.locales,
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: `${SITE_CONFIG.domain}${SITE_PROFILE.logoPath}`,
        },
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
