'use client';

import React from 'react';
import { useTranslation } from './LanguageContext';
import { Target, BarChart, Rocket, CheckCircle2 } from 'lucide-react';

const ValueProposition: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    { icon: <Target className="w-6 h-6" />, title: "Foco no Negócio", desc: "Você foca em vender e entregar, nós cuidamos da atração e autoridade da sua marca no digital." },
    { icon: <BarChart className="w-6 h-6" />, title: "Dados & Análise", desc: "Chega de achismos. Relatórios mensais objetivos que mostram exatamente o que está gerando lucro." },
    { icon: <Rocket className="w-6 h-6" />, title: "Escalabilidade", desc: "Ações contínuas e recorrentes que constroem valor de marca e autoridade a longo prazo." },
  ];

  return (
    <section id="solucao" className="py-24 lg:py-32 bg-brand-black relative overflow-hidden bg-noise">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1/4 h-full bg-brand-lime/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="reveal inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-brand-lime/20 bg-brand-lime/5 mb-8">
            <CheckCircle2 className="w-4 h-4 text-brand-lime" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-lime">
              A Nossa Proposta
            </span>
          </div>

          <h2 className="reveal stagger-1 text-4xl md:text-6xl lg:text-7xl font-display font-black text-white mb-10 leading-[0.95] tracking-tight uppercase italic">
            Somos o braço direito <br />
            <span className="text-brand-lime">do seu negócio.</span>
          </h2>

          <p className="reveal stagger-2 text-xl md:text-2xl text-slate-400 leading-relaxed mb-20 font-medium max-w-3xl mx-auto">
            O Plano Base TAG08 foi desenhado para empresas que já validaram seu produto e agora precisam de uma <span className="text-white">estrutura profissional</span> para escalar sem a complexidade de gerenciar múltiplos freelancers.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`reveal stagger-${idx + 3} p-10 bg-white/[0.02] border border-white/5 rounded-[40px] hover:border-brand-lime/40 hover:bg-white/[0.04] transition-all duration-500 group relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-lime/5 blur-2xl rounded-full translate-x-12 -translate-y-12 group-hover:bg-brand-lime/20 transition-all duration-700"></div>

                <div className="w-14 h-14 rounded-2xl bg-brand-lime text-brand-black flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tight group-hover:text-brand-lime transition-colors">
                  {feature.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed font-medium">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
