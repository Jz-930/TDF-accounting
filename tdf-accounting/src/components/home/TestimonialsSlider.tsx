"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Benjamin",
    role: "Business Owner",
    content: "TDF Accounting has been instrumental in organizing our corporate taxes. Their attention to detail and proactive advice saved us thousands of dollars.",
  },
  {
    name: "Rahina",
    role: "Entrepreneur",
    content: "Opening my business accounts and setting up the corporation was seamless. Jing and her team are true professionals who care about your success.",
  },
  {
    name: "Alexander",
    role: "Startup Founder",
    content: "Excellent accounting services! They take the time to explain complex tax issues in a way that makes sense. Highly recommended for any small business.",
  }
];

export function TestimonialsSlider() {
  return (
    <section className="py-24 bg-primary-dark relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[url('/images/Contact-bg.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/20 xl:from-primary/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <SectionHeading 
            centered
            light
            label="Testimonials"
            title="Happy Clients"
          />
        </ScrollReveal>

        <div className="mt-16 flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 md:grid md:grid-cols-3 md:overflow-visible md:snap-none hide-scrollbar">
          {testimonials.map((t, i) => (
            <div 
              key={t.name} 
              className="snap-center shrink-0 w-[85vw] md:w-auto"
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl relative h-full flex flex-col group">
                <Quote className="w-12 h-12 text-primary/10 absolute top-6 right-6 group-hover:text-primary/20 transition-colors duration-300" />
                
                <p className="text-text-secondary leading-relaxed mb-8 flex-grow relative z-10 italic">
                  "{t.content}"
                </p>
                
                <div className="border-t border-gray-100 pt-6 mt-auto">
                  <h4 className="font-bold text-lg text-text-primary">{t.name}</h4>
                  <p className="text-sm text-primary font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
