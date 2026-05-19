import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { getImageUrl } from '@/lib/utils';

interface ConnectProps {
    image: string;
    title: string;
    description: string;
    btnText?: string;
    redirectionLink?: string;
}

const Connect = ({ 
    image, 
    title, 
    description, 
    btnText = "Schedule Appointment",
    redirectionLink = '/booking'
}: ConnectProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px] overflow-hidden p-10 rounded-2xl">
            <div className="relative h-full min-h-[400px] md:min-h-[600px] rounded-t-2xl md:rounded-t-none md:rounded-l-2xl md:rounded overflow-hidden">
                <Image
                    src={getImageUrl(image)}
                    alt={title}
                    fill
                    className="object-cover rounded-t-2xl hover:scale-105 transition-all duration-300 md:rounded-t-none md:rounded-l-2xl"
                />
            </div>
            <div className="bg-[#E5CCA1] flex flex-col justify-center items-start p-8 md:p-12 lg:p-16 rounded-b-2xl md:rounded md:rounded-r-2xl">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-medium text-[#2d3e2d] mb-4">
                    {title}
                </h2>
                {description && (
                    <p className="text-base md:text-lg font-body text-[#2d3e2d]/80 leading-relaxed mb-8 max-w-md">
                        {description}
                    </p>
                )}
                <Link href={redirectionLink} target='_blank' rel='noopener noreferrer' >
                    <button className="bg-primary transition-colors duration-300 text-white font-medium px-8 mt-4 lg:px-20 py-4 rounded-full text-sm md:text-base shadow-md">
                        {btnText}
                    </button>

                </Link>
            </div>
        </div>
    )
}

export default Connect