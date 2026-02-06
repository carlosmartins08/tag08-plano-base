'use client';

import React from 'react';
import { useTranslation } from './LanguageContext';
import { useUX } from './UXContext';
import Button from './Button';
import BrandLogo from './BrandLogo';
import {
  ArrowUpRight,
  MapPin,
  Mail,
  Instagram,
  Linkedin,
  Facebook,
  Youtube,
  Twitter,
  Phone,
  ShieldCheck,
} from 'lucide-react';

const socialLinks = [
  { href: 'https://instagram.com/tag08.com.br', label: 'Instagram', icon: Instagram },
  { href: 'https://linkedin.com/company/tag08-com-br/', label: 'LinkedIn', icon: Linkedin },
  { href: 'https://www.facebook.com/tag08.com.br', label: 'Facebook', icon: Facebook },
  { href: 'https://www.youtube.com/@tag08portfolio66', label: 'YouTube', icon: Youtube },
  { href: 'https://twitter.com/TAG08_com_br', label: 'Twitter', icon: Twitter },
];

const Footer: React.FC = () => {
  const { t, setPrivacyModalOpen, setCookieModalOpen } = useTranslation();
  const { setStrategyNote } = useUX();

  const handleResetCookies = () => {
    localStorage.removeItem('tag08-cookie-preferences');
    window.location.reload();
  };

  return (
    <footer
      id="contato"
      className="bg-brand-black text-white border-t border-white/10 relative overflow-hidden bg-noise"
      itemScope
      itemType="https://schema.org/Organization"
      onMouseEnter={() => setStrategyNote(t.strategyNotes.hero)}
      onMouseLeave={() => setStrategyNote(null)}
    >
      <meta itemProp="name" content="TAG08 Studio Creations" />
      <meta itemProp="url" content="https://socialmedia.tag08.com.br" />
      <meta itemProp="logo" content="https://socialmedia.tag08.com.br/logo.png" />
      <meta itemProp="legalName" content="TAG08 STUDIO CREATIONS LTDA" />

      <div className="py-24 px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 reveal relative">
          <span className="blueprint-label -top-8 left-1/2 -translate-x-1/2">CONVERSION_FINAL: CTA_BLOCK</span>
          <div className="inline-flex items-center gap-2 text-brand-lime bg-brand-lime/5 border border-brand-lime/20 px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold mx-auto relative">
            <ShieldCheck size={12} />
            {t.footer.badge}
            <span className="blueprint-label -right-16 top-0">SSL_ENCRYPTED</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-black leading-[0.9] tracking-tighter uppercase italic">
            {t.footer.title} <br />
            <span className="text-brand-lime">{t.footer.titleAccent}</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
            {t.footer.description}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-12 relative">
            <span className="blueprint-label -top-4 right-0">ACTION_TYPE: REDIRECT</span>
            <Button
              className="px-10 py-5 text-sm uppercase tracking-widest italic font-black shadow-xl"
              onClick={() => window.open('https://wa.me/message/XURZIJ762YMVB1', '_blank')}
            >
              {t.footer.ctaDiagnosis}
              <ArrowUpRight className="ml-3 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              className="px-10 py-5 text-sm uppercase tracking-widest italic font-black border-white/10 hover:border-brand-lime hover:text-brand-lime transition-all"
              onClick={() => window.open('https://tag08.com.br/contato', '_blank')}
            >
              {t.footer.ctaDirection}
            </Button>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 bg-black/50 py-24 px-4 relative z-10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-12 relative">
          <span className="blueprint-label -top-8 left-0">FOOTER_ARCHITECTURE: GRID_12</span>

          <div className="lg:col-span-4 space-y-10 reveal relative">
            <span className="blueprint-label -top-4 left-0">BRAND_RECAP</span>
            <BrandLogo className="text-4xl text-white" color="white" />
            <p className="text-slate-400 leading-relaxed text-base font-medium max-w-sm">
              {t.footer.about}
            </p>

            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-5 group relative">
                <span className="blueprint-label -left-12 top-0 rotate-90 origin-left">LOC_SCHEMA</span>
                <div className="bg-white/5 p-3 rounded-2xl group-hover:bg-brand-lime group-hover:text-brand-black transition-all duration-500 shadow-lg">
                  <MapPin size={22} />
                </div>
                <div>
                  <span className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-2 font-mono">Escritório</span>
                  <address className="not-italic text-white font-bold leading-relaxed text-sm">
                    R. Cassimiro de Abreu, Nº60<br />
                    Sala 05 - Brisamar<br />
                    João Pessoa - PB, 58033-330
                  </address>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="bg-white/5 p-3 rounded-2xl group-hover:bg-brand-lime group-hover:text-brand-black transition-all duration-500 shadow-lg">
                  <Mail size={22} />
                </div>
                <div>
                  <span className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-2 font-mono">Email</span>
                  <a
                    href="mailto:contato@tag08.com.br"
                    className="text-white font-bold hover:text-brand-lime transition-colors text-sm"
                  >
                    contato@tag08.com.br
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-8 lg:pl-12 reveal stagger-1 relative">
            <span className="blueprint-label -top-4 left-12">STRATEGIC_MAP</span>
            <h4 className="text-white font-black uppercase tracking-widest italic text-lg">{t.footer.ecosystem}</h4>
            <ul className="space-y-5 text-slate-400">
              <li>
                <a
                  href="https://tag08.com.br/"
                  className="hover:text-brand-lime transition-all flex items-center gap-4 group font-bold text-sm"
                >
                  <span className="w-2 h-2 bg-slate-700 rounded-full group-hover:bg-brand-lime transition-colors"></span>
                  Desenvolvimento e Estratégia Digital
                </a>
              </li>
              <li>
                <div className="text-white font-black flex items-center gap-4 text-sm italic">
                  <span className="w-2 h-2 bg-brand-lime rounded-full animate-pulse shadow-[0_0_8px_rgba(212,255,0,0.5)]"></span>
                  Process Intelligence
                </div>
              </li>
              <li>
                <a
                  href="https://tag08.com.br/growth"
                  className="hover:text-brand-lime transition-all flex items-center gap-4 group font-bold text-sm"
                >
                  <span className="w-2 h-2 bg-slate-700 rounded-full group-hover:bg-brand-lime transition-colors"></span>
                  Growth & Marketing
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-8 reveal stagger-2">
            <h4 className="text-white font-black uppercase tracking-widest italic text-lg">{t.footer.institutional}</h4>
            <ul className="space-y-5 text-slate-400 font-bold text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => setPrivacyModalOpen(true)}
                  className="hover:text-brand-lime transition-all"
                >
                  {t.footer.privacy}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setCookieModalOpen(true)}
                  className="hover:text-brand-lime transition-all"
                >
                  {t.footer.cookies}
                </button>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-8 reveal stagger-3 relative">
            <span className="blueprint-label -top-4 left-0">SOCIAL_CHANNELS</span>
            <h4 className="text-white font-black uppercase tracking-widest italic text-lg">{t.footer.social}</h4>
            <div className="flex gap-4 flex-wrap">
              {socialLinks.slice(0, 3).map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/5 hover:bg-brand-lime hover:text-brand-black p-4 rounded-2xl transition-all group border border-white/5 hover:border-brand-lime shadow-lg"
                  >
                    <Icon size={22} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black py-10 px-4 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 text-[10px] font-mono uppercase tracking-[0.4em] text-slate-500 text-center md:text-left">
            <span>© {new Date().getFullYear()} {t.footer.rights}.</span>
            <div className="w-1 h-1 bg-white/10 rounded-full hidden md:block"></div>
            <span>{t.footer.allRights}</span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 text-[10px] text-slate-500 uppercase tracking-[0.4em] font-mono text-center md:text-left relative group">
            <span className="blueprint-label -top-6 right-0 opacity-0 group-hover:opacity-100 italic transition-all">SVR_RESP: 24MS</span>
            <span>CNPJ: 43.140.403/0001-37</span>
            <div className="w-1.5 h-1.5 bg-brand-lime rounded-full hidden md:block animate-pulse"></div>
            <span>João Pessoa • Brasil</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
