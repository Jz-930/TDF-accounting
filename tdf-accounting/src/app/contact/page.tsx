import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { MapPin, Phone, Mail } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with TDF Accounting. We are here to help you with your tax planning and accounting needs.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero 
        title="Contact Us"
        imagePath="/images/banner-contact.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us" }
        ]}
      />
      
      <section className="py-24 bg-off-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-8 items-start">
            <div className="w-full">
              <ContactForm />
            </div>

            <div className="h-full w-full">
              <div className="bg-primary rounded-3xl p-8 md:p-12 shadow-2xl text-white relative overflow-hidden h-full">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-dark/30 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4" />
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-10">Contact Info</h3>
                  
                  <div className="space-y-10">
                    <div className="flex items-start group">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 mr-5 group-hover:bg-accent/20 transition-colors">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1 text-lg">Our Location</p>
                        <p className="text-white/80 leading-relaxed">
                          6F, 15 Allstate Parkway,<br />Markham, ON L3R 5B4
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start group">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 mr-5 group-hover:bg-accent/20 transition-colors">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1 text-lg">Phone Number</p>
                        <a href="tel:647-877-5996" className="text-white/80 hover:text-accent transition-colors block">
                          647-877-5996
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start group">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 mr-5 group-hover:bg-accent/20 transition-colors">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1 text-lg">Email Address</p>
                        <a href="mailto:info@tdfaccounting.com" className="text-white/80 hover:text-accent transition-colors block break-all">
                          info@tdfaccounting.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="h-[400px] w-full bg-gray-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1s0x89d4d38c62c2f781%3A0xffa550fa2c64b638!2s15%20Allstate%20Pkwy%206th%20Floor%2C%20Markham%2C%20ON%20L3R%205B4!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        />
      </section>
    </>
  );
}
