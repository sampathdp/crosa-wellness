"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  ClipboardList,
  Clock,
  Compass,
  HeartPulse,
  Activity,
  Shield,
  Flame,
  Sparkles,
  Wind,
  TrendingUp,
} from "lucide-react";
import AmbientGoldParticles from "@/components/AmbientGoldParticles";
import SpecialPackageBanner from "@/components/SpecialPackageBanner";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { BRAND_INFO, SERVICES } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/utils";

const SERVICE_ICONS: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  "pain-relief": HeartPulse,
  "sports-massage": Flame,
  rehabilitation: Shield,
  "movement-therapy": Activity,
  "cupping-therapy": Wind,
  "wellness-recovery": Sparkles,
};

const PROCESS = [
  {
    icon: ClipboardList,
    title: "Assess",
    text: "A hands-on anatomical and movement assessment in your first session finds the real source of the problem.",
  },
  {
    icon: Compass,
    title: "Personalise",
    text: "You get a care plan matched to your condition, your lifestyle and your goals. No generic routines.",
  },
  {
    icon: TrendingUp,
    title: "Progress",
    text: "Guided sessions rebuild strength and mobility step by step. Most chronic cases need 4 to 8 visits.",
  },
];

interface NeedProfile {
  id: string;
  label: string;
  condition: string;
  recommendation: string;
  serviceId: string;
  duration: string;
  outcome: string;
  whatsappMessage: string;
}

const NEED_PROFILES: NeedProfile[] = [
  {
    id: "back-spine",
    label: "Back & Spine",
    condition: "Persistent lower back aches, lumbar stiffness, sciatica flare-ups, or discomfort from prolonged sitting.",
    recommendation: "Pain Relief & Spine Decompression",
    serviceId: "pain-relief",
    duration: "60 – 90 min",
    outcome: "Decompressed lumbar vertebrae, released spinal spasms and restored comfortable posture.",
    whatsappMessage: "Hello CROSA, I am suffering from back and spine pain. I would like to consult for a Pain Relief session.",
  },
  {
    id: "neck-shoulder",
    label: "Neck & Shoulder",
    condition: "Desk-bound forward head posture, trapezius stiffness, rotator cuff impingement and tension headaches.",
    recommendation: "Cervical Release & Remedial Sports Massage",
    serviceId: "sports-massage",
    duration: "60 – 90 min",
    outcome: "Released trigger points, restored shoulder rotation and relief from headaches.",
    whatsappMessage: "Hello CROSA, I am experiencing chronic neck and shoulder stiffness. I would like to book a treatment session.",
  },
  {
    id: "sports-injury",
    label: "Sports & Knees",
    condition: "Athletic strains, knee discomfort, patellar tracking issues, ligament sprains or muscle tears.",
    recommendation: "Injury Rehabilitation & Joint Stabilisation",
    serviceId: "rehabilitation",
    duration: "60 – 75 min",
    outcome: "Less inflammation, faster tissue repair, stable joints and a safe return to sport.",
    whatsappMessage: "Hello CROSA, I need rehabilitation care for a sports injury / knee issue.",
  },
  {
    id: "post-surgery-rehab",
    label: "Post Surgery",
    condition: "Recovery after an orthopaedic procedure, severe strain, or long immobilisation needing supervised rehab.",
    recommendation: "Post-Injury Rehabilitation & Kinetic Reloading",
    serviceId: "rehabilitation",
    duration: "Custom phased programme",
    outcome: "Remodelled scar tissue, full range of motion restored and foundational strength rebuilt.",
    whatsappMessage: "Hello CROSA, I am inquiring about a post-injury / post-surgical rehabilitation program.",
  },
  {
    id: "mobility-correction",
    label: "Posture & Mobility",
    condition: "Poor mobility, recurring compensations, joint stiffness or general physical fatigue.",
    recommendation: "1-on-1 Movement Therapy & Alignment",
    serviceId: "movement-therapy",
    duration: "60 min",
    outcome: "Corrected movement patterns, better core stability and effortless daily movement.",
    whatsappMessage: "Hello CROSA, I would like to book a Movement Therapy assessment.",
  },
];

const FAQS = [
  {
    q: "What conditions do you specialise in treating?",
    a: "Non-invasive, evidence-led care for back pain, neck pain, shoulder pain, knee pain, sports injuries and post-injury rehabilitation, plus sports massage, movement therapy, cupping therapy and clinical recovery.",
  },
  {
    q: "Do you offer a programme for diabetes and cholesterol?",
    a: "Yes. Our Diabetes & Cholesterol Management package combines a targeted workout plan, a customised meal plan and pain relief and rehabilitation therapy for joint stiffness, calcium deficiency and numbness in the hands, feet, back and neck.",
  },
  {
    q: "Do I need a doctor's referral?",
    a: "No. Our clinicians run an in-depth anatomical and biomechanical assessment at the start of your first session and tailor care to your condition.",
  },
  {
    q: "How many sessions will I need?",
    a: "Most clients notice less pain and better mobility after the first session. Chronic conditions, severe sports injuries and post-surgical rehab usually need 4 to 8 targeted sessions.",
  },
  {
    q: "Sports Massage or Pain Relief — what's the difference?",
    a: "Pain Relief focuses on joint stabilisation, spinal decompression and nerve or joint discomfort. Sports Massage uses deep remedial techniques to flush fatigue, release dense knots and restore tissue elasticity.",
  },
  {
    q: "Are the treatment rooms private?",
    a: "Yes. CROSA runs private treatment suites and individual movement bays on Thimbirigasyaya Road, Colombo 05.",
  },
  {
    q: "How do I book?",
    a: "Message or call our concierge on WhatsApp at +94 74 161 4191. Booking 24 to 48 hours ahead secures your preferred clinician and time.",
  },
];

export default function ServicesView() {
  const [heroIdx, setHeroIdx] = useState(0);
  const [activeId, setActiveId] = useState<string>(SERVICES[0].id);
  const [activeNeed, setActiveNeed] = useState<string>(NEED_PROFILES[0].id);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Deep links such as /services#rehabilitation open that discipline.
  useEffect(() => {
    const syncFromHash = () => {
      const id = window.location.hash.replace("#", "");
      if (SERVICES.some((s) => s.id === id)) {
        setActiveId(id);
        document.getElementById("disciplines")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  const activeIndex = Math.max(
    0,
    SERVICES.findIndex((s) => s.id === activeId),
  );
  const active = SERVICES[activeIndex];
  const need = NEED_PROFILES.find((p) => p.id === activeNeed) ?? NEED_PROFILES[0];
  const needService = SERVICES.find((s) => s.id === need.serviceId);

  const openDiscipline = (id: string) => {
    setActiveId(id);
    document.getElementById("disciplines")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="flex flex-col w-full bg-[#FAF8F2] text-[#0B1528] selection:bg-accent selection:text-white">
      {/* 1. HERO */}
      <section className="relative pt-36 sm:pt-40 pb-4 bg-ivory-deep border-b border-line text-[#0B1528] overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[560px] h-[560px] rounded-full bg-[#2F4A7A]/10 blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center pb-16 sm:pb-20">
            {/* Copy */}
            <div className="lg:col-span-5 space-y-7">
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-accent" />
                <p className="text-xs uppercase tracking-[0.35em] text-accent font-semibold">Our Services</p>
              </div>
              <h1 className="font-serif text-5xl sm:text-6xl xl:text-7xl font-light tracking-tight leading-[1.02]">
                Six disciplines.
                <br />
                <span className="italic text-accent">One recovery plan.</span>
              </h1>
              <p className="text-base sm:text-lg text-[#5E6977] font-light leading-relaxed max-w-md">
                Clinical pain relief, sports massage, rehabilitation, movement therapy, cupping and recovery, all under one roof in Colombo 05.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-1">
                <a
                  href={getWhatsAppUrl("Hello CROSA, I would like to schedule an assessment for pain relief and rehabilitation.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#0B1528] hover:bg-[#112038] text-white text-xs font-semibold uppercase tracking-[0.2em] shadow-lg shadow-[#0B1528]/20 hover:-translate-y-0.5 transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4" fill="#FFFFFF" />
                  Book an assessment
                </a>
                <a
                  href="#disciplines"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 text-[#0B1528] hover:text-accent text-xs font-medium uppercase tracking-[0.2em] transition-colors"
                >
                  Explore disciplines
                  <ChevronDown className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Interactive image panels: one per discipline */}
            <div className="lg:col-span-7">
              <div className="flex gap-2.5 sm:gap-3 h-[400px] sm:h-[480px] lg:h-[540px]" onMouseLeave={() => setHeroIdx(0)}>
                {SERVICES.map((s, i) => {
                  const open = heroIdx === i;
                  return (
                    <button
                      key={s.id}
                      onMouseEnter={() => setHeroIdx(i)}
                      onFocus={() => setHeroIdx(i)}
                      onClick={() => {
                        if (open) openDiscipline(s.id);
                        else setHeroIdx(i);
                      }}
                      aria-label={`${s.title}${open ? ": view details" : ""}`}
                      style={{ flexGrow: open ? 4 : 1 }}
                      className="group relative basis-0 min-w-0 rounded-t-full rounded-b-3xl overflow-hidden text-left transition-[flex-grow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-xl shadow-[#0B1528]/15"
                    >
                      <Image
                        src={s.image}
                        alt={s.title}
                        fill
                        sizes="(min-width: 1024px) 40vw, 90vw"
                        className={`object-cover transition-transform duration-[1200ms] ${open ? "scale-105" : "scale-100"}`}
                      />
                      <div
                        className={`absolute inset-0 transition-colors duration-700 ${
                          open ? "bg-gradient-to-t from-[#060D1A]/85 via-[#060D1A]/10 to-transparent" : "bg-[#0B1528]/55"
                        }`}
                      />
                      <span className="absolute top-5 left-0 right-0 text-center font-mono text-[10px] tracking-[0.25em] text-white/80">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                        {open ? (
                          <div className="space-y-2">
                            <p className="font-serif text-xl sm:text-2xl text-white leading-tight">{s.title}</p>
                            <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/80">
                              View details <ArrowRight className="w-3 h-3" />
                            </span>
                          </div>
                        ) : (
                          <p className="font-serif text-base text-white/90 [writing-mode:vertical-rl] rotate-180 mx-auto whitespace-nowrap">
                            {s.title}
                          </p>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SpecialPackageBanner />

      {/* 2. DISCIPLINE EXPLORER */}
      <section id="disciplines" className="scroll-mt-24 py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Selector */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28 space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-px bg-accent" />
                    <p className="text-xs uppercase tracking-[0.3em] font-semibold text-accent">Core Disciplines</p>
                  </div>
                  <h2 className="font-serif text-4xl sm:text-5xl font-light tracking-tight leading-[1.08]">
                    Choose your <span className="italic text-accent">care</span>
                  </h2>
                </div>

                <div className="flex lg:flex-col gap-2 overflow-x-auto no-scrollbar -mx-6 px-6 lg:mx-0 lg:px-0 pb-1">
                  {SERVICES.map((s, i) => {
                    const Icon = SERVICE_ICONS[s.id] ?? HeartPulse;
                    const isActive = s.id === activeId;
                    return (
                      <button
                        key={s.id}
                        onClick={() => setActiveId(s.id)}
                        aria-pressed={isActive}
                        className={`group shrink-0 flex items-center gap-4 text-left px-4 py-3.5 rounded-2xl border transition-all duration-300 ${
                          isActive
                            ? "surface-dark bg-[#0B1528] border-[#0B1528] text-white shadow-[0_20px_40px_-18px_rgba(11,21,40,0.6)]"
                            : "bg-white border-line text-[#0B1528] hover:border-accent/50 hover:bg-white"
                        }`}
                      >
                        <span
                          className={`w-10 h-10 rounded-xl grid place-items-center shrink-0 transition-colors ${
                            isActive ? "bg-white/10 text-accent-soft" : "bg-[#FAF8F2] text-accent"
                          }`}
                        >
                          <Icon className="w-[18px] h-[18px]" strokeWidth={1.6} />
                        </span>
                        <span className="flex-1 whitespace-nowrap lg:whitespace-normal">
                          <span className={`block text-[10px] tracking-[0.25em] font-semibold ${isActive ? "text-accent" : "text-[#8C9BB4]"}`}>
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="block font-serif text-lg leading-tight">{s.title}</span>
                        </span>
                        <ArrowRight
                          className={`hidden lg:block w-4 h-4 transition-all ${
                            isActive ? "opacity-100 translate-x-0 text-accent" : "opacity-0 -translate-x-2"
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Detail panel */}
            <div className="lg:col-span-8">
              <article
                key={active.id}
                id={active.id}
                className="rounded-[2rem] overflow-hidden bg-white border border-line shadow-[0_40px_80px_-40px_rgba(11,21,40,0.35)] animate-[fadeUp_0.5s_ease-out]"
              >
                <div className="relative h-72 sm:h-96 surface-dark bg-[#0B1528]">
                  <Image
                    src={active.image}
                    alt={`${active.title} at CROSA Colombo`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060D1A] via-[#060D1A]/40 to-transparent" />
                  <span className="absolute top-6 right-8 font-serif text-7xl font-light text-white/25 leading-none select-none">
                    {String(activeIndex + 1).padStart(2, "0")}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] uppercase tracking-[0.22em] font-semibold text-accent-soft">
                      {active.badge}
                    </span>
                    <h3 className="font-serif text-4xl sm:text-5xl text-white font-light mt-3">{active.title}</h3>
                  </div>
                </div>

                <div className="p-7 sm:p-10 space-y-8">
                  <p className="text-base sm:text-lg text-[#4C5868] font-light leading-relaxed">
                    {active.fullDescription ?? active.shortDescription}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                    {active.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm text-[#3B4755] leading-snug">
                        <span className="mt-0.5 w-5 h-5 rounded-full bg-accent text-white grid place-items-center shrink-0">
                          <Check className="w-3 h-3" strokeWidth={3} />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6 border-t border-line flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <a
                      href={getWhatsAppUrl(active.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold uppercase tracking-[0.15em] shadow-md transition-colors"
                    >
                      <WhatsAppIcon className="w-4 h-4" fill="white" />
                      Enquire about {active.title}
                    </a>
                    <button
                      onClick={() => setActiveId(SERVICES[(activeIndex + 1) % SERVICES.length].id)}
                      className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.18em] font-medium text-[#0B1528] hover:text-accent transition-colors"
                    >
                      Next: {SERVICES[(activeIndex + 1) % SERVICES.length].title}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROCESS */}
      <section className="py-20 sm:py-24 bg-ivory-deep border-y border-line">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-12">
          <div className="max-w-xl space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-accent" />
              <p className="text-xs uppercase tracking-[0.3em] font-semibold text-accent">How it works</p>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-light tracking-tight leading-[1.08]">
              From first visit to <span className="italic text-accent">full movement</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative">
            {PROCESS.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="relative p-8 rounded-3xl bg-white border border-line overflow-hidden">
                  <span className="absolute -top-3 right-5 font-serif text-8xl font-light text-[#0B1528]/[0.05] select-none leading-none">
                    {i + 1}
                  </span>
                  <span className="w-12 h-12 rounded-2xl surface-dark bg-[#0B1528] text-accent-soft grid place-items-center mb-6">
                    <Icon className="w-5 h-5" />
                  </span>
                  <h3 className="font-serif text-2xl mb-2">{step.title}</h3>
                  <p className="text-sm text-[#5E6977] leading-relaxed">{step.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. PATHWAY FINDER */}
      <section id="concierge-guide" className="scroll-mt-24 py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="rounded-[2rem] surface-dark bg-[#0B1528] text-white overflow-hidden relative">
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#2F4A7A]/40 blur-[120px] pointer-events-none" />
            <div className="relative grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-5 p-8 sm:p-12 space-y-6 lg:border-r border-white/10">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-px bg-accent" />
                  <p className="text-xs uppercase tracking-[0.3em] font-semibold text-accent">Find your pathway</p>
                </div>
                <h2 className="font-serif text-4xl sm:text-5xl font-light tracking-tight leading-[1.08]">
                  Where does it <span className="italic text-accent-soft">hurt?</span>
                </h2>
                <div className="flex flex-wrap gap-2">
                  {NEED_PROFILES.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setActiveNeed(p.id)}
                      aria-pressed={p.id === activeNeed}
                      className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium border transition-all ${
                        p.id === activeNeed
                          ? "bg-accent-soft text-[#0B1528] border-accent-soft"
                          : "border-white/20 text-white/80 hover:border-white/60"
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              <div key={need.id} className="lg:col-span-7 p-8 sm:p-12 space-y-6 animate-[fadeUp_0.4s_ease-out]">
                <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-semibold">Recommended</span>
                <h3 className="font-serif text-3xl sm:text-4xl font-light leading-tight">{need.recommendation}</h3>
                <div className="grid sm:grid-cols-2 gap-6 text-sm text-[#C7D2E3] leading-relaxed">
                  <p>
                    <span className="block text-[10px] uppercase tracking-[0.25em] text-accent mb-1.5">If you have</span>
                    {need.condition}
                  </p>
                  <p>
                    <span className="block text-[10px] uppercase tracking-[0.25em] text-accent mb-1.5">Expect</span>
                    {need.outcome}
                  </p>
                </div>
                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <span className="flex items-center gap-2 text-xs text-white/70">
                    <Clock className="w-4 h-4 text-accent" />
                    {need.duration}
                  </span>
                  <div className="flex flex-wrap items-center gap-3">
                    {needService && (
                      <button
                        onClick={() => openDiscipline(needService.id)}
                        className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] text-accent-soft hover:text-white transition-colors"
                      >
                        View {needService.title}
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                    <a
                      href={getWhatsAppUrl(need.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold uppercase tracking-[0.15em] transition-colors"
                    >
                      <WhatsAppIcon className="w-4 h-4" fill="white" />
                      Consult now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="py-20 sm:py-24 bg-ivory-deep border-y border-line">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-accent" />
              <p className="text-xs uppercase tracking-[0.3em] font-semibold text-accent">Questions</p>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-light tracking-tight leading-[1.08]">
              Good to <span className="italic text-accent">know</span>
            </h2>
          </div>
          <div className="lg:col-span-8 divide-y divide-line border-y border-line">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={faq.q}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full py-5 text-left flex items-center justify-between gap-4"
                  >
                    <span className="font-serif text-lg sm:text-xl">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 text-accent transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isOpen && <p className="pb-6 pr-10 text-sm sm:text-base text-[#5E6977] font-light leading-relaxed">{faq.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-20 sm:py-24 surface-dark bg-[#060D1A] text-white text-center relative overflow-hidden">
        <AmbientGoldParticles density={22} speed={0.25} colorScheme="gold" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 space-y-6">
          <h2 className="font-serif text-4xl sm:text-6xl font-light leading-tight">
            Ready to <span className="italic text-accent-soft">move better?</span>
          </h2>
          <p className="text-[#D0DBE8] font-light max-w-xl mx-auto leading-relaxed">
            Talk to our clinical team, describe your pain and reserve a private session in Colombo 05.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppUrl("Hello CROSA, I would like to schedule an assessment for pain relief and rehabilitation.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-accent-soft to-accent text-[#0B1528] text-xs font-semibold uppercase tracking-[0.2em] shadow-xl hover:brightness-110 transition-all"
            >
              <WhatsAppIcon className="w-4 h-4" fill="#0B1528" />
              Message on WhatsApp
            </a>
            <a
              href={`tel:${BRAND_INFO.phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/30 hover:border-white text-white text-xs font-medium uppercase tracking-[0.2em] transition-colors"
            >
              Call {BRAND_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
