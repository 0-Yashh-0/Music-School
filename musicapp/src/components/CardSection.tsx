"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
import {Button} from "./ui/moving-border";
import Link from "next/link";
import courseData from "../data/music_courses.json"

interface Course{
  id: number,
  title: string,
  slug: string,
  description: string,
  price: number,
  instructor: string,
  isFeatured: boolean,
  image: string,
}

export default function CardSection() {
    const featuredCourses = courseData.courses.filter(course => course.isFeatured)

    return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
            <h1 className=" text-teal-600 font-semibold text-2xl">FEATURED COURSES</h1>
            <p className="mt-8 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With The Experts</p>
        </div>
      </div>
      <div className="mt-10">
        <div className="sm:m-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {featuredCourses.map((course: Course) => (
                <div key={course.id} className="flex justify-center">
                    <BackgroundGradient className="flex flex-col rounded-[22px] bg-black dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                        <div className="mt-3 flex items-center justify-center">
                            <Image src={course.image} alt="music" width={200} height={75} />
                        </div>
                        <div className="p-4 sm:p-3 flex  flex-col items-center text-center flex-grow">
                            <p className="text-lg sm:text-xl text-neutral-200 mt-3 mb-2 dark:text-neutral-700">{course.title}</p>
                            <p className="text-sm text-neutral-200 dark:text-neutral-600 flex-grow ">{course.description}</p>
                            <Link href={`/all-courses/${course.slug}`}>
                            <button className="m-2 p-2 flex items-center justify-center text-center bg-white rounded-lg">Learn More</button> 
                            </Link>
                        </div>
                    </BackgroundGradient>
                </div>
            ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link href="/all-courses">
            <Button>View All Courses</Button> 
        </Link>
      </div>
    </div>
  );
}