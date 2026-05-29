import React from 'react';
import { FadeIn } from './FadeIn';

const SERVICES = [
  {
    id: "01",
    title: "Custom Website Design",
    description: "We design clean, conversion-focused websites tailored to your brand — built to make every visitor feel like they landed in exactly the right place."
  },
  {
    id: "02",
    title: "3D & Immersive Websites",
    description: "Stand apart with depth. We craft interactive 3D web experiences that captivate, engage, and leave a lasting impression on anyone who visits."
  },
  {
    id: "03",
    title: "Portfolio Websites",
    description: "Whether you're a creative, agency, or freelancer, we build portfolio sites that showcase your work with elegance and purpose."
  },
  {
    id: "04",
    title: "Business & Landing Pages",
    description: "From service pages to lead-gen funnels, we create business-focused websites designed to turn visitors into paying clients."
  },
  {
    id: "05",
    title: "E-commerce Stores",
    description: "We build online stores that look great and sell better — with smooth navigation, trust-building design, and optimized checkout flows."
  }
];

export function ServicesSection() {
  return (
    <section className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-20">
      <div className="w-full flex justify-center mb-16 sm:mb-20 md:mb-28">
        <h2 className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none tracking-tight">
          Services
        </h2>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col">
        {SERVICES.map((service, i) => (
          <FadeIn 
            key={service.id} 
            delay={i * 0.1} 
            className="flex flex-col sm:flex-row items-start sm:items-center py-8 sm:py-10 md:py-12 border-b border-[rgba(215,226,234,0.15)] last:border-b-0 gap-6 sm:gap-12 md:gap-20"
          >
            <div className="w-full sm:w-1/3 shrink-0">
              <span className="text-[#0C0C0C] font-black leading-none block text-[clamp(3rem,10vw,140px)]">
                {service.id}
              </span>
            </div>
            
            <div className="w-full flex-1 flex flex-col gap-3">
              <h3 className="text-[#0C0C0C] font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)] leading-tight">
                {service.title}
              </h3>
              <p className="text-[#0C0C0C] font-light opacity-60 leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)]">
                {service.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
