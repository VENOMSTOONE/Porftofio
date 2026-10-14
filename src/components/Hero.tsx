'use client';

import React from 'react';
import { ArrowDown, ArrowUpRight, Crosshair, Volume2, Film } from 'lucide-react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolioData';
import { CinematicFrame } from './CinematicFrame';

export const Hero: React.FC = () => {
  const { hero } = portfolioData;

  const scrollTo = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      aria-label="Studio Introduction"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-[#F3F0E9]/15 flex flex-col justify-between overflow-hidden bg-grid-noir"
    >
      {/* Background radial atmosphere */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] pointer-events-none opacity-20 blur-[150px]"
        style={{
          background: 'radial-gradient(circle, rgba(217,164,91,0.25) 0%, rgba(7,8,9,0) 70%)',
        }}
        aria-hidden="true"
      />

      {/* Top Telemetry Header Bar */}
      <div className="w-full px-6 sm:px-8 lg:px-12 pt-2 pb-6 border-b border-[#F3F0E9]/[0.08]">
        <div className="flex flex-wrap items-center justify-between gap-4 font-mono-tech text-[10px] sm:text-xs text-[#A6A6A2]/70 uppercase tracking-widest">
          <div className="flex items-center gap-3">
            <span className="text-[#D9A45B] font-bold">[ POST-PRODUCTION DOSSIER ]</span>
            <span className="hidden sm:inline">// SPEC: MYSTERY & INVESTIGATIVE DOCUMENTARY</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline">FREQ: 124.30 MHZ</span>
            <span className="text-[#F3F0E9]">COORD: 44°12'32"N · 71°18'44"W</span>
            <span className="text-[#D9A45B]">REC: ACTIVE</span>
          </div>
        </div>
      </div>

      {/* Main Monumental Typographic Showcase */}
      <div className="w-full px-6 sm:px-8 lg:px-12 py-10 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-1 sm:space-y-2 mb-12 lg:mb-16"
        >
          {/* Row 1: Heavy Brutalist Sans */}
          <div className="font-display-brutal text-5xl sm:text-7xl md:text-8xl lg:text-[7.8rem] font-extrabold uppercase leading-[0.88] tracking-[-0.05em] text-[#F3F0E9] flex flex-wrap items-baseline gap-4 sm:gap-6">
            <span>SOME STORIES</span>
            <span className="font-mono-tech text-xs sm:text-sm font-normal text-[#D9A45B] tracking-widest self-start px-2 py-0.5 border border-[#D9A45B]/40 bg-[#D9A45B]/10 rounded-xs">
              [ REF // 009 ]
            </span>
          </div>

          {/* Row 2: Contrast Luxury Seductive Editorial Serif */}
          <div className="font-serif-editorial text-6xl sm:text-8xl md:text-9xl lg:text-[9.5rem] italic font-normal leading-[0.85] text-[#D9A45B] tracking-[-0.02em]">
            demand more
          </div>

          {/* Row 3: Brutalist Sans conclusion */}
          <div className="font-display-brutal text-4xl sm:text-6xl md:text-7xl lg:text-[7rem] font-extrabold uppercase leading-[0.9] tracking-[-0.05em] text-[#F3F0E9]">
            THAN JUST AN EDIT.
          </div>
        </motion.div>

        {/* Asymmetrical Lower Grid: Positioning & Massive Panoramic Cinematic Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end">
          {/* Left Column: Positioning & Actions (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Supporting Copy */}
            <div className="p-6 border-l-2 border-[#D9A45B] bg-[#0f1012]/80 backdrop-blur-sm">
              <p className="text-base sm:text-lg text-[#F3F0E9]/90 font-sans-editorial leading-relaxed font-light">
                {hero.supportingCopy}
              </p>
            </div>

            {/* Audio Stem Telemetry Indicator */}
            <div className="grid grid-cols-2 gap-4 font-mono-tech text-[11px] text-[#A6A6A2]/80 border-t border-b border-[#F3F0E9]/[0.08] py-3">
              <div className="flex items-center gap-2">
                <Volume2 className="w-3.5 h-3.5 text-[#D9A45B]" />
                <span>42Hz SUB-BASS DRONE</span>
              </div>
              <div className="flex items-center gap-2">
                <Film className="w-3.5 h-3.5 text-[#D9A45B]" />
                <span>2.39:1 ANAMORPHIC</span>
              </div>
            </div>

            {/* Heavy Brutalist Action Triggers */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#work"
                onClick={scrollTo('#work')}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#D9A45B] hover:bg-[#e5b36c] text-[#070809] font-mono-tech text-xs font-bold uppercase tracking-widest transition-all rounded-[1px] shadow-[0_4px_30px_rgba(217,164,91,0.3)]"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </a>

              <a
                href="#contact"
                onClick={scrollTo('#contact')}
                className="relative inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#0f1012] hover:bg-[#16181b] border border-[#F3F0E9]/20 hover:border-[#D9A45B]/60 text-[#F3F0E9] font-mono-tech text-xs font-semibold uppercase tracking-widest transition-all rounded-[1px]"
              >
                <Crosshair className="w-3.5 h-3.5 text-[#D9A45B]" />
                <span>DISCUSS A PROJECT</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#A6A6A2]" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Massive Cinematic Wide Frame (7 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-7 relative"
          >
            <div className="relative border border-[#F3F0E9]/20 bg-[#0e0f11] p-1.5 shadow-[0_25px_80px_rgba(0,0,0,0.9)]">
              {/* Corner reticles */}
              <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-[#D9A45B]" />
              <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-[#D9A45B]" />
              <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 border-[#D9A45B]" />
              <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-[#D9A45B]" />

              {/* The Cinematic Frame */}
              <div className="relative overflow-hidden">
                <CinematicFrame
                  type="hero"
                  aspectRatio="21/9"
                  className="w-full"
                />

                {/* Laser scan line overlay */}
                <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#D9A45B]/70 to-transparent pointer-events-none animate-laser" />
              </div>

              {/* Lower Telemetry Strip */}
              <div className="px-3 pt-2.5 pb-1 flex items-center justify-between font-mono-tech text-[10px] text-[#A6A6A2]/75">
                <span className="text-[#D9A45B] font-semibold">
                  SCENE 01 // NOCTURNAL EXPEDITION RECONSTRUCTION
                </span>
                <span>24.00 FPS · 35MM GRAIN · AMBIENT SWELL</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Edge-to-Edge Bottom Marquee Ticker */}
      <div className="w-full border-t border-[#F3F0E9]/[0.08] overflow-hidden py-3 bg-[#070809] select-none">
        <div className="animate-marquee whitespace-nowrap flex items-center font-display-brutal text-xs tracking-[0.25em] text-[#A6A6A2]/50 uppercase">
          <span className="mx-6">★ VAIBHAV LABS</span>
          <span className="mx-6 text-[#D9A45B]">·</span>
          <span className="mx-6">DOCUMENTARY POST-PRODUCTION</span>
          <span className="mx-6 text-[#D9A45B]">·</span>
          <span className="mx-6">MYSTERY & INVESTIGATIVE SPECIALIST</span>
          <span className="mx-6 text-[#D9A45B]">·</span>
          <span className="mx-6">FORENSIC MOTION GRAPHICS</span>
          <span className="mx-6 text-[#D9A45B]">·</span>
          <span className="mx-6">NARRATION-DRIVEN VISUAL STORYTELLING</span>
          <span className="mx-6 text-[#D9A45B]">·</span>
          <span className="mx-6">ATMOSPHERIC SOUND DESIGN</span>
          <span className="mx-6 text-[#D9A45B]">·</span>

          {/* Duplicated for seamless infinite loop */}
          <span className="mx-6">★ VAIBHAV LABS</span>
          <span className="mx-6 text-[#D9A45B]">·</span>
          <span className="mx-6">DOCUMENTARY POST-PRODUCTION</span>
          <span className="mx-6 text-[#D9A45B]">·</span>
          <span className="mx-6">MYSTERY & INVESTIGATIVE SPECIALIST</span>
          <span className="mx-6 text-[#D9A45B]">·</span>
          <span className="mx-6">FORENSIC MOTION GRAPHICS</span>
          <span className="mx-6 text-[#D9A45B]">·</span>
          <span className="mx-6">NARRATION-DRIVEN VISUAL STORYTELLING</span>
          <span className="mx-6 text-[#D9A45B]">·</span>
          <span className="mx-6">ATMOSPHERIC SOUND DESIGN</span>
          <span className="mx-6 text-[#D9A45B]">·</span>
        </div>
      </div>
    </section>
  );
};
