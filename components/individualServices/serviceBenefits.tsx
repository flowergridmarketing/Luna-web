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
    benefitsDescription?: string;
  };
};

export default function ServiceBenefits({ data }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // Applied the exact beige background color from your screenshot
    <section className="w-full bg-background py-10 md:py-14">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
        
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
          
          {/* LEFT SIDE: Heading & Description */}
          <div className=" lg:top-24">
            <h2 className="text-4xl font-normal leading-[1.1] text-[#231F20] md:text-5xl lg:text-6xl inline">
              Experience the Benefits of <br />
              {data.hero.name}
            </h2>
 
            <p className="mt-8 max-w-md text-base leading-relaxed text-[#231F20]/80 md:text-lg">
              {data.benefitsDescription || `${data.hero.name} healing nurtures your overall wellbeing by easing stress, enhancing emotional resilience, and supporting mental clarity. Benefits are gradual and personal, complementing mindfulness, meditation, and lifestyle practices.`}
            </p>
          </div>
 
          {/* RIGHT SIDE: Accordion List */}
          <div className="w-full">
            <div className="w-full border-t border-[#231F20]/20">
              {data.benefits?.map((item, index) => {
                const isOpen = openIndex === index;
 
                return (
                  <div key={index} className="border-b border-[#231F20]/20">
                    <button
                      onClick={() => toggleItem(index)}
                      className="flex w-full items-center justify-between py-10 text-left transition-colors hover:bg-black/5"
                    >
                      <span className="text-xl font-bold text-[#231F20] md:text-2xl">
                        {item.title}
                      </span>
 
                      {/* Icon */}
                      <span className="shrink-0 pl-6 text-3xl font-light text-[#231F20]">
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