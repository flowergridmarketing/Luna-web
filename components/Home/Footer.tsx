"use client";

import Image from "next/image";
import { getImageUrl } from "@/lib/utils";
import Link from "next/link";
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

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

const navLinks = [
    { title: "Home", href: "/" },
    {
        title: "About",
        href: "/our-team",
        subLinks: [
            {
                title: "Samina Khan",
                href: "/samina-khan-holistic-life-coach",
                image: getImageUrl("about/person1/saminahalf.png"),
            },
            {
                title: "Monira Ahmed",
                href: "/monira-ahmed-hypnotherapist",
                image: getImageUrl("about/person2/1.png"),
            },
            {
                title: "Team",
                href: "/our-team",
                image: getImageUrl("b2b/4.jpg"),
            },
        ],
    },
    { title: "Services", href: "/holistic-wellness-services" },
    { title: "Membership", href: "/holistic-wellness-membership" },
    {
        title: "Workshops",
        href: "/holistic-wellness-programme",
        subLinks: [
            {
                title: "Programmes",
                href: "/holistic-wellness-programme",
            },
            {
                title: "Corporate Programmes",
                href: "/corporate-wellbeing-programmes",
                image: getImageUrl("b2b/1.jpg"),
            },
        ],
    },
    { title: "Journals", href: "/blogs" },
    { title: "Contact Us", href: "/contact-us" },
];

export default function Footer() {

    return (
        <footer
            className="relative bg-[#271B0D] text-[#D6CFC2] overflow-hidden pt-16 pb-8 min-h-screen flex flex-col justify-center"
        >
            <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 lg:px-20">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 relative">

                    {/* Left Column */}
                    <div className="lg:col-span-5 flex flex-col justify-between relative h-[400px] lg:h-auto order-3 lg:order-1 mt-10 lg:mt-0">
                        <div className="absolute bottom-[-40px] z-20 left-[17px] md:left-11 w-[280px] md:w-[350px] lg:w-[450px] pointer-events-none opacity-90">
                            <Image
                                src={getImageUrl("logo/footer flower.png")}
                                alt="Magnolia"
                                width={500}
                                height={800}
                                className="object-contain w-full h-120"
                            />
                        </div>
                        <div className="absolute -bottom-11 z-20 flex items-center gap-4 md:gap-6 pl-4 md:pl-8">
                            <div className="relative w-16 h-16 md:w-20 md:h-20 shrink-0">
                                <Image
                                    src={getImageUrl("logo/Flowergrid-logo.png")}
                                    alt="Luna Logo"
                                    className="object-contain w-full h-full"
                                    fill
                                />
                            </div>

                            <div >
                                <span className="text-3xl md:text-5xl font-heading font-light tracking-wide text-[#F3EAD8] leading-none">
                                    Flowergrid
                                </span>
                                <span className="block text-sm md:text-base tracking-wide text-[#D6CFC2]/80 mt-1">
                                    Your Sanctuary of Synthesis
                                </span>
                            </div>

                        </div>
                    </div>

                    {/* Middle Column (Links) */}
                    <div
                        className="lg:col-span-3 flex flex-col justify-center sm:justify-start items-center sm:items-left lg:items-start order-1 lg:order-2 lg:border-r lg:border-[#F3EAD8]/20 lg:pl-16 py-8"
                    >
                        <ul className="flex flex-col gap-4 md:gap-6 text-left sm:text-left lg:text-left">
                            <li><Link href="/" className="text-xl md:text-2xl font-heading font-light tracking-wide hover:text-[#A58E62] transition-colors">Home</Link></li>
                            <li className="flex flex-col gap-2">
                                About
                                <ul className="flex flex-col gap-2 pl-4 lg:pl-6 border-l border-[#F3EAD8]/20">
                                    <li><Link href="/samina-khan-holistic-life-coach" className="text-base md:text-lg font-sans text-[#D6CFC2]/70 hover:text-[#A58E62] transition-colors">Samina Khan</Link></li>
                                    <li><Link href="/monira-ahmed-hypnotherapist" className="text-base md:text-lg font-sans text-[#D6CFC2]/70 hover:text-[#A58E62] transition-colors">Monira Ahmed</Link></li>
                                    <li><Link href="/our-team" className="text-base md:text-lg font-sans text-[#D6CFC2]/70 hover:text-[#A58E62] transition-colors">Team</Link></li>
                                </ul>
                            </li>
                            <li><Link href="/holistic-wellness-services" className="text-xl md:text-2xl font-heading font-light tracking-wide hover:text-[#A58E62] transition-colors">Services</Link></li>
                            <li><Link href="/holistic-wellness-membership" className="text-xl md:text-2xl font-heading font-light tracking-wide hover:text-[#A58E62] transition-colors">Membership</Link></li>
                            <li className="flex flex-col gap-2">
                                Programmes
                                <ul className="flex flex-col gap-2 pl-4 lg:pl-6 border-l border-[#F3EAD8]/20">
                                    <li><Link href="/holistic-wellness-programme" className="text-base md:text-lg font-sans text-[#D6CFC2]/70 hover:text-[#A58E62] transition-colors">Workshops</Link></li>
                                    <li><Link href="/corporate-wellbeing-programmes" className="text-base md:text-lg font-sans text-[#D6CFC2]/70 hover:text-[#A58E62] transition-colors">Corporate Programmes</Link></li>
                                </ul>

                            </li>
                            <li><Link href="/blogs" className="text-xl md:text-2xl font-heading font-light tracking-wide hover:text-[#A58E62] transition-colors">Journals</Link></li>
                            <li><Link href="/contact-us" className="text-xl md:text-2xl font-heading font-light tracking-wide hover:text-[#A58E62] transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Right Column (Contact) */}
                    <div className="lg:col-span-4 flex flex-col justify-center items-center lg:items-center order-2 lg:order-3 py-8">
                        <div className="flex flex-col gap-2 text-center font-sans text-sm md:text-base tracking-widest text-[#D6CFC2]/80 mb-10">
                            <a href="tel:+447432211096" className="hover:text-white transition-colors block">+44 7432 211096</a>
                            <a href="mailto:sk@flowergrid.co.uk" className="hover:text-white transition-colors block">sk@flowergrid.co.uk</a>
                            <p className="mt-6 text-[#D6CFC2]/80!">Coulsdon CR5 2JA</p>
                            <Link href="https://calendly.com/flowergridmarketing/30min?month=2026-02" target='_blank' rel='noopener noreferrer' className="mt-6 hover:text-white transition-colors block font-medium text-[#F3EAD8]">Book a Discovery Call</Link>
                        </div>
                        <div className="flex items-center gap-6 text-[#D6CFC2]">
                            <Link href="https://www.instagram.com/flowergridwellness/" target="_blank" className="hover:text-[#A58E62] transition-colors"><Instagram className="w-6 h-6" strokeWidth={1.5} /></Link>
                            <Link href="https://www.facebook.com/flowergriidwellness/" target="_blank" className="hover:text-[#A58E62] transition-colors"><Facebook className="w-6 h-6" strokeWidth={1.5} /></Link>
                            <Link href="https://uk.linkedin.com/company/flowergridwellness" target="_blank" className="hover:text-[#A58E62] transition-colors"><Linkedin className="w-6 h-6" strokeWidth={1.5} /></Link>
                            <Link href="https://www.tiktok.com/@flowergrid" target="_blank" className="hover:text-[#A58E62] transition-colors"><TikTokIcon className="w-5 h-5" /></Link>
                            <Link href="https://www.youtube.com/channel/UCyP_NG0t1WA_OAJZGR-qU_w" target="_blank" className="hover:text-[#A58E62] transition-colors"><Youtube className="w-6 h-6" strokeWidth={1.5} /></Link>
                        </div>
                        {/* Google Map */}
                        <div className="w-full max-w-sm mt-6">
                            <div className="h-40 w-full overflow-hidden rounded-md">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2494.4474816737425!2d-0.12098422364579864!3d51.30289112562308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875fd3dd7637719%3A0xf4c019e289f1be75!2sFlowergriid%20%7C%20Holistic%20Wellness%20Centre%20Croydon!5e0!3m2!1sen!2sin!4v1768718902532!5m2!1sen!2sin"
                                    className="w-full h-full"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    allowFullScreen
                                />
                            </div>

                            {/* View Larger Button */}
                            <a
                                href="https://www.google.com/maps/place/Flowergriid+%7C+Holistic+Wellness+Centre+Croydon"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-3 text-xs tracking-widest text-[#F3EAD8] hover:text-white transition-colors"
                            >
                                View Larger Map →
                            </a>
                        </div>


                    </div>

                </div>

                <div className="border-t border-[#F3EAD8]/10 mt-10 pt-8 text-center relative z-20">
                    <p className="font-sans text-xs tracking-widest text-[#D6CFC2]/50">
                        © Copyright 2026 All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}