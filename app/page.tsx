import type { Metadata } from 'next'
import Hero from "@/components/Home/Hero";
import { getImageUrl } from "@/lib/utils";
import MaskScroll from "@/components/Home/MaskScroll";
import Connections from "@/components/Home/Connections";
import CoreValues from "@/components/Home/CoreValues";

import TransformationServices from "@/components/Home/TransformationServices";
import LeafScrollText from "@/components/Home/LeafScrollText";
import BodyMindSpirit from "@/components/Home/BodyMindSpirit";
import FadeInText from "@/components/Home/FadeInText";
import CorporateProgram from "@/components/Home/CorporateProgram";
import HeroTestimonials from "@/components/Home/HeroTestimonials";
import Vision from "@/components/Home/Vision";
import Connect from "@/components/About/person/Connect";
import DesktopOnlyFadeInText from "@/components/ui/DesktopOnlyFadeInText";
import BlogSection from '@/components/Home/BlogSection';

const lines = [
  "YOU ARE NOT JUST A MIND TO BE UNDERSTOOD.",
  "YOU ARE NOT JUST A SOUL TO BE HEALED.",
  "YOU ARE AN EVOLVING STORY WRITTEN IN",
  "SYMBOLS, STARS, AND PSYCHOLOGY.",
  "ONLY WHEN YOU READ ALL OF YOU, DOES TRUE",
  "TRANSFORMATION BEGIN."
];



const coreValues = [
  {
    icon: getImageUrl("home/i1.png"),
    title: "HOLISTIC & EVIDENCE-BASED CARE",
    desc: "At Flowergrid, we blend ethical, evidence-based holistic practices with modern medical insight to support genuine, lasting wellbeing."
  },
  {
    icon: getImageUrl("home/i2.png"),
    title: "WELLNESS YOUR WAY",
    desc: "Whether you're seeking in-person support or prefer online guidance, our global network ensures conscious living is accessible - anytime, anywhere."
  },
  {
    icon: getImageUrl("home/i3.png"),
    title: "PERSONALISED TRANSFORMATION",
    desc: "Our dedicated team of doctors, coaches, and therapists collaborate to build tailored journeys that respect your personal pace, needs, and goals."
  }
];


export const metadata: Metadata = {
  metadataBase: new URL("https://flowergrid.co.uk"),

  title: "Flowergrid Holistic Wellness | Mind Body Spirit Transformation",

  description:
    "Flowergrid offers holistic wellness, life and transformation coaching, emotional wellbeing support and mind body spirit healing for lasting balance and clarity in Croydon, UK.",

  keywords: [
    "Holistic Wellness",
    "Holistic Wellbeing",
    "Mind Body Spirit Wellness",
    "Life and Transformation Coaching",
    "Integrative Wellness",
    "Holistic Wellness Croydon",
    "Emotional Wellbeing Support UK"
  ],

  authors: [{ name: "Samina Khan" }],

  alternates: {
    canonical: "https://flowergrid.co.uk/",
  },

  openGraph: {
    title:
      "Flowergrid Holistic Wellness | Mind Body Spirit Transformation",
    description:
      "Flowergrid offers holistic wellness, life and transformation coaching, emotional wellbeing support and mind body spirit healing for lasting balance and clarity.",
    url: "https://flowergrid.co.uk/",
    siteName: "Flowergrid",
    locale: "en_GB",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "Holistic Wellness",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Flowergrid",
  image: "https://flowergrid.co.uk/og-image.jpg",
  url: "https://flowergrid.co.uk",
  telephone: "+44 7432 211096",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Coulsdon",
    addressLocality: "Croydon",
    postalCode: "CR5 2JA",
    addressCountry: "GB"
  },
  founder: "Samina Khan",
  areaServed: "United Kingdom"
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd)
        }}
      />
      <Hero />
      <MaskScroll />
      <Connections />
      <CoreValues values={coreValues} />
      <TransformationServices />
      <LeafScrollText lines={lines} />
      <DesktopOnlyFadeInText />
      <CorporateProgram />
      <HeroTestimonials />
      <Vision />
      <BlogSection headerTitle='Blog Articles'/>
      <Connect
        image={getImageUrl("membership/connection.jpg")}
        title="Your Journey Begins"
        description="Connect with our team to design a personalised wellness pathway that fits your unique needs."
        btnText="Request a Consultation"
      />
    </>
  );
}

