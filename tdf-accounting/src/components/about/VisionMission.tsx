import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Eye, Target } from "lucide-react";
import { Card } from "@/components/ui/Card";

export function VisionMission() {
  return (
    <section className="py-24 relative bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          <div>
            <Card className="h-full p-10 md:p-12 hover:-translate-y-2 border-primary/10 hover:border-primary/30">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-8 shadow-lg">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">Our Vision</h3>
              <p className="text-text-secondary leading-relaxed text-lg">
                To be the most trusted and forward-thinking financial partner for businesses in Ontario, guiding our clients toward sustainable growth through clarity, integrity, and innovative accounting solutions.
              </p>
            </Card>
          </div>

          <div>
            <Card className="h-full p-10 md:p-12 hover:-translate-y-2 border-primary/10 hover:border-primary/30">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-8 shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">Our Mission</h3>
              <p className="text-text-secondary leading-relaxed text-lg">
                We empower entrepreneurs by demystifying complex tax structures and providing proactive financial strategies. We are committed to lifting the administrative burden so our clients can focus on what they do best: growing their business.
              </p>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
}
