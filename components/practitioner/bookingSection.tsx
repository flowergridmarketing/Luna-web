import Link from "next/link";
import { getImageUrl } from "@/lib/utils";
import Image from "next/image";

type Props = {
  data: {
    booking?: {
      heading: string;
      description: string;
      calendly: string;
    };
    availability?: {
      online: boolean;
      inPerson: boolean;
      location: string;
    };
  };
};

const LotusIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#644D36] shrink-0 mt-1"
  >
    <path d="M12 22C6.5 17 4 13.5 4 10a8 8 0 0 1 16 0c0 3.5-2.5 7-8 12z" />
    <path d="M12 22C10.5 18 10.5 14 12 10" />
    <path d="M5.5 13.5C3.5 11.5 2 9.5 2 7.5a5.5 5.5 0 0 1 11 0" />
    <path d="M18.5 13.5C20.5 11.5 22 9.5 22 7.5a5.5 5.5 0 0 0-11 0" />
  </svg>
);

export default function BookingSection({ data }: Props) {
  const booking = data.booking;
  const availability = data.availability;

  if (!booking) return null;

  return (
    <section id="booking" className="w-full bg-[#E6DFD4] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center xl:gap-20">
          
          {/* LEFT: heading + info */}
          <div className="flex flex-col">
            <h2 className="font-heading text-4xl leading-tight text-[#171717] md:text-5xl lg:text-[44px] mb-8">
              {booking.heading}
            </h2>
            <p className="max-w-2xl text-[17px] leading-relaxed text-[#171717] mb-12">
              {booking.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
              
              {/* Block 1 */}
              <div className="flex items-start gap-3">
                <LotusIcon />
                <div>
                  <h4 className="font-semibold text-lg text-[#171717] mb-2">Availability & Session Details</h4>
                  <p className="text-[15px] leading-relaxed text-[#171717]">
                    Flexible sessions to fit your schedule, available online or in person.
                  </p>
                </div>
              </div>

              {/* Block 2 */}
              <div className="flex items-start gap-3">
                <LotusIcon />
                <div>
                  <h4 className="font-semibold text-lg text-[#171717] mb-2">Booking:</h4>
                  <p className="text-[15px] leading-relaxed text-[#171717]">
                    You can secure your preferred slot directly via Calendly
                  </p>
                </div>
              </div>

              {/* Block 3 */}
              <div className="flex items-start gap-3">
                <LotusIcon />
                <div>
                  <h4 className="font-semibold text-lg text-[#171717] mb-3">Time Zones Supported:</h4>
                  <ul className="text-[15px] leading-relaxed text-[#171717] space-y-1">
                    <li>· UK (GMT)</li>
                    <li>· Gulf (GST)</li>
                    <li>· US (EST/PST)</li>
                  </ul>
                </div>
              </div>

              {/* Block 4 */}
              <div className="flex items-start gap-3">
                <LotusIcon />
                <div>
                  <h4 className="font-semibold text-lg text-[#171717] mb-3">Session Formats:</h4>
                  <ul className="text-[15px] leading-relaxed text-[#171717] space-y-1">
                    <li>· Online via Zoom - available globally</li>
                    <li>· In-person - {availability?.location || "Coulsdon, UK"}</li>
                    <li className="pt-2">Duration: 60-90 minutes per session</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT: Calendly iframe */}
          <div className="w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-xl rounded-2xl bg-white overflow-hidden shadow-lg h-[650px]">
              <iframe
                src={booking.calendly}
                width="100%"
                height="100%"
                frameBorder="0"
                className="w-full h-full"
                title="Calendly Scheduling"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
