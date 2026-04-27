import AboutUsSection from '@/components/Location/AboutUsSection'
import LocationHero from '@/components/Location/LocationHero'
import SupportSection from '@/components/Location/SupportSection'
import DifferentSection from '@/components/Location/DifferentSection'
import Support from '@/components/About/person/Support'
import HeroTestimonials, { Testimonial } from '@/components/Home/HeroTestimonials'
import FadeInText from '@/components/Home/FadeInText'
import { getPersonBySlug, locationData } from '@/app/data/about'
import React from 'react'
import CorporateProgram from '@/components/Home/CorporateProgram'
import JourneySection from '@/components/About/person/JourneySection'
import Vision from '@/components/Home/Vision'
import LocationFounders from '@/components/Location/LocationFounders'
import FaqSection from '@/components/Contact/FAQSection'
import Connect from '@/components/About/person/Connect'

const locationTestimonials: Testimonial[] = [
  {
    id: 1,
    quote: "FlowerGrid helped me find balance when I didn't even realize how much I needed it. The care I received was more than service. It was healing. I've tried so many wellness programs before, but nothing felt as personal and transforming as this. It's like they see the real you. Thank you so much!!!",
    author: "Aisha M.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&auto=format&fit=crop",
    rating: 5,
  },
  {
    id: 2,
    quote: "FlowerGrid helped me find balance when I didn't even realize how much I needed it. The care I received was more than service. It was healing. I've tried so many wellness programs before, but nothing felt as personal and transforming as this. It's like they see the real you. Thank you so much!!!",
    author: "Jonathan L.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&h=200&auto=format&fit=crop",
    rating: 5,
  },
  {
    id: 3,
    quote: "FlowerGrid helped me find balance when I didn't even realize how much I needed it. The care I received was more than service. It was healing. I've tried so many wellness programs before, but nothing felt as personal and transforming as this. It's like they see the real you. Thank you so much!!!",
    author: "Winona.",
    image: "https://images.unsplash.com/photo-1521146764736-56c929d59c83?q=80&w=200&h=200&auto=format&fit=crop",
    rating: 5,
  }
];

const locationFadeLines1 = [
    "Corporate Wellbeing Programmes",
    "in Croydon for leadership,",
    "communication and resilience,"
];

const locationFadeLines2 = [
    "tailored workshops that strengthen holistic",
    "wellbeing in organisations and education",
    "settings"
];

const locationFaqs = [
    {
        id: 1,
        question: "I am new to holistic wellness. Where is the best place to start?",
        answer: "The best starting point is our complimentary discovery call. This is a relaxed, confidential conversation where we can understand your personal goals and challenges. We can then recommend the most suitable path for you, whether that is one-to-one coaching, a specific wellness programme, or joining a workshop."
    },
    {
        id: 2,
        question: "How do I book a holistic wellness consultation at Flowergrid?",
        answer: "Booking is simple. You can schedule online, ring us on +44 7432 211096, or drop us an email at sk@flowergrid.co.uk. We offer a free 30-minute discovery session where we'll chat about what you're looking for and suggest the right holistic wellbeing programme to help you get there."
    },
    {
        id: 3,
        question: "What qualifications do your holistic wellness practitioners have?",
        answer: "Our team includes qualified doctors, certified life coaches, licensed therapists and accredited holistic practitioners. Each professional holds proper certifications in their speciality, whether that's NLP, hypnotherapy, Reiki or clinical qualifications. We take professional standards seriously to ensure you receive safe, effective integrative wellness support."
    },
    {
        id: 4,
        question: "Can I combine different holistic wellbeing services in my programme?",
        answer: "Absolutely. Our holistic wellness approach works best when combining complementary services. Many clients benefit from pairing life and transformation coaching with stress management, or medical consultations with energy healing for complete mind body spirit wellness."
    },
    {
        id: 5,
        question: "Do you offer holistic wellness services in Croydon and South London?",
        answer: "Yes, our holistic wellness centre in Coulsdon, CR5 2JA, serves Croydon, Surrey and South London. We also provide online integrative wellness consultations across the UK and internationally, making mind body spirit wellness accessible wherever you are."
    },
    {
        id: 6,
        question: "What are your fees for a discovery call or initial session?",
        answer: "Our initial discovery call is offered free of charge, with no obligation. This ensures you can explore how Flowergrid can help you before making a commitment. Fees for subsequent coaching or therapy sessions vary depending on the practitioner and programme length. Please contact us for our current rate card."
    },
    {
        id: 7,
        question: "What happens during a corporate wellness workshop?",
        answer: "Our corporate workshops are interactive and practical. We focus on key areas such as resilience, leadership, communication, and stress management. The aim is to provide your team with tangible tools and strategies they can apply immediately to improve their performance, wellbeing, and workplace environment."
    },
    {
        id: 8,
        question: "What is your policy for cancelling or rescheduling an appointment?",
        answer: "We operate a 48-hour cancellation policy. If you need to reschedule or cancel an appointment, please let us know at least 48 hours in advance to avoid a cancellation fee. This policy helps us manage our practitioners' schedules and offer appointments to clients on our waiting list."
    }
];

const LocationPage = () => {
  const personData = getPersonBySlug('person1');
  const supportData = personData?.support || [];

  return (
    <div>
      <LocationHero />
      <AboutUsSection />
      <SupportSection />
      <DifferentSection />
      <Support data={supportData} title="Our Services" />
      <HeroTestimonials
        testimonials={locationTestimonials}
        title="What clients say about Flowergrid in Croydon" 
        subtitle="" 
      />
      <FadeInText lines1={locationFadeLines1} lines2={locationFadeLines2} />
      <CorporateProgram />
      <JourneySection 
        title={locationData.journeySection.title}
        description={locationData.journeySection.description}
        items={locationData.journeySection.flowerWithCard as any}
      />
      <Vision 
        text="Flowergrid in Croydon exists to guide individuals and organisations towards holistic wellness through mind, body, and spirit integration. We offer personalised, evidence-based programmes, including life and transformation coaching in Croydon, holistic wellbeing support for stress and anxiety, and guided mind body soul transformation programmes, helping clients build resilience, clarity, and lasting personal growth."
        buttonText="Discover Our Vision"
        buttonLink="/vision"
      />
      <LocationFounders />
      <FaqSection faqs={locationFaqs} />
      <Connect
        image={"/location/location-connect.jpg"}
        title="Transform your mind, body, and spirit today"
        description="If you're ready to find balance, clarity, and personal growth through life and transformation coaching, I'd love to work with you."
      />
    </div>
  )
}

export default LocationPage