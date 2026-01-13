import React from 'react';
import { Icons } from '../constants';
import { Pillar } from '../types';

const IncludedPillars: React.FC = () => {
  const pillars: Pillar[] = [
    {
      title: "Planejamento Estratégico",
      description: "Definição de canais, personas, linha editorial e cronograma de ações trimestrais focado em conversão.",
      icon: <Icons.Strategy />
    },
    {
      title: "Produção de Conteúdo",
      description: "Criação de criativos para redes sociais e anúncios, mantendo o padrão visual premium da sua marca.",
      icon: <Icons.Content />
    },
    {
      title: "Gestão de Tráfego Pago",
      description: "Configuração e otimização diária de campanhas em Meta Ads e Google Ads para maximizar o ROI.",
      icon: <Icons.Ads />
    },
    {
      title: "Análise e Reporting",
      description: "Dashboard em tempo real e reuniões mensais de alinhamento com especialistas de marketing.",
      icon: <Icons.Analysis />
    }
  ];

  return (
    <section id="pilares" className="py-24 bg-brand-black text-white overflow-hidden relative bg-noise">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-lime/5 blur-3xl rounded-full translate-x-1/2" aria-hidden="true"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <header className="text-center mb-20 reveal">
          <h2 className="text-4xl font-black mb-4 tracking-tight uppercase italic">Os 4 Pilares da Entrega</h2>
          <p className="text-slate-400 max-w-2xl mx-auto font-medium">Uma solução completa e integrada para sua consolidação digital.</p>
        </header>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <article key={idx} className={`reveal stagger-${idx + 1} p-8 border border-white/10 bg-white/5 rounded-3xl hover:border-brand-lime transition-all duration-500 group`}>
              <div className="text-brand-lime mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:animate-soft-bounce">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-black mb-4 uppercase tracking-tight">{pillar.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{pillar.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IncludedPillars;