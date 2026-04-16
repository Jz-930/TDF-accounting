import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ReactNode } from "react";

interface ServiceIntroProps {
  label: string;
  tagline: string;
  children: ReactNode;
}

export function ServiceIntro({ label, tagline, children }: ServiceIntroProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <SectionHeading 
            centered
            label={label}
            title={tagline}
            className="mb-8"
          />
          <div className="prose prose-lg mx-auto text-text-secondary leading-relaxed">
            {children}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
