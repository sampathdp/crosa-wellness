"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  Clock,
  ShieldCheck,
  Check,
  ArrowRight,
  ChevronDown,
  Activity,
  Flame,
  Shield,
  HeartPulse,
  Compass,
} from "lucide-react";
import AmbientGoldParticles from "@/components/AmbientGoldParticles";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { BRAND_INFO, CONDITIONS_TREATED } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/utils";

// Interactive selector data for "Which Care Pathway Fits Your Condition?"
interface NeedProfile {
  id: string;
  label: string;
  condition: string;
  recommendation: string;
  serviceId: string;
  serviceTitle: string;
  duration: string;
  outcome: string;
  badge: string;
  whatsappMessage: string;
}

const NEED_PROFILES: NeedProfile[] = [
  {
    id: "back-spine",
    label: "Back & Spine Pain",
    condition: "Persistent lower back aches, lumbar stiffness, sciatica flare-ups, or discomfort from prolonged sitting.",
    recommendation: "Targeted Pain Relief & Spine Decompression Protocol",
    serviceId: "pain-relief",
    serviceTitle: "Pain Relief",
    duration: "60 - 90 Minutes",
    outcome: "Decompression of the lumbar vertebrae, release of deep spinal extensor spasms, and restored comfortable posture.",
    badge: "Spine Care",
    whatsappMessage: "Hello CROSA, I am suffering from back and spine pain. I would like to consult for a Pain Relief session.",
  },
  {
    id: "neck-shoulder",
    label: "Neck & Shoulder Tension",
    condition: "Desk-bound forward head posture, trapezius stiffness, rotator cuff impingement, and tension headaches.",
    recommendation: "Cervical Decompression & Remedial Sports Massage",
    serviceId: "sports-massage",
    serviceTitle: "Sports Massage",
    duration: "60 - 90 Minutes",
    outcome: "Release of suboccipital and scapular trigger points, restored shoulder rotation, and headache relief.",
    badge: "Upper Kinetic Chain",
    whatsappMessage: "Hello CROSA, I am experiencing chronic neck and shoulder stiffness. I would like to book a treatment session.",
  },
  {
    id: "sports-injury",
    label: "Sports Injuries & Knees",
    condition: "Acute athletic strains, knee joint discomfort, patellar tracking issues, ligament sprains, or muscle tears.",
    recommendation: "Comprehensive Injury Rehabilitation & Joint Stabilization",
    serviceId: "rehabilitation",
    serviceTitle: "Rehabilitation",
    duration: "60 - 75 Minutes",
    outcome: "Reduction in local inflammation, accelerated tissue repair, joint stabilization, and safe return to sport.",
    badge: "Athletic Rehab",
    whatsappMessage: "Hello CROSA, I need rehabilitation care for a sports injury / knee issue.",
  },
  {
    id: "post-surgery-rehab",
    label: "Post Injury / Surgery Rehab",
    condition: "Recovery following an orthopedic procedure, severe strain, or prolonged immobilization requiring supervised rehab.",
    recommendation: "Structured Post-Injury Rehabilitation & Kinetic Reloading",
    serviceId: "rehabilitation",
    serviceTitle: "Rehabilitation",
    duration: "Custom Phased Program",
    outcome: "Progressive remodeling of scar tissue, restoration of full range of motion, and rebuild of foundational strength.",
    badge: "Post Trauma Recovery",
    whatsappMessage: "Hello CROSA, I am inquiring about a post-injury / post-surgical rehabilitation program.",
  },
  {
    id: "mobility-correction",
    label: "Mobility & Posture Reset",
    condition: "Poor functional mobility, recurring kinetic compensations, joint stiffness, or general physical fatigue.",
    recommendation: "1-on-1 Movement Therapy & Biomechanical Alignment",
    serviceId: "movement-therapy",
    serviceTitle: "Movement Therapy",
    duration: "60 Minutes",
    outcome: "Correction of asymmetric movement patterns, improved core stabilization, and effortless daily movement.",
    badge: "Kinetic Longevity",
    whatsappMessage: "Hello CROSA, I would like to book a Movement Therapy assessment.",
  },
];

const FAQS = [
  {
    q: "What conditions do you specialise in treating at CROSA?",
    a: "Our center specialises in non-invasive, evidence-led clinical care for Back Pain, Neck Pain, Shoulder Pain, Knee Pain, Sports Injuries, and Post-Injury Rehabilitation. We also offer Sports Massage, Movement Therapy, and restorative Wellness & Recovery.",
  },
  {
    q: "Do I need a doctor's referral to schedule an appointment?",
    a: "No medical referral is required. Our certified clinicians and practitioners conduct an in-depth anatomical and biomechanical assessment at the start of your first session to tailor the care protocol precisely to your condition.",
  },
  {
    q: "How many sessions are typically needed to experience relief?",
    a: "Most clients experience noticeable pain reduction and improved mobility within their very first session. For chronic conditions, severe sports injuries, or post-surgical rehabilitation, a structured course of 4 to 8 targeted sessions is typically recommended for long-term resolution.",
  },
  {
    q: "What is the difference between Sports Massage and Pain Relief therapy?",
    a: "Pain Relief therapy focuses clinically on joint stabilization, spinal decompression, and targeted alleviation of acute or chronic joint/nerve discomfort. Sports Massage uses deep remedial manual techniques specifically designed to flush athletic fatigue, break down dense muscular knots, and optimize tissue elasticity for active performers.",
  },
  {
    q: "Are the treatment rooms private?",
    a: "Yes, 100%. CROSA operates strictly with private, tranquil treatment suites and individual movement bays on Thimbirigasyaya Road in Colombo 05, ensuring utmost dignity, personal attention, and peace during your session.",
  },
  {
    q: "How do I book a consultation or appointment?",
    a: "You can reach our direct clinic concierge via WhatsApp at +94 74 161 4191 or by phone. We advise booking 24 to 48 hours in advance to secure your preferred clinician and time slot.",
  },
];

export default function ServicesView() {
  const [activeNeed, setActiveNeed] = useState<string>("back-spine");
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
            alt="CROSA Pain Management & Rehabilitation Center Colombo"
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
              Specialised Care For Your Pain &amp; Movement • Colombo 05
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight leading-[1.08] text-white">
            Move Better. <br />
            <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#DFCCA3] via-[#C5A059] to-[#DFCCA3]">
              Live Pain Free.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#D0DBE8] font-light leading-relaxed">
            Expert care for Back Pain, Neck Pain, Shoulder Pain, Knee Pain, Sports Injuries, and Post-Injury Rehab. Dedicated clinical therapies designed to help you recover, rehabilitate, and perform.
          </p>

          {/* Three Core Pillars Banner */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 px-6 py-2.5 rounded-full bg-[#0B1528]/90 border border-[#C5A059]/30 text-xs uppercase tracking-[0.25em] text-[#DFCCA3]">
            <span className="font-semibold text-white">Recover</span>
            <span className="text-[#C5A059]">&bull;</span>
            <span className="font-semibold text-white">Rehabilitate</span>
            <span className="text-[#C5A059]">&bull;</span>
            <span className="font-semibold text-white">Perform</span>
          </div>

          {/* Hallmark Badges */}
          <div className="pt-3 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            <div className="px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-[#C5A059]/20 backdrop-blur-sm text-left">
              <span className="block text-[10px] uppercase tracking-wider text-[#C5A059] font-medium">Focus</span>
              <span className="text-xs sm:text-sm text-white font-medium">Spine &amp; Joint Care</span>
            </div>
            <div className="px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-[#C5A059]/20 backdrop-blur-sm text-left">
              <span className="block text-[10px] uppercase tracking-wider text-[#C5A059] font-medium">Therapy</span>
              <span className="text-xs sm:text-sm text-white font-medium">Targeted Relief</span>
            </div>
            <div className="px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-[#C5A059]/20 backdrop-blur-sm text-left">
              <span className="block text-[10px] uppercase tracking-wider text-[#C5A059] font-medium">Rehab</span>
              <span className="text-xs sm:text-sm text-white font-medium">Post Injury Care</span>
            </div>
            <div className="px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-[#C5A059]/20 backdrop-blur-sm text-left">
              <span className="block text-[10px] uppercase tracking-wider text-[#C5A059] font-medium">Direct Line</span>
              <span className="text-xs sm:text-sm text-white font-medium">074 161 4191</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. CONDITIONS TREATED SECTION (DIRECT FROM CLINIC WINDOW POSTER)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#F5EFE6] border-b border-[#E8DEC8] relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1528] text-[#DFCCA3] text-[10px] font-semibold uppercase tracking-widest">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Specialised Clinical Focus</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0B1528] font-normal leading-tight">
              Specialised Care For Your Pain &amp; Movement
            </h2>
            <p className="text-sm text-[#5E6977] leading-relaxed">
              We diagnose and treat acute and chronic discomfort across the entire kinetic chain with precision manual care, decompression, and rehabilitation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {CONDITIONS_TREATED.map((c, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E8DEC8] hover:border-[#C5A059] shadow-sm hover:shadow-md transition-all space-y-3 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-[#0B1528] text-[#DFCCA3] flex items-center justify-center font-bold text-xs group-hover:bg-[#C5A059] group-hover:text-[#0B1528] transition-colors">
                      <Check className="w-4 h-4" />
                    </span>
                    <h3 className="font-serif text-xl text-[#0B1528] group-hover:text-[#C5A059] transition-colors font-medium">
                      {c.name}
                    </h3>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full bg-[#FAF8F2] text-[#8C9BB4] border border-[#E8DEC8]">
                    {c.category}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#5E6977] leading-relaxed pl-10">
                  {c.description}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-2 text-center">
            <a
              href={getWhatsAppUrl("Hello CROSA, I would like to consult about specialised care for my pain and movement.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#0B1528] hover:bg-[#14233e] text-[#DFCCA3] hover:text-white border border-[#C5A059]/40 text-xs font-semibold uppercase tracking-wider transition-all shadow-md group"
            >
              <WhatsAppIcon className="w-4 h-4" fill="currentColor" />
              <span>Consult on WhatsApp for Your Condition</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. STICKY DISCIPLINE NAVIGATOR (5 REAL CLINIC SERVICES)
      ───────────────────────────────────────────────────────────── */}
      <div className="sticky top-[72px] sm:top-[80px] z-30 w-full bg-[#0B1528]/95 backdrop-blur-md border-y border-[#C5A059]/25 shadow-xl transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 py-3 overflow-x-auto no-scrollbar scroll-smooth">
            <button
              onClick={() => scrollToSection("pain-relief")}
              className="px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase whitespace-nowrap transition-all duration-200 text-[#DFCCA3] hover:text-white hover:bg-[#C5A059]/20 border border-transparent hover:border-[#C5A059]/40 flex items-center gap-2"
            >
              <HeartPulse className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>01. Pain Relief</span>
            </button>
            <button
              onClick={() => scrollToSection("sports-massage")}
              className="px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase whitespace-nowrap transition-all duration-200 text-[#DFCCA3] hover:text-white hover:bg-[#C5A059]/20 border border-transparent hover:border-[#C5A059]/40 flex items-center gap-2"
            >
              <Flame className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>02. Sports Massage</span>
            </button>
            <button
              onClick={() => scrollToSection("rehabilitation")}
              className="px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase whitespace-nowrap transition-all duration-200 text-[#DFCCA3] hover:text-white hover:bg-[#C5A059]/20 border border-transparent hover:border-[#C5A059]/40 flex items-center gap-2"
            >
              <Shield className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>03. Rehabilitation</span>
            </button>
            <button
              onClick={() => scrollToSection("movement-therapy")}
              className="px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase whitespace-nowrap transition-all duration-200 text-[#DFCCA3] hover:text-white hover:bg-[#C5A059]/20 border border-transparent hover:border-[#C5A059]/40 flex items-center gap-2"
            >
              <Activity className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>04. Movement Therapy</span>
            </button>
            <button
              onClick={() => scrollToSection("wellness-recovery")}
              className="px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase whitespace-nowrap transition-all duration-200 text-[#DFCCA3] hover:text-white hover:bg-[#C5A059]/20 border border-transparent hover:border-[#C5A059]/40 flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>05. Wellness &amp; Recovery</span>
            </button>
            <button
              onClick={() => scrollToSection("concierge-guide")}
              className="px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase whitespace-nowrap transition-all duration-200 text-[#0B1528] bg-gradient-to-r from-[#DFCCA3] to-[#C5A059] font-semibold border border-[#C5A059] shadow-md hover:brightness-110 flex items-center gap-2"
            >
              <Compass className="w-3.5 h-3.5 text-[#0B1528]" />
              <span>Which Suits You?</span>
            </button>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          4. SERVICE 01: PAIN RELIEF (SPINE & JOINT CARE)
      ───────────────────────────────────────────────────────────── */}
      <section id="pain-relief" className="scroll-mt-36 py-20 sm:py-28 bg-[#FAF8F2] relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative group">
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#C5A059]/20 via-transparent to-[#0B1528]/10 -z-10 blur-sm group-hover:blur-md transition-all duration-500" />
                <div className="relative h-[440px] sm:h-[520px] w-full rounded-2xl overflow-hidden shadow-2xl border border-[#E8DEC8]">
                  <Image
                    src="/images/hero/therapeutic-massage.jpg"
                    alt="CROSA Pain Relief Spine and Joint Care Colombo"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060D1A]/90 via-[#060D1A]/25 to-transparent" />
                  
                  {/* Overlay Badges */}
                  <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                    <span className="px-3.5 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-widest bg-[#0B1528]/90 text-[#DFCCA3] backdrop-blur-md border border-[#C5A059]/40 shadow-md">
                      Discipline 01 // Clinical Care
                    </span>
                    <span className="px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider bg-white/15 text-white backdrop-blur-md border border-white/20">
                      Spine &amp; Joint Care
                    </span>
                  </div>

                  {/* Spec Card pinned inside image */}
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#0B1528]/85 backdrop-blur-md border border-[#C5A059]/30 text-white space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#C5A059] uppercase tracking-wider font-semibold">Specialised Areas</span>
                      <span className="text-white/80 font-light flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#C5A059]" /> 60 – 90 Minutes
                      </span>
                    </div>
                    <p className="text-xs text-[#DFE7F3] leading-relaxed">
                      Targeted clinical relief for Back Pain, Neck Pain, Shoulder Impingement, and Knee Pain.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 space-y-7">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0B1528] text-[#DFCCA3] border border-[#C5A059]/30 text-xs font-semibold uppercase tracking-widest">
                  <HeartPulse className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>TARGETED CLINICAL RELIEF</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0B1528] font-normal leading-tight">
                  Pain Relief (Spine &amp; Joint Care)
                </h2>
                <p className="text-base text-[#4C5868] leading-relaxed font-light">
                  Chronic or acute pain should never dictate your quality of life. Our targeted pain relief protocols isolate the root musculoskeletal imbalances, releasing deep spinal tension, unpinning compressed nerves, and restoring joint comfort without invasive procedures.
                </p>
              </div>

              {/* Protocol Pillars */}
              <div className="space-y-3.5">
                <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#0B1528]">
                  Clinical Intervention Focus
                </h3>

                <div className="p-4 rounded-xl bg-white border border-[#E8DEC8] hover:border-[#C5A059] transition-colors shadow-sm space-y-1">
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#0B1528] text-[#C5A059] flex items-center justify-center text-[10px] font-bold">1</span>
                    <h4 className="text-sm font-semibold text-[#0B1528]">Spine &amp; Lumbar Decompression</h4>
                  </div>
                  <p className="text-xs text-[#5E6977] pl-7 leading-relaxed">
                    Alleviates disc pressure, lumbar nerve impingement, and chronic lower back spasms caused by prolonged sedentary work.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E8DEC8] hover:border-[#C5A059] transition-colors shadow-sm space-y-1">
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#0B1528] text-[#C5A059] flex items-center justify-center text-[10px] font-bold">2</span>
                    <h4 className="text-sm font-semibold text-[#0B1528]">Cervical &amp; Shoulder Impingement Care</h4>
                  </div>
                  <p className="text-xs text-[#5E6977] pl-7 leading-relaxed">
                    Unlocks locked scapular mechanics, releases suboccipital tension headaches, and treats rotator cuff strain.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E8DEC8] hover:border-[#C5A059] transition-colors shadow-sm space-y-1">
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#0B1528] text-[#C5A059] flex items-center justify-center text-[10px] font-bold">3</span>
                    <h4 className="text-sm font-semibold text-[#0B1528]">Knee &amp; Lower Kinetic Stabilization</h4>
                  </div>
                  <p className="text-xs text-[#5E6977] pl-7 leading-relaxed">
                    Patellar tracking alignment, ligament strain relief, and soothing joint friction for effortless walking and stairs.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <a
                  href={getWhatsAppUrl("Hello CROSA, I would like to consult about Pain Relief treatment for my back/neck/shoulder/knee pain.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#0B1528] hover:bg-[#14233e] text-[#DFCCA3] hover:text-white border border-[#C5A059]/40 hover:border-[#C5A059] text-xs font-semibold uppercase tracking-wider transition-all shadow-md group"
                >
                  <WhatsAppIcon className="w-4 h-4" fill="currentColor" />
                  <span>Consult for Pain Relief</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
                </a>
                <span className="text-xs text-[#7A8699]">
                  Individual Assessment • Colombo 05
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. SERVICE 02: SPORTS MASSAGE (DARK OBSIDIAN STAGE)
      ───────────────────────────────────────────────────────────── */}
      <section id="sports-massage" className="scroll-mt-36 py-20 sm:py-28 bg-[#0B1528] text-white relative overflow-hidden">
        <AmbientGoldParticles density={28} speed={0.3} colorScheme="gold" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Content Column */}
            <div className="lg:col-span-6 space-y-7 order-2 lg:order-1">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#060D1A] text-[#DFCCA3] border border-[#C5A059]/30 text-xs font-semibold uppercase tracking-widest">
                  <Flame className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>ATHLETIC SOFT-TISSUE REMEDIATION</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-normal leading-tight">
                  Sports Massage &amp; Muscular Recovery
                </h2>
                <p className="text-base text-[#D0DBE8] leading-relaxed font-light">
                  Engineered specifically for active performers, athletes, runners, and lifters. Our sports remedial massage deactivates dense trigger points, flushes metabolic waste, restores fascial glide, and dramatically shortens downtime between intense training sessions.
                </p>
              </div>

              {/* 4 Modalities */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-4 rounded-xl bg-white/[0.04] border border-[#C5A059]/20 hover:border-[#C5A059]/50 transition-colors space-y-1.5">
                  <div className="flex items-center gap-2 text-[#DFCCA3]">
                    <Activity className="w-4 h-4 text-[#C5A059]" />
                    <h4 className="text-sm font-semibold">Myofascial Trigger Point</h4>
                  </div>
                  <p className="text-xs text-[#B2C1D4] leading-relaxed">
                    Breaks up chronic adhesions and knots across overloaded muscle bellies.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.04] border border-[#C5A059]/20 hover:border-[#C5A059]/50 transition-colors space-y-1.5">
                  <div className="flex items-center gap-2 text-[#DFCCA3]">
                    <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                    <h4 className="text-sm font-semibold">Metabolic Lymphatic Flush</h4>
                  </div>
                  <p className="text-xs text-[#B2C1D4] leading-relaxed">
                    Accelerates the removal of cellular lactic acid and post-exercise inflammation.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.04] border border-[#C5A059]/20 hover:border-[#C5A059]/50 transition-colors space-y-1.5">
                  <div className="flex items-center gap-2 text-[#DFCCA3]">
                    <Compass className="w-4 h-4 text-[#C5A059]" />
                    <h4 className="text-sm font-semibold">Fascial Elasticity Reset</h4>
                  </div>
                  <p className="text-xs text-[#B2C1D4] leading-relaxed">
                    Restores muscular length and prevents repetitive strain before competition.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.04] border border-[#C5A059]/20 hover:border-[#C5A059]/50 transition-colors space-y-1.5">
                  <div className="flex items-center gap-2 text-[#DFCCA3]">
                    <Flame className="w-4 h-4 text-[#C5A059]" />
                    <h4 className="text-sm font-semibold">Thermal Basalt Synergy</h4>
                  </div>
                  <p className="text-xs text-[#B2C1D4] leading-relaxed">
                    Volcanic heat dilates deep micro-vascular beds to soften dense hypertonic fibers.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <a
                  href={getWhatsAppUrl("Hello CROSA, I would like to book a Sports Massage recovery session.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#DFCCA3] to-[#C5A059] hover:from-[#E8DEC8] hover:to-[#DFCCA3] text-[#0B1528] text-xs font-semibold uppercase tracking-wider transition-all shadow-lg group"
                >
                  <WhatsAppIcon className="w-4 h-4" fill="#0B1528" />
                  <span>Book Sports Massage</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#0B1528] group-hover:translate-x-1 transition-transform" />
                </a>
                <span className="text-xs text-[#DFCCA3]/80">
                  Private Recovery Suite • 60 / 90 Mins
                </span>
              </div>
            </div>

            {/* Visual Column */}
            <div className="lg:col-span-6 relative order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#C5A059]/30 via-transparent to-white/5 -z-10 blur-sm group-hover:blur-md transition-all duration-500" />
                <div className="relative h-[440px] sm:h-[520px] w-full rounded-2xl overflow-hidden shadow-2xl border border-[#C5A059]/30">
                  <Image
                    src="/images/massage.jpg"
                    alt="CROSA Sports Massage and Deep Tissue Recovery Colombo"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060D1A]/90 via-[#060D1A]/20 to-transparent" />

                  <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                    <span className="px-3.5 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-widest bg-[#0B1528]/90 text-[#DFCCA3] backdrop-blur-md border border-[#C5A059]/40 shadow-md">
                      Discipline 02 // Athletic Recovery
                    </span>
                    <span className="px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider bg-white/15 text-white backdrop-blur-md border border-white/20">
                      High Performance
                    </span>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#060D1A]/90 backdrop-blur-md border border-[#C5A059]/30 text-white space-y-1.5">
                    <p className="text-xs italic text-[#DFCCA3] leading-relaxed">
                      &ldquo;Regular sports massage at CROSA has completely eliminated my chronic hamstring tight spots and cut down my race recovery time by half.&rdquo;
                    </p>
                    <p className="text-[10px] text-white/70 uppercase tracking-wider font-semibold">
                      Marathon Runner &bull; Colombo 07
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. SERVICE 03: REHABILITATION (POST INJURY REHAB)
      ───────────────────────────────────────────────────────────── */}
      <section id="rehabilitation" className="scroll-mt-36 py-20 sm:py-28 bg-[#FAF8F2] relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative group">
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#C5A059]/20 via-transparent to-[#0B1528]/10 -z-10 blur-sm group-hover:blur-md transition-all duration-500" />
                <div className="relative h-[440px] sm:h-[520px] w-full rounded-2xl overflow-hidden shadow-2xl border border-[#E8DEC8]">
                  <Image
                    src="/images/facility.jpg"
                    alt="CROSA Rehabilitation and Post Injury Rehab Center Colombo"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060D1A]/90 via-[#060D1A]/25 to-transparent" />

                  <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                    <span className="px-3.5 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-widest bg-[#0B1528]/90 text-[#DFCCA3] backdrop-blur-md border border-[#C5A059]/40 shadow-md">
                      Discipline 03 // Rehabilitation
                    </span>
                    <span className="px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider bg-white/15 text-white backdrop-blur-md border border-white/20">
                      Post Injury Rehab
                    </span>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#0B1528]/85 backdrop-blur-md border border-[#C5A059]/30 text-white space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#C5A059] uppercase tracking-wider font-semibold">Phase Progression</span>
                      <span className="text-white/80 font-light flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#C5A059]" /> Supervised Protocol
                      </span>
                    </div>
                    <p className="text-xs text-[#DFE7F3] leading-relaxed">
                      Safe progression from acute tissue protection to joint stability and confident athletic reload.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 space-y-7">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0B1528] text-[#DFCCA3] border border-[#C5A059]/30 text-xs font-semibold uppercase tracking-widest">
                  <Shield className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>STRUCTURED RECOVERY PROTOCOLS</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0B1528] font-normal leading-tight">
                  Rehabilitation &amp; Post Injury Rehab
                </h2>
                <p className="text-base text-[#4C5868] leading-relaxed font-light">
                  Whether recovering from a ligament sprain, muscle tear, chronic joint degeneration, or recent orthopedic procedure, rehabilitation must be structured and individualized. We rebuild your tissue tolerance, joint kinematics, and neurological confidence so you return to full strength.
                </p>
              </div>

              {/* 3 Pillars */}
              <div className="space-y-3.5">
                <div className="p-4 rounded-xl bg-white border border-[#E8DEC8] hover:border-[#C5A059] transition-colors shadow-sm space-y-1">
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#0B1528] text-[#C5A059] flex items-center justify-center text-[10px] font-bold">1</span>
                    <h4 className="text-sm font-semibold text-[#0B1528]">Phase 1: Protection &amp; Pain Downregulation</h4>
                  </div>
                  <p className="text-xs text-[#5E6977] pl-7 leading-relaxed">
                    Gentle manual lymphatic clearing, joint unweighting, and reducing guarding spasms without stressing the injured structure.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E8DEC8] hover:border-[#C5A059] transition-colors shadow-sm space-y-1">
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#0B1528] text-[#C5A059] flex items-center justify-center text-[10px] font-bold">2</span>
                    <h4 className="text-sm font-semibold text-[#0B1528]">Phase 2: Mobility &amp; Neuromuscular Re-Education</h4>
                  </div>
                  <p className="text-xs text-[#5E6977] pl-7 leading-relaxed">
                    Active joint mobilizations, restoring arthrokinematic glide, and retraining dormant stabilizer muscles around the joint.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E8DEC8] hover:border-[#C5A059] transition-colors shadow-sm space-y-1">
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#0B1528] text-[#C5A059] flex items-center justify-center text-[10px] font-bold">3</span>
                    <h4 className="text-sm font-semibold text-[#0B1528]">Phase 3: Progressive Kinetic Reloading</h4>
                  </div>
                  <p className="text-xs text-[#5E6977] pl-7 leading-relaxed">
                    Gradual functional loading drills and multi-planar movements that prepare you for daily tasks and athletic performance.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <a
                  href={getWhatsAppUrl("Hello CROSA, I would like to inquire about a Post Injury Rehabilitation program.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#0B1528] hover:bg-[#14233e] text-[#DFCCA3] hover:text-white border border-[#C5A059]/40 hover:border-[#C5A059] text-xs font-semibold uppercase tracking-wider transition-all shadow-md group"
                >
                  <WhatsAppIcon className="w-4 h-4" fill="currentColor" />
                  <span>Enquire for Rehabilitation</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. SERVICE 04: MOVEMENT THERAPY (BIOMECHANICS)
      ───────────────────────────────────────────────────────────── */}
      <section id="movement-therapy" className="scroll-mt-36 py-20 sm:py-28 bg-[#0B1528] text-white relative overflow-hidden">
        <AmbientGoldParticles density={24} speed={0.3} colorScheme="mixed" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Content Column */}
            <div className="lg:col-span-6 space-y-7 order-2 lg:order-1">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#060D1A] text-[#DFCCA3] border border-[#C5A059]/30 text-xs font-semibold uppercase tracking-widest">
                  <Activity className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>KINETIC RESTORATION &amp; BIOMECHANICS</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-normal leading-tight">
                  Movement Therapy
                </h2>
                <p className="text-base text-[#D0DBE8] leading-relaxed font-light">
                  Pain is frequently the result of faulty movement patterns and compensation. In our dedicated movement bays, certified movement specialists evaluate your kinetic chain to improve mobility, strengthen postural stabilizers, and restore graceful, effortless mechanics.
                </p>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-white/[0.04] border border-[#C5A059]/20 hover:border-[#C5A059]/50 transition-colors space-y-1">
                  <h4 className="text-sm font-semibold text-[#DFCCA3]">Biomechanical Kinetic Audit</h4>
                  <p className="text-xs text-[#B2C1D4] leading-relaxed">
                    Evaluates ankle dorsiflexion, pelvic tilt, thoracic extension, and scapular rhythm to identify hidden weak links.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.04] border border-[#C5A059]/20 hover:border-[#C5A059]/50 transition-colors space-y-1">
                  <h4 className="text-sm font-semibold text-[#DFCCA3]">Postural Alignment Drills</h4>
                  <p className="text-xs text-[#B2C1D4] leading-relaxed">
                    Counteracts rounded shoulders and anterior pelvic tilt caused by hours of daily desk work.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.04] border border-[#C5A059]/20 hover:border-[#C5A059]/50 transition-colors space-y-1">
                  <h4 className="text-sm font-semibold text-[#DFCCA3]">Pain-Free Functional Conditioning</h4>
                  <p className="text-xs text-[#B2C1D4] leading-relaxed">
                    Intelligent loading drills designed to build resilient strength without wearing down joint cartilage.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <a
                  href={getWhatsAppUrl("Hello CROSA, I would like to arrange a consultation for 1-on-1 Movement Therapy.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#DFCCA3] to-[#C5A059] hover:from-[#E8DEC8] hover:to-[#DFCCA3] text-[#0B1528] text-xs font-semibold uppercase tracking-wider transition-all shadow-lg group"
                >
                  <WhatsAppIcon className="w-4 h-4" fill="#0B1528" />
                  <span>Reserve Movement Therapy</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#0B1528] group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Visual Column */}
            <div className="lg:col-span-6 relative order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#C5A059]/30 via-transparent to-white/5 -z-10 blur-sm group-hover:blur-md transition-all duration-500" />
                <div className="relative h-[440px] sm:h-[520px] w-full rounded-2xl overflow-hidden shadow-2xl border border-[#C5A059]/30">
                  <Image
                    src="/images/fitness.jpg"
                    alt="CROSA Movement Therapy and Biomechanics Bay Colombo"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060D1A]/90 via-[#060D1A]/20 to-transparent" />

                  <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                    <span className="px-3.5 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-widest bg-[#0B1528]/90 text-[#DFCCA3] backdrop-blur-md border border-[#C5A059]/40 shadow-md">
                      Discipline 04 // Biomechanics
                    </span>
                    <span className="px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider bg-white/15 text-white backdrop-blur-md border border-white/20">
                      1-on-1 Studio Bay
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          8. SERVICE 05: WELLNESS & RECOVERY (HOLISTIC HEALTH)
      ───────────────────────────────────────────────────────────── */}
      <section id="wellness-recovery" className="scroll-mt-36 py-20 sm:py-28 bg-[#FAF8F2] relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative group">
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#C5A059]/20 via-transparent to-[#0B1528]/10 -z-10 blur-sm group-hover:blur-md transition-all duration-500" />
                <div className="relative h-[440px] sm:h-[520px] w-full rounded-2xl overflow-hidden shadow-2xl border border-[#E8DEC8]">
                  <Image
                    src="/images/wellness.jpg"
                    alt="CROSA Wellness and Recovery Sanctuary Colombo"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060D1A]/90 via-[#060D1A]/25 to-transparent" />

                  <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                    <span className="px-3.5 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-widest bg-[#0B1528]/90 text-[#DFCCA3] backdrop-blur-md border border-[#C5A059]/40 shadow-md">
                      Discipline 05 // Holistic Renewal
                    </span>
                    <span className="px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider bg-white/15 text-white backdrop-blur-md border border-white/20">
                      Cellular Rest
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 space-y-7">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0B1528] text-[#DFCCA3] border border-[#C5A059]/30 text-xs font-semibold uppercase tracking-widest">
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>HOLISTIC VITALITY &amp; RESTORATION</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0B1528] font-normal leading-tight">
                  Wellness &amp; Recovery
                </h2>
                <p className="text-base text-[#4C5868] leading-relaxed font-light">
                  True sustained healing requires deep cellular rest and neurological downregulation. Our Wellness &amp; Recovery therapies combine gentle assisted stretching, therapeutic heat, botanical oils, and calm acoustics to lower cortisol, stimulate healing circulation, and keep your body operating at its healthiest.
                </p>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-white border border-[#E8DEC8] hover:border-[#C5A059] transition-colors shadow-sm space-y-1">
                  <h4 className="text-sm font-semibold text-[#0B1528]">Autonomic Nervous System Downregulation</h4>
                  <p className="text-xs text-[#5E6977] leading-relaxed">
                    Gentle suboccipital alignment and guided rhythmic respiration shift your physiology from chronic fight-or-flight into deep recovery.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-[#E8DEC8] hover:border-[#C5A059] transition-colors shadow-sm space-y-1">
                  <h4 className="text-sm font-semibold text-[#0B1528]">Thermal &amp; Circulatory Stimulus</h4>
                  <p className="text-xs text-[#5E6977] leading-relaxed">
                    Penetrating warm compresses soften tight connective tissues and enhance oxygenated blood flow throughout fatigued limbs.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <a
                  href={getWhatsAppUrl("Hello CROSA, I would like to book a Wellness & Recovery session.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#0B1528] hover:bg-[#14233e] text-[#DFCCA3] hover:text-white border border-[#C5A059]/40 text-xs font-semibold uppercase tracking-wider transition-all shadow-md group"
                >
                  <WhatsAppIcon className="w-4 h-4" fill="currentColor" />
                  <span>Book Wellness &amp; Recovery</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          9. INTERACTIVE CARE SELECTOR: "WHICH DISCIPLINE SUITS YOU?"
      ───────────────────────────────────────────────────────────── */}
      <section id="concierge-guide" className="scroll-mt-36 py-20 sm:py-28 bg-[#F4EFE6] border-y border-[#E8DEC8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A059]">
              Interactive Assessment
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0B1528] font-normal">
              Find Your Ideal Care Pathway
            </h2>
            <p className="text-sm text-[#5E6977] max-w-xl mx-auto">
              Select what describes your current physical discomfort or goal to see our clinicians&apos; recommended pathway.
            </p>
          </div>

          {/* Need Selector Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {NEED_PROFILES.map((profile) => {
              const isSelected = profile.id === activeNeed;
              return (
                <button
                  key={profile.id}
                  onClick={() => setActiveNeed(profile.id)}
                  className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-200 border ${
                    isSelected
                      ? "bg-[#0B1528] text-[#DFCCA3] border-[#C5A059] shadow-md scale-105"
                      : "bg-white text-[#5E6977] border-[#E8DEC8] hover:border-[#C5A059] hover:text-[#0B1528]"
                  }`}
                >
                  {profile.label}
                </button>
              );
            })}
          </div>

          {/* Result Card */}
          <div className="p-6 sm:p-10 rounded-3xl bg-white border border-[#E8DEC8] shadow-xl space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#F0E9DA] pb-4">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#C5A059] block">
                  Recommended Protocol
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#0B1528] font-normal mt-0.5">
                  {selectedProfile.recommendation}
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#0B1528] text-[#DFCCA3] border border-[#C5A059]/40">
                {selectedProfile.badge}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
              <div className="space-y-2">
                <span className="font-semibold uppercase tracking-wider text-[#0B1528] text-xs">Presenting Issue:</span>
                <p className="text-[#5E6977] leading-relaxed">{selectedProfile.condition}</p>
              </div>
              <div className="space-y-2">
                <span className="font-semibold uppercase tracking-wider text-[#0B1528] text-xs">Anticipated Outcome:</span>
                <p className="text-[#5E6977] leading-relaxed">{selectedProfile.outcome}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#F0E9DA] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-[#5E6977]">
                <Clock className="w-4 h-4 text-[#C5A059]" />
                <span>Session Duration: <strong>{selectedProfile.duration}</strong></span>
              </div>
              <a
                href={getWhatsAppUrl(selectedProfile.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#0B1528] hover:bg-[#14233e] text-[#DFCCA3] hover:text-white border border-[#C5A059]/40 text-xs font-semibold uppercase tracking-wider transition-all"
              >
                <WhatsAppIcon className="w-4 h-4" fill="currentColor" />
                <span>Consult on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          10. FREQUENTLY ASKED QUESTIONS
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#FAF8F2] border-b border-[#E8DEC8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A059]">
              Clear Answers
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0B1528] font-normal">
              Clinical Care Questions &amp; Answers
            </h2>
            <p className="text-sm text-[#5E6977]">
              Everything you need to know about our pain relief protocols, sports massage, and rehabilitation.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#E8DEC8] bg-white overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-serif text-base sm:text-lg text-[#0B1528] font-medium">
                      {faq.q}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full bg-[#FAF8F2] border border-[#E8DEC8] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 bg-[#0B1528] text-white" : "text-[#0B1528]"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[#5E6977] leading-relaxed border-t border-[#F0E9DA] pt-4">
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
          11. FINAL APPOINTMENT CONCIERGE BANNER
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-[#060D1A] text-white text-center relative overflow-hidden">
        <AmbientGoldParticles density={25} speed={0.25} colorScheme="gold" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#C5A059]">
            Begin Your Pain-Free Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-white leading-tight">
            Schedule Your Clinical Assessment
          </h2>
          <p className="text-sm sm:text-base text-[#D0DBE8] font-light max-w-xl mx-auto leading-relaxed">
            Connect directly with our clinical care team to discuss your pain, review your symptoms, and reserve your private session in Colombo 05.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppUrl("Hello CROSA, I would like to schedule an assessment for pain relief and rehabilitation.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#DFCCA3] to-[#C5A059] text-[#0B1528] text-xs font-semibold uppercase tracking-[0.2em] shadow-xl hover:brightness-110 transition-all"
            >
              <WhatsAppIcon className="w-4 h-4" fill="#0B1528" />
              <span>Message on WhatsApp</span>
            </a>
            <a
              href={`tel:${BRAND_INFO.phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/30 hover:border-white text-white text-xs font-medium uppercase tracking-[0.2em] transition-colors"
            >
              <span>Call: {BRAND_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
