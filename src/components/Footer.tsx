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
    { label: 'Sequence Breakdown', href: '#breakdown' },
    { label: 'Services', href: '#services' },
    { label: 'Workflow', href: '#process' },
    { label: 'About Studio', href: '#about' },
    { label: 'Discuss Project', href: '#contact' },
  ];

  return (
    <footer
      aria-label="Studio Footer"
      className="bg-[#090a0b] border-t border-[#F3F0E9]/[0.08] pt-20 pb-12 text-[#A6A6A2]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#F3F0E9]/[0.08]">
          {/* Brand Info (6 cols) */}
          <div className="md:col-span-6 space-y-4">
            <span className="font-serif-editorial text-3xl font-normal text-[#F3F0E9] block">
              {brand.name}
            </span>
            <p className="text-sm text-[#A6A6A2] max-w-md font-sans-editorial leading-relaxed">
              Specialized documentary video editing, purposeful visual storytelling, motion graphics, and atmospheric sound design for YouTube mystery and investigative creators.
            </p>
            <div className="font-mono-tech text-xs text-[#D9A45B]">
              MYSTERY · INVESTIGATIVE · HISTORICAL ENIGMAS
            </div>
          </div>

          {/* Navigation (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-mono-tech text-xs uppercase tracking-wider text-[#F3F0E9] font-medium">
              Navigation
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

          {/* Profiles & Contact (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-mono-tech text-xs uppercase tracking-wider text-[#F3F0E9] font-medium">
              Inquiries & Channels
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
                className="inline-flex items-center gap-2 text-xs font-mono-tech text-[#A6A6A2] hover:text-[#F3F0E9] transition-colors"
                aria-label="Return to top of page"
              >
                <ArrowUp className="w-3.5 h-3.5 text-[#D9A45B]" />
                <span>Return to top</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono-tech text-[#A6A6A2]/60 gap-4">
          <div>
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Story-First Visual Architecture</span>
            <span>·</span>
            <span>Independent Documentary Studio</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
