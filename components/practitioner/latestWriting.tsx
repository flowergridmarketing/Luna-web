import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";

interface BlogPost {
  title: string;
  image: string;
  slug: string;
  date?: string;
}

interface Props {
  blogs: string[]; // slugs
}

export default function PractitionerLatestWriting({ blogs }: Props) {
  const mockBlogs: Record<string, BlogPost> = {
    "stress-and-burnout-recovery": {
      title: "Recovering from Burnout: A Practical Guide",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop",
      slug: "stress-and-burnout-recovery",
      date: "Jan 15, 2024",
    },
    "menopause-and-mindset": {
      title: "Navigating Menopause with Clarity and Confidence",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop",
      slug: "menopause-and-mindset",
      date: "Feb 08, 2024",
    },
    "how-to-handle-workplace-pressure": {
      title: "How to Handle Workplace Pressure Without Burning Out",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop",
      slug: "how-to-handle-workplace-pressure",
      date: "Mar 12, 2024",
    },
    "public-speaking-confidence": {
      title: "Building Real Public Speaking Confidence",
      image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&auto=format&fit=crop",
      slug: "public-speaking-confidence",
      date: "Jan 22, 2024",
    },
    "pitching-investors-clearly": {
      title: "How to Pitch Investors with Clarity and Impact",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop",
      slug: "pitching-investors-clearly",
      date: "Feb 18, 2024",
    },
    "blood-sugar-balance-basics": {
      title: "Blood Sugar Balance: Simple Steps for Better Energy",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop",
      slug: "blood-sugar-balance-basics",
      date: "Jan 10, 2024",
    },
    "what-is-reiki-healing": {
      title: "Understanding Reiki Healing: A Beginner's Guide",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop",
      slug: "what-is-reiki-healing",
      date: "Oct 12, 2023",
    },
    "shadow-work-explained": {
      title: "Shadow Work Explained: Healing Your Hidden Self",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&auto=format&fit=crop",
      slug: "shadow-work-explained",
      date: "Dec 05, 2023",
    },
    "glass-skin-routine": {
      title: "Achieving Glass Skin: Your Complete At-Home Routine",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&auto=format&fit=crop",
      slug: "glass-skin-routine",
      date: "Nov 20, 2023",
    },
  };

  const displayBlogs = blogs
    .map(
      (slug) =>
        mockBlogs[slug] || {
          title: slug
            .split("-")
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join(" "),
          image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop",
          slug,
          date: "Coming Soon",
        }
    )
    .slice(0, 3);

  return (
    <section className="w-full py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.22em] text-primary">
            Insights
          </p>
          <h2 className="text-4xl md:text-5xl font-heading text-text-heading">
            Latest Writing
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayBlogs.map((blog, index) => (
            <Link
              key={index}
              href={`/blogs/${blog.slug}`}
              className="group"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-5">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-sm text-primary font-medium mb-2">
                {blog.date}
              </p>
              <h3 className="text-xl font-heading text-text-heading group-hover:text-primary transition-colors mb-4 line-clamp-2">
                {blog.title}
              </h3>
              <div className="flex items-center text-primary font-medium">
                Read More{" "}
                <MoveRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
