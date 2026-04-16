import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Image from "next/image";
import { Mail } from "lucide-react";
import { Dictionary } from "@/i18n/dictionaries/en";

export function TeamSection({ dict, lang }: { dict: Dictionary, lang: string }) {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal>
          <SectionHeading 
            centered
            label={dict.home.team.label}
            title={dict.home.team.title}
          />
        </ScrollReveal>

        <div className="max-w-4xl mx-auto mt-16">
          <div className="relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-xl group">
            {/* Background decorative element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-accent/5 rounded-bl-[100%] z-0 transition-transform duration-700 group-hover:scale-110" />

            <div className="flex flex-col md:flex-row relative z-10">
              
              {/* Photo Area */}
              <div className="w-full md:w-2/5 relative aspect-square md:aspect-[3/4]">
                <Image 
                  src="/images/Jing-Li.webp" 
                  alt="Jing Li, CPA, MBA" 
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent md:hidden" />
              </div>

              {/* Info Area */}
              <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-3xl font-bold text-text-primary">{dict.home.team.name}</h3>
                  <a href="mailto:info@tdfaccounting.com" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-primary">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
                
                <p className="text-accent font-semibold tracking-wide uppercase text-sm mb-6">
                  {dict.home.team.role}
                </p>
                
                <div className="prose prose-gray">
                  <p className="mb-4 text-text-secondary leading-relaxed">
                    {dict.home.team.p1}
                  </p>
                  <p className="text-text-secondary leading-relaxed">
                    {dict.home.team.p2}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
