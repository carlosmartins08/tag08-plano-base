
import React from 'react';
import { Step } from '../types';

const MonthlyCycle: React.FC = () => {
  const steps: Step[] = [
    { title: "Semana 1: Alinhamento", description: "Reunião de kickoff mensal para definir os temas e objetivos estratégicos." },
    { title: "Semana 2: Produção", description: "Desenvolvimento de artes, legendas e configuração técnica das campanhas." },
    { title: "Semana 3: Lançamento", description: "Ativação das ações e início da coleta de dados de performance em tempo real." },
    { title: "Semana 4: Análise", description: "Fechamento do relatório com insights e sugestões de melhoria para o próximo ciclo." }
  ];

  return (
    <section id="ciclo" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-black text-brand-black mb-4 uppercase tracking-tight italic">Ciclo de Execução Recorrente</h2>
          <p className="text-slate-600 font-medium italic underline decoration-brand-lime decoration-2 underline-offset-4">Marketing não é um evento, é um processo contínuo.</p>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-1 bg-slate-100 z-0"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-brand-black text-brand-lime rounded-2xl flex items-center justify-center font-black text-2xl mb-8 ring-8 ring-white shadow-xl shadow-brand-lime/10">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-black text-brand-black mb-3 uppercase tracking-tight">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonthlyCycle;
