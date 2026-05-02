import practitioners from "@/app/data/practitioners/practitioners";
import FaqSection from "@/components/Contact/FAQSection";
import Hero from "@/components/practitioner/hero";
import IntroDetails from "@/components/practitioner/indrodetails";
import WhoIWorkWith from "@/components/practitioner/whoIWorkWith";
import Expertise from "@/components/practitioner/expertise";
import BookingSection from "@/components/practitioner/bookingSection";
import HeroTestimonials from "@/components/Home/HeroTestimonials";
import PoliciesSection from "@/components/practitioner/policies";
import PractitionerLatestWriting from "@/components/practitioner/latestWriting";
import DiscoveryCTA from "@/components/practitioner/discoveryCTA";
import ContactForm from "@/components/Contact/ContactForm";
import policies from "@/app/data/practitioners/policies";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Connect from "@/components/About/person/Connect";
import { getImageUrl } from "@/lib/utils";
import SidebarProfile from "@/components/practitioner/sidebarProfile";
import JourneySection from "@/components/About/person/JourneySection";
import BlogSection from "@/components/Home/BlogSection";

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

export async function generateStaticParams() {
    return practitioners.map((item: any) => ({
        slug: item.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const practitioner = practitioners.find((item: any) => item.slug === slug);
    console.log("Generating metadata for slug:", slug, "Found practitioner:", practitioner);

    if (!practitioner) {
        return { title: "Practitioner Not Found" };
    }

    return {
        title: practitioner.seo?.title,
        description: practitioner.seo?.description,
    };
}

export default async function PractitionerPage({ params }: Props) {
    const { slug } = await params;
    console.log("Rendering PractitionerPage for slug:", slug);

    const practitioner = practitioners.find((item: any) => item.slug === slug);
    if (!practitioner) {
        console.log("Practitioner not found for slug:", slug);
        return notFound();
    }
    console.log("Found practitioner:", practitioner.hero?.name);

    const randomImages = [
        "https://images.unsplash.com/photo-1552960133-edd1f3528bf7?w=500&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1621235206030-2a036eef7ae6?q=80&w=387&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1655618569632-b848347d3653?q=80&w=385&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop",
    ];

    const practitionerTestimonials =
        practitioner.testimonials?.map((item: any, index: number) => ({
            id: index + 1,
            quote: item.text,
            author: `${item.name}${item.location ? `, ${item.location}` : ""}`,
            image: randomImages[index % randomImages.length],
            rating: 5,
        })) || [];

    const hasFaq = practitioner.faq && practitioner.faq.length > 0;
    const hasBlogs = practitioner.blogs && practitioner.blogs.length > 0;
    const hasTestimonials = practitionerTestimonials.length > 0;

    return (
        <main className="min-h-screen bg-background overflow-x-hidden">

            {/* 1. HERO — name, title, credentials, rating, CTA */}
            <Hero data={practitioner} />

            {/* MIDDLE SECTION - Left Content + Right Sidebar */}
            <section className="w-full bg-[#F3EAD8] py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-24 relative items-start">
                        {/* Left Column Content - Independently scrollable on desktop */}
                        <div className="flex-1 flex flex-col gap-16 md:gap-24 min-w-0 scrollbar-hidden lg:h-[85vh] lg:overflow-y-auto lg:pr-8">
                            {/* 2. INTRO — subtitle, description, tags, session info */}
                            <IntroDetails data={practitioner} />

                            {/* 3. WHO I WORK WITH */}
                            {practitioner.whoIWorkWith && (
                                <WhoIWorkWith data={practitioner} />
                            )}

                            {/* 4. EXPERTISE + FLOWERGRID APPROACH */}
                            {(practitioner.expertise || practitioner.flowergridApproach) && (
                                <Expertise data={practitioner} />
                            )}
                        </div>

                        {/* Right Sidebar */}
                        <div className="w-full lg:w-[380px] xl:w-[420px] shrink-0 lg:sticky lg:top-28">
                            <SidebarProfile data={practitioner} />
                        </div>
                    </div>
                </div>
            </section>

            {practitioner.firstSession && (
                <JourneySection
                    title={practitioner.firstSession.title}
                    description={practitioner.firstSession.description}
                    items={practitioner.firstSession.flowerWithCard as any}
                />
            )}

            {/* 6. BOOKING + CALENDLY + SESSION DETAILS */}
            {practitioner.booking && (
                <BookingSection data={practitioner} />
            )}

            {/* 7. TESTIMONIALS */}
            {hasTestimonials && (
                <div className="bg-[#E6DFD4]">
                    <HeroTestimonials
                        testimonials={practitionerTestimonials}
                        title={`WHAT OUR CLIENTS SAY ABOUT US`}
                        subtitle="CLIENT EXPERIENCES"
                    />
                </div>
            )}

            {/* 8. POLICIES */}
            <PoliciesSection policies={policies} />

            {/* 9. CONTACT FORM */}
            <ContactForm />

            {/* 10. LATEST WRITING */}
            {hasBlogs && (
                <BlogSection headerTitle='Latest Writings' />
            )}

            {/* 11. FAQ */}
            {hasFaq && (
                <div className="bg-[#E6DFD4]">
                    <FaqSection
                        faqs={practitioner.faq.map((item: any, index: number) => ({
                            id: index + 1,
                            question: item.question,
                            answer: item.answer,
                        }))}
                        title="Frequently Asked Questions"
                    />
                </div>
            )}

            {/* 12. DISCOVERY CTA */}
            <Connect
                image={getImageUrl("indivdualPractioner/individualpractioner.jpg")}
                title="TO DATE THOUSANDS OF HOURS OF THERAPY DONE !"
                btnText="Book a session Call"
                description=""
            />

        </main>
    );
}



