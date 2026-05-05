"use client";

import React, { useRef } from 'react'
import { getImageUrl } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const TeamConnections = () => {
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
        <section ref={container} className="w-full bg-background pt-20 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">

                <div className="connection-header flex items-center gap-4 mb-12">
                    <div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-text-heading">
                            Our Philosophy & Approach
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

                <div className="connection-text flex flex-row max-w-6xl gap-6 mb-12">
                    <p className="text-text-body text-base md:text-lg leading-relaxed mb-6">
                        True wellness comes from nurturing mind, body, and spirit together. Our team of holistic wellness practitioners, coaches, and therapists create personalised programmes that guide you towards clarity, balance, and conscious living. By blending evidence-based medical insight with holistic practices such as mindfulness, energy healing and life coaching, you can experience emotional resilience, physical vitality and spiritual alignment.
                    </p>
                    <p className="text-text-body text-base md:text-lg leading-relaxed">
                        Every programme connects to the Flower of Life philosophy, a symbol of interconnectedness and transformation, to support lasting change.
                        Each approach is tailored to your unique journey, helping you achieve holistic wellbeing that is practical, sustainable and deeply transformative                    
                    </p>
                </div>
            </div>
        </section>
    )
}

export default TeamConnections