import Link from "next/link"
import {Spotlight} from "@/components/ui/Spotlight"
import { Button } from "./ui/moving-border"

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-5"
        fill="white"
      />
      <div className="p-4 space-y-13 relative text-center w-full z-10 flex justify-center items-center flex-col">
        <h1 className="mt-20 md:mt-2.3rem text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            MASTER THE ART OF 
        </h1>
        <div className=" w-max">
        <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white text-4xl font-bold md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">EXPRESSING EMOTIONS.</h1>
        </div>
        <p className="mt-10 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae adipisci officia quia quisquam facere fuga quaerat nulla, iste sapiente provident totam reiciendis explicabo error quo quis nihil laborum id exercitationem atque consequuntur voluptatum! Quae labore fuga nisi eligendi soluta nihil, cupiditate quia.
        </p>
        <div className="mt-10">
            <Link href={"/all-courses"}>
                <Button borderRadius="1.75rem" className="bg-white dark:bg-black/[0.95] text-black dark:text-white border-white-200 dark:border-slate-800">Explore More..</Button>
            </Link>
        </div>
      </div>
    </div>
  )
}
export default HeroSection
