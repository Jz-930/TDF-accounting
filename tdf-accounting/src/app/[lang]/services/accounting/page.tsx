import { PageHero } from "@/components/ui/PageHero";
import { ServiceIntro } from "@/components/services/ServiceIntro";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { getDictionary } from "@/i18n/get-dictionary";

export async function generateMetadata(props: { params: Promise<{ lang: string }> }) {
  const params = await props.params;
  const dict = await getDictionary(params.lang);
  return {
    title: dict.services.accounting.title,
  };
}

export default async function AccountingPage(props: { params: Promise<{ lang: string }> }) {
  const params = await props.params;
  const dict = await getDictionary(params.lang);

  return (
    <>
      <PageHero 
        title={dict.services.accounting.title}
        imagePath="/images/banner-service-accounting.webp"
        breadcrumbs={[
          { label: dict.layout.navbar.home, href: `/${params.lang}` },
          { label: dict.layout.footer.servicesTitle },
          { label: dict.services.accounting.breadcrumb }
        ]}
      />
      
      <ServiceIntro label={dict.services.accounting.title} tagline={dict.services.accounting.tagline}>
        {dict.services.accounting.intro}
      </ServiceIntro>

      <ServiceDetail 
        imagePath="/images/bookkeping-banner-pic.webp"
        content={
          <>
            <p>
              {dict.services.accounting.detailP1}
            </p>
            <p className="mt-4">
              {dict.services.accounting.detailP2}
            </p>
          </>
        }
      />

      <ServiceCTA dict={dict} lang={params.lang} />
    </>
  );
}
