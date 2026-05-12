'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const FounderStatement = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const items = textRef.current?.querySelectorAll('.animate-item');
    if (items) {
      gsap.fromTo(items, 
        {
          y: 60,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: 'power4.out',
        }
      );
    }
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      className="pt-20 md:pt-32 pb-10 md:pb-12 bg-[#f3e5cb] px-6 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 
          ref={textRef} 
          className="text-[28px] md:text-[42px] lg:text-[62px] font-heading text-[#171717] leading-[1.4] md:leading-normal tracking-tight"
        >
          <span className="animate-item inline">I am Samina Khan,</span>{' '}
          <span className="animate-item inline-block align-middle mx-1 md:mx-2">
            <Image 
              src="/images/free-consultation/samina.jpg" 
              alt="Samina Khan" 
              width={100} 
              height={60} 
              className="rounded-lg object-cover w-[50px] h-[30px] md:w-[100px] md:h-[50px] shadow-sm"
            />
          </span>{' '}
          <span className="animate-item inline">the founder of Flowergrid.</span>{' '}
          <span className="animate-item inline-block align-middle mx-1 md:mx-2">
            <Image 
              src="/images/free-consultation/hand-logo.jpg" 
              alt="Growth" 
              width={100} 
              height={60} 
              className="rounded-lg object-cover w-[50px] h-[30px] md:w-[100px] md:h-[50px] shadow-sm"
            />
          </span>{' '}
          <span className="animate-item inline">For over twenty years, I have worked with people</span>{' '}
          <span className="animate-item inline-block align-middle mx-1 md:mx-2">
            <Image 
              src="/images/free-consultation/meditation.jpg" 
              alt="People" 
              width={100} 
              height={60} 
              className="rounded-lg object-cover w-[60px] h-[30px] md:w-[100px] md:h-[50px] shadow-sm"
            />
          </span>{' '}
          <span className="animate-item inline">and organisations to help them find clarity in the middle</span>{' '}
          <span className="animate-item inline-block align-middle mx-1 md:mx-2">
            <Image 
              src="/images/free-consultation/meditation2.jpg" 
              alt="Clarity" 
              width={100} 
              height={60} 
              className="rounded-lg object-cover w-[60px] h-[30px] md:w-[100px] md:h-[50px] shadow-sm"
            />
          </span>{' '}
          <span className="animate-item inline">of the noise.</span>
        </h2>
      </div>
    </section>
  );
};

export default FounderStatement;
