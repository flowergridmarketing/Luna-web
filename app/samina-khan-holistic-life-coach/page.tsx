import type { Metadata } from 'next'
import PersonHero from '@/components/About/person/PersonHero'
import PersonBio from '@/components/About/person/Bio'
import ScrollingTextReveal from '@/components/ui/ScrollingTextReveal'
import WorkIncludes from '@/components/About/person/WorkIncludes'
import { getPersonBySlug } from '../data/about'
import FlowerGridSection from '@/components/About/person/FlowerGridSection'
import JourneySection from '@/components/About/person/JourneySection'
import Connect from '@/components/About/person/Connect'
import Qualifications from '@/components/About/person/Qualifications'
import Support from '@/components/About/person/Support'

export const metadata: Metadata = {
    metadataBase: new URL("https://flowergrid.co.uk"),

    title: "Samina Khan | Holistic Life Coach in Croydon | Flowergrid",

    description:
        "Meet Samina Khan, a Holistic Life Coach in Croydon with 20+ years of experience. Specialising in life and transformation coaching, NLP, and emotional wellbeing.",

    keywords: [
        "Holistic Life Coach in Croydon",
        "Life and Transformation Coaching",
        "Mind Body Spirit Coaching",
        "Emotional Wellbeing Coaching",
        "NLP Coaching Croydon",
        "Samina Khan Coach"
    ],

    authors: [{ name: "Samina Khan" }],

    alternates: {
        canonical:
            "https://flowergrid.co.uk/samina-khan-holistic-life-coach",
    },

    openGraph: {
        title:
            "Samina Khan | Holistic Life Coach in Croydon | Flowergrid",
        description:
            "Holistic life coach in Croydon offering life and transformation coaching, NLP, and emotional wellbeing support for mind, body and spirit.",
        url: "https://flowergrid.co.uk/samina-khan-holistic-life-coach",
        siteName: "Flowergrid",
        locale: "en_GB",
        type: "profile",
    },

    robots: {
        index: true,
        follow: true,
    },

    category: "Holistic Life Coaching",
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Samina Khan",
    jobTitle: "Holistic Life Coach",
    worksFor: {
        "@type": "Organization",
        name: "Flowergrid",
        url: "https://flowergrid.co.uk"
    },
    url: "https://flowergrid.co.uk/samina-khan-holistic-life-coach",
    address: {
        "@type": "PostalAddress",
        addressLocality: "Croydon",
        addressCountry: "GB"
    },
    sameAs: []
};

const SaminaPage = () => {
    const slug = 'person1';
    const personData = getPersonBySlug(slug);

    if (!personData) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Person Not Found</h1>
                    <p className="text-xl text-gray-600">The person you&apos;re looking for doesn&apos;t exist.</p>
                </div>
            </div>
        );
    }

    return (
        <div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <PersonHero
                imageSrc={personData.hero.imageSrc}
                text={personData.hero.text}
                imageClassName={personData.hero.imageSize}

            />
            <PersonBio
                imageSrc={personData.bio.imageSrc}
                bio={personData.bio.bioText}
                title={personData.bio.title}
            />
            {personData?.scrollingText?.phrases && (
                <ScrollingTextReveal
                    phrases={personData.scrollingText.phrases}
                />
            )}

            <WorkIncludes
                description={personData.workIncludes.description}
                steps={personData.workIncludes.steps}
                title={personData.workIncludes.title}
                description2={personData.workIncludes.description2}
                title2={personData.workIncludes.title2}
            />

            {personData?.flowerWithText && (
                <FlowerGridSection
                    text={personData.flowerWithText.description}
                />
            )}

            {personData?.journeySection && (
                <JourneySection
                    title={personData.journeySection.title}
                    description={personData.journeySection.description}
                    items={personData.journeySection.flowerWithCard}
                />
            )}

            <Qualifications qualifications={personData.qualifications} educations={personData.educations} vision={personData?.vision} />

            <Support data={personData.support} />

            <Connect
                image={personData.connect.image}
                title={personData.connect.title}
                description={personData.connect.description}
            />
        </div>
    )
}

export default SaminaPage
