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
    const resolvedParams = await params
    const blog = await getBlog(resolvedParams.slug)

    if (!blog) {
        return {
            title: 'Blog Not Found',
        }
    }

    const previousImages = (await parent).openGraph?.images || []
    const coverImage = extractCoverImage(blog.content)

    return {
        title: `${blog.title} - Flowergrid`,
        description: blog.description,
        openGraph: {
            title: blog.title,
            description: blog.description,
            images: coverImage ? [coverImage, ...previousImages] : previousImages,
            type: 'article',
            publishedTime: blog.createdAt,
            authors: blog.author?.name ? [blog.author.name] : [],
        },
    }
}

export default async function IndividualBlogPage({ params }: Props) {
    const resolvedParams = await params;
    const blog = await getBlog(resolvedParams.slug);

    if (!blog) {
        notFound();
    }

    const otherBlogs = await getFeaturedBlogs(resolvedParams.slug);
    const latestPost = otherBlogs.length > 0 ? otherBlogs[0] : null;
    const featuredPosts = otherBlogs.length > 1 ? otherBlogs.slice(1, 4) : [];

    return <BlogPostLayout
        blog={blog}
        latestPost={latestPost}
        featuredPosts={featuredPosts}
    />;
}
