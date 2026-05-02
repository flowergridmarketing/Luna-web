// components/services/ServiceHero.tsx

import Image from "next/image";
import Link from "next/link";
import { getImageUrl } from "@/lib/utils";
type Props = {
  data: {
    hero: {
      name: string;
      subtitle: string;
      image: string; // example: "services/reikiHero.jpg"
      buttonText?: string;
    };
  };
};

export default function ServiceHero({ data }: Props) {
  const hero = data.hero;

  return (
    <section className="relative w-full overflow-hidden">
      {/* Full screen fit exactly like old hero */}
      <div className="relative h-dvh min-h-[600px] w-full">
        
        {/* Same image fetching style as old section */}
        <div className="absolute inset-0">
          <Image
            src={hero.image}
            alt={hero.name}
            fill
            priority
            className="object-cover"
          />
        </div>


        {/* overlays */}
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/20 to-black/35" />

        {/* centered content */}
        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <div className="mx-auto max-w-5xl text-center">
            <div className="flex items-center justify-center gap-3 md:gap-5">
              <Image 
                src="/leaf.png"
                alt="leaf"
                width={80} 
                height={80} 
                className="h-8 w-8 object-contain md:h-20 md:w-20"
              />
              <h1 className="font-heading text-3xl uppercase tracking-wide text-white! sm:text-4xl md:text-6xl lg:text-7xl">
                {hero.name}
              </h1>
            </div>

            <p className="mx-auto mt-6 max-w-4xl text-base leading-relaxed text-white! md:text-2xl lg:text-2xl">
              {hero.subtitle}
            </p>    
          </div>
        </div>
      </div>
    </section>
  );
}