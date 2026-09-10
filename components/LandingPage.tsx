import dynamicImport from 'next/dynamic';
import Navbar from './Navbar';
import Hero from './Hero';
import ProblemContext from './ProblemContext';
import ValueProposition from './ValueProposition';
import CookieBanner from './CookieBanner';
import PrivacyModal from './PrivacyModal';
import CookiePolicyModal from './CookiePolicyModal';
import SectionMotion from './SectionMotion';
import ScrollDepthTracker from './ScrollDepthTracker';
import SceneDivider from './SceneDivider';
import GlobalAtmosphere from './GlobalAtmosphere';

const IncludedPillars = dynamicImport(() => import('./IncludedPillars'), { ssr: true });
const MonthlyCycle = dynamicImport(() => import('./MonthlyCycle'), { ssr: true });
const GrowthRoadmap = dynamicImport(() => import('./GrowthRoadmap'), { ssr: true });
const StrategicBenefits = dynamicImport(() => import('./StrategicBenefits'), { ssr: true });
const InvestmentAndSecurity = dynamicImport(() => import('./InvestmentAndSecurity'), { ssr: true });
const ClientResponsibilities = dynamicImport(() => import('./ClientResponsibilities'), { ssr: true });
const FAQ = dynamicImport(() => import('./FAQ'), { ssr: true });
const FinalCTA = dynamicImport(() => import('./FinalCTA'), { ssr: true });
const Footer = dynamicImport(() => import('./Footer'), { ssr: true });

export default function LandingPage() {
  return <div className="flex min-h-screen flex-col"><GlobalAtmosphere /><Navbar /><main id="main-content"><Hero /><SectionMotion sectionId="problem"><ProblemContext /></SectionMotion><SceneDivider label="Como funciona" className="py-4 lg:py-6" /><SectionMotion sectionId="value_proposition"><ValueProposition /></SectionMotion><SectionMotion sectionId="pillars"><IncludedPillars /></SectionMotion><SectionMotion sectionId="monthly_cycle"><MonthlyCycle /></SectionMotion><SectionMotion sectionId="fit"><GrowthRoadmap /></SectionMotion><SectionMotion sectionId="criteria"><StrategicBenefits /></SectionMotion><SectionMotion sectionId="proposal"><InvestmentAndSecurity /></SectionMotion><SectionMotion sectionId="responsibilities"><ClientResponsibilities /></SectionMotion><SectionMotion sectionId="faq"><FAQ /></SectionMotion><FinalCTA /></main><ScrollDepthTracker /><Footer /><CookieBanner /><PrivacyModal /><CookiePolicyModal /></div>;
}
