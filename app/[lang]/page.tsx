import { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import dynamic from 'next/dynamic';
import Hero from '../../components/Hero';
import ProblemContext from '../../components/ProblemContext';
import ValueProposition from '../../components/ValueProposition';
import { translations } from '../../translations';
import { Language } from '../../types';
import { SITE_CONFIG } from '../../constants';

// Lazy load heavy sections below the fold
const OpportunityCalculator = dynamic(() => import('../../components/OpportunityCalculator'), { ssr: true });
const IncludedPillars = dynamic(() => import('../../components/IncludedPillars'), { ssr: true });
const MonthlyCycle = dynamic(() => import('../../components/MonthlyCycle'), { ssr: true });
const GrowthRoadmap = dynamic(() => import('../../components/GrowthRoadmap'), { ssr: true });
const StrategicBenefits = dynamic(() => import('../../components/StrategicBenefits'), { ssr: true });
const Testimonials = dynamic(() => import('../../components/Testimonials'), { ssr: true });
const InvestmentAndSecurity = dynamic(() => import('../../components/InvestmentAndSecurity'), { ssr: true });
const ClientResponsibilities = dynamic(() => import('../../components/ClientResponsibilities'), { ssr: true });
const FAQ = dynamic(() => import('../../components/FAQ'), { ssr: true });
const FinalCTA = dynamic(() => import('../../components/FinalCTA'), { ssr: true });
const Footer = dynamic(() => import('../../components/Footer'), { ssr: true });

import CookieBanner from '../../components/CookieBanner';
import PrivacyModal from '../../components/PrivacyModal';
import CookiePolicyModal from '../../components/CookiePolicyModal';
import LanguageSwitcher from '../../components/LanguageSwitcher';

export async function generateMetadata(props: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const params = await props.params;
    const lang = params.lang as Language;
    const t = translations[lang];

    return {
        title: `Plano Base TAG08 | ${t.hero.title} ${t.hero.titleAccent}`,
        description: t.hero.description,
        alternates: {
            canonical: `${SITE_CONFIG.domain}/${lang}`,
            languages: {
                'pt-BR': `${SITE_CONFIG.domain}/pt`,
                'en-US': `${SITE_CONFIG.domain}/en`,
                'es-ES': `${SITE_CONFIG.domain}/es`,
                'fr-FR': `${SITE_CONFIG.domain}/fr`,
            },
        },
        openGraph: {
            title: `Plano Base TAG08 | ${t.hero.title} ${t.hero.titleAccent}`,
            description: t.hero.description,
            url: `${SITE_CONFIG.domain}/${lang}`,
            siteName: 'TAG08 Studio',
            locale: lang === 'pt' ? 'pt_BR' : lang === 'en' ? 'en_US' : lang === 'es' ? 'es_ES' : 'fr_FR',
            images: [
                {
                    url: `${SITE_CONFIG.domain}/og-plano-base.png`,
                    width: 1200,
                    height: 630,
                    alt: t.hero.heroAlt,
                }
            ]
        }
    };
}

export default async function Page(props: { params: Promise<{ lang: string }> }) {
    const params = await props.params;
    const lang = params.lang as Language;

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "TAG08",
        "url": SITE_CONFIG.domain,
        "logo": `${SITE_CONFIG.domain}/logo.png`,
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "TAG08",
                "item": SITE_CONFIG.domain
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Plano Base",
                "item": `${SITE_CONFIG.domain}/${lang}`
            }
        ]
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Marketing Digital Estratégico",
        "name": "Plano Base TAG08",
        "provider": organizationSchema,
        "description": "Marketing estratégico mensal para empresas em consolidação digital. Focado em conteúdo, tráfego pago e escala de marca.",
        "areaServed": "Worldwide",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Catálogo de Serviços de Marketing",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Gestão de Tráfego Pago e Produção de Conteúdo Premium"
                    }
                }
            ]
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <Navbar />
            <main id="main-content">
                <Hero />
                <ProblemContext />
                <div className="reveal"><OpportunityCalculator /></div>
                <div className="reveal"><ValueProposition /></div>
                <IncludedPillars />
                <div className="reveal"><MonthlyCycle /></div>
                <div className="reveal"><GrowthRoadmap /></div>
                <div className="reveal"><StrategicBenefits /></div>
                <div className="reveal"><Testimonials /></div>
                <div className="reveal"><InvestmentAndSecurity /></div>
                <div className="reveal"><ClientResponsibilities /></div>
                <div className="reveal"><FAQ /></div>
                <div className="reveal"><FinalCTA /></div>
            </main>
            <Footer />
            <CookieBanner />
            <PrivacyModal />
            <CookiePolicyModal />
            <LanguageSwitcher />
        </div>
    );
}
