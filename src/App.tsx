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
import { ContactSection } from './components/ContactSection';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-bg-dark min-h-screen text-text-light font-kanit flex flex-col w-full selection:bg-[#B600A8]/30 selection:text-white">
      {/* Scroll Progress Bar for nice effect */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-[#D7E2EA] origin-left z-50 mix-blend-difference opacity-50"
        style={{ scaleX }}
      />
      
      <main className="w-full overflow-x-hidden">
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}
