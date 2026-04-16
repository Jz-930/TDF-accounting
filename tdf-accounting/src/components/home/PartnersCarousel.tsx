import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Image from "next/image";
import { Dictionary } from "@/i18n/dictionaries/en";

// TDF Partners/Brands from original site
const partners = [
  { name: "Brand 1", src: "/images/brand1.webp", url: "" },
  { name: "Brand 2", src: "/images/Brand2.webp", url: "" },
  { name: "DME Studio", src: "/images/DME logo v3.webp", url: "https://dmestudio.net" },
  { name: "Brand 4", src: "/images/brand4.webp", url: "" },
  { name: "Brand 6", src: "/images/Brad6.webp", url: "" },
];

export function PartnersCarousel({ dict, lang }: { dict: Dictionary, lang: string }) {
  // Double the array for seamless single-track loop
  const doubled = [...partners, ...partners];

  return (
    <section className="py-20 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <ScrollReveal>
          <SectionHeading 
            centered
            label={dict.home.partners.label}
            title={dict.home.partners.title}
            className="mb-0"
          />
        </ScrollReveal>
      </div>

      {/* Single scrolling track */}
      <div className="relative overflow-x-hidden group">
        <div className="partners-track flex items-center">
          {doubled.map((partner, index) => {
            const logoEl = (
              <div className="relative w-full h-full">
                <Image
                  src={partner.src}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            );
            return (
              <div key={`${partner.name}-${index}`} className="flex-shrink-0 w-48 md:w-64 mx-8 flex justify-center items-center h-24 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                {partner.url ? (
                  <a href={partner.url} target="_blank" rel="noopener" title={partner.name} className="block w-full h-full">
                    {logoEl}
                  </a>
                ) : logoEl}
              </div>
            );
          })}
        </div>
        
        {/* Gradient fades for the edges */}
        <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white to-transparent z-10" />
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes partners-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .partners-track {
          animation: partners-scroll 25s linear infinite;
          width: max-content;
        }
        .group:hover .partners-track {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}
