
import React from 'react';
import { Icons } from '../constants';

const ClientResponsibilities: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 rounded-[40px] p-8 md:p-16 shadow-sm">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xs font-black text-brand-black/40 uppercase tracking-[0.4em] mb-6 flex items-center gap-4">
              <span className="w-12 h-px bg-slate-200"></span> O Acordo
            </h2>
            <h3 className="text-3xl font-black text-brand-black mb-8 uppercase italic tracking-tighter">
              Sua responsabilidade no sucesso
            </h3>
            <p className="text-slate-600 mb-12 leading-relaxed font-medium text-lg">
              Marketing é uma via de mão dupla. Para alcançarmos o topo, precisamos que você e sua equipe estejam alinhados conosco nos seguintes pontos:
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                "Agilidade nas aprovações de criativos.",
                "Sincronia entre marketing e comercial.",
                "Participação ativa na reunião mensal.",
                "Feedback constante sobre leads gerados."
              ].map((text, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="w-6 h-6 rounded-full border-2 border-brand-lime flex items-center justify-center flex-shrink-0 group-hover:bg-brand-lime transition-colors">
                    <div className="w-1.5 h-1.5 bg-brand-black rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <p className="text-sm text-brand-black font-bold tracking-tight">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientResponsibilities;
