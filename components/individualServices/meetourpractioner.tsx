// components/services/MeetPractitioners.tsx

import Image from "next/image";
import Link from "next/link";
import { getImageUrl } from "@/lib/utils";

type Practitioner = {
  name: string;
  title: string;
  image: string;
  slug: string;
  description: string;
};

type Props = {
  title?: string;
  practitioners: Practitioner[];
};

export default function MeetPractitioners({
  title = "Meet Your Practitioner",
  practitioners,
}: Props) {
  return (
    <section className="w-full bg-background py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-12 flex items-center justify-center gap-3 px-4 md:mb-16 md:gap-5">
          <Image 
            src={getImageUrl("home/leaf.png")}
            alt="leaf" 
            width={80} 
            height={80} 
            className="h-10 w-10 object-contain md:h-16 md:w-16"
          />
          <h2 className="font-heading text-3xl text-text-heading md:text-5xl">
            {title}
          </h2>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {practitioners.map((item, index) => (
            <div
              key={index}
              className="flex min-h-[560px] flex-col rounded-4xl bg-[#d8c7a2] p-6 text-center transition duration-300 hover:-translate-y-1 hover:shadow-xl md:p-8"
            >
              {/* Profile Image */}
              <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full md:h-36 md:w-36">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="mt-6 font-heading text-2xl text-text-heading md:text-3xl">
                {item.name}
              </h3>

              {/* Title */}
              <p className="mt-3 text-base leading-relaxed text-text-body md:text-lg">
                {item.title}
              </p>

              {/* Description */}
              <p className="mt-6 line-clamp-5 text-base leading-relaxed text-text-heading md:text-lg">
                {item.description}
              </p>

              {/* CTA */}
              <div className="mt-auto pt-8">
                <Link
                  href={`/practitioner/${item.slug}`}
                  className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-primary hover:opacity-90 px-8 py-4 text-base font-medium text-white transition hover:scale-[1.02] md:text-lg"
                >
                  View Profile
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}