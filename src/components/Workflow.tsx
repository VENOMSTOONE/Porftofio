'use client';

import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Workflow: React.FC = () => {
  const { workflow } = portfolioData;

  return (
    <section
      id="process"
      aria-label="Editorial Workflow"
      className="py-24 lg:py-36 border-b border-[#F3F0E9]/[0.08] bg-[#0c0d0e]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 lg:mb-24">
          <div className="lg:col-span-8">
            <div className="flex items-center space-x-2 font-mono-tech text-xs uppercase tracking-[0.2em] text-[#D9A45B] mb-4">
              <span>05 // WORKFLOW</span>
              <span className="text-[#A6A6A2]/40">·</span>
              <span>STRUCTURED EDITORIAL PIPELINE</span>
            </div>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-[#F3F0E9] tracking-tight">
              {workflow.heading}
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm sm:text-base text-[#A6A6A2] font-sans-editorial leading-relaxed">
              {workflow.subheading}
            </p>
          </div>
        </div>

        {/* 4-Stage Connected Workflow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative border-t border-[#F3F0E9]/[0.08] pt-12">
          {workflow.stages.map((stage) => (
            <div
              key={stage.step}
              className="relative space-y-5 group"
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#F3F0E9]/[0.08]">
                <span className="font-serif-editorial text-3xl text-[#D9A45B] italic">
                  {stage.step}
                </span>
                <span className="font-mono-tech text-[10px] text-[#A6A6A2]/60 uppercase tracking-widest">
                  PHASE
                </span>
              </div>

              <div>
                <h3 className="font-serif-editorial text-3xl text-[#F3F0E9] group-hover:text-[#D9A45B] transition-colors">
                  {stage.name}
                </h3>
                <span className="font-mono-tech text-xs text-[#A6A6A2]/70 block italic mt-1">
                  {stage.tagline}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#A6A6A2] font-sans-editorial leading-relaxed">
                {stage.description}
              </p>

              <div className="pt-4 border-t border-[#F3F0E9]/[0.06]">
                <span className="font-mono-tech text-[10px] text-[#D9A45B] uppercase tracking-wider block mb-1">
                  Milestone Deliverable:
                </span>
                <span className="text-xs text-[#F3F0E9]/85 font-sans-editorial font-medium">
                  {stage.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
