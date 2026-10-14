'use client';

import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Workflow: React.FC = () => {
  const { workflow } = portfolioData;

  return (
    <section
      id="process"
      aria-label="Editorial Workflow"
      className="py-28 lg:py-40 border-b border-[#F3F0E9]/15 bg-[#070809] relative"
    >
      <div className="w-full px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 mb-16 border-b border-[#F3F0E9]/15">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono-tech text-xs uppercase tracking-[0.25em] text-[#D9A45B]">
              <span>[ 05 // PIPELINE ]</span>
              <span className="text-[#A6A6A2]/40">·</span>
              <span>STRUCTURED POST-PRODUCTION PROTOCOL</span>
            </div>
            <h2 className="font-display-brutal text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-[-0.04em] text-[#F3F0E9]">
              {workflow.heading}
            </h2>
          </div>
          <div className="max-w-md font-sans-editorial text-sm sm:text-base text-[#A6A6A2] leading-relaxed">
            {workflow.subheading}
          </div>
        </div>

        {/* 4-Stage Industrial Pipeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-6">
          {workflow.stages.map((stage) => (
            <div
              key={stage.step}
              className="p-8 border border-[#F3F0E9]/15 bg-[#0b0c0e] hover:border-[#D9A45B]/50 transition-colors flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-baseline justify-between border-b border-[#F3F0E9]/10 pb-3">
                  <span className="font-display-brutal text-3xl font-extrabold text-[#D9A45B]">
                    {stage.step}
                  </span>
                  <span className="font-mono-tech text-[10px] text-[#A6A6A2]/60 uppercase">
                    PHASE PROTOCOL
                  </span>
                </div>

                <div>
                  <h3 className="font-display-brutal text-2xl text-[#F3F0E9] font-bold uppercase tracking-tight">
                    {stage.name}
                  </h3>
                  <span className="font-serif-editorial text-lg text-[#D9A45B] italic block mt-0.5">
                    "{stage.tagline}"
                  </span>
                </div>

                <p className="font-sans-editorial text-sm text-[#A6A6A2] leading-relaxed">
                  {stage.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F3F0E9]/10">
                <span className="font-mono-tech text-[10px] text-[#D9A45B] uppercase tracking-wider block mb-1">
                  Phase Output:
                </span>
                <span className="font-mono-tech text-xs text-[#F3F0E9] font-semibold">
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
