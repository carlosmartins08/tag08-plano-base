'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Linkedin, Users } from 'lucide-react';
import { TEAM_SHOWCASE_MEDIA } from '../constants';
import { useTranslation } from '../contexts/LanguageContext';

type TeamItem = {
  name: string;
  role: string;
  summary: string;
  focus: string;
  tags: string[];
  linkedinUrl: string;
};

type PortraitTone = {
  accent: string;
};

type TeamCard = TeamItem & {
  photoUrl: string;
  photoPosition: string;
  layout: 'avatar' | 'portrait';
  originalIndex: number;
};

const PORTRAIT_TONES: PortraitTone[] = [
  { accent: '#D4FF00' },
  { accent: '#DDF81D' },
  { accent: '#FFFFFF' },
];

const clampStyle = (lines: number): React.CSSProperties => ({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: lines,
  overflow: 'hidden',
});

const escapeXml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

const getInitials = (name: string) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0] ?? '')
    .join('')
    .slice(0, 3)
    .toUpperCase();

const buildFallbackPortrait = (member: TeamItem, accent: string, index: number) => {
  const initials = escapeXml(getInitials(member.name));
  const focus = escapeXml(member.focus.toUpperCase());

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1500" fill="none">
      <defs>
        <linearGradient id="bg-${index}" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#040404" />
          <stop offset="54%" stop-color="#111111" />
          <stop offset="100%" stop-color="#000000" />
        </linearGradient>
        <radialGradient id="glow-${index}" cx="50%" cy="35%" r="60%">
          <stop offset="0%" stop-color="${accent}" stop-opacity="0.34" />
          <stop offset="60%" stop-color="${accent}" stop-opacity="0.10" />
          <stop offset="100%" stop-color="${accent}" stop-opacity="0" />
        </radialGradient>
        <filter id="blur-${index}">
          <feGaussianBlur stdDeviation="54" />
        </filter>
      </defs>

      <rect width="1200" height="1500" fill="url(#bg-${index})" />
      <ellipse cx="860" cy="250" rx="260" ry="240" fill="url(#glow-${index})" filter="url(#blur-${index})" />
      <ellipse cx="240" cy="1220" rx="340" ry="300" fill="${accent}" fill-opacity="0.08" filter="url(#blur-${index})" />
      <rect x="320" y="200" width="560" height="930" rx="280" fill="#0d0d0d" stroke="${accent}" stroke-opacity="0.12" />
      <rect x="392" y="300" width="416" height="70" rx="35" fill="${accent}" fill-opacity="0.12" />
      <rect x="392" y="408" width="252" height="16" rx="8" fill="#ffffff" fill-opacity="0.08" />
      <rect x="392" y="450" width="320" height="16" rx="8" fill="#ffffff" fill-opacity="0.06" />
      <rect x="392" y="492" width="224" height="16" rx="8" fill="#ffffff" fill-opacity="0.05" />
      <path d="M392 785C496 722 560 692 600 692C640 692 704 722 808 785" stroke="${accent}" stroke-opacity="0.22" stroke-width="10" stroke-linecap="round" />
      <path d="M300 650C408 614 500 596 600 596C700 596 792 614 900 650" stroke="#ffffff" stroke-opacity="0.05" stroke-width="2" />

      <text x="90" y="1290" fill="#ffffff" font-family="Arial, sans-serif" font-size="128" font-weight="900" letter-spacing="-8">${initials}</text>
      <text x="90" y="1366" fill="#ffffff" font-family="Arial, sans-serif" font-size="36" font-weight="800" letter-spacing="5">${escapeXml(member.focus)}</text>
      <text x="90" y="1410" fill="rgba(255,255,255,0.72)" font-family="Arial, sans-serif" font-size="24" font-weight="700" letter-spacing="4">${focus}</text>
    </svg>
  `)}`;
};

const TeamShowcase: React.FC = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPosition, setHoverPosition] = useState({ x: 50, y: 36 });

  const members = useMemo<TeamCard[]>(
    () =>
      t.teamShowcase.items.map((member, index) => {
        const media = TEAM_SHOWCASE_MEDIA[member.linkedinUrl];

        return {
          ...member,
          photoUrl:
            media?.photoUrl ??
            buildFallbackPortrait(member, PORTRAIT_TONES[index % PORTRAIT_TONES.length].accent, index),
          photoPosition: media?.photoPosition ?? '50% 20%',
          layout: media?.layout ?? 'portrait',
          originalIndex: index,
        };
      }),
    [t.teamShowcase.items],
  );

  const handleCardMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    setHoverPosition({
      x: Math.max(8, Math.min(92, x)),
      y: Math.max(8, Math.min(92, y)),
    });
  };

  const renderCard = (member: TeamCard) => {
    const isActive = member.originalIndex === activeIndex;
    const isAvatarLayout = member.layout === 'avatar';
    const spotlightStyle: React.CSSProperties = {
      opacity: isActive ? 1 : 0,
      background: `radial-gradient(260px circle at ${hoverPosition.x}% ${hoverPosition.y}%, rgba(212, 255, 0, 0.16), transparent 46%)`,
    };

    const motionStyle: React.CSSProperties = {
      flexGrow: isActive ? 1.45 : 0.84,
      flexBasis: isActive ? '54%' : '22%',
      transform: isActive ? 'translateY(-10px) scale(1.02)' : 'translateY(10px) scale(0.98)',
      opacity: isActive ? 1 : 0.74,
      filter: isActive ? 'saturate(1) brightness(1)' : 'saturate(0.88) brightness(0.94)',
      boxShadow: isActive
        ? '0 32px 120px rgba(0, 0, 0, 0.56)'
        : '0 22px 70px rgba(0, 0, 0, 0.28)',
    };

    return (
      <a
        key={member.linkedinUrl}
        href={member.linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${t.teamShowcase.openProfile} - ${member.name}`}
        onMouseEnter={() => setActiveIndex(member.originalIndex)}
        onMouseMove={handleCardMove}
        onFocus={() => setActiveIndex(member.originalIndex)}
        className="group ds-card-shell ds-card-shell-hover-lime relative block min-h-[28rem] self-start overflow-hidden rounded-[2rem] transition-[transform,opacity,box-shadow,border-color,filter,flex-grow,flex-basis] duration-500 ease-brand will-change-transform lg:min-h-[34rem]"
        style={motionStyle}
      >
        <div className="relative flex h-full flex-col">
          <div
            className={`relative overflow-hidden border-b border-white/10 ${
              isAvatarLayout ? 'aspect-[5/4] bg-[radial-gradient(circle_at_top,rgba(212,255,0,0.14),transparent_48%)]' : 'aspect-[4/5]'
            }`}
          >
            {isAvatarLayout ? (
              <div className="absolute inset-0 flex items-center justify-center p-5 md:p-6">
                <div className="relative h-full w-full max-w-[11rem] overflow-hidden rounded-[1.8rem] border border-white/10 bg-black/40 shadow-[0_24px_80px_rgba(0,0,0,0.45)] md:max-w-[12rem]">
                  <Image
                    src={member.photoUrl}
                    alt={`${member.name} - ${member.role}`}
                    fill
                    sizes="(max-width: 1024px) 40vw, 12rem"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: member.photoPosition }}
                    priority={member.originalIndex === 0}
                  />
                </div>
              </div>
            ) : (
              <Image
                src={member.photoUrl}
                alt={`${member.name} - ${member.role}`}
                fill
                sizes="(max-width: 1024px) 100vw, 34vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ objectPosition: member.photoPosition }}
                priority={member.originalIndex === 0}
              />
            )}

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,255,0,0.18),transparent_42%)]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/5" />
            <div className="absolute inset-0 transition-opacity duration-500" style={spotlightStyle} />

            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/85 to-transparent" />
          </div>

          <div className="flex flex-col gap-3 p-5 md:p-6">
            <div className="flex items-start justify-between gap-3">
              <span className="ds-chip ds-chip-lime border-brand-lime/20">
                {isActive ? t.teamShowcase.featuredLabel : member.focus}
              </span>
              <span className="ds-chip ds-chip-muted">
                {String(member.originalIndex + 1).padStart(2, '0')} / {String(members.length).padStart(2, '0')}
              </span>
            </div>

            <div className={`space-y-3 ${isActive ? 'max-w-[24rem]' : 'max-w-[20rem]'}`}>
              <div className={`${isActive ? 'space-y-2' : 'space-y-1'}`}>
                <h3
                  className={`font-display font-black uppercase italic leading-[0.92] tracking-tight text-white ${
                    isActive ? 'text-3xl md:text-5xl' : 'text-2xl md:text-3xl'
                  }`}
                >
                  {member.name}
                </h3>
                <p className="text-[10px] font-black uppercase tracking-[0.35em] text-brand-lime/85">
                  {member.role}
                </p>
              </div>

              {isActive ? (
                <>
                  <p className="text-sm leading-relaxed text-white/78 md:text-base" style={clampStyle(2)}>
                    {member.summary}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {member.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="ds-chip border-white/10 bg-white/[0.05] tracking-[0.3em] text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </>
              ) : null}
            </div>

            <div className="ds-chip ds-chip-lime inline-flex w-fit items-center gap-2 px-4 py-2 transition-transform duration-300 group-hover:translate-x-1">
              <Linkedin className="h-4 w-4" />
              {t.teamShowcase.openProfile}
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>
        </div>
      </a>
    );
  };

  return (
    <section id="equipe" className="relative overflow-hidden bg-brand-black bg-noise py-24 lg:py-32">
      <div className="pointer-events-none absolute right-0 top-0 h-[28rem] w-[28rem] rounded-full bg-brand-lime/10 blur-[180px] translate-x-1/3 -translate-y-1/3" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[22rem] w-[22rem] rounded-full bg-white/5 blur-[180px] -translate-x-1/3 translate-y-1/3" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-7 ds-section-badge gap-2">
              <Users className="h-4 w-4 text-brand-lime" />
              <span>{t.teamShowcase.badge}</span>
            </div>

            <h2 className="mb-6 text-4xl font-black uppercase italic leading-[0.9] tracking-tight text-white md:text-6xl lg:text-7xl font-display">
              {t.teamShowcase.title} <span className="text-brand-lime">{t.teamShowcase.titleAccent}</span>
            </h2>

            <p className="max-w-3xl text-lg font-medium leading-relaxed text-slate-400 md:text-xl">
              {t.teamShowcase.subtitle}
            </p>
          </div>
        </div>

        <div
          className="flex flex-col gap-6 lg:flex-row lg:items-start"
          onMouseLeave={() => {
            setActiveIndex(0);
            setHoverPosition({ x: 50, y: 36 });
          }}
        >
          {members.map((member) => renderCard(member))}
        </div>
      </div>
    </section>
  );
};

export default TeamShowcase;
