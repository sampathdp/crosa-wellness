"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Clock, Sparkles, Shield, Compass } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

interface ExperienceChapter {
  id: string;
  number: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  alt: string;
  duration: string;
  setting: string;
  highlights: {
    title: string;
    detail: string;
  }[];
  quote: string;
  servicesLink: string;
  whatsappMessage: string;
}

const CHAPTERS: ExperienceChapter[] = [
  {
    id: "massage",
    number: "01",
    category: "Recovery & Release",
    title: "Therapeutic Massage & Anatomical Bodywork",
    tagline: "Biological muscular release calibrated to eliminate chronic tension.",
    description:
      "Move beyond standard spa pampering into purposeful, anatomy-led therapeutic bodywork. Our certified practitioners assess posture and muscular restriction, applying heated basalt stones and organic botanical oils to restore cellular circulation, relieve fascial adhesions, and return your body to balance.",
    image: "/images/hero/therapeutic-massage.jpg",
    alt: "CROSA Therapeutic Massage setup with volcanic basalt stones, botanical oils and warm candlelight",
    duration: "60 • 90 • 120 Mins",
    setting: "Private Aromatherapy Suite",
    highlights: [
      {
        title: "Deep Fascial & Muscular Release",
        detail: "Targets persistent knots, lower back stiffness, and neck strain.",
      },
      {
        title: "Volcanic Basalt & Warm Compresses",
        detail: "Penetrating heat relaxes dense muscle fibers safely before deep manipulation.",
      },
      {
        title: "Postural & Kinetic Reset",
        detail: "Improves joint range of motion and overall functional ease.",
      },
    ],
    quote: "“The body keeps the score of every stressful hour. Our massage is how you grant it release.”",
    servicesLink: "/services#therapeutic-massage",
    whatsappMessage: "Hello CROSA, I would like to book a Therapeutic Massage session.",
  },
  {
    id: "fitness",
    number: "02",
    category: "Movement & Longevity",
    title: "1-on-1 Personal Fitness & Mobility Coaching",
    tagline: "Purposeful kinetic training structured for longevity and pain-free strength.",
    description:
      "No crowded commercial gyms, no shouting, and no ego-driven workouts. At CROSA, personal training is conducted entirely one-on-one inside a serene, private studio overlooking our bamboo courtyard. Every movement is tailored around your joint mechanics, posture, and cardiovascular longevity.",
    image: "/images/hero/fitness-studio.jpg",
    alt: "CROSA Private boutique fitness studio with timber paneling and bamboo garden view",
    duration: "45 • 60 Mins",
    setting: "Private 1-on-1 Studio",
    highlights: [
      {
        title: "Biomechanical Movement Assessment",
        detail: "Pinpoints mobility limitations, asymmetry, and muscular compensations.",
      },
      {
        title: "Functional Strength & Core Stability",
        detail: "Builds durable athletic capacity that protects joints and posture.",
      },
      {
        title: "Injury Prevention & Longevity",
        detail: "Evidence-based progression designed to support active living for decades.",
      },
    ],
    quote: "“True fitness is not about exhaustion. It is about building a body that moves with effortless grace.”",
    servicesLink: "/services#fitness-training",
    whatsappMessage: "Hello CROSA, I would like to begin 1-on-1 Personal Fitness Coaching.",
  },
  {
    id: "wellness",
    number: "03",
    category: "Equilibrium & Renewal",
    title: "Holistic Rejuvenation & Sound Sanctuary",
    tagline: "Nervous system calibration uniting vibrational sound, breath, and botanical care.",
    description:
      "Modern urban life places the nervous system in chronic sympathetic overdrive. Our holistic wellness rituals combine antique Tibetan singing bowl resonance, guided restorative stretching, and artisanal herbal tea service to down-regulate cortisol, restore parasympathetic calm, and renew mental clarity.",
    image: "/images/hero/restorative-space.jpg",
    alt: "CROSA Sound sanctuary with Tibetan singing bowls, meditation cushions and sunlight",
    duration: "75 • 90 Mins",
    setting: "Sound & Meditation Lounge",
    highlights: [
      {
        title: "Vagus Nerve & Parasympathetic Reset",
        detail: "Gentle acoustic resonance soothes autonomic tension and stress hormones.",
      },
      {
        title: "Guided Restorative Decompression",
        detail: "Assisted gentle stretches on organic linen cushions to release the spine.",
      },
      {
        title: "Botanical Apothecary Tea Ritual",
        detail: "Crafted herbal infusions designed to enhance hydration and mindful calm.",
      },
    ],
    quote: "“When the mind becomes tranquil, the physical body heals twice as fast.”",
    servicesLink: "/services#wellness-treatments",
    whatsappMessage: "Hello CROSA, I would like to enquire about Holistic Wellness & Sound sessions.",
  },
];

export default function ExperienceShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const chapter = CHAPTERS[activeTab];

  return (
    <div className="w-full space-y-10 sm:space-y-12">
      {/* Luxury Segmented Pill Navigation — Clean Single Row */}
      <div className="flex items-center justify-center gap-1.5 sm:gap-2 p-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#E8DEC8] shadow-sm max-w-xl mx-auto overflow-x-auto">
        {CHAPTERS.map((item, idx) => {
          const isActive = idx === activeTab;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(idx)}
              className={`whitespace-nowrap px-4 sm:px-5 py-2 rounded-full text-[11px] sm:text-xs font-medium uppercase tracking-[0.16em] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] ${
                isActive
                  ? "bg-[#0B1528] text-white shadow-md"
                  : "text-[#5E6977] hover:text-[#0B1528] hover:bg-black/5"
              }`}
            >
              <span className="flex items-center gap-1.5">
                <span className={`font-mono text-[10px] ${isActive ? "text-[#C5A059]" : "text-[#8C9BB4]"}`}>
                  {item.number}
                </span>
                <span>{item.id === "massage" ? "Massage" : item.id === "fitness" ? "Movement" : "Holistic"}</span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Architectural Showcase Card */}
      <div className="rounded-3xl bg-white border border-[#E8DEC8] shadow-[0_20px_50px_rgba(11,21,40,0.06)] overflow-hidden transition-all duration-500">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Left Column: Cinematic Visual Showcase (7 cols) */}
          <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[480px] lg:min-h-[580px] overflow-hidden group">
            <Image
              src={chapter.image}
              alt={chapter.alt}
              fill
              priority
              quality={92}
              className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            {/* Subtle Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528]/80 via-[#0B1528]/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1528]/40 via-transparent to-transparent hidden lg:block" />

            {/* Floating Top Badge */}
            <div className="absolute top-6 left-6 flex items-center gap-2 bg-[#0B1528]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#C5A059]/40">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#DFCCA3] font-medium">
                CROSA Sanctuary Colombo
              </span>
            </div>

            {/* Bottom Visual Highlights */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
              <div className="space-y-1">
                <span className="font-mono text-xs uppercase tracking-widest text-[#DFCCA3] font-medium block">
                  {chapter.number} &bull; {chapter.category}
                </span>
                <p className="font-serif text-xl sm:text-2xl text-white font-light max-w-md leading-snug">
                  {chapter.tagline}
                </p>
              </div>

              {/* Setting / Duration Pill */}
              <div className="flex items-center gap-2 bg-white/15 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/20 text-white text-xs">
                <Clock className="w-3.5 h-3.5 text-[#DFCCA3]" />
                <span className="tracking-wider">{chapter.duration}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Luxury Editorial Narrative & Anatomy Spec (5 cols) */}
          <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between bg-[#FAF8F2]">
            <div className="space-y-6">
              {/* Category & Title */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-[1px] bg-[#C5A059]" />
                  <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#C5A059]">
                    {chapter.category}
                  </span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-[2rem] font-normal text-[#0B1528] leading-tight">
                  {chapter.title}
                </h3>
              </div>

              {/* Prose Description */}
              <p className="text-sm sm:text-base text-[#5E6977] font-light leading-relaxed">
                {chapter.description}
              </p>

              {/* Highlights Checklist */}
              <div className="space-y-3 pt-2">
                {chapter.highlights.map((hl, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#0B1528] flex items-center justify-center shrink-0 mt-0.5 border border-[#C5A059]/40">
                      <Check className="w-2.5 h-2.5 text-[#DFCCA3]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[#0B1528]">
                        {hl.title}
                      </h4>
                      <p className="text-xs text-[#5E6977] font-light leading-relaxed">
                        {hl.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Lead Practitioner Quote */}
              <div className="p-4 rounded-xl bg-white border border-[#E8DEC8] italic text-xs text-[#0B1528] font-serif leading-relaxed">
                {chapter.quote}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-8 border-t border-[#E8DEC8] flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={getWhatsAppUrl(chapter.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0B1528] hover:bg-[#112038] text-white border border-[#C5A059]/40 text-xs uppercase tracking-[0.2em] font-medium transition-all shadow-sm hover:shadow-md hover:scale-[1.02]"
              >
                <span>Reserve Experience</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#DFCCA3]" />
              </a>

              <Link
                href={chapter.servicesLink}
                className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.18em] font-medium text-[#0B1528] hover:text-[#C5A059] transition-colors py-2 group"
              >
                <span>Full Details</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#C5A059]" />
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom 3 Interactive Preview Tiles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CHAPTERS.map((item, idx) => {
          const isActive = idx === activeTab;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(idx)}
              className={`group relative text-left p-5 rounded-2xl transition-all duration-300 border flex items-center gap-4 ${
                isActive
                  ? "bg-white border-[#C5A059] shadow-lg ring-1 ring-[#C5A059]/40"
                  : "bg-white/60 hover:bg-white border-[#E8DEC8] hover:border-[#C5A059]/40 shadow-sm"
              }`}
            >
              {/* Thumbnail */}
              <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-black/10">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  quality={80}
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {isActive && (
                  <div className="absolute inset-0 bg-[#0B1528]/40 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-ping" />
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="font-mono text-[10px] text-[#C5A059] font-medium tracking-widest">
                    {item.number} • {item.category.split("&")[0].trim()}
                  </span>
                  {isActive && (
                    <span className="text-[9px] uppercase tracking-wider text-[#C5A059] font-semibold">
                      Viewing
                    </span>
                  )}
                </div>
                <h4 className="font-serif text-sm font-normal text-[#0B1528] truncate group-hover:text-[#C5A059] transition-colors">
                  {item.title}
                </h4>
                <p className="text-[11px] text-[#5E6977] font-light truncate">
                  {item.duration} • {item.setting}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
