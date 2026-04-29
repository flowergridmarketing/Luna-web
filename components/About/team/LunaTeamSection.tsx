'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { getImageUrl } from "@/lib/utils";

const LunaTeamSection = () => {
  return (
    <section className="bg-[#f3e5cb] py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-[#2C1810]">
            Meet Luna AI
          </h2>
          
          <div className="space-y-6 text-[#2C1810]/80 text-lg md:text-xl leading-relaxed">
            <p>
              Your conscious companion for mind, body, and spirit wellbeing. 
              Luna is here to help you explore Flowergrid&apos;s holistic wellness 
              practitioners and services, offering gentle guidance to find the 
              support that fits your unique journey. 
            </p>
            <p>
              She listens, understands your goals, and points you toward the 
              right sessions, self-discovery tools, and resources. 
              Private, secure, and available whenever you need insight or 
              clarity, Luna complements the human expertise of the Flowergrid team.
            </p>
          </div>

          <Link href="https://flowergrid.vercel.app/" target="_blank" rel="noopener noreferrer">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-[#4a3422] text-[#f3e5cb] px-8 py-4 rounded-full font-heading font-medium text-lg shadow-lg hover:bg-[#3d2b1c] transition-all duration-300"
            >
              Discover Luna and Start Your Journey
            </motion.button>
          </Link>
        </motion.div>

        {/* Right Side: Phone Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex justify-center items-center"
        >
          <div className="relative w-full max-w-[500px] aspect-[4/5] md:aspect-square">
            <Image
              src={getImageUrl("about/team/luna-chat.png")}
              alt="Luna AI Chat Interface"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LunaTeamSection;
