'use client';

import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  const { about } = portfolioData;

  return (
    <section
      id="about"
      aria-label="Studio About and Manifesto"
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
              <span>[ 06 // ABOUT ]</span>
              <span className="text-[#9A9A9A]/50">·</span>
              <span>EDITORIAL DISCIPLINE</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.03em] text-[#F3F0E9]">
              Stories First.{' '}
              <span className="font-serif-editorial italic font-normal text-[#D9A45B]">
                Visuals With Purpose.
              </span>
            </h2>
          </div>
          <div className="max-w-md font-sans text-sm sm:text-base text-[#9A9A9A] leading-relaxed font-light">
            {about.subheading}
          </div>
        </motion.div>

        {/* Editorial Manifesto Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Monolithic Manifesto Quote & Core Commitments (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-12"
          >
            <div className="p-8 sm:p-12 border border-white/[0.14] bg-[#101112] relative shadow-2xl">
              <span className="font-mono-tech text-xs text-[#D9A45B] uppercase tracking-widest block mb-4">
                [ STUDIO AXIOM // 01 ]
              </span>
              <p className="font-serif-editorial text-3xl sm:text-4xl text-[#F3F0E9] font-light leading-relaxed italic">
                "Documentary audiences are not looking for frantic visual noise. They are drawn to intrigue, clarity, and the thrill of uncovering truth. When an edit respects the silence between words as much as the cuts themselves, the story becomes unforgettable."
              </p>
              <div className="mt-8 pt-4 border-t border-white/[0.1] flex items-center justify-between font-mono-tech text-xs text-[#9A9A9A]">
                <span className="text-[#D9A45B] font-bold">VAIBHAV LABS</span>
                <span>MYSTERY & INVESTIGATIVE SPECIALIZATION</span>
              </div>
            </div>

            {/* Commitments */}
            <div className="space-y-6">
              <h3 className="font-sans text-2xl sm:text-3xl text-[#F3F0E9] font-bold uppercase tracking-tight">
                Editorial Commitments
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {about.principles.map((principle) => (
                  <div
                    key={principle.title}
                    className="p-6 border border-white/[0.14] bg-[#101112] space-y-2 hover:border-[#D9A45B]/40 transition-colors"
                  >
                    <h4 className="font-mono-tech text-xs uppercase tracking-wider text-[#D9A45B] font-bold">
                      {principle.title}
                    </h4>
                    <p className="font-sans text-sm text-[#9A9A9A] leading-relaxed font-light">
                      {principle.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Rules of Engagement & Strict Specialization (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="p-8 border border-white/[0.14] bg-[#101112] space-y-6 shadow-2xl">
              <span className="font-mono-tech text-xs uppercase tracking-widest text-[#D9A45B] block font-bold">
                [ EDITORIAL RULES OF ENGAGEMENT ]
              </span>

              <div className="space-y-6">
                {about.editorialPhilosophy.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 pb-5 border-b border-white/[0.1] last:border-b-0 last:pb-0"
                  >
                    <span className="font-mono-tech text-2xl font-bold text-[#D9A45B] shrink-0">
                      0{index + 1}
                    </span>
                    <p className="font-sans text-base text-[#F3F0E9]/90 leading-snug font-light">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 border-l-2 border-[#D9A45B] bg-[#101112] space-y-2">
              <span className="font-mono-tech text-xs text-[#D9A45B] uppercase tracking-widest font-bold block">
                SPECIALIZATION FOCUS
              </span>
              <p className="font-sans text-sm text-[#9A9A9A] leading-relaxed font-light">
                VAIBHAV LABS collaborates exclusively with documentary creators, investigative storytellers, and channels dedicated to mystery, true crime, historical enigmas, and procedural accounts.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
