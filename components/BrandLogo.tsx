'use client';

import React from 'react';
import clsx from 'clsx';
import { Icons } from '../constants';

interface BrandLogoProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: string;
}

const BrandLogo: React.FC<BrandLogoProps> = ({ color = 'currentColor', className, ...props }) => (
  <div className={clsx('flex items-center gap-3 text-white', className)} style={{ color }} {...props}>
    <Icons.LogoIcon />
    <span className="font-black uppercase tracking-[0.3em]">
      TAG08
    </span>
  </div>
);

export default BrandLogo;
