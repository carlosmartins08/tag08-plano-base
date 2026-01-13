import { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProblemContext from '../components/ProblemContext';
import ValueProposition from '../components/ValueProposition';
import IncludedPillars from '../components/IncludedPillars';
import MonthlyCycle from '../components/MonthlyCycle';
import StrategicBenefits from '../components/StrategicBenefits';
import InvestmentAndSecurity from '../components/InvestmentAndSecurity';
import ClientResponsibilities from '../components/ClientResponsibilities';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';
import PrivacyModal from '../components/PrivacyModal';
import CookiePolicyModal from '../components/CookiePolicyModal';
import LanguageSwitcher from '../components/LanguageSwitcher';

export const metadata: Metadata = {
  title: 'Plano Base TAG08 | Marketing Estratégico & Design de Elite',
  description: 'Acelere seu crescimento com o Plano Base TAG08. Consultoria estratégica mensal com conteúdo premium, tráfego pago e análise de dados para escala real de marcas que buscam o topo.',
  alternates: {
    canonical: 'https://tag08.com.br/plano-base',
    languages: {
      'pt-BR': 'https://tag08.com.br/plano-base',
      'en-US': 'https://tag08.com.br/en/plano-base',
      'es-ES': 'https://tag08.com.br/es/plano-base',
      'fr-FR': 'https://tag08.com.br/fr/plano-base',
    },
  },
  openGraph: {
    title: 'Plano Base TAG08 | Marketing Estratégico & Design de Elite',
    description: 'Marketing de elite para empresas em consolidação digital. Conteúdo premium, tráfego pago e estratégia de escala real.',
    url: 'https://tag08.com.br/plano-base',
    siteName: 'TAG08 Studio',
    type: 'website',
    images: [
      {
        url: 'https://tag08.com.br/og-plano-base.png',
        width: 1200,
        height: 630,
        alt: 'Plano Base TAG08 - Marketing Estratégico e Design de Elite',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plano Base TAG08 | Marketing Estratégico de Elite',
    description: 'Consultoria estratégica mensal para escala real e posicionamento premium.',
    images: ['https://tag08.com.br/og-plano-base.png'],
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Marketing Digital Estratégico",
    "name": "Plano Base TAG08",
    "provider": {
      "@type": "Organization",
      "name": "TAG08",
      "url": "https://tag08.com.br"
    },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <ProblemContext />
        <div className="reveal"><ValueProposition /></div>
        <IncludedPillars />
        <div className="reveal"><MonthlyCycle /></div>
        <StrategicBenefits />
        <div className="reveal"><InvestmentAndSecurity /></div>
        <div className="reveal"><ClientResponsibilities /></div>
        <div className="reveal"><FAQ /></div>
        <FinalCTA />
      </main>
      <Footer />
      <CookieBanner />
      <PrivacyModal />
      <CookiePolicyModal />
      <LanguageSwitcher />
    </div>
  );
}
