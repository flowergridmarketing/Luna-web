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
import { getImageUrl } from "@/lib/utils";

const locationTestimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Flowergrid’s integrative wellness approach reminded me that healing is a personal journey. Their support allowed me to progress at my own pace and feel fully restored",
    author: "Michael Foster, Brighton.",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5
  },
  {
    id: 2,
    quote: "I had tried several holistic wellness programmes before, but Flowergrid was different. The personalised approach helped me make real, lasting changes in my life.",
    author: "Olivia Bennett, Kent",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&h=200&auto=format&fit=crop",
    rating: 5,
  },
  {
    id: 3,
    quote: "I felt genuinely understood from day one. The guidance I received helped me reconnect with myself and achieve a deeper level of mind body spirit wellness.",
    author: "David Wilson, UK.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop",
    rating: 5,
  }
];

const locationFadeLines1 = [
    "Corporate Wellbeing",
    "Programmes in Croydon",
    "for leadership,",
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
        question: "Where is the Flowergrid holistic wellness centre located?",
        answer: "Our physical centre is located at Coulsdon Rd, Coulsdon CR5 2JA, United Kingdom. We are easily accessible for residents across Croydon, Sutton, and the wider South London area. We offer a calm, professional space designed to support your mind, body and spirit wellness journey in person."
    },
    {
        id: 2,
        question: "Do you offer a free consultation for new clients in Croydon?",
        answer: "Yes. We believe that finding the right fit is essential for genuine healing. We offer a free consultation to help you discuss your needs, ask questions, and understand how our integrated approach can help. This initial conversation ensures you are matched with the right practitioner for your specific goals."
    },
    {
        id: 3,
        question: "What services does your holistic wellness centre in Croydon provide?",
        answer: "We provide a comprehensive range of holistic health and wellness services, including life coaching, psychological therapy, NLP, hypnotherapy, nutritional guidance, and energy healing. Because we have over 20 practitioners, we can offer joined up support that addresses your mental, physical, and emotional health all in one place."
    },
    {
        id: 4,
        question: "Can I access your services if I don't live in Croydon?",
        answer: "Absolutely. While many of our clients value our in-person sessions at our Coulsdon centre, we also provide all our coaching and therapeutic services online via secure video calls. This allows you to access our expert team from anywhere in the UK or globally, while still receiving the same high standard of care."
    },
    {
        id: 5,
        question: "How is Flowergrid different from other wellness centres in Croydon?",
        answer: "Unlike many clinics that focus on just one area of health, Flowergrid is truly integrative. We bring together a multidisciplinary team of doctors, coaches, and therapists who collaborate on your care. Our approach is also uniquely guided by sacred geometry, providing an intelligent blueprint for your mind body spirit wellness."
    },
    {
        id: 6,
        question: "Do you offer corporate wellbeing programmes for Croydon businesses?",
        answer: "Yes. We design bespoke corporate wellbeing programmes in Croydon for organisations and educational settings. These workshops focus on leadership, communication training, and mental health awareness. We help teams build resilience and emotional intelligence through practical, holistic workshops tailored to your workplace needs."
    },
    {
        id: 7,
        question: "How do I book my first session at the Croydon centre?",
        answer: "Booking is simple. You can reach out directly via our website, email us at sk@flowergrid.co.uk, or call us on +44 7432 211096. We will guide you through the process, starting with your free consultation, to ensure you feel supported and clear about your path forward from the very first step."
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
        image={getImageUrl("location/location-connect.jpg.jpeg")}
        title="Find the right support with a free consultation"
        btnText='Book a Free Consultation'
        description=''
      />
    </div>
  )
}

export default LocationPage