"use client";
 
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import courseData from "@/data/music_courses.json";


function Courses() {
  return (
    <div className="min-h-screen bg-black py-12 pt-36">
      <h1 className="text-lg md:text-6xl text-center font-sans font-bold mb-8 text-white">ALL COURSES ({courseData.courses.length})</h1>
      <div className="flex flex-wrap justify-evenly">
        {courseData.courses.map((course, index) =>(
          <CardContainer key={index} className="inter-var">
          <CardBody className="bg-black relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-black/[0.2] border-white/[0.1] w-11/12 sm:w-[24rem] h-5/6 rounded-xl p-6 border mx-4 ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-200 dark:text-white"
            >
              {course.title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              {course.description}
            </CardItem>
            <CardItem translateZ="100" className="w-fit mt-4">
              <Image
                src={course.image}
                height="1000"
                width="1000"
                className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt={course.title}
              />
            </CardItem>
            <div className="flex justify-between items-center mt-10">
              <Link href="/">
                <CardItem
                  translateZ={20}
                  className="px-4 py-1 rounded-xl text-xs text-white font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
              </Link>
              <CardItem
                translateZ={20}
                as="button"
                className="px-3 py-2 rounded-xl bg-white dark:bg-black dark:text-white text-black text-xs font-bold"
              >
                Sign up
              </CardItem>
            </div>
          </CardBody>
      </CardContainer>
        ))}
      </div>
    </div>
  )
}

export default Courses
