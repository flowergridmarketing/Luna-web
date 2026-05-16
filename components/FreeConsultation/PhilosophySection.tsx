"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getImageUrl } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface PhilosophySectionProps {
  data: {
    textLeft: string;
    textRight: string;
    image: string;
  };
}

const PhilosophySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftTextRef = useRef<HTMLDivElement>(null);
  const rightTextRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Left text animation
      gsap.fromTo(
        leftTextRef.current,
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        },
      );

      // Right text animation
      gsap.fromTo(
        rightTextRef.current,
        { x: 40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        },
      );

      // Image animation
      gsap.fromTo(
        imageRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="pt-10 md:pt-2 pb-16 md:pb-7 bg-[#f3e5cb] px-4 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
        {/* Left Column */}
        <div
          ref={leftTextRef}
          className="w-full md:w-[40%] lg:w-[38%] text-center md:text-right md:pr-4 lg:pr-10"
        >
          <p className="text-xl sm:text-2xl md:text-[22px] lg:text-3xl xl:text-4xl font-sans text-black! leading-[1.4] md:leading-snug lg:leading-normal whitespace-pre-line tracking-tight">
            {`As a holistic life coach and
wellness is never a one-
in this free consultation
identify what is really
the right support from`}
          </p>
        </div>

        {/* Center Column: Portrait */}
        <div className="w-full md:w-[20%] lg:w-[24%] flex justify-center z-10 self-center">
          <div
            ref={imageRef}
            className="relative w-[280px] h-[320px] md:w-full md:h-[450px] lg:h-[550px] xl:h-[600px]"
          >
            <Image
              src={getImageUrl("about/person1/saminahalf.png")}
              alt="Samina Khan Portrait"
              fill
              className="object-contain object-center scale-x-[-1]"
              priority
            />
          </div>
        </div>

        {/* Right Column */}
        <div
          ref={rightTextRef}
          className="w-full md:w-[40%] lg:w-[38%] text-center md:text-left md:pl-4 lg:pl-10"
        >
          <p className="text-xl sm:text-2xl md:text-[22px] lg:text-3xl xl:text-4xl font-sans text-black! leading-[1.4] md:leading-snug lg:leading-normal whitespace-pre-line tracking-tight">
            {`practitioner, I know that true
-size-fits-all solution. My role
is to listen properly, help you
going on, and match you
our team of over 20 experts.`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
