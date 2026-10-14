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
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Selected Work', href: '#work' },
    { label: 'Reasoning', href: '#problems' },
    { label: 'Breakdown', href: '#breakdown' },
    { label: 'Services', href: '#services' },
    { label: 'Workflow', href: '#process' },
    { label: 'Studio', href: '#about' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#101112]/92 backdrop-blur-md border-b border-[#F3F0E9]/[0.08] py-4'
          : 'bg-transparent border-b border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Typographic Wordmark */}
          <a
            href="#"
            className="group flex flex-col focus:outline-none"
            aria-label="VAIBHAV LABS — Home"
          >
            <span className="font-serif-editorial text-2xl tracking-[0.08em] text-[#F3F0E9] group-hover:text-[#D9A45B] transition-colors leading-none">
              {portfolioData.brand.name}
            </span>
            <span className="font-mono-tech text-[9px] tracking-[0.25em] text-[#A6A6A2]/70 uppercase mt-1">
              DOCUMENTARY POST-PRODUCTION
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center space-x-1 lg:space-x-2"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="px-3.5 py-1.5 text-xs font-mono-tech uppercase tracking-wider text-[#A6A6A2] hover:text-[#F3F0E9] transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="h-3.5 w-px bg-[#F3F0E9]/15 mx-3" aria-hidden="true" />

            {/* Prominent, Editorial Contact Action */}
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="group inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono-tech font-semibold tracking-wider uppercase text-[#101112] bg-[#D9A45B] hover:bg-[#e5b36c] transition-all rounded-[2px] shadow-[0_0_20px_rgba(217,164,91,0.2)]"
            >
              <span>Discuss Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-3">
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="px-3 py-1.5 text-[11px] font-mono-tech font-semibold uppercase text-[#101112] bg-[#D9A45B] rounded-[2px]"
            >
              Contact
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-1.5 text-[#A6A6A2] hover:text-[#F3F0E9] focus:outline-none"
              aria-label={mobileOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-b border-[#F3F0E9]/10 bg-[#141517] px-6 py-6 space-y-3">
          <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="py-2 text-sm font-mono-tech text-[#A6A6A2] hover:text-[#F3F0E9]"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#F3F0E9]/10">
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="w-full flex items-center justify-between px-4 py-2.5 text-xs font-mono-tech font-semibold uppercase tracking-wider text-[#101112] bg-[#D9A45B] rounded-[2px]"
              >
                <span>Discuss a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
