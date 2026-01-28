'use client';

import React from 'react';
import clsx from 'clsx';
import { Icons } from '../constants';

interface BrandLogoProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: string;
}

const BrandLogo: React.FC<BrandLogoProps> = ({ color = '#ffffff', className, ...props }) => (
  <div className={clsx('flex items-center gap-3', className)} {...props}>
    <Icons.LogoIcon />
    <span
      className={clsx('font-black uppercase tracking-[0.3em]', className)}
      style={{ color }}
    >
      TAG08
    </span>
  </div>
);

export default BrandLogo;
