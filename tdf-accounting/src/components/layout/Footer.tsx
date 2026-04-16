import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { Dictionary } from "@/i18n/dictionaries/en";

interface FooterProps {
  dict: Dictionary;
  lang: string;
}

export function Footer({ dict, lang }: FooterProps) {
  return (
    <footer className="bg-primary-dark pt-16 pb-8 text-white relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 sm:px-8 relative z-10 transition-all duration-500">
        
        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 mb-16 flex flex-col md:flex-row items-center justify-between shadow-2xl">
          <div>
            <h3 className="text-2xl font-bold mb-2">{dict.layout.footer.ctaTitle}</h3>
            <p className="text-primary-dark/80 font-medium">{dict.layout.footer.ctaDesc}</p>
          </div>
          <Button variant="secondary" size="lg" className="mt-6 md:mt-0 font-bold" asChild>
            <Link href={`/${lang}/contact`}>{dict.layout.footer.ctaBtn}</Link>
          </Button>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-12">
          
          {/* Column 1 */}
          <div className="space-y-6">
            <Link href={`/${lang}`} className="inline-block bg-white p-2 rounded-lg">
              <Image src="/images/weblogo2.webp" alt="TDF Accounting" width={140} height={42} className="h-8 w-auto" />
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed font-light">
              {dict.layout.footer.aboutDesc}
            </p>
            <div className="flex space-x-4">
              <Link href={`/${lang}/contact`} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <MessageCircle className="w-5 h-5 text-white" />
              </Link>
              <a href="mailto:info@tdfaccounting.com" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">{dict.layout.footer.servicesTitle}</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><Link href={`/${lang}/services/incorporation`} className="hover:text-accent transition-colors">{dict.layout.navbar.servicesDropdown.incorporation}</Link></li>
              <li><Link href={`/${lang}/services/business-accounts`} className="hover:text-accent transition-colors">{dict.layout.navbar.servicesDropdown.businessAccounts}</Link></li>
              <li><Link href={`/${lang}/services/accounting`} className="hover:text-accent transition-colors">{dict.layout.navbar.servicesDropdown.accounting}</Link></li>
              <li><Link href={`/${lang}/services/tax`} className="hover:text-accent transition-colors">{dict.layout.navbar.servicesDropdown.tax}</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">{dict.layout.footer.linksTitle}</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><Link href={`/${lang}`} className="hover:text-accent transition-colors">{dict.layout.navbar.home}</Link></li>
              <li><Link href={`/${lang}/about`} className="hover:text-accent transition-colors">{dict.layout.navbar.about}</Link></li>
              <li><Link href={`/${lang}/blog`} className="hover:text-accent transition-colors">{dict.layout.navbar.blog}</Link></li>
              <li><Link href={`/${lang}/contact`} className="hover:text-accent transition-colors">{dict.layout.navbar.contact}</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">{dict.layout.footer.contactTitle}</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-accent shrink-0 mt-0.5" />
                <span>{dict.layout.topbar.address}</span>
              </li>
              <li>
                <a href="tel:647-877-5996" className="flex items-center hover:text-accent transition-colors">
                  <Phone className="w-5 h-5 mr-3 text-accent shrink-0" />
                  {dict.layout.topbar.phone}
                </a>
              </li>
              <li>
                <a href="mailto:info@tdfaccounting.com" className="flex items-center hover:text-accent transition-colors">
                  <Mail className="w-5 h-5 mr-3 text-accent shrink-0" />
                  {dict.layout.topbar.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Separator */}
        <div className="border-t border-white/10 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4 text-center md:text-left">
          <p>{dict.layout.footer.copyright}</p>
          <span aria-hidden="true" style={{ display: 'none', position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}>
            Created by DME-Jiackey
          </span>
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-gray-200 transition-colors">{dict.layout.footer.privacy}</Link>
            <Link href="#" className="hover:text-gray-200 transition-colors">{dict.layout.footer.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
