import React from 'react';
import { Darker_Grotesque, Manrope } from 'next/font/google';
import '../globals.css';
import { Providers } from '../providers';
import { Metadata, Viewport } from 'next';
import Script from 'next/script';
import CustomCursor from '../../components/CustomCursor';
import { Language } from '../../types';
import { SITE_CONFIG } from '../../constants';

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
    themeColor: '#000000',
    width: 'device-width',
    initialScale: 1,
};

export const metadata: Metadata = {
    metadataBase: new URL(SITE_CONFIG.domain),
    verification: {
        google: 'google-site-verification=SEU_CODIGO_AQUI',
    },
    title: {
        default: 'TAG08 Studio | Marketing Estratégico & Design de Elite',
        template: '%s | TAG08 Studio'
    },
    description: 'Consultoria estratégica de marketing focada em escala e consolidação de marcas premium.',
    keywords: ['marketing estratégico', 'consultoria de marketing', 'design premium', 'gestão de tráfego', 'TAG08', 'escala digital'],
    authors: [{ name: 'TAG08 Studio Creations' }],
    creator: 'TAG08 Studio',
    publisher: 'TAG08 Studio',
    robots: {
        index: true,
        follow: true,
    },
};

export async function generateStaticParams() {
    return [{ lang: 'pt' }, { lang: 'en' }, { lang: 'es' }, { lang: 'fr' }];
}

export default async function LocaleLayout(props: {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}) {
    const params = await props.params;
    const { lang } = params;
    const { children } = props;

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
        <html lang={lang} className={`${manrope.variable} ${darkerGrotesque.variable} scroll-smooth`}>
            <head>
                <link rel="preconnect" href="https://www.googletagmanager.com" />
                <link rel="preconnect" href="https://www.google-analytics.com" />
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=AW-823454219"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-823454219');
            gtag('config', '245293286');
          `}
                </Script>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className="bg-white text-slate-900 antialiased font-sans">
                <Providers initialLanguage={lang as Language}>
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
