'use client';

import React, { useEffect, useRef, useState } from 'react';
import { X, Clock, Film, Volume2, Layers, CheckCircle2, FileCode } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import type { ProjectItem } from '../data/portfolioData';
import { CinematicFrame } from './CinematicFrame';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [isVideoBuffering, setIsVideoBuffering] = useState(true);

  useEffect(() => {
    setIsVideoBuffering(true);
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      closeButtonRef.current?.focus();
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  const mapAssetToType = (key: string): 'intro-1' | 'intro-2' | 'intro-3' | 'mg-1' | 'mg-2' | 'timeline-1' => {
    switch (key) {
      case 'Intro Demo 1': return 'intro-1';
      case 'Intro Demo 2': return 'intro-2';
      case 'Intro Demo 3': return 'intro-3';
      case 'MG Demo 1': return 'mg-1';
      case 'MG Demo 2': return 'mg-2';
      case 'Timeline 1': return 'timeline-1';
      default: return 'intro-1';
    }
  };

  const hasVideo = Boolean(project?.videoUrl && project.videoUrl.trim() !== '');

  return (
    <AnimatePresence>
      {project && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/90 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-[#101112] border border-white/[0.14] shadow-2xl rounded-[2px] overflow-hidden"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.1] bg-[#000000]">
              <div className="flex items-center space-x-3">
                <span className="font-mono-tech text-[10px] tracking-widest text-[#D9A45B] uppercase font-semibold px-2 py-0.5 bg-[#D9A45B]/10 border border-[#D9A45B]/30 rounded-xs">
                  {project.projectType}
                </span>
                <span className="font-mono-tech text-xs text-[#9A9A9A]">
                  SAMPLE REF // {project.assetKey}
                </span>
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                className="p-1.5 text-[#9A9A9A] hover:text-[#F3F0E9] transition-colors rounded-[2px] focus:outline-none focus:ring-1 focus:ring-[#D9A45B]"
                aria-label="Close project viewer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Modal Content */}
            <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
              {/* Media Viewing Screen */}
              <div className="relative w-full rounded-[2px] overflow-hidden bg-black border border-white/[0.1]">
                {hasVideo ? (
                  project.videoUrl?.includes('youtube.com') || project.videoUrl?.includes('youtu.be') ? (
                    <div className="aspect-video w-full">
                      <iframe
                        src={project.videoUrl}
                        title={project.title}
                        className="w-full h-full border-0"
                        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <div className="relative w-full aspect-video bg-black flex items-center justify-center">
                      <video
                        src={project.videoUrl}
                        poster={project.posterUrl}
                        controls
                        controlsList="nodownload noplaybackrate"
                        disablePictureInPicture
                        onContextMenu={(e) => e.preventDefault()}
                        autoPlay
                        playsInline
                        preload="auto"
                        onLoadStart={() => setIsVideoBuffering(true)}
                        onWaiting={() => setIsVideoBuffering(true)}
                        onCanPlay={() => setIsVideoBuffering(false)}
                        onPlaying={() => setIsVideoBuffering(false)}
                        className="w-full h-full object-contain bg-black select-none"
                      />

                      {/* Documentary Decryption / Buffering HUD */}
                      {isVideoBuffering && (
                        <div className="absolute inset-0 bg-black/65 backdrop-blur-xs flex flex-col items-center justify-center pointer-events-none z-10 transition-opacity duration-300">
                          <div className="relative w-12 h-12 mb-3 flex items-center justify-center">
                            <div className="absolute inset-0 border border-white/20 border-t-[#D9A45B] border-b-[#D9A45B] rounded-full animate-spin" />
                            <span className="w-2 h-2 rounded-full bg-[#D9A45B] animate-ping" />
                          </div>
                          <div className="font-mono-tech text-xs text-[#F3F0E9] tracking-wider uppercase font-medium flex items-center gap-2">
                            <span className="text-[#D9A45B] font-bold">[ BUFFERING ]</span>
                            <span>DECRYPTING MASTER STREAM</span>
                          </div>
                          <span className="font-mono-tech text-[10px] text-[#9A9A9A] mt-1">
                            PRORES 422 · 24.00 FPS · 320KBPS AAC
                          </span>
                        </div>
                      )}
                    </div>
                  )
                ) : (
                  /* Editorial Replaceable Media Placeholder Notice */
                  <div className="relative aspect-video w-full flex flex-col justify-between p-6 sm:p-8 bg-[#000000] overflow-hidden">
                    <div className="absolute inset-0 opacity-40">
                      <CinematicFrame
                        type={mapAssetToType(project.assetKey)}
                        className="w-full h-full"
                      />
                    </div>

                    <div className="relative z-10 flex items-center justify-between text-xs font-mono-tech text-[#D9A45B]">
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#D9A45B] animate-pulse" />
                        MEDIA ASSET INGESTION CONTAINER
                      </span>
                      <span className="text-[#9A9A9A]">{project.duration} · {project.aspectRatio}</span>
                    </div>

                    <div className="relative z-10 my-auto text-center max-w-lg mx-auto py-4">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#101112] border border-[#D9A45B]/40 flex items-center justify-center text-[#D9A45B]">
                        <Film className="w-5 h-5" />
                      </div>
                      <h4 className="font-serif-editorial text-3xl font-normal text-[#F3F0E9] mb-2">
                        {project.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#9A9A9A] leading-relaxed font-light">
                        Demonstration of documentary pacing, audio rhythm, and visual tension. Final master MP4 plays here directly upon linking.
                      </p>
                    </div>

                    <div className="relative z-10 bg-[#101112]/95 border border-white/[0.1] p-3 rounded text-[11px] font-mono-tech text-[#9A9A9A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                      <span className="flex items-center gap-1.5 text-[#F3F0E9]">
                        <FileCode className="w-4 h-4 text-[#D9A45B]" />
                        Set <code className="text-[#D9A45B]">videoUrl</code> in portfolioData.ts
                      </span>
                      <span className="text-[10px] text-[#9A9A9A]/70">
                        Supports local file path or YouTube embed URL
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Technical Breakdown */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono-tech text-xs uppercase tracking-wider text-[#D9A45B]">
                      {project.category}
                    </span>
                    <span className="text-[#9A9A9A]/40">·</span>
                    <span className="font-mono-tech text-xs text-[#9A9A9A] flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {project.duration}
                    </span>
                  </div>
                  <h3 id="modal-title" className="font-serif-editorial text-3xl sm:text-4xl text-[#F3F0E9] font-normal">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#9A9A9A] leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>

                {/* Editorial Techniques */}
                <div className="border-t border-white/[0.1] pt-4">
                  <h4 className="font-mono-tech text-xs uppercase tracking-widest text-[#F3F0E9] flex items-center gap-2 mb-3">
                    <Layers className="w-4 h-4 text-[#D9A45B]" />
                    Storytelling Techniques Demonstrated
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {project.techniques.map((tech) => (
                      <div
                        key={tech}
                        className="flex items-start gap-2 p-2.5 bg-[#000000] border border-white/[0.1] rounded-[2px]"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D9A45B] shrink-0 mt-0.5" />
                        <span className="text-xs text-[#F3F0E9]/90 font-medium font-sans">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Audio & Visual notes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-white/[0.1] pt-4">
                  <div className="p-4 bg-[#000000] border border-white/[0.1] rounded-[2px] space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-mono-tech text-[#D9A45B] uppercase tracking-wider">
                      <Volume2 className="w-3.5 h-3.5" />
                      Sound Design Treatment
                    </div>
                    <p className="text-xs text-[#9A9A9A] leading-relaxed font-light">
                      {project.audioNotes}
                    </p>
                  </div>

                  <div className="p-4 bg-[#000000] border border-white/[0.1] rounded-[2px] space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-mono-tech text-[#D9A45B] uppercase tracking-wider">
                      <Film className="w-3.5 h-3.5" />
                      Visual & Optical Texture
                    </div>
                    <p className="text-xs text-[#9A9A9A] leading-relaxed font-light">
                      {project.visualTreatment}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Bottom Bar */}
            <div className="px-6 py-3 border-t border-white/[0.1] bg-[#000000] flex items-center justify-between text-xs text-[#9A9A9A]">
              <span className="font-mono-tech text-[10px] text-[#9A9A9A]/70">
                VAIBHAV LABS · CURATED EDITORIAL DEMONSTRATION
              </span>
              <button
                type="button"
                onClick={onClose}
                className="px-3 py-1.5 bg-[#101112] hover:bg-[#1a1c20] text-[#F3F0E9] border border-white/[0.14] rounded-[2px] font-mono-tech text-xs transition-colors"
              >
                Close View
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
