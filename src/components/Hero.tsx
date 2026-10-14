'use client';

import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
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
      className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 border-b border-[#F3F0E9]/[0.08] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Editorial Top Metadata */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-[#F3F0E9]/[0.08]"
        >
          <div className="flex items-center space-x-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D9A45B]" />
            <span className="font-mono-tech text-[11px] tracking-[0.2em] text-[#D9A45B] uppercase font-medium">
              {hero.label}
            </span>
          </div>
          <div className="font-mono-tech text-[10px] tracking-widest text-[#A6A6A2]/70 uppercase">
            STORY-FIRST POST-PRODUCTION // ARCHIVAL · MYSTERY · INVESTIGATIVE
          </div>
        </motion.div>

        {/* Large Editorial Headline & Positioning Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-14 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-8"
          >
            <h1 className="font-serif-editorial text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-normal leading-[0.98] tracking-[-0.02em] text-[#F3F0E9]">
              Some stories <span className="italic text-[#D9A45B]">demand</span> more than just an edit.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-4 space-y-6"
          >
            <p className="text-base sm:text-lg text-[#A6A6A2] font-sans-editorial leading-relaxed">
              {hero.supportingCopy}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#work"
                onClick={scrollTo('#work')}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#D9A45B] hover:bg-[#e5b36c] text-[#101112] font-mono-tech text-xs font-semibold uppercase tracking-wider rounded-[2px] transition-all shadow-[0_4px_25px_rgba(217,164,91,0.2)]"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href="#contact"
                onClick={scrollTo('#contact')}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-transparent hover:bg-[#191A1C] border border-[#F3F0E9]/20 hover:border-[#D9A45B]/50 text-[#F3F0E9] font-mono-tech text-xs font-medium uppercase tracking-wider rounded-[2px] transition-all"
              >
                <span>DISCUSS A PROJECT</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#A6A6A2]" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Dramatic Photographic Visual / Cinematic Still Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="relative w-full border border-[#F3F0E9]/[0.08] p-2 bg-[#141517] rounded-[2px] shadow-[0_30px_70px_rgba(0,0,0,0.8)]"
        >
          <div className="relative overflow-hidden rounded-[1px]">
            <CinematicFrame
              type="hero"
              aspectRatio="21/9"
              className="w-full"
            />
          </div>

          {/* Minimal Editorial Footer on Frame */}
          <div className="px-3 pt-3 pb-1 flex flex-col sm:flex-row sm:items-center justify-between text-[10px] font-mono-tech text-[#A6A6A2]/60 gap-2">
            <span className="flex items-center gap-2 text-[#A6A6A2]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D9A45B]/80" />
              CASE REFERENCE // THE NOCTURNAL INVESTIGATION
            </span>
            <span>ATMOSPHERIC TENSION · FORENSIC PACING · 24 FPS MASTER</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
