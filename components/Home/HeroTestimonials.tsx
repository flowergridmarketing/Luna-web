import { getImageUrl } from "@/lib/utils";
import MovingTestimonials from "../ui/MovingTestimonials";

export interface Testimonial {
    id: number;
    quote: string;
    author: string;
    image?: string;
    rating: number;
}

const defaultTestimonials: Testimonial[] = [
    {
        id: 1,
        quote: "Before coming to Flowergrid, I struggled with daily stress and imbalance. Their holistic wellness programmes helped me restore harmony in my life and feel truly supported.",
        author: "Sarah Thompson, Surrey",
        image: "https://images.unsplash.com/photo-1629224181689-3fa4e728d5ef?q=80&w=388&auto=format&fit=crop",
        rating: 5,
    },
    {
        id: 2,
        quote: "The life and transformation coaching at Flowergrid was tailored to my needs. Each session helped me build clarity, confidence, and sustainable change in both my personal and professional life.",
        author: "James Morgan, London",
        image: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&w=200&h=200&auto=format&fit=crop",
        rating: 5,
    },
    {
        id: 3,
        quote: "My holistic wellbeing has improved significantly since joining Flowergrid. I feel calmer, more focused, and better equipped to manage my mind, body, and spirit.",
        author: "Emily Carter, Manchester",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=688&auto=format&fit=crop",
        rating: 5,
    },
    {
        id: 4,
        quote: "I felt genuinely understood from day one. The guidance I received helped me reconnect with myself and achieve a deeper level of mind body spirit wellness.",
        author: "David Wilson, UK",
        image: "https://images.unsplash.com/photo-1603775493298-e06a5f21e46c?q=80&w=870&auto=format&fit=crop",
        rating: 5,
    },
    {
        id: 5,
        quote: "I had tried several holistic wellness programmes before, but Flowergrid was different. The personalised approach helped me make real, lasting changes in my life.",
        author: "Olivia Bennett, Kent",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&auto=format&fit=crop",
        rating: 5,
    },
    {
        id: 6,
        quote: "Flowergrid's integrative wellness approach reminded me that healing is a personal journey. Their support allowed me to progress at my own pace and feel fully restored.",
        author: "Michael Foster, Brighton",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop",
        rating: 5,
    },
    {
        id: 7,
        quote: "The combination of life and transformation coaching with holistic practices at Flowergrid helped me shift my mindset, improve emotional wellbeing, and achieve meaningful personal growth.",
        author: "Charlotte Hughes, London",
        image: "https://images.unsplash.com/photo-1521146764736-56c929d59c83?q=80&w=200&h=200&auto=format&fit=crop",
        rating: 5,
    },
];

interface HeroTestimonialsProps {
    testimonials?: Testimonial[];
    title?: string;
    subtitle?: string;
    textSize?: string;
}

export default function HeroTestimonials({
    testimonials = defaultTestimonials,
    title = "Client Experiences with Flowergrid",
    subtitle = "Flowergrid's Testimonials",
    textSize = "text-4xl md:text-6xl"

}: HeroTestimonialsProps) {

    if (title === "What clients say about Flowergrid in Croydon") {
        textSize = "text-2xl md:text-4xl"
    }


    return (
        <section className="w-full h-auto py-10 bg-[#F3EAD8] overflow-hidden">
            <div className="max-w-3xl mx-auto px-4 mb-30 md:mb-10 mt-5 text-center">
                <h2 className={`${textSize} font-heading font-normal uppercase tracking-wide mt-30 md:mt-0 mb-4 text-center`}>
                    {title}
                </h2>
                <p className="text-black! text-lg md:text-xl font-sans uppercase tracking-widest text-center">
                    {subtitle}
                </p>
            </div>

            <MovingTestimonials testimonials={testimonials} />
        </section>
    );
}