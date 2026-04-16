import { Card } from "@/components/ui/Card";
import { Building2, Briefcase, FileText } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const highlights = [
  {
    title: "Our Company",
    description: "Learn about our extensive history serving the Markham community and beyond since 2015.",
    icon: Building2,
    link: "/about"
  },
  {
    title: "Our Services",
    description: "From corporate tax to incorporation, we provide holistic business solutions.",
    icon: Briefcase,
    link: "/services/tax"
  },
  {
    title: "Get a Free Quote",
    description: "Contact us today for a complimentary assessment of your financial health.",
    icon: FileText,
    link: "/contact"
  }
];

export function HighlightCards() {
  return (
    <section className="relative z-30 pb-20 -mt-8 md:-mt-16 lg:-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item) => (
              <Card key={item.title} variant="glass" className="h-full flex flex-col p-8 md:p-10 relative group border-white/60 bg-white/70 backdrop-blur-3xl overflow-hidden hover:bg-white/95">
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-all duration-700" />
                
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-6 group-hover:from-primary group-hover:to-accent transition-colors duration-500 shadow-inner">
                  <item.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-500" />
                </div>
                
                <h3 className="relative z-10 text-2xl font-bold text-text-primary mb-4 tracking-tight">{item.title}</h3>
                
                <p className="relative z-10 text-text-secondary leading-relaxed mb-8 flex-grow">
                  {item.description}
                </p>
                
                <Link 
                  href={item.link}
                  className="relative z-10 inline-flex items-center text-sm font-bold tracking-wide text-primary uppercase group-hover:text-accent transition-colors mt-auto w-fit"
                >
                  <span className="relative">
                    Read More
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-300" />
                  </span>
                  <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                </Link>
              </Card>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
