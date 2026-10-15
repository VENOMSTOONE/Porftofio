'use client';

import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolioData';

export const Workflow: React.FC = () => {
  const { workflow } = portfolioData;

  return (
    <section
      id="process"
      aria-label="Editorial Workflow"
      className="py-28 lg:py-40 border-b border-white/[0.14] bg-[#000000] relative"
    >
      {/* Anchor alias for #workflow */}
      <span id="workflow" className="sr-only" aria-hidden="true" />

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
              <span>[ 04 // PROCESS ]</span>
              <span className="text-[#9A9A9A]/50">·</span>
              <span>HOW IT WORKS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.03em] text-[#F3F0E9]">
              From Script to{' '}
              <span className="font-serif-editorial italic font-normal text-[#D9A45B]">
                Screen.
              </span>
            </h2>
          </div>
          <div className="max-w-md font-sans text-sm sm:text-base text-[#9A9A9A] leading-relaxed font-light">
            {workflow.subheading}
          </div>
        </motion.div>

        {/* 3-Step Connected Editorial Pipeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
          {workflow.stages.map((stage, index) => (
            <motion.div
              key={stage.step}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-8 sm:p-10 border border-white/[0.14] bg-[#101112] hover:border-[#D9A45B]/60 transition-all flex flex-col justify-between space-y-8 group"
            >
              {/* Step indicator tag */}
              <div className="space-y-5">
                <div className="flex items-baseline justify-between border-b border-white/[0.1] pb-4">
                  <span className="font-mono-tech text-4xl font-bold text-[#D9A45B]">
                    {stage.step}
                  </span>
                  <span className="font-mono-tech text-[10px] text-[#9A9A9A]/60 uppercase tracking-widest">
                    STEP {index + 1} OF 3
                  </span>
                </div>

                <div>
                  <h3 className="font-sans text-2xl text-[#F3F0E9] font-bold uppercase tracking-tight group-hover:text-[#D9A45B] transition-colors">
                    {stage.name}
                  </h3>
                  <span className="font-serif-editorial text-lg text-[#D9A45B] italic block mt-1">
                    "{stage.tagline}"
                  </span>
                </div>

                <p className="font-sans text-sm sm:text-base text-[#9A9A9A] leading-relaxed font-light">
                  {stage.description}
                </p>
              </div>

              <div className="pt-5 border-t border-white/[0.1]">
                <span className="font-mono-tech text-[10px] text-[#D9A45B] uppercase tracking-wider block mb-1.5 font-semibold">
                  Deliverable Output:
                </span>
                <span className="font-mono-tech text-xs text-[#F3F0E9] font-medium leading-normal block">
                  {stage.deliverable}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
