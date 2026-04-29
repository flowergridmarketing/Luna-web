import { Metadata } from 'next'
import React from 'react'
import Team from '@/components/About/team/Team'
import TeamHero from '@/components/About/team/TeamHero'
import LeafScrollText from '@/components/Home/LeafScrollText'
import { lines } from '../data/about'
import Teamconn from '@/components/About/team/Teamconn'
import Founders, { Founder } from '@/components/Membership/Founders'
import CurvedPathAnimation, { Step } from '@/components/Programme/CurvedPathAnimation'
import LunaTeamSection from '@/components/About/team/LunaTeamSection'
import Connect from '@/components/About/person/Connect'
import { getImageUrl } from "@/lib/utils";


export const metadata: Metadata = {
  title: "Meet Our Team | Experts in Holistic Wellness - Flowergrid",
  description: "Get to know the passionate experts at Flowergrid. Our team of professionals is dedicated to guiding you on your wellness journey.",
}

const steps: Step[] = [
  {
    id: 1,
    title: "Share Your Story",
    description: "Start with a discovery call or a chat with Luna AI. We take the time to listen and understand your unique needs, challenges, and goals.",
    position: "left"
  },
  {
    id: 2,
    title: "Get Matched with the Right Practitioner",
    description: "Based on your story, we connect you with the holistic wellness practitioner best suited to guide your journey. Each match ensures personalised, integrative support.",
    position: "right"
  },
  {
    id: 3,
    title: "Experience Coordinated Care",
    description: "Your team of practitioners communicates behind the scenes, sharing insights to keep your care connected, consistent, and fully aligned with your goals.",
    position: "left"
  },
  {
    id: 4,
    title: "Evolve and Grow",
    description: "As you progress, your support evolves with you. Whether you need coaching, nutritional guidance, or therapeutic sessions, your programme adapts seamlessly to your journey.",
    position: "right"
  },
  {
    id: 5,
    title: "Celebrate Transformation",
    description: "Witness tangible changes in your mind, body, and spirit. Our integrative approach ensures lasting wellbeing, clarity, and personal growth.",
    position: "left"
  }
];

const foundersData: Founder[] = [
  {
    name: "Samina Khan",
    role: "Holistic Life Coach | Reiki Healer | Emotional Wellness Mentor",
    description: " With over 12 years supporting mental health initiatives and 20 years in business, Samina helps individuals navigate life’s challenges with clarity, balance, and practical guidance.",
    image: "about/person1/samina-pic.png",
    link: "/samina-khan-holistic-life-coach",
    firstName: "Samina",
    secondaryColor: "text-[#4E351A]!"
  },
  {
    name: "Monira Ahmed",
    role: "Co-Founder & Leadership Life Coach",
    description: "Monira brings a unique blend of global strategy, human behaviour insight, and coaching expertise. She combines NLP, mindset training, and wellbeing practices to support clients in aligning their personal and professional lives. In the FlowerGrid programmes, Monira focuses on conscious living, habit transformation, and mind-body-soul integration. She empowers members to gain confidence, make lasting changes, and step fully into their potential.",
    image: "about/person2/monira.png",
    link: "/monira-ahmed-hypnotherapist",
    firstName: "Monira",
    secondaryColor: "text-[#4E351A]!"
  }
];

const page = () => {
  return (
    <>
      <TeamHero />
      <Teamconn />
      <div className="pt-20 pb-10 text-center top-0 z-10 backdrop-blur-sm">
          <h2 className="text-4xl md:text-5xl font-heading text-[#3a3a3a] mb-4">
              Meet the Founders
          </h2>
          <p className="text-[#5a5a5a] text-sm md:text-base max-w-2xl mx-auto px-6">
            Guiding Flowergrid with vision, expertise, and heart, Samina Khan and Munira Ahmed bring decades of experience in holistic wellbeing, coaching, and personal transformation.          </p>
          <Founders founders={foundersData}/>
      </div>
      <Team />
      <div className='w-full mt-16'>
        <CurvedPathAnimation steps={steps} />
        <LunaTeamSection />
      </div>
      <LeafScrollText lines={lines} />
      <Connect image={getImageUrl("about/team/team-conn.png")} title='Find Your Supportive Practitioner and Begin Your Journey' description='Book Your Discovery Session' btnText='Book Your Discovery Session'  />

    </>
  )
}

export default page

