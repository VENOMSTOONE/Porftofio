'use client';

import React from 'react';
import { ArrowUp, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { brand } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Selected Work', href: '#work' },
    { label: 'Editorial Reasoning', href: '#problems' },
    { label: 'Anatomy of a Cut', href: '#breakdown' },
    { label: 'Capabilities', href: '#services' },
    { label: 'Pipeline', href: '#process' },
    { label: 'Studio Manifesto', href: '#about' },
    { label: 'Initiate Cut', href: '#contact' },
  ];

  return (
    <footer
      aria-label="Studio Footer"
      className="bg-[#050607] border-t border-[#F3F0E9]/15 pt-20 pb-12 text-[#A6A6A2] select-none"
    >
      <div className="w-full px-6 sm:px-8 lg:px-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#F3F0E9]/10">
          {/* Brand Info (6 cols) */}
          <div className="md:col-span-6 space-y-4">
            <span className="font-display-brutal text-3xl font-extrabold text-[#F3F0E9] block tracking-tight">
              {brand.name}
            </span>
            <p className="font-sans-editorial text-sm text-[#A6A6A2] max-w-md leading-relaxed">
              Cinematic documentary video editing, purposeful visual storytelling, motion graphics, and atmospheric sound design for YouTube mystery and investigative creators.
            </p>
            <div className="font-mono-tech text-xs text-[#D9A45B] tracking-wider uppercase">
              MYSTERY · INVESTIGATIVE · HISTORICAL ENIGMAS
            </div>
          </div>

          {/* Navigation (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-mono-tech text-xs uppercase tracking-widest text-[#F3F0E9] font-bold">
              [ INDEX ]
            </div>
            <ul className="space-y-2 text-xs font-mono-tech">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#D9A45B] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Channels & Action (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-mono-tech text-xs uppercase tracking-widest text-[#F3F0E9] font-bold">
              [ DISPATCH ]
            </div>
            <ul className="space-y-2 text-xs font-mono-tech">
              {brand.profileLinks.map((item) => (
                <li key={item.platform}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#D9A45B] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{item.label}</span>
                    <ExternalLink className="w-3 h-3 text-[#A6A6A2]/60" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-6">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs font-mono-tech text-[#A6A6A2] hover:text-[#F3F0E9] transition-colors border border-[#F3F0E9]/15 px-3 py-1.5 rounded-[1px]"
                aria-label="Return to top of page"
              >
                <ArrowUp className="w-3.5 h-3.5 text-[#D9A45B]" />
                <span>RETURN TO TOP</span>
              </button>
            </div>
          </div>
        </div>

        {/* Monumental Brutalist Footer Wordmark */}
        <div className="pt-16 pb-8 overflow-hidden select-none">
          <div className="font-display-brutal text-[14vw] font-extrabold uppercase text-[#F3F0E9]/[0.06] hover:text-[#D9A45B]/15 transition-colors leading-[0.75] tracking-[-0.06em] whitespace-nowrap text-center">
            VAIBHAV LABS
          </div>
        </div>

        {/* Footer Bottom Strip */}
        <div className="pt-6 border-t border-[#F3F0E9]/[0.08] flex flex-col sm:flex-row items-center justify-between text-xs font-mono-tech text-[#A6A6A2]/60 gap-4">
          <div>
            © {new Date().getFullYear()} {brand.name}. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>STORY-FIRST VISUAL ARCHITECTURE</span>
            <span>·</span>
            <span>INDEPENDENT POST-PRODUCTION STUDIO</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
