import { motion, useScroll, useTransform } from 'motion/react';
import React, { useRef, useState, useEffect } from 'react';

const IMAGES = [
  "https://res.cloudinary.com/dxymukm5q/image/upload/q_auto/f_auto/v1779936938/Screenshot_2026-05-28_082448_btuwmg.png",
  "https://res.cloudinary.com/dxymukm5q/image/upload/q_auto/f_auto/v1779936937/Screenshot_2026-05-28_080941_ednvhq.png",
  "https://res.cloudinary.com/dxymukm5q/image/upload/q_auto/f_auto/v1779936937/Screenshot_2026-05-28_082513_t0s13b.png",
  "https://res.cloudinary.com/dxymukm5q/image/upload/q_auto/f_auto/v1779937583/Screenshot_2026-05-06_211556_qikurp.png",
  "https://res.cloudinary.com/dxymukm5q/image/upload/q_auto/f_auto/v1779937593/Screenshot_2026-05-06_211823_krr7ff.png",
  "https://res.cloudinary.com/dxymukm5q/image/upload/q_auto/f_auto/v1779937455/Screenshot_2026-05-28_083153_wf28pt.png",
  "https://res.cloudinary.com/dxymukm5q/image/upload/q_auto/f_auto/v1779937613/Screenshot_2026-05-06_211751_za3b86.png",
  "https://res.cloudinary.com/dxymukm5q/image/upload/q_auto/f_auto/v1779937453/Screenshot_2026-05-28_083302_s2grkf.png"
];

// Row 1: first 8 images, tripled for seamless scrolling
const ROW_1_IMAGES = [...IMAGES, ...IMAGES, ...IMAGES];
// Row 2: remaining 7 images, tripled
const remaining7 = IMAGES.slice(1);
const ROW_2_IMAGES = [...remaining7, ...remaining7, ...remaining7];

export function MarqueeSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sectionTop, setSectionTop] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      // get element's absolute position from top of document
      const rect = containerRef.current.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      setSectionTop(top);
    }
  }, []);

  const { scrollY } = useScroll();

  const x1 = useTransform(scrollY, (v) => {
    const wh = typeof window !== 'undefined' ? window.innerHeight : 1000;
    const offset = (v - sectionTop + wh) * 0.3;
    return offset - 200;
  });

  const x2 = useTransform(scrollY, (v) => {
    const wh = typeof window !== 'undefined' ? window.innerHeight : 1000;
    const offset = (v - sectionTop + wh) * 0.3;
    return -(offset - 200);
  });

  const renderRow = (images: string[], xTransform: any) => (
    <motion.div 
      className="flex gap-3 min-w-max"
      style={{ x: xTransform, willChange: 'transform' }}
    >
      {images.map((src, idx) => (
        <div key={idx} className="w-[420px] h-[270px] shrink-0">
          <img 
            src={src} 
            alt="Work sample" 
            loading="lazy"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      ))}
    </motion.div>
  );

  return (
    <section ref={containerRef} className="bg-bg-dark pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden flex flex-col gap-3" style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}>
      {renderRow(ROW_1_IMAGES, x1)}
      {renderRow(ROW_2_IMAGES, x2)}
    </section>
  );
}
