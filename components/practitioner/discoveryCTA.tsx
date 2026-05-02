import Image from "next/image";
import Link from "next/link";

type Props = {
  data: {
    hero: {
      name: string;
    };
    booking?: {
      calendly: string;
    };
  };
};

export default function DiscoveryCTA({ data }: Props) {
  return (
    <section className="w-full px-4 md:px-6 py-12 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto bg-[#2b2420] rounded-[2rem] overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* Left: Image */}
          <div className="relative h-[300px] md:h-full min-h-[420px]">
            <Image
              src="https://ik.imagekit.io/z6xh4w9tp/services/cta-image.jpg"
              alt={`Book a session with ${data.hero.name}`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* Right: Content */}
          <div className="p-10 md:p-16 flex flex-col justify-center">
            <p className="mb-4 text-sm uppercase tracking-[0.22em] text-[#d8c7a2]">
              Next Step
            </p>
            <h2 className="text-3xl md:text-5xl font-heading text-white leading-tight mb-6">
              Take the next step with a discovery call
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-md">
              Book a free discovery call with {data.hero.name} to talk through
              what you need and find the right appointment for you.
            </p>
            <Link
              href={data.booking?.calendly || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#d8c7a2] text-black px-10 py-4 text-lg font-semibold transition-transform hover:scale-[1.03] w-fit"
            >
              Book a Discovery Call
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
