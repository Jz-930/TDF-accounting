import { PageHero } from "@/components/ui/PageHero";
import { ServiceIntro } from "@/components/services/ServiceIntro";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { ServiceCTA } from "@/components/services/ServiceCTA";

export const metadata = {
  title: 'Accounting Services',
  description: 'Professional bookkeeping and financial statement preparation.',
};

export default function AccountingPage() {
  return (
    <>
      <PageHero 
        title="Accounting Services"
        imagePath="/images/banner-service-accounting.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Services" },
          { label: "Accounting" }
        ]}
      />
      
      <ServiceIntro label="Accounting Services" tagline="Insight Into Our Accounting Expertise">
        Accurate financial records are the backbone of any successful business. Our comprehensive accounting and bookkeeping services ensure you have a clear picture of your financial health at any given moment.
      </ServiceIntro>

      <ServiceDetail 
        imagePath="/images/bookkeping-banner-pic.jpg"
        content={
          <>
            <p>
              We leverage cloud-based accounting platforms to provide real-time updates to your ledgers. From daily transaction categorization to monthly reconciliations, we take the tedious data entry off your hands.
            </p>
            <p className="mt-4">
              Our services include Notice to Reader (Compilation) engagements, payroll processing, dividend allocations, and customized financial reporting. We transform your raw data into actionable insights, helping you identify trends, cut unnecessary costs, and predict future cash flows.
            </p>
          </>
        }
      />

      <ServiceCTA />
    </>
  );
}
