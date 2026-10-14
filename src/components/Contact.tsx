'use client';

import React, { useState } from 'react';
import { Mail, Send, AlertCircle, Copy, Check, Clock, ShieldCheck } from 'lucide-react';
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
      errs.name = 'Please provide your name or channel title.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.details.trim()) {
      errs.details = 'Please briefly outline your documentary topic and narrative requirements.';
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
    const subject = encodeURIComponent(`Documentary Inquiry: ${formData.projectType} — ${formData.name}`);
    const body = encodeURIComponent(
      `Creator / Channel: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Format: ${formData.projectType}\n` +
      `Estimated Duration: ${formData.videoLength}\n\n` +
      `Narrative Brief & Editing Requirements:\n${formData.details}\n`
    );
    window.location.href = `mailto:${brand.contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      aria-label="Project Inquiries"
      className="py-24 lg:py-36 border-b border-[#F3F0E9]/[0.08] bg-[#0c0d0e] relative"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 lg:mb-24">
          <div className="lg:col-span-8">
            <div className="flex items-center space-x-2 font-mono-tech text-xs uppercase tracking-[0.2em] text-[#D9A45B] mb-4">
              <span>07 // INITIATE</span>
              <span className="text-[#A6A6A2]/40">·</span>
              <span>DIRECT EDITORIAL INQUIRY</span>
            </div>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-[#F3F0E9] tracking-tight">
              {contact.heading}
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm sm:text-base text-[#A6A6A2] font-sans-editorial leading-relaxed">
              {contact.subheading}
            </p>
          </div>
        </div>

        {/* Form and Contact Information */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-10 border border-[#F3F0E9]/[0.08] bg-[#141517] rounded-[2px]">
            {isReadyToSend ? (
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="font-mono-tech text-xs text-[#D9A45B] uppercase tracking-wider block">
                    INQUIRY PREPARED FOR DISPATCH
                  </span>
                  <h3 className="font-serif-editorial text-3xl text-[#F3F0E9]">
                    Project Details Confirmed
                  </h3>
                  <p className="text-sm text-[#A6A6A2] font-sans-editorial leading-relaxed">
                    Your project details for <strong className="text-[#F3F0E9]">{formData.name}</strong> ({formData.projectType}, {formData.videoLength}) are formatted. Click below to launch your email client with these parameters pre-filled.
                  </p>
                </div>

                <div className="p-4 bg-[#101112] border border-[#F3F0E9]/[0.08] rounded-[2px] font-mono-tech text-xs text-[#A6A6A2] space-y-2">
                  <div><strong className="text-[#F3F0E9]">To:</strong> {brand.contactEmail}</div>
                  <div><strong className="text-[#F3F0E9]">Subject:</strong> Documentary Inquiry: {formData.projectType} — {formData.name}</div>
                  <div><strong className="text-[#F3F0E9]">Duration:</strong> {formData.videoLength}</div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    type="button"
                    onClick={openMailClient}
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#D9A45B] hover:bg-[#e5b36c] text-[#101112] font-mono-tech text-xs font-semibold uppercase tracking-wider rounded-[2px] transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send Via Email Client</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsReadyToSend(false)}
                    className="text-xs font-mono-tech text-[#A6A6A2] hover:text-[#F3F0E9] underline"
                  >
                    Edit details
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block font-mono-tech text-xs uppercase tracking-wider text-[#F3F0E9] mb-2"
                  >
                    Your Name or Channel Title <span className="text-[#D9A45B]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g., Marcus Vance / Shadow Archive"
                    className={`w-full px-4 py-3 bg-[#101112] border text-sm text-[#F3F0E9] placeholder-[#A6A6A2]/40 rounded-[2px] focus:outline-none transition-colors ${
                      errors.name
                        ? 'border-[#e74c3c]'
                        : 'border-[#F3F0E9]/15 focus:border-[#D9A45B]'
                    }`}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-err' : undefined}
                  />
                  {errors.name && (
                    <p id="name-err" className="mt-1.5 text-xs text-[#e74c3c] font-mono-tech flex items-center gap-1" role="alert">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block font-mono-tech text-xs uppercase tracking-wider text-[#F3F0E9] mb-2"
                  >
                    Email Address <span className="text-[#D9A45B]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="director@channel.com"
                    className={`w-full px-4 py-3 bg-[#101112] border text-sm text-[#F3F0E9] placeholder-[#A6A6A2]/40 rounded-[2px] focus:outline-none transition-colors ${
                      errors.email
                        ? 'border-[#e74c3c]'
                        : 'border-[#F3F0E9]/15 focus:border-[#D9A45B]'
                    }`}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-err' : undefined}
                  />
                  {errors.email && (
                    <p id="email-err" className="mt-1.5 text-xs text-[#e74c3c] font-mono-tech flex items-center gap-1" role="alert">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Format & Length */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="contact-type"
                      className="block font-mono-tech text-xs uppercase tracking-wider text-[#F3F0E9] mb-2"
                    >
                      Documentary Genre
                    </label>
                    <select
                      id="contact-type"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 bg-[#101112] border border-[#F3F0E9]/15 text-sm text-[#F3F0E9] rounded-[2px] focus:outline-none focus:border-[#D9A45B]"
                    >
                      {projectTypes.map((t) => (
                        <option key={t} value={t} className="bg-[#141517] text-[#F3F0E9]">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-length"
                      className="block font-mono-tech text-xs uppercase tracking-wider text-[#F3F0E9] mb-2"
                    >
                      Estimated Duration
                    </label>
                    <select
                      id="contact-length"
                      value={formData.videoLength}
                      onChange={(e) => setFormData({ ...formData, videoLength: e.target.value })}
                      className="w-full px-4 py-3 bg-[#101112] border border-[#F3F0E9]/15 text-sm text-[#F3F0E9] rounded-[2px] focus:outline-none focus:border-[#D9A45B]"
                    >
                      {lengthOptions.map((l) => (
                        <option key={l} value={l} className="bg-[#141517] text-[#F3F0E9]">
                          {l}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Details */}
                <div>
                  <label
                    htmlFor="contact-details"
                    className="block font-mono-tech text-xs uppercase tracking-wider text-[#F3F0E9] mb-2"
                  >
                    Project Details & Narrative Direction <span className="text-[#D9A45B]">*</span>
                  </label>
                  <textarea
                    id="contact-details"
                    rows={4}
                    required
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder="Tell me about the story: What is the subject? Is narration recorded? Do you need custom maps, timelines, or full cinematic assembly?"
                    className={`w-full px-4 py-3 bg-[#101112] border text-sm text-[#F3F0E9] placeholder-[#A6A6A2]/40 rounded-[2px] focus:outline-none transition-colors resize-y ${
                      errors.details
                        ? 'border-[#e74c3c]'
                        : 'border-[#F3F0E9]/15 focus:border-[#D9A45B]'
                    }`}
                    aria-invalid={Boolean(errors.details)}
                    aria-describedby={errors.details ? 'details-err' : undefined}
                  />
                  {errors.details && (
                    <p id="details-err" className="mt-1.5 text-xs text-[#e74c3c] font-mono-tech flex items-center gap-1" role="alert">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.details}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#D9A45B] hover:bg-[#e5b36c] text-[#101112] font-mono-tech text-xs font-semibold uppercase tracking-wider rounded-[2px] transition-colors shadow-[0_4px_25px_rgba(217,164,91,0.2)]"
                >
                  <span>{contact.ctaButton}</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Email & Discipline Notes (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 border border-[#F3F0E9]/[0.08] bg-[#141517] rounded-[2px] space-y-4">
              <span className="font-mono-tech text-xs text-[#D9A45B] uppercase tracking-wider block">
                DIRECT EMAIL
              </span>
              <h3 className="font-serif-editorial text-3xl text-[#F3F0E9]">
                Prefer Direct Communication?
              </h3>
              <p className="text-sm text-[#A6A6A2] font-sans-editorial leading-relaxed">
                If you already have a script document, footage drive link, or rough timeline ready to review:
              </p>
              <div className="pt-2 flex items-center justify-between p-3.5 bg-[#101112] border border-[#F3F0E9]/10 rounded-[2px]">
                <code className="text-xs sm:text-sm text-[#F3F0E9] font-mono-tech select-all">
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

            <div className="p-8 border border-[#F3F0E9]/[0.08] bg-[#141517] rounded-[2px] space-y-5">
              <span className="font-mono-tech text-xs text-[#D9A45B] uppercase tracking-wider block">
                STANDARDS OF COLLABORATION
              </span>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#D9A45B] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-mono-tech text-[#F3F0E9] font-medium uppercase">
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
                    <div className="text-xs font-mono-tech text-[#F3F0E9] font-medium uppercase">
                      Strict Confidentiality
                    </div>
                    <p className="text-xs text-[#A6A6A2] font-sans-editorial leading-relaxed mt-0.5">
                      All documentary research, scripts, and production material remain strictly confidential.
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
