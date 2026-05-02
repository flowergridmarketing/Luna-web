import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PersonHero from '@/components/About/person/PersonHero';
import CalendlySection from '@/components/FreeConsultation/CalendlySection';
import BenefitsSection from '@/components/FreeConsultation/BenefitsSection';
import PractitionerSection from '@/components/FreeConsultation/PractitionerSection';
import JourneySection from '@/components/About/person/JourneySection';
import BrandValueSection from '@/components/FreeConsultation/BrandValueSection';
import TestimonialsSection from '@/components/FreeConsultation/TestimonialsSection';
import FaqSection from '@/components/Contact/FAQSection';
import { freeConsultationData } from '@/app/data/free-consultation';
import HeroTestimonials from '@/components/Home/HeroTestimonials';

const FreeConsultationPage = () => {
  const { hero, calendly, benefits, practitioner, howItWorks, services, brandSection, testimonials, faq } = freeConsultationData;

  // Map howItWorks steps to JourneySection items format with exact order from reference image
  const steps = howItWorks.steps;
  const journeyItems = [
    // Row 1
    { type: 'flower' as const, image: steps[2].icon || '', alt: 'Dahlia' },
    { type: 'card' as const, number: '01', title: steps[0].title, description: steps[0].description },
    { type: 'flower' as const, image: steps[3].icon || '', alt: 'Magnolia' },
    { type: 'card' as const, number: '02', title: steps[1].title, description: steps[1].description },
    // Row 2
    { type: 'card' as const, number: '03', title: steps[2].title, description: steps[2].description },
    { type: 'flower' as const, image: steps[0].icon || '', alt: 'Peony' },
    { type: 'card' as const, number: '04', title: steps[3].title, description: steps[3].description },
    { type: 'flower' as const, image: steps[1].icon || '', alt: 'Coneflower' },
  ];

  const badges = [
    "12+ years in mental health",
    "Holistic life coach, NLP trained",
    "Founder of Flowergrid"
  ];

  return (
    <main className="bg-background">
      <PersonHero
        imageSrc={hero.image}
        text={hero.headline}
        subtext={hero.subtext}
        duration={hero.duration}
        ctaText={hero.cta}
        ctaLink="#calendly"
        badges={badges}
      />

      <CalendlySection data={calendly} />

      <BenefitsSection data={benefits} />

      <PractitionerSection data={practitioner} />

      <JourneySection
        title={howItWorks.title}
        description=""
        items={journeyItems}
      />

      <section className="py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading text-[#171717] mb-16">
            {services.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {services.items.map((service, index) => (
              <div
                key={index}
                className="group relative h-[450px] md:h-[550px] lg:h-[600px] overflow-hidden rounded-[2rem] cursor-pointer shadow-lg"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    priority={index < 3}
                  />
                </div>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end items-start z-10">
                  <h3 className="text-2xl md:text-3xl font-heading text-white! mb-8 leading-tight">
                    {service.title}
                  </h3>

                  <Link
                    href="/holistic-wellness-services"
                    className="flex items-center justify-center whitespace-nowrap overflow-hidden w-full max-w-[150px] py-3 px-8 border border-white/60 rounded-full text-white text-xs uppercase tracking-widest backdrop-blur-sm transition-all duration-500 ease-in-out hover:max-w-full hover:bg-[#A68653] hover:text-black hover:border-black hover:scale-105"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <BrandValueSection />

      <HeroTestimonials title={"What people say after their free consultation with Samina"} textSize={"text-4xl md:6xl"} />
      <FaqSection
        title={faq.title}
        faqs={faq.items.map((item, index) => ({
          id: index + 1,
          question: item.question,
          answer: item.answer
        }))}
      />
    </main>
  );
};

export default FreeConsultationPage;
