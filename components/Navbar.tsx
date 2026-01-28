'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Icons } from '../constants';
import { useTranslation } from './LanguageContext';
import { useUX } from './UXContext';
import Magnetic from './Magnetic';

const Navbar: React.FC = () => {
  const { t, language } = useTranslation();
  const { setStrategyNote, isBlueprintMode, toggleBlueprintMode } = useUX();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuScrollY, setMenuScrollY] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);

  // Script para ativação secreta do Blueprint (3 cliques no logo)
  const [logoClicks, setLogoClicks] = useState(0);

  const handleLogoClick = (e: React.MouseEvent) => {
    // Evita o redirecionamento imediato para podermos processar os múltiplos cliques
    setLogoClicks(prev => {
      const next = prev + 1;
      if (next === 3) {
        toggleBlueprintMode();
        return 0;
      }
      return next;
    });

    // Resetar cliques após 1.5s de inatividade
    setTimeout(() => setLogoClicks(0), 1500);
  };

  const navItems = [
    { label: t.navbar.menu.problem, href: '#problema', id: 'problema' },
    { label: t.navbar.menu.solution, href: '#solucao', id: 'solucao' },
    { label: t.navbar.menu.plan, href: '#pilares', id: 'pilares' },
    { label: t.navbar.menu.cycle, href: '#ciclo', id: 'ciclo' },
  ];

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      window.requestAnimationFrame(() => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        setScrollProgress(scrolled);

        setIsScrolled(window.scrollY > 50);

        const sections = ['problema', 'solucao', 'pilares', 'ciclo'];
        const current = sections.find(section => {
          const el = document.getElementById(section);
          if (el) {
            const rect = el.getBoundingClientRect();
            return rect.top >= -100 && rect.top <= 400;
          }
          return false;
        });

        if (current) setActiveSection(current);
        else if (window.scrollY < 100) setActiveSection('hero');
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [t]);

  const handleMenuScroll = () => {
    if (menuRef.current) {
      setMenuScrollY(menuRef.current.scrollTop);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      if (menuRef.current) menuRef.current.scrollTop = 0;
      setMenuScrollY(0);
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav
        aria-label="Navegação Principal"
        className={`fixed left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 flex items-center gap-4 ${isScrolled
          ? 'top-6 w-[95%] max-w-5xl py-2 px-3 bg-brand-black/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl'
          : 'top-0 w-full py-6 px-8 bg-transparent'
          }`}
      >
        <div className="flex items-center gap-3 mr-auto group cursor-pointer" onClick={handleLogoClick}>
          <Link
            href={`/${language}`}
            className="flex items-center gap-3"
            aria-label="Voltar ao início"
            onMouseEnter={() => setStrategyNote(t.strategyNotes.hero)}
            onMouseLeave={() => setStrategyNote(null)}
          >
            <div className={`${isScrolled ? 'scale-75' : 'scale-100'} transition-transform duration-300 relative`}>
              <Icons.LogoIcon />
              <span className="blueprint-label -top-4 -left-4">LOGO_ANCHOR</span>
              {/* Feedback visual discreto para cliques no logo */}
              {logoClicks > 0 && (
                <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-brand-lime rounded-full animate-ping"></span>
              )}
            </div>
            <div className={`flex flex-col ${isScrolled ? 'hidden md:flex' : 'flex'} relative`}>
              <span className="font-black tracking-tighter leading-none text-white transition-colors group-hover:text-brand-lime">TAG08</span>
              <span className={`text-[8px] font-bold tracking-[0.2em] uppercase leading-none mt-1 ${isScrolled ? 'text-brand-lime' : 'text-slate-400'}`}>Studio</span>
              <span className="blueprint-label -right-12 top-0">T08_V1.1</span>
            </div>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/5 relative" role="menubar">
          <span className="blueprint-label -top-6 left-1/2 -translate-x-1/2">NAV_GRID</span>
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              role="menuitem"
              aria-current={activeSection === item.id ? 'page' : undefined}
              className={`relative px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all group ${activeSection === item.id
                ? 'bg-brand-lime text-brand-black shadow-lg shadow-brand-lime/20'
                : 'text-white/60 hover:text-white'
                }`}
            >
              <span className="relative z-10">{item.label}</span>
              {activeSection !== item.id && (
                <span className="absolute bottom-2 left-4 right-4 h-[1px] bg-brand-lime transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              )}
            </Link>
          ))}
        </div>

        <Magnetic>
          <Link
            href="#contato"
            onMouseEnter={() => setStrategyNote(t.strategyNotes.metrics)}
            onMouseLeave={() => setStrategyNote(null)}
            className={`hidden sm:flex items-center gap-2 px-5 py-2.5 bg-brand-lime text-brand-black rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white transition-all`}
          >
            {t.navbar.diagnosis} <span className="hidden lg:inline">{t.navbar.free}</span>
          </Link>
        </Magnetic>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 text-brand-lime relative z-[101]"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
        >
          <div className="space-y-1.5 w-5">
            <span className={`block h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-x-0' : ''}`}></span>
            <span className={`block h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>

        {isScrolled && (
          <div className="absolute bottom-0 left-0 h-[2px] bg-brand-lime/20 w-full overflow-hidden rounded-b-2xl">
            <div
              className="h-full bg-brand-lime transition-all duration-300 shadow-[0_0_10px_#D4FF00]"
              style={{ width: `${scrollProgress}%` }}
            ></div>
          </div>
        )}
      </nav>

      <div
        id="mobile-menu"
        ref={menuRef}
        onScroll={handleMenuScroll}
        className={`fixed inset-0 z-[90] bg-brand-black transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col px-10 overflow-y-auto ${isMenuOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}
      >
        <div className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0">
          <div
            className={`absolute top-0 -left-20 text-[22rem] md:text-[30rem] font-black text-white leading-none transition-all duration-[1500ms] ease-out select-none mix-blend-soft-light`}
            style={{
              transform: `translate(${isMenuOpen ? 0 : -100}px, ${menuScrollY * 0.15}px) rotate(${isMenuOpen ? -5 : -10}deg)`,
              opacity: isMenuOpen ? 0.08 : 0,
              filter: `blur(10px)`
            }}
          >
            STUDIO
          </div>
        </div>

        <nav className="relative z-10 flex flex-col gap-6 pt-36 pb-20 my-auto">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`relative text-5xl md:text-7xl font-black text-white hover:text-brand-lime transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] uppercase italic tracking-tighter group flex items-center gap-4 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
              style={{ transitionDelay: `${200 + idx * 80}ms` }}
            >
              <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-4">{item.label}</span>
              <span className="text-[10px] font-black italic text-white/20 absolute -left-8 top-1">0{idx + 1}</span>
            </Link>
          ))}

          <div className="mt-16">
            <Link
              href="#contato"
              onClick={() => setIsMenuOpen(false)}
              className="inline-flex items-center justify-center py-6 px-12 bg-brand-lime text-brand-black font-black text-xl rounded-2xl uppercase italic tracking-tighter"
            >
              {t.cta.button}
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;