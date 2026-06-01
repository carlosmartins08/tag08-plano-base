import dynamicImport from 'next/dynamic';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProblemContext from '../components/ProblemContext';
import ValueProposition from '../components/ValueProposition';
import CookieBanner from '../components/CookieBanner';
import PrivacyModal from '../components/PrivacyModal';
import CookiePolicyModal from '../components/CookiePolicyModal';
import LanguageSwitcher from '../components/LanguageSwitcher';
import SectionMotion from '../components/SectionMotion';
import ScrollDepthTracker from '../components/ScrollDepthTracker';

const OpportunityCalculator = dynamicImport(() => import('../components/OpportunityCalculator'), { ssr: true });
const DecisionLens = dynamicImport(() => import('../components/DecisionLens'), { ssr: true });
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
        <SectionMotion sectionId="problem">
          <ProblemContext />
        </SectionMotion>
        <SectionMotion sectionId="calculator">
          <OpportunityCalculator />
        </SectionMotion>
        <SectionMotion sectionId="value_proposition">
          <ValueProposition />
        </SectionMotion>
        <SectionMotion sectionId="decision_lens">
          <DecisionLens />
        </SectionMotion>
        <SectionMotion sectionId="pillars">
          <IncludedPillars />
        </SectionMotion>
        <SectionMotion sectionId="monthly_cycle">
          <MonthlyCycle />
        </SectionMotion>
        <SectionMotion sectionId="growth_roadmap">
          <GrowthRoadmap />
        </SectionMotion>
        <SectionMotion sectionId="strategic_benefits">
          <StrategicBenefits />
        </SectionMotion>
        <SectionMotion sectionId="video_gallery">
          <VideoGallery />
        </SectionMotion>
        <SectionMotion sectionId="team_showcase">
          <TeamShowcase />
        </SectionMotion>
        <SectionMotion sectionId="testimonials">
          <Testimonials />
        </SectionMotion>
        <SectionMotion sectionId="investment_security">
          <InvestmentAndSecurity />
        </SectionMotion>
        <SectionMotion sectionId="client_responsibilities">
          <ClientResponsibilities />
        </SectionMotion>
        <SectionMotion sectionId="faq">
          <FAQ />
        </SectionMotion>
        <FinalCTA />
      </main>
      <ScrollDepthTracker />
      <Footer />
      <CookieBanner />
      <PrivacyModal />
      <CookiePolicyModal />
      <LanguageSwitcher />
    </div>
  );
}
