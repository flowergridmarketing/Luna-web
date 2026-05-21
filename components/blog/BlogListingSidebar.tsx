import React from 'react';
import Image from 'next/image';
import { getImageUrl } from '@/lib/utils';
import Link from 'next/link';

interface BlogPost {
    _id: string;
    title: string;
    slug: string;
    createdAt: string;
}

interface BlogListingSidebarProps {
    topPosts: BlogPost[];
    selectedCategory?: string | null;
    onSelectCategory?: (category: string | null) => void;
}

const CATEGORIES = [
    { name: 'Holistic Wellness', image: getImageUrl("blog/c1.png") },
    { name: 'Mindfulness & Meditation', image: getImageUrl("blog/c2.png") },
    { name: 'Healing Therapies', image: getImageUrl("blog/c3.png") },
    { name: 'Emotional Wellbeing', image: getImageUrl("blog/c4.png") },
    { name: 'Nutrition & Lifestyle', image: getImageUrl("blog/c5.png") },
    { name: 'Eco-conscious Living', image: getImageUrl("blog/c6.png") },
    { name: 'Workplace Wellness', image: getImageUrl("blog/c7.png") },
];

export default function BlogListingSidebar({ topPosts, selectedCategory, onSelectCategory }: BlogListingSidebarProps) {
    return (
        <aside className="space-y-12">
            {/* Categories Section */}
            <div>
                <h3 className="text-xl font-medium text-[#1C1C1C] mb-6 font-serif">Categories</h3>
                <div className="space-y-3">
                    {CATEGORIES.map((category) => (
                        <button
                            key={category.name}
                            onClick={() => onSelectCategory && onSelectCategory(category.name)}
                            className="group relative block h-16 rounded-xl overflow-hidden cursor-pointer w-full max-w-[300px] text-left transition-all"
                        >
                            {/* Background Image */}
                            <Image
                                src={category.image}
                                alt={category.name}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            {/* Overlay */}
                            <div className={`absolute inset-0 flex items-center justify-between px-6 transition-all duration-300 ${selectedCategory === category.name ? 'bg-black/75 border-4 border-[#8C7A65] rounded-xl' : 'bg-gradient-to-r from-black/60 to-transparent group-hover:bg-black/50'}`}>
                                <span className={`text-white tracking-wide drop-shadow-md transition-all ${selectedCategory === category.name ? 'font-bold text-base' : 'font-medium text-sm'}`}>
                                    {category.name}
                                </span>
                                {selectedCategory === category.name && (
                                    <div className="bg-[#8C7A65] rounded-full p-1.5 shadow-[0_0_10px_rgba(140,122,101,0.5)]">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Top Posts Section */}
            <div>
                <h3 className="text-xl font-medium text-[#1C1C1C] mb-6 font-serif">Top Posts</h3>
                <ol className="space-y-6 list-decimal list-outside ml-4 text-[#8C7A65] font-serif font-bold text-lg">
                    {topPosts.slice(0, 5).map((post, index) => (
                        <li key={post._id} className="pl-2">
                            <div className="flex flex-col gap-1 -mt-1.5">
                                <Link
                                    href={`/holistic-journals/${post.slug}`}
                                    className="text-base font-medium text-[#1C1C1C] font-sans hover:text-[#8C7A65] transition-colors leading-snug"
                                >
                                    {post.title}
                                </Link>
                                <span className="text-xs text-[#8C7A65]/80 font-sans tracking-wider uppercase font-normal">
                                    3 min read • {new Date(post.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                </span>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </aside>
    );
}
