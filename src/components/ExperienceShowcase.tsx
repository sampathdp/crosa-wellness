"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Clock } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

interface ExperienceChapter {
  id: string;
  number: string;
  label: string;
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
    id: "pain-relief",
    number: "01",
    label: "Pain Relief",
    category: "Spine & Joint Care",
    title: "Pain Relief & Decompression Therapy",
    tagline: "Specialised clinical care for back, neck, shoulder, and knee pain.",
    description:
      "Move beyond temporary mask remedies into root-cause pain management. Our clinicians evaluate spinal biomechanics, joint tracking, and myofascial strain patterns, applying targeted manual decompression, trigger point release, and joint alignment to deliver lasting relief.",
    image: "/images/physio/pain-relief.jpg",
    alt: "CROSA male physiotherapist performing manual spinal pain relief and decompression therapy",
    duration: "60 • 90 Mins",
    setting: "Private Clinical Suite",
    highlights: [
      {
        title: "Spine & Lumbar Decompression",
        detail: "Alleviates compressed vertebrae, disc tension, and sciatica flare-ups.",
      },
      {
        title: "Cervical & Scapular Release",
        detail: "Releases severe neck stiffness, shoulder impingement, and tension headaches.",
      },
      {
        title: "Knee & Joint Stabilization",
        detail: "Eases joint friction, reduces inflammation, and restores weight-bearing comfort.",
      },
    ],
    quote: "“Pain is not a condition you have to live with. It is a sign your kinetic chain needs clinical restoration.”",
    servicesLink: "/services#pain-relief",
    whatsappMessage: "Hello CROSA, I would like to book a Pain Relief consultation.",
  },
  {
    id: "sports-massage",
    number: "02",
    label: "Sports Massage",
    category: "Athletic Recovery",
    title: "Sports Massage & Deep Tissue Remediation",
    tagline: "High-performance soft-tissue recovery engineered to eliminate muscular tension.",
    description:
      "Engineered for athletes, lifters, and active performers. Our sports remedial massage deactivates dense knots, flushes metabolic waste, restores fascial elasticity, and shortens downtime between intense training sessions so you can perform pain-free.",
    image: "/images/physio/sports-massage.jpg",
    alt: "CROSA male sports physiotherapist performing deep tissue sports remedial massage",
    duration: "60 • 90 Mins",
    setting: "Private Recovery Suite",
    highlights: [
      {
        title: "Myofascial Trigger Point Deactivation",
        detail: "Breaks up deep chronic adhesions across dense muscle bellies.",
      },
      {
        title: "Metabolic Lymphatic Clearing",
        detail: "Flushes accumulated lactic acid and speeds up muscular repair.",
      },
      {
        title: "Injury Prevention & Range of Motion",
        detail: "Lengthens hypertonic muscle fibers and enhances athletic mobility.",
      },
    ],
    quote: "“Muscular elasticity and proactive recovery are the foundation of true athletic longevity.”",
    servicesLink: "/services#sports-massage",
    whatsappMessage: "Hello CROSA, I would like to book a Sports Massage session.",
  },
  {
    id: "rehabilitation",
    number: "03",
    label: "Rehabilitation",
    category: "Post Injury Rehab",
    title: "Rehabilitation & Movement Therapy",
    tagline: "Evidence-based protocols to rebuild strength, correct biomechanics, and restore function.",
    description:
      "Recover safely from acute injuries, ligament sprains, muscle tears, or orthopedic surgery. In our private movement bays, certified practitioners guide you through tissue remodeling, joint stabilization, and progressive reloading to bring you back to full capacity.",
    image: "/images/physio/rehabilitation.jpg",
    alt: "CROSA male physiotherapist guiding a patient through active rehabilitation exercises",
    duration: "60 • 75 Mins",
    setting: "Private 1-on-1 Studio Bay",
    highlights: [
      {
        title: "Structured Post-Injury Protocol",
        detail: "Carefully paced phases from acute protection to full functional reload.",
      },
      {
        title: "Biomechanical Kinetic Screening",
        detail: "Identifies postural asymmetries and movement compensations.",
      },
      {
        title: "Confident Return to Daily Activity",
        detail: "Builds durable strength and neuromuscular stability to prevent re-injury.",
      },
    ],
    quote: "“True rehabilitation rebuilds not just the injured tissue, but complete confidence in how you move.”",
    servicesLink: "/services#rehabilitation",
    whatsappMessage: "Hello CROSA, I would like to inquire about Rehabilitation & Movement Therapy.",
  },
];

export default function ExperienceShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const chapter = CHAPTERS[activeTab];

  return (
    <div className="surface-dark relative w-full overflow-hidden rounded-[2rem] bg-[#060D1A] text-white shadow-[0_40px_100px_-30px_rgba(11,21,40,0.7)]">
      {/* Full-bleed crossfading photography */}
      <div className="absolute inset-0">
        {CHAPTERS.map((item, idx) => (
          <Image
            key={item.id}
            src={item.image}
            alt={item.alt}
            fill
            priority={idx === 0}
            quality={90}
            sizes="(min-width: 1280px) 1200px, 100vw"
            className={`object-cover transition-all duration-[1200ms] ease-out ${
              idx === activeTab ? "opacity-100 scale-100" : "opacity-0 scale-110"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,13,26,0.95)_0%,rgba(6,13,26,0.8)_40%,rgba(6,13,26,0.25)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#060D1A] to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col min-h-[760px] lg:min-h-[720px] p-6 sm:p-10 lg:p-14">
        {/* Top row */}
        <div className="flex items-start justify-between gap-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] uppercase tracking-[0.25em] text-white">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-soft animate-pulse" />
            {chapter.category}
          </span>
          <div className="hidden sm:flex items-center gap-2">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] text-white/90">
              <Clock className="w-3.5 h-3.5" />
              {chapter.duration}
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] text-white/90">
              {chapter.setting}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex items-center py-10">
          <div key={chapter.id} className="max-w-xl space-y-6 animate-in fade-in slide-in-from-bottom-3 duration-700">
            <div className="flex items-end gap-4">
              <span className="font-serif text-7xl sm:text-8xl font-extralight leading-none text-white/15">{chapter.number}</span>
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light leading-[1.08] -mt-10 sm:-mt-12">
              {chapter.title}
            </h3>
            <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">{chapter.description}</p>

            <ul className="grid gap-2.5">
              {chapter.highlights.map((hl) => (
                <li key={hl.title} className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.06] backdrop-blur-sm border border-white/10">
                  <span className="w-5 h-5 rounded-full bg-[#FAF8F2] text-[#0B1528] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wider">{hl.title}</span>
                    <span className="block text-xs text-white/60 font-light leading-relaxed mt-0.5">{hl.detail}</span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 pt-2">
              <a
                href={getWhatsAppUrl(chapter.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#FAF8F2] hover:bg-white text-[#0B1528] text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-lg shadow-black/30 hover:-translate-y-0.5"
              >
                <span>Reserve Experience</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <Link
                href={chapter.servicesLink}
                className="group inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.18em] font-medium text-white/90 hover:text-white transition-colors"
              >
                <span>Full Details</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Chapter selector */}
        <div role="tablist" aria-label="Experience chapters" className="grid grid-cols-3 gap-2.5 sm:gap-4">
          {CHAPTERS.map((item, idx) => {
            const isActive = idx === activeTab;
            return (
              <button
                key={item.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(idx)}
                className={`group relative flex items-center gap-3 sm:gap-4 p-2.5 sm:p-3.5 rounded-2xl text-left border backdrop-blur-xl transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                  isActive
                    ? "bg-[#FAF8F2] border-[#FAF8F2] text-[#0B1528] shadow-xl -translate-y-1"
                    : "bg-white/10 border-white/15 text-white hover:bg-white/20"
                }`}
              >
                <span className="relative hidden sm:block w-14 h-14 rounded-xl overflow-hidden shrink-0">
                  <Image src={item.image} alt="" fill sizes="56px" className="object-cover" />
                </span>
                <span className="min-w-0">
                  <span className={`block font-mono text-[10px] tracking-widest ${isActive ? "text-accent" : "text-white/50"}`}>
                    {item.number}
                  </span>
                  <span className="block font-serif text-sm sm:text-lg leading-tight truncate">{item.label}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
