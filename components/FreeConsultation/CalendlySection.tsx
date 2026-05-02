'use client';

import React from 'react';

interface CalendlySectionProps {
  data: {
    title: string;
    subtitle: string;
    url: string;
  };
}

const CalendlySection = ({ data }: CalendlySectionProps) => {
  return (
    <section id="calendly" className="py-20 bg-[#F3EAD8] px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading text-[#2C1810] mb-4">
            {data.subtitle}
          </h2>
          <div className="w-20 h-1 bg-[#A67C52] mx-auto opacity-50" />
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden min-h-[700px] border border-[#A67C52]/10">
          <iframe
            src={`${data.url}?hide_landing_page_details=1&hide_gdpr_banner=1`}
            width="100%"
            height="700"
            frameBorder="0"
            title={data.title}
            className="w-full h-[700px]"
          ></iframe>
        </div>
        
        <p className="text-center mt-8 text-[#2C1810]/60 text-sm font-sans italic">
          * Secure and private booking via Calendly
        </p>
      </div>
    </section>
  );
};

export default CalendlySection;
