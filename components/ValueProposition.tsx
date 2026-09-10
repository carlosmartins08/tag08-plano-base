'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslation } from '../contexts/LanguageContext';
import { Target, BarChart3, Rocket, CheckCircle2, ArrowUpRight } from 'lucide-react';

const ValueProposition: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Target className="h-7 w-7" />,
      title: t.valueProposition.features.focus.title,
      desc: t.valueProposition.features.focus.desc,
      tone: 'dark',
    },
    {
      icon: <BarChart3 className="h-7 w-7" />,
      title: t.valueProposition.features.data.title,
      desc: t.valueProposition.features.data.desc,
      tone: 'dark',
    },
    {
      icon: <Rocket className="h-7 w-7" />,
      title: t.valueProposition.features.scale.title,
      desc: t.valueProposition.features.scale.desc,
      tone: 'lime',
    },
  ] as const;

  const sideCardClass =
    'reveal rounded-[1.75rem] border border-white/8 bg-white/[0.03] p-5 md:p-6 transition-colors duration-300 hover:border-brand-lime/25';

  return (
    <section id="solucao" className="relative overflow-hidden bg-brand-black bg-noise py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[12%] h-64 w-64 rounded-full bg-brand-lime/8 blur-[120px]" />
        <div className="absolute right-[6%] bottom-[10%] h-56 w-56 rounded-full bg-white/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-4xl text-left">
          <div className="reveal mb-4 chapter-kicker">Capitulo 02</div>

          <div className="reveal mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">
            <CheckCircle2 className="h-4 w-4 text-brand-lime" />
            <span className="text-[10px] font-black uppercase tracking-[0.28em] text-white/75">
              {t.valueProposition.badge}
            </span>
          </div>

          <h2 className="reveal stagger-1 cinematic-title max-w-5xl font-display text-4xl font-black uppercase italic leading-[0.94] tracking-tight text-white md:text-5xl xl:text-6xl">
            {t.valueProposition.title}{' '}
            <span className="text-brand-lime">{t.valueProposition.titleAccent}</span>
          </h2>

          <p className="reveal stagger-2 mt-5 max-w-3xl text-base font-medium leading-relaxed text-white/68 md:text-lg">
            {t.valueProposition.subtitle}
          </p>
        </div>

        <div className="grid gap-4 xl:grid-cols-[0.82fr_1.08fr_0.82fr]">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-1">
            <article className={`${sideCardClass} stagger-3`}>
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-white">
                {features[0].icon}
              </div>
              <h3 className="max-w-[14ch] text-2xl font-black uppercase leading-[0.96] tracking-tight text-white">
                {features[0].title}
              </h3>
              <p className="mt-4 max-w-[28ch] text-sm leading-relaxed text-white/62">
                {features[0].desc}
              </p>
            </article>

            <article className={`${sideCardClass} stagger-4`}>
              <div className="mb-5 flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-[0.28em] text-white/45">
                  Operacao
                </span>
                <ArrowUpRight className="h-4 w-4 text-white/35" />
              </div>
              <p className="max-w-[24ch] text-3xl font-black uppercase leading-[0.94] tracking-tight text-white">
                Ciclo com dono, criterio e cadencia.
              </p>
            </article>
          </div>

          <article className="reveal stagger-3 relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-brand-black md:min-h-[520px]">
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop"
                alt="Equipe em planejamento estratégico"
                fill
                sizes="(max-width: 1280px) 100vw, 40vw"
                className="object-cover grayscale brightness-[0.35] contrast-125"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.28),rgba(0,0,0,0.72)),radial-gradient(circle_at_50%_50%,rgba(212,255,0,0.08),transparent_30%)]" />
            </div>

            <div className="relative z-10 flex h-full flex-col justify-between p-6 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <span className="ds-chip ds-chip-muted px-4 py-2 tracking-[0.28em]">
                  Sistema de entrega
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[10px] font-black uppercase tracking-[0.28em] text-white/45">
                  TAG08
                </span>
              </div>

              <div className="flex items-center justify-center py-8">
                <div className="relative h-40 w-40 md:h-52 md:w-52">
                  <Image
                    src="/assets/brand/symbol/symbol-primary.svg"
                    alt="Símbolo TAG08"
                    fill
                    className="object-contain drop-shadow-[0_0_40px_rgba(212,255,0,0.35)]"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-[1.05fr_0.95fr]">
                <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.07] p-5 backdrop-blur-md">
                  <p className="text-[10px] font-black uppercase tracking-[0.28em] text-white/45">
                    Proposta
                  </p>
                  <p className="mt-3 text-2xl font-black uppercase leading-[0.96] tracking-tight text-white">
                    Metodo antes de volume.
                  </p>
                </div>

                <div className="rounded-[1.4rem] border border-brand-lime/20 bg-brand-lime p-5 text-brand-black shadow-[0_18px_40px_rgba(212,255,0,0.18)]">
                  <p className="text-[10px] font-black uppercase tracking-[0.28em] text-brand-black/60">
                    Resultado
                  </p>
                  <p className="mt-3 text-xl font-black uppercase leading-[0.96]">
                    Crescimento com processo.
                  </p>
                </div>
              </div>
            </div>
          </article>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-1">
            <article className={`${sideCardClass} stagger-4`}>
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-white">
                {features[1].icon}
              </div>
              <h3 className="max-w-[14ch] text-2xl font-black uppercase leading-[0.96] tracking-tight text-white">
                {features[1].title}
              </h3>
              <p className="mt-4 max-w-[28ch] text-sm leading-relaxed text-white/62">
                {features[1].desc}
              </p>
            </article>

            <article className="reveal stagger-5 rounded-[1.75rem] border border-brand-lime/15 bg-brand-lime p-5 md:p-6 text-brand-black shadow-[0_20px_50px_rgba(212,255,0,0.18)]">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-black text-brand-lime">
                {features[2].icon}
              </div>
              <h3 className="max-w-[13ch] text-2xl font-black uppercase leading-[0.96] tracking-tight">
                {features[2].title}
              </h3>
              <p className="mt-4 max-w-[28ch] text-sm leading-relaxed text-brand-black/72">
                {features[2].desc}
              </p>
            </article>
          </div>
        </div>

        <div className="reveal stagger-6 mt-6 rounded-[1.75rem] border border-white/8 bg-white/[0.03] px-5 py-5 md:px-6">
          <p className="max-w-5xl text-sm font-semibold leading-relaxed text-white/74 md:text-base">
            {t.valueProposition.support}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
