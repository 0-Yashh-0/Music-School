import HeroSection from "@/components/HeroSection";
import CardSection from "@/components/CardSection";
import StickyScrollReveal from "@/components/WhyChooseUs";
export default function Home() {
  return (
    <main className="overflow-auto scrollbar-hide min-h-screen bg-black/[0.97] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <CardSection />
      <StickyScrollReveal />
    </main>
  );
}
