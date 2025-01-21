"use client"
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";
import { Button } from "./ui/moving-border";


function UpcomingWebinars() {
    const featuredWebinars = [
        {
          title: 'Understanding Music Theory',
          description:
            'Dive deep into the fundamentals of music theory and enhance your musical skills.',
          slug: '#',
          isFeatured: true,
        },
        {
          title: 'The Art of Songwriting',
          description:
            'Learn the craft of songwriting from experienced musicians and songwriters.',
          slug: '#',
          isFeatured: true,
        },
        {
          title: 'Mastering Your Instrument',
          description:
            'Advanced techniques to master your musical instrument of choice.',
          slug: '#',
          isFeatured: true,
        },
        {
          title: 'Music Production Essentials',
          description:
            'Get started with music production with this comprehensive overview.',
          slug: '#',
          isFeatured: true,
        },
        {
          title: 'Live Performance Techniques',
          description:
            'Enhance your live performance skills with expert tips and strategies.',
          slug: '#',
          isFeatured: true,
        },
        {
          title: 'Digital Music Marketing',
          description:
            'Learn how to promote your music effectively in the digital age.',
          slug: '#',
          isFeatured: true,
        },
      ];
  return (
    <div className='p-12 bg-gray-900'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center">        
            <div className="text-center">
                <h1 className="text-base text-teal-600 font-semibold text-2xl tracking-wide uppercase">FEATURED WEBINARS</h1>
                <p className="mt-8 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">ENHANCE YOUR MUSICAL JOURNEY</p>
        </div>
            <div className="mt-10">
                <HoverEffect items={featuredWebinars} />
            </div>
            <div className="mt-10 text-center items-center justify-center">
            <Link href={"/"}>
                <Button>Explore More..</Button>
            </Link>
            </div>
        </div>
    </div>
  )
}

export default UpcomingWebinars
