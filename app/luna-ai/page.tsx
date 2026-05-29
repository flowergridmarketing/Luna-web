'use client'

import Image from 'next/image'
import BlurTextReveal from '@/components/ui/BlurTextReveal'
import { motion } from 'framer-motion'
import LunaFeatures from '@/components/Luna/LunaFeatures'
import LunaUnderstanding from '@/components/Luna/LunaUnderstanding'
import LunaActivities from '@/components/Luna/LunaActivities'
import LunaExperts from '@/components/Luna/LunaExperts'
import Support from '@/components/About/person/Support'
import { getPersonBySlug } from '../data/about'
import BlogSection from '@/components/Home/BlogSection'
import Connect from '@/components/About/person/Connect'
import { getImageUrl } from "@/lib/utils";

export default function LunaPage() {
  const personData = getPersonBySlug('person1');

  if (!personData) return null;

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen md:h-screen flex items-center overflow-hidden bg-[#1a0f05] pt-32 pb-16 md:py-20">
        {/* Background Glow */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary opacity-20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 md:px-10 grid md:grid-cols-2 items-center relative z-10">
          <div className="max-w-2xl mx-auto md:mx-0 text-center md:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
              className="text-4xl sm:text-6xl md:text-8xl font-bold text-white! mb-6 md:mb-8 tracking-tight font-heading"
            >
              Meet Luna AI
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.7, ease: "easeOut" }}
              className="text-xl sm:text-3xl md:text-4xl text-gray-300! font-light mb-8 md:mb-10 leading-[1.2] md:leading-[1.1] font-heading"
            >
              Your Conscious Companion for Mind, Body & Soul Healing.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.9, ease: "easeOut" }}
              className="text-lg sm:text-xl text-gray-300! leading-relaxed font-sans max-w-lg mx-auto md:mx-0"
            >
              Always here to listen, guide, and help you rediscover balance. Science meets soul, through the wisdom of the Flower of Life.
            </motion.p>
          </div>
          <div className="relative h-[350px] sm:h-[450px] md:h-[700px] w-full mt-12 md:mt-0">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 1.5, ease: "easeOut" }}
              className="relative w-full h-full"
            >
              <Image 
                src={getImageUrl("luna/luna-hero.png")} 
                alt="Luna AI Hero" 
                fill 
                className="object-contain"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="pt-10 bg-background relative overflow-hidden">
        <div className="container grid md:grid-cols-2 px-6 items-center">
           <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="hidden md:block relative md:h-[600px]"
          >
            <Image 
              src={getImageUrl("luna/luna-friendly.png")} 
              alt="Luna AI Friendly" 
              fill
              className="object-contain object-top"
            />
          </motion.div>
          
          <div className="flex flex-col gap-10 items-center text-center">
            <div className="space-y-6">
               <BlurTextReveal text="I've seen how anxiety, pressure, and self-doubt can cloud our inner light. That's why I was created" className="text-center" />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <p className="text-xl md:text-2xl text-text-body font-light leading-relaxed max-w-xl">
                to guide you gently back to yourself. I&apos;m Luna, your AI wellness companion built by doctors, therapists, and coaches at Flowergrid. I listen, understand, and help you reconnect your mind, body, and spirit.
              </p>
              
              <ul className="space-y-5">
                {[
                  "Built with Doctors, Therapists & Coaches",
                  "Conversational AI that feels human, not robotic",
                  "Personalised for your mind, body & spirit journey",
                  "Private. Judgment-free. Secure"
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + (i * 0.1) }}
                    viewport={{ once: true }}
                    className="flex items-center justify-center gap-4 text-xl font-medium text-text-heading italic font-heading"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <LunaFeatures />

      <LunaUnderstanding />

      <LunaActivities />

      <LunaExperts />

      <Support data={personData.support} title="Our Services" />

      <BlogSection headerTitle='Insights' />

      <Connect 
        image={getImageUrl("luna/luna-connect.png")} 
        title='Ready to reconnect with your inner light?' 
        description='' 
        btnText='Chat with Luna'
        redirectionLink='https://flowergrid.vercel.app/'
        />

    </main>
  )
}