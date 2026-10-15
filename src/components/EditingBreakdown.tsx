'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, Film, FileText, Crosshair, Play } from 'lucide-react';
import { portfolioData, type ProjectItem } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const EditingBreakdown: React.FC = () => {
  const { breakdown, selectedWork } = portfolioData;
  const { featuredCase } = breakdown;
  const [activeFrame, setActiveFrame] = useState(0);
  const [videoModalProject, setVideoModalProject] = useState<ProjectItem | null>(null);

  const caseProject = selectedWork.projects.find((p) => p.id === 'intro-demo-2') || selectedWork.projects[0];
  const currentFrame = featuredCase.keyframes[activeFrame];

  return (
    <section
      id="breakdown"
      aria-label="Editorial Breakdown"
      className="py-28 lg:py-40 border-b border-white/[0.14] bg-[#000000] relative"
    >
      <div className="w-full px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 mb-16 border-b border-white/[0.14]"
        >
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono-tech text-xs uppercase tracking-[0.25em] text-[#D9A45B]">
              <span>[ 03 // EDITING BREAKDOWN ]</span>
              <span className="text-[#9A9A9A]/50">·</span>
              <span>SCENE-LEVEL CASE STUDY</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.03em] text-[#F3F0E9]">
              Every Frame Has a{' '}
              <span className="font-serif-editorial italic font-normal text-[#D9A45B]">
                Purpose.
              </span>
            </h2>
          </div>
          <div className="max-w-md font-sans text-sm sm:text-base text-[#9A9A9A] leading-relaxed font-light">
            {breakdown.subheading}
          </div>
        </motion.div>

        {/* Forensic Cutting Room Console */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="border border-white/[0.14] bg-[#101112] rounded-[1px] overflow-hidden shadow-2xl"
        >
          {/* Header strip */}
          <div className="p-6 bg-[#000000]/60 border-b border-white/[0.14] flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono-tech text-xs">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#D9A45B] animate-pulse" />
              <span className="text-[#D9A45B] font-bold">{featuredCase.context}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[#9A9A9A]">
                DURATION: {caseProject.duration} · 24 FPS
              </span>
              <button
                type="button"
                onClick={() => setVideoModalProject(caseProject)}
                data-cursor="view"
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#D9A45B] hover:bg-[#e5b36c] text-[#000000] font-mono-tech text-xs font-bold uppercase tracking-wider rounded-[1px] transition-colors shadow-sm"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>WATCH SCENE CLIP</span>
              </button>
            </div>
          </div>

          {/* 4 Pillars Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/[0.14] border-b border-white/[0.14] bg-[#101112]">
            <div className="p-8 space-y-3">
              <span className="font-mono-tech text-xs text-[#D9A45B] uppercase tracking-wider block font-bold">
                01 // THE CHALLENGE
              </span>
              <p className="font-sans text-sm text-[#9A9A9A] leading-relaxed">
                {featuredCase.storytellingChallenge}
              </p>
            </div>

            <div className="p-8 space-y-3">
              <span className="font-mono-tech text-xs text-[#D9A45B] uppercase tracking-wider block font-bold">
                02 // THE DECISION
              </span>
              <p className="font-sans text-sm text-[#F3F0E9]/90 leading-relaxed font-light">
                {featuredCase.creativeDecision}
              </p>
            </div>

            <div className="p-8 space-y-3">
              <span className="font-mono-tech text-xs text-[#D9A45B] uppercase tracking-wider block font-bold">
                03 // THE REASONING
              </span>
              <p className="font-sans text-sm text-[#9A9A9A] leading-relaxed">
                {featuredCase.reasoning}
              </p>
            </div>

            <div className="p-8 space-y-3">
              <span className="font-mono-tech text-xs text-[#D9A45B] uppercase tracking-wider block font-bold">
                04 // THE VISUAL RESULT
              </span>
              <p className="font-sans text-sm text-[#9A9A9A] leading-relaxed">
                {featuredCase.howVisualsSupportNarration}
              </p>
            </div>
          </div>

          {/* Interactive Frame Stepper */}
          <div className="p-6 sm:p-10 lg:p-12 bg-[#000000]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-white/[0.1] gap-4">
              <div>
                <span className="font-mono-tech text-xs text-[#D9A45B] uppercase tracking-widest block">
                  KEYFRAME SEQUENCE SCRUBBER
                </span>
                <h4 className="font-editorial-headline text-2xl sm:text-3xl text-[#F3F0E9] font-bold uppercase">
                  Select Narrative Timecode
                </h4>
              </div>
              <div className="font-mono-tech text-xs text-[#A6A6A2]/70">
                [ SMPTE 24.00 FPS KEYED FRAME ANALYSIS ]
              </div>
            </div>

            {/* Timecode Selector Rail */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {featuredCase.keyframes.map((frame, index) => (
                <button
                  key={frame.timecode}
                  type="button"
                  onClick={() => setActiveFrame(index)}
                  className={`p-5 text-left border rounded-[1px] transition-all relative ${
                    activeFrame === index
                      ? 'bg-[#141517] border-[#D9A45B] shadow-[0_0_20px_rgba(217,164,91,0.2)]'
                      : 'bg-[#0b0c0e] border-[#F3F0E9]/10 hover:border-[#F3F0E9]/30'
                  }`}
                >
                  <div className="flex items-center justify-between font-mono-tech text-xs text-[#D9A45B] mb-2 font-bold">
                    <span>{frame.timecode}</span>
                    {activeFrame === index && <Crosshair className="w-3.5 h-3.5 text-[#D9A45B]" />}
                  </div>
                  <div className="font-mono-tech text-xs text-[#F3F0E9] uppercase font-semibold">
                    {frame.label}
                  </div>
                </button>
              ))}
            </div>

            {/* Detailed Frame Decomposition Box */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFrame}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="p-8 bg-[#0f1013] border border-[#F3F0E9]/15 space-y-6"
              >
                {/* Voiceover Hook */}
                <div className="p-6 bg-[#070809] border-l-2 border-[#D9A45B]">
                  <div className="flex items-center gap-2 font-mono-tech text-xs text-[#D9A45B] uppercase tracking-wider mb-2">
                    <FileText className="w-4 h-4" />
                    <span>Voiceover Transcript ({currentFrame.timecode})</span>
                  </div>
                  <p className="font-serif-editorial text-2xl sm:text-3xl text-[#F3F0E9] italic font-light">
                    {currentFrame.narrationPrompt}
                  </p>
                </div>

                {/* Visual vs Sound Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-[#0a0b0d] border border-[#F3F0E9]/[0.08] space-y-2">
                    <div className="flex items-center gap-2 font-mono-tech text-xs text-[#F3F0E9] uppercase tracking-wider font-bold">
                      <Film className="w-4 h-4 text-[#D9A45B]" />
                      <span>Visual Assembly Strategy</span>
                    </div>
                    <p className="font-sans-editorial text-sm text-[#A6A6A2] leading-relaxed">
                      {currentFrame.editorialChoice}
                    </p>
                  </div>

                  <div className="p-6 bg-[#0a0b0d] border border-[#F3F0E9]/[0.08] space-y-2">
                    <div className="flex items-center gap-2 font-mono-tech text-xs text-[#F3F0E9] uppercase tracking-wider font-bold">
                      <Volume2 className="w-4 h-4 text-[#D9A45B]" />
                      <span>Acoustic Stem & Foley</span>
                    </div>
                    <p className="font-sans-editorial text-sm text-[#A6A6A2] leading-relaxed">
                      {currentFrame.soundCue}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Accessible Interactive Video Modal */}
      <ProjectModal
        project={videoModalProject}
        onClose={() => setVideoModalProject(null)}
      />
    </section>
  );
};
