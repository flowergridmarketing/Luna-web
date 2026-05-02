type PolicyItem = {
  title: string;
  text: string;
};

type Props = {
  policies: PolicyItem[];
};

export default function PoliciesSection({ policies }: Props) {
  return (
    <section className="w-full bg-[#F5F1E9] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <h2 className="font-heading text-3xl text-text-heading md:text-5xl">
            Policies
          </h2>

          <p className="mt-4 text-base leading-relaxed text-text-body md:text-lg">
            To ensure a smooth and respectful experience for all clients,
            kindly review the following before booking.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 md:gap-6">
          {policies.map((item, index) => (
            <div
              key={index}
              className="flex flex-col rounded-3xl border border-black/5 bg-[#E5CCA1] p-8"
            >
              <h3 className="font-medium text-xl leading-tight text-text-heading md:text-2xl text-center">
                {item.title}
              </h3>

              <div className="my-5 h-[2px] w-12 mx-auto bg-black" />

              <p className="text-sm leading-relaxed text-text-heading/90 md:text-base text-center">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}