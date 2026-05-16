'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface SupportChallengeProps {
  data: {
    headline: string;
    subtext: string;
    bodyText: string[];
    images: {
      stressed: string;
      relaxed: string;
    };
  };
}

const SupportChallenge = ({ data }: SupportChallengeProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
      }
    });

    tl.from('.challenge-image-stressed', { opacity: 0, x: -50, duration: 1 })
      .from('.challenge-text-main', { opacity: 0, y: 30, duration: 0.8 }, '-=0.5')
      .from('.challenge-image-relaxed', { opacity: 0, x: 50, duration: 1 }, '-=0.8')
      .from('.challenge-body-text p', { 
        opacity: 0, 
        y: 20, 
        stagger: 0.2, 
        duration: 0.8 
      }, '-=0.5');
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-[#f3e5cb] py-20 px-4 md:py-32 overflow-hidden">
      <div className="max-w-360 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left/Middle Content */}
          <div className="lg:col-span-8 flex flex-col gap-12">
            
            {/* Top Row: Stressed Image & Headline */}
            <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start">
              {/* Stressed Image */}
              <div className="challenge-image-stressed relative w-full md:w-[350px] aspect-square shrink-0">
                <div className="absolute -inset-1 rounded-4xl z-0"></div>
                <div className="relative w-full h-full rounded-[1.8rem] overflow-hidden z-10">
                  <Image
                    src={data.images.stressed}
                    alt="Stressed seeking support"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Headline & Subtext */}
              <div className="challenge-text-main space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium text-black leading-tight tracking-tight">
                  {data.headline}
                </h2>
                <p className="text-lg md:text-xl text-black! leading-relaxed font-sans max-w-xl">
                  {data.subtext}
                </p>
              </div>
            </div>

            {/* Bottom Row: Body Text Blocks */}
            <div className="challenge-body-text space-y-8 max-w-full">
              {data.bodyText.map((paragraph, index) => (
                <p key={index} className="text-lg md:text-xl text-black! leading-[1.8] font-sans">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Right Column: Relaxed Image (Vertical) */}
          <div className="lg:col-span-4">
            <div className="challenge-image-relaxed relative w-full h-[500px] lg:h-full min-h-[600px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={data.images.relaxed}
                alt="Relaxed support session"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SupportChallenge;
