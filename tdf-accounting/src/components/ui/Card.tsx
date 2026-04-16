import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "glass" | "glass-dark";
}

export function Card({ children, className, variant = "default" }: CardProps) {
  return (
    <div className={cn(
      "rounded-3xl transition-all duration-500 overflow-hidden group relative",
      variant === "default" && "bg-white shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1.5",
      variant === "glass" && "glass hover:shadow-2xl hover:bg-white/80 hover:-translate-y-2",
      variant === "glass-dark" && "glass-dark hover:shadow-2xl hover:bg-[#001A2C]/80 hover:-translate-y-2",
      className
    )}>
      {children}
    </div>
  );
}
