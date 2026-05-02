// components/practitioner/IntroDetails.tsx

type Props = {
  data: any;
};

export default function IntroDetails({ data }: Props) {
  const formatsList = [];
  if (data.availability?.online) formatsList.push("Online consults");
  if (data.availability?.inPerson) {
    const locationStr = data.availability?.location ? ` (${data.availability.location})` : "";
    formatsList.push(`In-person on request${locationStr}`);
  }
  const formats = formatsList.join("; ");

  const languages = data.languages && data.languages.length > 0 
    ? data.languages.join(", ") 
    : "English";

  const isAccepting = data.availability?.acceptingClients;

  return (
    <div className="w-full flex flex-col items-start text-left">
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-playfair text-[#171717] leading-tight max-w-3xl">
        {data.hero?.subtitle || data.hero?.headline}
      </h2>


      {/* Description */}
      <p className="mt-4 md:mt-6 text-base md:text-lg font-sans text-[#5B5B5B] leading-relaxed max-w-2xl">
        {data.hero?.description || data.hero?.subtext}
      </p>

      {/* Info Tags / Badges Section */}
      <div className="mt-8 md:mt-12 flex flex-col space-y-3 w-full">
        {/* Formats Badge */}
        {formats && (
          <div className="flex items-stretch w-fit bg-[#E9D8B4] rounded-md overflow-hidden">
            <div className="w-[6px] bg-[#A7683A] shrink-0" />
            <div className="px-5 py-2.5 text-[#171717] font-medium text-sm md:text-base leading-tight">
              <span className="font-semibold">Formats:</span> {formats}
            </div>
          </div>
        )}

        {/* Languages Badge */}
        {languages && (
          <div className="flex items-stretch w-fit bg-[#E9D8B4] rounded-md overflow-hidden">
            <div className="w-[6px] bg-[#A7683A] shrink-0" />
            <div className="px-5 py-2.5 text-[#171717] font-medium text-sm md:text-base leading-tight">
              <span className="font-semibold">Languages:</span> {languages}
            </div>
          </div>
        )}

        {/* Availability Badge */}
        {isAccepting && (
          <div className="flex items-stretch w-fit bg-[#E9D8B4] rounded-md overflow-hidden">
            <div className="w-[6px] bg-[#A7683A] shrink-0" />
            <div className="px-5 py-2.5 text-[#171717] font-medium text-sm md:text-base leading-tight">
              Accepting new clients
            </div>
          </div>
        )}
      </div>

    </div>
  );
}