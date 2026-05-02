// components/services/RelatedServices.tsx

import Image from "next/image";
import Link from "next/link";

type ServiceItem = {
  slug: string;
  hero: {
    name: string;
    image: string;
  };
};

type Props = {
  data: ServiceItem[];
};

export default function RelatedServices({ data }: Props) {
  if (!data?.length) return null;

  return (
    <section className="bg-background py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1440px]">

        {/* Heading */}
        <div className="mb-12 text-center md:mb-16">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-primary">
            Explore More
          </p>

          <h2 className="font-heading text-4xl text-text-heading md:text-5xl lg:text-[56px]">
            Related Services
          </h2>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 lg:gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="group relative h-[420px] md:h-[500px] overflow-hidden rounded-[2rem]"
            >
              {/* Image */}
              <Image
                src={item.hero.image}
                alt={item.hero.name}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-6 md:p-8">
                <h3 className="w-[90%] font-heading text-2xl text-white md:text-3xl leading-tight">
                  {item.hero.name}
                </h3>

                <Link
                  href={`/services/${item.slug}`}
                  className="mt-6 inline-flex items-center justify-center rounded-full border border-white/60 px-7 py-3 text-sm uppercase tracking-widest text-white transition hover:bg-primary hover:border-primary"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}