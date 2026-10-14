import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { SelectedWork } from '@/components/SelectedWork';
import { ProblemsSolved } from '@/components/ProblemsSolved';
import { EditingBreakdown } from '@/components/EditingBreakdown';
import { Services } from '@/components/Services';
import { Workflow } from '@/components/Workflow';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#101112] text-[#F3F0E9] cinematic-vignette font-sans-editorial">
      {/* 1. Navigation */}
      <Navigation />

      <main id="main-content">
        {/* 2. Hero */}
        <Hero />

        {/* 3. Selected Work */}
        <SelectedWork />

        {/* 4. Problems I Solve */}
        <ProblemsSolved />

        {/* 5. Editing Breakdown */}
        <EditingBreakdown />

        {/* 6. Services */}
        <Services />

        {/* 7. Workflow */}
        <Workflow />

        {/* 8. About VAIBHAV LABS */}
        <About />

        {/* 9. Contact */}
        <Contact />
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}
