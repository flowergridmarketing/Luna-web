import { getImageUrl } from "@/lib/utils";

export const personsData = {
  person1: {
    slug: "person1",
    name: "Samina Khan",

    // PersonHero component data
    hero: {
      imageSrc: getImageUrl("about/person1/samina-pic.png"),
      text: "Hi, I’m Samina Khan, a holistic life coach in Croydon, specialising in integrative mind and body wellbeing practices.",
    },

    // PersonBio component data
    bio: {
      title: "A Little About Me",
      imageSrc: getImageUrl("about/person1/saminahalf.png"),
      bioText: [
        "Over the past 12 years, I've supported individuals through mental health initiatives, helping them navigate life's challenges with clarity. Based in South London, I work as a Holistic Life Coach in Croydon and online, bringing over 20 years of experience in business and startups to help people and ideas come together in meaningful ways.",
        "I'm also a mother of three and a sister who cares deeply about my family and community. Balancing multiple roles has taught me how to create harmony in life, and I use this experience to provide holistic wellbeing support that helps my clients do the same.",
        "I specialise in guiding you to uncover your true desires, confront your fears, and take practical steps towards creating the life you want. Whether you are looking for life and transformation coaching, career strategy, or relationship healing, I am here to help you turn challenges into opportunities for growth.",
      ],
    },

    // ScrollingTextReveal component data
    scrollingText: {
      phrases: ["Transform Your", "Mind, Body,", "and Spirit."],
    },

    // WorkIncludes component data
    workIncludes: {
      title: "How I Work",
      title2: "Here's what I focus on with my clients:",
      description:
        "I take a holistic approach that combines mind, body, and spirit, because I believe true transformation starts from within and grows through guided reflection and actionable steps.",
      description2:
        "Together, we explore your challenges and create practical strategies that fit your life. My goal is for you to leave each session with insight, confidence, and tools that create lasting change.",
      steps: [
        {
          title: "Body",
          image: getImageUrl("about/person1/2c.png"),
          description:
            "Aligning your physical health, energy, and lifestyle habits",
        },
        {
          title: "Mind",
          image: getImageUrl("about/person1/2b.png"),
          description:
            "Helping you gain clarity, build resilience, and develop a positive mindset",
        },
        {
          title: "Spirit",
          image: getImageUrl("about/person1/2a.png"),
          description: "Fostering purpose, presence, and inner balance",
        },
      ],
    },

    flowerWithText: {
      image: getImageUrl("about/person1/4.png"),
      description:
        "I'm proud to be part of Flowergrid, where a team of 15 skilled practitioners provides integrated support for mind, body and spirit. Together, we offer coaching, counselling, nutrition guidance, and medical support alongside my work as a Holistic Life Coach in Croydon.",
    },
    // JourneySection component data
    journeySection: {
      title: "Your Journey with Me",
      description:
        "When we work together, we take a structured yet flexible approach:",
      flowerWithCard: [
        {
          type: "card",
          number: "01",
          title: "Self-Discovery",
          description: "We explore your desires, challenges, and patterns",
        },
        {
          type: "flower",
          image: getImageUrl("about/person1/3a.png"),
          alt: "Peony Sketch",
        },
        {
          type: "card",
          number: "02",
          title: "Reflection",
          description:
            "We examine fears and limiting beliefs using holistic life coaching techniques",
        },
        {
          type: "flower",
          image: getImageUrl("about/person1/3b.png"),
          alt: "Coneflower Sketch",
        },
        {
          type: "flower",
          image: getImageUrl("about/person1/3c.png"),
          alt: "Dahlia Sketch",
        },
        {
          type: "card",
          number: "03",
          title: "Growth",
          description:
            "We implement practical strategies to align your life with our goals",
        },
        {
          type: "flower",
          image: getImageUrl("about/person1/3d.png"),
          alt: "Magnolia Sketch",
        },
        {
          type: "card",
          number: "04",
          title: "Transformation",
          description:
            "We build sustainable habits, resilience, and confidence",
        },
      ],
    },
    connect: {
      image: getImageUrl("about/person1/5.png"),
      title: "Take The First Step",
      description:
        "If you're ready to find balance, clarity, and personal growth through life and transformation coaching, I'd love to work with you.",
    },

    // Qualifications component data
    qualifications: [
      {
        period: "2023 – Present",
        title: "Strategic Leadership & Community Impact",
        description: "Founder · Trustee · Strategic Partnerships",
      },
      {
        period: "2020 – 2023",
        title: "Wellness & Social Consultancy",
        description:
          "Management Consultant · Senior Consultant · Head of Business Development",
      },
      {
        period: "2000 – 2018",
        title: "Corporate Strategy & Change Management",
        description:
          "Promotions Manager · Change Management Manager · Senior Service Delivery Manager",
      },
    ],
    educations: [
      "MA Business Management – Kingston University",
      "Postgraduate Diploma in International Marketing – CIM (Chartered Institute of Marketing)",
      "ITIL Service Delivery – IT Service Management Certification",
      "NLP Practitioner – Neuro-Linguistic Programming",
      "Mental Health First Aider – LSBU University",
    ],
    support: [
      {
        image: getImageUrl("about/person1/s1.jpg"),
        title: "Personal & Professional Growth Coaching",
        link: "/services/personal-development-coaching",
      },
      {
        image: getImageUrl("about/person1/s2.jpg"),
        title: "Leadership & Soft Skills Coaching",
        link: "/services/professional-development-coaching",
      },
      {
        image: getImageUrl("about/person1/s3.jpg"),
        title: "Neuro-Linguistic Programming",
        link: "/services/neuro-linguistic-programming-nlp",
      },
      {
        image: getImageUrl("about/person1/s4.jpg"),
        title: "Soul Reflection & Transformation Work",
        link: "/services/conscious-living-coaching",
      },
      {
        image: getImageUrl("about/person1/s5.jpg"),
        title: "Rekhi Healing",
        link: "/services/reiki-healing",
      },
    ],
  },

  person2: {
    slug: "person2",
    name: "Monira Ahmed",

    // PersonHero component data
    hero: {
      imageSrc: getImageUrl("about/person2/monira.png"),
      text: "Hi, I'm Monira Ahmed, a global strategist and hypnotherapist in Croydon specialising in conscious leadership and subconscious transformation.",
      imageSize:
        "mb-10 w-[300px] sm:w-[480px] md:w-[520px] lg:w-[580px] xl:w-[650px]",
    },

    // PersonBio component data
    bio: {
      title: "My Journey",
      imageSrc: getImageUrl("about/person2/1.png"),
      bioText: [
        "My journey has taken me through the worlds of business, education, and community development. I began my career with a degree in International Business and Economics, which opened my eyes to how people learn, lead, and adapt in different cultures.",
        "Today, I work as a hypnotherapist in Croydon and global strategist. Along the way, I trained as a Master NLP Coach and became a certified trainer in nutrition and soft skills. These disciplines gave me the tools to understand human behaviour and guide others through meaningful transformation.",
        "My career has been shaped by one idea: progress happens when people grow together. Whether I am mentoring young adults, supporting women settling into new environments, or leading wellbeing programmes, I aim to help people feel confident, capable, and connected.",
      ],
    },

    // WorkIncludes component data
    workIncludes: {
      title: "My Approach to Leadership and Wellbeing",
      description:
        "I believe true leadership begins with self-awareness. Before you can guide others, you need to understand your own values, emotions and patterns.",
      title2: "My coaching style brings together:",
      description2:
        "This combination allows me to help clients achieve both personal and professional transformation. It is astructured yet compassionate approach that blends intellect with intuition.",
      steps: [
        {
          title: "Strategic Insight",
          image: getImageUrl("about/person2/2a.png"),
          description: "Developed through years in business and education",
        },
        {
          title: "Psychological Techniques Insight",
          image: getImageUrl("about/person2/2b.png"),
          description:
            " Using my expertise as an NLP coach in Croydon and RTT practitioner to shift mindsets.",
        },
        {
          title: "Wellbeing Practices",
          image: getImageUrl("about/person2/2c.png"),
          description: "Such as nutrition, mindfulness and energy balance",
        },
      ],
    },
    flowerWithText: {
      image: getImageUrl("about/person2/4.png"),
      description:
        "I believe leadership should feel fair as well as successful. My work bridges minds, markets and generations, rooting growth in empathy and real wellbeing. Through Flowergrid, I help people lead with clarity and courage, uplifting themselves and their communities.",
    },
    // JourneySection component data
    journeySection: {
      title: "Community and Impact",
      description:
        "Community work is central to what I do. I have collaborated with schools, charities and local organisations to design programmes that make a lasting difference. These include:",
      flowerWithCard: [
        {
          type: "card",
          number: "01",
          title: "Mindset Coaching",
          description:
            "Mindset coaching for young people and those managing long-term illness",
        },
        {
          type: "flower",
          image: getImageUrl("about/person2/3a.png"),
          alt: "Flower Sketch",
        },
        {
          type: "card",
          number: "02",
          title: "Leadership Programmes",
          description: "Leadership and wellbeing programmes for older adults",
        },
        {
          type: "flower",
          image: getImageUrl("about/person2/3b.png"),
          alt: "Coneflower Sketch",
        },
        {
          type: "flower",
          image: getImageUrl("about/person2/3c.png"),
          alt: "Dahlia Sketch",
        },
        {
          type: "card",
          number: "03",
          title: "Life Changes Support",
          description:
            "Support for women rebuilding confidence after major life changes",
        },
        {
          type: "flower",
          image: getImageUrl("about/person2/3d.png"),
          alt: "Magnolia Sketch",
        },
        {
          type: "card",
          number: "04",
          title: "Cultural Initiatives",
          description:
            "Initiatives that bring generations and cultures together",
        },
      ],
    },

    connect: {
      image: getImageUrl("about/person2/5.png"),
      title: "Begin Your Journey with a Hypnotherapist in Croydon",
      description:
        "If you are ready to explore your potential, strengthen your mindset and live with greater purpose, I would love to connect.",
    },

    // Vision component data
    vision: {
      title: "Leadership with Purpose",
      image: getImageUrl("home/connection-logo.png"), // Assuming a similar asset exists or using a placeholder
      text: [
        "My vision is to inspire leadership that values empathy, awareness and purpose. I want to see workplaces and communities where wellbeing is part of success, not separate from it. Through Flowergrid and my coaching work",
        "I help people lead with confidence, clarity and compassion. True leadership begins from within, and my goal is to help more people discover that strength.",
      ],
    },

    // Qualifications component data
    qualifications: [
      {
        period: "2023 - Present",
        title: "Strategic Leadership & Community Impact",
        description: "Founder · Trustee · Strategic Partnerships",
      },
      {
        period: "2020 - 2023",
        title: "Wellness & Social Consultancy",
        description:
          "Management Consultant · Senior Consultant · Head of Business Development",
      },
      {
        period: "2000 – 2018",
        title: "Corporate Strategy & Change Management",
        description:
          "Promotions Manager · Change Management Manager · Senior Service Delivery Manager",
      },
    ],
    educations: [
      "MA Business Management – Kingston University",
      "Postgraduate Diploma in International Marketing – CIM (Chartered Institute of Marketing)",
      "ITIL Service Delivery – IT Service Management Certification",
      "NLP Practitioner – Neuro-Linguistic Programming",
      "Mental Health First Aider – LSBU University",
    ],
    support: [
      {
        image: getImageUrl("about/person2/ps3.jpg"),
        title: "Hypnotherapy",
        link: "/services/hypnotherapy",
      },
      {
        image: getImageUrl("about/person2/ps2.png"),
        title: "Rapid Transformational Therapy (RTT)",
        link: "/services/hypnotherapy",
      },
      {
        image: getImageUrl("about/person1/s3.jpg"),
        title: "Neuro-Linguistic Programming (NLP)",
        link: "/services/neuro-linguistic-programming-nlp",
      },
      {
        image: getImageUrl("about/person2/ps1.jpg"),
        title: "Anxiety & Stress Management Techniques",
        link: "/services/stress-and-anxiety-support",
      },
      {
        image: getImageUrl("about/person1/s4.jpg"),
        title: "Soul Reflection & Transformation Work",
        link: "/services/conscious-living-coaching",
      },
    ],
  },
};

export const teamTree = [
  {
    id: "row-1",
    type: "single",
    members: [
      {
        name: "Dr. Hana Patel",
        role: "General Practitioner, Medical Exert Witness & Family Doctor",
        image: getImageUrl("about/team/hana.png"),
        slug: "dr-hana-patel-gp-mental-health-coach",
        description:
          "Dr. Hana, our skilled and acclaimed doctor in wellness, specializes in assessing and reviewing chronic conditions. Whether you are managing a chronic illness or seeking active improvement, Dr. Hana provides expert guidance. With a focus on holistic wellness, she helps individuals refine their health goals and achieve optimal well-being. Trust Dr. Hana to support you in your journey towards better health and vitality",
      },
    ],
  },
  {
    id: "row-2",
    type: "pair",
    members: [
      {
        name: "Tamkin",
        role: "Trained Counselling Services & Career Education Direction",
        image: getImageUrl("about/team/tamkinnew.png"),
        slug: "tamkin-riaz-career-development-coach-in-croydon",
        description:
          "Wanting a listening ear on relationships, guidance, career, Education, Social improvement. Serving the community, individuals in a journey to link needs and solutions",
      },
      {
        name: "Yvonne Hewitt",
        role: "Hypnotherapist, RTT",
        image: getImageUrl("about/team/yvonne.png"),
        slug: "yvonne-hewitt-rtt-hypnotherapist-in-croydon",
        description:
          "Yvonne, our skilled specialist, excels in hypnotherapy and harnessing the power of the mind. With expertise in Rapid Transformational Therapy (RTT) and energy work, she guides you towards profound personal breakthroughs. Yvonne's holistic approach helps you unlock your inner potential, overcome limiting beliefs, and achieve lasting change. Trust her to empower you on your journey to mental clarity and emotional well-being.",
      },
    ],
  },
  {
    id: "row-3",
    type: "single",
    members: [
      {
        name: "Dr. Ravinder",
        role: "Auricular Acupuncturist, Colour Therapist, Angel Healer & Reiki Grand Master",
        image: getImageUrl("about/team/ravinder.png"),
        slug: "dr-ravinder-auricular-acupuncturist-croydon",
        description:
          "Dr. Ravinder is a licensed Auricular Acupuncturist & accredited Reiki Grand Master offering holistic healing. He utilizes reiki, energy, color therapy, & angelic healing to enhance overall well-being. With professional memberships in Microsystems Acupuncture Society, CNHC, & The Acupuncture Society, his comprehensive care blends ancient healing traditions with modern modalities to relieve physical pain, heal emotionally, & improve vitality.",
      },
    ],
  },
  {
    id: "row-4",
    type: "pair",
    members: [
      {
        name: "Dr. Renuka Marley",
        role: "Healthcare Consultant and Lifecoach",
        image: getImageUrl("about/team/renuka.png"),
        slug: "dr-renuka-marley-healthcare-consultant-croydon",
        description:
          "Dr. Renu offers comprehensive body scans to analyze mineral & vitamin levels, utilizing functional nutrition to address deficiencies. With expertise in personalized supplementation and dietary recommendations, she helps clients optimize their nutritional intake. Dr. Renu goes beyond the basics, incorporating additional elements to support overall health & wellness. Trust Dr. Renu for a tailored approach to enhancing your well-being through nutrient balancing with Dr. Renu.",
      },
      {
        name: "Runa Boolaky",
        role: "NLP Practitioner, Lifecoach & Mental First Aider",
        image: getImageUrl("about/team/runa.png"),
        slug: "runa-boolaky-nlp-practitioner-in-croydon",
        description:
          "Runa is your guide to leadership development, goal achievement, and the cultivation of healthy habits. She offers support with a range of products designed to enhance your financial health and investment strategies. Runa's holistic approach empowers you to evolve personally and professionally, helping you build a balanced and prosperous life. Trust her expertise to unlock your potential and achieve lasting success.  ",
      },
    ],
  },
  {
    id: "row-5",
    type: "single",
    members: [
      {
        name: "Rico Wagner Caleep",
        role: "Leadership • Growth • Mental Performance Coaching executives & organisations",
        image: getImageUrl("about/team/rico.png"),
        slug: "rico-wagner-caleap-executive-coach-croydon",
        description:
          "Rico supports executives and leaders in navigating high-pressure roles with clarity and resilience. Using the Wagner Method, he blends cognitive behavioural strategies, emotional intelligence, and holistic coaching to enhance performance, balance, and wellbeing. Trust Rico to guide you towards sustainable growth and empowered leadership.",
      },
    ],
  },
  {
    id: "row-6",
    type: "pair",
    members: [
      {
        name: "Rebecca",
        role: "Nutrition and Fitness Coach",
        image: getImageUrl("about/team/rebecca.png"),
        slug: "rebecca-nutrition-and-fitness-coach-croydon",
        description:
          "Rebecca Meggiolaro is a Level 3 Personal Trainer, Yoga, and Pilates instructor with a lifelong passion for health and wellbeing. Whether she’s leading a high intensity class or guiding a mindful Pilates / Yoga flow, Rebecca’s approach is rooted in the belief that every body is unique. She specialises in bridging the gap between sweat and science, delivering sessions with professionalism, precision, and a smile. Rebecca focuses on impeccable technique through clear, actionable instruction, ensuring that while the work is challenging, the experience is always fun and rewarding. No matter your starting point.",
      },
      {
        name: "Husna Hoque",
        role: "Personal Trainer & Wellness Coach",
        image: getImageUrl("about/team/husna.png"),
        slug: "husna-hoque-personal-trainer-wellness-coach-croydon",
        description:
          "Trainer Husna specializes in creating customized workout routines and managing your macros to help you adopt healthier habits. With a focus on personalized fitness plans, she guides clients towards achieving their goals effectively. Trust in Trainer Husna to design workouts tailored to your needs and support you in making positive lifestyle changes. Elevate your fitness journey with Husna's expertise and commitment to your well-being.",
      },
    ],
  },
  {
    id: "row-7",
    type: "single",
    members: [
      {
        name: "Aysha",
        role: "Communications Coach & Public Speaking Trainer",
        image: getImageUrl("about/team/aisha.jpeg"),
        slug: "aysha-iqbal-communication-coach",
        description:
          "Aysha is a former BBC and ITV News Anchor and founder of Wize Communications. She specialises in helping professionals communicate with confidence and impact through business pitching, public speaking, presentation skills, and leadership communication training delivered through Flowergrid.",
      },
    ],
  },
  {
    id: "row-8",
    type: "pair",
    members: [
      {
        name: "Nudrat",
        role: "Registered Nutritional Therapist & Health Coach",
        image: getImageUrl("about/team/nusratchangthai.jpg"),
        slug: "nudrat-chagtai-nutritional-therapist",
        description:
          "Nudrat is a registered nutritional therapist specialising in blood sugar balance, metabolic health, women's health, and gut health. She delivers personalised nutrition plans and group education programmes through Flowergrid, with expertise in culturally-sensitive nutrition and sustainable lifestyle change.",
      },
      {
        name: "Tarun",
        role: "Reiki Grand Master & Holistic Energy Consultant",
        image: getImageUrl("about/team/Tarun Sharma.png"),
        slug: "tarun-sharma-reiki-grand-master",
        description:
          "Tarun is a Reiki Grand Master and healer who brings deep expertise in Gayatri Reiki, Sujok therapy, and Mudras to Flowergrid. He blends ancient energy work with practical lifestyle habits, offering guidance on natural home remedies and daily nutrition to support your vitality. Through Nadi astrology and Vastu energy, Tarun helps you create lasting harmony within yourself and your environment.",
      },
    ],
  },
  {
    id: "row-9",
    type: "single",
    members: [
      {
        name: "Dr. Ayla",
        role: "Aesthetic and Plastic Surgeon",
        image: getImageUrl("about/team/angleroc.jpg"),
        slug: "dr-ayla-gokce-aesthetic-surgeon",
        description:
          "Dr. Ayla is an expert aesthetic and plastic surgeon in London specializing in facial rejuvenation, breast surgery, and body contouring. Bringing surgical precision and an artistic eye to Flowergrid, she focuses on natural-looking results that enhance your unique features. Whether guiding you through a transformative procedure or a non-surgical treatment plan, Dr. Ayla prioritises safety, clarity, and long-term care.",
      },
    ],
  },
  {
    id: "row-10",
    type: "pair",
    members: [
      {
        name: "Uzma",
        role: "Life Coach & Neurodiversity Specialist",
        image: getImageUrl("about/team/uzma.jpeg"),
        slug: "uzma-neurodiversity-specialist-croydon",
        description:
          "Uzma brings over 20 years of experience in teaching and community welfare to Flowergrid. Specialising in life coaching and neurodiversity support, Uzma helps individuals and families navigate life’s challenges with practical tools and deep compassion. With a background rooted in education and family advocacy, Uzma is dedicated to helping people build resilience and find meaningful direction in their lives.",
      },
      {
        name: "Angelina Ray",
        role: "Psychic Therapist, Integrative Counsellor & Reiki Practitioner",
        image: getImageUrl("about/team/Angelina Ray.jpg"),
        slug: "angelina-ray-psychic-therapist-croydon",
        description:
          "Angelina is an independent integrative counsellor and Psychic Therapist in Croydon, offering grounded emotional support alongside optional psychic mediumship for deeper insight. She works with clients through inner child work, shadow work, unconscious pattern exploration, and Reiki healing to support clarity, healing, and forward movement. Angelina’s approach is professional, confidential, and always led by consent and client comfort.",
      },
    ],
  },
  {
    id: "row-11",
    type: "single",
    members: [
      {
        name: "Entwine",
        role: "Professional At-Home Salon Skincare Partner",
        image: getImageUrl("about/team/entwine.png"),
        slug: "entwine-at-home-salon-skincare",
        description:
          "Entwine is our dedicated skincare partner providing professional at-home salon skincare results through supercharged, laboratory-formulated active ampoules. Specialising in glass skin treatments and radiant complexion maintenance, Entwine offers cruelty-free and sustainable beauty solutions that fit your lifestyle. Their range ensures that your physical self-care is high-performance, ethical, and fully integrated into your wider wellbeing journey.",
      },
    ],
  },
  {
    id: "row-12",
    type: "pair",
    members: [
      {
        name: "Constina",
        role: "Menopause Coach",
        image: "",
        slug: "constina-menopause-coach",
        description:
          "Constina is a specialist menopause coach dedicated to supporting women through the physical and emotional transitions of midlife. She provides practical guidance and mindset tools to help you manage symptoms, from anxiety and sleep issues to shifting identity. By taking a holistic approach, Constina helps you regain your confidence and vitality, ensuring you feel empowered during this significant life chapter.",
      },
      {
        name: "Fattia",
        role: "Craniosacral Therapist & Holistic Wellbeing Specialist",
        image: "",
        slug: "fattia-aromatherapist-croydon",
        description:
          "Fattia specialises in craniosacral therapy, nutrition, and aromatherapy, offering a gentle and integrated approach to physical and emotional restoration. Her work focuses on settling the nervous system, releasing deep-seated tension, and providing the nutritional foundations needed for lasting vitality. Fattia helps you reconnect with your body’s natural rhythm, supporting your journey toward genuine mind, body, and spirit wellness.",
      },
    ],
  },
  {
    id: "row-13",
    type: "single",
    members: [
      {
        name: "Claire",
        role: "Sound Therapy Practitioner",
        image: "",
        slug: "claire-sound-therapy-practitioner",
        description:
          "Claire specialises in sound therapy, using the power of vibration and frequency to support deep relaxation and emotional settling. Her sessions provide a passive yet profound way to quieten the mind, release physical tension, and regulate the nervous system. By creating a calm, restorative space, Claire helps you find inner stillness and find your way back to balance and clarity.",
      },
    ],
  },
  {
    id: "row-14",
    type: "pair",
    members: [
      {
        name: "Maria",
        role: "Spiritual Scientist & Healing Practitioner",
        image: getImageUrl("about/team/maria.jpeg"),
        slug: "maria-afentakis-healing-practitioner",
        description:
          "Maria Afentakis is a scientist and teacher who brings a unique blend of logic and intuition to Flowergrid. As an author, meditation facilitator, and Einstein channel, she specialises in restorative healing for both humans and animals. Maria’s work bridges the gap between scientific understanding and spiritual insight, helping you find deeper connection and clarity within your life.",
      },
      {
        name: "Naheed",
        role: "Social Work Consultant",
        image: "",
        slug: "naheed-social-work-consultant",
        description:
          "Naheed provides specialist social work consultations, offering practical advocacy and emotional support for individuals and families navigating complex life transitions. She specialises in helping you understand social dynamics, manage family wellbeing, and find stability during challenging times. By bridging the gap between clinical support and community navigation, Naheed provides the grounded guidance needed to build a more secure and connected life.",
      },
    ],
  },
  {
    id: "row-15",
    type: "single",
    members: [
      {
        name: "Chloe",
        role: "Parenting Skills Specialist",
        image: "",
        slug: "chloe-parenting-skills-specialist",
        description:
          "Chloe specialises in bridging parenting skills, helping families navigate the complexities of raising children with confidence and calm. She provides practical tools and communication strategies to improve family dynamics and emotional connections. By focusing on both the parent’s wellbeing and the child’s needs, Chloe helps you build a more harmonious home life where every member of the family feels heard and supported.",
      },
    ],
  },
  {
    id: "row-16",
    type: "single",
    members: [
      {
        name: "Aysha",
        role: "Hypnotherapist, Leadership Coach & Counsellor",
        image: "",
        slug: "aysha-hypnotherapist-leadership-coach",
        description:
          "Aysha combines deep subconscious work with practical professional development, specialising in hypnotherapy, past life regression, and counselling. She helps individuals bridge the gap between emotional healing and outward performance, providing training in leadership and soft skills. By addressing internal blocks and building communication habits, Aysha guides you toward a more confident, authentic, and purposeful life both personally and professionally.",
      },
    ],
  },
];

export const foundersData = [
  {
    name: "Samina Khan",
    role: "Co-Founder & Wellness Strategist",
    description:
      "Samina has over 12 years of experience supporting individuals through mental health and holistic wellness initiatives. She blends evidence-based coaching, energy work, and psychological techniques to help clients uncover patterns, release emotional blocks, and create sustainable habits. Through the FlowerGrid programmes, Samina guides members from self-discovery to transformation, ensuring each step integrates mind, body, and spirit. Her practical, compassionate approach helps you build clarity, resilience, and long-term wellbeing.",
    image: "about/person1/samina-pic.png",
    link: "/samina-khan-holistic-life-coach",
    firstName: "Samina",
  },
  {
    name: "Monira Ahmed",
    role: "Co-Founder & Leadership Life Coach",
    description:
      "Monira brings a unique blend of global strategy, human behaviour insight, and coaching expertise. She combines NLP, mindset training, and wellbeing practices to support clients in aligning their personal and professional lives. In the FlowerGrid programmes, Monira focuses on conscious living, habit transformation, and mind-body-soul integration. She empowers members to gain confidence, make lasting changes, and step fully into their potential.",
    image: "about/person2/monira.png",
    link: "/monira-ahmed-hypnotherapist",
    firstName: "Monira",
  },
];

export const lines = [
  "“THE SOUL ALWAYS KNOWS",
  "WHAT TO DO TO HEAL ITSELF.",
  "THE CHALLENGE IS TO SILENCE",
  "THE MIND”",
];

// Helper function to get person data by slug
export const getPersonBySlug = (slug) => {
  return personsData[slug] || null;
};

// Helper function to get all person slugs
export const getAllPersonSlugs = () => {
  return Object.keys(personsData);
};

export const locationData = {
  journeySection: {
    title: "How to book a holistic wellness session at Flowergrid",
    description: "",
    flowerWithCard: [
      {
        type: "flower",
        image: getImageUrl("about/person1/3a.png"),
        alt: "Flower Sketch",
      },
      {
        type: "card",
        number: "",
        title: "Choose your starting point",
        description:
          "If you know what you want, explore our services and book directly. If you are unsure, start with a free consultation so we can understand what you need and guide you.",
      },
      {
        type: "flower",
        image: getImageUrl("about/person1/3b.png"),
        alt: "Flower Sketch",
      },
      {
        type: "card",
        number: "",
        title: "Tell us what you need",
        description:
          "Share a few details about what's been going on and what you want to change. You can contact us online, by email, or by phone, and let us know if you prefer online or in person support.",
      },
      {
        type: "card",
        number: "",
        title: "Get matched to the right practitioner",
        description:
          "We will recommend the most suitable practitioner based on your goals, preferences, and availability. Our integrative approach means you can access joined up support when it's helpful.",
      },
      {
        type: "flower",
        image: getImageUrl("about/person1/3c.png"),
        alt: "Flower Sketch",
      },
      {
        type: "card",
        number: "",
        title: "Confirm and begin your sessions",
        description:
          "Once booked, you will receive confirmation and clear next steps. Sessions are available online across the UK or in person at our Coulsdon, Croydon centre.",
      },
      {
        type: "flower",
        image: getImageUrl("about/person1/3d.png"),
        alt: "Flower Sketch",
      },
    ],
  },
};
