"use client";

import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";

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

const AUTOPLAY_MS = 8000;

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
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setActiveIdx((i) => (i + 1) % TESTIMONIALS.length), AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [activeIdx, paused]);

  const active = TESTIMONIALS[activeIdx];

  return (
    <section
      id="testimonials"
      className="relative py-28 sm:py-40 surface-dark bg-[#060D1A] text-white overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-[#1C3A6E]/35 blur-[160px] pointer-events-none" />

      <div
        className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <p className="text-xs uppercase tracking-[0.35em] font-medium text-accent mb-10">Client Reflections</p>

        <div className="flex justify-center gap-1 mb-8">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} className="w-4 h-4 fill-white text-white" />
          ))}
        </div>

        <div className="relative min-h-[15rem] sm:min-h-[16rem] flex items-center justify-center">
          <span aria-hidden className="absolute -top-6 sm:-top-10 left-1/2 -translate-x-1/2 font-serif text-[9rem] sm:text-[12rem] leading-none text-white/[0.07] select-none">
            &ldquo;
          </span>
          <blockquote
            key={active.id}
            className="relative font-serif text-3xl sm:text-5xl lg:text-[3.5rem] font-light leading-[1.15] tracking-tight animate-in fade-in slide-in-from-bottom-3 duration-700"
          >
            {active.headline}
          </blockquote>
        </div>

        <div key={`${active.id}-a`} className="mt-10 animate-in fade-in duration-700">
          <p className="font-serif text-xl">{active.name}</p>
          <p className="text-sm text-white/50 mt-1">
            {active.title} &middot; {active.location}
          </p>
        </div>

        {/* Selector: avatars with progress ring line */}
        <div role="tablist" aria-label="Client reflections" className="mt-14 flex items-center justify-center gap-4">
          {TESTIMONIALS.map((t, idx) => {
            const isActive = idx === activeIdx;
            return (
              <button
                key={t.id}
                role="tab"
                aria-selected={isActive}
                aria-label={t.name}
                onClick={() => setActiveIdx(idx)}
                className="group flex flex-col items-center gap-3 focus:outline-none"
              >
                <span
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-serif text-sm transition-all duration-500 group-focus-visible:ring-2 group-focus-visible:ring-white ${
                    isActive ? "bg-[#FAF8F2] text-[#0B1528] scale-110" : "bg-white/10 text-white/60 group-hover:bg-white/20"
                  }`}
                >
                  {t.initials}
                </span>
                <span className="block w-10 h-0.5 bg-white/15 overflow-hidden rounded-full">
                  {isActive && (
                    <span
                      key={paused ? "paused" : "running"}
                      className={`block h-full bg-accent origin-left ${paused ? "opacity-50" : ""}`}
                      style={paused ? undefined : { animation: `tprogress ${AUTOPLAY_MS}ms linear forwards` }}
                    />
                  )}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
