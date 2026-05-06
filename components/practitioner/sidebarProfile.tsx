import Image from "next/image";
import Link from "next/link";
import { getImageUrl } from "@/lib/utils";

type Props = {
  data: any;
};

export default function SidebarProfile({ data }: Props) {
  const badges = [
    data.credentials,
    ...(data.languages || []),
    data.availability?.online ? "Online" : null,
    data.availability?.inPerson ? "In-person" : null,
    data.availability?.acceptingClients ? "Accepting new clients" : null,
  ].filter(Boolean);

  return (
    <div className="lg:sticky lg:top-36 flex flex-col items-center bg-[#E6DFD4]/60 border border-primary/20 backdrop-blur-sm rounded-md pt-12 px-8 pb-12 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] ">
      {/* Profile Image */}
      <div className="mb-8 relative">
        <div className="absolute inset-0 bg-[#644D36]/10 rounded-full blur-2xl -z-10 scale-150"></div>
        <div className="overflow-hidden rounded-full border-[6px] border-white shadow-md w-28 h-28">
          <Image
            src={data.hero?.image || getImageUrl("about/team/hana.png")}
            alt={data.hero?.name || "Practitioner"}
            width={112}
            height={112}
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>

      {/* Title & Subtext */}
      <h3 className="font-heading text-xl font-bold text-[#171717] mb-4 leading-tight">
        {data.booking?.ctaBox?.title || "Not sure where to start?"}
      </h3>
      <p className="text-[14px] leading-relaxed text-[#4A4A4A] mb-10 max-w-[260px]">
        {data.booking?.ctaBox?.description || "Book a free discovery session with me so we can find out what clinical support is right for you."}
      </p>

      {/* Button */}
      <Link
        href={data.booking?.calendly || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-full bg-primary px-15 py-2 mb-5 text-md text-white transition-transform hover:scale-[1.03] w-fit"
      >
        {data.booking?.ctaBox?.btnText || "Book a Discovery Call"}
      </Link>

      {/* Highlights / Badges */}
      <div className="flex w-full flex-col items-center gap-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="h-px w-4 bg-[#644D36]/20"></div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#644D36]/60">
            Practitioner Highlights
          </p>
          <div className="h-px w-4 bg-[#644D36]/20"></div>
        </div>
        <div className="flex flex-wrap justify-center gap-2.5">
          {badges.map((badge: string, index: number) => (
            <span
              key={index}
              className="rounded-full border border-[#644D36]/10 bg-white/50 px-4 py-2 text-[12px] font-medium text-[#2D2D2D] shadow-sm backdrop-blur-[2px] transition-colors hover:bg-white/80"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

