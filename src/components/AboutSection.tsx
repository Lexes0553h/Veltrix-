import React from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';

export function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen bg-bg-dark flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden">
      <video 
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 pointer-events-none"
        style={{ mixBlendMode: 'screen' }}
      />
      
      {/* 3D Decorative Assets */}
      <FadeIn delay={0.1} x={-80} duration={0.9} className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-0">
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" 
          alt="Moon icon" 
          className="w-[120px] sm:w-[160px] md:w-[210px] opacity-20"
        />
      </FadeIn>
      
      <FadeIn delay={0.15} x={80} duration={0.9} className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0">
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png" 
          alt="Lego icon" 
          className="w-[120px] sm:w-[160px] md:w-[210px] opacity-20"
        />
      </FadeIn>

      <FadeIn delay={0.25} x={-80} duration={0.9} className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-0">
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png" 
          alt="3D object" 
          className="w-[100px] sm:w-[140px] md:w-[180px] opacity-20"
        />
      </FadeIn>

      <FadeIn delay={0.3} x={80} duration={0.9} className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-0">
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png" 
          alt="3D group" 
          className="w-[130px] sm:w-[170px] md:w-[220px] opacity-20"
        />
      </FadeIn>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl w-full text-center">
        <FadeIn y={40} className="w-full mb-10 sm:mb-14 md:mb-16">
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(3rem,12vw,160px)]">
            About me
          </h2>
        </FadeIn>

        <div className="mb-16 sm:mb-20 md:mb-24 w-full flex justify-center">
          <AnimatedText 
            text="Your website is more than a page — it's your most powerful business tool. Veltrix helps transform your online presence into a platform that attracts the right audience, builds lasting trust, and drives real growth. From first impression to final conversion, your website works for your business around the clock."
            className="text-text-light font-medium justify-center leading-relaxed max-w-[560px] text-[clamp(1rem,2vw,1.35rem)] text-center"
          />
        </div>

        <FadeIn delay={0.4}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
