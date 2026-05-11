'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { teamTree } from '@/app/data/about'
import { getImageUrl } from '@/lib/utils'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { User } from 'lucide-react'

const TeamTreeSection = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null)
  const router = useRouter()

  const handleCardClick = (cardId: string, slug?: string) => {
    // If on mobile and not expanded, expand it
    // If already expanded and has slug, redirect
    // On desktop, expansion is handled by hover, so click should redirect
    if (expandedCard === cardId && slug) {
      router.push(`/practitioner/${slug}`)
    } else {
      setExpandedCard(expandedCard === cardId ? null : cardId)
      // Check if it's desktop (using window width as a hint, or just assuming hover handled it)
      if (window.innerWidth >= 768 && slug) {
        router.push(`/practitioner/${slug}`)
      }
    }
  }

  return (
    <div
      style={{ background: `url(${getImageUrl('/about/team/bg.png')}) no-repeat top center/cover` }}
      className='flex flex-col items-center py-10 px-4 mb-10 lg:px-12 md:px-20 min-h-screen relative overflow-hidden'
    >
      {/* Title responsive text size */}
      <h1 className='text-3xl md:text-5xl font-normal mt-12 text-center'>Meet Our Team</h1>

      {/* -- Decorative Leaves (Adjusted positions slightly for safety) -- */}
      <Image
        src={getImageUrl("programme/left-leaf.png")}
        width={120}
        height={120}
        alt=""
        className='absolute top-24 left-[-20px] md:top-8 md:left-1 opacity-70 w-[80px] md:w-[120px]'
      />
      <Image
        src={getImageUrl("programme/right-leaf.png")}
        width={120}
        height={120}
        alt=""
        className='absolute top-36 right-[-20px] md:top-8 md:right-1 opacity-70 w-[80px] md:w-[120px]'
      />
      <Image
        src={getImageUrl("programme/right-leaf.png")}
        width={120}
        height={120}
        alt=""
        className='absolute bottom-4 left-[-20px] md:bottom-8 md:left-0 opacity-70 rotate-180 w-[80px] md:w-[120px]'
      />
      <Image
        src={getImageUrl("programme/left-leaf.png")}
        width={120}
        height={120}
        alt=""
        className='absolute bottom-4 right-[-20px] md:bottom-8 md:right-0 opacity-70 rotate-180 w-[80px] md:w-[120px]'
      />

      <div className="max-w-5xl w-full mx-auto relative mt-8 md:mt-12">

        <div className="relative z-10 flex flex-col gap-10 md:gap-20 py-8">
          {teamTree.map((row, index) => (
            <div
              key={row.id}
              className={`
                flex w-full flex-wrap md:flex-nowrap items-center
                justify-center gap-8 md:gap-0
                ${row.type === 'single' ? 'md:justify-center' : 'md:justify-between'}
              `}
            >

              {row.members.map((member, mIndex) => {
                const cardId = `${row.id}-${mIndex}`
                const isExpanded = expandedCard === cardId

                return (
                  <div key={mIndex} className={`group flex flex-col items-center text-center shrink-0 relative ${isExpanded ? 'expanded' : ''}`}>

                    {/* Card Container that expands on hover */}
                    <div className={`relative transition-all duration-500 ease-in-out
                    ${isExpanded ? 'w-[220px] md:w-[320px]' : 'w-[180px] md:w-[280px]'}
                    md:group-hover:w-[320px]
                  `}>

                      {/* Image Container - Expands on hover */}
                      <div
                        onClick={() => handleCardClick(cardId, member.slug)}
                        className={`relative rounded-[120px] bg-[#D7C3A3] overflow-hidden shadow-md cursor-pointer transition-all duration-500 ease-in-out
                        ${isExpanded
                            ? 'w-[220px] h-[650px] md:w-[320px] md:h-[800px]'
                            : 'w-[180px] h-[200px] md:w-[280px] md:h-[280px]'
                          }
                        md:group-hover:w-[320px] md:group-hover:h-[800px]
                      `}
                      >
                        {/* Image - stays at top */}
                        <div className="relative w-full h-[200px] md:h-[280px]">
                          {member.image ? (
                            <Image
                              src={member.image}
                              alt={member.name}
                              fill
                              className="object-cover object-[center_20%]"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-[#E5D5C0]">
                              <User className="w-20 h-20 text-[#714C24] opacity-50" />
                            </div>
                          )}
                        </div>

                        {/* Description Section - Appears below image on hover */}
                        <div className={`px-5 md:px-8 py-6 md:py-8 flex flex-col items-center justify-between h-[350px] md:h-[420px] transition-opacity duration-500
                        ${isExpanded ? 'opacity-100' : 'opacity-0'}
                        md:group-hover:opacity-100
                      `}>
                          {/* Description Text */}
                          <p className="text-[11px] md:text-sm text-[#2C1810] leading-relaxed text-center">
                            {member.description}
                          </p>

                          {/* View Profile Button */}
                          <Link 
                            href={member.slug ? `/practitioner/${member.slug}` : "/contact"} 
                            className="bg-primary hover:opacity-90 text-white text-[11px] md:text-sm font-medium px-5 md:px-7 py-2.5 md:py-3 rounded-full transition-colors duration-200 whitespace-nowrap mt-6"
                          >
                            View Profile
                          </Link>
                        </div>
                      </div>
                    </div>

                    <Link 
                      href={member.slug ? `/practitioner/${member.slug}` : "#"}
                      className={`mt-4 transition-opacity duration-300 block
                        ${isExpanded ? 'opacity-0 pointer-events-none' : 'opacity-100'}
                        md:group-hover:opacity-0 md:group-hover:pointer-events-none
                      `}
                    >
                      <h3 className="text-base md:text-lg font-semibold text-[#2C1810] leading-snug mb-1">
                        {member.name}
                      </h3>
                      <p className="text-xs md:text-lg xl:text-xl  text-[#714C24]! leading-relaxed font-normal px-2 max-w-[160px] md:max-w-[240px]">
                        {member.role}
                      </p>
                    </Link>

                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TeamTreeSection