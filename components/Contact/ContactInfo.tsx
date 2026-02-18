"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TikTokIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={className}
        fill="currentColor"
    >
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.33-.85.51-1.44 1.43-1.58 2.41-.14 1.01.23 2.08.94 2.79.76.69 1.83.88 2.8.52.92-.34 1.61-1.1 1.92-1.95.22-.55.3-1.15.3-1.74-.01-4.88-.04-9.76-.04-14.64z" />
    </svg>
);

export default function ContactInfoSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {    
                trigger: sectionRef.current,
                start: "top center",
                toggleActions: "play none none reverse",
            },
        });

        tl.from(headerRef.current, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
        });

        if (cardsRef.current) {
            tl.from(cardsRef.current.children, {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
            }, "-=0.4");
        }

        tl.from(mapRef.current, {
            scale: 0.95,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        }, "-=0.4");

    }, { scope: sectionRef });

    const socialLinks = [
        { Icon: Instagram, href: "https://www.instagram.com/flowergridwellness/" },
        { Icon: Facebook, href: "https://www.facebook.com/flowergriidwellness/" },
        { Icon: Linkedin, href: "https://uk.linkedin.com/company/flowergridwellness" },
        { Icon: TikTokIcon, href: "https://www.tiktok.com/@flowergrid" },
        { Icon: Youtube, href: "https://www.youtube.com/channel/UCyP_NG0t1WA_OAJZGR-qU_w" },
    ];

    return (
        <section
            ref={sectionRef}
            className="w-full h-screen bg-[#F3EAD8] flex flex-col px-6 py-6 md:px-12 md:py-12 lg:px-20 lg:py-16 overflow-hidden"
        >
            <div className="w-full h-full max-w-[1600px] mx-auto flex flex-col gap-6 md:gap-10 lg:gap-12">


                <div ref={headerRef} className="flex flex-col gap-1 md:gap-2 shrink-0">
                    <h2 className="text-[#1C1C1C] text-3xl md:text-5xl lg:text-6xl font-heading font-normal leading-tight">
                        Create a Healthier, Happier You
                    </h2>
                    <p className="text-primary! text-xl md:text-4xl lg:text-5xl font-heading font-light">
                        – Speak to Us Today
                    </p>
                </div>


                <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 shrink-0">


                    <div className="bg-[#E6D7C3] rounded-2xl p-4 md:p-8 flex items-center justify-center md:justify-start min-h-[80px] md:min-h-[140px]">
                        <div className="flex gap-4 md:gap-6 text-[#1C1C1C]">
                            {socialLinks.map(({ Icon, href }, i) => (
                                <Link
                                    key={i}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:opacity-60 transition-opacity p-1.5 md:p-2 border border-[#1C1C1C] rounded-full"
                                >
                                    <Icon size={16} className="w-4 h-4 md:w-5 md:h-5" strokeWidth={1.5} />
                                </Link>
                            ))}
                        </div>
                    </div>


                    <div className="bg-[#E6D7C3] rounded-2xl p-4 md:p-8 flex flex-col justify-center min-h-[80px] md:min-h-[140px]">
                        <span className="text-[#1C1C1C] text-xs md:text-sm font-sans mb-0.5 md:mb-1 tracking-wide opacity-80">
                            Email:
                        </span>
                        <a href="mailto:sk@flowergrid.co.uk" className="text-[#1C1C1C] text-base md:text-xl font-sans hover:text-[#C19A6B] transition-colors truncate">
                            sk@flowergrid.co.uk
                        </a>
                    </div>


                    <div className="bg-[#E6D7C3] rounded-2xl p-4 md:p-8 flex flex-col justify-center min-h-[80px] md:min-h-[140px]">
                        <span className="text-[#1C1C1C] text-xs md:text-sm font-sans mb-0.5 md:mb-1 tracking-wide opacity-80">
                            Phone:
                        </span>
                        <a href="tel:+447432211096" className="text-[#1C1C1C] text-base md:text-xl font-sans hover:text-[#C19A6B] transition-colors">
                            +44 7432 211096
                        </a>
                    </div>

                </div>



                <div ref={mapRef} className="flex-1 w-full relative rounded-2xl md:rounded-2xl overflow-hidden shadow-lg bg-gray-200 min-h-full">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2494.4474816737425!2d-0.12098422364579864!3d51.30289112562308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875fd3dd7637719%3A0xf4c019e289f1be75!2sFlowergriid%20%7C%20Holistic%20Wellness%20Centre%20Croydon!5e0!3m2!1sen!2sin!4v1768718902532!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="absolute inset-0"
                    />
                </div>

            </div>
        </section>
    );
}