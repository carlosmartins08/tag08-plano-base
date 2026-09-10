import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LanguageProvider } from '../../contexts/LanguageContext';
import { Language } from '../../types';
import { SITE_CONFIG } from '../../constants';

const supportedLanguages: Language[] = ['pt', 'en', 'es', 'fr'];

const metadataByLanguage: Record<Language, { title: string; description: string; locale: string }> = {
  pt: {
    title: 'Plano Base TAG08 | Gestão de Redes Sociais Estratégica',
    description: 'Planejamento editorial, produção de conteúdo, publicação e acompanhamento mensal para negócios com oferta ativa que precisam de presença digital mais consistente.',
    locale: 'pt_BR',
  },
  en: {
    title: 'TAG08 Base Plan | Strategic Social Media Management',
    description: 'Editorial planning, content production, publishing, and monthly follow-up for active businesses seeking a more consistent digital presence.',
    locale: 'en_US',
  },
  es: {
    title: 'Plan Base TAG08 | Gestión Estratégica de Redes Sociales',
    description: 'Planificación editorial, producción de contenido, publicación y seguimiento mensual para negocios activos que necesitan una presencia digital más consistente.',
    locale: 'es_ES',
  },
  fr: {
    title: 'Plan Base TAG08 | Gestion Stratégique des Réseaux Sociaux',
    description: 'Planification éditoriale, production de contenu, publication et suivi mensuel pour les entreprises actives qui recherchent une présence numérique plus cohérente.',
    locale: 'fr_FR',
  },
};

const localeByLanguage: Record<Language, string> = { pt: 'pt-BR', en: 'en-US', es: 'es-ES', fr: 'fr-FR' };

export function generateStaticParams() {
  return supportedLanguages.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!supportedLanguages.includes(lang as Language)) return {};

  const language = lang as Language;
  const item = metadataByLanguage[language];
  const canonical = `/${language}`;

  return {
    title: item.title,
    description: item.description,
    alternates: {
      canonical,
      languages: {
        'pt-BR': '/pt',
        'en-US': '/en',
        'es-ES': '/es',
        'fr-FR': '/fr',
        'x-default': '/pt',
      },
    },
    openGraph: {
      title: item.title,
      description: item.description,
      url: `${SITE_CONFIG.domain}${canonical}`,
      siteName: SITE_CONFIG.siteName,
      locale: item.locale,
      type: 'website',
    },
  };
}

export default async function LanguageLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!supportedLanguages.includes(lang as Language)) notFound();

  return <LanguageProvider initialLanguage={lang as Language}>{children}</LanguageProvider>;
}
