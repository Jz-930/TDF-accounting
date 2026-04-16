import { PageHero } from "@/components/ui/PageHero";
import { ServiceIntro } from "@/components/services/ServiceIntro";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { ServiceCTA } from "@/components/services/ServiceCTA";

export const metadata = {
  title: 'Open Business Accounts',
  description: 'We assist you in setting up the right business banking architecture to master financial efficiency.',
};

export default function BusinessAccountsPage() {
  return (
    <>
      <PageHero 
        title="Open Business Accounts"
        imagePath="/images/banner-service-corporate-accounts.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Services" },
          { label: "Business Accounts" }
        ]}
      />
      
      <ServiceIntro label="Open Business Accounts" tagline="Mastering Financial Efficiency">
        A structured financial architecture is key to measuring your business success. We provide comprehensive support in selecting and opening the right business banking solutions that fit your operational volume and transaction habits.
      </ServiceIntro>

      <ServiceDetail 
        imagePath="/images/Advisory-pic.webp"
        imageOnLeft={false}
        content={
          <>
            <p>
              Separating personal and corporate finances is the first rule of efficient accounting. Our firm works closely with major financial institutions to expedite the process of opening your corporate accounts.
            </p>
            <p className="mt-4">
              We prepare the necessary corporate documents (Articles of Incorporation, Director Resolutions, Shareholder Registries) requested by banks to ensure a smooth compliance process. We also advise on establishing credit facilities and merchant accounts tailored for modern e-commerce or traditional retail.
            </p>
          </>
        }
      />

      <ServiceCTA />
    </>
  );
}
