'use client';

import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Crosshair, Volume2, Film, Play } from 'lucide-react';
import { motion } from 'motion/react';
import { portfolioData, type ProjectItem } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { getAssetPath } from '../utils/assetPath';

export const Hero: React.FC = () => {
  const { hero, selectedWork } = portfolioData;
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const featuredProject = selectedWork.projects[0];

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
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] pointer-events-none opacity-15 blur-[160px]"
        style={{
          background: 'radial-gradient(circle, rgba(217,164,91,0.2) 0%, rgba(0,0,0,0) 70%)',
        }}
        aria-hidden="true"
      />

      {/* Main Monumental Typographic Showcase */}
      <div className="w-full px-6 sm:px-8 lg:px-12 py-10 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6 mb-12 lg:mb-16"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white/[0.04] border border-white/[0.14] rounded-[1px] text-[10px] sm:text-xs font-mono-tech uppercase tracking-[0.2em] text-[#D9A45B]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D9A45B] animate-pulse" />
            <span>{hero.label}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-bold text-[#F3F0E9] tracking-[-0.035em] leading-[0.98] max-w-5xl">
            Some stories{' '}
            <span className="font-serif-editorial italic font-normal text-[#D9A45B] pr-1">
              demand
            </span>
            <br />
            more than just an edit.
          </h1>
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
            <div className="p-6 border-l-2 border-[#D9A45B] bg-[#101112]/90 backdrop-blur-sm">
              <p className="text-base sm:text-lg text-[#F3F0E9]/90 font-sans-editorial leading-relaxed font-light">
                {hero.supportingCopy}
              </p>
            </div>

            {/* Audio Stem Telemetry Indicator */}
            <div className="grid grid-cols-2 gap-4 font-mono-tech text-[11px] text-[#9A9A9A] border-t border-b border-white/[0.08] py-3">
              <div className="flex items-center gap-2">
                <Volume2 className="w-3.5 h-3.5 text-[#D9A45B]" />
                <span>42Hz SUB-BASS DRONE</span>
              </div>
              <div className="flex items-center gap-2">
                <Film className="w-3.5 h-3.5 text-[#D9A45B]" />
                <span>2.39:1 ANAMORPHIC</span>
              </div>
            </div>

            {/* Primary & Secondary Action Triggers */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#work"
                onClick={scrollTo('#work')}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#D9A45B] hover:bg-[#e5b36c] text-[#000000] font-mono-tech text-xs font-bold uppercase tracking-widest transition-all rounded-[1px] shadow-[0_4px_30px_rgba(217,164,91,0.3)]"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </a>

              <a
                href="#contact"
                onClick={scrollTo('#contact')}
                className="btn-discuss-highlight group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#101112] hover:bg-[#181a1d] border border-[#D9A45B]/60 hover:border-[#D9A45B] text-[#F3F0E9] hover:text-[#D9A45B] font-mono-tech text-xs font-bold uppercase tracking-widest transition-all rounded-[1px]"
              >
                <Crosshair className="w-3.5 h-3.5 text-[#D9A45B] transition-transform duration-300 group-hover:rotate-90" />
                <span>DISCUSS A PROJECT</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#D9A45B] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
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
            <div
              className="relative border border-white/[0.14] bg-[#101112] p-1.5 shadow-[0_25px_80px_rgba(0,0,0,0.95)] cursor-pointer group"
              onClick={() => setActiveProject(featuredProject)}
              data-cursor="view"
            >
              {/* Corner reticles */}
              <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-[#D9A45B]" />
              <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-[#D9A45B]" />
              <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 border-[#D9A45B]" />
              <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-[#D9A45B]" />

              {/* The Cinematic Frame */}
              <div className="relative overflow-hidden aspect-[16/9] sm:aspect-[21/9] bg-black">
                <img
                  src={featuredProject.posterUrl || getAssetPath('/posters/intro-demo-2.jpg')}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.025]"
                />

                {/* Laser scan line overlay */}
                <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#D9A45B]/70 to-transparent pointer-events-none animate-laser" />

                {/* Film vignette & top badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/30 pointer-events-none" />

                <div className="absolute top-3 left-3 px-2 py-0.5 bg-black/85 border border-white/20 text-[#D9A45B] font-mono-tech text-[10px] uppercase tracking-wider backdrop-blur-xs flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D9A45B] animate-pulse" />
                  <span>FEATURED CASE // ARCHIVE RECORD 1987</span>
                </div>
                <div className="absolute top-3 right-3 px-2 py-0.5 bg-black/85 border border-white/20 text-[#F3F0E9] font-mono-tech text-[10px] tracking-wider backdrop-blur-xs">
                  {featuredProject.duration} · 24 FPS
                </div>

                {/* Play Trigger on Hover or Central Call to Action */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#D9A45B] text-[#000000] font-mono-tech text-xs font-bold uppercase tracking-widest shadow-[0_4px_30px_rgba(217,164,91,0.5)] transform -translate-y-1 group-hover:translate-y-0 transition-transform">
                    <Play className="w-4 h-4 fill-current" />
                    <span>WATCH COLD OPEN [{featuredProject.duration}]</span>
                  </div>
                </div>
              </div>

              {/* Lower Telemetry Strip */}
              <div className="px-3 pt-2.5 pb-1 flex items-center justify-between font-mono-tech text-[10px] text-[#9A9A9A]">
                <span className="text-[#D9A45B] font-semibold">
                  CASE 01 // THE HOLLOW CREEK RECONSTRUCTION
                </span>
                <span>24.00 FPS · 35MM ARCHIVAL SCAN · 38Hz SUB-DRONE</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Edge-to-Edge Bottom Marquee Ticker */}
      <div className="w-full border-t border-white/[0.08] overflow-hidden py-3 bg-[#000000] select-none">
        <div className="animate-marquee whitespace-nowrap flex items-center text-xs tracking-[0.2em] text-[#9A9A9A]/60 uppercase font-sans">
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

      {/* Accessible Interactive Video Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
