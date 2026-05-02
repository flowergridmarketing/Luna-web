// components/services/ServiceIntroBar.tsx

import Link from "next/link";

type Props = {
  data: {
    hero: {
      name: string;
    };
    intro: {
      title: string;
      points: string[];
      summary: string;
    };
  };
};

export default function ServiceIntroBar({ data }: Props) {
  return (
    <section className="w-full min-h-screen bg-background flex items-center py-6 md:py-10">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">

        <div className="flex min-h-[calc(100vh-60px)] flex-col justify-center">

          {/* Heading reduced */}
          <div className="text-center">
            <h2 className="mx-auto max-w-4xl font-heading text-3xl leading-tight text-text-heading sm:text-4xl md:text-6xl md:leading-[1.12]">
              {data.intro.title}
            </h2>

            {/* Text reduced */}
            <div className="mx-auto mt-6 max-w-4xl space-y-2 md:mt-8">
              {data.intro.points?.map((item, index) => (
                <p
                  key={index}
                  className="text-sm leading-relaxed text-text-heading sm:text-base md:text-xl"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Summary reduced */}
          <div className="mt-8 overflow-hidden rounded-2xl bg-primary shadow-xl md:mt-10">
            <p className="px-6 py-6 text-base font-semibold leading-relaxed text-white sm:px-8 md:px-12 md:py-10 md:text-3xl italic">
              "{data.intro.summary}"
            </p>
          </div>

          {/* Button reduced */}
          <div className="mt-8 flex justify-center md:mt-10">
            <Link
              href="#booking"
              className="inline-flex min-w-[240px] items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-medium text-white transition duration-300 hover:scale-[1.02] sm:min-w-[300px] md:min-w-[420px] md:px-10 md:py-4 md:text-xl"
            >
              Schedule Your {data.hero.name} Session
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}