"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Compass, Layers, ShieldCheck, HeartHandshake, Sparkles, Check } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

interface Principle {
  number: string;
  keyword: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
}

const PRINCIPLES: Principle[] = [
  {
    number: "01",
    keyword: "Personal",
    title: "Radically Individual",
    tagline: "Calibrated to your physiology — never a template.",
    description:
      "Every movement drill, resistance load, and massage sequence is mapped to your kinetic asymmetry, spine alignment, and daily stress levels on that exact day.",
    icon: Compass,
    tag: "Individual Care",
  },
  {
    number: "02",
    keyword: "Intentional",
    title: "Purpose-Led Practice",
    tagline: "Every movement has a clear biological objective.",
    description:
      "We eliminate empty fillers. Whether guiding an active mobility drill or applying heated basalt stones, every action is designed for cellular recovery and longevity.",
    icon: ShieldCheck,
    tag: "Anatomical Precision",
  },
  {
    number: "03",
    keyword: "Holistic",
    title: "Interconnected System",
    tagline: "Physical conditioning meets nervous system calm.",
    description:
      "Exertion without restoration leads to burnout. By uniting kinetic personal training with restorative bodywork under one quiet roof, we restore your body as a unified whole.",
    icon: Layers,
    tag: "Dual Synergy",
  },
  {
    number: "04",
    keyword: "Human",
    title: "Discreet & Attentive",
    tagline: "A peaceful sanctuary free from gym bravado.",
    description:
      "Step into a world of genuine warmth, quiet dignity, and complete privacy. No commercial distractions, no intimidation—only attentive guidance from certified practitioners.",
    icon: HeartHandshake,
    tag: "Sanctuary Ethos",
  },
];

export default function PrinciplesSection() {
  return (
    <section
      id="philosophy"
      className="py-28 sm:py-36 bg-[#FAF8F2] border-b border-[#E8DEC8] relative overflow-hidden"
    >
      {/* Ambient Decorative Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0B1528]/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Editorial Credo & Sanctuary Seal */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3">
                <span className="w-6 h-[1px] bg-[#C5A059]" />
                <p className="text-xs uppercase tracking-[0.3em] font-medium text-[#C5A059]">
                  Wellbeing Principles
                </p>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-[3.25rem] font-light text-[#0B1528] tracking-tight leading-[1.12]">
                Designed for your well-being.
              </h2>

              <p className="text-sm sm:text-base text-[#5E6977] font-light leading-relaxed">
                Your health deserves more than a hurried routine or generic gym templates. At CROSA, four enduring principles shape every interaction, therapeutic stroke, and movement session.
              </p>
            </div>

            {/* The CROSA Sanctuary Credo Seal Card */}
            <div className="p-7 rounded-3xl bg-white border border-[#E8DEC8] shadow-sm space-y-5 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0B1528] flex items-center justify-center text-[#DFCCA3] font-serif text-lg font-bold border border-[#C5A059]/40 shadow-sm">
                    C
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#0B1528]">
                      The CROSA Standard
                    </h4>
                    <span className="text-[10px] text-[#C5A059] tracking-wider uppercase font-mono">
                      Colombo 05 Sanctuary
                    </span>
                  </div>
                </div>
                <Sparkles className="w-4 h-4 text-[#C5A059]" />
              </div>

              <div className="space-y-2.5 pt-2 border-t border-[#E8DEC8]">
                <div className="flex items-center gap-2.5 text-xs text-[#0B1528] font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                  <span>100% Attentive 1-on-1 Sanctuary Sessions</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#0B1528] font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                  <span>Zero Crowds • Complete Privacy & Discretion</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#0B1528] font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                  <span>Medical & Anatomical Guidance Integration</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={getWhatsAppUrl("Hello CROSA, I would like to learn more about your wellbeing principles and book a private consultation.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#0B1528] hover:bg-[#152542] text-white text-xs uppercase tracking-[0.18em] font-medium transition-all shadow-sm hover:shadow-md group"
                >
                  <span>Speak With a Practitioner</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#DFCCA3] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: 2x2 Bento Grid of Sculptural Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PRINCIPLES.map((p) => {
              const IconComp = p.icon;
              return (
                <div
                  key={p.number}
                  className="group relative p-7 rounded-3xl bg-white border border-[#E8DEC8] hover:border-[#C5A059] transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between space-y-6"
                >
                  {/* Top: Monogram Number & Icon */}
                  <div className="flex items-start justify-between">
                    <div className="w-11 h-11 rounded-2xl bg-[#F5EFE6] border border-[#E8DEC8] group-hover:border-[#C5A059]/40 group-hover:bg-[#0B1528] transition-all duration-300 flex items-center justify-center">
                      <IconComp className="w-5 h-5 text-[#C5A059] group-hover:text-[#DFCCA3] transition-colors" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] uppercase font-mono tracking-widest text-[#C5A059] px-2.5 py-1 rounded-full bg-[#FAF8F2] border border-[#E8DEC8]">
                        {p.tag}
                      </span>
                      <span className="font-mono text-xs text-[#8C9BB4] font-light">
                        {p.number}
                      </span>
                    </div>
                  </div>

                  {/* Body Copy */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#C5A059]">
                        {p.keyword}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl text-[#0B1528] font-normal group-hover:text-[#C5A059] transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs font-medium text-[#0B1528]/80 italic">
                      {p.tagline}
                    </p>
                    <p className="text-sm text-[#5E6977] font-light leading-relaxed pt-1">
                      {p.description}
                    </p>
                  </div>

                  {/* Bottom Hairline Highlight */}
                  <div className="pt-3 border-t border-[#E8DEC8] flex items-center justify-between text-[11px] text-[#8C9BB4]">
                    <span className="group-hover:text-[#0B1528] transition-colors">
                      CROSA Standard 0{p.number.replace("0", "")}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8DEC8] group-hover:bg-[#C5A059] transition-colors" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
