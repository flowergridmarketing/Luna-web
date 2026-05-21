import BlogLayout from '@/components/blog/BlogLayout';
import connectDB from '@/lib/db';
import '@/models/Author';
import Blog from '@/models/Blog';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Holistic Journal | Practical Tips on Holistic Wellness with Flowergrid",
    description:
        "Explore the Holistic Journal for practical tips on wellness, mindfulness, and self-care to support mind, body, and spirit with Flowergrid.",
    alternates: {
        canonical: "https://flowergrid.co.uk/holistic-journals",
    },
    robots: {
        index: true,
        follow: true,
    },
};

async function getBlogs() {
    try {
        await connectDB();
        const blogs = await Blog.find({}).populate('author').sort({ createdAt: -1 }).lean();
        return JSON.parse(JSON.stringify(blogs.map(blog => ({
            ...blog,
            _id: blog._id?.toString(),
            author: blog.author && typeof blog.author === 'object' && 'name' in blog.author ? {
                name: (blog.author as any).name,
            } : null,
            createdAt: blog.createdAt?.toISOString(),
        }))));
    } catch (error) {
        console.error('Failed to fetch blogs:', error);
        return [];
    }
}

export default async function BlogsPage() {
    const blogs = await getBlogs();
    const schema = {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "Holistic Journal",
        url: "https://flowergrid.co.uk/holistic-journals",
        description:
            "Explore the Holistic Journal for practical tips on wellness, mindfulness, and self-care to support mind, body, and spirit with Flowergrid.",
        publisher: {
            "@type": "Organization",
            name: "Flowergrid Holistic Wellness Centre",
            logo: {
                "@type": "ImageObject",
                url: "https://flowergrid.co.uk/favicon.ico",
            },
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://flowergrid.co.uk/holistic-journals",
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <BlogLayout blogs={blogs as any} />
        </>
    )
}
