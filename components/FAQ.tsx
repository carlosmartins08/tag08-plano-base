'use client';

import React, { useState } from 'react';
import { useTranslation } from './LanguageContext';

const FAQ: React.FC = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2 className="text-brand-black font-black uppercase tracking-[0.2em] text-xs mb-4">FAQ</h2>
          <h3 className="text-3xl md:text-5xl font-black text-brand-black mb-6 uppercase italic tracking-tighter">
            {t.faq.title}
          </h3>
          <p className="text-slate-500 font-medium">{t.faq.subtitle}</p>
        </header>

        <div className="space-y-4">
          {t.faq.items.map((item, idx) => (
            <div 
              key={idx} 
              className={`border rounded-3xl transition-all duration-300 ${
                openIndex === idx ? 'border-brand-lime bg-slate-50 shadow-sm' : 'border-slate-100 hover:border-slate-300'
              }`}
            >
              <button 
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
                aria-expanded={openIndex === idx}
              >
                <span className={`text-lg font-black uppercase tracking-tight transition-colors ${openIndex === idx ? 'text-brand-black' : 'text-slate-600 group-hover:text-brand-black'}`}>
                  {item.question}
                </span>
                <span className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-all ${openIndex === idx ? 'bg-brand-black text-brand-lime rotate-180' : 'bg-slate-100 text-slate-400'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  openIndex === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-8 pt-0 text-slate-600 leading-relaxed font-medium whitespace-pre-line">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;