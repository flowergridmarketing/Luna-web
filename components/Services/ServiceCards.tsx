'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getImageUrl } from '@/lib/utils';
import services from '@/app/data/individualServices/individualServices';

const serviceCardData = [
    {
        title: "Personal Development Coaching",
        image: getImageUrl("about/person1/s5.jpg"),
        desc: "Build confidence, clarity, and purpose in every aspect of life.",
        slug: "personal-development-coaching"
    },
    {
        title: "Professional Development Coaching",
        image: getImageUrl("about/person1/s4.jpg"),
        desc: "Enhance leadership, influence, and sustainable performance for success.",
        slug: "professional-development-coaching"
    },
    {
        title: "Neuro-Linguistic Programming (NLP)",
        image: getImageUrl("about/person1/s3.jpg"),
        desc: "Rewire patterns of thought and behaviour to achieve positive change.",
        slug: "neuro-linguistic-programming-nlp"
    },
    {
        title: "Reiki Healing",
        image: getImageUrl("about/person1/s1.jpg"),
        desc: "Channel universal energy to clear blockages and renew your emotional state.",
        slug: "reiki-healing"
    },
    {
        title: "Hypnotherapy",
        image: getImageUrl("about/person2/ps3.jpg"),
        desc: "Access your subconscious to overcome blocks and instill confidence.",
        slug: "hypnotherapy"
    },
    {
        title: "Stress and Anxiety Support",
        image: getImageUrl("about/person2/ps1.jpg"),
        desc: "Learn evidence-based tools to calm the mind and regulate emotions.",
        slug: "stress-and-anxiety-support"
    },
    {
        title: "Relationship Coaching",
        image: getImageUrl("services/sc1.jpg"),
        desc: "Strengthen communication, compassion, and connection in your relationships.",
        slug: "relationship-coaching"
    },
    {
        title: "Conscious Living Coaching",
        image: getImageUrl("services/sc2.jpg"),
        desc: "Align your thoughts and habits with your soul’s purpose.",
        slug: "conscious-living-coaching"
    },
    {
        title: "Psychological Therapy",
        image: getImageUrl("services/sc3.jpg"),
        desc: "Receive compassionate support to process emotions and heal from within.",
        slug: "psychological-therapy"
    },
    {
        title: "Aesthetic and Plastic Surgery",
        image: getImageUrl("services/sc5.jpg"),
        desc: "Comprehensive assessments and aesthetic services guided by healthcare professionals.",
        slug: "aesthetic-and-plastic-surgery"
    },
    {
        title: "Nutritional Consulting",
        image: getImageUrl("services/sc6.jpg"),
        desc: "Tailored plans to optimise nutrition, metabolism, and energy.",
        slug: "nutritional-consulting"
    },
    {
        title: "Auricular Acupuncture",
        image: getImageUrl("services/sc9.jpg"),
        desc: "Experience subtle energy realignment for mind–body rejuvenation.",
        slug: "auricular-acupuncture-croydon"
    },
    {
        title: "Craniosacral Therapy",
        image: getImageUrl("services/sc4.jpg"),
        desc: "Gentle, non-invasive support to help your body settle stress and restore energy.",
        slug: "craniosacral-therapy-croydon"
    },
    {
        title: "Sound Therapy",
        image: getImageUrl("services/sc8.jpg"),
        desc: "A gentle reset for stress and emotional overload through guided sound and relaxation.",
        slug: "sound-therapy-croydon"
    },
    {
        title: "Aromatherapy",
        image: getImageUrl("services/sc5.jpg"),
        desc: "Custom essential oil blends to support calm, sleep, and emotional balance.",
        slug: "aromatherapy-croydon"
    },
    {
        title: "Integrative Health & Fitness Plans",
        image: getImageUrl("services/sc7.jpg"),
        desc: "A joined-up roadmap combining movement, nutrition, and recovery for sustainable vitality.",
        slug: "integrative-health-and-fitness-plans-croydon"
    }
]

const ServiceCards: React.FC = () => {
    // Track which specific card is open (null means all closed)
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleTouch = (index: number) => {
        console.log(activeIndex)
        // Toggle: if same index is clicked, close it. Otherwise, open new one.
        setActiveIndex(activeIndex === index ? null : index);
    };

    const handlePointerEnter = (index: number, e: React.PointerEvent) => {
        // Only trigger hover on non-touch devices (mouse/trackpad)
        if (e.pointerType !== 'touch') {
            setActiveIndex(index);
        }
    };

    const handlePointerLeave = (e: React.PointerEvent) => {
        // Only trigger hover on non-touch devices (mouse/trackpad)
        if (e.pointerType !== 'touch') {
            setActiveIndex(null);
        }
    };

    return (
        <section className="bg-background py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1440px] mx-auto">

                <h2 className="text-5xl md:text-5xl lg:text-[76px] text-text-heading font-heading mb-12 md:mb-16 tracking-wide font-normal uppercase">
                    Our Services
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {serviceCardData.map((item, index) => {
                        const isThisOpen = activeIndex === index;

                        return (
                            <Link
                                key={index}
                                href={`/services/${item.slug}`}
                                onPointerEnter={(e) => handlePointerEnter(index, e)}
                                onPointerLeave={handlePointerLeave}
                                className="group relative h-[420px] md:h-[550px] lg:h-[500px] w-full overflow-hidden rounded-4xl cursor-pointer touch-manipulation block"
                            >
                                <div className="absolute inset-0 w-full h-full">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className={`object-cover transition-transform duration-700 ease-out 
                                            ${isThisOpen ? 'scale-105' : 'scale-100'}`}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                                        priority={index < 3}
                                    />
                                </div>

                                <div className={`absolute inset-0 transition-all duration-300 bg-linear-to-t 
                                    ${isThisOpen
                                        ? 'from-black/95 via-black/40 to-transparent'
                                        : 'from-black/90 via-black/30 to-transparent'}`}
                                />

                                <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col items-start justify-end h-full z-10">
                                    <h3 className="text-2xl md:text-3xl lg:text-[32px] text-white! font-heading font-normal leading-[1.2] mb-3 w-[90%] transition-all duration-300">
                                        {item.title}
                                    </h3>

                                    <div className="
                                        flex items-center justify-center
                                        whitespace-nowrap overflow-hidden
                                        w-full max-w-[150px] py-3 px-8
                                        border border-white/60 rounded-full 
                                        text-white text-sm uppercase tracking-widest 
                                        backdrop-blur-[2px] 
                                        transition-all duration-500 ease-in-out
                                        group-hover:max-w-full 
                                        group-hover:bg-[#A68653] 
                                        group-hover:text-black 
                                        group-hover:border-black! 
                                        group-hover:py-4 
                                        group-hover:scale-105
                                    ">
                                        View more
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ServiceCards;