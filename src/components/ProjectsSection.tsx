import { motion, useScroll, useTransform } from 'motion/react';
import React, { useRef } from 'react';
import { FadeIn } from './FadeIn';

const PROJECTS = [
  {
    id: "01",
    category: "(Client)",
    name: "Solis studio",
    isVideo: true,
    mediaSrc: "https://res.cloudinary.com/dxymukm5q/video/upload/q_auto/f_auto/v1779940084/Sequence_01_oa2owg.mp4",
    isIframe: false
  },
  {
    id: "02",
    category: "(Personal)",
    name: "Drip",
    isVideo: true,
    mediaSrc: "https://res.cloudinary.com/dxymukm5q/video/upload/q_auto/f_auto/v1779933951/Sequence_01_1_uopnzw.mp4",
    isIframe: false
  },
  {
    id: "03",
    category: "(Client)",
    name: "Culinary Canvas",
    isVideo: true,
    mediaSrc: "https://res.cloudinary.com/dxymukm5q/video/upload/q_auto/f_auto/v1779933957/Sequence_06_cjqr8c.mp4",
    isIframe: false
  },
  {
    id: "04",
    category: "(Client)",
    name: "Luvre essence",
    isVideo: true,
    mediaSrc: "https://res.cloudinary.com/dxymukm5q/video/upload/q_auto/f_auto/v1779933964/Sequence_01_2_zl6zye.mp4",
    isIframe: false
  }
];

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section id="projects" ref={containerRef} className="bg-bg-dark rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-30 pt-20 px-4 sm:px-6 md:px-10 pb-10 sm:pb-[10vh]">
      <FadeIn y={40} className="w-full flex justify-center mb-16 md:mb-24">
        <h2 className="hero-heading font-black uppercase text-[clamp(3rem,12vw,160px)] leading-none tracking-tight">
          Project
        </h2>
      </FadeIn>

      <div className="flex flex-col gap-6 sm:gap-24 pb-10 sm:pb-[10vh]">
        {PROJECTS.map((project, i) => {
          // Dynamic scaling for stacking effect
          const targetScale = 1 - (PROJECTS.length - 1 - i) * 0.03;
          
          // Using a simple index-based approach for sticky calculation via Framer Motion
          const startProgress = i / PROJECTS.length;
          const endProgress = (i + 1) / PROJECTS.length;
          
          const scale = useTransform(
            scrollYProgress,
            [startProgress, endProgress],
            [1, targetScale]
          );

          return (
            <div 
              key={project.id} 
              className="flex justify-center sticky origin-top" 
              style={{ top: `calc(10vh + ${i * 12}px)` }}
            >
              <motion.div 
                className="w-full max-w-7xl rounded-[32px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[rgba(215,226,234,0.3)] sm:border-text-light bg-bg-dark p-4 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-8 overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]"
                style={{ scale }}
              >
                {/* Card Header */}
                <div className="flex justify-between items-end px-2 sm:px-4 shrink-0">
                  <div className="flex items-baseline gap-3 sm:gap-6 md:gap-8">
                    <span className="font-black text-[clamp(2.5rem,8vw,120px)] leading-none text-text-light">
                      {project.id}
                    </span>
                    <h3 className="font-medium uppercase text-[clamp(1.5rem,4vw,3.5rem)] leading-none text-text-light">
                      {project.name}
                    </h3>
                  </div>
                </div>

                {/* Card Media */}
                <div className="w-full h-[35vh] sm:h-[60vh] md:h-[70vh] rounded-[24px] sm:rounded-[32px] md:rounded-[40px] overflow-hidden bg-[#1A1A1A]">
                  {project.isIframe ? (
                    <iframe
                      src={project.mediaSrc}
                      className="w-full h-full border-0 pointer-events-auto"
                      allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                      allowFullScreen
                      frameBorder="0"
                    ></iframe>
                  ) : (
                    <video 
                      src={project.mediaSrc} 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      className="w-full h-full object-contain sm:object-cover"
                    />
                  )}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
