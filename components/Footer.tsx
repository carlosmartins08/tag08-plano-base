'use client';

import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { SITE_PROFILE } from '../constants';
import { useConsent } from '../contexts/ConsentContext';
import { useTranslation } from '../contexts/LanguageContext';
import { trackEvent } from '../lib/analytics';

const socialLinks = [
  { label: 'Instagram', href: SITE_PROFILE.socialProfiles.instagram, Icon: Instagram },
  { label: 'LinkedIn', href: SITE_PROFILE.socialProfiles.linkedin, Icon: Linkedin },
  { label: 'YouTube', href: SITE_PROFILE.socialProfiles.youtube, Icon: Youtube },
  { label: 'Facebook', href: SITE_PROFILE.socialProfiles.facebook, Icon: Facebook },
  { label: 'X', href: SITE_PROFILE.socialProfiles.twitter, Icon: Twitter },
];

export default function Footer() {
  const { t, recommendedContactHref } = useTranslation();
  const { setPrivacyModalOpen, setCookieModalOpen, resetCookieConsent } = useConsent();
  const institutionalLinks = [
    { label: t.footer.managementService, href: 'https://tag08.com.br/servicos/gestao-de-redes-sociais' },
    { label: t.footer.about, href: 'https://tag08.com.br/sobre' },
    { label: t.footer.services, href: 'https://tag08.com.br/servicos' },
    { label: t.footer.institutionalContact, href: 'https://tag08.com.br/contato' },
  ];
  const planLinks = [
    { label: t.navbar.menu.problem, href: '#problema' },
    { label: t.navbar.menu.howItWorks, href: '#solucao' },
    { label: t.navbar.menu.plan, href: '#pilares' },
    { label: t.navbar.menu.faq, href: '#faq' },
  ];
  const trackInstitutionalLink = (label: string, href: string, section: string) => trackEvent('institutional_link_click', { label, href, section });

  return (
    <footer id="main-footer" className="relative overflow-hidden border-t border-white/[0.05] bg-brand-black pb-12 pt-16 text-white">
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-brand-lime/5 blur-[120px]" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <section className="space-y-6">
            <div>
              <BrandLogo variant="light" width={190} className="w-[190px]" />
              <p className="mt-2 text-xs font-black uppercase tracking-[0.18em] text-slate-400">Plano Base TAG08</p>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-slate-300">{t.footer.description}</p>
            <div className="flex flex-wrap gap-2.5" aria-label={t.footer.social}>
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`TAG08 no ${label}`}
                  onClick={() => trackInstitutionalLink(label, href, 'footer_social')}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-400 transition-colors duration-300 hover:border-brand-lime hover:text-brand-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-sm font-semibold tracking-wide text-white">{t.navbar.menu.plan}</h2>
            <ul className="space-y-3 text-sm text-slate-400">
              {planLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-brand-lime">{link.label}</a>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-6 text-sm font-semibold tracking-wide text-white">{t.footer.services}</h2>
            <ul className="space-y-3 text-sm text-slate-400">
              {institutionalLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={() => trackInstitutionalLink(link.label, link.href, 'footer_institutional')} className="transition-colors hover:text-brand-lime">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-6 text-sm font-semibold tracking-wide text-white">{t.footer.centralSupport}</h2>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-lime" aria-hidden="true" />
                <a href={`mailto:${SITE_PROFILE.email}`} onClick={() => trackInstitutionalLink(SITE_PROFILE.email, `mailto:${SITE_PROFILE.email}`, 'footer_email')} className="text-white transition-colors hover:text-brand-lime">
                  {SITE_PROFILE.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-lime" aria-hidden="true" />
                <a href={recommendedContactHref} target="_blank" rel="noreferrer" onClick={() => trackInstitutionalLink('WhatsApp', recommendedContactHref, 'footer_whatsapp')} className="text-white transition-colors hover:text-brand-lime">
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-lime" aria-hidden="true" />
                <span>{SITE_PROFILE.address.addressLocality} - {SITE_PROFILE.address.addressRegion}</span>
              </li>
            </ul>
          </section>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/[0.08] pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {t.footer.rights}. {t.footer.allRights}</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <button type="button" onClick={() => setPrivacyModalOpen(true)} className="transition-colors hover:text-white">{t.footer.privacy}</button>
            <button type="button" onClick={() => setCookieModalOpen(true)} className="transition-colors hover:text-white">{t.footer.cookies}</button>
            <button type="button" onClick={resetCookieConsent} className="transition-colors hover:text-white">{t.footer.preferences}</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
