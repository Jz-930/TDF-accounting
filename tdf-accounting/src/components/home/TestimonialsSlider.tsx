"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Dictionary } from "@/i18n/dictionaries/en";
import Image from "next/image";
import { useState, useEffect, useCallback, useRef, TouchEvent } from "react";

export function TestimonialsSlider({ dict, lang }: { dict: Dictionary, lang: string }) {
  const testimonials = [
    {
      name: dict.home.testimonials.t1Name,
      role: dict.home.testimonials.t1Role,
      content: dict.home.testimonials.t1Desc,
    },
    {
      name: dict.home.testimonials.t2Name,
      role: dict.home.testimonials.t2Role,
      content: dict.home.testimonials.t2Desc,
    },
    {
      name: dict.home.testimonials.t3Name,
      role: dict.home.testimonials.t3Role,
      content: dict.home.testimonials.t3Desc,
    },
    {
      name: dict.home.testimonials.t4Name,
      role: dict.home.testimonials.t4Role,
      content: dict.home.testimonials.t4Desc,
      logo: "/images/DME logo v3.webp",
      website: "https://dmestudio.net",
    }
  ];

  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = testimonials.length;

  // Touch swipe tracking
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Auto-advance every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  // Get visible indices for desktop (3 cards with wrap-around)
  const getDesktopIndices = () => {
    const indices = [];
    for (let i = 0; i < 3; i++) {
      indices.push((current + i) % total);
    }
    return indices;
  };

  const desktopIndices = getDesktopIndices();

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
    // Resume auto-play after a delay
    setTimeout(() => setIsPaused(false), 3000);
  };

  return (
    <section className="py-24 bg-primary-dark relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[url('/images/Contact-bg.webp')] bg-cover bg-center opacity-10 mix-blend-overlay" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/20 xl:from-primary/10 to-transparent" />
      
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-300">
        <ScrollReveal>
          <SectionHeading 
            centered
            light
            label={dict.home.testimonials.label}
            title={dict.home.testimonials.title}
          />
        </ScrollReveal>

        {/* Carousel container */}
        <div 
          className="mt-16 relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* ===== Mobile view: 1 card at a time with swipe ===== */}
          <div 
            className="md:hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {testimonials.map((t) => (
                  <div key={t.name} className="w-full flex-shrink-0 px-2">
                    <TestimonialCard t={t} />
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile dot indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current 
                      ? 'bg-white w-6' 
                      : 'bg-white/30 hover:bg-white/50 w-2'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* ===== Desktop view: 3 cards at a time ===== */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {desktopIndices.map((idx, pos) => {
              const t = testimonials[idx];
              return (
                <div
                  key={`${current}-${pos}`}
                  className="animate-[fadeSlideIn_0.5s_ease-out]"
                >
                  <TestimonialCard t={t} />
                </div>
              );
            })}
          </div>

          {/* Navigation arrows - desktop only */}
          <button
            onClick={prev}
            aria-label="Previous testimonials"
            className="hidden md:flex absolute -left-4 xl:-left-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all duration-300 z-20"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonials"
            className="hidden md:flex absolute -right-4 xl:-right-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all duration-300 z-20"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Desktop dot indicators */}
          <div className="hidden md:flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial set ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current 
                    ? 'bg-white w-6' 
                    : 'bg-white/30 hover:bg-white/50 w-2'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Keyframe animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}} />
    </section>
  );
}

/* Extracted card component for reuse */
function TestimonialCard({ t }: { t: { name: string; role: string; content: string; logo?: string; website?: string } }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl relative h-full flex flex-col group">
      <Quote className="w-12 h-12 text-primary/10 absolute top-6 right-6 group-hover:text-primary/20 transition-colors duration-300" />
      
      <p className="text-text-secondary leading-relaxed mb-8 flex-grow relative z-10 italic">
        &ldquo;{t.content}&rdquo;
      </p>
      
      <div className="border-t border-gray-100 pt-6 mt-auto">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h4 className="font-bold text-lg text-text-primary">{t.name}</h4>
            <p className="text-sm text-primary font-medium">{t.role}</p>
          </div>
          {/* DMEStudio logo & backlink – SEO dofollow */}
          {t.logo && (
            <a
              href={t.website}
              target="_blank"
              rel="noopener"
              title={t.role}
              className="flex-shrink-0 opacity-50 hover:opacity-100 transition-opacity duration-300"
            >
              <Image
                src={t.logo}
                alt={`${t.name} - ${t.role}`}
                width={48}
                height={48}
                className="object-contain rounded"
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
