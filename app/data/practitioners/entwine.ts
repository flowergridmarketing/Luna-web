import { getImageUrl } from "@/lib/utils";
export const entwine = {
  slug: "entwine-at-home-salon-skincare",

  seo: {
    title: "Entwine | Professional At-Home Salon Skincare | Flowergrid",
    description: "Entwine at Flowergrid offers professional at-home salon skincare with luxury ampoules for glass skin. Cruelty free, sustainable beauty with UK delivery. Book a free discovery call."
  },

  profile: {
    name: "Entwine",
    title: "Luxury at home facials and skincare advice, created for radiant, healthy looking skin.",
    image: "https://ik.imagekit.io/z6xh4w9tp/about/team/entwine.png?updatedAt=1777472825136",
    experience: "Professional Skincare",
    languages: ["English"],
    location: "Online consults; In-person on request (Croydon, South London (Coulsdon Rd, Coulsdon CR5 2JA))",
    availability: "Available now",
    ctaButtons: [
      { label: "Explore Entwine Products", href: "/booking", variant: "primary" }
    ],
    cta: {
      primary: "Book Consultation",
    },
    ctaBox: {
      title: "Not sure what your skin needs?",
      description: "Get a clear starting point with a free Flowergrid discovery call and a simple routine recommendation.",
      btnText: "Book a Free Discovery Call"
    }
  },

  hero: {
    headline: "Luxury at home facials and skincare advice, created for radiant, healthy looking skin.",
    subtext: "Entwine is designed for people who want a simple, high performance skincare routine at home. The range is built around concentrated ampoules that support glow, hydration and a smoother looking complexion, without adding ten new steps to your day.",
    tags: [
      "At-Home Salon Skincare",
      "Glass Skin Treatment",
      "Professional Ampoules",
      "Sustainable Beauty",
      "Cruelty-Free Skincare",
      "Vegan Beauty UK",
      "Facial Rejuvenation",
      "Aesthetic Maintenance"
    ],
  },

  sections: {
    introduction: "Entwine is designed for people who want a simple, high performance skincare routine at home. The range is built around concentrated ampoules that support glow, hydration and a smoother looking complexion, without adding ten new steps to your day.",

    whoIWorkWithIntro: "We work with individuals who want the high-performance results of a clinical facial without the need for constant salon visits. If you value transparency, sustainability, and professional-grade ingredients, Entwine is designed for your routine.",

    whoIWorkWith: [
      "People seeking \"glass skin\" results and a luminous, radiant complexion",
      "Individuals wanting professional-grade skincare that is easy to use at home",
      "Busy professionals who need an effective, 3-step skincare regime",
      "Those prioritising cruelty-free, vegetarian, and sustainable beauty products",
      "People looking for gender-fluid skincare that works for all skin types",
      "Individuals wanting to maintain the results of clinical aesthetic treatments",
      "Anyone who values honesty and corporate social responsibility in their beauty choices"
    ],

    clinicalExpertise: "Entwine is passionate about delivering professional at-home salon skincare results through supercharged, highly potent active ampoules. Formulated in a leading German laboratory, our creations are designed to give you luminous radiant skin from the comfort of your own home. We believe in high-performance beauty that is also socially responsible. This means every product in our range is cruelty-free, vegetarian, and sustainable.\n\nWe focus on natural blending to create skin-loving beauty products that empower our community to be the best version of themselves. Whether you are using our 7-day radiant system or the signature 3-step regime, the goal is always a professional glass skin finish. Diversity and inclusion are at the centre of what we do, which is why our products are gender-fluid and built for all.\n\nAt Flowergrid Holistic Wellness Centre Croydon, we provide the expert guidance for this luxury maintenance, ensuring your skincare routine aligns with your wider wellbeing. By putting honesty and transparency first, we offer a more sustainable lifestyle choice for those who care for the planet just as much as their skin. We believe that professional-grade results should be accessible, ethical, and fully integrated into your daily self-care.",

    differentiators: "Flowergrid is a holistic wellness centre in Croydon supporting mind, body and wellbeing. Skincare is not just cosmetic for many people, it is confidence, self care, and the feeling of looking after yourself properly.\n\nEntwine fits into our wider approach because it supports at home routines that are realistic. If you want personalised guidance, you can also book a free Flowergrid discovery call and we will help you choose the right next step, whether that is skincare support, nutrition, stress support, or wider wellness care."
  },

    firstSession: {
    title: "What to Expect in Your First Session",
    description: "We begin with a gentle introduction to understand your needs and set a clear path forward.",
    flowerWithCard: [
      {
        type: "flower",
        image: getImageUrl("about/person1/3a.png"),
        alt: "Flower Sketch",
      },
      {
        type: "card",
        number: "01",
        title: "Start with your skin goal",
        description: "Choose what you want most right now: glow, hydration, refresh, or a full routine.",
      },
      {
        type: "flower",
        image: getImageUrl("about/person1/3b.png"),
        alt: "Flower Sketch",
      },
      {
        type: "card",
        number: "02",
        title: "Prep your skin",
        description: "Cleanse gently and create a calm moment, so your skin is ready to absorb.",
      },
      {
        type: "card",
        number: "03",
        title: "Apply the active ampoule",
        description: "Use the ampoule as directed, smoothing across face and neck with slow, even pressure.",
      },
      {
        type: "flower",
        image: getImageUrl("about/person1/3c.png"),
        alt: "Flower Sketch",
      },
      {
        type: "card",
        number: "04",
        title: "Integrated Wellbeing Support",
        description: "We link your skincare results to your wider nutrition, habits, and stress management goals.",
      },
      {
        type: "flower",
        image: getImageUrl("about/person1/3d.png"),
        alt: "Flower Sketch",
      },
    ],
  },

  booking: {
    title: "Start your radiant skin journey",
    description: "Explore our range of consciously created skincare or book a consultation to find the right treatment plan for your skin goals.",

    cta: {
      primary: "Explore Product Range",
      secondary: "Book a Free Discovery Call",
      calendly: "/booking",
    },

    sections: [
      {
        title: "Availability & Session Details",
        description: "Flexible sessions to fit your schedule, available online or in person.",
      },
      {
        title: "Session Formats",
        items: [
          "Online via Zoom - available globally",
          "In-person - Coulsdon, UK",
        ],
      },
      {
        title: "Time Zones Supported",
        items: ["UK (GMT)", "Gulf (GST)", "US (EST/PST)"],
      },
      {
        title: "Booking",
        description: "You can secure your preferred slot directly via Calendly.",
      },
    ],

    duration: "60-90 minutes per session",
  },

  testimonials: [
    {
      name: "Sarah Mitchell",
      location: "London",
      text: "I was looking for professional results at home and Entwine delivered. The supercharged ampoules are easy to use and gave me a genuine glass skin glow. It feels like a spa experience in my own bathroom."
    },
    {
      name: "David Thompson",
      location: "Surrey",
      text: "What I love about Entwine is the transparency. I know the ingredients are high-quality and the values are right. My skin feels revived and much more resilient after using the 7-day radiant system."
    },
    {
      name: "Anita Kapoor",
      location: "Croydon",
      text: "Working with Samina at Flowergrid and using the Entwine at-home salon skincare has changed my morning routine. I feel more confident in my skin, and the results are fast and very noticeable."
    },
    {
      name: "James Miller",
      location: "UK",
      text: "Finding gender-fluid, sustainable skincare that actually works is rare. The 'Relift' ampoules give me a professional, luminous complexion before big meetings. I highly recommend the Entwine range for anyone seeking quality."
    }
  ],

  faq: [
    {
      question: "What is Entwine and how does it work?",
      answer: "Entwine is a luxury at home facial routine built around active ampoules. The products are designed to support radiant, luminous skin through a simple, repeatable regime you can do at home."
    },
    {
      question: "Are Entwine products cruelty free and vegetarian?",
      answer: "Yes. Entwine is cruelty free and vegetarian, with a focus on transparency and more responsible choices across formulation, sourcing, and production."
    },
    {
      question: "Is Entwine suitable for all genders and skin types?",
      answer: "Entwine is gender fluid and designed for anyone who wants healthier looking skin. Skin is individual, so it’s best to introduce new products gradually and track how your skin responds."
    },
    {
      question: "What does “glass skin” mean and can Entwine help with it?",
      answer: "Glass skin usually refers to a smooth, hydrated, radiant complexion. Many people use Entwine’s active ampoules to support glow and a more even looking finish as part of their at home facial routine."
    },
    {
      question: "How do I choose the right Entwine routine for my skin?",
      answer: "Start with your main goal, such as glow, refresh, or a full three step regime. If you are unsure, you can contact Flowergrid and we can help you choose a simple starting plan that fits your lifestyle."
    },
    {
      question: "Can Flowergrid support me beyond skincare?",
      answer: "Yes. Flowergrid is a holistic wellness centre in Croydon and we support mind, body and wellbeing. If your skin concerns link to stress, sleep, or confidence, we can also recommend supportive services alongside your routine."
    },
    {
      question: "Can I speak to Samina Khan for guidance before I buy?",
      answer: "Yes. If you want a clear starting point, you can book a free discovery call with Samina Khan through Flowergrid. She can help you choose a simple routine and point you to wider wellbeing support if it’s useful."
    }
  ],

  relatedServices: [
    "skincare",
    "glass-skin",
    "wellness",
    "holistic-beauty"
  ],
};
