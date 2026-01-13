'use client';

import React from 'react';
import Link from 'next/link';
import { Icons } from '../constants';
import { useTranslation } from './LanguageContext';

const Footer: React.FC = () => {
  const { t, setPrivacyModalOpen, setCookieModalOpen } = useTranslation();

  const handleResetCookies = () => {
    localStorage.removeItem('tag08-cookie-preferences');
    window.location.reload();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { name: 'Instagram', href: 'http://instagram.com/tag08.com.br', icon: <Icons.Instagram />, aria: 'Siga a TAG08 no Instagram' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/tag08-com-br/', icon: <Icons.Linkedin />, aria: 'Conecte-se conosco no LinkedIn' },
    { name: 'YouTube', href: 'https://www.youtube.com/@tag08portfolio66', icon: <Icons.Youtube />, aria: 'Assista nossos cases no YouTube' },
    { name: 'Facebook', href: 'https://www.facebook.com/tag08.com.br', icon: <Icons.Facebook />, aria: 'Curta nossa página no Facebook' },
    { name: 'Twitter', href: 'https://twitter.com/TAG08_com_br', icon: <Icons.TwitterX />, aria: 'Siga a TAG08 no X (Twitter)' },
    { name: 'Pinterest', href: 'https://br.pinterest.com/contatotag08/', icon: <Icons.Pinterest />, aria: 'Veja nossas inspirações no Pinterest' },
  ];

  return (
    <footer 
      className="relative bg-brand-black text-slate-400 pt-32 pb-12 border-t border-white/5 overflow-hidden bg-noise"
      itemScope 
      itemType="https://schema.org/Organization"
    >
      {/* Dados Estruturados Ocultos para SEO */}
      <meta itemProp="name" content="TAG08 Studio Creations" />
      <meta itemProp="url" content="https://tag08.com.br" />
      <meta itemProp="logo" content="https://tag08.com.br/logo.png" />
      <meta itemProp="legalName" content="TAG08 STUDIO CREATIONS LTDA" />

      {/* Elementos Decorativos de Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-lime/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true"></div>
      
      <div className="absolute bottom-0 left-0 w-full pointer-events-none select-none overflow-hidden z-0 opacity-[0.02]" aria-hidden="true">
        <span className="text-[25vw] font-black leading-none whitespace-nowrap -mb-10 block">
          TAG08 STUDIO
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
          
          {/* Coluna de Branding e Social */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-4 mb-8 group" aria-label="TAG08 Studio - Voltar para Home">
              <Icons.LogoIcon />
              <div className="flex flex-col">
                <span className="text-3xl font-black text-white tracking-tighter leading-none group-hover:text-brand-lime transition-colors">TAG08</span>
                <span className="text-[10px] font-bold text-white/50 tracking-[0.3em] uppercase leading-none mt-1">Studio Creations</span>
              </div>
            </Link>
            <p className="max-w-md text-base leading-relaxed font-medium mb-10 text-slate-300" itemProp="description">
              Transformamos operações de marketing em máquinas de escala. Consultoria estratégica focada em marcas que buscam o topo do mercado digital.
            </p>
            
            <nav aria-label="Redes Sociais da TAG08">
              <ul className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-3 gap-3 w-full list-none p-0 m-0">
                {socialLinks.map((social) => (
                  <li key={social.name}>
                    <a 
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer me"
                      className="h-12 w-full rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-brand-lime hover:text-brand-black hover:border-brand-lime transition-all duration-300 group outline-none focus-visible:ring-2 focus-visible:ring-brand-lime"
                      aria-label={social.aria}
                      itemProp="sameAs"
                    >
                      <div className="transition-transform group-hover:scale-110" aria-hidden="true">
                        {social.icon}
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Coluna de Links Rápidos */}
          <div className="lg:col-span-2 lg:ml-8">
            <h4 id="nav-footer-explore" className="text-white font-black mb-8 uppercase tracking-[0.2em] text-[10px] italic">Explorar</h4>
            <nav aria-labelledby="nav-footer-explore">
              <ul className="flex flex-col gap-4 list-none p-0 m-0">
                {['Problema', 'Solução', 'Pilares', 'Ciclo'].map((link) => (
                  <li key={link}>
                    <a 
                      href={`#${link.toLowerCase()}`}
                      className="text-sm font-bold hover:text-brand-lime transition-colors w-fit relative group block outline-none focus-visible:text-brand-lime"
                    >
                      {link}
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-lime transition-all duration-300 group-hover:w-full" aria-hidden="true"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Coluna de Diretrizes Legais */}
          <div className="lg:col-span-2">
            <h4 id="nav-footer-guidelines" className="text-white font-black mb-8 uppercase tracking-[0.2em] text-[10px] italic">Diretrizes</h4>
            <nav aria-labelledby="nav-footer-guidelines">
              <ul className="flex flex-col gap-4 list-none p-0 m-0">
                <li>
                  <button 
                    onClick={() => setPrivacyModalOpen(true)}
                    className="text-sm font-bold text-left hover:text-brand-lime transition-colors w-fit relative group block outline-none focus-visible:text-brand-lime"
                  >
                    Privacidade
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-lime transition-all duration-300 group-hover:w-full" aria-hidden="true"></span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setCookieModalOpen(true)}
                    className="text-sm font-bold text-left hover:text-brand-lime transition-colors w-fit relative group block outline-none focus-visible:text-brand-lime"
                  >
                    Política de Cookies
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-lime transition-all duration-300 group-hover:w-full" aria-hidden="true"></span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={handleResetCookies}
                    className="text-sm font-bold text-left hover:text-brand-lime transition-colors w-fit relative group block outline-none focus-visible:text-brand-lime"
                  >
                    Preferências de Privacidade
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-lime transition-all duration-300 group-hover:w-full" aria-hidden="true"></span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          {/* Coluna de Contato e Endereço */}
          <div className="lg:col-span-4">
            <h4 id="footer-contact-title" className="text-white font-black mb-8 uppercase tracking-[0.2em] text-[10px] italic">Informações de Contato</h4>
            <address className="not-italic space-y-8">
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-brand-lime uppercase tracking-widest mb-1">Canais Diretos</span>
                <a 
                  href="mailto:contato@tag08.com.br" 
                  className="text-white font-bold hover:text-brand-lime transition-colors mb-1 outline-none focus-visible:text-brand-lime"
                  itemProp="email"
                >
                  contato@tag08.com.br
                </a>
                <a 
                  href="tel:+5583998868882" 
                  className="text-white font-bold hover:text-brand-lime transition-colors outline-none focus-visible:text-brand-lime"
                  itemProp="telephone"
                >
                  ‪+55 (83) 99886‑8882‬
                </a>
              </div>
              <div className="flex flex-col" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <span className="text-[10px] font-black text-brand-lime uppercase tracking-widest mb-1">Escritório Central</span>
                <p className="text-white font-bold leading-relaxed">
                  <span itemProp="streetAddress">R. Cassimiro de Abreu, Nº60, SALA 05</span><br />
                  <span itemProp="addressLocality">Brisamar</span>, <span itemProp="addressRegion">João Pessoa - PB</span><br />
                  <span itemProp="postalCode">CEP 58033-330</span>
                  <meta itemProp="addressCountry" content="BR" />
                </p>
              </div>
            </address>
          </div>

        </div>

        {/* Barra de Rodapé Inferior */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-center md:text-left">
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500">
              © 2024 TAG08 Studio Creations. <span itemProp="taxID" title="Cadastro Nacional da Pessoa Jurídica (CNPJ)">CNPJ: 26.828.685/0001-52</span>.
            </p>
            <div className="flex items-center gap-2 py-1.5 px-3 bg-brand-lime/10 rounded-full" role="status" aria-label="Operação em conformidade com a LGPD">
              <div className="w-1.5 h-1.5 bg-brand-lime rounded-full animate-pulse" aria-hidden="true"></div>
              <span className="text-[8px] font-black text-brand-lime uppercase tracking-widest">LGPD Compliant Operation</span>
            </div>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-3 text-white group outline-none focus-visible:ring-2 focus-visible:ring-brand-lime rounded-lg p-1"
            aria-label="Voltar ao topo da página"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.3em] group-hover:text-brand-lime transition-colors">Back to top</span>
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-lime group-hover:text-brand-black group-hover:border-brand-lime transition-all duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m18 15-6-6-6 6"/>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;