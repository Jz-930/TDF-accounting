"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const pathname = usePathname();
  
  // If we're on the root path (should be caught by middleware normally, but just in case)
  if (pathname === "/") return null;

  const currentLang = pathname.startsWith("/zh") ? "zh" : "en";
  
  const togglePath = (lang: string) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = lang;
    return segments.join("/");
  };

  return (
    <div className="flex items-center space-x-2 text-xs">
      <Link 
        href={togglePath("en")} 
        className={cn("px-2 py-1 rounded transition-colors", currentLang === "en" ? "bg-primary text-white" : "hover:text-primary")}
      >
        EN
      </Link>
      <span className="text-gray-300">|</span>
      <Link 
        href={togglePath("zh")} 
        className={cn("px-2 py-1 rounded transition-colors", currentLang === "zh" ? "bg-primary text-white" : "hover:text-primary")}
      >
        中文
      </Link>
    </div>
  );
}
