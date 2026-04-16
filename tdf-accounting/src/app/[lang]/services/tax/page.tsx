import { PageHero } from "@/components/ui/PageHero";
import { ServiceIntro } from "@/components/services/ServiceIntro";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { getDictionary } from "@/i18n/get-dictionary";

export async function generateMetadata(props: { params: Promise<{ lang: string }> }) {
  const params = await props.params;
  const dict = await getDictionary(params.lang);
  return {
    title: dict.services.tax.title,
  };
}

export default async function TaxPage(props: { params: Promise<{ lang: string }> }) {
  const params = await props.params;
  const dict = await getDictionary(params.lang);

  return (
    <>
      <PageHero 
        title={dict.services.tax.title}
        imagePath="/images/banner-service-tax.webp"
        breadcrumbs={[
          { label: dict.layout.navbar.home, href: `/${params.lang}` },
          { label: dict.layout.footer.servicesTitle },
          { label: dict.services.tax.title }
        ]}
      />
      
      <ServiceIntro label={dict.services.tax.title} tagline={dict.services.tax.tagline}>
        {dict.services.tax.intro}
      </ServiceIntro>

      <ServiceDetail 
        imagePath="/images/Advisory-banner-pic.webp"
        imageOnLeft={false}
        content={
          <p className="mb-4">
            {dict.services.tax.detailP1}
          </p>
        }
        listItems={dict.services.tax.listItems}
      />

      <ServiceCTA dict={dict} lang={params.lang} />
    </>
  );
}
