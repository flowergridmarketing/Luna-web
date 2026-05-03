'use client';

import React from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';

interface BenefitsSectionProps {
  data: {
    title: string;
    description: string;
    items: string[];
    note: string;
    image: string;
  };
}

const BenefitsSection = ({ data }: BenefitsSectionProps) => {
  return (
    <section className="py-4 md:py-24 bg-background px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* LEFT CONTENT: BULLET POINTS */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-3xl md:text-5xl font-heading text-[#2C1810] leading-tight mb-8">
              {data.title}
            </h2>
            
            <p className="text-lg md:text-xl text-[#2C1810]/80 font-sans mb-10 leading-relaxed">
              {data.description}
            </p>

            <ul className="space-y-6">
              {data.items.map((item, index) => (
                <li key={index} className="flex items-start gap-4 group">
                  <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-[#A67C52]/10 flex items-center justify-center group-hover:bg-[#A67C52] transition-colors duration-300">
                    <Check className="w-4 h-4 text-[#A67C52] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-base md:text-lg text-[#2C1810]/70 font-sans leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <p className="text-base md:text-lg text-[#2C1810]/80 font-sans leading-relaxed">
                Note : {data.note}
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT: IMAGE */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative aspect-square md:aspect-4/3 lg:aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={"https://ik.imagekit.io/z6xh4w9tp/free-cunsoltation/leftside.jpg"}
                alt="Benefits of consultation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#A67C52]/5 mix-blend-multiply" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
