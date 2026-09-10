'use client';

import Link from 'next/link';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import BrandLogo from './BrandLogo';
import { useTranslation } from '../contexts/LanguageContext';

export default function Navbar() {
  const { t, language } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const items = [
    { label: t.navbar.menu.problem, href: '#problema' },
    { label: t.navbar.menu.howItWorks, href: '#solucao' },
    { label: t.navbar.menu.plan, href: '#pilares' },
    { label: t.navbar.menu.cycle, href: '#ciclo' },
    { label: t.navbar.menu.faq, href: '#faq' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);
  const languages = [
    { code: 'pt', label: 'PT', name: 'Português' },
    { code: 'en', label: 'EN', name: 'English' },
    { code: 'es', label: 'ES', name: 'Español' },
    { code: 'fr', label: 'FR', name: 'Français' },
  ] as const;

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-[100] transition-all duration-500 ${
        scrolled
          ? 'border-b border-white/[0.08] bg-brand-black/95 py-3 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.9)] backdrop-blur-2xl'
          : 'border-b border-transparent bg-brand-black/70 py-5 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="#hero" aria-label="TAG08 — início" onClick={closeMobileMenu} className="group flex shrink-0 items-center">
          <BrandLogo variant="light" width={190} className="w-[142px] opacity-95 transition-opacity duration-300 group-hover:opacity-100 sm:w-[190px]" />
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-1.5 rounded-full border border-white/[0.05] bg-white/[0.02] p-1 lg:flex">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-xs font-semibold text-white/70 transition-colors duration-300 hover:bg-white/[0.04] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <div aria-label="Idioma atual" className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs font-black tracking-wider text-brand-lime">
            {language.toUpperCase()}
          </div>
          <Link
            href="#contato"
            className="inline-flex items-center gap-1.5 rounded-lg rounded-tl-none rounded-br-none bg-brand-lime px-5 py-2.5 text-xs font-black text-brand-black transition-all duration-300 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black"
          >
            {t.navbar.cta} <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-2 text-white/80 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime lg:hidden"
        >
          {mobileMenuOpen ? <X className="h-5 w-5 text-brand-lime" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div id="mobile-navigation" className="border-t border-white/[0.08] bg-brand-black/98 shadow-2xl backdrop-blur-3xl lg:hidden">
          <nav aria-label="Navegação mobile" className="mx-auto max-w-7xl px-6 py-8">
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.24em] text-slate-400">Navegação</p>
            <div className="grid gap-1">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="flex items-center justify-between border-b border-white/[0.05] py-4 font-display text-2xl font-medium text-white/85 transition-colors hover:text-brand-lime"
                >
                  {item.label} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Trocar idioma">
              {languages.map((item) => (
                <a
                  key={item.code}
                  href={`/${item.code}`}
                  onClick={closeMobileMenu}
                  aria-current={language === item.code ? 'page' : undefined}
                  className={`rounded-lg border px-3 py-2 text-xs font-black tracking-wider transition-colors ${
                    language === item.code ? 'border-brand-lime bg-brand-lime text-brand-black' : 'border-white/[0.1] text-slate-300 hover:border-brand-lime/60 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <Link
              href="#contato"
              onClick={closeMobileMenu}
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg rounded-tl-none rounded-br-none bg-brand-lime px-5 py-3 text-xs font-black text-brand-black"
            >
              {t.navbar.cta} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
