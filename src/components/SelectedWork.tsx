'use client';

import React, { useState } from 'react';
import { Play, Clock, ArrowUpRight, Crosshair, Film, Layers, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData, type ProjectItem } from '../data/portfolioData';
import { CinematicFrame } from './CinematicFrame';
import { ProjectModal } from './ProjectModal';

export const SelectedWork: React.FC = () => {
  const { selectedWork } = portfolioData;
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [showAll, setShowAll] = useState(false);

  // Exclude selectedWork.projects[0] because it is the featured showcase in the Hero section
  const p1 = selectedWork.projects[1];
  const p2 = selectedWork.projects[2];
  const p3 = selectedWork.projects[3];
  const p4 = selectedWork.projects[4];
  const p5 = selectedWork.projects[5];

  return (
    <section
      id="work"
      aria-label="Selected Documentary Work"
      className="py-28 lg:py-40 border-b border-white/[0.14] bg-[#000000] relative"
    >
      <div className="w-full px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 mb-20 border-b border-white/[0.14]">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono-tech text-xs uppercase tracking-[0.25em] text-[#D9A45B]">
              <span>[ 02 // SELECTED WORK ]</span>
              <span className="text-[#9A9A9A]/50">·</span>
              <span>CURATED PORTFOLIO</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.03em] text-[#F3F0E9]">
              Stories told through{' '}
              <span className="font-serif-editorial italic font-normal text-[#D9A45B]">
                visuals.
              </span>
            </h2>
          </div>
          <div className="max-w-md font-sans text-sm sm:text-base text-[#9A9A9A] leading-relaxed font-light">
            {selectedWork.subheading}
          </div>
        </div>

        {/* Massive Editorial Project Exhibition */}
        <div className="space-y-28 lg:space-y-40">
          {/* PROJECT 01: MONUMENTAL WIDESCREEN EXHIBITION */}
          <motion.article
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group relative"
          >
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-6">
              <div className="flex items-baseline gap-4">
                <span className="font-mono-tech text-4xl sm:text-5xl text-[#D9A45B] font-bold">
                  01
                </span>
                <div>
                  <span className="font-mono-tech text-xs text-[#D9A45B] uppercase tracking-widest block">
                    {p1.category}
                  </span>
                  <h3 className="font-serif-editorial text-3xl sm:text-5xl text-[#F3F0E9] group-hover:text-[#D9A45B] transition-colors italic">
                    {p1.title}
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-4 font-mono-tech text-xs text-[#9A9A9A]">
                <span>{p1.duration} · 24 FPS</span>
                <span className="px-2 py-0.5 border border-white/[0.14] uppercase text-[10px] bg-[#101112]">
                  {p1.projectType}
                </span>
              </div>
            </div>

            {/* Massive Landscape Image Viewport */}
            <div
              className="relative w-full border border-white/[0.14] bg-[#101112] p-1.5 sm:p-2 cursor-pointer overflow-hidden shadow-2xl"
              onClick={() => setActiveProject(p1)}
              data-cursor="view"
            >
              <div className="relative overflow-hidden aspect-[16/9] sm:aspect-[21/9] bg-black">
                {p1.posterUrl ? (
                  <>
                    <img
                      src={p1.posterUrl}
                      alt={p1.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.025]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/30 pointer-events-none" />
                    <div className="absolute top-3 left-3 px-2 py-0.5 bg-black/80 border border-white/20 text-[#D9A45B] font-mono-tech text-[10px] uppercase tracking-wider backdrop-blur-xs">
                      REF // {p1.assetKey}
                    </div>
                    <div className="absolute top-3 right-3 px-2 py-0.5 bg-black/80 border border-white/20 text-[#F3F0E9] font-mono-tech text-[10px] tracking-wider backdrop-blur-xs flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D9A45B] animate-pulse" />
                      <span>{p1.duration}</span>
                    </div>
                  </>
                ) : (
                  <CinematicFrame
                    type="timeline-1"
                    aspectRatio="21/9"
                    className="transition-transform duration-1000 group-hover:scale-[1.015]"
                  />
                )}

                {/* Hover Focal Prompt */}
                <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#D9A45B] text-[#000000] font-mono-tech text-xs font-bold uppercase tracking-widest shadow-[0_4px_30px_rgba(217,164,91,0.5)] transform -translate-y-1 group-hover:translate-y-0 transition-transform">
                    <Play className="w-4 h-4 fill-current" />
                    <span>PLAY TIMELINE [{p1.duration}]</span>
                  </div>
                </div>
              </div>

              {/* Technical Description Bar */}
              <div className="p-4 bg-[#101112] border-t border-white/[0.1] flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono-tech text-xs text-[#9A9A9A]">
                <p className="max-w-3xl font-sans text-sm text-[#9A9A9A] leading-relaxed font-light">
                  {p1.description}
                </p>
                <button
                  type="button"
                  onClick={() => setActiveProject(p1)}
                  className="inline-flex items-center gap-2 text-[#D9A45B] hover:underline uppercase shrink-0 font-bold"
                >
                  <span>WATCH FULL CUT</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.article>

          {/* PROJECTS 02 & 03: ASYMMETRIC STAGGERED CONTRAST */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Project 02 (7 cols): The Burari Deaths Forensic Timeline */}
            <motion.article
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 group space-y-5"
            >
              <div className="flex items-baseline justify-between border-b border-white/[0.1] pb-3">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono-tech text-3xl sm:text-4xl text-[#D9A45B] font-bold">02</span>
                  <div>
                    <span className="font-mono-tech text-[10px] text-[#D9A45B] uppercase tracking-widest block">{p2.category}</span>
                    <h3 className="font-serif-editorial text-2xl sm:text-4xl text-[#F3F0E9] group-hover:text-[#D9A45B] transition-colors italic">
                      {p2.title}
                    </h3>
                  </div>
                </div>
                <span className="font-mono-tech text-xs text-[#9A9A9A]">{p2.duration}</span>
              </div>

              <div
                className="relative border border-white/[0.14] bg-[#101112] p-1.5 cursor-pointer overflow-hidden shadow-2xl"
                onClick={() => setActiveProject(p2)}
                data-cursor="view"
              >
                <div className="relative overflow-hidden aspect-[16/9] bg-black">
                  {p2.posterUrl ? (
                    <>
                      <img
                        src={p2.posterUrl}
                        alt={p2.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.025]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/30 pointer-events-none" />
                      <div className="absolute top-3 left-3 px-2 py-0.5 bg-black/80 border border-white/20 text-[#D9A45B] font-mono-tech text-[10px] uppercase tracking-wider backdrop-blur-xs">
                        REF // {p2.assetKey}
                      </div>
                      <div className="absolute top-3 right-3 px-2 py-0.5 bg-black/80 border border-white/20 text-[#F3F0E9] font-mono-tech text-[10px] tracking-wider backdrop-blur-xs flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D9A45B] animate-pulse" />
                        <span>{p2.duration}</span>
                      </div>
                    </>
                  ) : (
                    <CinematicFrame
                      type="mg-2"
                      aspectRatio="16/9"
                      className="transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#D9A45B] text-[#000000] font-mono-tech text-xs font-bold uppercase tracking-wider shadow-[0_4px_30px_rgba(217,164,91,0.5)] transform -translate-y-1 group-hover:translate-y-0 transition-transform">
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>PLAY 3D BLUEPRINT [{p2.duration}]</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="font-sans text-sm text-[#9A9A9A] leading-relaxed font-light">
                {p2.description}
              </div>
            </motion.article>

            {/* Project 03 (5 cols): Signal 104.7 MHz Mountain Radar */}
            <motion.article
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 group space-y-5 lg:pt-14"
            >
              <div className="flex items-baseline justify-between border-b border-white/[0.1] pb-3">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono-tech text-3xl sm:text-4xl text-[#D9A45B] font-bold">03</span>
                  <div>
                    <span className="font-mono-tech text-[10px] text-[#D9A45B] uppercase tracking-widest block">{p3.category}</span>
                    <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#F3F0E9] group-hover:text-[#D9A45B] transition-colors italic">
                      {p3.title}
                    </h3>
                  </div>
                </div>
                <span className="font-mono-tech text-xs text-[#9A9A9A]">{p3.duration}</span>
              </div>

              <div
                className="relative border border-white/[0.14] bg-[#101112] p-1.5 cursor-pointer overflow-hidden shadow-2xl"
                onClick={() => setActiveProject(p3)}
                data-cursor="view"
              >
                <div className="relative overflow-hidden aspect-[16/9] bg-black">
                  {p3.posterUrl ? (
                    <>
                      <img
                        src={p3.posterUrl}
                        alt={p3.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.025]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/30 pointer-events-none" />
                      <div className="absolute top-3 left-3 px-2 py-0.5 bg-black/80 border border-white/20 text-[#D9A45B] font-mono-tech text-[10px] uppercase tracking-wider backdrop-blur-xs">
                        REF // {p3.assetKey}
                      </div>
                      <div className="absolute top-3 right-3 px-2 py-0.5 bg-black/80 border border-white/20 text-[#F3F0E9] font-mono-tech text-[10px] tracking-wider backdrop-blur-xs flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D9A45B] animate-pulse" />
                        <span>{p3.duration}</span>
                      </div>
                    </>
                  ) : (
                    <CinematicFrame
                      type="intro-1"
                      aspectRatio="16/9"
                      className="transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#D9A45B] text-[#000000] font-mono-tech text-xs font-bold uppercase tracking-wider shadow-[0_4px_30px_rgba(217,164,91,0.5)] transform -translate-y-1 group-hover:translate-y-0 transition-transform">
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>PLAY RADAR HOOK [{p3.duration}]</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="font-sans text-sm text-[#9A9A9A] leading-relaxed font-light">
                {p3.description}
              </div>
            </motion.article>
          </div>

          {/* Interactive Toggle for Extended Archive */}
          <div className="pt-4 flex flex-col items-center justify-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="group inline-flex items-center gap-3 px-8 py-4 border border-[#D9A45B]/40 hover:border-[#D9A45B] bg-[#101112] hover:bg-[#181a1c] text-[#F3F0E9] hover:text-[#D9A45B] font-mono-tech text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.6)] cursor-pointer"
            >
              <Layers className="w-4 h-4 text-[#D9A45B] transition-transform group-hover:scale-110" />
              <span>
                {showAll
                  ? '[ − HIDE EXTENDED ARCHIVE ]'
                  : '[ + EXPLORE ALL ARCHIVE SAMPLES (2 MORE CUTS) ]'}
              </span>
              {showAll ? (
                <ChevronUp className="w-4 h-4 text-[#D9A45B]" />
              ) : (
                <ChevronDown className="w-4 h-4 text-[#D9A45B]" />
              )}
            </button>
            {!showAll && (
              <span className="font-mono-tech text-[10px] text-[#9A9A9A]/60 tracking-wider mt-3 uppercase">
                Includes: Cartel Wire Money Trail · Archival Investigation
              </span>
            )}
          </div>

          {/* Extended Archive (Projects 04 & 05) */}
          <AnimatePresence>
            {showAll && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="pt-16 overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                  {/* Project 04: The $2M Cartel Wire Global Cartography */}
                  <motion.article
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="group space-y-5"
                  >
                    <div className="flex items-baseline justify-between border-b border-white/[0.1] pb-3">
                      <div className="flex items-baseline gap-3">
                        <span className="font-mono-tech text-3xl text-[#D9A45B] font-bold">04</span>
                        <div>
                          <span className="font-mono-tech text-[10px] text-[#D9A45B] uppercase tracking-widest block">{p4.category}</span>
                          <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#F3F0E9] group-hover:text-[#D9A45B] transition-colors italic">
                            {p4.title}
                          </h3>
                        </div>
                      </div>
                      <span className="font-mono-tech text-xs text-[#9A9A9A]">{p4.duration}</span>
                    </div>

                    <div
                      className="relative border border-white/[0.14] bg-[#101112] p-1.5 cursor-pointer overflow-hidden shadow-2xl"
                      onClick={() => setActiveProject(p4)}
                      data-cursor="view"
                    >
                      <div className="relative overflow-hidden aspect-[16/9] bg-black">
                        {p4.posterUrl ? (
                          <>
                            <img
                              src={p4.posterUrl}
                              alt={p4.title}
                              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.025]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/30 pointer-events-none" />
                            <div className="absolute top-3 left-3 px-2 py-0.5 bg-black/80 border border-white/20 text-[#D9A45B] font-mono-tech text-[10px] uppercase tracking-wider backdrop-blur-xs">
                              REF // {p4.assetKey}
                            </div>
                            <div className="absolute top-3 right-3 px-2 py-0.5 bg-black/80 border border-white/20 text-[#F3F0E9] font-mono-tech text-[10px] tracking-wider backdrop-blur-xs flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#D9A45B] animate-pulse" />
                              <span>{p4.duration}</span>
                            </div>
                          </>
                        ) : (
                          <CinematicFrame
                            type="mg-1"
                            aspectRatio="16/9"
                            className="transition-transform duration-700 group-hover:scale-[1.02]"
                          />
                        )}
                        <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#D9A45B] text-[#000000] font-mono-tech text-xs font-bold uppercase tracking-wider shadow-[0_4px_30px_rgba(217,164,91,0.5)] transform -translate-y-1 group-hover:translate-y-0 transition-transform">
                            <Play className="w-3.5 h-3.5 fill-current" />
                            <span>PLAY MONEY TRAIL [{p4.duration}]</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="font-sans text-sm text-[#9A9A9A] leading-relaxed font-light">
                      {p4.description}
                    </p>
                  </motion.article>

                  {/* Project 05: The Vanishing Record Archival Case */}
                  <motion.article
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="group space-y-5"
                  >
                    <div className="flex items-baseline justify-between border-b border-white/[0.1] pb-3">
                      <div className="flex items-baseline gap-3">
                        <span className="font-mono-tech text-3xl text-[#D9A45B] font-bold">05</span>
                        <div>
                          <span className="font-mono-tech text-[10px] text-[#D9A45B] uppercase tracking-widest block">{p5.category}</span>
                          <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#F3F0E9] group-hover:text-[#D9A45B] transition-colors italic">
                            {p5.title}
                          </h3>
                        </div>
                      </div>
                      <span className="font-mono-tech text-xs text-[#9A9A9A]">{p5.duration}</span>
                    </div>

                    <div
                      className="relative border border-white/[0.14] bg-[#101112] p-1.5 cursor-pointer overflow-hidden shadow-2xl"
                      onClick={() => setActiveProject(p5)}
                      data-cursor="view"
                    >
                      <div className="relative overflow-hidden aspect-[16/9] bg-black">
                        {p5.posterUrl ? (
                          <>
                            <img
                              src={p5.posterUrl}
                              alt={p5.title}
                              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.025]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/30 pointer-events-none" />
                            <div className="absolute top-3 left-3 px-2 py-0.5 bg-black/80 border border-white/20 text-[#D9A45B] font-mono-tech text-[10px] uppercase tracking-wider backdrop-blur-xs">
                              REF // {p5.assetKey}
                            </div>
                            <div className="absolute top-3 right-3 px-2 py-0.5 bg-black/80 border border-white/20 text-[#F3F0E9] font-mono-tech text-[10px] tracking-wider backdrop-blur-xs flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#D9A45B] animate-pulse" />
                              <span>{p5.duration}</span>
                            </div>
                          </>
                        ) : (
                          <CinematicFrame
                            type="intro-3"
                            aspectRatio="16/9"
                            className="transition-transform duration-700 group-hover:scale-[1.02]"
                          />
                        )}
                        <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#D9A45B] text-[#000000] font-mono-tech text-xs font-bold uppercase tracking-wider shadow-[0_4px_30px_rgba(217,164,91,0.5)] transform -translate-y-1 group-hover:translate-y-0 transition-transform">
                            <Play className="w-3.5 h-3.5 fill-current" />
                            <span>PLAY ARCHIVAL CUT [{p5.duration}]</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="font-sans text-sm text-[#9A9A9A] leading-relaxed font-light">
                      {p5.description}
                    </p>
                  </motion.article>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Studio Disclosure Note */}
        <div className="mt-20 p-4 border border-white/[0.14] bg-[#101112] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono-tech text-xs text-[#9A9A9A]">
          <span className="text-[#F3F0E9]">[ PORTFOLIO DISCLOSURE ] // {selectedWork.note}</span>
          <span className="text-[#D9A45B] text-[11px] uppercase tracking-wider">
            AUTHENTIC EDITING DEMONSTRATIONS · REPLACEABLE ASSETS
          </span>
        </div>
      </div>

      {/* Accessible Interactive Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
