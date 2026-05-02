import Image from "next/image";
import Link from "next/link";

type Props = {
  data: any;
};

export default function Hero({ data }: Props) {
  const hero = data.hero;

  /* Combine credentials + registration into one pill string */
  const credentialPill = [data.credentials, data.registration]
    .filter(Boolean)
    .join(", ");

  return (
    <section 
      className="relative w-full overflow-hidden flex flex-col justify-center" 
      style={{ 
        backgroundColor: "#35271C", 
        color: "#FFFFFF",
        minHeight: "100vh"
      }}
    >
      <div 
        className="mx-auto w-full max-w-7xl px-5"
        style={{ paddingTop: "140px", paddingBottom: "80px" }}
      >

        {/* ── MAIN GRID ── */}
        <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-center lg:gap-16 xl:gap-24">

          {/* ── LEFT: PORTRAIT CARD ── */}
          <div className="mx-auto w-full max-w-[340px] shrink-0 lg:mx-0 lg:w-[320px] xl:w-[370px]">
            {/* Beige card frame that matches the reference screenshot */}
            <div 
              className="relative overflow-hidden rounded-3xl" 
              style={{ backgroundColor: "#D6C5A5" }}
            >
              {/* Portrait — 3:4 ratio using inline style to ensure height doesn't collapse */}
              <div className="relative w-full" style={{ aspectRatio: "3/4", minHeight: "400px" }}>
                {hero.image && (
                  <Image
                    src={hero.image}
                    alt={hero.name || "Practitioner"}
                    fill
                    priority
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 340px, (max-width: 1280px) 320px, 370px"
                  />
                )}
              </div>
            </div>
          </div>

          {/* ── RIGHT: TEXT CONTENT ── */}
          <div className="flex w-full flex-col">

            {/* Name — large display */}
            <h1 
              className="text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl mb-4"
              style={{ color: "#FFFFFF" }}
            >
              {hero.name}
            </h1>

            {/* Subtitle — muted, one size smaller */}
            <p 
              className="mt-2 max-w-xl text-xl leading-snug sm:text-2xl md:text-3xl font-light"
              style={{ color: "rgba(255, 255, 255, 0.95)" }}
            >
              {hero.subtitle || hero.title}
            </p>

            {/* Credentials pill — combined credentials; GMC: xxxx */}
            {credentialPill && (
              <div 
                className="mt-6 inline-flex w-fit items-center rounded-full border px-6 py-2.5 text-sm sm:text-base font-light"
                style={{ borderColor: "rgba(255, 255, 255, 0.4)", color: "#FFFFFF" }}
              >
                {credentialPill}
              </div>
            )}

            {/* ── CTA BUTTONS ── */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={data.booking?.calendly || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-6 py-3 text-sm font-medium transition sm:px-8 sm:py-3.5"
                style={{ backgroundColor: "#F3EFE7", color: "#35271C" }}
              >
                Book a Free Discovery Session
              </Link>

              <a
                href="https://wa.me/447432211096"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-6 py-3 text-sm font-medium transition sm:px-8 sm:py-3.5"
                style={{ backgroundColor: "#F3EFE7", color: "#35271C" }}
              >
                WhatsApp
              </a>

              <a
                href="tel:+447432211096"
                className="rounded-full px-6 py-3 text-sm font-medium transition sm:px-8 sm:py-3.5"
                style={{ backgroundColor: "#F3EFE7", color: "#35271C" }}
              >
                Call
              </a>
            </div>

            {/* Microcopy */}
            <p 
              className="mt-6 max-w-2xl text-xs italic leading-relaxed sm:text-sm font-light"
              style={{ color: "rgba(255, 255, 255, 0.8)" }}
            >
              Secure booking. No referral needed. We accept all major insurance
              providers, including Bupa, Aviva, Cigna, WPA, Simplyhealth,
              Allianz and CS Healthcare, and you also have the option of paying
              for treatment yourself.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}