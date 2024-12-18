import HeroSection from "@/components/HeroSection";
import CardSection from "@/components/CardSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.97] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <CardSection />
    </main>
  );
}
