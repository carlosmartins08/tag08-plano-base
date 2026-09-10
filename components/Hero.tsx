'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { useUX } from '../contexts/UXContext';
import { trackEvent, trackFunnelEvent } from '../lib/analytics';
import { getExperimentVariant } from '../lib/experiments';
import Magnetic from './Magnetic';
import Button from './Button';

const Hero: React.FC = () => {
  const { t, language, localeSignals, recommendedContactHref, recommendedContactRoute } = useTranslation();
  const { source, isReturning, setStrategyNote, persona, niche } = useUX();
  const [headlineVariant, setHeadlineVariant] = useState<'control' | 'trust'>('control');
  const [scrollY, setScrollY] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(1440);

  useEffect(() => {
    setHeadlineVariant(getExperimentVariant('hero-headline-v1', ['control', 'trust']) as 'control' | 'trust');
  }, []);

  useEffect(() => {
    trackEvent('experiment_exposure', {
      experiment: 'hero-headline-v1',
      variant: headlineVariant,
      language_selected: language,
    });
  }, [headlineVariant, language]);

  useEffect(() => {
    let frameId = 0;

    const updateScroll = () => {
      frameId = 0;
      setScrollY(window.scrollY);
    };

    const handleScroll = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(updateScroll);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCtaClick = () => {
    trackFunnelEvent('hero_cta', {
      lang: language,
      section: 'hero',
      cta: 'primary_diagnosis',
      country: localeSignals.countryBucket,
      route: recommendedContactRoute,
      experiment: 'hero-headline-v1',
      variant: headlineVariant,
    });
  };

  const getSourceAccent = () => {
    if (source === 'meta') return t.hero.sourceMeta;
    if (source === 'google') return t.hero.sourceGoogle;
    if (source === 'linkedin') return t.hero.sourceLinkedin;
    return t.hero.titleAccent;
  };

  const getHeadline = () => {
    if (headlineVariant === 'trust') return t.hero.headlines.vision;
    if (persona === 'data-focused') return t.hero.headlines.data;
    if (persona === 'vision-focused') return t.hero.headlines.vision;
    if (niche !== 'generic') return t.nicheHeadlines[niche];
    return t.hero.title;
  };

  const getNicheImage = () => {
    const images = {
      'real-estate': 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop',
      health: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop',
      tech: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop',
      expert: 'https://images.unsplash.com/photo-1475721027185-40301d320295?q=80&w=1200&auto=format&fit=crop',
      generic: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop',
    };
    return images[niche] || images.generic;
  };

  const parallaxEnabled = viewportWidth >= 1280;
  const clampedScroll = Math.min(scrollY, 600);
  const atmosphereShift = parallaxEnabled ? clampedScroll * -0.02 : 0;
  const imageShift = parallaxEnabled ? clampedScroll * -0.03 : 0;
  const overlayShift = parallaxEnabled ? clampedScroll * -0.015 : 0;

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-brand-black bg-noise pb-8 pt-24 lg:pb-12 lg:pt-28"
      onMouseEnter={() => setStrategyNote(t.strategyNotes.hero)}
      onMouseLeave={() => setStrategyNote(null)}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(212,255,0,0.18),transparent_26%),radial-gradient(circle_at_84%_16%,rgba(255,255,255,0.06),transparent_20%),radial-gradient(circle_at_76%_78%,rgba(212,255,0,0.08),transparent_26%)]" />
        <div
          className="absolute left-[4%] top-[10%] h-80 w-80 rounded-full bg-brand-lime/10 blur-[150px] will-change-transform"
          style={{ transform: `translate3d(0, ${atmosphereShift}px, 0)` }}
        />
        <div
          className="absolute bottom-[4%] right-[5%] h-72 w-72 rounded-full bg-white/5 blur-[160px] will-change-transform"
          style={{ transform: `translate3d(0, ${-atmosphereShift * 0.7}px, 0)` }}
        />
      </div>

      <div className="relative z-10 w-full px-3 sm:px-4 lg:px-5">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl lg:rounded-[2.5rem]">
          <div className="grid gap-4 p-3 sm:p-4 lg:grid-cols-[0.96fr_1.04fr] xl:min-h-[calc(100vh-8rem)] xl:grid-cols-[0.74fr_1.1fr_0.48fr] lg:p-5">
            <div className="flex flex-col justify-end rounded-[1.8rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.015),rgba(255,255,255,0.006))] p-6 sm:p-8 xl:min-h-[560px]">
              <div className="space-y-7">
                <div className="flex flex-wrap items-center gap-3 text-[10px] font-black uppercase tracking-[0.28em] text-white/55">
                  <span className="inline-flex items-center gap-2 rounded-full border border-brand-lime/25 bg-brand-lime/10 px-4 py-2 text-brand-lime">
                    <span className="h-2 w-2 rounded-full bg-brand-lime" />
                    {t.hero.badge}
                  </span>
                  <span className="rounded-full border border-white/10 px-4 py-2">Capitulo 01</span>
                  {isReturning && (
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-white/75">
                      {t.hero.welcomeBack}
                    </span>
                  )}
                </div>

                <div className="space-y-5">
                  <p className="text-[10px] font-black uppercase tracking-[0.34em] text-brand-lime/70">
                    {getSourceAccent()}
                  </p>
                  <h1 className="max-w-[8.4ch] text-4xl font-black uppercase italic leading-[0.9] tracking-tight text-white sm:text-5xl lg:text-[4rem] xl:text-[4.7rem]">
                    {getHeadline()}
                  </h1>
                  <p className="max-w-[31ch] text-[15px] leading-relaxed text-white/66 sm:text-base">
                    {t.hero.description}
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
                  <Magnetic>
                    <Button
                      href={recommendedContactHref}
                      onClick={handleCtaClick}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="lg"
                      className="justify-center whitespace-nowrap sm:min-w-[236px]"
                    >
                      {t.hero.cta}
                    </Button>
                  </Magnetic>
                  <Button href="#solucao" variant="subtle" size="lg" className="justify-center whitespace-nowrap sm:min-w-[184px]">
                    {t.navbar.menu.solution}
                  </Button>
                </div>

                <div className="grid gap-4 sm:grid-cols-[0.98fr_1.02fr]">
                  <div className="rounded-[1.45rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-md">
                    <p className="text-[10px] font-black uppercase tracking-[0.28em] text-white/45">
                      {t.hero.limited}
                    </p>
                    <div className="mt-3 flex items-end gap-3">
                      <p className="text-3xl font-black italic tracking-tight text-white">01</p>
                      <p className="max-w-[17ch] text-sm leading-relaxed text-white/60">
                        Entrada guiada por criterio, nao por pressa.
                      </p>
                    </div>
                  </div>
                  <div className="rounded-[1.45rem] border border-white/8 bg-black/28 p-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.28em] text-white/45">
                      Direcao
                    </p>
                    <p className="mt-3 max-w-[17ch] text-[1.1rem] font-black uppercase leading-[0.96] text-white">
                      Primeiro clareza. Depois escala.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative min-h-[380px] overflow-hidden rounded-[1.8rem] border border-white/10 bg-black/40 lg:min-h-[540px] xl:min-h-[560px]">
                <Image
                  src={getNicheImage()}
                  alt={t.hero.heroAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 52vw"
                  className="object-cover grayscale brightness-[0.48] contrast-125 will-change-transform"
                  style={{ transform: `translate3d(0, ${imageShift}px, 0) scale(1.04)` }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.14),rgba(0,0,0,0.72)),radial-gradient(circle_at_20%_20%,rgba(212,255,0,0.12),transparent_30%)]" />

                <div className="absolute left-4 top-4 max-w-[320px] rounded-full border border-white/10 bg-black/40 px-4 py-2 text-[10px] font-black uppercase tracking-[0.24em] text-white/65 backdrop-blur-md">
                  {t.strategyNotes.hero}
                </div>

                <div
                  className="absolute bottom-5 left-5 right-5 sm:right-auto sm:max-w-[336px] rounded-[1.4rem] border border-white/10 bg-white/[0.08] p-4 backdrop-blur-md will-change-transform"
                  style={{ transform: `translate3d(0, ${overlayShift}px, 0)` }}
                >
                  <p className="text-[10px] font-black uppercase tracking-[0.28em] text-white/50">
                    {t.valueProposition.badge}
                  </p>
                  <p className="mt-2 text-xl font-black uppercase leading-tight text-white">
                    {t.valueProposition.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/68">
                    {t.valueProposition.subtitle}
                  </p>
                </div>
              </div>

            <div className="grid gap-4 xl:grid-rows-[0.74fr_1.26fr]">
              <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.025] p-5 xl:min-h-[184px]">
                <p className="text-[10px] font-black uppercase tracking-[0.28em] text-white/45">
                  {t.teamShowcase.badge}
                </p>
                <p className="mt-4 max-w-[11ch] text-[1.85rem] font-black uppercase leading-[0.94] text-white xl:text-[2rem]">
                  {t.teamShowcase.titleAccent}
                </p>
                <p className="mt-3 max-w-[24ch] text-sm leading-relaxed text-white/62">
                  {t.teamShowcase.support}
                </p>
              </div>

              <div className="rounded-[1.8rem] border border-brand-lime/15 bg-brand-lime p-5 text-brand-black shadow-[0_24px_70px_rgba(212,255,0,0.18)] xl:min-h-[356px]">
                <p className="text-[10px] font-black uppercase tracking-[0.28em] text-brand-black/60">
                  {t.cta.button}
                </p>
                <p className="mt-5 text-[2.75rem] font-black leading-[0.9] xl:text-[3rem]">
                  {t.navbar.diagnosis} {t.navbar.free}
                </p>
                <p className="mt-5 max-w-[21ch] text-sm leading-relaxed text-brand-black/72">
                  {t.cta.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
