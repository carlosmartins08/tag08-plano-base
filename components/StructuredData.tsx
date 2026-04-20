import Script from 'next/script';
import { GOOGLE_BUSINESS, SITE_CONFIG, SITE_PROFILE, WHATSAPP_CONTACTS } from '../constants';

export default function StructuredData() {
  const organizationId = `${SITE_CONFIG.domain}/#organization`;
  const websiteId = `${SITE_CONFIG.domain}/#website`;
  const serviceId = `${SITE_CONFIG.domain}/#service`;
  const localBusinessId = `${SITE_CONFIG.domain}/#localbusiness`;
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
        publisher: {
          '@id': organizationId,
        },
      },
      {
        '@type': 'Service',
        '@id': serviceId,
        name: 'Plano Base TAG08',
        serviceType: 'Gestão de conteúdo para redes sociais',
        description:
          'Serviço de gestão estratégica de conteúdo para posicionamento de marca, crescimento de audiência e geração de vendas.',
        audience: {
          '@type': 'BusinessAudience',
          audienceType: 'Empresas que precisam de posicionamento, audiência e vendas via canais sociais',
        },
        provider: {
          '@id': organizationId,
        },
        areaServed: ['BR', 'ES', 'US', 'FR'],
      },
      {
        '@type': 'LocalBusiness',
        '@id': localBusinessId,
        name: SITE_CONFIG.siteName,
        legalName: SITE_PROFILE.legalName,
        url: SITE_CONFIG.domain,
        image: `${SITE_CONFIG.domain}${SITE_PROFILE.logoPath}`,
        logo: `${SITE_CONFIG.domain}${SITE_PROFILE.logoPath}`,
        email: SITE_PROFILE.email,
        telephone: `+${WHATSAPP_CONTACTS.br.phone}`,
        address: {
          '@type': 'PostalAddress',
          streetAddress: SITE_PROFILE.address.streetAddress,
          addressLocality: SITE_PROFILE.address.addressLocality,
          addressRegion: SITE_PROFILE.address.addressRegion,
          addressCountry: SITE_PROFILE.address.addressCountry,
        },
        hasMap: GOOGLE_BUSINESS.mapsUrl,
        sameAs: Object.values(SITE_PROFILE.socialProfiles),
        parentOrganization: {
          '@id': organizationId,
        },
      },
      {
        '@type': 'WebPage',
        '@id': webpageId,
        url: SITE_CONFIG.domain,
        name: `${SITE_CONFIG.siteName} | Gestão de Conteúdo para Redes Sociais`,
        isPartOf: {
          '@id': websiteId,
        },
        about: {
          '@id': serviceId,
        },
        inLanguage: SITE_CONFIG.locales,
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
