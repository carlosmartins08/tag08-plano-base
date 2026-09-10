'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { MessageCircleMore } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';
import { useUX } from '../contexts/UXContext';
import { trackEvent, trackFunnelEvent } from '../lib/analytics';
import Magnetic from './Magnetic';
import Button from './Button';
import BrandLogo from './BrandLogo';

const Navbar: React.FC = () => {
  const { t, language, localeSignals, recommendedContactHref, recommendedContactRoute } = useTranslation();
  const { setStrategyNote, isBlueprintMode, toggleBlueprintMode } = useUX();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuScrollY, setMenuScrollY] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuToggleRef = useRef<HTMLButtonElement>(null);

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
    { label: t.navbar.menu.videos, href: '#videos', id: 'videos' },
    { label: t.navbar.menu.team, href: '#equipe', id: 'equipe' },
    { label: t.navbar.menu.testimonials, href: '#depoimentos', id: 'depoimentos' },
    { label: t.navbar.menu.faq, href: '#faq', id: 'faq' },
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

        const sections = ['problema', 'solucao', 'pilares', 'ciclo', 'videos', 'equipe', 'depoimentos', 'faq'];
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
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    if (menuRef.current) menuRef.current.scrollTop = 0;
    setMenuScrollY(0);

    const focusable = menuRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
    focusable?.[0]?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen || !menuRef.current) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setIsMenuOpen(false);
        menuToggleRef.current?.focus();
        return;
      }

      if (event.key !== 'Tab') return;

      const focusable = menuRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
      if (!focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
        return;
      }

      if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isMenuOpen]);

  const handleDirectContactClick = (entryPoint: 'navbar' | 'mobile_menu') => {
    trackEvent('direct_contact_click', {
      entry_point: entryPoint,
      contact_route: recommendedContactRoute,
      language_selected: language,
      locale_region: localeSignals.regionCode ?? 'unknown',
      locale_timezone: localeSignals.timeZone ?? 'unknown',
    });
    trackFunnelEvent('whatsapp_click', {
      lang: language,
      section: entryPoint,
      cta: 'diagnosis_button',
      country: localeSignals.countryBucket,
      route: recommendedContactRoute,
    });
  };

  return (
    <>
      <nav
        aria-label="Navegação Principal"
        className={`fixed left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 flex items-center gap-4 ${isScrolled
          ? 'top-6 w-[95%] max-w-5xl py-2 px-3 bg-brand-black/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl'
          : 'top-0 w-full py-5 px-5 xl:px-6 bg-black/35 backdrop-blur-md border-b border-white/6'
          }`}
      >
        <div className="flex items-center mr-auto group cursor-pointer pr-2 xl:pr-3" onClick={handleLogoClick}>
          <Link
          href="#hero"
            className="flex items-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black"
            aria-label="Voltar ao início"
            onMouseEnter={() => setStrategyNote(t.strategyNotes.hero)}
            onMouseLeave={() => setStrategyNote(null)}
          >
            <div className={`${isScrolled ? 'scale-90' : 'scale-100'} transition-transform duration-300 relative`}>
              <BrandLogo className="max-h-10" variant="light" width={isScrolled ? 132 : 148} />
              <span className="blueprint-label -top-4 -left-4">LOGO_ANCHOR</span>
              {/* Feedback visual discreto para cliques no logo */}
              {logoClicks > 0 && (
                <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-brand-lime rounded-full animate-ping"></span>
              )}
            </div>
          </Link>
        </div>

        <div className="hidden xl:flex flex-1 items-center justify-center gap-0.5 relative min-w-0">
          <span className="blueprint-label -top-6 left-1/2 -translate-x-1/2">NAV_GRID</span>
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              aria-current={activeSection === item.id ? 'page' : undefined}
              className={`relative rounded-full px-2 py-2 text-[10px] font-black uppercase tracking-[0.12em] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black group whitespace-nowrap xl:px-2.5 ${activeSection === item.id
                ? 'bg-brand-lime text-brand-black shadow-[0_10px_30px_rgba(212,255,0,0.22)]'
                : 'text-white/60 hover:text-white'
                }`}
            >
              <span className="relative z-10">{item.label}</span>
              {activeSection !== item.id && (
                <span className="absolute bottom-[7px] left-3 right-3 h-[1px] bg-brand-lime/80 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              )}
            </Link>
          ))}
        </div>

        <Magnetic>
          <a
            href={recommendedContactHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleDirectContactClick('navbar')}
            onMouseEnter={() => setStrategyNote(t.strategyNotes.metrics)}
            onMouseLeave={() => setStrategyNote(null)}
            aria-label={`${t.navbar.diagnosis} ${t.navbar.free}`}
            title={`${t.navbar.diagnosis} ${t.navbar.free}`}
            className="hidden xl:flex ml-2 h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-lime text-brand-black shadow-[0_10px_24px_rgba(212,255,0,0.2)] transition-all duration-300 hover:bg-white hover:shadow-[0_12px_28px_rgba(212,255,0,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black"
          >
            <MessageCircleMore className="h-[18px] w-[18px]" aria-hidden="true" />
          </a>
        </Magnetic>

        <button
          ref={menuToggleRef}
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative z-[101] flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-brand-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black xl:hidden"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
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
              className="h-full bg-brand-lime transition-all duration-300 ease-brand shadow-[0_0_10px_rgba(212,255,0,0.8)]"
              style={{ width: `${scrollProgress}%` }}
            ></div>
          </div>
        )}
      </nav>

      <div
        id="mobile-menu"
        ref={menuRef}
        onScroll={handleMenuScroll}
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen}
        className={`fixed inset-0 z-[90] bg-brand-black transition-all duration-700 ease-brand flex flex-col px-6 sm:px-10 overflow-y-auto ${isMenuOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}
      >
        <div className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0">
          <div
            className={`absolute top-0 -left-20 text-[22rem] md:text-[30rem] font-black text-white leading-none transition-all duration-[1500ms] ease-brand select-none mix-blend-soft-light`}
            style={{
              transform: `translate(${isMenuOpen ? 0 : -100}px, ${menuScrollY * 0.15}px) rotate(${isMenuOpen ? -5 : -10}deg)`,
              opacity: isMenuOpen ? 0.08 : 0,
              filter: `blur(10px)`
            }}
          >
            STUDIO
          </div>
        </div>

        <nav className="relative z-10 my-auto flex flex-col gap-4 pt-28 pb-16 sm:gap-6 sm:pt-36 sm:pb-20">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`relative flex items-center gap-4 text-4xl font-black uppercase italic tracking-tighter text-white transition-all duration-1000 ease-brand hover:text-brand-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime focus-visible:ring-offset-4 focus-visible:ring-offset-brand-black sm:text-5xl lg:text-6xl ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
              style={{ transitionDelay: `${200 + idx * 80}ms` }}
            >
              <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-4">{item.label}</span>
              <span className="absolute -left-4 top-1 text-[10px] font-black italic text-white/20 sm:-left-8">0{idx + 1}</span>
            </Link>
          ))}

          <div className="mt-10 sm:mt-16">
            <Button
              href={recommendedContactHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                handleDirectContactClick('mobile_menu');
                setIsMenuOpen(false);
              }}
              size="lg"
              className="rounded-2xl text-xl italic tracking-tighter"
            >
              {t.cta.button}
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
