"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Dumbbell,
  Sparkles,
  HeartHandshake,
  Clock,
  ShieldCheck,
  Check,
  ArrowRight,
  ChevronDown,
  Compass,
  Activity,
  Flame,
  Layers,
  Phone,
  Calendar,
  Sparkle,
} from "lucide-react";
import AmbientGoldParticles from "@/components/AmbientGoldParticles";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { BRAND_INFO } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/utils";

// Interactive selector data for "Which Service Fits You Best?"
interface NeedProfile {
  id: string;
  label: string;
  problem: string;
  recommendation: string;
  disciplineId: string;
  disciplineTitle: string;
  duration: string;
  outcome: string;
  badge: string;
  whatsappMessage: string;
}

const NEED_PROFILES: NeedProfile[] = [
  {
    id: "desk-strain",
    label: "Desk Strain & Posture",
    problem: "Long hours at a desk causing forward-head posture, chronic upper trapezius stiffness, and dull lower-back ache.",
    recommendation: "Anatomical Therapeutic Massage (90 Min) or The Signature Dual Synergy",
    disciplineId: "therapeutic-massage",
    disciplineTitle: "Therapeutic Massage",
    duration: "90 Minutes Recommended",
    outcome: "Immediate decompression of the cervical spine, release of scapular trigger points, and restored thoracic extension.",
    badge: "Most Popular For Executives",
    whatsappMessage: "Hello CROSA, I am experiencing desk-related neck and back stiffness. I would like to book a therapeutic session.",
  },
  {
    id: "athletic-recovery",
    label: "Athletic Performance",
    problem: "Heavy gym training or sports volume leaving muscles dense, tight, and prone to repetitive strain.",
    recommendation: "Sports Remedial & Fascial Release with Thermal Basalt Therapy",
    disciplineId: "therapeutic-massage",
    disciplineTitle: "Therapeutic Massage",
    duration: "60 - 90 Minutes",
    outcome: "Accelerated lymphatic clearing, restored muscular elasticity, and significantly reduced recovery downtime.",
    badge: "High Performance",
    whatsappMessage: "Hello CROSA, I am looking for sports-focused deep tissue recovery for athletic training.",
  },
  {
    id: "guided-strength",
    label: "Safe Strength & Mobility",
    problem: "Desire to build lean strength and athletic longevity without joint wear, guesswork, or crowded commercial gym chaos.",
    recommendation: "Private 1-on-1 Movement Coaching & Biomechanics",
    disciplineId: "fitness-training",
    disciplineTitle: "Movement Coaching",
    duration: "60 - 75 Minutes",
    outcome: "Personalized biomechanical loading, pristine lifting mechanics, enhanced pelvic-core stability, and sustainable stamina.",
    badge: "Intelligent Conditioning",
    whatsappMessage: "Hello CROSA, I would like to arrange a consultation for 1-on-1 Private Movement Coaching.",
  },
  {
    id: "total-reset",
    label: "Stress & Fatigue Reset",
    problem: "High cognitive stress, shallow breathing, fragmented sleep, and persistent nervous exhaustion.",
    recommendation: "The Signature Dual Synergy Immersion or Holistic Restorative Care",
    disciplineId: "dual-synergy",
    disciplineTitle: "Dual Synergy Immersion",
    duration: "120 Minutes Complete Experience",
    outcome: "Downregulation of the autonomic nervous system, deep physical unwinding, and profound mental tranquility.",
    badge: "Ultimate Immersion",
    whatsappMessage: "Hello CROSA, I am interested in experiencing your Signature Dual Synergy Immersion program.",
  },
];

const FAQS = [
  {
    q: "How do I choose between Movement Coaching and Therapeutic Massage?",
    a: "If your immediate challenge is acute muscular tightness, fatigue, or postural tension, we advise starting with a 90-minute Anatomical Therapeutic Massage. If your goal is building sustainable strength, correcting movement asymmetries, or functional conditioning, Movement Coaching is ideal. For the ultimate reset, our Dual Synergy Immersion bridges both in one visit.",
  },
  {
    q: "Are the suites and training spaces strictly private?",
    a: "Yes, without exception. CROSA operates as an intimate sanctuary in Colombo 05. Both our movement bays and therapeutic treatment suites are reserved exclusively for you during your appointment time—guaranteeing total discretion, tranquil acoustics, and zero crowds.",
  },
  {
    q: "What should I wear or bring to my first appointment?",
    a: "For Movement Coaching, wear comfortable, breathable athletic apparel and supportive training footwear. For Therapeutic Massage and Holistic sessions, we provide freshly laundered robes, disposable garments, and private changing suites with rainfall shower amenities.",
  },
  {
    q: "Can I customize the pressure and focus areas during my massage?",
    a: "Absolutely. Before every session, your senior therapist conducts a preliminary consultation to assess current discomfort, pressure preferences, and clinical contraindications. Pressure is continually calibrated to match your comfort and tissue response.",
  },
  {
    q: "How far in advance should I book my appointment?",
    a: "Because our practitioner roster and private suites are strictly limited to maintain sanctuary quality, we advise reserving 24 to 48 hours in advance through our direct WhatsApp concierge.",
  },
];

export default function ServicesView() {
  const [activeNeed, setActiveNeed] = useState<string>("desk-strain");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const selectedProfile = NEED_PROFILES.find((p) => p.id === activeNeed) || NEED_PROFILES[0];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col w-full bg-[#FAF8F2] text-[#0B1528] selection:bg-[#C5A059] selection:text-white">
      {/* ─────────────────────────────────────────────────────────────
          1. CINEMATIC HERO SECTION
      ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-24 sm:pt-44 sm:pb-32 bg-[#060D1A] text-white overflow-hidden">
        {/* Background Architectural Layer */}
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src="/images/hero/arrival-lounge.jpg"
            alt="CROSA Sanctuary Colombo"
            fill
            priority
            className="object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060D1A] via-[#060D1A]/80 to-[#060D1A]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(197,160,89,0.15),transparent_65%)]" />
        </div>

        {/* Ambient Gold Stardust Particles */}
        <AmbientGoldParticles density={34} speed={0.35} colorScheme="mixed" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-7">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0B1528]/80 border border-[#C5A059]/40 backdrop-blur-md shadow-lg shadow-black/40">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-pulse" />
            <span className="text-[11px] uppercase tracking-[0.28em] font-medium text-[#DFCCA3]">
              Curated Sanctuary Disciplines • Colombo 05
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight leading-[1.08] text-white">
            Anatomical Precision. <br />
            <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#DFCCA3] via-[#C5A059] to-[#DFCCA3]">
              Restorative Luxury.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#D0DBE8] font-light leading-relaxed">
            A harmonious synthesis of private biomechanical conditioning, clinical remedial massage, and cellular recovery. Every touchpoint is calibrated to renew physical resilience and quiet the urban mind.
          </p>

          {/* Sanctuary Hallmark Badges */}
          <div className="pt-3 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            <div className="px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-[#C5A059]/20 backdrop-blur-sm text-left">
              <span className="block text-[10px] uppercase tracking-wider text-[#C5A059] font-medium">Privacy</span>
              <span className="text-xs sm:text-sm text-white font-medium">100% Private Bays</span>
            </div>
            <div className="px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-[#C5A059]/20 backdrop-blur-sm text-left">
              <span className="block text-[10px] uppercase tracking-wider text-[#C5A059] font-medium">Assessment</span>
              <span className="text-xs sm:text-sm text-white font-medium">Anatomical Intake</span>
            </div>
            <div className="px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-[#C5A059]/20 backdrop-blur-sm text-left">
              <span className="block text-[10px] uppercase tracking-wider text-[#C5A059] font-medium">Practitioners</span>
              <span className="text-xs sm:text-sm text-white font-medium">Certified Senior Staff</span>
            </div>
            <div className="px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-[#C5A059]/20 backdrop-blur-sm text-left">
              <span className="block text-[10px] uppercase tracking-wider text-[#C5A059] font-medium">Location</span>
              <span className="text-xs sm:text-sm text-white font-medium">Thimbirigasyaya Rd</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. STICKY DISCIPLINE NAVIGATOR
      ───────────────────────────────────────────────────────────── */}
      <div className="sticky top-[72px] sm:top-[80px] z-30 w-full bg-[#0B1528]/95 backdrop-blur-md border-y border-[#C5A059]/25 shadow-xl transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 py-3 overflow-x-auto no-scrollbar scroll-smooth">
            <button
              onClick={() => scrollToSection("fitness-training")}
              className="px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase whitespace-nowrap transition-all duration-200 text-[#DFCCA3] hover:text-white hover:bg-[#C5A059]/20 border border-transparent hover:border-[#C5A059]/40 flex items-center gap-2"
            >
              <Dumbbell className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>01. Movement Coaching</span>
            </button>
            <button
              onClick={() => scrollToSection("therapeutic-massage")}
              className="px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase whitespace-nowrap transition-all duration-200 text-[#DFCCA3] hover:text-white hover:bg-[#C5A059]/20 border border-transparent hover:border-[#C5A059]/40 flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>02. Therapeutic Massage</span>
            </button>
            <button
              onClick={() => scrollToSection("wellness-services")}
              className="px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase whitespace-nowrap transition-all duration-200 text-[#DFCCA3] hover:text-white hover:bg-[#C5A059]/20 border border-transparent hover:border-[#C5A059]/40 flex items-center gap-2"
            >
              <HeartHandshake className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>03. Holistic Rejuvenation</span>
            </button>
            <button
              onClick={() => scrollToSection("dual-synergy")}
              className="px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase whitespace-nowrap transition-all duration-200 text-[#0B1528] bg-gradient-to-r from-[#DFCCA3] to-[#C5A059] font-semibold border border-[#C5A059] shadow-md hover:brightness-110 flex items-center gap-2"
            >
              <Layers className="w-3.5 h-3.5 text-[#0B1528]" />
              <span>Signature Dual Synergy</span>
            </button>
            <button
              onClick={() => scrollToSection("concierge-guide")}
              className="px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase whitespace-nowrap transition-all duration-200 text-[#DFE7F3] hover:text-[#C5A059] hover:bg-white/5 border border-transparent flex items-center gap-2"
            >
              <Compass className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Which Suits You?</span>
            </button>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. DISCIPLINE 01: MOVEMENT COACHING & BIOMECHANICS
      ───────────────────────────────────────────────────────────── */}
      <section id="fitness-training" className="scroll-mt-36 py-20 sm:py-28 bg-[#FAF8F2] relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative group">
                {/* Decorative architectural frame */}
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#C5A059]/20 via-transparent to-[#0B1528]/10 -z-10 blur-sm group-hover:blur-md transition-all duration-500" />
                
                <div className="relative h-[440px] sm:h-[520px] w-full rounded-2xl overflow-hidden shadow-2xl border border-[#E8DEC8]">
                  <Image
                    src="/images/hero/fitness-studio.jpg"
                    alt="CROSA Private Movement Coaching Bay Colombo"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060D1A]/90 via-[#060D1A]/25 to-transparent" />
                  
                  {/* Overlay Badges */}
                  <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                    <span className="px-3.5 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-widest bg-[#0B1528]/90 text-[#DFCCA3] backdrop-blur-md border border-[#C5A059]/40 shadow-md">
                      Discipline 01 // Biomechanics
                    </span>
                    <span className="px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider bg-white/15 text-white backdrop-blur-md border border-white/20">
                      1-on-1 Sanctuary Bay
                    </span>
                  </div>

                  {/* Spec Card pinned inside image */}
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#0B1528]/85 backdrop-blur-md border border-[#C5A059]/30 text-white space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#C5A059] uppercase tracking-wider font-semibold">Session Profile</span>
                      <span className="text-white/80 font-light flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#C5A059]" /> 60 – 75 Minutes
                      </span>
                    </div>
                    <p className="text-xs text-[#DFE7F3] leading-relaxed">
                      Calibrated progressive loading, functional kinetic alignment, and joint stability without generic burnout.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 space-y-7">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0B1528] text-[#DFCCA3] border border-[#C5A059]/30 text-xs font-semibold uppercase tracking-widest">
                  <Dumbbell className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>KINETIC ARCHITECTURE</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0B1528] font-normal leading-tight">
                  Private Movement Coaching & Biomechanics
                </h2>
                <p className="text-base text-[#4C5868] leading-relaxed font-light">
                  True physical capability is built through intelligent movement, not reckless fatigue. In our secluded training bays, certified movement specialists assess your kinetic chain to build strength, mobility, and resilient posture.
                </p>
              </div>

              {/* 3 Protocol Pillars */}
              <div className="space-y-3.5">
                <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#0B1528]">
                  Curated Protocol Architecture
                </h3>
                
                <div className="p-4 rounded-xl bg-white border border-[#E8DEC8] hover:border-[#C5A059] transition-colors shadow-sm space-y-1">
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#0B1528] text-[#C5A059] flex items-center justify-center text-[10px] font-bold">1</span>
                    <h4 className="text-sm font-semibold text-[#0B1528]">Biomechanical Screen & Functional Audit</h4>
                  </div>
                  <p className="text-xs text-[#5E6977] pl-7 leading-relaxed">
                    A thorough assessment of thoracic rotation, pelvic tilt, ankle dorsiflexion, and dormant stabilizer recruitment before loading.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E8DEC8] hover:border-[#C5A059] transition-colors shadow-sm space-y-1">
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#0B1528] text-[#C5A059] flex items-center justify-center text-[10px] font-bold">2</span>
                    <h4 className="text-sm font-semibold text-[#0B1528]">Intelligent Progressive Conditioning</h4>
                  </div>
                  <p className="text-xs text-[#5E6977] pl-7 leading-relaxed">
                    Customized resistance patterns, spinal de-loading drills, and core bracing designed to support athletic vigor and daily physical comfort.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E8DEC8] hover:border-[#C5A059] transition-colors shadow-sm space-y-1">
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#0B1528] text-[#C5A059] flex items-center justify-center text-[10px] font-bold">3</span>
                    <h4 className="text-sm font-semibold text-[#0B1528]">Downregulation & Fascial Recovery</h4>
                  </div>
                  <p className="text-xs text-[#5E6977] pl-7 leading-relaxed">
                    Assisted active mobility, diaphragmatic breath resetting, and nervous system calm so you depart energized rather than depleted.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <a
                  href={getWhatsAppUrl("Hello CROSA, I would like to consult with a movement coach regarding private 1-on-1 training.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#0B1528] hover:bg-[#14233e] text-[#DFCCA3] hover:text-white border border-[#C5A059]/40 hover:border-[#C5A059] text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-md group"
                >
                  <WhatsAppIcon className="w-4 h-4" fill="currentColor" />
                  <span>Enquire for Movement Coaching</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
                </a>
                <span className="text-xs text-[#7A8699]">
                  Strictly 1-on-1 • Colombo 05
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. DISCIPLINE 02: ANATOMICAL THERAPEUTIC MASSAGE (DARK OBSIDIAN STAGE)
      ───────────────────────────────────────────────────────────── */}
      <section id="therapeutic-massage" className="scroll-mt-36 py-20 sm:py-28 bg-[#0B1528] text-white relative overflow-hidden">
        {/* Ambient Gold Particles */}
        <AmbientGoldParticles density={28} speed={0.3} colorScheme="gold" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Content Column (Order 2 on mobile, 1 on desktop) */}
            <div className="lg:col-span-6 space-y-7 order-2 lg:order-1">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#060D1A] text-[#DFCCA3] border border-[#C5A059]/30 text-xs font-semibold uppercase tracking-widest">
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>NEUROMUSCULAR THERAPY</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-normal leading-tight">
                  Anatomical Therapeutic & Remedial Massage
                </h2>
                <p className="text-base text-[#D0DBE8] leading-relaxed font-light">
                  Precision soft-tissue restoration designed to dissolve deep chronic adhesions, release locked scapular zones, and relieve cervical fatigue accumulated from relentless desk work and high-intensity athletics.
                </p>
              </div>

              {/* 4 Clinical Modalities Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-4 rounded-xl bg-white/[0.04] border border-[#C5A059]/20 hover:border-[#C5A059]/50 transition-colors space-y-1.5">
                  <div className="flex items-center gap-2 text-[#DFCCA3]">
                    <Activity className="w-4 h-4 text-[#C5A059]" />
                    <h4 className="text-sm font-semibold">Deep Tissue & Myofascial</h4>
                  </div>
                  <p className="text-xs text-[#B2C1D4] leading-relaxed">
                    Deactivates irritable trigger points and restores natural fascial glide across the spine and shoulders.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.04] border border-[#C5A059]/20 hover:border-[#C5A059]/50 transition-colors space-y-1.5">
                  <div className="flex items-center gap-2 text-[#DFCCA3]">
                    <Flame className="w-4 h-4 text-[#C5A059]" />
                    <h4 className="text-sm font-semibold">Thermal Basalt Synergy</h4>
                  </div>
                  <p className="text-xs text-[#B2C1D4] leading-relaxed">
                    Volcanic basalt stones deliver sustained therapeutic warmth to dilate micro-circulation and soften stubborn muscle knots.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.04] border border-[#C5A059]/20 hover:border-[#C5A059]/50 transition-colors space-y-1.5">
                  <div className="flex items-center gap-2 text-[#DFCCA3]">
                    <Compass className="w-4 h-4 text-[#C5A059]" />
                    <h4 className="text-sm font-semibold">Cervical & Craniosacral</h4>
                  </div>
                  <p className="text-xs text-[#B2C1D4] leading-relaxed">
                    Suboccipital decompression targeted to relieve tension headaches, eye strain, and nervous agitation.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.04] border border-[#C5A059]/20 hover:border-[#C5A059]/50 transition-colors space-y-1.5">
                  <div className="flex items-center gap-2 text-[#DFCCA3]">
                    <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                    <h4 className="text-sm font-semibold">Sports Muscular Drainage</h4>
                  </div>
                  <p className="text-xs text-[#B2C1D4] leading-relaxed">
                    Accelerated lymphatic clearing and muscle flush to shorten post-training recovery windows.
                  </p>
                </div>
              </div>

              {/* Sanctuary Suite Specs */}
              <div className="p-3.5 rounded-xl bg-[#060D1A]/70 border border-[#C5A059]/25 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#C5A059]" />
                  <span className="text-[#DFCCA3]">Durations:</span>
                  <span className="text-white font-medium">60 / 90 / 120 Mins</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkle className="w-4 h-4 text-[#C5A059]" />
                  <span className="text-[#DFCCA3]">Botanicals:</span>
                  <span className="text-white font-medium">Pure Cold-Pressed Oils</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <a
                  href={getWhatsAppUrl("Hello CROSA, I would like to book an Anatomical Therapeutic Massage session.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#DFCCA3] to-[#C5A059] hover:from-[#E8DEC8] hover:to-[#DFCCA3] text-[#0B1528] text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-lg shadow-black/40 group"
                >
                  <WhatsAppIcon className="w-4 h-4" fill="#0B1528" />
                  <span>Reserve Therapeutic Session</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#0B1528] group-hover:translate-x-1 transition-transform" />
                </a>
                <span className="text-xs text-[#DFCCA3]/80">
                  Private Aromatherapy Suite
                </span>
              </div>
            </div>

            {/* Visual Column (Order 1 on mobile, 2 on desktop) */}
            <div className="lg:col-span-6 relative order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#C5A059]/30 via-transparent to-white/5 -z-10 blur-sm group-hover:blur-md transition-all duration-500" />
                
                <div className="relative h-[440px] sm:h-[520px] w-full rounded-2xl overflow-hidden shadow-2xl border border-[#C5A059]/30">
                  <Image
                    src="/images/hero/therapeutic-massage.jpg"
                    alt="CROSA Therapeutic Massage Treatment Colombo"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060D1A]/90 via-[#060D1A]/20 to-transparent" />

                  {/* Overlay Badges */}
                  <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                    <span className="px-3.5 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-widest bg-[#0B1528]/90 text-[#DFCCA3] backdrop-blur-md border border-[#C5A059]/40 shadow-md">
                      Discipline 02 // Therapy
                    </span>
                    <span className="px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider bg-white/15 text-white backdrop-blur-md border border-white/20">
                      Private Aromatherapy Suite
                    </span>
                  </div>

                  {/* Testimonial Quote pinned inside */}
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#060D1A]/90 backdrop-blur-md border border-[#C5A059]/30 text-white space-y-1.5">
                    <p className="text-xs italic text-[#DFCCA3] leading-relaxed">
                      &ldquo;The clinical understanding of musculoskeletal anatomy here is peerless in Colombo. My chronic neck tightness was resolved in two targeted sessions.&rdquo;
                    </p>
                    <p className="text-[10px] text-white/70 uppercase tracking-wider font-semibold">
                      Senior Counsel • Colombo 07
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. DISCIPLINE 03: HOLISTIC REJUVENATION & RESTORATIVE CARE
      ───────────────────────────────────────────────────────────── */}
      <section id="wellness-services" className="scroll-mt-36 py-20 sm:py-28 bg-[#FAF8F2] relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative group">
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#C5A059]/20 via-transparent to-[#0B1528]/10 -z-10 blur-sm group-hover:blur-md transition-all duration-500" />
                
                <div className="relative h-[440px] sm:h-[520px] w-full rounded-2xl overflow-hidden shadow-2xl border border-[#E8DEC8]">
                  <Image
                    src="/images/hero/restorative-space.jpg"
                    alt="CROSA Restorative Wellness Sanctuary Colombo"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060D1A]/90 via-[#060D1A]/25 to-transparent" />
                  
                  {/* Overlay Badges */}
                  <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                    <span className="px-3.5 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-widest bg-[#0B1528]/90 text-[#DFCCA3] backdrop-blur-md border border-[#C5A059]/40 shadow-md">
                      Discipline 03 // Restoration
                    </span>
                    <span className="px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider bg-white/15 text-white backdrop-blur-md border border-white/20">
                      Autonomous Unwinding
                    </span>
                  </div>

                  {/* Spec Card pinned inside image */}
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#0B1528]/85 backdrop-blur-md border border-[#C5A059]/30 text-white space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#C5A059] uppercase tracking-wider font-semibold">Nervous System Recovery</span>
                      <span className="text-white/80 font-light flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#C5A059]" /> 60 – 90 Minutes
                      </span>
                    </div>
                    <p className="text-xs text-[#DFE7F3] leading-relaxed">
                      Acoustic dampening, warm herbal compresses, and rhythmic tactile care to downregulate cortisol.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 space-y-7">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0B1528] text-[#DFCCA3] border border-[#C5A059]/30 text-xs font-semibold uppercase tracking-widest">
                  <HeartHandshake className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>PARASYMPATHETIC EQUILIBRIUM</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0B1528] font-normal leading-tight">
                  Holistic Rejuvenation & Restorative Care
                </h2>
                <p className="text-base text-[#4C5868] leading-relaxed font-light">
                  Modern urban fatigue is not solely physical—it is neurological. Our holistic treatments slow rapid heart rate variability, quiet cognitive tension, and align the breath through unhurried, intentional sanctuary rituals.
                </p>
              </div>

              {/* 3 Pillars */}
              <div className="space-y-3.5">
                <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#0B1528]">
                  Holistic Care Components
                </h3>

                <div className="p-4 rounded-xl bg-white border border-[#E8DEC8] hover:border-[#C5A059] transition-colors shadow-sm space-y-1">
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#0B1528] text-[#C5A059] flex items-center justify-center text-[10px] font-bold">1</span>
                    <h4 className="text-sm font-semibold text-[#0B1528]">Parasympathetic Nervous Reset</h4>
                  </div>
                  <p className="text-xs text-[#5E6977] pl-7 leading-relaxed">
                    Guided rhythmic respiration alongside gentle cervical alignment shifts the body out of chronic fight-or-flight into restorative parasympathetic repair.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E8DEC8] hover:border-[#C5A059] transition-colors shadow-sm space-y-1">
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#0B1528] text-[#C5A059] flex items-center justify-center text-[10px] font-bold">2</span>
                    <h4 className="text-sm font-semibold text-[#0B1528]">Botanical Lymphatic Flush</h4>
                  </div>
                  <p className="text-xs text-[#5E6977] pl-7 leading-relaxed">
                    Light tactile strokes using unadulterated cold-pressed botanicals stimulate stagnant interstitial fluid and ease joint fullness.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E8DEC8] hover:border-[#C5A059] transition-colors shadow-sm space-y-1">
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#0B1528] text-[#C5A059] flex items-center justify-center text-[10px] font-bold">3</span>
                    <h4 className="text-sm font-semibold text-[#0B1528]">Passive Spinal Decompression</h4>
                  </div>
                  <p className="text-xs text-[#5E6977] pl-7 leading-relaxed">
                    Therapist-assisted gentle traction of the lumbar and thoracic spine to alleviate gravitational disc loading.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <a
                  href={getWhatsAppUrl("Hello CROSA, I would like to enquire about your Holistic Rejuvenation treatments.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#0B1528] hover:bg-[#14233e] text-[#DFCCA3] hover:text-white border border-[#C5A059]/40 hover:border-[#C5A059] text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-md group"
                >
                  <WhatsAppIcon className="w-4 h-4" fill="currentColor" />
                  <span>Enquire for Holistic Wellness</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
                </a>
                <span className="text-xs text-[#7A8699]">
                  Unhurried • Colombo 05
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. THE SIGNATURE CROSA DUAL SYNERGY IMMERSION
      ───────────────────────────────────────────────────────────── */}
      <section id="dual-synergy" className="scroll-mt-36 py-20 sm:py-28 bg-[#060D1A] text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/hero/spa-suite.jpg"
            alt="CROSA Signature Spa Suite Colombo"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060D1A] via-[#060D1A]/90 to-[#060D1A]" />
        </div>

        <AmbientGoldParticles density={30} speed={0.3} colorScheme="mixed" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/40 text-xs font-semibold text-[#DFCCA3] uppercase tracking-[0.25em]">
              <Sparkle className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>THE CROSA HALLMARK</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal leading-tight">
              The Dual Synergy Immersion
            </h2>
            <p className="text-sm sm:text-base text-[#D0DBE8] font-light leading-relaxed">
              Why separate physical conditioning from restorative therapy? Our crowning two-hour protocol integrates guided kinetic movement with immediate deep remedial massage under one tranquil roof.
            </p>
          </div>

          {/* 3-Step Synergistic Journey Card */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Step 1 */}
            <div className="relative p-7 rounded-2xl bg-[#0B1528]/80 border border-[#C5A059]/30 backdrop-blur-md space-y-4 hover:border-[#C5A059] transition-all group">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest font-semibold text-[#C5A059]">Phase 01</span>
                <span className="px-2.5 py-1 rounded-full text-[10px] bg-white/10 text-white">50 Minutes</span>
              </div>
              <h3 className="font-serif text-2xl text-white font-normal group-hover:text-[#DFCCA3] transition-colors">
                Kinetic Calibration & Alignment
              </h3>
              <p className="text-xs text-[#B2C1D4] leading-relaxed">
                Step into the private movement bay for a tailored conditioning session focusing on postural stability, rotational mobility, and gentle joint traction.
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs text-[#C5A059]">
                <Check className="w-3.5 h-3.5" />
                <span>Warms core musculature & fascia</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative p-7 rounded-2xl bg-[#0B1528]/80 border border-[#C5A059]/30 backdrop-blur-md space-y-4 hover:border-[#C5A059] transition-all group">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest font-semibold text-[#C5A059]">Phase 02</span>
                <span className="px-2.5 py-1 rounded-full text-[10px] bg-white/10 text-white">15 Minutes</span>
              </div>
              <h3 className="font-serif text-2xl text-white font-normal group-hover:text-[#DFCCA3] transition-colors">
                Thermal Refresh & Botanical Hydration
              </h3>
              <p className="text-xs text-[#B2C1D4] leading-relaxed">
                Transition to the private lounge for a rain shower rinse, followed by cold-pressed mineral hydration and herbal infusion to prepare the nervous system.
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs text-[#C5A059]">
                <Check className="w-3.5 h-3.5" />
                <span>Calms heart rate & metabolic load</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative p-7 rounded-2xl bg-[#0B1528]/80 border border-[#C5A059]/30 backdrop-blur-md space-y-4 hover:border-[#C5A059] transition-all group">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest font-semibold text-[#C5A059]">Phase 03</span>
                <span className="px-2.5 py-1 rounded-full text-[10px] bg-white/10 text-white">55 Minutes</span>
              </div>
              <h3 className="font-serif text-2xl text-white font-normal group-hover:text-[#DFCCA3] transition-colors">
                Deep Remedial & Basalt Therapy
              </h3>
              <p className="text-xs text-[#B2C1D4] leading-relaxed">
                Because muscles are primed and warm, your therapist can work deeply into fascia with minimal resistance, releasing tension and preventing soreness.
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs text-[#C5A059]">
                <Check className="w-3.5 h-3.5" />
                <span>Zero soreness, peak revitalization</span>
              </div>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-[#0B1528] via-[#11203D] to-[#0B1528] border border-[#C5A059]/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="space-y-1.5 text-center sm:text-left">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C5A059]">
                Exclusive Single-Day Appointment
              </span>
              <h4 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                Reserve The Dual Synergy Immersion
              </h4>
              <p className="text-xs sm:text-sm text-[#DFE7F3] max-w-lg leading-relaxed">
                Available by advance reservation. Strictly one guest or private pair at a time for uninterrupted sanctuary privacy.
              </p>
            </div>

            <a
              href={getWhatsAppUrl("Hello CROSA, I am interested in reserving the 2-Hour Signature Dual Synergy Immersion.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#DFCCA3] to-[#C5A059] hover:from-[#E8DEC8] hover:to-[#DFCCA3] text-[#0B1528] text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-200 shadow-lg flex items-center gap-3 shrink-0"
            >
              <WhatsAppIcon className="w-4 h-4" fill="#0B1528" />
              <span>Enquire for Dual Synergy</span>
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. INTERACTIVE CONCIERGE SELECTOR ("WHICH SERVICE SUITS YOU?")
      ───────────────────────────────────────────────────────────── */}
      <section id="concierge-guide" className="scroll-mt-36 py-20 sm:py-28 bg-[#FAF8F2] relative border-b border-[#E8DEC8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C5A059]">
              Personalized Recommendation
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0B1528] font-normal leading-tight">
              Which Discipline Suits Your Current Need?
            </h2>
            <p className="text-sm sm:text-base text-[#5E6977] font-light leading-relaxed">
              Select your primary physical condition below to view the clinical recommendation calibrated by our senior practitioners.
            </p>
          </div>

          {/* Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-8">
            {NEED_PROFILES.map((profile) => {
              const isSelected = profile.id === activeNeed;
              return (
                <button
                  key={profile.id}
                  onClick={() => setActiveNeed(profile.id)}
                  className={`p-3.5 sm:p-4 rounded-xl text-left transition-all duration-200 border ${
                    isSelected
                      ? "bg-[#0B1528] text-white border-[#C5A059] shadow-lg shadow-black/10 scale-[1.02]"
                      : "bg-white text-[#0B1528] border-[#E8DEC8] hover:border-[#C5A059]/60 hover:bg-[#F5EFE6]"
                  }`}
                >
                  <span
                    className={`block text-[10px] uppercase tracking-wider font-semibold mb-1 ${
                      isSelected ? "text-[#C5A059]" : "text-[#7A8699]"
                    }`}
                  >
                    Condition Profile
                  </span>
                  <span className="text-xs sm:text-sm font-medium leading-tight block">
                    {profile.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Profile Detail Card */}
          <div className="p-6 sm:p-9 rounded-2xl bg-white border border-[#C5A059]/40 shadow-xl space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E8DEC8] pb-4">
              <div>
                <span className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-[#0B1528] text-[#DFCCA3]">
                  {selectedProfile.badge}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#0B1528] mt-2 font-normal">
                  {selectedProfile.label} Protocol
                </h3>
              </div>
              <div className="text-right">
                <span className="text-[11px] uppercase tracking-wider text-[#7A8699] block font-medium">
                  Ideal Cadence
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#0B1528]">
                  {selectedProfile.duration}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-wider font-bold text-[#0B1528] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                  What You Are Experiencing:
                </span>
                <p className="text-xs sm:text-sm text-[#5E6977] leading-relaxed">
                  {selectedProfile.problem}
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-wider font-bold text-[#0B1528] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                  Recommended Treatment:
                </span>
                <p className="text-xs sm:text-sm font-medium text-[#0B1528] leading-relaxed">
                  {selectedProfile.recommendation}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E8DEC8] text-xs sm:text-sm text-[#3B4755] flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-[#0B1528]">Expected Clinical Outcome: </span>
                <span>{selectedProfile.outcome}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={() => scrollToSection(selectedProfile.disciplineId)}
                className="text-xs font-semibold text-[#0B1528] hover:text-[#C5A059] underline underline-offset-4 uppercase tracking-wider flex items-center gap-1.5"
              >
                <span>Read Full {selectedProfile.disciplineTitle} Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={getWhatsAppUrl(selectedProfile.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-md"
              >
                <WhatsAppIcon className="w-4 h-4" fill="white" />
                <span>Discuss This Condition on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          8. SANCTUARY STANDARDS & NON-NEGOTIABLES
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#F5EFE6]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C5A059]">
              The CROSA Benchmark
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0B1528] font-normal leading-tight">
              Four Sanctuary Non-Negotiables
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#E8DEC8] space-y-3 shadow-sm hover:border-[#C5A059] transition-colors">
              <div className="w-10 h-10 rounded-full bg-[#0B1528] text-[#C5A059] flex items-center justify-center font-serif text-lg font-normal">
                01
              </div>
              <h3 className="font-serif text-lg font-normal text-[#0B1528]">Absolute Suite Privacy</h3>
              <p className="text-xs text-[#5E6977] leading-relaxed">
                Zero shared communal treatment floors. Every coaching session and massage is conducted inside a soundproof, private sanctuary suite.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E8DEC8] space-y-3 shadow-sm hover:border-[#C5A059] transition-colors">
              <div className="w-10 h-10 rounded-full bg-[#0B1528] text-[#C5A059] flex items-center justify-center font-serif text-lg font-normal">
                02
              </div>
              <h3 className="font-serif text-lg font-normal text-[#0B1528]">Clinical Intake Protocol</h3>
              <p className="text-xs text-[#5E6977] leading-relaxed">
                No generic routines. Every appointment begins with an in-depth musculoskeletal dialogue to identify spinal posture, acute strain, and daily habits.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E8DEC8] space-y-3 shadow-sm hover:border-[#C5A059] transition-colors">
              <div className="w-10 h-10 rounded-full bg-[#0B1528] text-[#C5A059] flex items-center justify-center font-serif text-lg font-normal">
                03
              </div>
              <h3 className="font-serif text-lg font-normal text-[#0B1528]">Artisanal Botanicals</h3>
              <p className="text-xs text-[#5E6977] leading-relaxed">
                We exclusively utilize pure, unadulterated cold-pressed oils and herbal compresses sustainably sourced across the island for restorative purity.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E8DEC8] space-y-3 shadow-sm hover:border-[#C5A059] transition-colors">
              <div className="w-10 h-10 rounded-full bg-[#0B1528] text-[#C5A059] flex items-center justify-center font-serif text-lg font-normal">
                04
              </div>
              <h3 className="font-serif text-lg font-normal text-[#0B1528]">Concierge Direct Care</h3>
              <p className="text-xs text-[#5E6977] leading-relaxed">
                Transparent scheduling, prompt consultation, and direct communication with certified specialists via our official WhatsApp concierge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          9. SERVICES FAQ ACCORDION
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#FAF8F2] border-t border-[#E8DEC8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C5A059]">
              Clarity & Peace of Mind
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0B1528] font-normal">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#E8DEC8] bg-white overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-serif text-lg sm:text-xl text-[#0B1528] font-normal">
                      {faq.q}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-transform duration-200 ${
                        isOpen
                          ? "rotate-180 bg-[#0B1528] text-[#DFCCA3] border-[#0B1528]"
                          : "bg-[#FAF8F2] text-[#0B1528] border-[#E8DEC8]"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm text-[#5E6977] leading-relaxed border-t border-[#FAF8F2]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          10. FINAL CONCIERGE CONSULTATION CTA
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#060D1A] text-white relative overflow-hidden border-t border-[#C5A059]/20">
        <AmbientGoldParticles density={32} speed={0.3} colorScheme="mixed" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-7 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1528] border border-[#C5A059]/40 text-xs font-semibold text-[#DFCCA3] uppercase tracking-[0.25em]">
            <Sparkle className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>DIRECT CONCIERGE DIALOGUE</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-white leading-tight">
            Begin Your Tailored Recovery Journey
          </h2>

          <p className="text-sm sm:text-base text-[#D0DBE8] max-w-xl mx-auto leading-relaxed font-light">
            Our practitioners are pleased to discuss your physical training goals, chronic desk strain, and schedule to assemble an uncompromising sanctuary program.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href={getWhatsAppUrl("Hello CROSA, I would like to consult with your concierge regarding service recommendations.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#DFCCA3] to-[#C5A059] hover:from-[#E8DEC8] hover:to-[#DFCCA3] text-[#0B1528] text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-200 shadow-xl hover:scale-105"
            >
              <WhatsAppIcon className="w-4 h-4" fill="#0B1528" />
              <span>Consult on WhatsApp</span>
            </a>

            <a
              href={`tel:${BRAND_INFO.phoneInternational}`}
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/20 text-xs sm:text-sm font-medium uppercase tracking-wider transition-all duration-200"
            >
              <Phone className="w-4 h-4 text-[#C5A059]" />
              <span>Call Concierge: {BRAND_INFO.phoneDisplay}</span>
            </a>
          </div>

          <p className="text-xs text-[#7A8699] pt-2">
            283 - 287 Thimbirigasyaya Rd, Colombo 00500 • Open Mon - Sat from 6:00 AM
          </p>
        </div>
      </section>
    </div>
  );
}
