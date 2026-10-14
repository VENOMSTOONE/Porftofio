'use client';

import React, { useState } from 'react';
import { Play, Clock, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { portfolioData, type ProjectItem } from '../data/portfolioData';
import { CinematicFrame } from './CinematicFrame';
import { ProjectModal } from './ProjectModal';

export const SelectedWork: React.FC = () => {
  const { selectedWork } = portfolioData;
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const getFrameType = (assetKey: string): 'intro-1' | 'intro-2' | 'intro-3' | 'mg-1' | 'mg-2' | 'timeline-1' => {
    switch (assetKey) {
      case 'Intro Demo 1': return 'intro-1';
      case 'Intro Demo 2': return 'intro-2';
      case 'Intro Demo 3': return 'intro-3';
      case 'MG Demo 1': return 'mg-1';
      case 'MG Demo 2': return 'mg-2';
      case 'Timeline 1': return 'timeline-1';
      default: return 'intro-1';
    }
  };

  return (
    <section
      id="work"
      aria-label="Selected Documentary Work"
      className="py-24 lg:py-36 border-b border-[#F3F0E9]/[0.08] relative"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 lg:mb-24">
          <div className="lg:col-span-8">
            <div className="flex items-center space-x-2 font-mono-tech text-xs uppercase tracking-[0.2em] text-[#D9A45B] mb-4">
              <span>01 // SELECTED WORK</span>
              <span className="text-[#A6A6A2]/40">·</span>
              <span>CURATED EXPERIMENTS & DEMOS</span>
            </div>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-[#F3F0E9] tracking-tight">
              {selectedWork.heading}
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm sm:text-base text-[#A6A6A2] font-sans-editorial leading-relaxed">
              {selectedWork.subheading}
            </p>
          </div>
        </div>

        {/* Editorial Gallery: Varied Composition & Asymmetry */}
        <div className="space-y-16 lg:space-y-24">
          {/* Project 01: Heroic Full-Width Landscape Cut (Intro Demo 1) */}
          {(() => {
            const p = selectedWork.projects[0];
            return (
              <article
                className="group relative border border-[#F3F0E9]/[0.08] hover:border-[#D9A45B]/40 transition-colors duration-500 bg-[#141517] rounded-[2px] overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  {/* Cinematic Visual Frame (7 cols) */}
                  <div
                    className="lg:col-span-8 relative overflow-hidden cursor-pointer"
                    onClick={() => setActiveProject(p)}
                  >
                    <CinematicFrame
                      type="intro-1"
                      aspectRatio="16/9"
                      className="transition-transform duration-700 group-hover:scale-[1.01]"
                    />

                    {/* Hover Inspect Affordance */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#D9A45B] text-[#101112] font-mono-tech text-xs font-semibold uppercase tracking-wider rounded-[2px] shadow-2xl">
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Inspect Cut</span>
                      </div>
                    </div>

                    <div className="absolute top-4 right-4 px-2.5 py-1 bg-black/85 backdrop-blur-sm border border-white/10 rounded-[2px] font-mono-tech text-[10px] text-[#F3F0E9] flex items-center gap-1.5">
                      <Clock className="w-3 h-3 text-[#D9A45B]" />
                      {p.duration}
                    </div>
                  </div>

                  {/* Editorial Textual Column (4 cols) */}
                  <div className="lg:col-span-4 p-8 lg:p-10 flex flex-col justify-between bg-[#141517] border-t lg:border-t-0 lg:border-l border-[#F3F0E9]/[0.08]">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-serif-editorial text-3xl text-[#D9A45B] italic">
                          01
                        </span>
                        <span className="font-mono-tech text-[10px] text-[#A6A6A2]/70 uppercase tracking-widest px-2 py-0.5 bg-[#191A1C] border border-[#F3F0E9]/[0.06] rounded-xs">
                          {p.projectType}
                        </span>
                      </div>

                      <div className="font-mono-tech text-xs text-[#D9A45B] uppercase tracking-wider mb-2">
                        {p.category}
                      </div>

                      <h3 className="font-serif-editorial text-3xl sm:text-4xl text-[#F3F0E9] group-hover:text-[#D9A45B] transition-colors leading-[1.05]">
                        <button
                          type="button"
                          onClick={() => setActiveProject(p)}
                          className="text-left focus:outline-none"
                        >
                          {p.title}
                        </button>
                      </h3>

                      <p className="mt-4 text-sm text-[#A6A6A2] font-sans-editorial leading-relaxed">
                        {p.description}
                      </p>
                    </div>

                    <div className="mt-8 pt-4 border-t border-[#F3F0E9]/[0.08] flex items-center justify-between">
                      <span className="font-mono-tech text-xs text-[#A6A6A2]/60">
                        {p.aspectRatio} · 24 FPS
                      </span>
                      <button
                        type="button"
                        onClick={() => setActiveProject(p)}
                        className="inline-flex items-center gap-1 font-mono-tech text-xs text-[#D9A45B] hover:underline"
                      >
                        Deconstruct
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })()}

          {/* Asymmetric Pair: Project 02 (7 cols) & Project 03 (5 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Project 02 (Intro Demo 2) */}
            {(() => {
              const p = selectedWork.projects[1];
              return (
                <article
                  className="lg:col-span-7 group border border-[#F3F0E9]/[0.08] hover:border-[#D9A45B]/40 transition-colors duration-500 bg-[#141517] rounded-[2px] overflow-hidden flex flex-col justify-between"
                >
                  <div
                    className="relative overflow-hidden cursor-pointer"
                    onClick={() => setActiveProject(p)}
                  >
                    <CinematicFrame
                      type="intro-2"
                      aspectRatio="16/9"
                      className="transition-transform duration-700 group-hover:scale-[1.01]"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D9A45B] text-[#101112] font-mono-tech text-xs font-semibold uppercase tracking-wider rounded-[2px]">
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Inspect Cut</span>
                      </div>
                    </div>
                    <div className="absolute top-3 right-3 px-2 py-0.5 bg-black/85 border border-white/10 rounded-[2px] font-mono-tech text-[10px] text-[#F3F0E9]">
                      {p.duration}
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-serif-editorial text-2xl text-[#D9A45B] italic">02</span>
                      <span className="font-mono-tech text-[10px] text-[#A6A6A2]/70 uppercase tracking-widest px-2 py-0.5 bg-[#191A1C] border border-[#F3F0E9]/[0.06] rounded-xs">
                        {p.projectType}
                      </span>
                    </div>
                    <div className="font-mono-tech text-xs text-[#D9A45B] uppercase tracking-wider mb-1.5">
                      {p.category}
                    </div>
                    <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#F3F0E9] group-hover:text-[#D9A45B] transition-colors">
                      <button
                        type="button"
                        onClick={() => setActiveProject(p)}
                        className="text-left focus:outline-none"
                      >
                        {p.title}
                      </button>
                    </h3>
                    <p className="mt-3 text-sm text-[#A6A6A2] font-sans-editorial leading-relaxed">
                      {p.description}
                    </p>
                    <div className="mt-6 pt-4 border-t border-[#F3F0E9]/[0.08] flex items-center justify-between">
                      <span className="font-mono-tech text-xs text-[#A6A6A2]/60">Split-screen radar deconstruction</span>
                      <button
                        type="button"
                        onClick={() => setActiveProject(p)}
                        className="font-mono-tech text-xs text-[#D9A45B] inline-flex items-center gap-1"
                      >
                        View Sample <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })()}

            {/* Project 03 (Intro Demo 3) */}
            {(() => {
              const p = selectedWork.projects[2];
              return (
                <article
                  className="lg:col-span-5 group border border-[#F3F0E9]/[0.08] hover:border-[#D9A45B]/40 transition-colors duration-500 bg-[#141517] rounded-[2px] overflow-hidden flex flex-col justify-between"
                >
                  <div
                    className="relative overflow-hidden cursor-pointer"
                    onClick={() => setActiveProject(p)}
                  >
                    <CinematicFrame
                      type="intro-3"
                      aspectRatio="16/9"
                      className="transition-transform duration-700 group-hover:scale-[1.01]"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D9A45B] text-[#101112] font-mono-tech text-xs font-semibold uppercase tracking-wider rounded-[2px]">
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Inspect Cut</span>
                      </div>
                    </div>
                    <div className="absolute top-3 right-3 px-2 py-0.5 bg-black/85 border border-white/10 rounded-[2px] font-mono-tech text-[10px] text-[#F3F0E9]">
                      {p.duration}
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-serif-editorial text-2xl text-[#D9A45B] italic">03</span>
                      <span className="font-mono-tech text-[10px] text-[#A6A6A2]/70 uppercase tracking-widest px-2 py-0.5 bg-[#191A1C] border border-[#F3F0E9]/[0.06] rounded-xs">
                        {p.projectType}
                      </span>
                    </div>
                    <div className="font-mono-tech text-xs text-[#D9A45B] uppercase tracking-wider mb-1.5">
                      {p.category}
                    </div>
                    <h3 className="font-serif-editorial text-2xl text-[#F3F0E9] group-hover:text-[#D9A45B] transition-colors">
                      <button
                        type="button"
                        onClick={() => setActiveProject(p)}
                        className="text-left focus:outline-none"
                      >
                        {p.title}
                      </button>
                    </h3>
                    <p className="mt-3 text-sm text-[#A6A6A2] font-sans-editorial leading-relaxed">
                      {p.description}
                    </p>
                    <div className="mt-6 pt-4 border-t border-[#F3F0E9]/[0.08] flex items-center justify-between">
                      <span className="font-mono-tech text-xs text-[#A6A6A2]/60">Microfiche archival pacing</span>
                      <button
                        type="button"
                        onClick={() => setActiveProject(p)}
                        className="font-mono-tech text-xs text-[#D9A45B] inline-flex items-center gap-1"
                      >
                        View Sample <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })()}
          </div>

          {/* Documentary Motion Graphics Pairing: MG Demo 1 & MG Demo 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* MG Demo 1 */}
            {(() => {
              const p = selectedWork.projects[3];
              return (
                <article
                  className="group border border-[#F3F0E9]/[0.08] hover:border-[#D9A45B]/40 transition-colors duration-500 bg-[#141517] rounded-[2px] overflow-hidden"
                >
                  <div
                    className="relative overflow-hidden cursor-pointer"
                    onClick={() => setActiveProject(p)}
                  >
                    <CinematicFrame
                      type="mg-1"
                      aspectRatio="16/9"
                      className="transition-transform duration-700 group-hover:scale-[1.01]"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D9A45B] text-[#101112] font-mono-tech text-xs font-semibold uppercase tracking-wider rounded-[2px]">
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Inspect Graphics</span>
                      </div>
                    </div>
                    <div className="absolute top-3 right-3 px-2 py-0.5 bg-black/85 border border-white/10 rounded-[2px] font-mono-tech text-[10px] text-[#F3F0E9]">
                      {p.duration}
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-serif-editorial text-2xl text-[#D9A45B] italic">04</span>
                      <span className="font-mono-tech text-[10px] text-[#A6A6A2]/70 uppercase tracking-widest px-2 py-0.5 bg-[#191A1C] border border-[#F3F0E9]/[0.06] rounded-xs">
                        {p.projectType}
                      </span>
                    </div>
                    <div className="font-mono-tech text-xs text-[#D9A45B] uppercase tracking-wider mb-1.5">
                      {p.category}
                    </div>
                    <h3 className="font-serif-editorial text-2xl text-[#F3F0E9] group-hover:text-[#D9A45B] transition-colors">
                      <button
                        type="button"
                        onClick={() => setActiveProject(p)}
                        className="text-left focus:outline-none"
                      >
                        {p.title}
                      </button>
                    </h3>
                    <p className="mt-3 text-sm text-[#A6A6A2] font-sans-editorial leading-relaxed">
                      {p.description}
                    </p>
                    <div className="mt-6 pt-4 border-t border-[#F3F0E9]/[0.08] flex items-center justify-between">
                      <span className="font-mono-tech text-xs text-[#A6A6A2]/60">Redaction & evidence handling</span>
                      <button
                        type="button"
                        onClick={() => setActiveProject(p)}
                        className="font-mono-tech text-xs text-[#D9A45B] inline-flex items-center gap-1"
                      >
                        Inspect <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })()}

            {/* MG Demo 2 */}
            {(() => {
              const p = selectedWork.projects[4];
              return (
                <article
                  className="group border border-[#F3F0E9]/[0.08] hover:border-[#D9A45B]/40 transition-colors duration-500 bg-[#141517] rounded-[2px] overflow-hidden"
                >
                  <div
                    className="relative overflow-hidden cursor-pointer"
                    onClick={() => setActiveProject(p)}
                  >
                    <CinematicFrame
                      type="mg-2"
                      aspectRatio="16/9"
                      className="transition-transform duration-700 group-hover:scale-[1.01]"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D9A45B] text-[#101112] font-mono-tech text-xs font-semibold uppercase tracking-wider rounded-[2px]">
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Inspect Map</span>
                      </div>
                    </div>
                    <div className="absolute top-3 right-3 px-2 py-0.5 bg-black/85 border border-white/10 rounded-[2px] font-mono-tech text-[10px] text-[#F3F0E9]">
                      {p.duration}
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-serif-editorial text-2xl text-[#D9A45B] italic">05</span>
                      <span className="font-mono-tech text-[10px] text-[#A6A6A2]/70 uppercase tracking-widest px-2 py-0.5 bg-[#191A1C] border border-[#F3F0E9]/[0.06] rounded-xs">
                        {p.projectType}
                      </span>
                    </div>
                    <div className="font-mono-tech text-xs text-[#D9A45B] uppercase tracking-wider mb-1.5">
                      {p.category}
                    </div>
                    <h3 className="font-serif-editorial text-2xl text-[#F3F0E9] group-hover:text-[#D9A45B] transition-colors">
                      <button
                        type="button"
                        onClick={() => setActiveProject(p)}
                        className="text-left focus:outline-none"
                      >
                        {p.title}
                      </button>
                    </h3>
                    <p className="mt-3 text-sm text-[#A6A6A2] font-sans-editorial leading-relaxed">
                      {p.description}
                    </p>
                    <div className="mt-6 pt-4 border-t border-[#F3F0E9]/[0.08] flex items-center justify-between">
                      <span className="font-mono-tech text-xs text-[#A6A6A2]/60">3D terrain & coordinate plot</span>
                      <button
                        type="button"
                        onClick={() => setActiveProject(p)}
                        className="font-mono-tech text-xs text-[#D9A45B] inline-flex items-center gap-1"
                      >
                        Inspect <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })()}
          </div>

          {/* Project 06: Full-Width Chronological Timeline Feature */}
          {(() => {
            const p = selectedWork.projects[5];
            return (
              <article
                className="group border border-[#F3F0E9]/[0.08] hover:border-[#D9A45B]/40 transition-colors duration-500 bg-[#141517] rounded-[2px] overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  <div
                    className="lg:col-span-8 relative overflow-hidden cursor-pointer"
                    onClick={() => setActiveProject(p)}
                  >
                    <CinematicFrame
                      type="timeline-1"
                      aspectRatio="16/9"
                      className="transition-transform duration-700 group-hover:scale-[1.01]"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#D9A45B] text-[#101112] font-mono-tech text-xs font-semibold uppercase tracking-wider rounded-[2px]">
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Inspect Chronology Cut</span>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 px-2.5 py-1 bg-black/85 border border-white/10 rounded-[2px] font-mono-tech text-[10px] text-[#F3F0E9]">
                      {p.duration}
                    </div>
                  </div>

                  <div className="lg:col-span-4 p-8 lg:p-10 flex flex-col justify-between bg-[#141517] border-t lg:border-t-0 lg:border-l border-[#F3F0E9]/[0.08]">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-serif-editorial text-3xl text-[#D9A45B] italic">06</span>
                        <span className="font-mono-tech text-[10px] text-[#A6A6A2]/70 uppercase tracking-widest px-2 py-0.5 bg-[#191A1C] border border-[#F3F0E9]/[0.06] rounded-xs">
                          {p.projectType}
                        </span>
                      </div>

                      <div className="font-mono-tech text-xs text-[#D9A45B] uppercase tracking-wider mb-2">
                        {p.category}
                      </div>

                      <h3 className="font-serif-editorial text-3xl sm:text-4xl text-[#F3F0E9] group-hover:text-[#D9A45B] transition-colors leading-[1.05]">
                        <button
                          type="button"
                          onClick={() => setActiveProject(p)}
                          className="text-left focus:outline-none"
                        >
                          {p.title}
                        </button>
                      </h3>

                      <p className="mt-4 text-sm text-[#A6A6A2] font-sans-editorial leading-relaxed">
                        {p.description}
                      </p>
                    </div>

                    <div className="mt-8 pt-4 border-t border-[#F3F0E9]/[0.08] flex items-center justify-between">
                      <span className="font-mono-tech text-xs text-[#A6A6A2]/60">48-Hour Multi-Track Synchronizer</span>
                      <button
                        type="button"
                        onClick={() => setActiveProject(p)}
                        className="font-mono-tech text-xs text-[#D9A45B] inline-flex items-center gap-1"
                      >
                        Inspect Timeline <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })()}
        </div>

        {/* Project Authenticity Notice */}
        <div className="mt-14 p-4 border border-[#F3F0E9]/[0.08] bg-[#141517] rounded-[2px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono-tech text-xs text-[#A6A6A2]/80">
          <span>{selectedWork.note}</span>
          <span className="text-[#A6A6A2]/50 text-[11px]">
            BURARI CASE STUDY: IN PRODUCTION (SEPARATE RELEASE)
          </span>
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
