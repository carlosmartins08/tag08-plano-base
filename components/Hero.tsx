'use client';

import Button from './Button';
import BrandLogo from './BrandLogo';
import { useTranslation } from '../contexts/LanguageContext';
import { trackFunnelEvent } from '../lib/analytics';

export default function Hero() {
  const { t, language, localeSignals } = useTranslation();
  const onCtaClick = () => trackFunnelEvent('hero_cta', { lang: language, section: 'hero', cta: 'understand_base_plan', country: localeSignals.countryBucket, route: '#contato' });
  return <section id="hero" className="relative overflow-hidden bg-brand-black px-4 pb-20 pt-32 text-white lg:pb-28 lg:pt-40"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.08fr_.92fr] lg:items-center"><div><p className="mb-6 ds-section-badge">{t.hero.badge}</p><h1 className="max-w-4xl font-display text-5xl font-black uppercase italic leading-[.9] tracking-tight md:text-7xl">{t.hero.title}</h1><p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">{t.hero.description}</p><div className="mt-9"><Button href="#contato" onClick={onCtaClick} size="lg">{t.hero.cta}</Button></div><div className="mt-8 border-l-2 border-brand-lime pl-4"><p className="text-xs font-black uppercase tracking-widest text-brand-lime">{t.hero.fitLabel}</p><p className="mt-2 max-w-xl text-sm text-slate-300">{t.hero.fitText}</p></div></div><div className="flex min-h-[340px] items-center justify-center rounded-[2rem] border border-brand-lime/20 bg-[radial-gradient(circle_at_50%_50%,rgba(212,255,0,.15),transparent_55%)] p-10 lg:min-h-[520px]"><BrandLogo variant="light" width={420} className="max-w-full opacity-80" /></div></div></section>;
}
