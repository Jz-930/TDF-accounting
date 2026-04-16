import { PageHero } from "@/components/ui/PageHero";
import { ServiceIntro } from "@/components/services/ServiceIntro";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { ServiceCTA } from "@/components/services/ServiceCTA";

export const metadata = {
  title: 'Incorporation Services',
  description: 'Let us help you start your business on a solid foundation with our expert incorporation services.',
};

export default function IncorporationPage() {
  return (
    <>
      <PageHero 
        title="Incorporation"
        imagePath="/images/banner-service-incorporation.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Services" },
          { label: "Incorporation" }
        ]}
      />
      
      <ServiceIntro label="Incorporation" tagline="Empower Your Business Beginnings">
        Starting a new business is an exciting journey, but it comes with complex legal and financial decisions. We simplify the process of incorporating your business by evaluating your specific goals and determining the best business structure for your ultimate success.
      </ServiceIntro>

      <ServiceDetail 
        imagePath="/images/Sliderimg1.jpg"
        content={
          <>
            <p>
              Whether you are establishing a federal or provincial corporation, our team will guide you through name searches, drafting articles of incorporation, and initial organizational resolutions. 
            </p>
            <p className="mt-4">
              We ensure your new entity is structured efficiently right from the start to minimize future tax burdens and protect your personal assets. We also handle the registration of your Business Number (BN), GST/HST accounts, and payroll accounts with the CRA.
            </p>
          </>
        }
      />

      <ServiceCTA />
    </>
  );
}
