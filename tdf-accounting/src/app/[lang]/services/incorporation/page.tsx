import { PageHero } from "@/components/ui/PageHero";
import { ServiceIntro } from "@/components/services/ServiceIntro";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { getDictionary } from "@/i18n/get-dictionary";

export async function generateMetadata(props: { params: Promise<{ lang: string }> }) {
  const params = await props.params;
  const dict = await getDictionary(params.lang);
  return {
    title: dict.services.incorporation.title,
  };
}

export default async function IncorporationPage(props: { params: Promise<{ lang: string }> }) {
  const params = await props.params;
  const dict = await getDictionary(params.lang);

  return (
    <>
      <PageHero 
        title={dict.services.incorporation.title}
        imagePath="/images/banner-service-incorporation.webp"
        breadcrumbs={[
          { label: dict.layout.navbar.home, href: `/${params.lang}` },
          { label: dict.layout.footer.servicesTitle },
          { label: dict.services.incorporation.title }
        ]}
      />
      
      <ServiceIntro label={dict.services.incorporation.title} tagline={dict.services.incorporation.tagline}>
        {dict.services.incorporation.intro}
      </ServiceIntro>

      <ServiceDetail 
        imagePath="/images/Sliderimg1.webp"
        content={
          <>
            <p>
              {dict.services.incorporation.detailP1}
            </p>
            <p className="mt-4">
              {dict.services.incorporation.detailP2}
            </p>
          </>
        }
      />

      <ServiceCTA dict={dict} lang={params.lang} />
    </>
  );
}
