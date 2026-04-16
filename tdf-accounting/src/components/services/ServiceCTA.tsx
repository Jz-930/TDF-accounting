import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function ServiceCTA() {
  return (
    <section className="py-20 relative bg-gradient-to-r from-primary to-accent overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Contact us today for a free consultation and discover how we can help your business thrive.
          </p>
          <Button size="lg" variant="secondary" className="font-bold text-primary shadow-xl hover:scale-105 transition-transform" asChild>
            <Link href="/contact">Book Now</Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
