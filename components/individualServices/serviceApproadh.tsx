// components/services/ServiceApproach.tsx

import { getImageUrl } from "@/lib/utils";
import Image from "next/image";

type Props = {
  data: {
    approach: {
      title: string;
      description: string;
      cards: {
        title: string;
        text: string;
      }[];
    };
  };
};

export default function ServiceApproach({ data }: Props) {
  const approach = data.approach;

  return (
    <section className="w-full bg-background py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-3xl leading-tight text-text-heading sm:text-4xl md:text-6xl">
            {approach.title}
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-text-body sm:text-base md:mt-6 md:text-xl">
            {approach.description}
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 md:mt-14 md:gap-8">
          {approach.cards?.map((item, index) => (
            <div
              key={index}
              className="rounded-[2rem] bg-primary px-6 py-10 text-center md:px-10 md:py-16 shadow-lg transition-transform hover:scale-[1.02]"
            >
              {/* Leaf */}
              <div className="mb-6 flex justify-center">
                <Image
                  src={getImageUrl("home/leaf.png")}
                  alt="Leaf decoration"
                  width={60}
                  height={60}
                  className="object-contain brightness-0 invert"
                />
              </div>

              {/* Card Title */}
              <h3 className="font-heading text-xl leading-snug text-white md:text-3xl mb-4">
                {item.title}
              </h3>

              {/* Card Text */}
              <p className="text-sm leading-relaxed text-white/90 md:text-lg">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}