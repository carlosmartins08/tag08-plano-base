import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { Metadata, Viewport } from 'next';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://tag08.com.br'),
  title: {
    default: 'TAG08 Studio | Marketing Estratégico & Design de Elite',
    template: '%s | TAG08 Studio'
  },
  description: 'Consultoria estratégica de marketing focada em escala e consolidação de marcas premium. Transformamos operações em máquinas de vendas.',
  keywords: ['marketing estratégico', 'consultoria de marketing', 'design premium', 'gestão de tráfego', 'TAG08', 'escala digital'],
  authors: [{ name: 'TAG08 Studio Creations' }],
  creator: 'TAG08 Studio',
  publisher: 'TAG08 Studio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://tag08.com.br',
    siteName: 'TAG08 Studio',
    title: 'TAG08 Studio | Marketing Estratégico',
    description: 'Transformamos operações de marketing em máquinas de escala.',
    images: [
      {
        url: '/og-image.png', // Certifique-se de que esta imagem exista na pasta public
        width: 1200,
        height: 630,
        alt: 'TAG08 Studio - Marketing Estratégico',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TAG08 Studio | Marketing Estratégico',
    description: 'Estratégia real para marcas que buscam o topo.',
    creator: '@TAG08_com_br',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TAG08",
    "url": "https://tag08.com.br",
    "logo": "https://tag08.com.br/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-83-99886-8882",
      "contactType": "customer service",
      "areaServed": "BR",
      "availableLanguage": ["Portuguese", "English", "Spanish"]
    },
    "sameAs": [
      "https://www.facebook.com/tag08.com.br",
      "https://www.linkedin.com/company/tag08-com-br/",
      "http://instagram.com/tag08.com.br",
      "https://twitter.com/TAG08_com_br"
    ]
  };

  return (
    <html lang="pt-BR" className={`${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-slate-900 antialiased font-sans">
        <Providers>
          <div id="root">{children}</div>
        </Providers>
      </body>
    </html>
  );
}