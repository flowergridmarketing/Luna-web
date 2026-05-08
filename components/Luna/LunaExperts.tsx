'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { getImageUrl } from '@/lib/utils';

const EXPERTS = [
  {
    name: 'Samina Khan',
    role: 'Founder & Life Coach | Reiki Healer | Emotional Wellness Mentor',
    description: 'Samina brings over a decade of experience in life coaching and energy healing. Her approach blends mindfulness, self-awareness and practical strategies to help clients move through change with clarity and confidence.',
    image: getImageUrl('about/person1/saminahalf.png'),
  },
  // {
  //   name: 'Munira',
  //   role: 'Co-Founder | Clinical Hypnotherapist | NLP Practitioner',
  //   description: 'A visionary strategist and wellbeing advocate who blends leadership, psychology, and holistic growth to inspire conscious living, personal transformation, and purpose-driven leadership across global communities.',
  //   image: getImageUrl('about/person2/monira.png'),
  // },
];

export default function LunaExperts() {
  return (
    <section className="bg-background py-16 px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl text-center mb-16 font-heading font-normal tracking-tight text-[#171717]"
        >
          Meet the Experts Behind Luna
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 lg:gap-12">
          {EXPERTS.map((expert, i) => (
            <motion.div
              key={expert.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background rounded-[60px] p-10 flex flex-col items-center text-center shadow-sm border border-[#171717]/5"
            >
              {/* Profile Image with Oval Frame */}
              <div className="relative w-64 h-64 md:w-72 md:h-72 mb-8 overflow-hidden rounded-[100px] border-4 border-[#e8d5be]">
                <Image 
                  src={expert.image} 
                  alt={expert.name} 
                  fill 
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-[#a78b5a]/5 pointer-events-none" />
              </div>

              <h3 className="text-3xl text-[#171717] font-heading font-normal mb-3">
                {expert.name}
              </h3>

              <p className="text-[#714C24]! text-lg italic font-medium mb-6 leading-tight max-w-sm">
                {expert.role}
              </p>

              <p className="text-[#171717]! text-base md:text-lg mb-10 leading-relaxed font-light">
                {expert.description}
              </p>
            <a href="https://calendly.com/flowergridmarketing/30min?month=2026-02" target='_blank' >

              <button className="mt-auto bg-primary text-white px-10 py-3.5 rounded-full font-heading font-medium text-base transition-all duration-300 hover:opacity-90 hover:scale-105 active:scale-95 shadow-md">
                Book a Session
              </button>
            </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
