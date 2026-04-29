"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { getImageUrl } from "@/lib/utils";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export interface Founder {
    name: string;
    role: string;
    description: string;
    image: string;
    link: string;
    firstName: string;
    secondaryColor: string
}

interface FoundersProps {
    bgColor?: string;
    founders?: Founder[];
}

export default function Founders({ bgColor, founders = [] }: FoundersProps) {
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const rows = sectionRef.current?.querySelectorAll(".founder-row");
        if (!rows) return;

        rows.forEach((row, index) => {
            const isEven = index % 2 === 0;
            const content = row.querySelector(".content-block");
            const image = row.querySelector(".image-block");

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: row,
                    start: "top 70%",
                    toggleActions: "play none none reverse",
                },
            });

            if (content && image) {
                tl.from(content, {
                    x: isEven ? -50 : 50,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out",
                }, 0)
                .from(image, {
                    x: isEven ? 50 : -50,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out",
                }, 0);
            }
        });
    }, { scope: sectionRef, dependencies: [founders] });

    return (
        <section
            ref={sectionRef}
            className={`w-full py-20 ${bgColor || "bg-background"} px-6 md:px-12 lg:px-20 overflow-hidden`}
        >
            <div className="max-w-[1400px] mx-auto flex flex-col gap-20 lg:gap-32">
                {founders.map((founder, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <div 
                            key={founder.name} 
                            className="founder-row flex flex-col lg:flex-row items-center gap-10 lg:gap-20"
                        >
                            <div className={`image-block w-full lg:flex-1 order-1 ${isEven ? 'lg:order-2 flex justify-center lg:justify-end' : 'flex justify-center lg:justify-start'}`}>
                                <div className={`relative w-full max-w-[450px] ${isEven ? 'aspect-3/5 md:aspect-3/4 lg:aspect-6/8' : 'aspect-square md:aspect-3/4'} md:max-h-[600px] lg:mb-0`}>
                                    <Image
                                        src={getImageUrl(founder.image)}
                                        alt={founder.name}
                                        fill
                                        className="object-cover rounded-2xl"
                                    />
                                </div>
                            </div>

                            <div className={`content-block flex-1 order-2 ${isEven ? 'lg:order-1 text-center lg:text-left' : 'text-center lg:text-right'}`}>
                                <h2 className="text-[#1C1C1C] text-4xl md:text-5xl lg:text-6xl font-heading font-normal mb-2">
                                 <span className="font-medium">{founder.name}</span>
                                </h2>
                                <h3 className={`${ founder.secondaryColor || 'text-[#C19A6B]' } text-1xl md:text-2xl lg:text-3xl font-sans font-normal mb-6`} >
                                    {founder.role}
                                </h3>
                                <p className="text-[#4A4A4A] text-base md:text-lg font-sans leading-relaxed mb-8">
                                    {founder.description}
                                </p>
                                <Link 
                                    href={founder.link} 
                                    className="bg-primary text-white font-medium text-base md:text-lg px-8 py-4 rounded-full transition-colors duration-300 shadow-md inline-block"
                                >
                                    Learn more about {founder.name}
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}