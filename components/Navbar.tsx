'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Icons } from '../constants';
import { useTranslation } from './LanguageContext';

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuScrollY, setMenuScrollY] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { label: t.navbar.menu.problem, href: '#problema', id: 'problema' },
    { label: t.navbar.menu.solution, href: '#solucao', id: 'solucao' },
    { label: t.navbar.menu.plan, href: '#pilares', id: 'pilares' },
    { label: t.navbar.menu.cycle, href: '#ciclo', id: 'ciclo' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      window.requestAnimationFrame(() => {
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
        className={`fixed left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 flex items-center gap-4 ${
          isScrolled 
            ? 'top-6 w-[95%] max-w-4xl py-2 px-3 bg-brand-black/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl' 
            : 'top-0 w-full py-6 px-8 bg-transparent'
        }`}
      >
        <Link 
          href="/"
          className="flex items-center gap-3 mr-auto group"
          aria-label="Voltar ao início"
        >
          <div className={`${isScrolled ? 'scale-75' : 'scale-100'} transition-transform duration-300`}>
            <Icons.LogoIcon />
          </div>
          <div className={`flex flex-col ${isScrolled ? 'hidden md:flex' : 'flex'}`}>
            <span className="font-black tracking-tighter leading-none text-white transition-colors group-hover:text-brand-lime">TAG08</span>
            <span className={`text-[8px] font-bold tracking-[0.2em] uppercase leading-none mt-1 ${isScrolled ? 'text-brand-lime' : 'text-slate-400'}`}>Studio</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/5" role="menubar">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              role="menuitem"
              aria-current={activeSection === item.id ? 'page' : undefined}
              className={`relative px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all group ${
                activeSection === item.id 
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

        <Link 
          href="#contato" 
          className={`hidden sm:flex items-center gap-2 px-5 py-2.5 bg-brand-lime text-brand-black rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all`}
        >
          {t.navbar.diagnosis} <span className="hidden lg:inline">{t.navbar.free}</span>
        </Link>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 text-brand-lime relative z-[101]"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <div className="space-y-1.5 w-5" aria-hidden="true">
            <span className={`block h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-x-0' : ''}`}></span>
            <span className={`block h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>

        {isScrolled && (
          <div className="absolute bottom-0 left-0 h-[2px] bg-brand-lime/20 w-full overflow-hidden rounded-b-2xl" aria-hidden="true">
            <div 
              className="h-full bg-brand-lime transition-all duration-500 shadow-[0_0_10px_#D4FF00]" 
              style={{ width: `${Math.min(100, (activeSection === 'hero' ? 5 : activeSection === 'problema' ? 25 : activeSection === 'solucao' ? 50 : activeSection === 'pilares' ? 75 : 100))}%` }}
            ></div>
          </div>
        )}
      </nav>

      <div 
        id="mobile-menu"
        ref={menuRef}
        onScroll={handleMenuScroll}
        aria-hidden={!isMenuOpen}
        aria-label="Menu móvel"
        role="dialog"
        className={`fixed inset-0 z-[90] bg-brand-black transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col px-10 overflow-y-auto ${
          isMenuOpen 
            ? 'opacity-100 scale-100 pointer-events-auto' 
            : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        {/* Background Parallax Elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0" aria-hidden="true">
          <div 
            className={`absolute top-0 -left-20 text-[22rem] md:text-[30rem] font-black text-white leading-none transition-all duration-[1500ms] ease-out select-none mix-blend-soft-light`}
            style={{ 
              transform: `translate(${isMenuOpen ? 0 : -100}px, ${menuScrollY * 0.15}px) rotate(${isMenuOpen ? -5 : -10}deg) scale(${isMenuOpen ? 1 + menuScrollY * 0.0001 : 1.1})`,
              opacity: isMenuOpen ? Math.max(0, 0.08 - (menuScrollY * 0.0002)) : 0,
              filter: `blur(${6 + menuScrollY * 0.01}px)`
            }}
          >
            STUDIO
          </div>

          <div 
            className={`absolute bottom-40 -right-40 text-[18rem] md:text-[28rem] font-black text-brand-lime leading-none transition-all duration-[1500ms] ease-out select-none mix-blend-overlay`}
            style={{ 
              transform: `translate(${isMenuOpen ? 0 : 100}px, ${-menuScrollY * 0.35}px) rotate(${isMenuOpen ? 15 : 20}deg) scale(${isMenuOpen ? 0.95 + menuScrollY * 0.0003 : 0.8})`,
              opacity: isMenuOpen ? Math.min(0.06, 0.02 + menuScrollY * 0.0001) : 0,
              filter: `blur(${Math.max(0, 10 - menuScrollY * 0.01)}px)`
            }}
          >
            TAG08
          </div>
          
          {/* Noise overlay for depth */}
          <div className="absolute inset-0 bg-noise opacity-10"></div>
        </div>
        
        <nav className="relative z-10 flex flex-col gap-6 pt-36 pb-20 my-auto" aria-label="Links do menu móvel">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`relative text-5xl md:text-7xl font-black text-white hover:text-brand-lime transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] uppercase italic tracking-tighter group flex items-center gap-4 ${
                isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
              }`}
              style={{ transitionDelay: `${200 + idx * 80}ms` }}
            >
              <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-4">{item.label}</span>
              <span className="absolute bottom-2 left-0 w-0 h-1.5 bg-brand-lime transition-all duration-500 group-hover:w-full -z-1"></span>
              
              {/* Decorative Index */}
              <span className="text-[10px] font-black italic text-white/20 tracking-widest absolute -left-8 top-1">
                0{idx + 1}
              </span>
            </Link>
          ))}
          
          <div className="mt-16 flex flex-col gap-8">
            <div 
              className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isMenuOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-90'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              <Link 
                href="#contato"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex items-center justify-center py-8 px-16 bg-brand-lime text-brand-black font-black text-2xl rounded-[3rem] uppercase italic tracking-tighter transition-all hover:bg-white hover:scale-105 active:scale-95 shadow-[0_20px_60px_rgba(212,255,0,0.2)]"
              >
                {t.cta.button}
              </Link>
            </div>
            
            <div 
              className={`flex items-center gap-6 mt-4 transition-all duration-1000 ease-out ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: '800ms' }}
            >
              {['IG', 'LI', 'YT'].map((social) => (
                <span key={social} className="text-[10px] font-black text-white/30 tracking-[0.4em] hover:text-brand-lime transition-colors cursor-pointer">
                  {social}
                </span>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;