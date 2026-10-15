'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Services: React.FC = () => {
  const { services } = portfolioData;

  return (
    <section
      id="services"
      aria-label="Post-Production Capabilities"
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
              <span>[ 03 // SERVICES ]</span>
              <span className="text-[#9A9A9A]/50">·</span>
              <span>SPECIALIZED CAPABILITIES</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.03em] text-[#F3F0E9]">
              Editing Built Around the{' '}
              <span className="font-serif-editorial italic font-normal text-[#D9A45B]">
                Story.
              </span>
            </h2>
          </div>
          <div className="max-w-md font-sans text-sm sm:text-base text-[#9A9A9A] leading-relaxed font-light">
            {services.subheading}
          </div>
        </motion.div>

        {/* Monolithic Editorial Service Directory */}
        <div className="divide-y divide-white/[0.14] border-t border-b border-white/[0.14]">
          {services.items.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="py-12 lg:py-16 group hover:bg-[#101112] transition-colors duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Index Numeral (2 cols) */}
                <div className="lg:col-span-2">
                  <span className="font-mono-tech text-4xl sm:text-5xl font-bold text-[#D9A45B]">
                    {service.number}
                  </span>
                </div>

                {/* Service Title & Core Philosophy (5 cols) */}
                <div className="lg:col-span-5 space-y-3">
                  <h3 className="font-sans text-2xl sm:text-3xl text-[#F3F0E9] group-hover:text-[#D9A45B] transition-colors font-bold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-[#9A9A9A] leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>

                {/* Craft Deliverables (5 cols) */}
                <div className="lg:col-span-5 lg:pl-10 space-y-3">
                  <span className="font-mono-tech text-xs text-[#D9A45B] uppercase tracking-wider block font-semibold">
                    Core Craft Focus:
                  </span>
                  <ul className="space-y-2.5">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-[#F3F0E9]/90 font-sans font-light"
                      >
                        <span className="w-1.5 h-1.5 bg-[#D9A45B] mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
