import React from "react";
import { getImageUrl } from "@/lib/utils";
import Link from "next/link";

const LocationHero = () => {
    return (
        <section
            style={{
                backgroundImage: `url(${getImageUrl("location/location-hero.jpg.jpeg")})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center top", // important for mobile
            }}
            className="
        relative w-full overflow-hidden
        min-h-screen md:min-h-screen
        flex items-center sm:bg-contain
      "
        >
            {/* Overlay */}
            <div
                className="
          absolute inset-0
          bg-linear-to-r
          from-black/60 via-black/40 to-black/10
          md:from-black/40 md:via-black/20 md:to-transparent
        "
            />

            {/* Content */}
            <div
                className="
          relative z-10
          w-full max-w-5xl
          px-6 md:px-12 lg:pl-20
          pt-24 md:pt-0
        "
            >
                {" "}
                <h1
                    className="
            text-4xl sm:text-4xl md:text-5xl lg:text-6xl
            font-medium text-white!
            mb-4 md:mb-6
            drop-shadow-lg
          "
                >
                    Flowergrid Holistic Wellness Center in Croydon
                </h1>
                <p
                    className="
            text-sm sm:text-base md:text-xl lg:text-2xl
            leading-relaxed tracking-wide
            text-white/95!
            max-w-3xl
            drop-shadow-md
          "
                >
                    Flowergrid is a holistic wellness centre in Croydon offering mind,
                    body and spirit support through coaching, therapy and healing
                    programmes.
                </p>
                <div className="hero-text-element mt-10 flex flex-wrap md:flex-col gap-4">
                    <Link
                        href="/contact-us"
                        className="w-full md:w-100 px-8 py-4 bg-primary text-white text-center rounded-full font-medium hover:opacity-90 transition-opacity"
                    >
                        Book a Discovery Session
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default LocationHero;
