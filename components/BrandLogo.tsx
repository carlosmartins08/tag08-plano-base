'use client';

import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { SITE_PROFILE } from '../constants';

interface BrandLogoProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: string;
  variant?: 'dark' | 'light';
  width?: number;
}

const logoByVariant = {
  dark: SITE_PROFILE.logoPath,
  light: '/assets/brand/logos/logo-horizontal-light-primary.svg',
} as const;

const BrandLogo: React.FC<BrandLogoProps> = ({ color = 'currentColor', className, variant = 'dark', width = 220, ...props }) => (
  <div className={clsx('flex items-center', className)} style={{ color }} {...props}>
    <Image
      src={logoByVariant[variant]}
      alt="TAG08"
      width={width}
      height={56}
      priority
      className="h-auto max-w-full shrink-0"
      style={{ width: `${width}px` }}
    />
  </div>
);

export default BrandLogo;
