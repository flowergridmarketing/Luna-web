import { getImageUrl } from "@/lib/utils";

export const freeConsultationData = {
  hero: {
    headline: "Free Consultation with Samina Khan at Flowergrid",
    subtext: "Helping you find clarity, balance, and a path forward through integrative mind, body, and spirit wellness programmes.",
    duration: "30 minutes discovery call on Zoom or over the Phone",
    cta: "Book Your Free Consultation",
    image: getImageUrl("about/person1/samina-pic.png")
  },
  calendly: {
    title: "Calendly Reservation",
    subtitle: "Calendly Reservation Page",
    url: "https://calendly.com/flowergridmarketing/30min"
  },
  benefits: {
    title: "What you will gain from the free consultation",
    description: "A holistic assessment of your current wellbeing and goals. We take the time to listen and understand your unique needs.",
    items: [
      "A safe and confidential space to talk about what is holding you back.",
      "Clarity on which wellness programme or practitioner best suits your current needs.",
      "A clear roadmap of how integrative support can help you achieve sustainable change.",
      "Insights into how our mind, body, and spirit approach can help you feel more grounded and aligned."
    ],
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
  }
};
