'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface SupportReasonsProps {
  data: {
    headline: string;
    text: string;
    quote: string;
    reasons: string[];
  };
}

const SupportReasons = ({ data }: SupportReasonsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
      }
    });

    tl.from('.reasons-headline', { opacity: 0, x: -30, duration: 0.8 })
      .from('.reasons-text', { opacity: 0, x: -30, duration: 0.8 }, '-=0.4')
      .from('.reasons-quote', { opacity: 0, scale: 0.9, duration: 0.8 }, '-=0.4')
      .from('.reason-card', { 
        opacity: 0, 
        y: 20, 
        stagger: 0.1, 
        duration: 0.6 
      }, '-=0.6')
      .from('.decorative-icon', { 
        opacity: 0, 
        scale: 0, 
        duration: 0.5, 
        stagger: 0.2 
      }, '-=0.5');
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-[#f3e5cb] py-12 px-4 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          
          {/* Left Column: Text & Quote */}
          <div className="lg:col-span-5 space-y-8 relative">
            <div className="space-y-6">
              <div className="relative inline-block">
                <h2 className="reasons-headline text-4xl md:text-5xl lg:text-6xl font-sans font-medium text-black leading-tight tracking-tighter">
                  {data.headline}
                </h2>
                {/* Decorative Icon overlapping headline */}
                <div className="decorative-icon absolute top-12 right-24 md:right-32 w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden">
                </div>
              </div>
              <p className="reasons-text text-lg md:text-xl text-black/80 leading-relaxed font-sans max-w-lg">
                {data.text}
              </p>
            </div>

            <div className="reasons-quote relative p-8 md:p-0">
              <p className="text-xl md:text-2xl font-sans italic text-black/90 leading-snug">
                &ldquo;{data.quote}&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Grid of Reasons */}
          <div className="lg:col-span-7 relative">
            {/* Decorative Icon floating near cards */}
            <div className="decorative-icon absolute -top-8 left-1/2 -translate-x-1/2 md:left-[45%] z-20 w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden ">
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {data.reasons.map((reason, index) => (
                <div 
                  key={index} 
                  className="reason-card bg-[#e5d5b7] p-4 md:p-6 rounded-3xl flex items-center justify-center text-center transition-transform hover:scale-[1.02] duration-300 shadow-sm"
                >
                  <p className="text-base md:text-lg font-sans text-black/90 leading-relaxed">
                    {reason}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SupportReasons;
