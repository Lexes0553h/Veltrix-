/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { PricingSection } from './components/PricingSection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  return (
    <div className="bg-bg-dark min-h-screen text-text-light font-Kanit flex flex-col w-full selection:bg-[#B600A8]/30 selection:text-white">
      <main className="w-full overflow-x-hidden">
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <PricingSection />
        <ContactSection />
      </main>
    </div>
  );
}
