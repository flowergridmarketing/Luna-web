import { notFound } from 'next/navigation';
import connectDB from '@/lib/db';
import Blog from '@/models/Blog';
import BlogPostLayout from './BlogPostLayout';
import '@/models/Author';
import type { Metadata, ResolvingMetadata } from 'next'



type Props = {
    params: Promise<{ slug: string }>
}

async function getBlog(slug: string) {
    try {
        await connectDB();
        const blog = await Blog.findOne({ slug }).populate('author').lean();
        if (!blog) return null;

        return JSON.parse(JSON.stringify(blog));
    } catch (error) {
        console.error('Failed to fetch blog:', error);
        return null;
    }
}

async function getFeaturedBlogs(excludeSlug: string) {
    try {
        await connectDB();
        const blogs = await Blog.find({ slug: { $ne: excludeSlug } })
            .populate('author')
            .sort({ createdAt: -1 })
            .limit(4)
            .lean();

        return JSON.parse(JSON.stringify(blogs));
    } catch (error) {
        console.error('Failed to fetch featured blogs:', error);
        return [];
    }
}

function extractCoverImage(content: any): string | null {
    if (!content || !content.blocks) return null;
    const imageBlock = content.blocks.find((block: any) => block.type === 'image');
    return imageBlock?.data?.file?.url || null;
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const resolvedParams = await params;
  const blog = await getBlog(resolvedParams.slug);

  if (!blog) {
    return { title: "Blog Not Found" };
  }

  const coverImage = extractCoverImage(blog.content);
  const url = `https://flowergrid.co.uk/holistic-journals/${blog.slug}`;

  return {
    title: `${blog.title}`,
    description: blog.description,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: blog.title,
      description: blog.description,
      url,
      siteName: "Flowergrid Holistic Wellness Centre",
      images: coverImage ? [{ url: coverImage }] : [],
      type: "article",
      publishedTime: blog.createdAt,
      modifiedTime: blog.updatedAt,
      authors: blog.author?.name ? [blog.author.name] : [],
    },

    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: coverImage ? [coverImage] : [],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function IndividualBlogPage({ params }: Props) {
  const resolvedParams = await params;
  const blog = await getBlog(resolvedParams.slug);

  if (!blog) notFound();

  const otherBlogs = await getFeaturedBlogs(resolvedParams.slug);

  const coverImage = extractCoverImage(blog.content);
  const url = `https://flowergrid.co.uk/holistic-journals/${blog.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: blog.description,
    image: coverImage,
    author: blog.author?.name
      ? {
          "@type": "Person",
          name: blog.author.name,
        }
      : undefined,
    publisher: {
      "@type": "Organization",
      name: "Flowergrid",
      logo: {
        "@type": "ImageObject",
        url: "https://flowergrid.co.uk/favicon.ico",
      },
    },
    datePublished: blog.createdAt,
    dateModified: blog.updatedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  const faqSchema =
    blog.faq && blog.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: blog.faq.map((item: any) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <BlogPostLayout
        blog={blog}
        latestPost={otherBlogs[0] || null}
        featuredPosts={otherBlogs.slice(1, 4)}
      />
    </>
  );
}
