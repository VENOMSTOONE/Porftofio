'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Send, AlertCircle, Copy, Check, Clock, ShieldCheck, Crosshair } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface FormState {
  name: string;
  email: string;
  projectType: string;
  videoLength: string;
  details: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  details?: string;
}

export const Contact: React.FC = () => {
  const { contact, brand } = portfolioData;

  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    projectType: 'YouTube Mystery Documentary',
    videoLength: '15–30 minutes',
    details: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isReadyToSend, setIsReadyToSend] = useState(false);

  const projectTypes = [
    'YouTube Mystery Documentary',
    'Investigative Deep-Dive',
    'Historical Documentary',
    'Unexplained Events Account',
    'Maps & Motion Graphics Only',
    'Other Documentary Format',
  ];

  const lengthOptions = [
    'Under 15 minutes',
    '15–30 minutes',
    '30–60 minutes',
    '60+ minutes (Feature)',
    'Multi-part Docuseries',
  ];

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.name.trim()) {
      errs.name = 'Please state your name or channel title.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Minimum 2 characters required.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.details.trim()) {
      errs.details = 'Please outline your documentary subject and editing requirements.';
    } else if (formData.details.trim().length < 10) {
      errs.details = 'Please provide at least a brief summary of the story (10+ characters).';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsReadyToSend(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(brand.contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const openMailClient = () => {
    const subject = encodeURIComponent(`Documentary Project Cut: ${formData.projectType} — ${formData.name}`);
    const body = encodeURIComponent(
      `Creator / Channel: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Documentary Genre: ${formData.projectType}\n` +
      `Estimated Duration: ${formData.videoLength}\n\n` +
      `Narrative Scope & Editing Requirements:\n${formData.details}\n`
    );
    window.location.href = `mailto:${brand.contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      aria-label="Project Inquiries"
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
              <span>[ 05 // CONTACT ]</span>
              <span className="text-[#9A9A9A]/50">·</span>
              <span>START A CONVERSATION</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.03em] text-[#F3F0E9]">
              Have a Story{' '}
              <span className="font-serif-editorial italic font-normal text-[#D9A45B]">
                Worth Telling?
              </span>
            </h2>
          </div>
          <div className="max-w-md font-sans text-sm sm:text-base text-[#9A9A9A] leading-relaxed font-light">
            {contact.subheading}
          </div>
        </motion.div>

        {/* Form and Contact Specifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Refined Project Inquiry Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 p-8 sm:p-12 border border-white/[0.14] bg-[#101112] relative shadow-2xl"
          >
            {isReadyToSend ? (
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="font-mono-tech text-xs text-[#D9A45B] uppercase tracking-widest block font-bold">
                    [ INQUIRY PRE-FORMATTED ]
                  </span>
                  <h3 className="font-sans text-2xl sm:text-3xl text-[#F3F0E9] font-bold uppercase tracking-tight">
                    Ready to Send
                  </h3>
                  <p className="font-sans text-sm text-[#9A9A9A] leading-relaxed font-light">
                    Inquiry details for <strong className="text-[#F3F0E9] font-medium">{formData.name}</strong> ({formData.projectType}, {formData.videoLength}) are pre-formatted. Click below to launch your email client with these details pre-filled.
                  </p>
                </div>

                <div className="p-5 bg-[#000000] border border-white/[0.1] font-mono-tech text-xs text-[#9A9A9A] space-y-2">
                  <div><strong className="text-[#F3F0E9]">TARGET:</strong> {brand.contactEmail}</div>
                  <div><strong className="text-[#F3F0E9]">SUBJECT:</strong> Documentary Project: {formData.projectType} — {formData.name}</div>
                  <div><strong className="text-[#F3F0E9]">DURATION:</strong> {formData.videoLength}</div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <button
                    type="button"
                    onClick={openMailClient}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#D9A45B] hover:bg-[#e5b36c] text-[#000000] font-mono-tech text-xs font-bold uppercase tracking-widest transition-colors shadow-2xl"
                  >
                    <Mail className="w-4 h-4" />
                    <span>OPEN EMAIL CLIENT ↗</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsReadyToSend(false)}
                    className="text-xs font-mono-tech text-[#9A9A9A] hover:text-[#F3F0E9] underline"
                  >
                    Edit Details
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-8">
                {/* Name */}
                <div className="border-b border-[#F3F0E9]/20 pb-2 focus-within:border-[#D9A45B] transition-colors">
                  <label
                    htmlFor="contact-name"
                    className="block font-mono-tech text-xs uppercase tracking-wider text-[#A6A6A2] mb-1 font-semibold"
                  >
                    01 // Your Name or Channel Title <span className="text-[#D9A45B]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g., Marcus Vance / Shadow Archive"
                    className="w-full py-2 bg-transparent text-base text-[#F3F0E9] placeholder-[#A6A6A2]/30 focus:outline-none font-sans-editorial"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-err' : undefined}
                  />
                  {errors.name && (
                    <p id="name-err" className="mt-1 text-xs text-[#e74c3c] font-mono-tech flex items-center gap-1" role="alert">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="border-b border-[#F3F0E9]/20 pb-2 focus-within:border-[#D9A45B] transition-colors">
                  <label
                    htmlFor="contact-email"
                    className="block font-mono-tech text-xs uppercase tracking-wider text-[#A6A6A2] mb-1 font-semibold"
                  >
                    02 // Direct Communication Email <span className="text-[#D9A45B]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="director@channel.com"
                    className="w-full py-2 bg-transparent text-base text-[#F3F0E9] placeholder-[#A6A6A2]/30 focus:outline-none font-sans-editorial"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-err' : undefined}
                  />
                  {errors.email && (
                    <p id="email-err" className="mt-1 text-xs text-[#e74c3c] font-mono-tech flex items-center gap-1" role="alert">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Genre & Length */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="border-b border-[#F3F0E9]/20 pb-2 focus-within:border-[#D9A45B] transition-colors">
                    <label
                      htmlFor="contact-type"
                      className="block font-mono-tech text-xs uppercase tracking-wider text-[#A6A6A2] mb-1 font-semibold"
                    >
                      03 // Documentary Format
                    </label>
                    <select
                      id="contact-type"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full py-2 bg-transparent text-sm text-[#F3F0E9] focus:outline-none font-mono-tech"
                    >
                      {projectTypes.map((t) => (
                        <option key={t} value={t} className="bg-[#0c0d0f] text-[#F3F0E9]">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="border-b border-[#F3F0E9]/20 pb-2 focus-within:border-[#D9A45B] transition-colors">
                    <label
                      htmlFor="contact-length"
                      className="block font-mono-tech text-xs uppercase tracking-wider text-[#A6A6A2] mb-1 font-semibold"
                    >
                      04 // Estimated Runtime
                    </label>
                    <select
                      id="contact-length"
                      value={formData.videoLength}
                      onChange={(e) => setFormData({ ...formData, videoLength: e.target.value })}
                      className="w-full py-2 bg-transparent text-sm text-[#F3F0E9] focus:outline-none font-mono-tech"
                    >
                      {lengthOptions.map((l) => (
                        <option key={l} value={l} className="bg-[#0c0d0f] text-[#F3F0E9]">
                          {l}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Details */}
                <div className="border-b border-[#F3F0E9]/20 pb-2 focus-within:border-[#D9A45B] transition-colors">
                  <label
                    htmlFor="contact-details"
                    className="block font-mono-tech text-xs uppercase tracking-wider text-[#A6A6A2] mb-1 font-semibold"
                  >
                    05 // Story Subject & Editing Direction <span className="text-[#D9A45B]">*</span>
                  </label>
                  <textarea
                    id="contact-details"
                    rows={4}
                    required
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder="Describe your subject: Is the narration voiceover recorded? What visual references do you envision? Do you require custom maps, timelines, or full cinematic assembly?"
                    className="w-full py-2 bg-transparent text-sm text-[#F3F0E9] placeholder-[#A6A6A2]/30 focus:outline-none font-sans-editorial resize-y"
                    aria-invalid={Boolean(errors.details)}
                    aria-describedby={errors.details ? 'details-err' : undefined}
                  />
                  {errors.details && (
                    <p id="details-err" className="mt-1 text-xs text-[#e74c3c] font-mono-tech flex items-center gap-1" role="alert">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.details}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn-discuss-highlight w-full inline-flex items-center justify-center gap-3 py-5 bg-[#D9A45B] hover:bg-[#e5b36c] text-[#000000] font-mono-tech text-xs font-bold uppercase tracking-widest transition-colors shadow-2xl"
                >
                  <Crosshair className="w-4 h-4" />
                  <span>DISCUSS YOUR PROJECT ↗</span>
                </button>
              </form>
            )}
          </motion.div>

          {/* Right Column: Direct Dispatch & Standards (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="p-8 border border-white/[0.14] bg-[#101112] space-y-4 shadow-2xl">
              <span className="font-mono-tech text-xs text-[#D9A45B] uppercase tracking-widest block font-bold">
                DIRECT STUDIO DISPATCH
              </span>
              <h3 className="font-sans text-2xl text-[#F3F0E9] uppercase font-bold tracking-tight">
                Prefer Direct Email?
              </h3>
              <p className="font-sans text-sm text-[#9A9A9A] leading-relaxed font-light">
                If you already have a script document, footage drive link, or rough timeline ready for evaluation:
              </p>
              <div className="pt-2 flex items-center justify-between p-4 bg-[#000000] border border-white/[0.14]">
                <code className="text-xs sm:text-sm text-[#F3F0E9] font-mono-tech select-all font-bold">
                  {brand.contactEmail}
                </code>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-1.5 text-[#9A9A9A] hover:text-[#D9A45B] transition-colors"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-[#D9A45B]" /> : <Copy className="w-4 h-4 text-[#9A9A9A]" />}
                </button>
              </div>
            </div>

            <div className="p-8 border border-white/[0.14] bg-[#101112] space-y-5 shadow-2xl">
              <span className="font-mono-tech text-xs text-[#D9A45B] uppercase tracking-widest block font-bold">
                STANDARDS OF ENGAGEMENT
              </span>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#D9A45B] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-mono-tech text-[#F3F0E9] font-bold uppercase">
                      Response Window
                    </div>
                    <p className="text-xs text-[#9A9A9A] font-sans leading-relaxed mt-0.5 font-light">
                      I review and respond to serious documentary inquiries within 24 to 48 hours.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#D9A45B] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-mono-tech text-[#F3F0E9] font-bold uppercase">
                      Strict Confidentiality
                    </div>
                    <p className="text-xs text-[#9A9A9A] font-sans leading-relaxed mt-0.5 font-light">
                      All research, scripts, and investigative findings remain strictly confidential under standard NDA principles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
