import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { SelectedWork } from '@/components/SelectedWork';
import { Services } from '@/components/Services';
import { Workflow } from '@/components/Workflow';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Preloader } from '@/components/Preloader';
import { ScrollProgressBar } from '@/components/ScrollProgressBar';
import { CustomCursor } from '@/components/CustomCursor';
import { TextProtection } from '@/components/TextProtection';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#F3F0E9] cinematic-vignette font-sans">
      {/* 0. Cinematic Preloader, Scroll Scrub Timeline, Custom Focus Cursor & Text Protection */}
      <Preloader />
      <ScrollProgressBar />
      <CustomCursor />
      <TextProtection />

      {/* Navigation */}
      <Navigation />

      <main id="main-content">
        {/* 01. Hero */}
        <Hero />

        {/* 02. Selected Work */}
        <SelectedWork />

        {/* 03. Services */}
        <Services />

        {/* 04. How It Works */}
        <Workflow />

        {/* 05. Contact */}
        <Contact />
      </main>

      {/* 06. Footer */}
      <Footer />
    </div>
  );
}
