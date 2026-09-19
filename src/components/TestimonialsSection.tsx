"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, ShieldCheck, Sparkles, Quote, ArrowUpRight } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";
import AmbientGoldParticles from "./AmbientGoldParticles";

interface Testimonial {
  id: string;
  number: string;
  initials: string;
  name: string;
  title: string;
  location: string;
  treatment: string;
  duration: string;
  tenure: string;
  headline: string;
  quote: string;
  outcome: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "dilani",
    number: "01",
    initials: "DP",
    name: "Dilani Perera",
    title: "Corporate Director",
    location: "Colombo 07",
    treatment: "Therapeutic Massage & Basalt Release",
    duration: "90 Mins",
    tenure: "Client for 8 Months",
    headline: "The chronic tension in my neck and shoulders dissolved after just two sessions.",
    quote:
      "Working demanding executive hours in Colombo, muscular stiffness was something I had simply accepted as inevitable. The anatomical massage at CROSA is unlike anything else in Sri Lanka—rigorous, deeply clinical, yet completely restorative. I leave every session with an upright, lengthened spine and lasting mental clarity.",
    outcome: "Eliminated chronic trapezius stiffness & headaches",
  },
  {
    id: "arjun",
    number: "02",
    initials: "AS",
    name: "Arjun Senanayake",
    title: "Managing Partner & Triathlete",
    location: "Colombo 03",
    treatment: "1-on-1 Movement Coaching & Kinetic Longevity",
    duration: "60 Mins",
    tenure: "Client for 14 Months",
    headline: "No commercial gym chaos. Just elite, attentive biomechanical guidance.",
    quote:
      "CROSA completely transformed my physical longevity. Having suffered recurring lower back flare-ups, I had abandoned heavy training. Their team screened my pelvic tilt, resolved my hip mobility deficits, and formulated a 1-on-1 routine that keeps me totally pain-free and performing at my athletic peak.",
    outcome: "Restored full hip mobility & pain-free strength",
  },
  {
    id: "shanti",
    number: "03",
    initials: "SW",
    name: "Dr. Shanti Wickramasinghe",
    title: "Consultant Physician",
    location: "Colombo 05",
    treatment: "Holistic Rejuvenation & Sound Sanctuary",
    duration: "75 Mins",
    tenure: "Bi-weekly Sanctuary Member",
    headline: "A rare clinical sanctuary where the nervous system is genuinely respected.",
    quote:
      "As a medical specialist, I am naturally skeptical of superficial wellness claims. CROSA is the antithesis of that—every heated basalt stone, botanical compress, and breathwork cadence is grounded in anatomical science and parasympathetic down-regulation. It is my non-negotiable bi-weekly reset.",
    outcome: "Deep parasympathetic recovery & improved sleep quality",
  },
];

export default function TestimonialsSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  const prevSlide = () => {
    setActiveIdx((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIdx((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const active = TESTIMONIALS[activeIdx];

  return (
    <section
      id="testimonials"
      className="relative py-28 sm:py-36 bg-[#060D1A] text-white overflow-hidden border-b border-[#1C2E50]"
    >
      {/* Background Architectural Monogram Watermark */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <span className="absolute -top-12 left-1/2 -translate-x-1/2 font-serif text-[18vw] font-light text-white/[0.015] tracking-[0.2em] whitespace-nowrap">
          REFLECTIONS
        </span>
        {/* Ambient Radial Golden Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#C5A059]/[0.03] rounded-full blur-3xl pointer-events-none" />
        {/* Ambient Gold Particles */}
        <AmbientGoldParticles density={28} speed={0.3} colorScheme="gold" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center justify-center gap-3">
            <span className="w-8 h-[1px] bg-[#C5A059]" />
            <p className="text-xs uppercase tracking-[0.35em] font-medium text-[#C5A059]">
              Verified Client Reflections
            </p>
            <span className="w-8 h-[1px] bg-[#C5A059]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-[1.12]">
            Endorsed by Colombo&apos;s Discerning Leaders.
          </h2>

          <p className="text-sm sm:text-base text-[#8C9BB4] font-light leading-relaxed max-w-xl mx-auto">
            Discover how corporate executives, physicians, and athletic professionals experience lasting physical vitality through our bespoke sanctuary care.
          </p>
        </div>

        {/* Featured Main Stage Quotation Showcase */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Obsidian Glass Card Container */}
          <div className="relative p-8 sm:p-14 lg:p-16 rounded-3xl bg-[#0B1528]/90 backdrop-blur-xl border border-[#1C2E50] shadow-[0_30px_70px_rgba(0,0,0,0.6)] space-y-8">
            
            {/* Top Bar: Stars + Category + Verified Badge */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C5A059] text-[#C5A059]" />
                ))}
                <span className="text-xs uppercase font-mono text-[#DFCCA3] tracking-widest pl-2">
                  5.0 Sanctuary Experience
                </span>
              </div>

              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[#C5A059]/30 text-[11px] text-[#DFCCA3]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                <span className="font-mono uppercase tracking-wider text-[10px]">Verified Client</span>
              </div>
            </div>

            {/* Pull Quote Headline */}
            <div className="space-y-4">
              <Quote className="w-10 h-10 text-[#C5A059]/40" />
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-normal leading-snug">
                &ldquo;{active.headline}&rdquo;
              </h3>
              <p className="text-base sm:text-lg text-[#C9D6E8] font-light leading-relaxed pt-2">
                {active.quote}
              </p>
            </div>

            {/* Tangible Outcome Pill */}
            <div className="p-4 rounded-xl bg-[#060D1A] border border-[#1C2E50] flex items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span className="text-xs text-[#DFCCA3] font-medium tracking-wide">
                  Clinical Outcome: {active.outcome}
                </span>
              </div>
              <span className="hidden sm:inline-block text-[10px] uppercase tracking-widest font-mono text-[#8C9BB4]">
                {active.tenure}
              </span>
            </div>

            {/* Bottom Meta & Author Profile */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-4 border-t border-white/10">
              
              {/* Author Profile */}
              <div className="flex items-center gap-4">
                <div className="w-13 h-13 rounded-full bg-[#060D1A] border-2 border-[#C5A059] flex items-center justify-center text-[#DFCCA3] font-serif font-bold text-lg shadow-md shrink-0">
                  {active.initials}
                </div>
                <div>
                  <h4 className="font-serif text-lg text-white font-normal">
                    {active.name}
                  </h4>
                  <p className="text-xs text-[#8C9BB4] font-light">
                    {active.title} • <span className="text-[#DFCCA3]">{active.location}</span>
                  </p>
                  <p className="text-[11px] text-[#C5A059] font-mono mt-0.5">
                    {active.treatment} • {active.duration}
                  </p>
                </div>
              </div>

              {/* Carousel Navigation Buttons & Counter */}
              <div className="flex items-center gap-4 self-end sm:self-center">
                <div className="font-mono text-xs text-[#8C9BB4] tracking-widest">
                  <span className="text-[#DFCCA3] font-bold">{active.number}</span>
                  <span className="mx-1 text-[#8C9BB4]/50">/</span>
                  <span>03</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={prevSlide}
                    aria-label="Previous testimonial"
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#C5A059] text-white hover:text-[#060D1A] border border-white/10 hover:border-[#C5A059] flex items-center justify-center transition-all duration-300"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={nextSlide}
                    aria-label="Next testimonial"
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#C5A059] text-white hover:text-[#060D1A] border border-white/10 hover:border-[#C5A059] flex items-center justify-center transition-all duration-300"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* 3 Synchronized Quick-Switch Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {TESTIMONIALS.map((t, idx) => {
            const isCurrent = idx === activeIdx;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveIdx(idx)}
                className={`text-left p-5 rounded-2xl transition-all duration-300 border flex flex-col justify-between space-y-4 group ${
                  isCurrent
                    ? "bg-[#0B1528] border-[#C5A059] shadow-lg ring-1 ring-[#C5A059]/40"
                    : "bg-[#0B1528]/50 hover:bg-[#0B1528] border-[#1C2E50] hover:border-[#C5A059]/40"
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="font-mono text-[10px] text-[#C5A059] tracking-widest uppercase">
                    {t.number} • {t.location}
                  </span>
                  {isCurrent && (
                    <span className="text-[9px] uppercase tracking-wider text-[#DFCCA3] font-semibold">
                      Viewing
                    </span>
                  )}
                </div>

                <div>
                  <h4 className="font-serif text-sm text-white font-normal group-hover:text-[#DFCCA3] transition-colors line-clamp-1">
                    {t.name}
                  </h4>
                  <p className="text-xs text-[#8C9BB4] font-light line-clamp-2 mt-1">
                    &ldquo;{t.headline}&rdquo;
                  </p>
                </div>

                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-[#DFCCA3]/80">
                  <span className="truncate">{t.treatment.split("&")[0].trim()}</span>
                  <span className="font-mono">{t.duration}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Reassurance Banner */}
        <div className="text-center pt-4">
          <p className="text-xs text-[#8C9BB4] font-light">
            All reflections are shared with client consent • We maintain complete medical and personal discretion for every guest.
          </p>
        </div>

      </div>
    </section>
  );
}
