'use client';

import React, { useState } from 'react';
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
      className="py-28 lg:py-40 border-b border-[#F3F0E9]/15 bg-[#070809] relative"
    >
      <div className="w-full px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 mb-16 border-b border-[#F3F0E9]/15">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono-tech text-xs uppercase tracking-[0.25em] text-[#D9A45B]">
              <span>[ 07 // INITIATE TRANSMISSION ]</span>
              <span className="text-[#A6A6A2]/40">·</span>
              <span>COMMISSION INQUIRY</span>
            </div>
            <h2 className="font-display-brutal text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-[-0.04em] text-[#F3F0E9]">
              {contact.heading}
            </h2>
          </div>
          <div className="max-w-md font-sans-editorial text-sm sm:text-base text-[#A6A6A2] leading-relaxed">
            {contact.subheading}
          </div>
        </div>

        {/* Form and Contact Specifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Brutalist Commission Form (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-12 border border-[#F3F0E9]/20 bg-[#0c0d0f] relative">
            {isReadyToSend ? (
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="font-mono-tech text-xs text-[#D9A45B] uppercase tracking-widest block font-bold">
                    [ INQUIRY TELEMETRY LOGGED ]
                  </span>
                  <h3 className="font-display-brutal text-3xl sm:text-4xl text-[#F3F0E9] font-bold uppercase">
                    Ready for Transmission
                  </h3>
                  <p className="font-sans-editorial text-sm text-[#A6A6A2] leading-relaxed">
                    Parameters for <strong className="text-[#F3F0E9]">{formData.name}</strong> ({formData.projectType}, {formData.videoLength}) are pre-formatted. Click below to launch your email client with these parameters pre-filled.
                  </p>
                </div>

                <div className="p-5 bg-[#070809] border border-[#F3F0E9]/10 font-mono-tech text-xs text-[#A6A6A2] space-y-2">
                  <div><strong className="text-[#F3F0E9]">TARGET:</strong> {brand.contactEmail}</div>
                  <div><strong className="text-[#F3F0E9]">SUBJECT:</strong> Documentary Project Cut: {formData.projectType} — {formData.name}</div>
                  <div><strong className="text-[#F3F0E9]">DURATION:</strong> {formData.videoLength}</div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <button
                    type="button"
                    onClick={openMailClient}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#D9A45B] hover:bg-[#e5b36c] text-[#070809] font-mono-tech text-xs font-bold uppercase tracking-widest transition-colors shadow-2xl"
                  >
                    <Mail className="w-4 h-4" />
                    <span>LAUNCH MAIL TRANSMISSION</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsReadyToSend(false)}
                    className="text-xs font-mono-tech text-[#A6A6A2] hover:text-[#F3F0E9] underline"
                  >
                    Modify Parameters
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
                  className="w-full inline-flex items-center justify-center gap-3 py-5 bg-[#D9A45B] hover:bg-[#e5b36c] text-[#070809] font-mono-tech text-xs font-bold uppercase tracking-widest transition-colors shadow-2xl"
                >
                  <Crosshair className="w-4 h-4" />
                  <span>TRANSMIT PROJECT INQUIRY</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Telemetry & Standards (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 border border-[#F3F0E9]/20 bg-[#0c0d0f] space-y-4">
              <span className="font-mono-tech text-xs text-[#D9A45B] uppercase tracking-widest block font-bold">
                DIRECT STUDIO DISPATCH
              </span>
              <h3 className="font-display-brutal text-2xl text-[#F3F0E9] uppercase font-bold">
                Prefer Direct Email?
              </h3>
              <p className="font-sans-editorial text-sm text-[#A6A6A2] leading-relaxed">
                If you already have a script document, footage drive link, or rough timeline ready for evaluation:
              </p>
              <div className="pt-2 flex items-center justify-between p-4 bg-[#070809] border border-[#F3F0E9]/15">
                <code className="text-xs sm:text-sm text-[#F3F0E9] font-mono-tech select-all font-bold">
                  {brand.contactEmail}
                </code>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-1.5 text-[#A6A6A2] hover:text-[#D9A45B] transition-colors"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-[#D9A45B]" /> : <Copy className="w-4 h-4 text-[#A6A6A2]" />}
                </button>
              </div>
            </div>

            <div className="p-8 border border-[#F3F0E9]/20 bg-[#0c0d0f] space-y-5">
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
                    <p className="text-xs text-[#A6A6A2] font-sans-editorial leading-relaxed mt-0.5">
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
                    <p className="text-xs text-[#A6A6A2] font-sans-editorial leading-relaxed mt-0.5">
                      All research, scripts, and investigative findings remain strictly confidential under standard NDA principles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
