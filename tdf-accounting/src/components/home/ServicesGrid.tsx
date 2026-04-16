import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Building, CreditCard, Calculator, Receipt } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Dictionary } from "@/i18n/dictionaries/en";

export function ServicesGrid({ dict, lang }: { dict: Dictionary, lang: string }) {
  const services = [
    {
      type: "large",
      title: dict.home.servicesGrid.taxTitle,
      description: dict.home.servicesGrid.taxDesc,
      icon: Receipt,
      href: `/${lang}/services/tax`,
      image: "/images/banner-service-tax.webp"
    },
    {
      type: "small",
      title: dict.home.servicesGrid.incTitle,
      description: dict.home.servicesGrid.incDesc,
      icon: Building,
      href: `/${lang}/services/incorporation`,
      image: "/images/banner-service-incorporation.webp"
    },
    {
      type: "small",
      title: dict.home.servicesGrid.accTitle,
      description: dict.home.servicesGrid.accDesc,
      icon: CreditCard,
      href: `/${lang}/services/business-accounts`,
      image: "/images/banner-service-corporate-accounts.webp"
    },
    {
      type: "wide",
      title: dict.home.servicesGrid.bookTitle,
      description: dict.home.servicesGrid.bookDesc,
      icon: Calculator,
      href: `/${lang}/services/accounting`,
      image: "/images/banner-service-accounting.webp"
    },
  ];

  const Icon0 = services[0].icon;
  const Icon1 = services[1].icon;
  const Icon2 = services[2].icon;
  const Icon3 = services[3].icon;

  return (
    <section className="py-32 bg-white relative">
      <div className="absolute top-0 w-full h-[600px] bg-gradient-to-b from-gray-50 to-white" />
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-300">
        <ScrollReveal>
          <SectionHeading 
            centered
            label={dict.home.servicesGrid.label}
            title={dict.home.servicesGrid.title}
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-6xl 2xl:max-w-full mx-auto transition-all duration-500">
          
          {/* Large Card: Tax Services */}
          <Link href={services[0].href} className="md:col-span-2 md:row-span-2 group block relative rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 min-h-[400px]">
            <Image src={services[0].image} alt={services[0].title} fill className="object-cover scale-100 group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/60 to-transparent" />
            <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-end">
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
            <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
              <Icon1 className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{services[1].title}</h3>
              <p className="text-white/70 text-sm line-clamp-2">{services[1].description}</p>
            </div>
          </Link>

          {/* Small Card 2: Business Accounts */}
          <Link href={services[2].href} className="group block relative rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-700 min-h-[250px]">
            <Image src={services[2].image} alt={services[2].title} fill className="object-cover scale-100 group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
              <Icon2 className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{services[2].title}</h3>
              <p className="text-white/70 text-sm line-clamp-2">{services[2].description}</p>
            </div>
          </Link>

          {/* Wide Card: Accounting Services */}
          <Link href={services[3].href} className="md:col-span-3 group block relative rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 min-h-[300px] mt-2">
            <div className="absolute inset-0 bg-primary-dark group-hover:bg-primary transition-colors duration-700 z-0" />
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[url('/images/Contact-bg.webp')] opacity-20 mix-blend-overlay group-hover:scale-105 transition-transform duration-1000 z-0" />
            
            <div className="relative z-10 p-8 md:p-14 flex flex-col md:flex-row items-center justify-between h-full gap-8 text-center md:text-left">
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
