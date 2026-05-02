"use client";

import { useState } from "react";

type Benefit = {
  title: string;
  text: string;
};

type Props = {
  data: {
    hero: {
      name: string;
    };
    benefits: Benefit[];
  };
};

export default function ServiceBenefits({ data }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // Applied the exact beige background color from your screenshot
    <section className="w-full bg-[#F5F1E9] py-20 md:py-24">
      {/* Container: Removed restrictive max-w to let it expand */}
      <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-12">
        
        {/* Grid Layout: Using 50/50 split for more breathing room */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
          
          {/* LEFT SIDE: Heading & Description */}
          <div className="sticky top-10">
            <h2 className="text-3xl font-medium leading-tight text-gray-900 md:text-5xl lg:text-6xl">
              Experience the Benefits of<br />
              <span className="italic">{data.hero.name}</span>
            </h2>

            <p className="mt-8 max-w-lg text-lg leading-relaxed text-gray-700 md:text-xl">
              Reiki healing nurtures your overall wellbeing by easing stress, 
              enhancing emotional resilience, and supporting mental clarity. 
              Benefits are gradual and personal, complementing mindfulness, 
              meditation, and lifestyle practices, helping you feel more 
              balanced, grounded, and connected in daily life.
            </p>
          </div>

          {/* RIGHT SIDE: Accordion List */}
          <div className="w-full">
            {/* The top border starts the list */}
            <div className="w-full border-t border-black/20">
              {data.benefits?.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div key={index} className="border-b border-black/20">
                    <button
                      onClick={() => toggleItem(index)}
                      className="flex w-full items-center justify-between py-8 text-left transition-colors hover:bg-black/5"
                    >
                      <span className="text-xl font-medium text-gray-900 md:text-2xl">
                        {item.title}
                      </span>

                      {/* Icon */}
                      <span className="shrink-0 pl-6 text-2xl font-light text-gray-900 md:text-3xl">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {/* Expandable Content */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="pb-8 text-base leading-relaxed text-gray-700 md:text-lg">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}