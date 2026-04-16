import { PageHero } from "@/components/ui/PageHero";
import { ServiceIntro } from "@/components/services/ServiceIntro";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { ServiceCTA } from "@/components/services/ServiceCTA";

export const metadata = {
  title: 'Tax Services',
  description: 'Expertise in tax solutions including Corporate T2, Personal T1, and Trust returns.',
};

export default function TaxPage() {
  return (
    <>
      <PageHero 
        title="Tax Services"
        imagePath="/images/banner-service-tax.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Services" },
          { label: "Tax Services" }
        ]}
      />
      
      <ServiceIntro label="Tax Services" tagline="Expertise In Tax Solutions">
        Navigating the Canadian tax system requires more than just filling out forms; it requires strategic planning. Our CPAs stay ahead of the latest CRA regulations to ensure you remain fully compliant while legally minimizing your tax liabilities.
      </ServiceIntro>

      <ServiceDetail 
        imagePath="/images/Advisory-banner-pic.webp"
        imageOnLeft={false}
        content={
          <p className="mb-4">
            We offer comprehensive tax planning and preparation services for individuals, corporations, and trusts. Whether you are dealing with complex cross-border issues, real estate transactions, or standard annual filings, our team delivers precise and timely solutions.
          </p>
        }
        listItems={[
          "Personal tax return (T1)",
          "Corporate tax return (T2)",
          "Trust return (T3)",
          "Non-Resident tax return (ITN, NR6, NR4, Section 216)",
          "Certificate of Compliance application",
          "NRST Rebate application",
          "GST/HST new housing rebate and rental rebate"
        ]}
      />

      <ServiceCTA />
    </>
  );
}
