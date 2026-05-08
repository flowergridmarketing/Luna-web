"use client";

import React, { useRef } from 'react'
import { getImageUrl } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const BrandValueSection = () => {
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

        <div className="connection-header flex items-center mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-text-heading max-w-3xl">
              One integrated home for your complete wellbeing
            </h2>
          </div>
          <div>
            <Image
              src={getImageUrl("home/connection-logo.png")}
              alt="Flowergrid Logo"
              width={100}
              height={100}
              className="object-contain mb-12"
            />
          </div>
        </div>

        <div className="connection-text flex flex-col md:flex-row justify-center items-start gap-10 mb-12">
          <p className="text-text-body text-base md:text-lg leading-relaxed mb-6 max-w-2xl">
            Flowergrid is a leading holistic wellness centre in Croydon, built on the belief that true health is never found by looking at one part of your life in isolation. We have brought together an integrated team of over 20 doctors, coaches, and therapists to provide joined-up support for your mind, body, and spirit.
          </p>
          <p className="text-text-body text-base md:text-lg leading-relaxed max-w-2xl">
            Whether you are looking for holistic wellness in Croydon or online across the UK, we move beyond just managing symptoms. Our work is guided by the principles of sacred geometry and the Flower of Life, which provide an intelligent blueprint for your healing and transformation.
          </p>
        </div>

      </div>
    </section>
  )
}

export default BrandValueSection