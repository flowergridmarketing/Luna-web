import { Metadata } from 'next'
import React from 'react'
import Team from '@/components/About/team/Team'
import TeamHero from '@/components/About/team/TeamHero'
import LeafScrollText from '@/components/Home/LeafScrollText'
import { lines } from '../data/about'
export const metadata: Metadata = {
  title: "Meet Our Team | Experts in Holistic Wellness - Flowergrid",
  description: "Get to know the passionate experts at Flowergrid. Our team of professionals is dedicated to guiding you on your wellness journey.",
}

const page = () => {
  return (
    <>
      <TeamHero />
      <Team />
      <LeafScrollText lines={lines} />

    </>
  )
}

export default page

