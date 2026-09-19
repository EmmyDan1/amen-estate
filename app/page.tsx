import AboutSection from "@/src/components/about/AboutSection";
import Hero from "@/src/components/hero/Hero";
import FeaturedProperties from "@/src/components/navigation/FeaturedProperties";
import Navbar from "@/src/components/navigation/Navbar";
import SmoothScroll from "@/src/components/SmoothScroll";

export default function Home() {
  return (
    <main>
      <SmoothScroll />

      <Navbar />
      <Hero />
      <FeaturedProperties />
      <AboutSection />
    </main>
  );
}