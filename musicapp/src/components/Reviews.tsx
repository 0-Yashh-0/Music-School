'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
    {
      quote:
        'The music school has been a game-changer for me, offering a deep dive into music theory and hands-on learning that helped me master the drums.',
      name: 'Ryan Davis',
      title: 'Drum Student',
    },
    {
      quote:
        'The school’s focus on technique and expression helped me grow not only as a musician but as an artist. The piano program is incredible!',
      name: 'Olivia Harris',
      title: 'Piano Performance Student',
    },
    {
      quote:
        "Through this school's tailored vocal training, I gained the confidence and skills to take on more challenging repertoire and perform with conviction.",
      name: 'Sophia Martinez',
      title: 'Vocal Performance Student',
    },
    {
      quote:
        'The violin program here is unmatched. My instructor provided valuable insights that helped me fine-tune my technique and achieve my musical aspirations.',
      name: 'Liam Moore',
      title: 'Advanced Violin Student',
    },
    {
      quote:
        'The music production course opened my eyes to the technical side of making music. It is an absolute must for anyone looking to pursue music production professionally.',
      name: 'Ethan Clark',
      title: 'Music Production Specialist',
    },
  ];

function Reviews() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h1 className="text-3xl font-bold text-center mb-8 z-10 text-white">Transforming Musicians, One Note at a Time</h1>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={musicSchoolTestimonials}
            direction="right"
            speed="slow"
          />
          <InfiniteMovingCards
            items={musicSchoolTestimonials}
            direction="left"
            speed="normal"
          />
        </div>
    </div>
    </div>
  )
}

export default Reviews
