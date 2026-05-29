import { motion, useScroll, useTransform } from 'motion/react';
import React, { useRef } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export function AnimatedText({ text, className = '' }: AnimatedTextProps) {
  const elementRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ['start 0.8', 'end 0.2']
  });

  const words = text.split(" ");

  return (
    <p ref={elementRef} className={`flex flex-wrap ${className}`}>
      {words.map((word, wordIndex) => {
        const chars = word.split("");
        return (
          <span key={`word-${wordIndex}`} className="mr-[0.25em] whitespace-nowrap flex">
            {chars.map((char, charIndex) => {
              // Calculate a relative starting offset for each character across the WHOLE text
              // For simplicity in scroll mapping, we can just use the progress directly
              // and map a small rolling window over it 
              const totalCharsApprox = text.length;
              // Very rough index based on previous words length
              const charAbsoluteIndex = text.substring(0, text.indexOf(word))?.length + charIndex || charIndex * wordIndex + charIndex; // Approximate absolute index
              
              const startProgress = charAbsoluteIndex / totalCharsApprox * 0.8; 
              const endProgress = startProgress + 0.2;

              const opacity = useTransform(
                scrollYProgress,
                [startProgress, endProgress],
                [0.2, 1]
              );

              return (
                <span key={`char-${charIndex}`} className="relative">
                  <span className="invisible">{char}</span>
                  <motion.span className="absolute left-0 top-0" style={{ opacity }}>
                    {char}
                  </motion.span>
                </span>
              );
            })}
          </span>
        );
      })}
    </p>
  );
}
