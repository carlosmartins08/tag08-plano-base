'use client';

import React, { useState } from 'react';

const OpportunityCalculator: React.FC = () => {
  const [revenue, setRevenue] = useState(50000);
  const [growth, setGrowth] = useState(20);

  const projectedRevenue = revenue * (1 + growth / 100);
  const monthlyLoss = projectedRevenue - revenue;
  const annualLoss = monthlyLoss * 12;

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0,
    }).format(val);

  return (
    <section className="relative py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-brand-lime font-black uppercase tracking-[0.2em] text-xs mb-4">Calculadora de ROI</h2>
          <h3 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase italic tracking-tighter">
            Quanto custa <span className="text-slate-500 line-through decoration-brand-lime decoration-4">não fazer</span> nada?
          </h3>
          <p className="text-slate-400 font-medium max-w-xl mx-auto">
            Descubra o valor financeiro que sua empresa deixa na mesa todos os anos por não ter uma estratégia de crescimento ativa.
          </p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-10">
              <div>
                <label className="flex justify-between text-white font-bold text-sm mb-4">
                  Faturamento Mensal Atual
                  <span className="text-brand-lime">{formatCurrency(revenue)}</span>
                </label>
                <input
                  type="range"
                  min="10000"
                  max="500000"
                  step="5000"
                  value={revenue}
                  onChange={(e) => setRevenue(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-lime hover:accent-white transition-all"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-2 font-black uppercase tracking-widest">
                  <span>R$ 10k</span>
                  <span>R$ 500k</span>
                </div>
              </div>
              <div>
                <label className="flex justify-between text-white font-bold text-sm mb-4">
                  Potencial de Crescimento (Meta)
                  <span className="text-brand-lime">+{growth}%</span>
                </label>
                <input
                  type="range"
                  min="5"
                  max="100"
                  step="5"
                  value={growth}
                  onChange={(e) => setGrowth(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-lime hover:accent-white transition-all"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-2 font-black uppercase tracking-widest">
                  <span>Conservador (5%)</span>
                  <span>Agressivo (100%)</span>
                </div>
              </div>
            </div>
            <div className="bg-brand-black border border-white/10 rounded-2xl p-8 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-brand-lime/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <p className="text-slate-400 text-xs font-black uppercase tracking-widest mb-2 relative z-10">Você está deixando de ganhar</p>
              <p className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter relative z-10">
                {formatCurrency(annualLoss)}
              </p>
              <p className="text-brand-lime text-xs font-bold uppercase tracking-tight relative z-10">Por ano (Estimado)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpportunityCalculator;
