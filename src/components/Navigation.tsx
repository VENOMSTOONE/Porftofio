'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [timecode, setTimecode] = useState('00:03:42:18');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    // Live frame ticker for authentic documentary cutting room feel
    const timer = setInterval(() => {
      const now = new Date();
      const frames = Math.floor((now.getMilliseconds() / 1000) * 24);
      const secs = String(now.getSeconds()).padStart(2, '0');
      const mins = String(now.getMinutes()).padStart(2, '0');
      const hrs = String(now.getHours() % 24).padStart(2, '0');
      setTimecode(`${hrs}:${mins}:${secs}:${String(frames).padStart(2, '0')}`);
    }, 41);

    return () => {
      window.removeEventListener('scroll', onScroll);
      clearInterval(timer);
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
        {/* Left: Refined Wordmark */}
        <a
          href="#"
          className="group flex items-baseline gap-3 focus:outline-none"
          aria-label="VAIBHAV LABS — Home"
        >
          <span className="font-editorial-headline text-lg sm:text-xl font-bold tracking-tight text-[#F3F0E9] group-hover:text-[#D9A45B] transition-colors">
            {portfolioData.brand.name}
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5 font-mono-tech text-[10px] text-[#9A9A9A] tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D9A45B] animate-pulse" />
            DOCUMENTARY POST-PRODUCTION
          </span>
        </a>

        {/* Center: Live Running Timecode Telemetry */}
        <div className="hidden lg:flex items-center gap-2 font-mono-tech text-xs tracking-widest text-[#9A9A9A]">
          <span className="text-[#D9A45B] text-[10px]">TC //</span>
          <span className="text-[#F3F0E9] tabular-nums font-semibold">{timecode}</span>
          <span className="text-[10px] text-[#9A9A9A]/60">SMPTE</span>
        </div>

        {/* Right: Desktop Navigation & Primary CTA */}
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
            className="group relative inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#000000] bg-[#D9A45B] hover:bg-[#e5b36c] transition-all rounded-[1px] shadow-[0_0_20px_rgba(217,164,91,0.25)]"
          >
            <span>DISCUSS A PROJECT</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center space-x-3">
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, '#contact')}
            className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#000000] bg-[#D9A45B] rounded-[1px]"
          >
            DISCUSS
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
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] font-mono-tech text-xs text-[#9A9A9A]">
            <span>TELEMETRY: {timecode}</span>
            <span className="text-[#D9A45B]">24 FPS SYNC</span>
          </div>
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
                className="w-full flex items-center justify-center gap-2 py-3 text-xs font-bold uppercase tracking-wider text-[#000000] bg-[#D9A45B] rounded-[1px]"
              >
                <span>DISCUSS A PROJECT</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
