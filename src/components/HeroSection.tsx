import React from 'react';
import { FadeIn } from './FadeIn';
import { ContactButton } from './ContactButton';
import { Magnet } from './Magnet';
import { motion } from 'motion/react';

export function HeroSection() {
  return (
    <section className="relative h-screen w-full flex flex-col overflow-x-clip bg-bg-dark">
      <video 
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_230229_7c9bc431-46cf-489a-948d-e8144d8eb5d4.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 pointer-events-none"
        style={{ mixBlendMode: 'screen' }}
      />
      {/* Header Section */}
      <header className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 relative z-20">
        <FadeIn delay={0} y={-20} as={motion.a} href="#" className="flex items-center">
          <img 
            src="https://res.cloudinary.com/dxymukm5q/image/upload/v1781786541/dgdgo-Photoroom_amoeto.png" 
            alt="Eldenweb Logo" 
            className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain"
          />
        </FadeIn>
        <nav className="flex items-center gap-4 sm:gap-10 lg:gap-16">
          {['About', 'Projects', 'Contact'].map((item, i) => {
            const id = item.toLowerCase();
            return (
              <FadeIn key={item} delay={(i + 1) * 0.1} y={-20} as={motion.a} href={`#${id}`} className="text-text-light font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200">
                {item}
              </FadeIn>
            );
          })}
        </nav>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-between pt-10 sm:pt-14 relative">
        {/* Heading Container */}
        <div className="w-full flex justify-center overflow-hidden">
          <FadeIn delay={0.15} y={40} className="w-full text-center">
            <h1 className="hero-heading font-black uppercase tracking-[0.05em] leading-[0.85] whitespace-nowrap w-full text-[11vw] sm:text-[12vw] md:text-[13vw] lg:text-[14vw] mt-6 sm:mt-4 md:-mt-5">
              Eldenweb
            </h1>
          </FadeIn>
        </div>

        {/* Bottom Bar */}
        <div className="flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 relative z-20">
          <FadeIn delay={0.35} y={20} className="max-w-[320px] sm:max-w-[450px] md:max-w-[550px]">
            <h2 className="text-text-light font-[family-name:var(--font-kanit)] font-normal tracking-wide leading-relaxed text-[clamp(0.9rem,1.5vw,1.25rem)] opacity-90">
              Welcome to Eldenweb that helps you build your website.<br className="hidden sm:block" />
              Turn your vision into a digital experience crafted for impact and built to grow your business.
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.5} y={20}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
