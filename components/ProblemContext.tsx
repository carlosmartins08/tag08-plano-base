'use client';

import React from 'react';
import { useTranslation } from './LanguageContext';

const ProblemContext: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="problema" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
             <div className="grid grid-cols-2 gap-4">
                <article className="reveal stagger-1 p-8 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col items-center text-center">
                   <div className="text-red-500 mb-4 opacity-50 italic font-black text-3xl" aria-hidden="true" role="presentation">!</div>
                   <h4 className="sr-only">Problema: Constância</h4>
                   <p className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-tight">{t.problem.cards.posts}</p>
                </article>
                <article className="reveal stagger-2 p-8 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col items-center text-center translate-y-8">
                   <div className="text-red-500 mb-4 opacity-50 italic font-black text-3xl" aria-hidden="true" role="presentation">?</div>
                   <h4 className="sr-only">Problema: Leads</h4>
                   <p className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-tight">{t.problem.cards.leads}</p>
                </article>
                <article className="reveal stagger-3 p-8 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col items-center text-center">
                   <div className="text-red-500 mb-4 opacity-50 italic font-black text-3xl" aria-hidden="true" role="presentation">$</div>
                   <h4 className="sr-only">Problema: Lucratividade</h4>
                   <p className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-tight">{t.problem.cards.money}</p>
                </article>
                <article className="reveal stagger-4 p-8 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col items-center text-center translate-y-8">
                   <div className="text-red-500 mb-4 opacity-50 italic font-black text-3xl" aria-hidden="true" role="presentation">#</div>
                   <h4 className="sr-only">Problema: Autoridade</h4>
                   <p className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-tight">{t.problem.cards.brand}</p>
                </article>
             </div>
          </div>
          <div className="order-1 lg:order-2 reveal">
            <h2 className="text-brand-black font-black uppercase tracking-[0.2em] text-xs mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-brand-black"></span> {t.problem.label}
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-brand-black mb-8 leading-tight tracking-tighter uppercase italic">
              {t.problem.title}
            </h3>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
              {t.problem.description}
            </p>
            <div className="space-y-4">
              {t.problem.items.map((item, idx) => (
                <div key={idx} className={`reveal stagger-${idx + 1} flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 hover:border-brand-lime transition-colors`}>
                  <div className="w-2 h-2 bg-brand-lime rounded-full shadow-[0_0_8px_#D4FF00]" aria-hidden="true"></div>
                  <span className="text-brand-black font-bold text-sm tracking-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemContext;