import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface PageHeroProps {
  title: string;
  imagePath: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export function PageHero({ title, imagePath, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${imagePath}')` }}
      />
      <div className="absolute inset-0 bg-primary-dark/70" />
      
      <div className="relative z-10 text-center px-4">
        <ScrollReveal>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            {title}
          </h1>
          
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className="flex justify-center flex-wrap items-center space-x-2 text-sm text-gray-300">
              {breadcrumbs.map((crumb, idx) => (
                <span key={idx} className="flex items-center">
                  {idx > 0 && <span className="mx-2 text-gray-500">/</span>}
                  {crumb.href ? (
                    <a href={crumb.href} className="hover:text-accent transition-colors">
                      {crumb.label}
                    </a>
                  ) : (
                    <span className="text-white font-medium">{crumb.label}</span>
                  )}
                </span>
              ))}
            </nav>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
