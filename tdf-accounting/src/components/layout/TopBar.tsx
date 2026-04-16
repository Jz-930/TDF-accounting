import { MapPin, Phone, Mail } from "lucide-react";
import { Dictionary } from "@/i18n/dictionaries/en";
import { LanguageSwitcher } from "./LanguageSwitcher";

interface TopBarProps {
  dict: Dictionary;
}

export function TopBar({ dict }: TopBarProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm border-b border-border hidden md:block">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-gradient-start to-gradient-end" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-10 text-xs text-text-secondary">
          <div className="flex items-center space-x-6">
            <LanguageSwitcher />
            <div className="flex items-center">
              <MapPin className="w-3.5 h-3.5 mr-1.5 text-primary" />
              <span>{dict.layout.topbar.address}</span>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <a href="tel:647-877-5996" className="flex items-center hover:text-primary transition-colors">
              <Phone className="w-3.5 h-3.5 mr-1.5 text-primary" />
              <span>{dict.layout.topbar.phone}</span>
            </a>
            <a href="mailto:info@tdfaccounting.com" className="flex items-center hover:text-primary transition-colors">
              <Mail className="w-3.5 h-3.5 mr-1.5 text-primary" />
              <span>{dict.layout.topbar.email}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
