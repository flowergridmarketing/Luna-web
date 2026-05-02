import React from 'react';

interface BrandSectionData {
  title: string;
  descriptionLeft: string;
  descriptionRight: string;
}

interface BrandValueSectionProps {
  data: BrandSectionData;
}

const BrandValueSection: React.FC<BrandValueSectionProps> = ({ data }) => {
  return (
    <section className="bg-background py-20 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading text-[#111111] leading-[1.05] tracking-tight max-w-4xl">
            {data.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-[#3D3D3D] leading-relaxed font-light">
              {data.descriptionLeft}
            </p>
          </div>
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-[#3D3D3D] leading-relaxed font-light">
              {data.descriptionRight}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandValueSection;
