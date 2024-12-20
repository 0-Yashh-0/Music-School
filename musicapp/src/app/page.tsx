import HeroSection from "@/components/HeroSection";
import CardSection from "@/components/CardSection";
import StickyScrollReveal from "@/components/WhyChooseUs";
import Reviews from "@/components/Reviews";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="overflow-auto scrollbar-hide min-h-screen bg-black/[0.97] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <CardSection />
      <StickyScrollReveal />
      <Reviews />
      <UpcomingWebinars />
      <Instructors />
      <Footer />
    </main>
  );
}
