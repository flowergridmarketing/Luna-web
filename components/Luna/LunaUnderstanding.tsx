'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { getImageUrl } from "@/lib/utils";

const TESTS = [
  {
    title: 'Chakra Alignment Test',
    description: 'Understand which energy centres need care today.',
    buttonText: 'Start Test',
  },
  {
    title: 'Anxiety & Stress Index',
    description: 'Check how stress shows up in your body and mind.',
    buttonText: 'Start Test',
  },
  {
    title: 'Mind-Body Balance Test',
    description: 'See how connected your thoughts and physical state are.',
    buttonText: 'Start Test',
  },
  {
    title: 'Personality & Archetype Quiz',
    description: 'Gain insight into your natural patterns and ways of relating to the world.',
    buttonText: 'Start Test',
  },
];

const TRUST_PILLS = [
  'End-to-End Encryption',
  'Data Never Shared',
  'GDPR Compliant',
  'Built with Licensed Professionals',
];

export default function LunaUnderstanding() {
  return (
    <section className="bg-background pt-8 px-6 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-heading font-normal tracking-tight text-[#171717]"
          >
            Take a moment to understand yourself
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-[#171717]! max-w-2xl mx-auto leading-relaxed"
          >
            Explore quick, research-based self-tests created by our therapists and psychologists.
            Each one helps you understand how your mind, body and emotions connect
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {TESTS.map((test, i) => (
            <motion.div
              key={test.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#E5D2AE]! rounded-[60px] p-8 flex flex-col items-center text-center group transition-all duration-500 hover:shadow-xl hover:-translate-y-2 min-h-[420px]"
            >
              <div className="mb-6 mt-4 relative w-12 h-12">
                <Image src={getImageUrl("/home/leaf.png")} alt="Leaf" fill className="object-contain" />
              </div>

              <h3 className="text-2xl md:text-3xl text-[#171717] font-heading font-medium mb-6 leading-tight h-16 flex items-center justify-center">
                {test.title}
              </h3>

              <p className="text-[#5b5b5b] text-base md:text-lg mb-10 leading-relaxed font-light grow">
                {test.description}
              </p>

              <button className="bg-[#a78b5a] text-white px-8 py-3 rounded-full font-heading font-medium text-base transition-all duration-300 hover:bg-[#8e754a] hover:scale-105 active:scale-95 shadow-md">
                {test.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
