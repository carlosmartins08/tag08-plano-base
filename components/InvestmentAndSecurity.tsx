
import React from 'react';
import { Icons } from '../constants';

const InvestmentAndSecurity: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl font-black text-brand-black mb-4 uppercase italic tracking-tighter">Investimento Estratégico</h2>
          <p className="text-slate-600 font-medium">Clareza total sobre o valor da sua transformação.</p>
        </div>
        
        <div className="bg-brand-black rounded-[60px] p-8 lg:p-20 text-white shadow-2xl relative overflow-hidden border border-white/5">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-brand-lime/10 blur-[150px] rounded-full"></div>
          
          <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
            <div>
              <h3 className="text-3xl font-black mb-10 uppercase italic tracking-tight underline decoration-brand-lime decoration-4 underline-offset-8">Segurança de Studio</h3>
              <div className="space-y-10">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 text-brand-lime">
                    <Icons.Shield />
                  </div>
                  <div>
                    <h4 className="font-black mb-2 uppercase tracking-tight text-white flex items-center gap-2">
                      Zero Fidelidade
                      <span className="bg-brand-lime text-brand-black text-[8px] px-2 py-0.5 rounded-full font-black animate-pulse">NOVO</span>
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">Foque nos resultados. Não prendemos nossos clientes com contratos longos; nossa retenção é baseada em performance real.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 text-brand-lime">
                    <Icons.Calendar />
                  </div>
                  <div>
                    <h4 className="font-black mb-2 uppercase tracking-tight text-white">Cancelamento Simples</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">Precisa parar? Basta um aviso prévio de 30 dias. Simplicidade e ética em todas as pontas da operação.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-brand-lime rounded-[40px] p-12 text-brand-black shadow-[0_0_50px_rgba(212,255,0,0.15)] transform lg:scale-105">
              <span className="text-[10px] font-black text-brand-black/40 uppercase tracking-[0.3em] mb-4 block">Consultoria sob medida</span>
              <p className="text-4xl font-black mb-6 leading-none tracking-tighter uppercase italic">Sua marca, <br />nosso foco.</p>
              <p className="text-brand-black/80 font-bold mb-10 text-sm leading-relaxed">
                Operações de alto nível exigem personalização. O valor do Plano Base é adaptado à sua necessidade de escala e verba de mídia.
              </p>
              <a 
                href="#contato" 
                className="w-full inline-flex items-center justify-center bg-brand-black text-brand-lime font-black py-5 rounded-2xl hover:bg-slate-900 transition-all shadow-xl text-lg uppercase tracking-tight"
              >
                Solicitar Proposta
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentAndSecurity;
