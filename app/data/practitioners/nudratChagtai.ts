import Journey from "@/components/Membership/Journey";
import { getImageUrl } from "@/lib/utils";
import { join } from "path";

export const nudratChagtai = {
    slug: "nudrat-chagtai-nutritional-therapist",

    profile: {
        name: "Nudrat Chagtai",
        title:
            "Registered Nutritional Therapist and Health Coach | Metabolic Health, Gut Health and Women’s Health Specialist",
        image: "https://ik.imagekit.io/z6xh4w9tp/about/team/nusratchangthai.jpg?updatedAt=1777012418164",
        experience: "DipION Nutritional Therapist",
        languages: ["English"],
        location: "South London (In-person on request)",
        availability: "Accepting new clients",
        cta: {
            primary: "Book a Free Discovery Call",
        },
    },

    hero: {
        headline: "Nutrition support that fits your real life",
        subtext:
            "Registered nutritional therapist helping people manage blood sugar, hormones, gut health, and metabolic wellbeing through sustainable, culturally-sensitive nutrition.",
        tags: [
            "Metabolic Health",
            "Blood Sugar Balance",
            "Gut Health",
            "Women’s Health",
            "Menopause Support",
            "Weight Management",
            "Type 2 Diabetes Support",
            "Functional Nutrition",
        ],
    },

    sections: {
        introduction:
            "Registered nutritional therapist helping people manage blood sugar, hormones, gut health, and metabolic wellbeing through sustainable, culturally-sensitive nutrition.",

        whoIWorkWithIntro:
            "I work with adults who want realistic, food-first support for better energy, digestion, blood sugar balance and long-term health. My approach is culturally sensitive and designed to fit your routine, budget and family life, without extreme rules or perfection.",

        whoIWorkWith: [
            "People managing or wanting to prevent type 2 diabetes",
            "Women navigating hormonal changes, menopause, and midlife health",
            "Individuals with gut health issues, IBS, or digestive concerns",
            "People with autoimmune or immune-related health challenges",
            "Anyone seeking sustainable weight management without restrictive dieting",
            "Communities and workplaces wanting culturally-sensitive nutrition education",
            "People looking to build sustainable habits around food, movement, sleep, and stress",
            "Those wanting to make traditional and cultural foods work for their health",
        ],

        clinicalExpertise:
            "I’m Nudrat Chagtai, a registered Nutritional Therapist and Health Coach in London with a DipION in Nutritional Therapy, supporting clients through realistic, food-first changes that fit everyday life. My main areas of focus are metabolic health and blood sugar balance, gut health and digestion, and women’s health, especially midlife and menopause.\n\nA lot of people come to nutrition feeling confused, overwhelmed, or tired of being told to cut everything out. My approach is coaching-led and practical. We focus on small, sustainable steps rather than perfection, so you can improve your health without extreme rules or unrealistic meal plans.\n\nI offer 1-to-1 nutritional therapy sessions in person and online, as well as group education programmes on female hormones and menopause, blood sugar balance, type 2 diabetes prevention, weight management, and long-term metabolic health. I also deliver culturally sensitive talks and workshops for community groups, schools, and workplaces.\n\nWhere it helps, I collaborate with other practitioners, such as movement specialists and mental wellbeing support, so your plan feels joined up, not fragmented.",

        differentiators:
            "What I value most about working with Flowergrid is the ability to offer truly integrated nutritional therapy. We recognise that your metabolic health and blood sugar balance are deeply connected to your stress levels, sleep, and emotional wellbeing. By working within a multidisciplinary team, I can ensure your nutrition plan is supported by other specialists where needed, providing a joined up approach to your health that goes far beyond a standard meal plan.",
    },
    firstSession: {
        title: "What to Expect in Your First Session",
        description: "",
        flowerWithCard: [
            {
                type: "flower",
                image: getImageUrl("about/person1/3a.png"),
                alt: "Flower Sketch",
            },
            {
                type: "card",
                title: "A deep dive into your health and lifestyle",
                description:
                    "We start by talking through your health history, dietary habits, and your specific goals. This is a dedicated time to share your journey in a calm and supportive environment.",
            },
            {
                type: "flower",
                image: getImageUrl("about/person1/3b.png"),
                alt: "Flower Sketch",
            },
            {
                type: "card",
                title: "Connecting the dots between your symptoms",
                description:
                    "We look at how your nutrition is impacting your energy, digestion, and mood. Understanding these links allows us to identify root causes and prioritize the most impactful changes.",
            },
            {
                type: "card",
                title: "Creating a realistic, food-first roadmap",
                description:
                    "Together, we build a personalised plan that fits your culture, lifestyle, and preferences. We use an integrative framework to connect metabolic health with emotional wellbeing.",
            },
            {
                type: "flower",
                image: getImageUrl("about/person1/3c.png"),
                alt: "Flower Sketch",
            },
            {
                type: "card",
                title: "Sustainable coaching and ongoing support",
                description:
                    "We close by agreeing on small, achievable steps for the week ahead. You leave with a clear roadmap and the support needed to ensure your progress is sustainable and manageable.",
            },
            {
                type: "flower",
                image: getImageUrl("about/person1/3d.png"),
                alt: "Flower Sketch",
            },
        ],
    },
    booking: {
        title: "Book your nutrition consultation",
        description:
            "Book your consultation with me to discuss your health and nutrition goals. Together, we will create a clear and sustainable path forward.",

        cta: {
            primary: "Explore Product Range",
            secondary: "Book a Consultation",
            calendly: "https://calendly.com/",
        },

        sections: [
            {
                title: "Availability & Session Details",
                description:
                    "Flexible sessions to fit your schedule, available online or in person.",
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
                description:
                    "You can secure your preferred slot directly via Calendly.",
            },
        ],

        duration: "60–90 minutes per session",
    },

    testimonials: [
        {
            name: "Fatima Khan",
            location: "London",
            text: "I was always told I had to give up my traditional foods to manage my blood sugar. Nudrat showed me how to make them work for my health instead. I feel much more in control and my energy is so much better.",
        },
        {
            name: "Sarah Miller",
            location: "Surrey",
            text: "Navigating menopause was overwhelming until I started working with Nudrat. She helped me understand how my nutrition affected my symptoms. I finally feel like I have a practical plan that actually fits my busy life.",
        },
        {
            name: "Anita Patel",
            location: "Croydon",
            text: "I have struggled with bloating and gut issues for years. Nudrat’s food-first approach was so refreshing. I did not have to follow a restrictive diet to see real, lasting improvements in my digestion and comfort.",
        },
        {
            name: "David Lawson",
            location: "UK",
            text: "Working with Nudrat helped me move away from the cycle of restrictive dieting. We focussed on blood sugar balance and sustainable habits. I feel healthier, stronger, and much more confident in my food choices now.",
        },
    ],

    faq: [
        {
            question:
                "What is nutritional therapy and how does it differ from general nutrition advice?",
            answer:
                "Nutritional therapy is a personalised approach to health that uses food and lifestyle changes to address the root causes of health issues. Unlike generic nutrition advice, it considers your individual circumstances, health history, cultural background, and metabolic needs to create a tailored plan that works for your life.",
        },
        {
            question:
                "Can Nudrat help with type 2 diabetes prevention and management?",
            answer:
                "Yes. Nudrat specialises in blood sugar regulation and metabolic health. She works with people wanting to prevent type 2 diabetes through realistic, food-first changes and those already managing the condition to improve their health outcomes.",
        },
        {
            question: "What does a nutritional therapy session include?",
            answer:
                "Sessions include a thorough assessment of your health, dietary habits, lifestyle, and goals. Nudrat then creates a personalised nutrition plan, provides practical guidance on meal planning and shopping, offers behaviour-change support, and works collaboratively with you to build sustainable habits.",
        },
        {
            question:
                "Does Nudrat work with specific diets or cultural backgrounds?",
            answer:
                "Yes. Nudrat specialises in culturally-sensitive nutrition and has expertise in South Asian and other diverse diets. She helps people make traditional and cultural foods work for better health, ensuring nutrition advice fits your budget, culture, and daily life.",
        },
        {
            question:
                "Can Nudrat support women's health issues like menopause and hormonal changes?",
            answer:
                "Absolutely. Nudrat specialises in women's health across the life course, with particular expertise in menopause, hormonal balance, and midlife health. She uses nutrition and lifestyle changes to support hormonal wellbeing during these transitions.",
        },
        {
            question:
                "Do you offer group programmes as well as one-to-one sessions?",
            answer:
                "Yes. Nudrat delivers group education programmes on topics including female health, hormones, menopause, type 2 diabetes prevention, blood sugar balance, and weight management. She also provides culturally-sensitive workshops for community groups, schools, and workplaces.",
        },
        {
            question: "How do I book a session with Nudrat Chagtai?",
            answer:
                "You can book a session through Flowergrid's website or directly via Calendly. Sessions are available both online and in person.",
        },
    ],

    relatedServices: [
        "metabolic-health",
        "gut-health",
        "womens-health",
        "menopause-support",
        "weight-management",
    ],
};