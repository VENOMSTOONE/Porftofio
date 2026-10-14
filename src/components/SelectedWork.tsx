'use client';

import React, { useState } from 'react';
import { Play, Clock, ArrowUpRight, Crosshair, Film, Layers } from 'lucide-react';
import { portfolioData, type ProjectItem } from '../data/portfolioData';
import { CinematicFrame } from './CinematicFrame';
import { ProjectModal } from './ProjectModal';

export const SelectedWork: React.FC = () => {
  const { selectedWork } = portfolioData;
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const p1 = selectedWork.projects[0];
  const p2 = selectedWork.projects[1];
  const p3 = selectedWork.projects[2];
  const p4 = selectedWork.projects[3];
  const p5 = selectedWork.projects[4];
  const p6 = selectedWork.projects[5];

  return (
    <section
      id="work"
      aria-label="Selected Documentary Work"
      className="py-28 lg:py-40 border-b border-[#F3F0E9]/15 bg-[#070809] relative"
    >
      <div className="w-full px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 mb-20 border-b border-[#F3F0E9]/15">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono-tech text-xs uppercase tracking-[0.25em] text-[#D9A45B]">
              <span>[ EXHIBITION // ARCHIVE ]</span>
              <span className="text-[#A6A6A2]/40">·</span>
              <span>SIX EDITING EXPERIMENTS</span>
            </div>
            <h2 className="font-display-brutal text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-[-0.04em] text-[#F3F0E9]">
              {selectedWork.heading}
            </h2>
          </div>
          <div className="max-w-md font-sans-editorial text-sm sm:text-base text-[#A6A6A2] leading-relaxed">
            {selectedWork.subheading}
          </div>
        </div>

        {/* Massive Editorial Project Exhibition */}
        <div className="space-y-28 lg:space-y-40">
          {/* PROJECT 01: MONUMENTAL WIDESCREEN EXHIBITION */}
          <article className="group relative">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-6">
              <div className="flex items-baseline gap-4">
                <span className="font-display-brutal text-4xl sm:text-6xl text-[#D9A45B] font-extrabold">
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
              <div className="flex items-center gap-4 font-mono-tech text-xs text-[#A6A6A2]">
                <span>{p1.duration} · 24 FPS</span>
                <span className="px-2 py-0.5 border border-[#F3F0E9]/20 uppercase text-[10px] bg-[#0f1012]">
                  {p1.projectType}
                </span>
              </div>
            </div>

            {/* Massive Landscape Image Viewport */}
            <div
              className="relative w-full border border-[#F3F0E9]/20 bg-[#0e0f11] p-2 cursor-pointer overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.95)]"
              onClick={() => setActiveProject(p1)}
            >
              <div className="relative overflow-hidden">
                <CinematicFrame
                  type="intro-1"
                  aspectRatio="21/9"
                  className="transition-transform duration-1000 group-hover:scale-[1.015]"
                />

                {/* Hover Focal Prompt */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="inline-flex items-center gap-3 px-8 py-4 bg-[#D9A45B] text-[#070809] font-mono-tech text-xs font-bold uppercase tracking-widest shadow-2xl">
                    <Play className="w-4 h-4 fill-current" />
                    <span>DECONSTRUCT COLD OPEN CUT</span>
                  </div>
                </div>
              </div>

              {/* Technical Description Bar */}
              <div className="p-4 bg-[#090a0b] border-t border-[#F3F0E9]/10 flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono-tech text-xs text-[#A6A6A2]">
                <p className="max-w-3xl font-sans-editorial text-sm text-[#A6A6A2] leading-relaxed">
                  {p1.description}
                </p>
                <button
                  type="button"
                  onClick={() => setActiveProject(p1)}
                  className="inline-flex items-center gap-2 text-[#D9A45B] hover:underline uppercase shrink-0 font-bold"
                >
                  <span>INSPECT STEMS</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </article>

          {/* PROJECTS 02 & 03: ASYMMETRIC STAGGERED CONTRAST */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Project 02 (7 cols): Radar Conflict Hook */}
            <article className="lg:col-span-7 group space-y-5">
              <div className="flex items-baseline justify-between border-b border-[#F3F0E9]/10 pb-3">
                <div className="flex items-baseline gap-3">
                  <span className="font-display-brutal text-3xl sm:text-4xl text-[#D9A45B] font-extrabold">02</span>
                  <div>
                    <span className="font-mono-tech text-[10px] text-[#D9A45B] uppercase tracking-widest block">{p2.category}</span>
                    <h3 className="font-serif-editorial text-2xl sm:text-4xl text-[#F3F0E9] group-hover:text-[#D9A45B] transition-colors italic">
                      {p2.title}
                    </h3>
                  </div>
                </div>
                <span className="font-mono-tech text-xs text-[#A6A6A2]">{p2.duration}</span>
              </div>

              <div
                className="relative border border-[#F3F0E9]/20 bg-[#0e0f11] p-1.5 cursor-pointer overflow-hidden shadow-2xl"
                onClick={() => setActiveProject(p2)}
              >
                <CinematicFrame
                  type="intro-2"
                  aspectRatio="16/9"
                  className="transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#D9A45B] text-[#070809] font-mono-tech text-xs font-bold uppercase tracking-wider">
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>INSPECT RADAR CUT</span>
                  </div>
                </div>
              </div>

              <div className="font-sans-editorial text-sm text-[#A6A6A2] leading-relaxed">
                {p2.description}
              </div>
            </article>

            {/* Project 03 (5 cols): Historical Microfiche Still */}
            <article className="lg:col-span-5 group space-y-5 lg:pt-14">
              <div className="flex items-baseline justify-between border-b border-[#F3F0E9]/10 pb-3">
                <div className="flex items-baseline gap-3">
                  <span className="font-display-brutal text-3xl sm:text-4xl text-[#D9A45B] font-extrabold">03</span>
                  <div>
                    <span className="font-mono-tech text-[10px] text-[#D9A45B] uppercase tracking-widest block">{p3.category}</span>
                    <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#F3F0E9] group-hover:text-[#D9A45B] transition-colors italic">
                      {p3.title}
                    </h3>
                  </div>
                </div>
                <span className="font-mono-tech text-xs text-[#A6A6A2]">{p3.duration}</span>
              </div>

              <div
                className="relative border border-[#F3F0E9]/20 bg-[#0e0f11] p-1.5 cursor-pointer overflow-hidden shadow-2xl"
                onClick={() => setActiveProject(p3)}
              >
                <CinematicFrame
                  type="intro-3"
                  aspectRatio="16/9"
                  className="transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#D9A45B] text-[#070809] font-mono-tech text-xs font-bold uppercase tracking-wider">
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>INSPECT ARCHIVE CUT</span>
                  </div>
                </div>
              </div>

              <div className="font-sans-editorial text-sm text-[#A6A6A2] leading-relaxed">
                {p3.description}
              </div>
            </article>
          </div>

          {/* PROJECTS 04 & 05: DOCUMENTARY MOTION GRAPHICS PLATES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {/* MG Demo 1: Forensic Dossier */}
            <article className="group space-y-5">
              <div className="flex items-baseline justify-between border-b border-[#F3F0E9]/10 pb-3">
                <div className="flex items-baseline gap-3">
                  <span className="font-display-brutal text-3xl text-[#D9A45B] font-extrabold">04</span>
                  <div>
                    <span className="font-mono-tech text-[10px] text-[#D9A45B] uppercase tracking-widest block">{p4.category}</span>
                    <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#F3F0E9] group-hover:text-[#D9A45B] transition-colors italic">
                      {p4.title}
                    </h3>
                  </div>
                </div>
                <span className="font-mono-tech text-xs text-[#A6A6A2]">{p4.duration}</span>
              </div>

              <div
                className="relative border border-[#F3F0E9]/20 bg-[#0e0f11] p-1.5 cursor-pointer overflow-hidden shadow-2xl"
                onClick={() => setActiveProject(p4)}
              >
                <CinematicFrame
                  type="mg-1"
                  aspectRatio="16/9"
                  className="transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#D9A45B] text-[#070809] font-mono-tech text-xs font-bold uppercase tracking-wider">
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>INSPECT EVIDENCE DOSSIER</span>
                  </div>
                </div>
              </div>

              <p className="font-sans-editorial text-sm text-[#A6A6A2] leading-relaxed">
                {p4.description}
              </p>
            </article>

            {/* MG Demo 2: 3D Topographic Terrain */}
            <article className="group space-y-5">
              <div className="flex items-baseline justify-between border-b border-[#F3F0E9]/10 pb-3">
                <div className="flex items-baseline gap-3">
                  <span className="font-display-brutal text-3xl text-[#D9A45B] font-extrabold">05</span>
                  <div>
                    <span className="font-mono-tech text-[10px] text-[#D9A45B] uppercase tracking-widest block">{p5.category}</span>
                    <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#F3F0E9] group-hover:text-[#D9A45B] transition-colors italic">
                      {p5.title}
                    </h3>
                  </div>
                </div>
                <span className="font-mono-tech text-xs text-[#A6A6A2]">{p5.duration}</span>
              </div>

              <div
                className="relative border border-[#F3F0E9]/20 bg-[#0e0f11] p-1.5 cursor-pointer overflow-hidden shadow-2xl"
                onClick={() => setActiveProject(p5)}
              >
                <CinematicFrame
                  type="mg-2"
                  aspectRatio="16/9"
                  className="transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#D9A45B] text-[#070809] font-mono-tech text-xs font-bold uppercase tracking-wider">
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>INSPECT 3D TOPOGRAPHY</span>
                  </div>
                </div>
              </div>

              <p className="font-sans-editorial text-sm text-[#A6A6A2] leading-relaxed">
                {p5.description}
              </p>
            </article>
          </div>

          {/* PROJECT 06: MULTI-PERSPECTIVE CHRONOLOGY TIMELINE */}
          <article className="group relative">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-6">
              <div className="flex items-baseline gap-4">
                <span className="font-display-brutal text-4xl sm:text-6xl text-[#D9A45B] font-extrabold">
                  06
                </span>
                <div>
                  <span className="font-mono-tech text-xs text-[#D9A45B] uppercase tracking-widest block">
                    {p6.category}
                  </span>
                  <h3 className="font-serif-editorial text-3xl sm:text-5xl text-[#F3F0E9] group-hover:text-[#D9A45B] transition-colors italic">
                    {p6.title}
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-4 font-mono-tech text-xs text-[#A6A6A2]">
                <span>{p6.duration} · SYNCHRONIZED MULTI-TRACK</span>
                <span className="px-2 py-0.5 border border-[#F3F0E9]/20 uppercase text-[10px] bg-[#0f1012]">
                  {p6.projectType}
                </span>
              </div>
            </div>

            <div
              className="relative w-full border border-[#F3F0E9]/20 bg-[#0e0f11] p-2 cursor-pointer overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.95)]"
              onClick={() => setActiveProject(p6)}
            >
              <CinematicFrame
                type="timeline-1"
                aspectRatio="21/9"
                className="transition-transform duration-1000 group-hover:scale-[1.015]"
              />

              <div className="p-4 bg-[#090a0b] border-t border-[#F3F0E9]/10 flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono-tech text-xs text-[#A6A6A2]">
                <p className="max-w-3xl font-sans-editorial text-sm text-[#A6A6A2] leading-relaxed">
                  {p6.description}
                </p>
                <button
                  type="button"
                  onClick={() => setActiveProject(p6)}
                  className="inline-flex items-center gap-2 text-[#D9A45B] hover:underline uppercase shrink-0 font-bold"
                >
                  <span>INSPECT SYNCHRONIZATION</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </article>
        </div>

        {/* Studio Disclosure Note */}
        <div className="mt-20 p-4 border border-[#F3F0E9]/15 bg-[#090a0b] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono-tech text-xs text-[#A6A6A2]">
          <span className="text-[#F3F0E9]">[ SPEC DISCLOSURE ] // {selectedWork.note}</span>
          <span className="text-[#D9A45B] text-[11px] uppercase tracking-wider">
            BURARI CASE STUDY: IN ACTIVE PRODUCTION (SEPARATE RELEASE)
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
