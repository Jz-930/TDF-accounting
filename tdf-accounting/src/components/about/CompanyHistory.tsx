import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Image from "next/image";

export function CompanyHistory() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          <div className="relative h-full min-h-[400px]">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/blog-cover-teamwork.jpg" 
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
                label="About Our Firm"
                title="A Legacy of Financial Excellence"
              />
            </ScrollReveal>
              
              <div className="prose prose-lg text-text-secondary">
                <p className="mb-6">
                  Founded in 2015, <strong className="text-primary font-semibold">TDF Chartered Professional Accountants</strong> has grown into a trusted partner for businesses across Markham and the Greater Toronto Area. We started with a simple belief: accounting should be more than just filing numbers; it should be about strategic growth.
                </p>
                <p className="mb-6">
                  As proud members of <strong className="text-primary font-semibold">CPA Ontario</strong>, we bring strict professional standards and innovative thinking to everything we do.
                </p>
                <p>
                  Today, we leverage <strong className="text-primary font-semibold">cloud-based technologies</strong> to provide real-time insights, allowing our clients to make informed decisions faster. We are not just your accountants; we are your financial navigators.
                </p>
              </div>
          </div>

        </div>
      </div>
    </section>
  );
}
