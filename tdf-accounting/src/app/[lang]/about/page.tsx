import { PageHero } from "@/components/ui/PageHero";
import { CompanyHistory } from "@/components/about/CompanyHistory";
import { VisionMission } from "@/components/about/VisionMission";
import { StatsCounter } from "@/components/about/StatsCounter";
import { TeamSection } from "@/components/home/TeamSection";
import { getDictionary } from "@/i18n/get-dictionary";

export async function generateMetadata(props: { params: Promise<{ lang: string }> }) {
  const params = await props.params;
  const dict = await getDictionary(params.lang);
  return {
    title: dict.about.title,
  };
}

export default async function AboutPage(props: { params: Promise<{ lang: string }> }) {
  const params = await props.params;
  const dict = await getDictionary(params.lang);

  return (
    <>
      <PageHero 
        title={dict.about.title}
        imagePath="/images/banner-about.webp"
        breadcrumbs={[
          { label: dict.layout.navbar.home, href: `/${params.lang}` },
          { label: dict.about.title }
        ]}
      />
      <CompanyHistory dict={dict} />
      <VisionMission dict={dict} />
      <StatsCounter dict={dict} />
      <TeamSection dict={dict} lang={params.lang} />
    </>
  );
}
