import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getImageUrl } from '@/lib/utils';
import { MoveRight } from 'lucide-react';

interface BlogPost {
  title: string;
  image: string;
  slug: string;
  date?: string;
}

interface Props {
  blogs: string[]; // slugs
}

export default function LatestWriting({ blogs }: Props) {
  // Mocking blog data for now since we don't have a fetcher here
  // In a real app, we would fetch these from an API or data file based on slugs
  const mockBlogs: Record<string, BlogPost> = {
    "what-is-reiki-healing": {
      title: "Understanding Reiki Healing: A Beginner's Guide",
      image: "https://ik.imagekit.io/z6xh4w9tp/blogs/reiki-1.jpg",
      slug: "what-is-reiki-healing",
      date: "Oct 12, 2023"
    },
    "stress-relief-through-energy-work": {
      title: "How Energy Work Can Transform Your Stress Response",
      image: "https://ik.imagekit.io/z6xh4w9tp/blogs/stress-relief.jpg",
      slug: "stress-relief-through-energy-work",
      date: "Nov 05, 2023"
    },
    "better-sleep-natural-practices": {
      title: "5 Natural Practices for Deeper, More Restful Sleep",
      image: "https://ik.imagekit.io/z6xh4w9tp/blogs/sleep.jpg",
      slug: "better-sleep-natural-practices",
      date: "Dec 01, 2023"
    }
  };

  const displayBlogs = blogs.map(slug => mockBlogs[slug] || {
    title: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    image: `https://ik.imagekit.io/z6xh4w9tp/blogs/placeholder.jpg`,
    slug: slug,
    date: "Coming Soon"
  }).slice(0, 3);

  return (
    <section className="w-full py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <Image
            src={getImageUrl("home/leaf.png")}
            alt="Leaf"
            width={40}
            height={40}
            className="mb-4"
          />
          <h2 className="text-4xl md:text-5xl font-heading text-text-heading">Latest Writing</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayBlogs.map((blog, index) => (
            <Link key={index} href={`/blogs/${blog.slug}`} className="group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-4">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-sm text-primary font-medium mb-2">{blog.date}</p>
              <h3 className="text-xl font-heading text-text-heading group-hover:text-primary transition-colors mb-4 line-clamp-2">
                {blog.title}
              </h3>
              <div className="flex items-center text-primary font-medium">
                Read More <MoveRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
