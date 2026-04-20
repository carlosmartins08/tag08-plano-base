'use client';

import React from 'react';
import clsx from 'clsx';

type ButtonVariant = 'solid' | 'outline' | 'subtle';
type ButtonSize = 'sm' | 'md' | 'lg';

interface CommonButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
}

type NativeButtonProps = CommonButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> & {
    href?: undefined;
    type?: 'button' | 'submit' | 'reset';
  };

type AnchorButtonProps = CommonButtonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = NativeButtonProps | AnchorButtonProps;

const variantStyles: Record<ButtonVariant, string> = {
  solid:
    'bg-brand-lime text-brand-black shadow-[0_10px_30px_rgba(212,255,0,0.35)] hover:bg-white hover:text-brand-black hover:shadow-[0_12px_34px_rgba(212,255,0,0.26)]',
  outline:
    'border border-white/40 text-white bg-transparent hover:border-brand-lime hover:text-brand-lime hover:bg-white/5',
  subtle:
    'border border-white/10 bg-white/5 text-white hover:border-brand-lime/30 hover:bg-brand-lime/5 hover:text-brand-lime',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-[10px] tracking-[0.24em]',
  md: 'px-6 py-3 text-[11px] tracking-[0.3em]',
  lg: 'px-8 py-4 text-sm tracking-[0.32em]',
};

const Button: React.FC<ButtonProps> = ({
  variant = 'solid',
  size = 'md',
  fullWidth = false,
  className,
  children,
  ...props
}) => {
  const composedClassName = clsx(
    'inline-flex items-center justify-center gap-2 rounded-full font-black uppercase transition-all duration-300 ease-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black',
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && 'w-full',
    className
  );

  if (typeof (props as AnchorButtonProps).href === 'string') {
    const { href, ...anchorProps } = props as AnchorButtonProps;
    return (
      <a href={href} className={composedClassName} {...(anchorProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  const { type = 'button', ...buttonProps } = props as NativeButtonProps;
  return (
    <button type={type} className={composedClassName} {...buttonProps}>
      {children}
    </button>
  );
};

export default Button;
