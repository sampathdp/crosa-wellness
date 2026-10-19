"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AmbientGoldParticles from "./AmbientGoldParticles";

export interface HeroSlide {
  src: string;
  alt: string;
  tagline?: string;
}

const DEFAULT_SLIDES: HeroSlide[] = [
  {
    src: "/images/hero/spa-suite.jpg",
    alt: "CROSA Sanctuary - Sunlit Restorative Spa Suite with Teak Accents",
    tagline: "Restorative Spa Suite",
  },
  {
    src: "/images/hero/fitness-studio.jpg",
    alt: "CROSA Sanctuary - Private Movement & Personal Training Studio",
    tagline: "Private Movement Studio",
  },
  {
    src: "/images/hero/therapeutic-massage.jpg",
    alt: "CROSA Sanctuary - Therapeutic Massage Botanicals & Volcanic Stones",
    tagline: "Therapeutic Botanicals",
  },
  {
    src: "/images/hero/arrival-lounge.jpg",
    alt: "CROSA Sanctuary - Travertine Reception Lounge & Tea Courtyard",
    tagline: "Arrival & Tea Lounge",
  },
  {
    src: "/images/hero/restorative-space.jpg",
    alt: "CROSA Sanctuary - Mindful Movement & Sound Therapy Space",
    tagline: "Mindful Movement Space",
  },
];

interface HeroBgCarouselProps {
  slides?: HeroSlide[];
  intervalMs?: number;
}

export default function HeroBgCarousel({
  slides = DEFAULT_SLIDES,
  intervalMs = 5500,
}: HeroBgCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, intervalMs);
    return () => clearInterval(timer);
  }, [isPaused, intervalMs, nextSlide]);

  return (
    <div
      className="absolute inset-0 z-0 overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="Sanctuary Highlights"
    >
      {/* Background Images with Seamless Crossfade & Subtle Ken Burns */}
      {slides.map((slide, idx) => {
        const isActive = idx === currentIndex;
        return (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
            aria-hidden={!isActive}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={idx === 0}
              quality={92}
              className={`object-cover object-center transition-transform duration-[6000ms] ease-out ${
                isActive ? "scale-105" : "scale-100"
              }`}
            />
          </div>
        );
      })}

      {/* Deep navy scrim: keeps white copy legible while the photo stays visible on the right */}
      <div className="md:hidden absolute inset-0 z-20 pointer-events-none bg-[linear-gradient(180deg,rgba(6,13,26,0.8)_0%,rgba(6,13,26,0.65)_55%,rgba(6,13,26,0.85)_100%)]" />
      <div className="hidden md:block absolute inset-0 z-20 pointer-events-none bg-[linear-gradient(90deg,rgba(6,13,26,0.92)_0%,rgba(8,17,34,0.78)_38%,rgba(11,21,40,0.35)_65%,rgba(11,21,40,0.1)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-40 z-20 pointer-events-none bg-gradient-to-b from-[#060D1A]/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-56 z-20 pointer-events-none bg-gradient-to-t from-[#060D1A] via-[#060D1A]/60 to-transparent" />

      {/* Luxury Ambient Gold Floating Particles */}
      <AmbientGoldParticles
        density={28}
        speed={0.35}
        colorScheme="mixed"
        className="absolute inset-0 z-25 pointer-events-none select-none"
      />

      {/* Bottom-Right Luxury Carousel Controls & Pill Indicators */}
      <div className="absolute bottom-36 sm:bottom-40 right-6 sm:right-10 lg:right-16 z-30 flex items-center gap-3 surface-dark bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/20 shadow-xl animate-in fade-in duration-500">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="p-1 rounded-full text-accent-soft hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-accent"
          aria-label="Previous background slide"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>

        {/* Indicator Bars */}
        <div className="flex items-center gap-1.5 px-1">
          {slides.map((slide, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={slide.src}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? "w-6 bg-accent"
                    : "w-1.5 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${idx + 1}: ${slide.tagline || ""}`}
              />
            );
          })}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="p-1 rounded-full text-accent-soft hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-accent"
          aria-label="Next background slide"
        >
          <ChevronRight className="w-3.5 h-3.5" />
        </button>

        {/* Slide Counter */}
        <span className="text-[10px] font-mono tracking-widest text-accent-soft pl-1 border-l border-white/20">
          0{currentIndex + 1}/0{slides.length}
        </span>
      </div>
    </div>
  );
}
