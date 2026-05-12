'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface StoryItem {
  text: string;
  image: string;
  imagePosition: 'left' | 'right';
}

interface FlowergridStoryProps {
  data: {
    headline: string;
    items: readonly StoryItem[];
  };
}

const FlowergridStory = ({ data }: FlowergridStoryProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useGSAP(() => {
    // Animate sections
    const sections = gsap.utils.toArray('.story-section');
    sections.forEach((section: any) => {
      gsap.fromTo(section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
          }
        }
      );
    });

    // Animate SVG Path drawing
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      gsap.set(pathRef.current, { strokeDasharray: length, strokeDashoffset: length });

      gsap.to(pathRef.current, {
        strokeDashoffset: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 40%',
          end: 'bottom 80%',
          scrub: 1,
        }
      });
    }
    // Animate underline
    const underlinePath = containerRef.current?.querySelector('.story-underline-path');
    if (underlinePath instanceof SVGPathElement) {
      const length = underlinePath.getTotalLength();
      gsap.set(underlinePath, { strokeDasharray: length, strokeDashoffset: length });
      
      gsap.to(underlinePath, {
        strokeDashoffset: 0,
        duration: 1.5,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: underlinePath,
          start: 'top 90%',
        }
      });
    }
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-[#f3e5cb] py-20 px-4 md:py-32 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center mb-24">
        <h2 className="text-4xl md:text-6xl font-sans tracking-tight text-black flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
          <span>The</span>
          <span className="relative inline-block">
            <span className="font-parisienne text-5xl md:text-8xl lowercase relative -top-1 z-10">Story</span>
            <svg 
              className="absolute bottom-1 md:bottom-2 left-0 w-full h-2 md:h-3 pointer-events-none overflow-visible" 
              viewBox="0 0 100 10" 
              preserveAspectRatio="none"
            >
              <path
                className="story-underline-path"
                d="M 2 8 Q 50 0 98 8"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span>Behind Flowergrid</span>
        </h2>
      </div>

      {/* SVG Dotted Line */}
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
        viewBox="0 0 1000 2000"
        preserveAspectRatio="none"
      >
        <path
          ref={pathRef}
          d="M 500 200 Q 800 400 500 600 Q 200 800 500 1000 Q 800 1200 500 1400 Q 200 1600 500 1800"
          fill="none"
          stroke="#C7AD94"
          strokeWidth="2"
          strokeDasharray="8 12"
          className="opacity-40"
        />
      </svg>

      <div className="max-w-6xl mx-auto space-y-24 md:space-y-48 relative z-10">
        {data.items.map((item, index) => (
          <div
            key={index}
            className={`story-section flex flex-col md:flex-row items-center gap-12 md:gap-24 ${
              item.imagePosition === 'left' ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Text Column */}
            <div className="w-full md:w-1/2">
              <p className={`text-lg md:text-2xl text-black! leading-[1.8] font-sans ${
                item.imagePosition === 'right' ? 'text-left' : 'text-center md:text-right'
              }`}>
                {item.text}
              </p>
            </div>

            {/* Image Column */}
            <div className="w-full md:w-1/2 flex font-sans! justify-center relative">
              <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
                <Image
                  src={item.image}
                  alt="Story image"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FlowergridStory;
