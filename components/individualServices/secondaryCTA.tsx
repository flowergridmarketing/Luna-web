import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  serviceName: string;
}

export default function SecondaryCTA({ serviceName }: Props) {
  return (
    <section className="w-full px-4 md:px-6 py-12 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto bg-[#d8c7a2] rounded-[2rem] overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative h-[300px] md:h-full min-h-[400px]">
            <Image
              src="https://ik.imagekit.io/z6xh4w9tp/services/cta-image.jpg"
              alt="Treatment session"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8 md:p-16 flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl font-heading text-text-heading leading-tight mb-8">
              Book Your {serviceName} Journey Today
            </h2>
            <Link
              href="#booking"
              className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-full text-lg font-medium transition-transform hover:scale-105 w-fit"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
