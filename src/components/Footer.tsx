import React from 'react';
import { FadeIn } from './FadeIn';

export function Footer() {
  return (
    <footer className="w-full bg-bg-dark border-t border-[rgba(215,226,234,0.05)] py-8 px-6 md:px-10 z-50 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand & Copyright */}
        <FadeIn y={10} className="flex flex-col items-center md:items-start gap-1">
          <span className="font-bold text-lg uppercase tracking-widest text-[#D7E2EA]">
            Eldenweb
          </span>
          <span className="text-[#D7E2EA]/60 text-xs font-light tracking-wide">
            © {new Date().getFullYear()} Eldenweb. All rights reserved.
          </span>
        </FadeIn>

        {/* Certifications (MSME Logo placeholder goes here) */}
        <FadeIn delay={0.2} y={10} className="flex flex-col items-center md:items-end gap-2">
          <span className="text-[#D7E2EA]/40 text-[10px] uppercase tracking-widest">
            Recognized By
          </span>
          <div className="flex items-center gap-4 opacity-70 hover:opacity-100 transition-opacity duration-300">
            {/* The MSME Logo */}
            {/* Replace the 'src' value with the path or URL of your MSME logo */}
            <img 
              src="https://res.cloudinary.com/dxymukm5q/image/upload/v1781494073/01JEB70XQ2TG69BG8XAEGVBSH1_pmsbqu.webp" 
              alt="MSME Certified" 
              className="h-12 md:h-16 w-auto object-contain"
            />
          </div>
        </FadeIn>
        
      </div>
    </footer>
  );
}
