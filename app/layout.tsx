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
  title: `${SITE_CONFIG.siteName} | Gestão de Conteúdo para Redes Sociais com Estratégia`,
  description: 'Gestão de conteúdo para redes sociais com direção estratégica, construção de audiência qualificada, posicionamento de marca e geração de vendas.',
  keywords: [
    'gestão de conteúdo',
    'gestão de redes sociais',
    'marketing de conteúdo',
    'posicionamento de marca',
    'audiência qualificada',
    'consultoria de marketing digital',
  ],
  alternates: {
    canonical: SITE_CONFIG.domain,
  },
  openGraph: {
    title: `${SITE_CONFIG.siteName} | Gestão de Conteúdo para Redes Sociais com Estratégia`,
    description: 'Direção estratégica de conteúdo para fortalecer marca, criar audiência e converter em vendas.',
    url: SITE_CONFIG.domain,
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
    title: `${SITE_CONFIG.siteName} | Gestão de Conteúdo para Redes Sociais`,
    description: 'Conteúdo estratégico para posicionamento de marca, audiência e vendas.',
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
