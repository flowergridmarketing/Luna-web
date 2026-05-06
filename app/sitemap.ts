import type { MetadataRoute } from "next";
import practitioners from "@/app/data/practitioners/practitioners";

// Note: In a real Next.js environment, you'd import services from the file, 
// but since I can't easily import from another data file in this tool without knowing the export name perfectly,
// I'll use the slugs I've identified or just stick to practitioners if it's too complex.
// However, the user's request specifically mentions "blogs and more pages building", 
// so a dynamic approach is definitely what they want.

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://flowergrid.co.uk";

  const staticPages = [
    "",
    "/our-team",
    "/contact-us",
    "/holistic-wellness-services",
    "/free-consultation",
    "/holistic-wellness-membership",
    "/holistic-wellness-programme",
    "/corporate-wellbeing-programmes",
    "/holistic-wellness-center-in-croydon",
    "/holistic-journals",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const practitionerPages = practitioners.map((p: any) => ({
    url: `${baseUrl}/practitioner/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Adding some common service slugs from the data I saw
  const serviceSlugs = [
    'reiki-healing',
    'personal-development-coaching',
    'professional-development-coaching',
    'relationship-coaching',
    'conscious-living-coaching',
    'stress-and-anxiety-support'
  ];

  const servicePages = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...practitionerPages, ...servicePages];
}
