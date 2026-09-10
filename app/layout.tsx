import type { Metadata, Viewport } from 'next';
import { Darker_Grotesque, Manrope } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import CustomCursor from '../components/CustomCursor';
import StructuredData from '../components/StructuredData';
import { SITE_CONFIG, SITE_PROFILE } from '../constants';

const darkerGrotesque = Darker_Grotesque({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-darker-grotesque',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.domain),
  title: 'Plano Base TAG08 | Gestão de Redes Sociais Estratégica',
  description: 'Planejamento editorial, produção de conteúdo, publicação e acompanhamento mensal para negócios com oferta ativa que precisam de presença digital mais consistente.',
  applicationName: SITE_CONFIG.siteName,
  category: 'marketing',
  authors: [{ name: SITE_PROFILE.legalName }],
  creator: SITE_PROFILE.legalName,
  publisher: SITE_PROFILE.legalName,
  keywords: [
    'gestão de conteúdo',
    'gestão de redes sociais',
    'marketing de conteúdo',
    'posicionamento de marca',
    'audiência qualificada',
    'consultoria de marketing digital',
  ],
  alternates: {
    canonical: '/pt',
    languages: {
      'pt-BR': '/pt',
      'en-US': '/en',
      'es-ES': '/es',
      'fr-FR': '/fr',
      'x-default': '/pt',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'Plano Base TAG08 | Gestão de Redes Sociais Estratégica',
    description: 'Planejamento editorial e produção de conteúdo para negócios com oferta ativa que precisam de uma rotina mensal mais consistente.',
    url: `${SITE_CONFIG.domain}/pt`,
    siteName: SITE_CONFIG.siteName,
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: `${SITE_CONFIG.domain}${SITE_PROFILE.logoPath}`,
        width: 512,
        height: 512,
        alt: SITE_CONFIG.siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plano Base TAG08 | Gestão de Redes Sociais Estratégica',
    description: 'Planejamento editorial e produção de conteúdo em uma rotina mensal coordenada.',
    images: [`${SITE_CONFIG.domain}${SITE_PROFILE.logoPath}`],
  },
  icons: {
    icon: SITE_PROFILE.logoPath,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" className={`${manrope.variable} ${darkerGrotesque.variable} scroll-smooth`}>
      <body className="bg-brand-black text-white antialiased font-sans">
        <Providers>
          <StructuredData />
          <CustomCursor />
          <a
            href="#main-content"
            className="sr-only focus-visible:inline-flex focus-visible:items-center focus-visible:gap-2 focus-visible:absolute focus-visible:top-4 focus-visible:left-4 focus-visible:z-[999] focus-visible:bg-white focus-visible:text-brand-black focus-visible:px-4 focus-visible:py-2 focus-visible:rounded-full focus-visible:shadow-lg"
          >
            Pular para o conteúdo
          </a>
          <div id="root">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
