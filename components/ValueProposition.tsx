
import React from 'react';

const ValueProposition: React.FC = () => {
  return (
    <section id="solucao" className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-brand-black font-black uppercase tracking-[0.2em] text-xs mb-6 inline-block py-1 px-4 border border-slate-200 rounded-full">Proposta de Valor</h2>
          <p className="text-4xl md:text-5xl font-extrabold text-brand-black mb-8 leading-tight tracking-tight">
            Somos o braço direito do seu negócio. <span className="text-slate-400 italic">Estratégia real.</span>
          </p>
          <p className="text-xl text-slate-600 leading-relaxed mb-16 font-medium">
            O Plano Base TAG08 foi desenhado para empresas que já validaram seu produto/serviço e agora precisam de uma estrutura profissional para escalar sem a complexidade de gerenciar múltiplos freelancers.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-10 bg-slate-50 rounded-3xl border border-slate-100 hover:border-brand-lime transition-all group">
              <div className="w-12 h-1 bg-brand-lime mb-6 group-hover:w-20 transition-all"></div>
              <h3 className="text-xl font-black text-brand-black mb-4 uppercase tracking-tight">Foco no Negócio</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Você foca em vender e entregar, nós cuidamos da atração e autoridade da sua marca no digital.</p>
            </div>
            <div className="p-10 bg-slate-50 rounded-3xl border border-slate-100 hover:border-brand-lime transition-all group">
              <div className="w-12 h-1 bg-brand-lime mb-6 group-hover:w-20 transition-all"></div>
              <h3 className="text-xl font-black text-brand-black mb-4 uppercase tracking-tight">Dados & Análise</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Chega de achismos. Relatórios mensais objetivos que mostram exatamente o que está gerando lucro.</p>
            </div>
            <div className="p-10 bg-slate-50 rounded-3xl border border-slate-100 hover:border-brand-lime transition-all group">
              <div className="w-12 h-1 bg-brand-lime mb-6 group-hover:w-20 transition-all"></div>
              <h3 className="text-xl font-black text-brand-black mb-4 uppercase tracking-tight">Escalabilidade</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Ações contínuas e recorrentes que constroem valor de marca e autoridade a longo prazo.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
