"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Check, Compass, ShieldCheck, Sparkles } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";
import AmbientGoldParticles from "./AmbientGoldParticles";

interface MethodologyStep {
  number: string;
  stepName: string;
  phaseBadge: string;
  title: string;
  tagline: string;
  image: string;
  alt: string;
  durationTag: string;
  description: string;
  deliverables: string[];
  outcome: string;
}

const STEPS: MethodologyStep[] = [
  {
    number: "01",
    stepName: "Phase 01",
    phaseBadge: "SCREEN & ASSESS",
    title: "Understand",
    tagline: "Comprehensive Postural & Kinetic Intake",
    image: "/images/methodology/understand.jpg",
    alt: "CROSA practitioner gently conducting a postural alignment and shoulder mobility assessment in serene treatment suite",
    durationTag: "45-Min Intake",
    description:
      "We listen to your body first. Through comprehensive postural screening and kinetic evaluation, we identify the root causes of muscular restriction, asymmetric loading, and chronic daily tension.",
    deliverables: [
      "Gait & spinal alignment analysis",
      "Myofascial trigger point mapping",
      "Joint mobility & kinetic baseline",
    ],
    outcome: "Outcome: Precise Anatomical Profile",
  },
  {
    number: "02",
    stepName: "Phase 02",
    phaseBadge: "CALIBRATE & CARE",
    title: "Personalise",
    tagline: "Dual-Discipline Movement & Bodywork",
    image: "/images/methodology/personalise.jpg",
    alt: "Volcanic basalt stones, organic herbal oils and boutique 1-on-1 private movement studio",
    durationTag: "Custom Regimen",
    description:
      "No generic routines. We formulate an unhurried, dual-discipline regimen balancing targeted personal movement with restorative therapeutic massage, paced strictly to your physiology.",
    deliverables: [
      "Heated volcanic basalt therapy",
      "1-on-1 biomechanical coaching",
      "Targeted fascial decompression",
    ],
    outcome: "Outcome: Restored Balance & Muscular Release",
  },
  {
    number: "03",
    stepName: "Phase 03",
    phaseBadge: "SUSTAIN & ELEVATE",
    title: "Transform",
    tagline: "Enduring Vitality & Postural Grace",
    image: "/images/methodology/transform.jpg",
    alt: "Client standing with graceful upright posture looking out into peaceful reflection garden",
    durationTag: "Long-Term Health",
    description:
      "Experience an enduring shift in how your body moves and feels. Relief from persistent knots, upright spinal buoyancy, and a calm nervous system that sustains you through high-pressure weeks.",
    deliverables: [
      "Down-regulated cortisol levels",
      "Effortless daily upright posture",
      "Long-term kinetic resilience",
    ],
    outcome: "Outcome: Effortless Daily Mobility & Vitality",
  },
];

export default function MethodologySection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      id="methodology"
      className="relative py-28 sm:py-36 surface-dark bg-[#060D1A] text-white overflow-hidden border-b border-[#1C2E50]"
    >
      {/* Background Architectural Watermark */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <span className="absolute -top-16 left-1/2 -translate-x-1/2 font-serif text-[18vw] font-light text-white/[0.015] tracking-[0.2em] whitespace-nowrap">
          METHODOLOGY
        </span>
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-accent/[0.035] rounded-full blur-3xl pointer-events-none" />
        {/* Ambient Gold Particles */}
        <AmbientGoldParticles density={30} speed={0.3} colorScheme="gold" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center justify-center gap-3">
            <span className="w-8 h-[1px] bg-accent" />
            <p className="text-xs uppercase tracking-[0.35em] font-medium text-accent">
              The Clinical Methodology
            </p>
            <span className="w-8 h-[1px] bg-accent" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-[1.12]">
            How CROSA Transforms Your Health.
          </h2>

          <p className="text-sm sm:text-base text-[#8C9BB4] font-light leading-relaxed max-w-2xl mx-auto">
            A gentle, evidence-based progression connecting clinical postural screening with intelligent 1-on-1 movement and restorative anatomical bodywork.
          </p>
        </div>

        {/* Connecting Kinetic Progress Track (Desktop) */}
        <div className="hidden lg:block relative max-w-5xl mx-auto px-12">
          <div className="h-[1px] w-full bg-gradient-to-r from-accent/20 via-accent/60 to-accent/20 relative">
            <div className="absolute -top-3 left-0 right-0 flex justify-between">
              {STEPS.map((step, idx) => (
                <div
                  key={step.number}
                  className="flex flex-col items-center group cursor-pointer"
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-300 ${
                      hoveredIdx === idx
                        ? "bg-accent border-white scale-125 shadow-[0_0_15px_rgba(174,189,217,0.8)]"
                        : "surface-dark bg-[#060D1A] border-accent/60"
                    }`}
                  >
                    <span
                      className={`text-[11px] font-mono font-medium ${
                        hoveredIdx === idx ? "text-[#060D1A]" : "text-accent-soft"
                      }`}
                    >
                      {step.number}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C9BB4] mt-2 font-light group-hover:text-accent-soft transition-colors">
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3 Architectural Stage Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {STEPS.map((step, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <div
                key={step.number}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`relative rounded-3xl surface-dark bg-[#0B1528]/80 backdrop-blur-md border transition-all duration-500 overflow-hidden flex flex-col group ${
                  isHovered
                    ? "border-accent shadow-[0_20px_50px_rgba(0,0,0,0.6)] -translate-y-2 ring-1 ring-accent/40"
                    : "border-[#1C2E50] hover:border-accent/40 shadow-xl"
                }`}
              >
                {/* Image Window */}
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    quality={88}
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528] via-[#0B1528]/30 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full surface-dark bg-[#060D1A]/80 backdrop-blur-md border border-accent/30 text-[10px] uppercase font-mono tracking-widest text-accent-soft">
                      {step.stepName}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-wider text-white/90">
                      {step.durationTag}
                    </span>
                  </div>

                  {/* Step Category Overlay */}
                  <div className="absolute bottom-3 left-5">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-accent font-medium block">
                      {step.phaseBadge}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-accent">
                          {step.number} •
                        </span>
                        <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal group-hover:text-accent-soft transition-colors">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-xs text-[#8C9BB4] font-light">
                        {step.tagline}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-[#C9D6E8] font-light leading-relaxed">
                      {step.description}
                    </p>

                    {/* Deliverables Checklist */}
                    <div className="space-y-2.5 pt-2 border-t border-white/5">
                      {step.deliverables.map((item, i) => (
                        <div key={i} className="flex items-center gap-2.5">
                          <div className="w-4 h-4 rounded-full surface-dark bg-[#060D1A] flex items-center justify-center shrink-0 border border-accent/40">
                            <Check className="w-2.5 h-2.5 text-accent-soft" />
                          </div>
                          <span className="text-xs text-[#8C9BB4] font-light">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Outcome Tag */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[11px] text-accent-soft font-medium tracking-wide">
                      {step.outcome}
                    </span>
                    <span className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent group-hover:text-[#060D1A] transition-colors text-white/50">
                      <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Luxury Guarantee Bar */}
        <div className="p-6 rounded-2xl surface-dark bg-[#0B1528] border border-[#1C2E50] max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl surface-dark bg-[#060D1A] border border-accent/30 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-accent-soft" />
            </div>
            <div>
              <h4 className="text-sm font-serif text-white font-normal">
                Clinical Discretion & Individual Care
              </h4>
              <p className="text-xs text-[#8C9BB4] font-light">
                Every protocol is completely confidential, unhurried, and monitored by certified anatomical practitioners.
              </p>
            </div>
          </div>

          <a
            href={getWhatsAppUrl("Hello CROSA, I would like to book a postural & movement intake consultation.")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent hover:bg-accent-soft text-[#060D1A] text-xs uppercase tracking-[0.18em] font-semibold transition-all shadow-md hover:scale-105"
          >
            <span>Book Initial Intake</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#060D1A]" />
          </a>
        </div>
      </div>
    </section>
  );
}
