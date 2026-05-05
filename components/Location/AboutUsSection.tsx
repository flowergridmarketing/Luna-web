"use client";
import React, { useRef } from 'react'
import { getImageUrl } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const AboutUsSection = () => {
    const container = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        });

        tl.fromTo(".connection-header",
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
        );

        tl.fromTo(".connection-text",
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
            "-=0.4"
        );

        tl.fromTo(".connection-button",
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
            "-=0.3"
        );

    }, { scope: container });

    return (
        <section ref={container} className="w-full bg-background py-20 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">

                <div className="connection-header flex items-center gap-4 mb-12">
                    <div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-text-heading">
                            About Us
                        </h2>
                    </div>
                    <div>
                        <Image
                            src={getImageUrl("home/connection-logo.png")}
                            alt="Flowergrid Logo"
                            width={100}
                            height={100}
                            className="object-contain"
                        />
                    </div>
                </div>

                <div className="connection-text grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-12">
                   <div>
                     <p className="text-text-body text-base md:text-lg leading-relaxed mb-6">
                        Flowergrid is a holistic wellness centre in Croydon, supporting holistic health and wellness through an integrative approach to mind, body and spirit. We bring together coaches, therapists, and wellbeing practitioners to help you feel calmer, clearer, and more balanced.
                    </p>
                    <p className="text-text-body text-base md:text-lg leading-relaxed">
                        Whether you are dealing with stress, low confidence, life transitions, or simply feeling stuck, we create personalised support that fits your real life. Sessions are available in person in Croydon and online across the UK.
                    </p>
                   </div>
                   <div>
                     <p className="text-text-body text-base md:text-lg leading-relaxed mb-6">
                        Founded by Samina Khan and Monira Ahmed, we created Flowergrid to bridge the gap between traditional medical care and spiritual healing. We believe people deserve support that is both grounded and compassionate, without having to choose one approach over the other.
                    </p>
                    <p className="text-text-body text-base md:text-lg leading-relaxed">
                       Our Coulsdon centre is a calm sanctuary for the South London community. We are proud to host a diverse panel of specialists, from local community projects to global online sessions, making Mind Body Spirit Wellness more accessible.
                    </p>
                   </div>
                </div>

                <div className="flex justify-start">
                    <Link href="/samina-khan-holistic-life-coach" className="connection-button px-10 py-4 bg-primary hover:opacity-90 text-white rounded-full font-medium text-sm md:text-base hover:bg-[#967B4E] transition-colors inline-block shadow-md">
                        About Us
                    </Link>
                </div>

            </div>
        </section>
    )
};

export default AboutUsSection;
