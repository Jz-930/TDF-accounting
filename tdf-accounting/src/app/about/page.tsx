import { PageHero } from "@/components/ui/PageHero";
import { CompanyHistory } from "@/components/about/CompanyHistory";
import { VisionMission } from "@/components/about/VisionMission";
import { StatsCounter } from "@/components/about/StatsCounter";
import { TeamSection } from "@/components/home/TeamSection";

export const metadata = {
  title: 'About Us',
  description: 'Learn about TDF Accounting, our history, our vision and mission, and the leadership team driving financial success for our clients in Markham.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero 
        title="About Us"
        imagePath="/images/banner-about.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" }
        ]}
      />
      <CompanyHistory />
      <VisionMission />
      <StatsCounter />
      <TeamSection />
    </>
  );
}
