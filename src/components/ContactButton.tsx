import React from 'react';

export function ContactButton() {
  return (
    <a 
      href="#contact"
      className="inline-block rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base font-medium uppercase tracking-widest text-white transition-all hover:bg-white/20 active:scale-95 cursor-pointer backdrop-blur-md bg-white/10 border border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
    >
      Contact Us
    </a>
  );
}
