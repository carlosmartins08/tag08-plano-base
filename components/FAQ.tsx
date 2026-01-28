'use client';

import React, { useState } from 'react';
import { Plus, Minus, MessageCircle, HelpCircle, ArrowRight } from 'lucide-react';
import { useTranslation } from './LanguageContext';

const FAQ: React.FC = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const questions = t.faq.items.map((item, index) => ({
    ...item,
    id: String(index + 1).padStart(2, '0'),
  }));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questions.map((q) => ({
      "@type": "Question",
      "name": q.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.answer
      }
    }))
  };

  return (
    <section id="faq" className="py-32 px-4 bg-brand-black border-t border-white/5 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-[size:60px_60px] bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <div className="inline-flex items-center gap-2 text-brand-lime border border-brand-lime/20 bg-brand-lime/5 px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold mb-6">
              <HelpCircle size={12} />
              {t.faq.badge}
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {t.faq.title} <br />
              <span className="text-gray-500">{t.faq.titleAccent}</span>
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed mb-8 border-l border-white/10 pl-4">
              {t.faq.subtitle}
            </p>

            <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-6 relative overflow-hidden group hover:border-brand-lime/30 transition-all duration-300">
              <div className="absolute inset-0 bg-brand-lime/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-10 h-10 bg-brand-lime rounded-lg flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(212,255,0,0.2)] text-brand-black">
                  <MessageCircle size={20} />
                </div>
                <h4 className="text-white font-bold mb-2">{t.faq.supportTitle}</h4>
                <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                  {t.faq.supportBody}
                </p>
                <a
                  href="https://wa.me/5583998868882"
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand-lime text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:gap-3 transition-all"
                >
                  {t.faq.supportCta} <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4">
            {questions.map((question, index) => {
              const isOpen = openIndex === index;
              const panelId = `faq-panel-${question.id}`;
              const headingId = `faq-question-${question.id}`;
              return (
                <div
                  key={question.id}
                  className={`group border rounded-xl transition-all duration-500 overflow-hidden ${isOpen
                    ? 'bg-brand-dark border-brand-lime/50 shadow-[0_0_30px_rgba(212,255,0,0.05)]'
                    : 'bg-transparent border-white/10 hover:border-white/20 hover:bg-white/[0.02]'
                    }`}
                >
                  <button
                    type="button"
                    className="w-full flex items-start gap-4 p-6 md:p-8 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <span
                      className={`text-sm font-mono font-bold pt-1 transition-colors duration-300 ${isOpen ? 'text-brand-lime' : 'text-gray-600'}`}
                    >
                      {question.id}
                    </span>
                    <div className="flex-1">
                      <div className="flex justify-between items-start gap-4">
                        <span
                          id={headingId}
                          className={`font-display font-bold text-lg md:text-xl transition-colors duration-300 ${isOpen ? 'text-white' : 'text-gray-300 group-hover:text-white'
                            }`}
                        >
                          {question.question}
                        </span>
                        <div className={`shrink-0 transition-transform duration-500 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                          {isOpen ? (
                            <Minus className="text-brand-lime" size={20} />
                          ) : (
                            <Plus className="text-gray-500 group-hover:text-white" size={20} />
                          )}
                        </div>
                      </div>

                      <div
                        className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                          }`}
                      >
                        <div
                          id={panelId}
                          role="region"
                          aria-labelledby={headingId}
                          className="overflow-hidden"
                        >
                          <p
                            className={`text-gray-400 leading-relaxed text-sm md:text-base border-t border-white/5 pt-4 mt-4 transform transition-all duration-500 ease-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                              }`}
                          >
                            {question.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
