'use client';

import React from 'react';
import clsx from 'clsx';

type ButtonVariant = 'solid' | 'outline';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variantStyles: Record<ButtonVariant, string> = {
  solid: 'bg-brand-lime text-brand-black shadow-[0_10px_30px_rgba(212,255,0,0.35)] hover:bg-white hover:text-brand-black',
  outline: 'border border-white/40 text-white bg-transparent hover:border-brand-lime hover:text-brand-black hover:bg-white/10',
};

const Button: React.FC<ButtonProps> = ({
  variant = 'solid',
  className,
  children,
  type = 'button',
  ...props
}) => (
  <button
    type={type}
    className={clsx(
      'inline-flex items-center justify-center rounded-full font-black tracking-wider uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black',
      variantStyles[variant],
      className
    )}
    {...props}
  >
    {children}
  </button>
);

export default Button;
