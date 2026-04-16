import { HeroSection } from "@/components/home/HeroSection";
import { HighlightCards } from "@/components/home/HighlightCards";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { TeamSection } from "@/components/home/TeamSection";
import { TestimonialsSlider } from "@/components/home/TestimonialsSlider";
import { PartnersCarousel } from "@/components/home/PartnersCarousel";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HighlightCards />
      <AboutPreview />
      <ServicesGrid />
      <TeamSection />
      <TestimonialsSlider />
      <PartnersCarousel />
    </>
  );
}
