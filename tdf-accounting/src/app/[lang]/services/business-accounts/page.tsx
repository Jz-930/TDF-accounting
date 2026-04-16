import { PageHero } from "@/components/ui/PageHero";
import { ServiceIntro } from "@/components/services/ServiceIntro";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { getDictionary } from "@/i18n/get-dictionary";

export async function generateMetadata(props: { params: Promise<{ lang: string }> }) {
  const params = await props.params;
  const dict = await getDictionary(params.lang);
  return {
    title: dict.services.businessAccounts.title,
  };
}

export default async function BusinessAccountsPage(props: { params: Promise<{ lang: string }> }) {
  const params = await props.params;
  const dict = await getDictionary(params.lang);

  return (
    <>
      <PageHero 
        title={dict.services.businessAccounts.title}
        imagePath="/images/banner-service-corporate-accounts.webp"
        breadcrumbs={[
          { label: dict.layout.navbar.home, href: `/${params.lang}` },
          { label: dict.layout.footer.servicesTitle },
          { label: dict.services.businessAccounts.breadcrumb }
        ]}
      />
      
      <ServiceIntro label={dict.services.businessAccounts.title} tagline={dict.services.businessAccounts.tagline}>
        {dict.services.businessAccounts.intro}
      </ServiceIntro>

      <ServiceDetail 
        imagePath="/images/Advisory-pic.webp"
        imageOnLeft={false}
        content={
          <>
            <p>
              {dict.services.businessAccounts.detailP1}
            </p>
            <p className="mt-4">
              {dict.services.businessAccounts.detailP2}
            </p>
          </>
        }
      />

      <ServiceCTA dict={dict} lang={params.lang} />
    </>
  );
}
