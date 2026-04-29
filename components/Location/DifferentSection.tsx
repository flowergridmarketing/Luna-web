"use client";
import React, { useRef } from 'react'
import { getImageUrl } from '@/lib/utils'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const DifferentSection = () => {
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

        tl.fromTo(".different-header",
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
        );

        tl.fromTo(".different-text",
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
            "-=0.4"
        );

    }, { scope: container });

    return (
        <section ref={container} className="w-full bg-background py-20 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">

                <div className="different-header flex items-center gap-4 mb-12">
                    <div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-text-heading">
                            What makes Flowergrid different
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

                <div className="different-text grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-12">
                   <div>
                     <p className="text-text-body text-base md:text-lg leading-relaxed mb-6">
                        The main thing that sets us apart is our collaborative model of care here at the Flowergrid Holistic Wellness Center in Croydon. At Flowergrid, our team of over 20 doctors, coaches, and therapists work together around the same goal.
                    </p>
                    <p className="text-text-body text-base md:text-lg leading-relaxed">
                        This means your nutrition guidance can sit alongside your psychological therapy, and your coaching goals can be supported by holistic practices such as energy healing. You get one coherent plan, not fragmented advice from separate places.
                    </p>
                   </div>
                   <div>
                     <p className="text-text-body text-base md:text-lg leading-relaxed mb-6">
                        We also take pride in the Intelligent Soul approach, where medical science and sacred geometry sit side by side. We use evidence based tools and clinical expertise, while staying open to the deeper, human side of healing.
                    </p>
                    <p className="text-text-body text-base md:text-lg leading-relaxed">
                       The Flower of Life guides this philosophy. It is an ancient symbol that reminds us everything is connected, your health, relationships, mindset, and even the environment you live in. By working with the whole picture, we support clarity and lasting balance, not just symptom chasing.
                    </p>
                   </div>
                </div>

            </div>
        </section>
    )
};

export default DifferentSection;
