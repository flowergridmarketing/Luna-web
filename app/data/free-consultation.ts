import { getImageUrl } from "@/lib/utils";

export const freeConsultationData = {
  hero: {
    headline: "Free Consultation with\nSamina Khan at Flowergrid",
    subtext: "Helping you find clarity, balance, and a path forward through integrative mind, body, and spirit wellness programmes.",
    duration: "30 minutes discovery call on Zoom or over the Phone",
    cta: "Book Your Free Consultation",
    image: getImageUrl("about/person1/samina-pic.png")
  },
  calendly: {
    title: "Calendly Reservation",
    subtitle: "Calendly Reservation Page",
    url: "/booking"
  },
  benefits: {
    title: "What you will get from this free consultation",
    description: "This is a calm, private conversation where you can explain what’s been going on without having to edit yourself.",
    items: [
      "Clarity on what the real issue is, not just the loudest symptom",
      "A recommendation on the best next step, coaching, therapy, wellbeing support, or a mix",
      "A practical starting point you can act on straight away",
      "Options for online sessions or in person support in Croydon."
    ],
    note : "This call is for guidance and suitability. It is not a medical appointment and it is not crisis support.",
    image: getImageUrl("free-consultation/benefits.jpg")
  },
  practitioner: {
    name: "Samina Khan",
    role: "Holistic Life Coach",
    bio: "I believe that transformation begins with a single step. My goal is to help you find the clarity and courage to take that step towards a more balanced and conscious way of living.",
    bioSecondary: "With over 12 years of experience in mental health and holistic wellness, I work with individuals to release blocks and build resilience. Together, we create a supportive environment for your personal growth and lasting wellbeing.",
    image: getImageUrl("about/person1/samina-pic.png")
  },
  howItWorks: {
    title: "How it works",
    steps: [
      { 
        title: "Choose your time", 
        description: "Pick a slot that suits you using the booking calendar. You will get instant confirmation by email.", 
        icon: getImageUrl("about/person1/3a.png") 
      },
      { 
        title: "Tell us what you need", 
        description: "You will answer a few quick questions so Samina can understand what you want help with before you meet.", 
        icon: getImageUrl("about/person1/3b.png") 
      },
      { 
        title: "Meet Samina for your free consultation", 
        description: "You can meet online via secure video call, or in person in Croydon where available. The conversation is calm, structured, and centred on you.", 
        icon: getImageUrl("about/person1/3c.png") 
      },
      { 
        title: "Get your recommendation and next steps", 
        description: "Samina will guide you towards the right support at Flowergrid, whether that is coaching, therapy, holistic wellbeing, or a combined plan.", 
        icon: getImageUrl("about/person1/3d.png") 
      }
    ]
  },
  services: {
    title: "Who we can support you with at Flowergrid",
    items: [
      { 
        title: "Emotional Balance and Resilience", 
        image: getImageUrl("about/person1/s1.jpg") 
      },
      { 
        title: "Holistic Health and Vitality", 
        image: getImageUrl("about/person1/s2.jpg") 
      },
      { 
        title: "Personal Growth and Leadership", 
        image: getImageUrl("about/person1/s3.jpg") 
      }
    ]
  },
  brandSection: {
    title: "One integrated home for your complete wellbeing",
    descriptionLeft: "At Flowergrid, we bring together the best of evidence-based medical insight and holistic practices. Our multidisciplinary team works behind the scenes to ensure your care is joined-up, consistent, and fully aligned with your goals.",
    descriptionRight: "We believe that health is not just the absence of illness, but the presence of vitality and purpose. Our programmes are designed to support you across every dimension of your life, from physical health to emotional resilience and spiritual alignment."
  },
  testimonials: {
    title: "What people say after their free consultation with Samina",
    items: [
      { 
        name: "Sarah Jenkins", 
        location: "London",
        text: "I wasn't sure where to start, but after my free consultation, I felt so much lighter. Samina really listened and helped me see a clear path forward for my emotional health.", 
        rating: 5, 
        image: getImageUrl("about/person1/s1.jpg") 
      },
      { 
        name: "Emily Robinson", 
        location: "Surrey",
        text: "The consultation was exactly what I needed. It was professional yet so warm. I left feeling understood and with a clear idea of which sessions would help me most.", 
        rating: 5, 
        image: getImageUrl("about/person1/s2.jpg") 
      },
      { 
        name: "Michael Thompson", 
        location: "Croydon",
        text: "I felt heard and supported from the moment the call started. Samina's approach is gentle but very practical. I'm so glad I took this first step.", 
        rating: 5, 
        image: getImageUrl("about/person1/s3.jpg") 
      }
    ]
  },
  faq: {
    title: "Frequently Asked Questions",
    items: [
      { 
        question: "Is the consultation really free?", 
        answer: "Yes, the discovery call is completely free with no obligation to book further sessions. It's an opportunity for us to understand your needs and see if we're the right fit for your journey." 
      },
      { 
        question: "What happens during the call?", 
        answer: "We'll discuss your current challenges, goals, and how Flowergrid's integrative approach can support you. We'll explore which practitioners or programmes might be most beneficial for you." 
      },
      { 
        question: "Do I need to prepare anything?", 
        answer: "Just a quiet space and an open mind. You might want to think about what areas of your life you'd like to focus on and what your primary goals are for your wellbeing." 
      },
      { 
        question: "How is this different from a therapy session?", 
        answer: "This is a discovery call to understand your needs and match you with the right support. It is not a clinical treatment or coaching session, but rather a starting point for your journey." 
      },
      { 
        question: "Can I bring someone with me to the appointment?", 
        answer: "While discovery calls are typically one-on-one to allow for a focused conversation, you are welcome to have a supportive person with you if it makes you feel more comfortable." 
      },
      { 
        question: "What if I need to cancel or reschedule?", 
        answer: "We understand that plans change. You can easily reschedule or cancel your consultation via the link provided in your confirmation email, preferably with 24 hours' notice." 
      }
    ]
  },
  history: [
    {
      title: "My story",
      text: "I spent over twenty years in the world of business and startups, focused on high performance and building things that last. However, when I transitioned into motherhood, my entire world shifted. On the outside, I was evolving into a new role, but on the inside, I was quietly asking myself who I was actually becoming.\n\nThis period was deeply confronting. I was dealing with persistent physical pain and emotional overwhelm, yet finding the right help felt like a second full-time job. Every referral and Google search led to a different, disconnected service. No one was talking to each other, and I realised then that a completely new approach was needed.",
      image: "/images/free-consultation/story.jpg",
      imagePosition: "left",
      decorativeFlower: "/images/free-consultation/flower1.png"
    },
    {
      title: "My philosophy",
      text: "My philosophy is simple. I imagine you are like a seed in an environment. The health of the root determines the outcome, not just the environment. When you combine modern psychological tools, ancient healing practices and holistic mind-body techniques, you can begin to transform the root cause of your emotional, physical and mental distress.\n\nBy addressing all parts of your system, healing is accelerated. My focus is on the foundation, providing the right tools, and holding a compassionate space for your growth.",
      image: "/images/free-consultation/philosophy.jpg",
      imagePosition: "right",
      decorativeFlower: "/images/free-consultation/flower2.png"
    },
    {
      title: "Why I do this work",
      text: "It is the work that gave me my life back. I believe that sustainable and deep personal growth is the solution to most the world's problems. I know firsthand the pain of feeling lost and disconnected from my purpose. I've walked the long and hard path of returning to a state of inner harmony and well-being.\n\nMy aim is to help others walk their path with much more support and ease. I truly believe that when we heal ourselves, we also heal our world. This work is about helping people find their way back home.",
      image: "/images/free-consultation/work.jpg",
      imagePosition: "left",
      decorativeFlower: "/images/free-consultation/flower3.png"
    }
  ] as const,
  flowergridStory: {
    headline: "The Story Behind Flowergrid",
    items: [
      {
        text: "There was a point in my life where I moved from high performance into motherhood and fully stepping into being a wife. From the outside it looked like a beautiful evolution, but inside I felt unsettled. I kept asking myself, where am I now, who am I becoming, and what is my role in this new chapter?",
        image: "/images/free-consultation/story1.png",
        imagePosition: "right"
      },
      {
        text: "Around the same time, I was dealing with health challenges that would not shift. Sciatica affected me physically, and emotionally I could feel old patterns from childhood showing up in how I responded to my children. That was confronting. It made me realise I could not keep pushing through and pretending I was fine.",
        image: "/images/free-consultation/story2.png",
        imagePosition: "left"
      },
      {
        text: "So I started searching for support. I tried alternative remedies for the pain. I worked with a life coach to make sense of my identity. I explored trauma healing, mindset work, and practical tools for coping. What surprised me most was how exhausting it was to find the right help. Referrals, Google searches, trial and error. Every service lived in a different place.",
        image: "/images/free-consultation/story3.png",
        imagePosition: "right"
      },
      {
        text: "I kept thinking, why is wellbeing so fragmented? Why isn't there one place that supports mind, body and soul together? That question became the seed of Flowergrid.",
        image: "/images/free-consultation/story4.png",
        imagePosition: "left"
      }
    ]
  } as const,
  supportChallenge: {
    headline: "Why finding the right support often feels like a second job",
    subtext: "Most people come to us after they have already tried everything else. They have spent hours on Google, followed endless referrals, and gone through the exhausting process of trial and error with different treatments.",
    bodyText: [
      "The most frustrating part of that journey is often the fragmentation. You might see a doctor for your physical health, a coach for your career, and a therapist for your emotions, but none of them are talking to each other. You are left to act as your own project manager, repeating your story over and over while you are already feeling depleted.",
      "I built Flowergrid to change that. We believe you should not have to manage your wellbeing in separate, disconnected boxes.",
      "Flowergrid is one integrated home where mind, body, and spirit support finally sit together. Because our team of over 20 practitioners actually collaborates, you receive one joined up plan that respects how your stress, your health, and your purpose are all linked. You stop chasing symptoms and start building a foundation that actually lasts."
    ],
    images: {
      stressed: "/images/free-consultation/stressed.jpg",
      relaxed: "/images/free-consultation/relaxed.jpg"
    }
  },
  supportReasons: {
    headline: "Support that fits the reality of your life",
    text: "People come to us for lots of different reasons, but it often starts with the same feeling: life is heavy, you're carrying too much, and you're not sure where to begin. In your free consultation, we help you get clear on what support fits you best and what the next step should be.",
    quote: "Self-care is not selfish. You cannot serve from an empty vessel.",
    reasons: [
      "Stress, anxiety, and a mind that won't switch off",
      "Burnout, exhaustion, and feeling emotionally stretched",
      "Sleep problems and that tired but wired feeling",
      "Low confidence, self doubt, and overthinking decisions",
      "Life transitions, identity shifts, and feeling stuck",
      "Relationship strain, boundaries, and communication challenges",
      "Body tension, headaches, jaw clenching, and stress held physically",
      "Hormonal changes and midlife wellbeing support",
      "Gut health, cravings, and building a steadier relationship with food",
      "Leadership pressure and workplace stress that's affecting your health"
    ]
  }
};
