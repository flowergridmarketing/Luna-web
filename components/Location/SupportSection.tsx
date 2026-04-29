"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getImageUrl } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const SupportSection = () => {
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

        tl.fromTo(".support-text",
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", stagger: 0.15 }
        );

        tl.fromTo(".support-image",
            { opacity: 0, scale: 0.95 },
            { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" },
            "-=0.6"
        );
    }, { scope: container });

    return (
        <section ref={container} className="w-full bg-background py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                
                {/* Text Content */}
                <div className="flex flex-col justify-center">
                    <h2 className="support-text text-4xl md:text-5xl lg:text-6xl font-heading text-text-heading mb-8 leading-tight">
                        Mind, Body and <br className="hidden lg:block" />
                        Spirit Wellness at <br className="hidden lg:block" />
                        Flowergrid
                    </h2>
                    <p className="support-text text-text-body text-base md:text-lg leading-relaxed mb-6">
                        Mind body spirit wellness is how we support holistic health and wellness at our holistic wellness centre in Croydon. Clients come for coaching, therapy, or healing, and we still look at the whole person.
                    </p>
                    <p className="support-text text-text-body text-base md:text-lg leading-relaxed">
                        That means we connect what&apos;s happening in your thoughts, emotions, body, and sense of purpose. When support is joined up, change feels steadier, clearer, and easier to maintain in everyday life.
                    </p>
                </div>

                {/* Image Content */}
                <div className="support-image relative w-full h-[500px] lg:h-[700px] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                        src={getImageUrl("/location/support.jpg.jpeg")}
                        alt="Mind, Body and Spirit Wellness consultation"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                </div>
                
            </div>
        </section>
    );
};

export default SupportSection;
