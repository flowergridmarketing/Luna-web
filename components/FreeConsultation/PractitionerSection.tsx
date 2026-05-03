'use client';

import React from 'react';
import Image from 'next/image';

interface PractitionerSectionProps {
  data: {
    name: string;
    role: string;
    bio: string;
    bioSecondary: string;
    image: string;
  };
}

const PractitionerSection = ({ data }: PractitionerSectionProps) => {
  return (
    <section className="py-4 md:py-24 bg-transparent px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* LEFT CONTENT: IMAGE */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[500px] aspect-4/5 rounded-4xl overflow-hidden">
              <Image
                src={data.image}
                alt={data.name}
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* RIGHT CONTENT: DESCRIPTION */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-xl md:text-2xl font-sans text-[#A67C52] uppercase tracking-widest mb-4">
              Your Practitioner
            </h3>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-playfair text-[#2C1810] leading-tight mb-8">
              {data.name}
            </h2>
            
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl font-playfair text-[#2C1810]/90 italic leading-snug">
                "{data.bio}"
              </p>
              
              <div className="w-16 h-1 bg-[#A67C52] opacity-30" />

              <p className="text-lg md:text-xl text-[#2C1810]/70 font-sans leading-relaxed">
                {data.bioSecondary}
              </p>
            </div>

            <div className="mt-12">
              <p className="text-sm font-sans text-[#2C1810]/50 uppercase tracking-widest">
                {data.role} — Flowergrid Holistic Wellness
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PractitionerSection;
