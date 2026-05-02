"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

type Props = {
  data: {
    hero: {
      name: string;
    };
    booking?: {
      calendly: string;
    };
    availability?: {
      acceptingClients: boolean;
    };
    tags?: string[];
  };
};

export default function PractitionerSidebar({ data }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Inline sidebar card shown beside hero on desktop */}
      <div className="hidden xl:block w-full rounded-[2rem] border border-black/5 bg-[#F5F1E9] p-8 shadow-sm">
        <h3 className="font-heading text-2xl text-text-heading mb-2">
          Not sure where to start?
        </h3>
        <p className="text-base text-text-body leading-relaxed mb-6">
          Book a free discovery call to talk through what you need and choose
          the right appointment.
        </p>

        {data.availability?.acceptingClients && (
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700 border border-green-200">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Accepting New Clients
          </div>
        )}

        {data.tags && data.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {data.tags.slice(0, 4).map((tag, i) => (
              <span
                key={i}
                className="rounded-full bg-white border border-black/10 px-3 py-1 text-xs text-text-heading"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <Link
          href={data.booking?.calendly || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center rounded-full bg-primary px-6 py-3 text-base font-medium text-white transition-transform hover:scale-[1.02]"
        >
          Book a Free Discovery Call
        </Link>
      </div>
    </>
  );
}
