import { Metadata } from 'next'
import React from 'react'
import { myPrograms } from '../data/programs'
import HeroTestimonials from '@/components/Home/HeroTestimonials'
import Connect from '@/components/About/person/Connect'
import FaqSection from '@/components/Contact/FAQSection'
import CurvedPathAnimation, { Step } from '@/components/Programme/CurvedPathAnimation'
import HeaderSecrtion from '@/components/Programme/HeaderSecrtion'
import ProgramCarousel from '@/components/Programme/ProgramCarousal'
import Achievement from '@/components/Programme/Achievement'
import ProgramCards from '@/components/Programme/ProgrammeCards'
import ProgramIntro from '@/components/Programme/ProgrammeIntro'
import { getImageUrl } from '@/lib/utils'


const faqs = [
  {
    "id": 1,
    "question": "What makes Flowergrid holistic wellness programmes different?",
    "answer": "Unlike standard courses, our Flowergrid holistic wellness programmes integrate mind, body, and spirit practices with evidence-based medical insights. You receive a personalised approach that combines coaching, hypnotherapy, and energy work with clinical understanding, ensuring transformation is both measurable and sustainable."
  },
  {
    "id": 2,
    "question": "How do I know which holistic wellness programme is right for me?",
    "answer": "Every journey begins with a detailed assessment of your goals and needs. Our expert team will guide you to the most suitable path, whether it’s a focused Power Hour, an immersive 1-Day Workshop, or an extended 6- or 12-week holistic wellness programme."
  },
  {
    "id": 3,
    "question": "Can I attend sessions online, onsite, or both?",
    "answer": "We offer fully flexible delivery. You can join our holistic wellness programmes online via secure video call from anywhere in the world, or attend onsite sessions at our Croydon centre for a more immersive experience. Many clients choose a hybrid model for maximum convenience."
  },
  {
    "id": 4,
    "question": "How long does each programme take, and what is included?",
    "answer": "Our programmes range from single one-hour sessions to comprehensive 12-week journeys. Each Flowergrid holistic wellness programme includes expert-led sessions, personalised wellness plans, digital resources, and progress tracking to support your mind, body, and spirit alignment."
  },
  {
    "id": 5,
    "question": "What support will I receive between sessions?",
    "answer": "True transformation happens daily, not just during appointments. You will have access to follow-up check-ins, messaging support, and ongoing resources to reinforce your learning. This ensures your holistic wellness programme continues to support your growth well beyond the live sessions."
  },
  {
    "id": 6,
    "question": "Are the programmes suitable for beginners with no experience?",
    "answer": "Absolutely. Our holistic wellness programmes are designed for all levels of experience. Whether you are new to wellness or looking to deepen your practice, our experts guide you step-by-step, adapting techniques to your comfort level and personal goals."
  },
  {
    "id": 7,
    "question": "How do I track my progress and measure results?",
    "answer": "We use a robust combination of health assessments, biomarker tracking, and reflective exercises. This data-driven approach allows you to see tangible improvements in both mental clarity and physical health throughout your Flowergrid holistic wellness programme."
  }
]

const ProgramTestimonials = [
  {
    id: 1,
    quote: "I arrived at the 5 Day Inner Transform overwhelmed and scattered. The structure, assessments and calm guidance helped me slow down, notice my patterns and reset my routines. I left with a clearer head, better sleep and a plan that actually feels doable.",
    author: "Emma, Operations Manager, London",
    image: "https://images.unsplash.com/photo-1651792441498-3978c293434e?q=80&w=200&h=200&auto=format&fit=crop",
    rating: 5

  },
  {
    id: 2,
    quote: "I joined a six week Flowergrid holistic wellness programme after years of starting and abandoning self help plans. The mix of coaching, reflection and practical tools helped me build simple habits and keep them. I feel steadier, more organised and less at war with myself.",
    author: "Tom, Financial Analyst, Manchester",
    image: "https://images.unsplash.com/photo-1627753779220-387ca0a1d952?q=80&w=200&h=200&auto=format&fit=crop",
    rating: 5

  },
  {
    id: 3,
    quote: "“I booked a Power Hour because I was stuck on one decision that was eating up all my energy. In that one session I felt properly listened to, and left with clear options, next steps and a lot less noise in my head.",
    author: "Rina, Freelance Designer, Birmingham",
    image: "https://images.unsplash.com/photo-1629224181689-3fa4e728d5ef?q=80&w=200&h=200&auto=format&fit=crop",
    rating: 5

  },
  {
    id: 4,
    quote: "“I went to a one day workshop expecting theory. Instead I left with three or four specific practices I now use when stress spikes at work and at home. The day was honest, grounded and surprisingly practical, not just talk about wellbeing.”",
    author: "Hassan, Team Leader, Croydon",
    image: "https://images.unsplash.com/photo-1593614202631-c29a06abba1d?q=80&w=200&h=200&auto=format&fit=crop",
    rating: 4

  },
  {
    id: 5,
    quote: "“Our team was burnt out and communication had become tense. The Flowergrid holistic wellness programmes for our organisation gave us a shared language for stress, simple regulation tools and space to speak honestly. Meetings feel calmer and people seem more human with each other again.”",
    author: "Laura, Head of People, Surrey",
    image: "https://images.unsplash.com/photo-1661851896711-a0f5460f413f?q=80&w=200&h=200&auto=format&fit=crop",
    rating: 5

  },
]
export const metadata: Metadata = {
  title: {
    default: "Flowergrid Holistic Wellness Programmes | Transform Mind, Body & Spirit",
    template: "%s | Flowergrid Holistic Wellness",
  },
  description: "Explore Flowergrid holistic wellness programmes. From 5-day intensives to 12-week coaching, our holistic wellness programmes support mind, body, and spirit transformation.",
  keywords: [
    "Holistic Wellness",
    "Holistic wellbeing",
    "Mind Body Spirit Wellness",
    "Life and Transformation Coaching",
    "Integrative wellness",
    "Holistic Programmes",
    "Mind-body-soul transformation",
    "Wellness Coaching",
    "Flowergrid Programmes"
  ],
  authors: [{ name: "Samina Khan" }],
  openGraph: {
    title: "Flowergrid Holistic Wellness Programmes | Transform Mind, Body & Spirit",
    description: "Explore Flowergrid holistic wellness programmes. From 5-day intensives to 12-week coaching, our holistic wellness programmes support mind, body, and spirit transformation.",
    url: "https://flowergrid.co.uk/holistic-wellness-programmes",
    siteName: "Flowergrid",
    type: "website",
    images: [
      {
        url: "https://flowergrid.co.uk/programmes-og.jpg", // replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "Flowergrid Holistic Wellness Programmes",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Flowergrid Holistic Wellness Programmes | Transform Mind, Body & Spirit",
    description: "Explore Flowergrid holistic wellness programmes. From 5-day intensives to 12-week coaching, our holistic wellness programmes support mind, body, and spirit transformation.",
    images: ["https://flowergrid.co.uk/programmes-og.jpg"],
    site: "@flowergrid", // optional
    creator: "@saminaKhan", // optional
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Flowergrid Holistic Wellness Programmes",
  "url": "https://flowergrid.co.uk/holistic-wellness-programmes",
  "description": "Explore Flowergrid holistic wellness programmes. From 5-day intensives to 12-week coaching, our holistic wellness programmes support mind, body, and spirit transformation.",
  "provider": {
    "@type": "Organization",
    "name": "Flowergrid",
    "url": "https://flowergrid.co.uk/",
    "logo": "https://flowergrid.co.uk/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fz6xh4w9tp%2Flogo%2FFlowergrid-logo.png&w=1920&q=75",
    "sameAs": [
      "https://www.instagram.com/flowergrid",
      "https://www.facebook.com/flowergrid",
      "https://www.linkedin.com/company/flowergrid"
    ]
  },
  "areaServed": {
    "@type": "Country",
    "name": "United Kingdom"
  },
  "serviceType": "Holistic Wellness Programmes",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Flowergrid Programmes",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "5-Day Inner Transform Programme",
          "description": "Dive deep into a complete mind-body-spirit transformation.",
          "url": "https://flowergrid.co.uk/holistic-wellness-programmes#5-day-inner-transform"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Power Hour Sessions",
          "description": "Supercharge your journey with a dedicated one-on-one session.",
          "url": "https://flowergrid.co.uk/holistic-wellness-programmes#power-hour"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "1-Day Workshops",
          "description": "Immerse yourself in a full-day workshop designed to restore balance.",
          "url": "https://flowergrid.co.uk/holistic-wellness-programmes#workshops"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Tailored Coaching Programmes",
          "description": "Experience deep, lasting transformation with personalised coaching.",
          "url": "https://flowergrid.co.uk/holistic-wellness-programmes#coaching"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Corporate & Community programmes",
          "description": "Empower your teams and communities with workshops designed to enhance leadership.",
          "url": "https://flowergrid.co.uk/corporate-wellbeing-programmes"
        }
      }
    ]
  }
};

const steps: Step[] = [
  {
    id: 1,
    title: "Initial Assessment & Consultation",
    description: "Explore your goals, challenges, and personal needs with our experts. Your programme is designed specifically around you.",
    position: "left"
  },
  {
    id: 2,
    title: "Expert-Led Personalised Sessions",
    description: "One-on-one or group sessions with our panel deliver practical strategies and deep guidance for real transformation.",
    position: "right"
  },
  {
    id: 3,
    title: "Access to Resources & Tools",
    description: "Exercises, guides, and digital tools reinforce learning and keep your progress on track between sessions.",
    position: "left"
  },
  {
    id: 4,
    title: "Regular Check-Ins & Progress Tracking",
    description: "Monitor improvements through assessments and biomarkers, with adjustments made to keep your journey moving forward.",
    position: "right"
  },
  {
    id: 5,
    title: "Ongoing Support for Sustainable Transformation",
    description: "Continued guidance ensures new habits, skills, and energy alignment last well beyond the programme.",
    position: "left"
  }
];

const page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ProgramIntro />
      <ProgramCards />
      <HeroTestimonials title='Client Experiences with Flowergrid Holistic Wellness Programmes' testimonials={ProgramTestimonials} />
      <ProgramCarousel programs={myPrograms} />
      <HeaderSecrtion />
      <CurvedPathAnimation steps={steps} />
      <Achievement />
      <FaqSection title='Your Questions About Flowergrid Programmes Answered' faqs={faqs} />
      <Connect image={getImageUrl("about/person2/5.png")} title="Unlock your transformation. Start your new life today" btnText='Join The Membership' description='' />
    </>
  )
}

export default page