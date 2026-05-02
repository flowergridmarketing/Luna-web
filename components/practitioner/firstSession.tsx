'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { getImageUrl } from '@/lib/utils';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

type SessionStep = {
  title: string;
  description: string;
};

type Props = {
  data: {
    slug: string;
    firstSession?: SessionStep[];
  };
};

export default function FirstSession({ data }: Props) {
    const containerRef = useRef<HTMLDivElement>(null);
    const steps = data.firstSession;
    
    // Check if it's Monira Ahmed
    const isPerson2 = data.slug === 'monira-ahmed-hypnotherapist';

    useGSAP(() => {
        if (!steps || steps.length === 0) return;
        
        gsap.fromTo('.journey-item',
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                }
            }
        );
    }, { scope: containerRef });

    if (!steps || steps.length === 0) return null;

    // Build the items array based on practitioner - Zigzag pattern for all
    const items: any[] = [];
    const flowers = [
        getImageUrl("about/person2/3a.png"),
        getImageUrl("about/person2/3b.png"),
        getImageUrl("about/person2/3c.png"),
        getImageUrl("about/person2/3d.png")
    ];

    // Build exactly 8 items for the zigzag pattern
    // Row 1: Flower, Card, Flower, Card
    items.push({ type: 'flower', image: flowers[0], alt: 'Flower 1' });
    items.push({ type: 'card', title: steps[0]?.title, description: steps[0]?.description });
    items.push({ type: 'flower', image: flowers[1], alt: 'Flower 2' });
    items.push({ type: 'card', title: steps[1]?.title, description: steps[1]?.description });
    
    // Row 2: Card, Flower, Card, Flower
    items.push({ type: 'card', title: steps[2]?.title, description: steps[2]?.description });
    items.push({ type: 'flower', image: flowers[2], alt: 'Flower 3' });
    items.push({ type: 'card', title: steps[3]?.title, description: steps[3]?.description });
    items.push({ type: 'flower', image: flowers[3], alt: 'Flower 4' });

    return (
        <section className="py-24 bg-[#F5F1E9]">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-heading text-[#171717] mb-4">
                        What to Expect in Your First Session
                    </h2>
                    <p className="text-[#5B5B5B] max-w-2xl mx-auto font-light">
                        We begin with a gentle introduction to understand your needs and set a clear path forward.
                    </p>
                </div>

                <div
                    ref={containerRef}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
                >
                    {items.map((item, index) => (
                        <div key={index} className="journey-item flex justify-center items-center w-full h-full">

                            {item.type === 'card' ? (
                                <div className="w-full max-w-[280px] aspect-[3/4] flex flex-col">
                                    <div className="w-full h-full bg-[#E6DFD4] rounded-2xl flex flex-col items-center justify-center p-6 text-center shadow-sm">
                                        <h3 className="text-xl font-bold text-[#171717] mb-4">
                                            {item.title}
                                        </h3>

                                        <p className="text-sm md:text-base leading-relaxed text-[#5B5B5B]">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <div className="w-full max-w-[250px] aspect-[3/4] flex items-center justify-center relative">
                                    <div className="relative w-full h-full opacity-80 hover:opacity-100 transition-opacity duration-500">
                                        <Image
                                            src={item.image || "/assets/flower-placeholder.svg"}
                                            alt={item.alt}
                                            fill
                                            className="object-contain p-4"
                                        />
                                    </div>
                                </div>
                            )}

                        </div>
                    ))}
                </div>

                <p className='text-center font-xl mt-12 p-10 text-[#5B5B5B] max-w-2xl mx-auto font-light' >
                    {isPerson2 && (
                        "I believe education and fairness are the foundation of progress. My aim is always to help people grow in ways that benefit both themselves and those around them."
                    )}
                </p>

            </div>
        </section>
    );
}
