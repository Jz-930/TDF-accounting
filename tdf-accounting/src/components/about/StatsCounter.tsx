import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Dictionary } from "@/i18n/dictionaries/en";

export function StatsCounter({ dict }: { dict: Dictionary }) {
  const stats = [
    { value: 1500, suffix: "+", label: dict.about.stats.projects },
    { value: 50, suffix: "+", label: dict.about.stats.team },
    { value: 250, suffix: "+", label: dict.about.stats.clients },
  ];

  return (
    <section className="py-20 bg-primary-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          {stats.map((stat, index) => (
            <div key={stat.label} className="pt-8 md:pt-0 pb-8 md:pb-0 flex flex-col items-center justify-center">
              <div className="text-5xl lg:text-7xl font-bold text-white mb-4">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-lg text-accent uppercase tracking-wider font-semibold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
