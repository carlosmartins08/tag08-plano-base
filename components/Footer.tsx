'use client';

import React from 'react';
import { ArrowUpRight, MapPin, Mail, Instagram, Linkedin, Facebook, Youtube, Twitter } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';
import { useConsent } from '../contexts/ConsentContext';
import { useUX } from '../contexts/UXContext';
import BrandLogo from './BrandLogo';
import { GOOGLE_BUSINESS, SITE_CONFIG, SITE_PROFILE } from '../constants';

const socialLinks = [
  { href: SITE_PROFILE.socialProfiles.instagram, label: 'Instagram', icon: Instagram },
  { href: SITE_PROFILE.socialProfiles.linkedin, label: 'LinkedIn', icon: Linkedin },
  { href: SITE_PROFILE.socialProfiles.facebook, label: 'Facebook', icon: Facebook },
  { href: SITE_PROFILE.socialProfiles.youtube, label: 'YouTube', icon: Youtube },
  { href: SITE_PROFILE.socialProfiles.twitter, label: 'Twitter', icon: Twitter },
];

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const { setPrivacyModalOpen, setCookieModalOpen, resetCookieConsent } = useConsent();
  const { setStrategyNote } = useUX();

  const handleResetCookies = () => {
    resetCookieConsent();
  };

  return (
    <footer
      className="relative overflow-hidden border-t border-white/10 bg-brand-black bg-noise text-white"
      itemScope
      itemType="https://schema.org/Organization"
      onMouseEnter={() => setStrategyNote(t.strategyNotes.hero)}
      onMouseLeave={() => setStrategyNote(null)}
    >
      <meta itemProp="name" content={SITE_PROFILE.legalName} />
      <meta itemProp="url" content={SITE_CONFIG.domain} />
      <meta itemProp="logo" content={`${SITE_CONFIG.domain}${SITE_PROFILE.logoPath}`} />
      <meta itemProp="legalName" content={SITE_PROFILE.legalName} />

      <div className="relative z-10 px-6 pt-20">
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <span className="blueprint-label -top-8 left-0 text-[8px]">FOOTER_ARCHITECTURE: GRID_12_OPTIMIZED</span>

          <div className="reveal relative space-y-12 lg:col-span-4">
            <span className="blueprint-label -top-4 left-0">BRAND_SECTION</span>
            <div className="group cursor-pointer origin-left transition-transform duration-500 hover:scale-[1.02]">
              <BrandLogo className="text-4xl text-white" color="white" variant="light" />
            </div>
            <p className="max-w-sm text-sm leading-relaxed font-medium text-slate-400">
              {t.footer.about}
            </p>

            <div className="space-y-8 pt-4">
              <div className="group relative flex items-start gap-4">
                <div className="ds-icon-shell rounded-xl p-3 shadow-xl group-hover:border-brand-lime group-hover:bg-brand-lime group-hover:text-brand-black">
                  <MapPin size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="mb-1 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 font-mono">
                    {t.footer.headquarters}
                  </span>
                  <address className="not-italic">
                    <a
                      href={GOOGLE_BUSINESS.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded text-sm font-bold leading-snug text-white transition-colors hover:text-brand-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black"
                    >
                      {SITE_PROFILE.address.streetAddress}<br />
                      {SITE_PROFILE.address.addressLocality} - {SITE_PROFILE.address.addressRegion}<br />
                      Brasil
                    </a>
                  </address>
                </div>
              </div>

              <div className="group flex items-center gap-4">
                <div className="ds-icon-shell rounded-xl p-3 shadow-xl group-hover:border-brand-lime group-hover:bg-brand-lime group-hover:text-brand-black">
                  <Mail size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="mb-1 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 font-mono">
                    {t.footer.centralSupport}
                  </span>
                  <a
                    href={`mailto:${SITE_PROFILE.email}`}
                    className="rounded text-sm font-bold text-white transition-colors hover:text-brand-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black"
                  >
                    {SITE_PROFILE.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal stagger-1 relative space-y-8 lg:col-span-3 lg:pl-8">
            <h4 className="text-base font-black uppercase italic tracking-widest text-white border-l-2 border-brand-lime pl-4">
              {t.footer.ecosystem}
            </h4>
            <ul className="space-y-4">
              {[
                { label: 'TAG08 Digital Strategy', href: 'https://tag08.com.br/' },
                { label: 'Hospedagem TAG08', href: 'https://hospedagem.tag08.com.br/' },
                { label: 'Social Media TAG08', href: 'https://socialmedia.tag08.com.br/' },
                { label: t.footer.aboutTag08, href: 'https://tag08.com.br/sobre-a-tag08/' },
                { label: t.footer.blog, href: 'https://tag08.com.br/blog/' },
                { label: t.footer.sebraetec, href: 'https://tag08.com.br/sebraetec-impulsionando-empreendedores/' },
                { label: 'Process Intelligence', href: 'https://processos.tag08.com.br/' },
              ].map((item) => (
                <li key={item.label}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 rounded text-[13px] font-bold uppercase tracking-wider text-slate-400 transition-all hover:text-brand-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black"
                    >
                      <ArrowUpRight size={14} className="opacity-0 -ml-4 text-brand-lime transition-all group-hover:ml-0 group-hover:opacity-100" />
                      {item.label}
                    </a>
                  ) : (
                    <div className="ds-panel-shell mt-2 flex w-fit items-center gap-3 rounded-lg bg-white/5 px-3 py-2 text-[13px] font-black italic text-white">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-lime shadow-[0_0_8px_rgba(212,255,0,1)] animate-pulse" />
                      {item.label}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal stagger-2 space-y-8 lg:col-span-2">
            <h4 className="text-base font-black uppercase italic tracking-widest text-white">
              {t.footer.institutional}
            </h4>
            <ul className="space-y-4">
              {[
                { label: t.footer.privacy, action: () => setPrivacyModalOpen(true) },
                { label: t.footer.cookies, action: () => setCookieModalOpen(true) },
                { label: t.footer.preferences, action: handleResetCookies },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={item.action}
                    className="rounded text-left text-[13px] font-bold uppercase tracking-wider text-slate-400 transition-all hover:text-brand-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal stagger-3 relative space-y-8 lg:col-span-3">
            <h4 className="text-base font-black uppercase italic tracking-widest text-white">
              {t.footer.social}
            </h4>
            <div className="grid grid-cols-4 gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ds-icon-shell group flex aspect-square rounded-xl bg-white/5 p-3.5 shadow-lg hover:border-brand-lime hover:bg-brand-lime hover:text-brand-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black"
                    aria-label={link.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
            <div className="ds-panel-shell rounded-2xl border-brand-lime/10 bg-brand-lime/5 p-4 pt-4">
              <p className="text-[11px] font-medium leading-relaxed italic text-slate-400">
                {t.footer.socialDesc}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/5 bg-black px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 sm:flex-row">
          <div className="ds-text-muted flex flex-col items-center gap-3 text-center text-[10px] font-mono uppercase tracking-[0.22em] sm:flex-row sm:gap-8 sm:text-left">
            <span>© {new Date().getFullYear()} {t.footer.rights}</span>
            <span className="hidden text-white/10 sm:block">|</span>
            <span>{t.footer.allRights}</span>
          </div>

          <div className="group relative flex flex-col items-center gap-3 text-center text-[10px] font-mono uppercase tracking-[0.22em] ds-text-muted sm:flex-row sm:gap-6 sm:text-left">
            <span className="blueprint-label -top-6 right-0 opacity-0 transition-all group-hover:opacity-100 italic pointer-events-none">NODE_SVR_PROD: LATEST</span>
            <span>CNPJ: 26.828.685/0001-52</span>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-lime shadow-[0_0_8px_rgba(212,255,0,0.5)]" />
              <span>JOÃO PESSOA • BRASIL</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
