import Image from "next/image";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Play } from "lucide-react";

export function AboutPreview() {
  return (
    <section className="py-32 bg-[#000d1a] relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/20 rounded-full blur-[100px] mix-blend-screen" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Cinematic Image Stack (Fixed Overlap) */}
          <div className="order-2 lg:order-1 mt-12 lg:mt-0 grid grid-cols-2 gap-4">
            
            {/* Primary Large Image */}
            <div className="col-span-2 relative aspect-[16/9] rounded-[2rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-white/10 group">
              <Image 
                src="/images/about-preview.webp" 
                alt="TDF Accounting Office" 
                fill
                className="object-cover scale-100 group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000d1a]/80 via-transparent to-transparent" />
            </div>
          
            {/* Secondary Image: Team */}
            <div className="col-span-1 relative aspect-square rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-white/10 group mt-4">
              <Image 
                src="/images/Slider-img1.webp" 
                alt="Our Team" 
                fill
                className="object-cover scale-100 group-hover:scale-105 transition-transform duration-1000"
              />
            </div>

            {/* Tertiary Block: Est. Year */}
            <div className="col-span-1 glass-dark rounded-3xl p-6 flex flex-col justify-center items-center text-center mt-4 border border-white/10 shadow-xl group hover:border-accent/40 transition-colors">
               <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-white group-hover:scale-110 transition-transform">
                 2015
               </span>
               <span className="text-white/70 text-sm mt-3 tracking-widest uppercase font-medium">Established</span>
            </div>

          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-3 mb-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 hover:bg-white/10 transition-colors">
              <span className="text-accent font-medium tracking-widest text-sm uppercase">Who We Are</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight tracking-tight">
              Architects of Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">Financial Future</span>
            </h2>
            
            <div className="text-lg text-white/70 mb-12 space-y-6">
              <p className="leading-relaxed font-light">
                <strong className="text-white font-medium">TDF Chartered Professional Accountants</strong> is not just a firm; we are strategic partners for small to medium-sized businesses across Markham and Ontario. 
              </p>
              <p className="leading-relaxed font-light">
                Established in 2015, we fuse deep-rooted traditional accounting expertise with cutting-edge cloud tech, unlocking powerful real-time insights that drive explosive growth and risk-free compliance.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Button size="lg" variant="gradient" className="shadow-[0_0_30px_rgba(90,159,201,0.3)] hover:shadow-[0_0_50px_rgba(90,159,201,0.5)]" asChild>
                <Link href="/about">
                  Discover Our Legacy
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10" asChild>
                <Link href="/contact">
                  Meet the Team
                </Link>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
