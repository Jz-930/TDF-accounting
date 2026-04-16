import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Eye, Target } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Dictionary } from "@/i18n/dictionaries/en";

export function VisionMission({ dict }: { dict: Dictionary }) {
  return (
    <section className="py-24 relative bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          <div>
            <Card className="h-full p-10 md:p-12 hover:-translate-y-2 border-primary/10 hover:border-primary/30">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-8 shadow-lg">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">{dict.about.vision.title}</h3>
              <p className="text-text-secondary leading-relaxed text-lg">
                {dict.about.vision.desc}
              </p>
            </Card>
          </div>

          <div>
            <Card className="h-full p-10 md:p-12 hover:-translate-y-2 border-primary/10 hover:border-primary/30">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-8 shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">{dict.about.mission.title}</h3>
              <p className="text-text-secondary leading-relaxed text-lg">
                {dict.about.mission.desc}
              </p>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
}
