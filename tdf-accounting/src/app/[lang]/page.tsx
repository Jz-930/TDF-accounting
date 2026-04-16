import { HeroSection } from "@/components/home/HeroSection";
import { HighlightCards } from "@/components/home/HighlightCards";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { TeamSection } from "@/components/home/TeamSection";
import { TestimonialsSlider } from "@/components/home/TestimonialsSlider";
import { PartnersCarousel } from "@/components/home/PartnersCarousel";
import { getDictionary } from "@/i18n/get-dictionary";

export default async function Home(props: { params: Promise<{ lang: string }> }) {
  const params = await props.params;
  const dict = await getDictionary(params.lang);

  return (
    <>
      <HeroSection dict={dict} lang={params.lang} />
      <HighlightCards dict={dict} lang={params.lang} />
      <AboutPreview dict={dict} lang={params.lang} />
      <ServicesGrid dict={dict} lang={params.lang} />
      <TeamSection dict={dict} lang={params.lang} />
      <TestimonialsSlider dict={dict} lang={params.lang} />
      <PartnersCarousel dict={dict} lang={params.lang} />
    </>
  );
}
