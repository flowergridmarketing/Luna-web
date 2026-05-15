"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUp } from "lucide-react";

export default function BookConsultationButton() {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");
    const lastScrollY = useRef(0);
    const pathname = usePathname();
    const isBookingPage = pathname === "/booking";
    const isBlogPage = pathname.startsWith("/holistic-journals");

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show the container only when scrolled past 300px
            if (currentScrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }

            // Determine scroll direction (with a small 5px threshold to avoid jitter)
            if (currentScrollY > lastScrollY.current + 5) {
                setScrollDirection("down");
            } else if (currentScrollY < lastScrollY.current - 5) {
                setScrollDirection("up");
            }

            lastScrollY.current = currentScrollY;
        };

        // Set initial scroll value
        lastScrollY.current = window.scrollY;

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        if ((window as any).lenis) {
            (window as any).lenis.scrollTo(0, { duration: 1.2 });
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 sm:bottom-8 sm:right-8 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}>
            <div className="relative flex items-center justify-end h-14 md:h-16 w-64">
                {/* Book Consultation Button */}
                {!isBookingPage && !isBlogPage && (
                    <Link
                        href="/booking"
                        className={`absolute right-0 flex items-center justify-center whitespace-nowrap px-6 py-3 md:px-8 md:py-4 rounded-full bg-primary/75 backdrop-blur-md border border-white/20 text-white shadow-xl font-medium tracking-wide transition-all duration-500 hover:bg-primary hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary origin-right ${
                            scrollDirection === "down"
                                ? "opacity-100 translate-x-0 scale-100" 
                                : "opacity-0 translate-x-8 scale-90 pointer-events-none"
                        }`}
                    >
                        Book a Consultation
                    </Link>
                )}

                {/* Scroll To Top Button */}
                <button
                    onClick={scrollToTop}
                    className={`absolute right-0 flex items-center justify-center p-3 md:p-4 rounded-full bg-primary/75 backdrop-blur-md border border-white/20 text-white shadow-xl transition-all duration-500 hover:bg-primary hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary origin-right ${
                        (isBookingPage || scrollDirection === "up")
                            ? "opacity-100 translate-x-0 scale-100" 
                            : "opacity-0 translate-x-8 scale-90 pointer-events-none"
                    }`}
                    aria-label="Scroll to top"
                >
                    <ArrowUp size={24} className="md:w-7 md:h-7" />
                </button>
            </div>
        </div>
    );
}
