import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Building, CreditCard, Calculator, Receipt } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    type: "large",
    title: "Tax Services",
    description: "Expertise In Tax Solutions. Corporate T2, Personal T1, Trust returns, and comprehensive strategic tax planning.",
    icon: Receipt,
    href: "/services/tax",
    image: "/images/banner-service-tax.jpg"
  },
  {
    type: "small",
    title: "Incorporation",
    description: "Start on a solid foundation.",
    icon: Building,
    href: "/services/incorporation",
    image: "/images/banner-service-incorporation.jpg"
  },
  {
    type: "small",
    title: "Open Business Accounts",
    description: "Mastering Financial Efficiency.",
    icon: CreditCard,
    href: "/services/business-accounts",
    image: "/images/banner-service-corporate-accounts.jpg"
  },
  {
    type: "wide",
    title: "Accounting Services",
    description: "Insight Into Our Accounting Expertise. Professional bookkeeping and financial statement preparation leveraging cloud tech.",
    icon: Calculator,
    href: "/services/accounting",
    image: "/images/banner-service-accounting.jpg"
  },
];

export function ServicesGrid() {
  const Icon0 = services[0].icon;
  const Icon1 = services[1].icon;
  const Icon2 = services[2].icon;
  const Icon3 = services[3].icon;

  return (
    <section className="py-32 bg-white relative">
      <div className="absolute top-0 w-full h-[600px] bg-gradient-to-b from-gray-50 to-white" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <SectionHeading 
            centered
            label="What we do"
            title="Premium Boutique Services"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto">
          
          {/* Large Card: Tax Services */}
          <Link href={services[0].href} className="md:col-span-2 md:row-span-2 group block relative rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 min-h-[400px]">
            <Image src={services[0].image} alt={services[0].title} fill className="object-cover scale-100 group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/60 to-transparent" />
            <div className="absolute inset-0 p-10 flex flex-col justify-end">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-6">
                <Icon0 className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">{services[0].title}</h3>
              <p className="text-white/80 text-lg leading-relaxed max-w-md">{services[0].description}</p>
            </div>
          </Link>

          {/* Small Card 1: Incorporation */}
          <Link href={services[1].href} className="group block relative rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-700 min-h-[250px]">
            <Image src={services[1].image} alt={services[1].title} fill className="object-cover scale-100 group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <Icon1 className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{services[1].title}</h3>
              <p className="text-white/70 text-sm line-clamp-2">{services[1].description}</p>
            </div>
          </Link>

          {/* Small Card 2: Business Accounts */}
          <Link href={services[2].href} className="group block relative rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-700 min-h-[250px]">
            <Image src={services[2].image} alt={services[2].title} fill className="object-cover scale-100 group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <Icon2 className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{services[2].title}</h3>
              <p className="text-white/70 text-sm line-clamp-2">{services[2].description}</p>
            </div>
          </Link>

          {/* Wide Card: Accounting Services */}
          <Link href={services[3].href} className="md:col-span-3 group block relative rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 min-h-[300px] mt-2">
            <div className="absolute inset-0 bg-primary-dark group-hover:bg-primary transition-colors duration-700 z-0" />
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[url('/images/Contact-bg.jpg')] opacity-20 mix-blend-overlay group-hover:scale-105 transition-transform duration-1000 z-0" />
            
            <div className="relative z-10 p-10 md:p-14 flex flex-col md:flex-row items-center justify-between h-full gap-8">
              <div className="flex-1">
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 border border-white/10">
                  <Icon3 className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">{services[3].title}</h3>
                <p className="text-white/80 text-lg leading-relaxed max-w-2xl">{services[3].description}</p>
              </div>
              <div className="shrink-0">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-primary group-hover:rotate-45 transition-transform duration-500 shadow-xl">
                  <span className="text-2xl font-bold">→</span>
                </div>
              </div>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}
