import { notFound } from "next/navigation";
import type { Metadata } from "next";
import services from "@/app/data/individualServices/individualServices";
import practitioners from "@/app/data/practitioners/practitioners";
import ServiceHero from "@/components/individualServices/home";
import MeetPractitioners from "@/components/individualServices/meetourpractioner";
import HeroTestimonials from "@/components/Home/HeroTestimonials";
import FaqSection from "@/components/Contact/FAQSection";
import ServiceIntroBar from "@/components/individualServices/serviceintro";
import ServiceApproach from "@/components/individualServices/serviceApproadh";
import ServiceBenefits from "@/components/individualServices/serviceBenefits";
import RelatedServices from "@/components/individualServices/relatedServices";
import ServiceJourney from "@/components/individualServices/serviceJourney";
import LatestWriting from "@/components/individualServices/latestWriting";
import SecondaryCTA from "@/components/individualServices/secondaryCTA";
import Link from "next/link";
import Connect from "@/components/About/person/Connect";
import { getImageUrl } from "@/lib/utils";

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

/* Generate static pages */
export async function generateStaticParams() {
    return services.map((service: any) => ({
        slug: service.slug,
    }));
}

/* Dynamic SEO */
export async function generateMetadata({
    params,
}: Props): Promise<Metadata> {
    const { slug } = await params;

    const service = services.find((item: any) => item.slug === slug);

    if (!service) {
        return {
            title: "Service Not Found",
        };
    }

    return {
        title: service.seo?.title,
        description: service.seo?.description,
    };
}

export default async function ServicePage({ params }: Props) {
    const { slug } = await params;

    const service = services.find((item: any) => item.slug === slug);

    if (!service) return notFound();

    const matchedPractitioners =
        service.practitioners?.map((slug: string) =>
            practitioners.find((p: any) => p.slug === slug)
        )
            .filter(Boolean)
            .map((item: any) => ({
                name: item.hero?.name,
                title: item.hero?.title,
                image: item.hero?.image,
                slug: item.slug,
                description: item.hero?.description,
            })) || [];

    const testimonialImages = [
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1552960133-edd1f3528bf7?q=80&w=300&auto=format&fit=crop",
    ];

    const testimonials =
        service.testimonials?.map((item: any, index: number) => ({
            id: index + 1,
            quote: item.text,
            author: `${item.name}, ${item.location}`,
            image: testimonialImages[index % testimonialImages.length],
            rating: 5,
        })) || [];

    return (
        <main className="min-h-screen bg-background">
            {/* 1. HERO */}
            <ServiceHero data={service} />

            {/* 2. INTRO BAR */}
            <ServiceIntroBar data={service} />

            {/* 3. APPROACH */}
            <ServiceApproach data={service} />

            {/* 4. PRACTITIONERS */}
            {matchedPractitioners.length > 0 && (
                <MeetPractitioners practitioners={matchedPractitioners} />
            )}

            {/* 5. BENEFITS ACCORDION */}
            <ServiceBenefits data={service} />

            {/* 6. RELATED SERVICES */}
            <RelatedServices data={
                (service.relatedServices?.map((slug: string) =>
                    services.find((s: any) => s.slug === slug)
                ).filter(Boolean) as any) || []
            } />

            {/* 7. JOURNEY (CURVED LINE) */}
            {service.journey?.steps?.length > 0 && (
                <div className="py-20 bg-background">
                    <div className="max-w-7xl mx-auto px-4 text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-heading text-text-heading mb-6">
                            Experiencing Your {service.hero.name} Journey at Flowergrid
                        </h2>
                        <p className="text-xl text-text-body max-w-3xl mx-auto mb-10">
                            {service.journey.subtitle}
                        </p>
                        <Link
                            href="#booking"
                            className="inline-flex bg-primary text-white px-8 py-4 rounded-full text-lg font-medium transition-transform hover:scale-105"
                        >
                            {service.journey.buttonText || "Book Your Session"}
                        </Link>
                    </div>
                    <ServiceJourney steps={service.journey.steps} />
                </div>
            )}

            {/* 8. TESTIMONIALS */}
            {testimonials.length > 0 && (
                <HeroTestimonials
                    testimonials={testimonials}
                    title={`Transformations from Our ${service.hero.name} Clients`}
                    subtitle="Client Experiences"
                />
            )}

            {/* 9. LATEST WRITING */}
            {service.blogs?.length > 0 && (
                <LatestWriting blogs={service.blogs} />
            )}

            {/* 10. FAQ */}
            {service.faq?.length > 0 && (
                <FaqSection
                    faqs={service.faq.map((item: any, index: number) => ({
                        id: index + 1,
                        question: item.question,
                        answer: item.answer,
                    }))}
                    title="Frequently Asked Questions"
                />
            )}

            <Connect image={getImageUrl("individualService/individualservice.jpg")} title="Take the first step toward balance with a free consultation.
" btnText='Book Free Consultation' description='' />


        </main>
    );
}