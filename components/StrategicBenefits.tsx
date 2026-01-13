
import React from 'react';
import { Icons } from '../constants';

const StrategicBenefits: React.FC = () => {
  const benefits = [
    { title: "Consistência Absoluta", desc: "Presença digital ininterrupta e profissional." },
    { title: "ROI Focado", desc: "Campanhas que trazem lucro, não apenas likes." },
    { title: "Time Sênior", desc: "Consultores especialistas ao seu dispor." },
    { title: "Agilidade", desc: "Sua estratégia atualizada em tempo real." }
  ];

  return (
    <section className="py-24 bg-brand-black text-white border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-brand-lime font-black uppercase tracking-[0.3em] text-xs mb-4">Diferenciais</h2>
          <h3 className="text-4xl font-black uppercase italic tracking-tighter">O Padrão Studio TAG08</h3>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="p-8 bg-white/5 border border-white/10 rounded-[40px] hover:bg-white/10 transition-all group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-0 bg-brand-lime group-hover:h-full transition-all duration-500"></div>
              <h4 className="font-black text-brand-lime text-lg mb-2 uppercase tracking-tight">{benefit.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicBenefits;
