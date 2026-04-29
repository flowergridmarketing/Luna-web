"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { getImageUrl } from "@/lib/utils";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function LocationFounders() {
    const sectionRef = useRef<HTMLElement>(null);
    const block1Ref = useRef<HTMLDivElement>(null);
    const block2Ref = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
                toggleActions: "play none none reverse",
            },
        });

        // Block 1: Image Left, Content Right
        tl.from(block1Ref.current?.querySelector(".image-block")!, {
            x: -50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        }, 0)
        .from(block1Ref.current?.querySelector(".content-block")!, {
            x: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        }, 0);

        // Block 2: Content Left, Image Right
        tl.from(block2Ref.current?.querySelector(".content-block")!, {
            x: -50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        }, "-=0.5")
        .from(block2Ref.current?.querySelector(".image-block")!, {
            x: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        }, "<");

    }, { scope: sectionRef });

    return (
        <section
            ref={sectionRef}
            className="w-full bg-[#F3EAD8] py-20 px-6 md:px-12 lg:px-20 overflow-hidden"
        >
            <div className="max-w-[1400px] mx-auto flex flex-col gap-20 lg:gap-32">

                {/* Block 1: Image Left, Content Right */}
                <div ref={block1Ref} className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">

                    <div className="image-block w-full lg:flex-1 order-1 flex justify-center lg:justify-start">
                        <div className="relative w-full max-w-[450px] aspect-3/5 md:aspect-3/4 lg:aspect-6/8 md:max-h-[600px] lg:mb-0">
                            <Image
                                src={getImageUrl("/location/samina-khan.png")}
                                alt="Samina Khan"
                                fill
                                className="object-cover rounded-2xl mix-blend-color-burn"
                            />
                        </div>
                    </div>

                    <div className="content-block flex-1 order-2 text-center lg:text-left">
                        <h2 className="text-[#1C1C1C] text-4xl md:text-5xl lg:text-6xl font-heading font-normal mb-2">
                            Meet <span className="font-medium">Samina Khan</span>
                        </h2>
                        <h3 className="text-[#C19A6B] text-xl md:text-2xl font-sans font-light mb-6">
                            Your Holistic Life Coach in Croydon
                        </h3>
                        <p className="text-[#4A4A4A] text-base md:text-lg font-sans leading-relaxed mb-8">
                            Meet Samina Khan, our founder and holistic life coach in Croydon. Bringing over twenty years of experience, she provides personalised guidance to help you find clarity and achieve genuine mind, body spirit wellness.
                        </p>
                        <Link href="/samina-khan-holistic-life-coach" className="bg-[#A68653] hover:bg-[#8F7A52] text-white font-medium text-sm md:text-base px-8 py-4 rounded-full transition-colors duration-300 shadow-md inline-block">
                            Book Your Discovery Session
                        </Link>
                    </div>
                </div>

                {/* Block 2: Content Left, Image Right */}
                <div ref={block2Ref} className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">

                    <div className="content-block flex-1 order-2 lg:order-1 text-center lg:text-left">
                        <h2 className="text-[#2D3F28] text-3xl md:text-4xl lg:text-5xl font-heading font-normal mb-6">
                            Take Your Transformation Further With Flowergrid Membership
                        </h2>
                        <p className="text-[#4A4A4A] text-base md:text-lg font-sans leading-relaxed mb-8">
                            Continue your journey beyond the Longevity Programmes with FlowerGrid Membership. Receive ongoing guidance, personalised coaching, and access to holistic wellbeing practices that integrate mind, body, and spirit. Build resilience, clarity, and lasting habits while connecting with a supportive community.
                        </p>
                        <Link href="/membership" className="bg-[#A68653] hover:bg-[#8F7A52] text-white font-medium text-sm md:text-base px-8 py-4 rounded-full transition-colors duration-300 shadow-md inline-block">
                            Join the Membership
                        </Link>
                    </div>

                    <div className="image-block w-full lg:flex-1 order-1 lg:order-2 flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[450px] aspect-square md:aspect-3/4 max-h-[400px] md:max-h-[600px] mb-4 lg:mb-0">
                            <Image
                                src={getImageUrl("location/holding-hands.jpeg")}
                                alt="Flowergrid Membership"
                                fill
                                className="object-cover rounded-2xl"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
