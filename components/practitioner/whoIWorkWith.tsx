import Link from "next/link";

type Props = {
  data: any;
};

export default function WhoIWorkWith({ data }: Props) {
  const section = data.whoIWorkWith;
  if (!section) return null;

  return (
    <div className="w-full">
      <h2 className="font-playfair font-serif text-4xl leading-tight text-[#111111] md:text-5xl lg:text-7xl mb-10 tracking-tight">
        Who I Work With
      </h2>
      <p className="max-w-4xl text-lg leading-relaxed text-[#3D3D3D] md:text-xl mb-10 font-light">
        {section.intro}
      </p>

      <p className="font-bold text-[#111111] mb-8 uppercase tracking-[0.15em] text-[11px] opacity-80">I work with:</p>

      <ul className="w-full space-y-5 mb-12">
        {section.items.map((item: string, index: number) => (
          <li key={index} className="flex items-start gap-4">
            <span className="text-[#A88B60] mt-1.5 text-xl">•</span>
            <p className="text-[17px] leading-relaxed text-[#2D2D2D] font-light">
              {item}
            </p>
          </li>
        ))}
      </ul>

      <p className="font-medium text-[#111111] italic mb-12 text-lg">
        If you recognise yourself in any of these groups, you are welcome here
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
  );
}

