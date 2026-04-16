import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Image from "next/image";

// TDF Partners/Brands from original site
const partners = [
  { name: "Brand 1", src: "/images/brand1.jpg" },
  { name: "Brand 2", src: "/images/Brand2.jpg" },
  { name: "Brand 4", src: "/images/brand4.jpg" },
  { name: "Brand 6", src: "/images/Brad6.jpg" },
];

export function PartnersCarousel() {
  // Double the array for seamless single-track loop
  const doubled = [...partners, ...partners];

  return (
    <section className="py-20 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <ScrollReveal>
          <SectionHeading 
            centered
            label="Partners"
            title="We're Working with"
            className="mb-0"
          />
        </ScrollReveal>
      </div>

      {/* Single scrolling track */}
      <div className="relative overflow-x-hidden group">
        <div className="partners-track flex items-center">
          {doubled.map((partner, index) => (
            <div key={`${partner.name}-${index}`} className="flex-shrink-0 w-48 md:w-64 mx-8 flex justify-center items-center h-24 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <div className="relative w-full h-full">
                <Image
                  src={partner.src}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
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
