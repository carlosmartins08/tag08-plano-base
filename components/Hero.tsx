'use client';

import Image from 'next/image';
import { useTranslation } from '../contexts/LanguageContext';
import { useUX } from '../contexts/UXContext';
import Magnetic from './Magnetic';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const { source, isReturning, setStrategyNote, persona, niche } = useUX();

  const handleCtaClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'hero_cta_click', {
        source: source,
        is_returning: isReturning,
        niche: niche
      });
    }
  };

  const getSourceAccent = () => {
    if (source === 'meta') return t.hero.sourceMeta;
    if (source === 'google') return t.hero.sourceGoogle;
    if (source === 'linkedin') return t.hero.sourceLinkedin;
    return t.hero.titleAccent;
  };

  const getHeadline = () => {
    if (persona === 'data-focused') return t.hero.headlines.data;
    if (persona === 'vision-focused') return t.hero.headlines.vision;
    if (niche !== 'generic') return t.nicheHeadlines[niche];
    return t.hero.title;
  };

  const getNicheImage = () => {
    const images = {
      'real-estate': "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop", // Modern Building
      'health': "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop", // Modern Clinic
      'tech': "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop", // Team/Laptop
      'expert': "https://images.unsplash.com/photo-1475721027185-40301d320295?q=80&w=800&auto=format&fit=crop", // Speaker/Authority
      'generic': "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop" // Strategy Team (Default)
    };
    return images[niche] || images.generic;
  };

  return (
    <section
      id="hero"
      className="relative pt-24 pb-20 lg:pt-40 lg:pb-36 overflow-hidden bg-brand-black bg-noise"
      onMouseEnter={() => setStrategyNote(t.strategyNotes.hero)}
      onMouseLeave={() => setStrategyNote(null)}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-lime/10 blur-[120px] rounded-full animate-slow-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-brand-lime/5 blur-[100px] rounded-full animate-slow-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 max-w-3xl relative">
            <span className="blueprint-label -top-8 left-0 text-[10px]">SECTION: HERO_MAIN</span>
            <div className="reveal stagger-1 flex flex-col items-center lg:items-start gap-4 mb-8">
              <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full border border-white/10 bg-white/5 text-brand-lime text-[10px] font-black uppercase tracking-[0.3em] relative">
                <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse"></span>
                {t.hero.badge}
                <span className="blueprint-label -top-4 right-0">IDEAL_MATCH: ON</span>
              </div>
              {isReturning && (
                <span className="text-[10px] font-black text-brand-lime/40 uppercase tracking-[0.4em] animate-fade-in relative">
                  — {t.hero.welcomeBack}
                  <span className="blueprint-label -right-12 top-0">RET_UID_TRUE</span>
                </span>
              )}
            </div>
            <h1 className="reveal stagger-2 text-5xl sm:text-6xl lg:text-8xl font-black text-white leading-[0.95] mb-8 tracking-tighter uppercase italic relative">
              <span className="relative">
                {getHeadline()}
                <span className="blueprint-label -top-4 -left-8">CONTEXT_HEADLINE: {niche}</span>
              </span>
              <br />
              <span className="text-brand-lime">{getSourceAccent()}</span>
            </h1>
            <div className="reveal stagger-3 text-xl text-slate-400 mb-12 leading-relaxed max-w-xl font-medium relative">
              <p>{t.hero.description}</p>
              <span className="blueprint-label -bottom-4 right-0">VALUE_PROP: EFFICIENT_INFRA</span>
            </div>
            <div className="reveal stagger-4 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Magnetic>
                <a
                  href="#contato"
                  onClick={handleCtaClick}
                  className="btn-magnetic inline-flex items-center justify-center px-12 py-5 bg-brand-lime text-brand-black rounded-full font-black text-xl hover:shadow-[0_0_30px_rgba(212,255,0,0.5)] transition-all relative"
                >
                  {t.hero.cta}
                  <span className="blueprint-label -top-4 left-0">CTA: STRATEGIC_START</span>
                </a>
              </Magnetic>
              <div className="flex items-center gap-4 text-white/50 text-sm font-bold uppercase tracking-widest relative">
                <span className="w-12 h-px bg-white/20"></span>
                {t.hero.limited}
                <span className="blueprint-label -right-8 top-0">STATUS: LIMITED</span>
              </div>
            </div>
          </div>
          <div className="flex-1 relative hidden lg:block reveal stagger-4">
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl group blueprint-element ring-1 ring-white/10">
              <Image
                src={getNicheImage()}
                alt={t.hero.heroAlt}
                width={800}
                height={533}
                priority
                className="w-full h-auto grayscale brightness-50 contrast-125 transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0 group-hover:brightness-100"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent"></div>
              <span className="blueprint-label bottom-4 right-4 text-[9px]">CONTEXT_IMG: {niche?.toUpperCase()}</span>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-l-2 border-b-2 border-brand-lime/30 rounded-bl-3xl -z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 border-r-2 border-t-2 border-brand-lime/30 rounded-tr-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
