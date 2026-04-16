import dynamicImport from 'next/dynamic';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProblemContext from '../components/ProblemContext';
import ValueProposition from '../components/ValueProposition';
import CookieBanner from '../components/CookieBanner';
import PrivacyModal from '../components/PrivacyModal';
import CookiePolicyModal from '../components/CookiePolicyModal';
import LanguageSwitcher from '../components/LanguageSwitcher';

const OpportunityCalculator = dynamicImport(() => import('../components/OpportunityCalculator'), { ssr: true });
const IncludedPillars = dynamicImport(() => import('../components/IncludedPillars'), { ssr: true });
const MonthlyCycle = dynamicImport(() => import('../components/MonthlyCycle'), { ssr: true });
const GrowthRoadmap = dynamicImport(() => import('../components/GrowthRoadmap'), { ssr: true });
const StrategicBenefits = dynamicImport(() => import('../components/StrategicBenefits'), { ssr: true });
const VideoGallery = dynamicImport(() => import('../components/VideoGallery'), { ssr: true });
const TeamShowcase = dynamicImport(() => import('../components/TeamShowcase'), { ssr: true });
const Testimonials = dynamicImport(() => import('../components/Testimonials'), { ssr: true });
const InvestmentAndSecurity = dynamicImport(() => import('../components/InvestmentAndSecurity'), { ssr: true });
const ClientResponsibilities = dynamicImport(() => import('../components/ClientResponsibilities'), { ssr: true });
const FAQ = dynamicImport(() => import('../components/FAQ'), { ssr: true });
const FinalCTA = dynamicImport(() => import('../components/FinalCTA'), { ssr: true });
const Footer = dynamicImport(() => import('../components/Footer'), { ssr: true });

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main id="main-content">
        <Hero />
        <ProblemContext />
        <div className="reveal">
          <OpportunityCalculator />
        </div>
        <div className="reveal">
          <ValueProposition />
        </div>
        <IncludedPillars />
        <div className="reveal">
          <MonthlyCycle />
        </div>
        <div className="reveal">
          <GrowthRoadmap />
        </div>
        <div className="reveal">
          <StrategicBenefits />
        </div>
        <div className="reveal">
          <VideoGallery />
        </div>
        <div className="reveal">
          <TeamShowcase />
        </div>
        <div className="reveal">
          <Testimonials />
        </div>
        <div className="reveal">
          <InvestmentAndSecurity />
        </div>
        <div className="reveal">
          <ClientResponsibilities />
        </div>
        <div className="reveal">
          <FAQ />
        </div>
        <div className="reveal">
          <FinalCTA />
        </div>
      </main>
      <Footer />
      <CookieBanner />
      <PrivacyModal />
      <CookiePolicyModal />
      <LanguageSwitcher />
    </div>
  );
}
