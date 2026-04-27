'use client';

import { motion } from 'framer-motion';
import { Music, Dumbbell, Gamepad2 } from 'lucide-react';

const ACTIVITIES = [
  {
    title: 'Chakra Alignment Test',
    description: 'Immerse yourself in curated soundscapes for relaxation and focus.',
    buttonText: 'Listen Now',
    Icon: Music,
  },
  {
    title: 'Guided Breathing Exercise',
    description: 'Follow a short, mindful breathing sequence designed to ground your energy.',
    buttonText: 'Begin Exercise',
    Icon: Dumbbell,
  },
  {
    title: 'Mindful Mini-Game',
    description: 'Play a light, reflective game to reset your mood and concentration.',
    buttonText: 'Try Now',
    Icon: Gamepad2,
  },
];

const TRUST_PILLS = [
  'End-to-End Encryption',
  'Data Never Shared',
  'GDPR Compliant',
  'Built with Licensed Professionals',
];

export default function LunaActivities() {
  return (
    <section className="bg-background pt-8 px-6 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl text-center mb-16 font-heading font-normal tracking-tight text-[#171717]"
        >
          Activities
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {ACTIVITIES.map((activity, i) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#4a3422] rounded-[40px] p-10 flex flex-col items-center text-center group transition-transform duration-500 hover:-translate-y-2"
            >
              <div className="w-24 h-24 rounded-full bg-[#f3e5cb]/90 flex items-center justify-center mb-8 shadow-inner">
                <activity.Icon className="w-10 h-10 text-[#4a3422]" strokeWidth={1.5} />
              </div>

              <h3 className="text-3xl text-[#f3e5cb]! font-heading font-medium mb-6 leading-tight">
                {activity.title}
              </h3>

              <p className="text-[#f3e5cb]/80! text-lg mb-10 leading-relaxed font-light">
                {activity.description}
              </p>

              <button className="mt-auto bg-[#f3e5cb] text-[#4a3422] px-10 py-4 rounded-full font-heading font-medium text-lg transition-all duration-300 hover:bg-[#f3e5cb]/90 hover:scale-105 active:scale-95 shadow-lg">
                {activity.buttonText}
              </button>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {TRUST_PILLS.map((pill, i) => (
            <motion.div
              key={pill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="bg-[#f3e5cb]/60 backdrop-blur-sm px-8 py-3 rounded-full text-[#4E351A]! text-sm italic font-medium border border-[#4a3422]/10"
            >
              {pill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
