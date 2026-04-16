import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-[95vh] xl:min-h-[90vh] flex items-center justify-center overflow-hidden bg-primary-dark pt-20 pb-40 lg:pb-48 transition-all duration-500">
      
      {/* Background Animated Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px] mix-blend-screen opacity-70" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[150px] mix-blend-screen opacity-60" />
      
      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('/images/Contact-bg.webp')] opacity-5 mix-blend-overlay" />
      
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-16 transition-all duration-500">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start pr-0 lg:pr-12 relative z-20">
            <div className="inline-flex items-center gap-3 mb-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-white/90 font-medium tracking-wide text-sm uppercase">
                Welcome to TDF Accounting
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl 2xl:text-8xl font-bold text-white leading-[1.1] mb-8 tracking-tighter transition-all duration-500">
              Strategic Insight to 
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-white bg-[length:200%_auto] animate-shimmer">
                Grow Your Business
              </span>
            </h1>
            
            <p className="text-xl 2xl:text-2xl text-white/70 mb-12 max-w-xl 2xl:max-w-2xl leading-relaxed font-light transition-all duration-500">
              Serving Markham and beyond with expert corporate tax, precise bookkeeping, and holistic financial architecture tailored for ambitious enterprises.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
              <Button size="lg" variant="gradient" className="text-lg 2xl:text-xl px-8 2xl:px-10 h-14 2xl:h-16 shadow-[0_0_40px_rgba(90,159,201,0.4)] hover:shadow-[0_0_60px_rgba(90,159,201,0.6)]" asChild>
                <Link href="/contact">Book Strategy Session</Link>
              </Button>
            </div>
          </div>

          {/* Right Concept Image - Removed negative left/right offsets to prevent overlaps */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0 w-full max-w-[420px] 2xl:max-w-[500px] mx-auto transition-all duration-500">
            
            <div className="relative aspect-[3/4] w-full rounded-[2.5rem] overflow-hidden border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.5)] group">
              <Image 
                src="/images/Sliderimg1.webp" 
                alt="Business Discussion at TDF Accounting" 
                fill
                priority
                className="object-cover scale-100 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/20 to-transparent opacity-80 mix-blend-multiply" />
              
              {/* Badges moved inside the image container so they don't break flex boundaries */}
              {/* Top Badge */}
              <div className="absolute top-6 left-6 glass-dark p-4 rounded-xl flex items-center gap-4 border border-white/10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-inner">
                  <span className="text-white font-bold text-xl">15+</span>
                </div>
                <div>
                  <p className="font-bold text-white text-sm tracking-wide">Years Experience</p>
                  <p className="text-xs text-accent font-medium mt-0.5">CPA Ontario</p>
                </div>
              </div>

              {/* Bottom Badge */}
              <div className="absolute bottom-6 right-6 glass p-4 rounded-xl flex items-center gap-3 border border-white/20">
                <Image src="/images/weblogo2.webp" alt="TDF Icon" width={90} height={24} className="w-auto h-5 object-contain" />
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
