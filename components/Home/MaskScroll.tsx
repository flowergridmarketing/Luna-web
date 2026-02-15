"use client";
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MaskScroll = () => {
    const container = useRef(null);
    const maskRef = useRef(null);
    const bgImageRef = useRef(null);
    const textRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Detect iOS/mobile devices
        const checkMobile = () => {
            const ua = navigator.userAgent.toLowerCase();
            const isIOS = /iphone|ipod|ipad/.test(ua);
            const isMobileDevice = window.innerWidth < 768;
            setIsMobile(isIOS || isMobileDevice);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useGSAP(() => {
        if (!container.current) return;

        const ctx = gsap.context(() => {
            // Reduced settings for mobile
            const scrollEnd = isMobile ? "+=300%" : "+=500%";
            const maskScale = isMobile ? 30 : 60; // Reduced scale for mobile
            const useForce3D = !isMobile; // Disable force3D on mobile

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: "top top",
                    end: scrollEnd,
                    scrub: isMobile ? 0.5 : 1, // Lighter scrub on mobile
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                    // Reduce work on mobile
                    refreshPriority: isMobile ? -1 : 0,
                }
            });

            tl.addLabel("start");

            // Mask animation - reduced complexity on mobile
            tl.to(maskRef.current, {
                scale: maskScale,
                transformOrigin: "center center",
                ease: "power1.inOut",
                duration: 2,
                force3D: useForce3D,
            }, "start");

            // Background image - reduce transforms on mobile
            tl.to(bgImageRef.current, {
                scale: isMobile ? 1.02 : 1.05,
                duration: 2,
                ease: "power1.inOut",
                force3D: useForce3D,
            }, "start");

            tl.addLabel("scene1", "-=0.5");

            const q = gsap.utils.selector(container);
            const texts = q(".reveal-text") as HTMLElement[];

            // Scene 1
            tl.to(bgImageRef.current, {
                xPercent: isMobile ? 1 : 3,
                yPercent: isMobile ? 1 : 3,
                scale: isMobile ? 1.05 : 1.1,
                duration: 1.5,
                ease: "power1.inOut",
                force3D: useForce3D,
            }, "scene1");

            tl.fromTo(texts[0],
                { y: isMobile ? 30 : 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.5, ease: "power2.out", force3D: useForce3D },
                "scene1"
            );

            // Scene 2
            tl.addLabel("scene2");
            tl.to(texts[0], { y: isMobile ? -20 : -30, opacity: 0, duration: 0.5, force3D: useForce3D }, "scene2");

            tl.to(bgImageRef.current, {
                xPercent: isMobile ? -1 : -3,
                yPercent: isMobile ? 1 : 3,
                scale: isMobile ? 1.08 : 1.15,
                duration: 1.5,
                ease: "power1.inOut",
                force3D: useForce3D,
            }, "scene2");

            tl.fromTo(texts[1],
                { y: isMobile ? 30 : 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.5, ease: "power2.out", force3D: useForce3D },
                "scene2+=0.2"
            );

            // Scene 3
            tl.addLabel("scene3");
            tl.to(texts[1], { y: isMobile ? -20 : -30, opacity: 0, duration: 0.5, force3D: useForce3D }, "scene3");

            tl.to(bgImageRef.current, {
                xPercent: isMobile ? 1 : 3,
                yPercent: isMobile ? 1 : 3,
                scale: isMobile ? 1.06 : 1.12,
                duration: 1.5,
                ease: "power1.inOut",
                force3D: useForce3D,
            }, "scene3");

            tl.fromTo(texts[2],
                { y: isMobile ? 30 : 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.5, ease: "power2.out", force3D: useForce3D },
                "scene3+=0.2"
            );

            // Scene 4
            tl.addLabel("scene4");
            tl.to(texts[2], { y: isMobile ? -20 : -30, opacity: 0, duration: 0.5, force3D: useForce3D }, "scene4");

            tl.to(bgImageRef.current, {
                xPercent: isMobile ? 0.5 : 2,
                yPercent: isMobile ? -1 : -3,
                scale: isMobile ? 1.08 : 1.15,
                duration: 1.5,
                ease: "power1.inOut",
                force3D: useForce3D,
            }, "scene4");

            tl.fromTo(texts[3],
                { y: isMobile ? 30 : 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.5, ease: "power2.out", force3D: useForce3D },
                "scene4+=0.2"
            );

            // Scene 5
            tl.addLabel("scene5");
            tl.to(texts[3], { y: isMobile ? -20 : -30, opacity: 0, duration: 0.5, force3D: useForce3D }, "scene5");

            tl.to(bgImageRef.current, {
                xPercent: 0,
                yPercent: 0,
                scale: 1.02,
                duration: 1.5,
                ease: "power1.inOut",
                force3D: useForce3D,
            }, "scene5");

            tl.fromTo(texts[4],
                { y: isMobile ? 30 : 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.5, ease: "power2.out", force3D: useForce3D },
                "scene5+=0.2"
            );
        }, container);

        return () => ctx.revert();
    }, { scope: container, dependencies: [isMobile] });

    return (
        <section
            ref={container}
            className="relative w-screen h-screen overflow-hidden bg-[#F3E5CB]"
        >
            <Image
                ref={bgImageRef}
                src={`${process.env.NEXT_PUBLIC_IMGURL}home/maskscrollfit.svg%2Bxml`}
                alt="BG"
                fill
                priority
                className='object-cover object-[50%_60%]'
                style={{ transformOrigin: "center center" }}
                // Add quality optimization for mobile
                quality={isMobile ? 75 : 90}
                sizes="100vw"
            />

            <div 
                ref={maskRef} 
                className="absolute inset-0 flex items-center justify-center pointer-events-none origin-center w-screen h-screen"
                style={{
                    willChange: "transform",
                    maskImage: `url('/home/flower.svg')`,
                    WebkitMaskImage: `url('/home/flower.svg')`,
                    maskSize: "cover",
                    WebkitMaskSize: "cover",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskPosition: "center center",
                    WebkitMaskPosition: "center center",
                    backgroundColor: "#F3E5CB"
                }}
            />

            <div ref={textRef} className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none px-4">
                <h2 className="reveal-text absolute text-3xl md:text-5xl lg:text-7xl font-bold text-white! leading-[0.9] text-center max-w-5xl opacity-0 font-gilroy-black">
                    Aligning
                </h2>

                <h2 className="reveal-text absolute text-3xl md:text-5xl lg:text-7xl font-bold text-white! leading-[0.9] text-center max-w-7xl opacity-0 font-gilroy-black">
                    Mind, Body and Spirit
                </h2>
                
                <h2 className="reveal-text absolute text-3xl md:text-5xl lg:text-7xl font-bold text-white! leading-[0.9] text-center max-w-7xl opacity-0 font-gilroy-black">
                    for Balance
                </h2>
                
                <div className="reveal-text absolute flex flex-col items-center justify-center gap-6 opacity-0">
                    <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white! leading-[0.9] text-center max-w-7xl font-gilroy-black">
                        See How We Help You Transform
                    </h2>
                    <Link 
                        href="/holistic-wellness-services" 
                        className="explore-button pointer-events-auto px-6 py-3 md:px-8 md:py-4 text-sm md:text-base bg-primary border text-white rounded-full font-medium cursor-pointer hover:bg-primary/90 transition-colors"
                    >
                        Explore Our Services
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default MaskScroll;