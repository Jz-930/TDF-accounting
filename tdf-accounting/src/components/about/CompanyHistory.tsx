import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Image from "next/image";
import { Dictionary } from "@/i18n/dictionaries/en";

export function CompanyHistory({ dict }: { dict: Dictionary }) {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          <div className="relative h-full min-h-[400px]">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/blog-cover-teamwork.webp" 
                  alt="TDF Company History" 
                  fill
                  className="object-cover"
                />
              </div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" />
          </div>

          <div className="lg:pl-8">
            <ScrollReveal>
              <SectionHeading 
                label={dict.about.history.label}
                title={dict.about.history.title}
              />
            </ScrollReveal>
              
              <div className="prose prose-lg text-text-secondary">
                <p className="mb-6">
                  {dict.about.history.p1Part1}<strong className="text-primary font-semibold">{dict.about.history.p1Strong}</strong>{dict.about.history.p1Part2}
                </p>
                <p className="mb-6">
                  {dict.about.history.p2Part1}<strong className="text-primary font-semibold">{dict.about.history.p2Strong}</strong>{dict.about.history.p2Part2}
                </p>
                <p>
                  {dict.about.history.p3Part1}<strong className="text-primary font-semibold">{dict.about.history.p3Strong}</strong>{dict.about.history.p3Part2}
                </p>
              </div>
          </div>

        </div>
      </div>
    </section>
  );
}
