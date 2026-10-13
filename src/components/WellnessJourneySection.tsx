"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Compass, ShieldCheck, Sparkles, Clock, MapPin } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

interface JourneyPathway {
  id: string;
  number: string;
  category: string;
  title: string;
  tagline: string;
  treatment: string;
  duration: string;
  whatsappMessage: string;
}

const PATHWAYS: JourneyPathway[] = [
  {
    id: "pain-decompression",
    number: "01",
    category: "Spine & Joint Care",
    title: "Back, Neck & Joint Pain Decompression",
    tagline: "Targets acute and chronic back, neck, shoulder, and knee pain at the anatomical source.",
    treatment: "Manual Spine Decompression + Trigger Point Therapy + Joint Mobilization",
    duration: "60 • 90 Mins",
    whatsappMessage: "Hello CROSA, I would like to book the Spine & Joint Pain Relief pathway.",
  },
  {
    id: "sports-recovery",
    number: "02",
    category: "Athletic Performance",
    title: "Remedial Sports Massage & Muscular Flush",
    tagline: "Deep tissue tension release and metabolic clearance for athletes and active individuals.",
    treatment: "Deep Tissue Remedial Massage + Thermal Basalt Synergy + Fascial Reset",
    duration: "60 • 90 Mins",
    whatsappMessage: "Hello CROSA, I would like to book the Remedial Sports Massage pathway.",
  },
  {
    id: "injury-rehab",
    number: "03",
    category: "Functional Recovery",
    title: "Post-Injury & Post-Surgery Rehabilitation",
    tagline: "Structured progressive protocols to restore tissue integrity, joint stability, and strength.",
    treatment: "Biomechanical Kinetic Screening + 1-on-1 Corrective Movement Conditioning",
    duration: "60 • 75 Mins",
    whatsappMessage: "Hello CROSA, I would like to book the Post-Injury Rehabilitation pathway.",
  },
];

export default function WellnessJourneySection() {
  const [activePathway, setActivePathway] = useState<number>(0);

  const current = PATHWAYS[activePathway];

  return (
    <section
      id="journey"
      className="py-28 sm:py-36 bg-[#F5EFE6] border-b border-[#E8DEC8] relative overflow-hidden"
    >
      {/* Subtle Background Ambience */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#C5A059]/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#0B1528]/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Multi-Layered Architectural Sanctuary Portal */}
          <div className="lg:col-span-6 relative">
            <div className="relative max-w-lg mx-auto lg:mr-0">
              
              {/* Primary Visual Portal */}
              <div className="relative rounded-t-[4rem] rounded-b-3xl overflow-hidden p-1.5 bg-gradient-to-b from-[#C5A059]/40 via-[#C5A059]/10 to-transparent shadow-[0_25px_60px_rgba(11,21,40,0.18)]">
                <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full rounded-t-[3.8rem] rounded-b-2xl overflow-hidden group">
                  <Image
                    src="/images/journey/arrival.jpg"
                    alt="CROSA client unwinding in a private teakwood lounge with herbal tea and bamboo courtyard garden view"
                    fill
                    quality={92}
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528]/85 via-transparent to-transparent" />

                  {/* Caption Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                      <span className="text-[10px] uppercase tracking-[0.25em] text-[#DFCCA3] font-medium">
                        Arrival & Reflection Lounge
                      </span>
                    </div>
                    <p className="font-serif text-lg font-light text-white">
                      Unhurried, peaceful, and secluded from Colombo&apos;s tempo.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Offset Gold Medallion */}
              <div className="absolute -top-4 -right-4 sm:-right-6 w-20 h-20 rounded-full bg-[#0B1528] border-2 border-[#C5A059] flex flex-col items-center justify-center text-center shadow-xl z-20">
                <span className="font-serif text-lg font-bold text-[#DFCCA3] leading-none">C</span>
                <span className="text-[7px] uppercase tracking-widest text-[#C5A059] font-mono mt-0.5">EST. 2024</span>
                <span className="text-[6px] tracking-wider text-white/70">COLOMBO</span>
              </div>

              {/* Floating Glassmorphic Suite Feature Card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 max-w-[280px] p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#C5A059]/40 shadow-xl z-20 space-y-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#0B1528] flex items-center justify-center shrink-0">
                    <Sparkles className="w-3.5 h-3.5 text-[#DFCCA3]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#0B1528] uppercase tracking-wider">
                      Private Suites Only
                    </h4>
                    <p className="text-[10px] text-[#5E6977]">
                      Individual treatment & training rooms
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-[#0B1528] pt-1 border-t border-[#E8DEC8]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-pulse" />
                  <span>Accepting Client Bookings</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Pathway Selector & Editorial Narrative */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Header */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#C5A059]" />
                <p className="text-xs uppercase tracking-[0.35em] font-medium text-[#C5A059]">
                  Begin Your Renewal
                </p>
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#0B1528] tracking-tight leading-[1.12]">
                Your Wellness Journey Starts Here.
              </h2>

              <p className="text-sm sm:text-base text-[#5E6977] font-light leading-relaxed">
                Whether you wish to resolve persistent desk-bound neck and shoulder stiffness, rebuild athletic mobility, or enjoy an unhurried afternoon of restorative recovery, select your intended pathway below.
              </p>
            </div>

            {/* 3 Interactive Pathway Selection Cards */}
            <div className="space-y-3.5">
              <p className="text-xs uppercase tracking-[0.2em] font-mono text-[#0B1528] font-medium">
                Select Your Desired Focus:
              </p>

              <div className="space-y-3">
                {PATHWAYS.map((p, idx) => {
                  const isSelected = activePathway === idx;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setActivePathway(idx)}
                      className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 border flex items-start gap-4 group ${
                        isSelected
                          ? "bg-white border-[#C5A059] shadow-lg ring-1 ring-[#C5A059]/40 -translate-y-0.5"
                          : "bg-white/60 hover:bg-white border-[#E8DEC8] hover:border-[#C5A059]/40 shadow-sm"
                      }`}
                    >
                      {/* Radio-Style Checkmark */}
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 border transition-colors ${
                          isSelected
                            ? "bg-[#0B1528] border-[#C5A059]"
                            : "bg-transparent border-[#8C9BB4]/40 group-hover:border-[#C5A059]"
                        }`}
                      >
                        {isSelected && <Check className="w-3 h-3 text-[#DFCCA3]" />}
                      </div>

                      {/* Details */}
                      <div className="flex-1 min-w-0 space-y-1">
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-mono text-[10px] text-[#C5A059] font-medium tracking-widest uppercase">
                            {p.number} • {p.category}
                          </span>
                          <span className="text-[10px] uppercase tracking-wider text-[#5E6977] font-mono">
                            {p.duration}
                          </span>
                        </div>

                        <h4 className="font-serif text-base sm:text-lg text-[#0B1528] font-normal group-hover:text-[#C5A059] transition-colors">
                          {p.title}
                        </h4>

                        <p className="text-xs text-[#5E6977] font-light leading-relaxed">
                          {p.tagline}
                        </p>

                        <div className="flex items-center gap-2 text-[11px] text-[#0B1528] pt-1">
                          <span className="text-[#C5A059] font-semibold">Treatment:</span>
                          <span className="text-[#5E6977] truncate">{p.treatment}</span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CTAs & Reassurance Bar */}
            <div className="pt-2 space-y-5">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={getWhatsAppUrl(current.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#0B1528] hover:bg-[#112038] text-white border border-[#C5A059]/40 text-xs uppercase tracking-[0.2em] font-medium transition-all shadow-md hover:shadow-xl hover:scale-[1.02] group"
                >
                  <span>Book Selected Pathway</span>
                  <ArrowUpRight className="w-4 h-4 text-[#DFCCA3] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white hover:bg-[#FAF8F2] border border-[#E8DEC8] hover:border-[#C5A059] text-xs uppercase tracking-[0.18em] font-medium text-[#0B1528] transition-all"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Sanctuary Location</span>
                </Link>
              </div>

              <div className="flex items-center gap-3 text-xs text-[#5E6977] font-light pt-1">
                <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>By Advance Appointment • Private Parking on Thimbirigasyaya Road</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
