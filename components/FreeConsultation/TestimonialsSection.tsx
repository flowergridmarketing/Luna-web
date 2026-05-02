import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialItem {
  name: string;
  location: string;
  text: string;
  rating: number;
}

interface TestimonialsData {
  title: string;
  items: TestimonialItem[];
}

interface TestimonialsSectionProps {
  data: TestimonialsData;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ data }) => {
  return (
    <section className="bg-[#EBE3D5] py-20 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-[#111111] leading-tight tracking-tight">
            {data.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {data.items.map((item, index) => (
            <div 
              key={index} 
              className="bg-white/40 backdrop-blur-sm p-8 md:p-10 rounded-[2rem] flex flex-col justify-between h-full border border-white/20 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#A88B60" color="#A88B60" />
                  ))}
                </div>

                {/* Review Text */}
                <blockquote className="text-[17px] md:text-[18px] text-[#3D3D3D] leading-relaxed font-light italic mb-8">
                  "{item.text}"
                </blockquote>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="flex flex-col">
                  <span className="font-bold text-[#111111] tracking-wide uppercase text-xs">
                    {item.name}
                  </span>
                  <span className="text-[13px] text-[#644D36] font-medium">
                    {item.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
