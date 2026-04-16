"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, Building, CreditCard, Calculator, Receipt, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const services = [
  { name: "Incorporation", href: "/services/incorporation", icon: Building },
  { name: "Open Business Accounts", href: "/services/business-accounts", icon: CreditCard },
  { name: "Accounting Services", href: "/services/accounting", icon: Calculator },
  { name: "Tax Services", href: "/services/tax", icon: Receipt },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path || pathname.startsWith(path + '/');

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300 w-full",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image
              src="/images/weblogo2.png"
              alt="TDF Accounting"
              width={160}
              height={48}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/" className={cn("text-sm font-medium transition-colors hover:text-primary", pathname === "/" ? "text-primary" : "text-text-primary")}>
              Home
            </Link>
            <Link href="/about" className={cn("text-sm font-medium transition-colors hover:text-primary", isActive("/about") ? "text-primary" : "text-text-primary")}>
              About Us
            </Link>
            
            {/* Dropdown menu */}
            <div className="relative group">
              <button className={cn("flex items-center text-sm font-medium transition-colors hover:text-primary", isActive("/services") ? "text-primary" : "text-text-primary")}>
                Our Services <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="w-64 bg-white rounded-xl shadow-xl ring-1 ring-black/5 p-2 flex flex-col gap-1">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="flex items-center px-4 py-3 text-sm text-text-secondary hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <service.icon className="w-4 h-4 mr-3 opacity-70" />
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/blog" className={cn("text-sm font-medium transition-colors hover:text-primary", isActive("/blog") ? "text-primary" : "text-text-primary")}>
              Blog
            </Link>
            <Link href="/contact" className={cn("text-sm font-medium transition-colors hover:text-primary", isActive("/contact") ? "text-primary" : "text-text-primary")}>
              Contact Us
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Button variant="gradient" asChild>
              <Link href="/contact">Book Today</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="text-text-primary hover:text-primary p-2"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/50"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="absolute right-0 top-0 bottom-0 w-[80%] max-w-sm bg-white shadow-2xl flex flex-col pt-6 pb-8 overflow-y-auto"
            >
              <div className="px-6 flex items-center justify-between mb-8">
                <Image src="/images/weblogo2.png" alt="TDF Logo" width={120} height={40} className="w-auto h-8" />
                <button onClick={() => setMobileMenuOpen(false)} className="text-gray-500 hover:text-primary p-2">
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="px-4 flex flex-col space-y-2 flex-grow">
                <Link onClick={() => setMobileMenuOpen(false)} href="/" className="px-4 py-3 text-base font-medium rounded-lg hover:bg-gray-50">Home</Link>
                <Link onClick={() => setMobileMenuOpen(false)} href="/about" className="px-4 py-3 text-base font-medium rounded-lg hover:bg-gray-50">About Us</Link>
                
                <div className="border-t border-b border-gray-100 my-2">
                  <button 
                    onClick={() => setServicesExpanded(!servicesExpanded)} 
                    className="w-full flex items-center justify-between px-4 py-3 text-base font-medium hover:bg-gray-50"
                  >
                    Our Services
                    <ChevronDown className={cn("w-5 h-5 transition-transform", servicesExpanded && "rotate-180")} />
                  </button>
                  <AnimatePresence>
                    {servicesExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-6 pr-4 pb-3 flex flex-col space-y-1">
                          {services.map(s => (
                            <Link 
                              key={s.name} 
                              href={s.href} 
                              onClick={() => setMobileMenuOpen(false)}
                              className="px-4 py-2 text-sm text-text-secondary hover:text-primary hover:bg-gray-50 rounded-lg flex items-center"
                            >
                              <s.icon className="w-4 h-4 mr-3 opacity-60" />
                              {s.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link onClick={() => setMobileMenuOpen(false)} href="/blog" className="px-4 py-3 text-base font-medium rounded-lg hover:bg-gray-50">Blog</Link>
                <Link onClick={() => setMobileMenuOpen(false)} href="/contact" className="px-4 py-3 text-base font-medium rounded-lg hover:bg-gray-50">Contact Us</Link>
              </div>

              <div className="px-6 mt-8">
                <Button variant="gradient" className="w-full" asChild onClick={() => setMobileMenuOpen(false)}>
                  <Link href="/contact">Book Today</Link>
                </Button>
                <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col space-y-3 px-2 text-sm text-text-secondary">
                  <div className="flex items-center"><Phone className="w-4 h-4 mr-3 text-primary"/> 647-877-5996</div>
                  <div className="flex items-center"><Mail className="w-4 h-4 mr-3 text-primary"/> info@tdfaccounting.com</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
