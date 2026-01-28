'use client';

import React from 'react';
import { useTranslation } from './LanguageContext';
import { useUX } from './UXContext';
import { TrendingUp, Layers, Rocket, Trophy } from 'lucide-react';

const GrowthRoadmap: React.FC = () => {
    const { t } = useTranslation();
    const { setStrategyNote } = useUX();

    const steps = [
        {
            ...t.growthRoadmap.steps.step1,
            icon: <Layers className="w-6 h-6" />,
            color: "bg-slate-800"
        },
        {
            ...t.growthRoadmap.steps.step2,
            icon: <TrendingUp className="w-6 h-6" />,
            color: "bg-brand-lime"
        },
        {
            ...t.growthRoadmap.steps.step3,
            icon: <Rocket className="w-6 h-6" />,
            color: "bg-slate-800"
        },
        {
            ...t.growthRoadmap.steps.step4,
            icon: <Trophy className="w-6 h-6" />,
            color: "bg-slate-800"
        }
    ];

    return (
        <section
            className="py-24 lg:py-32 bg-brand-black relative overflow-hidden bg-noise"
            onMouseEnter={() => setStrategyNote(t.strategyNotes.roadmap)}
            onMouseLeave={() => setStrategyNote(null)}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-24 reveal relative">
                    <span className="blueprint-label -top-8 left-1/2 -translate-x-1/2">MODULE: SCALE_ROADMAP</span>
                    <h2 className="text-4xl md:text-6xl font-display font-black text-white uppercase italic tracking-tighter leading-[0.9] mb-8">
                        {t.growthRoadmap.title} <br />
                        <span className="text-brand-lime">{t.growthRoadmap.titleAccent}</span>
                    </h2>
                    <p className="text-slate-400 text-lg font-medium max-w-2xl mx-auto">
                        {t.growthRoadmap.subtitle}
                    </p>
                </div>

                <div className="relative">
                    {/* Connector Line */}
                    <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 hidden lg:block -translate-y-1/2" aria-hidden="true"></div>
                    <span className="blueprint-label top-1/2 left-4 -translate-y-6 opacity-40">AXIS_Y: GROWTH_PATH</span>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                        {steps.map((step, i) => (
                            <div key={i} className="reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                                <div className="group relative p-8 bg-white/[0.03] border border-white/10 rounded-[40px] hover:border-brand-lime/40 transition-all duration-500 hover:-translate-y-4 blueprint-element">
                                    <span className="blueprint-label -top-4 left-8">STAGE_0{i + 1}: POS_OFFSET</span>
                                    <div className={`w-14 h-14 rounded-2xl ${step.color === 'bg-brand-lime' ? 'bg-brand-lime text-brand-black shadow-[0_0_20px_rgba(212,255,0,0.4)]' : 'bg-white/5 text-brand-lime'} flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110`}>
                                        {step.icon}
                                    </div>

                                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-4 block">
                                        {step.stage}
                                    </span>

                                    <h3 className="text-2xl font-black text-white uppercase italic tracking-tight mb-4 group-hover:text-brand-lime transition-colors">
                                        {step.title}
                                    </h3>

                                    <p className="text-slate-400 font-medium text-sm leading-relaxed mb-6">
                                        {step.desc}
                                    </p>

                                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden relative">
                                        <div className={`h-full ${step.color === 'bg-brand-lime' ? 'w-full' : 'w-1/3'} bg-brand-lime opacity-50`}></div>
                                        <span className="blueprint-label -bottom-6 left-0">SCALE_FACTOR: {i === 1 ? '1.0' : '0.33'}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GrowthRoadmap;
