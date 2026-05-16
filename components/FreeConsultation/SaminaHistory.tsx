'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface HistoryItem {
  title: string;
  text: string;
  image: string;
  imagePosition: 'left' | 'right';
  decorativeFlower: string;
}

interface SaminaHistoryProps {
  data: readonly HistoryItem[];
}

const SaminaHistory = ({ data }: SaminaHistoryProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const rows = gsap.utils.toArray('.history-row');

    rows.forEach((row: any) => {
      gsap.fromTo(row,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: row,
            start: 'top 85%',
          }
        }
      );
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-[#f3e5cb] overflow-hidden py-10 md:py-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-4 md:gap-8 px-4 md:px-6">
        {data.map((item, index) => (
          <div
            key={index}
            className={`history-row flex flex-col items-center justify-center md:flex-row bg-[#f3e5cb] ${item.imagePosition === 'right' ? 'md:flex-row-reverse' : ''
              }`}
          >
            {/* Image Column */}
            <div className="history-image w-full md:w-1/2 relative h-[400px] md:h-auto min-h-[500px] lg:min-h-[600px]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>

            {/* Text Column */}
            <div className="history-text w-100 md:w-1/2 flex items-center mx-10 md:mx-0 justify-center p-6 md:p-12 lg:p-16 relative bg-[#f3e5cb]">
              <div className="relative w-full max-w-lg border border-[#C7AD94] rounded-xl p-8 md:p-12 z-10 flex flex-col justify-center">
                <div className={`relative z-10 flex flex-col gap-4 ${item.imagePosition === 'right' ? 'text-right' : 'text-left'}`}>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-sans font-medium text-black mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  {item.text.split('\n\n').map((paragraph, pIndex, array) => (
                    <p 
                      key={pIndex} 
                      className={`text-base md:text-lg text-black/90 leading-[1.8] font-sans ${
                        pIndex === array.length - 1 
                          ? (item.imagePosition === 'right' ? 'md:pl-16 lg:pl-28' : 'md:pr-16 lg:pr-28') 
                          : ''
                      }`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Decorative Flower - positioned under the text */}
                <div className={`absolute z-0 w-32 h-32 md:w-78 md:h-70 opacity-100 pointer-events-none ${
                  item.imagePosition === 'right' ? 'bottom-0 -left-10 md:-left-19' : 'bottom-0 -right-7 md:-right-19'
                }`}>
                  <Image
                    src={item.decorativeFlower}
                    alt="Decorative element"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SaminaHistory;
