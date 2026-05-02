// components/services/ServiceHero.tsx

import Image from "next/image";
import Link from "next/link";

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
      <div className="relative h-screen min-h-[700px] w-full">
        
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
        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="font-heading text-5xl uppercase tracking-wide text-white! md:text-5xl lg:text-5xl">
              {hero.name}
            </h1>

            <p className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-white! md:text-2xl lg:text-2xl">
              {hero.subtitle}
            </p>    
          </div>
        </div>
      </div>
    </section>
  );
}