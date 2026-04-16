import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label: string;
  title: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
}

export function SectionHeading({ label, title, centered = false, className, light = false }: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col mb-12", centered && "items-center text-center", className)}>
      <div className={cn("flex items-center gap-3 mb-3", centered ? "justify-center" : "")}>
        {centered && <div className="w-8 h-[2px] bg-accent" />}
        {!centered && <div className="w-8 h-[2px] bg-primary" />}
        <span className={cn("font-bold tracking-wider text-sm uppercase", light ? "text-accent" : "text-primary")}>
          {label}
        </span>
        {centered && <div className="w-8 h-[2px] bg-accent" />}
      </div>
      <h2 className={cn("text-3xl md:text-4xl lg:text-5xl font-bold", light ? "text-white" : "text-text-primary")}>
        {title}
      </h2>
    </div>
  );
}
