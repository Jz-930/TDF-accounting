import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Dictionary } from "@/i18n/dictionaries/en";

export function ServiceCTA({ dict, lang }: { dict: Dictionary, lang: string }) {
  return (
    <section className="py-20 relative bg-gradient-to-r from-primary to-accent overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {dict.services.cta.title}
          </h2>
          <p className="text-xl text-white/90 mb-10">
            {dict.services.cta.desc}
          </p>
          <Button size="lg" variant="secondary" className="font-bold text-primary shadow-xl hover:scale-105 transition-transform" asChild>
            <Link href={`/${lang}/contact`}>{dict.services.cta.btn}</Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
