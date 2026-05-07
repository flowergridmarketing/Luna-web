import { nudratChagtai } from "./nudratChagtai";
import { drHanaPatel } from "./drHanaPatel";
import { ayshaIqbal } from "./ayshaIqbal";
import { drAylaGokce } from "./drAylaGokce";
import { tarunSharma } from "./tarunSharma";
import { angelinaRay } from "./angelinaRay";
import { entwine } from "./entwine";
import { tamkinRiaz } from "./tamkinRiaz";
import { yvonneHewitt } from "./yvonneHewitt";
import { drRavinder } from "./drRavinder";
import { runaBoolaky } from "./runaBoolaky";
import { ricoWagnerCaleap } from "./ricoWagnerCaleap";
import { rebecca } from "./rebecca";
import { husnaHoque } from "./husnaHoque";
import { uzma } from "./uzma";
import { drRenukaMarley } from "./drRenukaMarley";
import { getImageUrl } from "@/lib/utils";

const allPractitionersData = [
  nudratChagtai,
  drHanaPatel,
  ayshaIqbal,
  drAylaGokce,
  tarunSharma,
  angelinaRay,
  entwine,
  tamkinRiaz,
  yvonneHewitt,
  drRavinder,
  runaBoolaky,
  ricoWagnerCaleap,
  rebecca,
  husnaHoque,
  uzma,
  drRenukaMarley,
];

const practitioners = allPractitionersData.map((p: any) => {
  return {
    slug: p.slug,
    seo: {
      title: p.seo?.title || `${p.profile?.name} | ${p.profile?.title} | Flowergrid`,
      description: p.seo?.description || p.hero?.subtext || ""
    },
    hero: {
      name: p.profile?.name,
      title: p.profile?.title,
      subtitle: p.hero?.headline,
      description: p.hero?.subtext,
      image: p.profile?.image
    },
    introSummary: p.sections?.introduction,
    credentials: p.profile?.credentials || p.profile?.experience,
    registration: p.profile?.gmc ? `GMC: ${p.profile.gmc}` : "", 
    rating: p.profile?.rating || 5,
    reviewCount: p.profile?.reviewCount || 52,
    badges: [
      
      ...p.profile?.languages
    ].filter(Boolean),
    tags: p.hero?.tags || [],
    availability: {
      online: true,
      inPerson: !!(p.profile?.location?.includes("person") || p.profile?.location?.includes("Croydon") || p.profile?.location?.includes("London")),
      location: p.profile?.location,
      acceptingClients: p.profile?.availability === "Accepting new clients"
    },
    languages: p.profile?.languages || ["English"],
    insurance: [
      "Bupa", "Aviva", "Cigna", "WPA", "Simply Health", "Allianz", "CS Healthcare", "Paying for myself"
    ],
    whoIWorkWith: {
      intro: p.sections?.whoIWorkWithIntro,
      items: p.sections?.whoIWorkWith || []
    },
    expertise: {
      heading: "Clinical & Coaching Expertise",
      content: p.sections?.clinicalExpertise
    },
    flowergridApproach: {
      heading: "What makes Flowergrid different",
      content: p.sections?.differentiators
    },
    firstSession: (p.firstSession || p.journeySection || p.JourneySection) ? (p.firstSession || p.journeySection || p.JourneySection) : (p.expectations ? {
      title: "What to Expect in Your First Session",
      description: "",
      flowerWithCard: [
        { type: 'flower', image: getImageUrl("about/person1/3a.png"), alt: 'Flower 1' },
        { type: 'card', title: p.expectations[0]?.title, description: p.expectations[0]?.description },
        { type: 'flower', image: getImageUrl("about/person1/3b.png"), alt: 'Flower 2' },
        { type: 'card', title: p.expectations[1]?.title, description: p.expectations[1]?.description },
        { type: 'card', title: p.expectations[2]?.title, description: p.expectations[2]?.description },
        { type: 'flower', image: getImageUrl("about/person1/3c.png"), alt: 'Flower 3' },
        { type: 'card', title: p.expectations[3]?.title, description: p.expectations[3]?.description },
        { type: 'flower', image: getImageUrl("about/person1/3d.png"), alt: 'Flower 4' },
      ]
    } : null),
    booking: {
      heading: p.booking?.title,
      description: p.booking?.description,
      calendly: p.booking?.cta?.calendly || "https://calendly.com/",
      video: p.profile?.cta?.video,
      microcopy: p.profile?.microcopy,
      ctaBox: p.profile?.ctaBox,
      buttons: p.profile?.ctaButtons || [
        { label: "Book consultation", href: p.booking?.cta?.calendly || "https://calendly.com/", isExternal: true, variant: "primary" },
        ...(p.profile?.cta?.video ? [{ label: "Watch presentation video", href: p.profile.cta.video, isExternal: true, variant: "outline" }] : []),
        { label: "WhatsApp", href: "https://wa.me/447432211096", isExternal: true, variant: "primary" },
        { label: "Call", href: "tel:+447432211096", isExternal: true, variant: "primary" }
      ]
    },
    testimonials: p.testimonials || [],
    faq: p.faq || [],
    blogs: p.relatedServices || []
  };
});

export default practitioners;