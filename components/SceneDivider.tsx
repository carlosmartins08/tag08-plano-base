'use client';

import React from 'react';
import clsx from 'clsx';

type SceneDividerProps = {
  label: string;
  className?: string;
};

const SceneDivider: React.FC<SceneDividerProps> = ({ label, className }) => (
  <div className={clsx('relative mx-auto flex w-full max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8', className)}>
    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-brand-lime/45 to-white/10" />
    <span className="rounded-full border border-brand-lime/30 bg-brand-lime/10 px-3 py-1 text-[9px] font-black uppercase tracking-[0.35em] text-brand-lime/90">
      {label}
    </span>
    <div className="h-px flex-1 bg-gradient-to-l from-transparent via-brand-lime/45 to-white/10" />
  </div>
);

export default SceneDivider;
