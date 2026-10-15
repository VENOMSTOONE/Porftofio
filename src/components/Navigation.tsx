'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const navLinks = [
    { label: 'WORK', href: '#work', index: '01' },
    { label: 'SERVICES', href: '#services', index: '02' },
    { label: 'PROCESS', href: '#process', index: '03' },
    { label: 'CONTACT', href: '#contact', index: '04' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#101112]/95 backdrop-blur-md border-b border-white/[0.14] py-3.5 shadow-2xl'
          : 'bg-[#000000]/85 backdrop-blur-sm border-b border-white/[0.08] py-4'
      }`}
    >
      <div className="w-full px-4 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Left: Clean Minimal Wordmark */}
        <a
          href="#"
          className="group flex items-baseline gap-3 focus:outline-none"
          aria-label="VAIBHAV LABS — Home"
        >
          <span className="font-editorial-headline text-lg sm:text-xl font-bold tracking-tight text-[#F3F0E9] group-hover:text-[#D9A45B] transition-colors">
            {portfolioData.brand.name}
          </span>
        </a>

        {/* Right: Desktop Navigation & Actively Highlighted Primary CTA */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex items-center space-x-5" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="group flex items-baseline gap-1 text-xs font-medium tracking-wider text-[#9A9A9A] hover:text-[#F3F0E9] transition-colors"
              >
                <span className="font-mono-tech text-[9px] text-[#D9A45B] opacity-60 group-hover:opacity-100">{link.index}</span>
                <span>{link.label}</span>
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, '#contact')}
            className="btn-discuss-highlight group relative inline-flex items-center gap-2.5 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#000000] bg-[#D9A45B] hover:bg-[#e5b36c] rounded-[1px]"
          >
            <span className="tracking-widest">DISCUSS A PROJECT</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center space-x-3">
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, '#contact')}
            className="btn-discuss-highlight px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#000000] bg-[#D9A45B] rounded-[1px] flex items-center gap-1.5"
          >
            <span>DISCUSS</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-1.5 text-[#F3F0E9] focus:outline-none"
            aria-label={mobileOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          >
            {mobileOpen ? <X className="w-6 h-6 text-[#D9A45B]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-b border-white/[0.14] bg-[#101112] px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-2.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="flex items-baseline justify-between py-2 text-sm text-[#9A9A9A] hover:text-[#F3F0E9] border-b border-white/[0.05]"
              >
                <span>{link.label}</span>
                <span className="font-mono-tech text-xs text-[#D9A45B]">{link.index}</span>
              </a>
            ))}
            <div className="pt-3">
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="btn-discuss-highlight group w-full flex items-center justify-center gap-2.5 py-3 text-xs font-bold uppercase tracking-wider text-[#000000] bg-[#D9A45B] rounded-[1px]"
              >
                <span>DISCUSS A PROJECT</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
