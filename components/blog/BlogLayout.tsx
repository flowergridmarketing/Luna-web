"use client";

import React, { useState } from 'react';
import BlogListingSidebar from './BlogListingSidebar';
import BlogGrid from './BlogGrid';
import BlogHero from './BlogHero';
import BlogFeaturedSection from './BlogFeaturedSection';

interface BlogPost {
    _id: string;
    title: string;
    slug: string;
    tldr: any;
    content: any;
    category?: string;
    author: {
        name: string;
    } | null;
    createdAt: string;
}

interface BlogLayoutProps {
    blogs: BlogPost[];
}

export default function BlogLayout({ blogs }: BlogLayoutProps) {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const filteredBlogs = selectedCategory
        ? blogs.filter((blog) => blog.category === selectedCategory)
        : blogs;

    // Use filteredBlogs for all sections, or maybe just grid? 
    // Usually, category filtering applies to the main content (grid), while hero might be top level or filtered too.
    // Let's apply it to all so the whole page reflects the category.
    const latestPost = filteredBlogs.length > 0 ? filteredBlogs[0] : null;
    const featuredPosts = filteredBlogs.length > 1 ? filteredBlogs.slice(1, 4) : [];
    const gridPosts = filteredBlogs.length > 4 ? filteredBlogs.slice(4) : [];

    const topPosts = blogs.slice(0, 5); // Keep top posts from all blogs

    return (
        <div className="min-h-screen bg-[#F3EAD8] pb-20">
            {/* Hero Section - Full Width */}
            <BlogHero />

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 mt-12 md:mt-8">
                {selectedCategory ? (
                    <div className="mb-8">
                        <h2 className="text-3xl font-serif text-[#1C1C1C]">
                            Category: <span className="text-[#8C7A65]">{selectedCategory}</span>
                        </h2>
                        <button 
                            onClick={() => setSelectedCategory(null)}
                            className="mt-2 text-sm text-[#8C7A65] underline hover:text-[#1C1C1C]"
                        >
                            Clear Filter
                        </button>
                    </div>
                ) : (
                    <BlogFeaturedSection latestPost={latestPost} featuredPosts={featuredPosts} />
                )}

                <div className="flex flex-col lg:flex-row gap-16 mt-16">
                    <aside className="w-full lg:w-[320px] flex-shrink-0">
                        <div className="sticky top-24">
                            <BlogListingSidebar 
                                topPosts={topPosts} 
                                selectedCategory={selectedCategory}
                                onSelectCategory={setSelectedCategory}
                            />
                        </div>
                    </aside>

                    {/* Right Main Content - Flexible Width */}
                    <main className="flex-grow min-w-0">
                        {selectedCategory && filteredBlogs.length <= 4 && gridPosts.length === 0 ? (
                            <BlogGrid posts={filteredBlogs} /> // If filtered and no grid posts because they're in featured, show them in grid instead if we hide featured. Wait, if we hide featured on category select, we should just pass all filtered to grid.
                        ) : (
                            <BlogGrid posts={selectedCategory ? filteredBlogs : gridPosts} />
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
}
