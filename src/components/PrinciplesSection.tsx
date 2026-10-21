"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Compass, Layers, ShieldCheck, HeartHandshake, Sparkles, Check } from "lucide-react";
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
      "We eliminate empty fillers. Whether guiding an active mobility drill or applying targeted joint mobilization, every action is designed for tissue recovery and movement longevity.",
    icon: ShieldCheck,
    tag: "Anatomical Precision",
  },
  {
    number: "03",
    keyword: "Evidence-Based",
    title: "Interconnected System",
    tagline: "Physical conditioning meets clinical tissue recovery.",
    description:
      "Exertion without restoration leads to injury. By uniting kinetic rehabilitation with restorative clinical bodywork under one roof, we restore your body as a unified kinetic chain.",
    icon: Layers,
    tag: "Dual Synergy",
  },
  {
    number: "04",
    keyword: "Human",
    title: "Discreet & Attentive",
    tagline: "A dedicated clinical space free from gym bravado.",
    description:
      "Step into a world of genuine care, clinical dignity, and complete privacy. No commercial distractions, no intimidation—only attentive guidance from certified physiotherapists.",
    icon: HeartHandshake,
    tag: "Clinical Care Ethos",
  },
];

export default function PrinciplesSection() {
  return (
    <section id="philosophy" className="py-16 sm:py-24 bg-[#FAF8F2] border-b border-line">
      <div className="max-w-[88rem] mx-auto px-4 sm:px-8">
        <div className="surface-dark relative overflow-hidden rounded-[2rem] sm:rounded-[3rem] bg-[#060D1A] text-white shadow-[0_50px_120px_-40px_rgba(11,21,40,0.8)]">
          {/* Photo + navy veil */}
          <Image
            src="/images/physio/rehabilitation.jpg"
            alt="Clinical Rehabilitation at CROSA Colombo"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,13,26,0.82)_0%,rgba(8,17,34,0.88)_55%,rgba(6,13,26,0.96)_100%)]" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[#2F4A7A]/40 blur-[120px] pointer-events-none" />

          <div className="relative z-10 px-6 sm:px-12 lg:px-16 pt-16 sm:pt-24 pb-10 sm:pb-14">
            {/* Header */}
            <div className="max-w-3xl mx-auto text-center space-y-5 mb-16 sm:mb-24">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] uppercase tracking-[0.3em] text-accent-soft">
                <Sparkles className="w-3.5 h-3.5" /> Wellbeing Principles
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-light tracking-tight leading-[1.04]">
                Designed for your <span className="italic text-accent">well-being.</span>
              </h2>
              <p className="text-base sm:text-lg text-white/65 font-light leading-relaxed max-w-2xl mx-auto">
                Your health deserves more than a hurried routine or generic gym templates. Four enduring principles shape every interaction, therapeutic stroke and movement session.
              </p>
            </div>

            {/* Staggered glass columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
              {PRINCIPLES.map((p, i) => {
                const IconComp = p.icon;
                return (
                  <div
                    key={p.number}
                    className={`group relative flex flex-col p-7 rounded-3xl bg-white/[0.07] hover:bg-[#FAF8F2] backdrop-blur-xl border border-white/15 hover:border-[#FAF8F2] transition-all duration-500 hover:-translate-y-2 ${
                      i % 2 === 1 ? "lg:translate-y-10 lg:hover:translate-y-8" : ""
                    }`}
                  >
                    <div className="flex items-start justify-between mb-10">
                      <span className="w-12 h-12 rounded-2xl bg-white/10 group-hover:bg-[#0B1528] flex items-center justify-center transition-colors duration-500">
                        <IconComp className="w-5 h-5 text-accent-soft" />
                      </span>
                      <span className="font-serif text-5xl font-extralight leading-none text-white/25 group-hover:text-[#0B1528]/20 transition-colors duration-500">
                        {p.number}
                      </span>
                    </div>

                    <span className="text-[10px] uppercase tracking-[0.28em] font-semibold text-accent group-hover:text-[#2F4A7A] transition-colors duration-500">
                      {p.keyword}
                    </span>
                    <h3 className="font-serif text-2xl text-white group-hover:text-[#0B1528] font-normal leading-tight mt-2 mb-3 transition-colors duration-500">
                      {p.title}
                    </h3>
                    <p className="text-sm italic text-white/80 group-hover:text-[#0B1528]/80 mb-3 transition-colors duration-500">{p.tagline}</p>
                    <p className="text-sm text-white/55 group-hover:text-[#5E6977] font-light leading-relaxed transition-colors duration-500">
                      {p.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Standard strip */}
            <div className="mt-20 sm:mt-28 lg:mt-24 pt-8 border-t border-white/15 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-x-8 gap-y-3">
                {[
                  "100% attentive 1-on-1 sessions",
                  "Zero crowds, complete privacy",
                  "Medical & anatomical guidance",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-sm text-white/80 font-light">
                    <span className="w-5 h-5 rounded-full bg-[#FAF8F2] text-[#0B1528] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3" />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
              <a
                href={getWhatsAppUrl("Hello CROSA, I would like to learn more about your wellbeing principles and book a private consultation.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group shrink-0 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FAF8F2] hover:bg-white text-[#0B1528] text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-lg shadow-black/30 hover:-translate-y-0.5"
              >
                <span>Speak With a Practitioner</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
