type Props = {
  data: {
    expertise?: {
      heading: string;
      content: string;
    };
    flowergridApproach?: {
      heading: string;
      content: string;
    };
  };
};

export default function Expertise({ data }: Props) {
  const expertise = data.expertise;
  const approach = data.flowergridApproach;

  if (!expertise && !approach) return null;

  return (
    <div className="w-full flex flex-col gap-24">
      {/* Expertise block */}
      {expertise && (
        <div className="max-w-5xl">
          <h2 className="font-playfair font-serif text-4xl leading-tight text-[#111111] md:text-5xl lg:text-7xl mb-10 tracking-tight">
            {expertise.heading}
          </h2>
          <p className="text-lg leading-relaxed text-[#3D3D3D] md:text-xl font-light whitespace-pre-line">
            {expertise.content}
          </p>
        </div>
      )}

      {/* Flowergrid Approach block */}
      {approach && (
        <div className="max-w-5xl">
          <h3 className="font-playfair font-serif text-4xl leading-tight text-[#111111] md:text-5xl lg:text-7xl mb-10 tracking-tight">
            {approach.heading}
          </h3>
          <p className="text-lg leading-relaxed text-[#3D3D3D] md:text-xl font-light whitespace-pre-line">
            {approach.content}
          </p>
        </div>
      )}
    </div>
  );
}
