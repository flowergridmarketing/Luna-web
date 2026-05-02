'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { getImageUrl } from '@/lib/utils';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

import Link from 'next/link';

interface IntroProps {
  imageSrc: string;
  text: string;
  subtext?: string;
  duration?: string;
  ctaText?: string;
  ctaLink?: string;
  imageClassName?: string;
  badges?: string[];
}

export default function PersonHero({
  imageSrc,
  text,
  subtext,
  duration,
  ctaText,
  ctaLink,
  imageClassName,
  badges
}: IntroProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const lampRef = useRef<HTMLDivElement>(null);
  console.log(imageClassName, 'image width')

  useGSAP(() => {
    // TEXT ANIMATION
    gsap.fromTo(
      textRef.current,
      {
        y: -70,
        opacity: 0,
      },
      {
        y: -20,
        opacity: 1,
        duration: 1.6,
        ease: 'power3.out',
        delay: 0.4,
      }
    );

    // IMAGE ANIMATION
    gsap.fromTo(
      imageRef.current,
      {
        y: 120,
        opacity: 0,
        scale: 0.95,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.8,
        ease: 'power3.out',
        delay: 0.2,
      }
    );

    gsap.fromTo(
      lampRef.current,
      {
        y: 100,
        opacity: 0,
        scale: 0.95,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.8,
        ease: 'power3.out',
        delay: 0.6,
      }
    );
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className={`relative w-full overflow-hidden bg-linear-to-r from-[#ECDDC6] to-[#a27f45] ${ctaText ? 'min-h-[950px]' : 'min-h-[850px]'}`}
    >

      <div className={`mx-auto flex flex-col max-w-7xl items-center justify-center md:justify-start px-4 sm:px-6 md:px-8 lg:px-12
          md:flex-col ${ctaText ? 'min-h-[950px] md:h-[950px]' : 'min-h-screen md:h-[850px] lg:max-h-[850px]'}
      `}>

        <div
          ref={textRef}
          className={`
          relative z-30 mx-auto
          max-w-6xl
          ${ctaText ? 'pt-6 md:pt-10 lg:pt-12 items-center' : 'pt-8 md:pt-26 lg:pt-22'}
          px-4 sm:px-6 md:pl-14 lg:px-24 lg:pr-24
          text-center
          flex flex-col justify-start
        `}
        >
          <h1 className={`
          ${ctaText ? 'text-3xl sm:text-4xl md:text-5xl whitespace-pre-line' : 'text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl'}
          font-normal text-black
          leading-tight sm:leading-tight md:leading-snug lg:leading-snug
          max-w-4xl
          ${ctaText ? 'mb-4' : 'mb-8 sm:mb-12 md:mb-16 md:px-20 lg:mt-8 md:ml-4'}
          `}
          >
            {text}
          </h1>

          {subtext && (
            <p className="max-w-3xl text-base md:text-lg text-black/80 mb-6 font-light leading-relaxed">
              {subtext}
            </p>
          )}

          {badges && badges.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {badges.map((badge, i) => (
                <span
                  key={i}
                  className="px-4 py-1.5 border border-black/30 rounded-full text-xs md:text-sm text-black/80 font-light backdrop-blur-xs"
                >
                  {badge}
                </span>
              ))}
            </div>
          )}

          {ctaText && ctaLink && (
            <Link
              href={ctaLink}
              className="bg-[#433327] text-white px-8 py-3 rounded-full text-base md:text-lg font-medium transition-transform hover:scale-105 shadow-md mb-4"
            >
              {ctaText}
            </Link>
          )}
        </div>

        <div
          ref={lampRef}
          className="
            absolute top-0 left-0 sm:left-2 md:left-0 lg:left-10 xl:left-12
            z-10
            w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] xl:w-[320px]
          "
        >
          <Image src={getImageUrl("about/lamp.png")} alt="Lamp" width={360} height={200} className="object-contain w-full h-auto" />
        </div>

        <div
          ref={imageRef}
          className="absolute -bottom-10 left-1/2 z-30 h-full w-full -translate-x-1/2">
          <Image
            src={imageSrc}
            alt="trainer img"
            width={450}
            height={450}
            className={`absolute bottom-0 left-1/2 -translate-x-1/2 object-contain object-bottom ${imageClassName || "w-[250px] sm:w-[300px] md:w-[300px] lg:w-[300px] xl:w-[350px]"}`}
            priority
          />
        </div>

        <div className="absolute bottom-0 left-0 w-full h-24 sm:h-8 md:h-32 lg:h-36 bg-linear-to-r from-[#ECDDC6] to-[#af8849]" />

        <div
          className="
            absolute bottom-0 right-0 sm:right-0 md:right-6 lg:right-16 xl:right-24
            z-20
            w-[160px] sm:w-[220px] md:w-[260px] lg:w-[340px] xl:w-[400px]
          "
          style={{
            marginLeft: "34px"
          }}
        >
          <Image src={getImageUrl("about/tree.png")} alt="Plant" width={400} height={400} className="w-full h-auto" />

        </div>

        <div
          className="
            absolute bottom-0 left-0
            z-10
            w-[180px] sm:w-[320px] md:w-[360px] lg:w-[400px] xl:w-[420px]
            -mb-6 sm:-mb-8 md:-mb-10 lg:-mb-12
          "
        >
          <Image
            src={getImageUrl("about/tablewithplant.png")}
            alt="Table"
            width={420}
            height={200}
            className="object-contain w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}