"use client";

import React, { useState } from "react";
import { Plus, Minus, ArrowUpRight, Phone, Clock, MapPin, Sparkles, ShieldCheck } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";
import WhatsAppIcon from "./WhatsAppIcon";

interface FaqItem {
  id: string;
  category: "all" | "therapy" | "movement" | "sanctuary";
  categoryLabel: string;
  question: string;
  answer: string;
  highlight: string;
}

const FAQS: FaqItem[] = [
  {
    id: "01",
    category: "sanctuary",
    categoryLabel: "Booking & Intake",
    question: "How do I arrange my initial consultation or visit?",
    answer:
      "Arranging your first visit is effortless. Connect with our sanctuary concierge via WhatsApp or phone at 074 161 4191. We will review your current physical state, recovery priorities, or fitness goals and reserve your private suite with your dedicated practitioner.",
    highlight: "Effortless WhatsApp reservation with tailored intake",
  },
  {
    id: "02",
    category: "therapy",
    categoryLabel: "Therapeutic Bodywork",
    question: "How does therapeutic massage differ from conventional spa treatments?",
    answer:
      "While general spa treatments focus on superficial pampering, CROSA's therapeutic massage is an anatomical bodywork discipline. Certified practitioners assess musculoskeletal restriction, applying heated basalt stones and myofascial manipulation to decompress dense muscle fibers, relieve sciatica or trapezius strain, and restore functional posture.",
    highlight: "Clinical myofascial release & volcanic basalt stones",
  },
  {
    id: "03",
    category: "movement",
    categoryLabel: "1-on-1 Movement",
    question: "Do I need previous fitness conditioning before beginning training?",
    answer:
      "No prior experience is necessary. Every movement plan begins with an unhurried biomechanical assessment of your mobility, joint mechanics, and posture. Coaching is strictly one-on-one, paced to respect your physiology while guiding you toward lasting, pain-free vitality.",
    highlight: "Biomechanical screening & 100% personalized progression",
  },
  {
    id: "04",
    category: "therapy",
    categoryLabel: "Dual Discipline",
    question: "Can fitness conditioning and restorative therapy be combined?",
    answer:
      "Yes—this integrated synergy is the core philosophy of CROSA. Many clients pair focused functional movement sessions with therapeutic massage treatments across the week to ensure the muscular system repairs deeply and recovers without cumulative tension.",
    highlight: "Synergistic recovery uniting kinetic output with cellular rest",
  },
  {
    id: "05",
    category: "sanctuary",
    categoryLabel: "Privacy & Space",
    question: "Are the treatment and coaching spaces completely private?",
    answer:
      "Yes. CROSA was explicitly designed to reject crowded commercial gyms and communal spa waiting rooms. Every massage and personal training session takes place in private, acoustic-insulated suites overlooking our tranquil bamboo courtyard, ensuring complete discretion and peace.",
    highlight: "100% private suites • Zero crowds • Total discretion",
  },
  {
    id: "06",
    category: "sanctuary",
    categoryLabel: "Location & Access",
    question: "Where is the sanctuary located and what are the visiting hours?",
    answer:
      "CROSA is centrally situated at 283 - 287 Thimbirigasyaya Road, Colombo 00500. We welcome clients Monday through Saturday from 6:00 AM to 8:30 PM, and Sundays from 7:00 AM to 6:00 PM with convenient dedicated private parking on-site.",
    highlight: "Prime Colombo 05 location with dedicated private parking",
  },
];

const CATEGORIES = [
  { id: "all", label: "All Questions" },
  { id: "therapy", label: "Therapeutic Massage" },
  { id: "movement", label: "1-on-1 Movement" },
  { id: "sanctuary", label: "Sanctuary & Booking" },
];

export default function HomeFaq() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [openId, setOpenId] = useState<string | null>("01");

  const filteredFaqs =
    activeCategory === "all"
      ? FAQS
      : FAQS.filter((f) => f.category === activeCategory);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
      
      {/* Left Column: Editorial Concierge Card */}
      <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#C5A059]" />
            <p className="text-xs uppercase tracking-[0.35em] font-medium text-[#C5A059]">
              Questions & Clarity
            </p>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#0B1528] tracking-tight leading-[1.12]">
            Clarity for your wellness journey.
          </h2>

          <p className="text-sm sm:text-base text-[#5E6977] font-light leading-relaxed">
            Everything you need to know about our private treatment suites, clinical bodywork, and bespoke movement coaching in Colombo.
          </p>
        </div>

        {/* Dedicated Sanctuary Concierge Card */}
        <div className="p-7 rounded-3xl bg-[#0B1528] text-white border border-[#1C2E50] shadow-xl space-y-6 relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#C5A059]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-ping" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#DFCCA3] font-mono">
                Sanctuary Concierge
              </span>
            </div>
            <span className="text-[10px] uppercase tracking-wider text-[#8C9BB4] px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
              Colombo 05
            </span>
          </div>

          <div className="space-y-2">
            <h4 className="font-serif text-xl sm:text-2xl text-white font-normal">
              Have a Specific Physical Question?
            </h4>
            <p className="text-xs text-[#C9D6E8] font-light leading-relaxed">
              Our clinical director is available to discuss specific spinal conditions, recovery needs, or customized dual-discipline scheduling.
            </p>
          </div>

          {/* Quick Details */}
          <div className="space-y-3 pt-2 border-t border-white/10 text-xs text-[#8C9BB4] font-light">
            <div className="flex items-center gap-3">
              <Clock className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
              <span>Mon – Sat: 6:00 AM – 8:30 PM • Sun: 7:00 AM – 6:00 PM</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
              <span>283 - 287 Thimbirigasyaya Rd, Colombo 00500</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="pt-2 space-y-3">
            <a
              href={getWhatsAppUrl("Hello CROSA, I have a question regarding your sanctuary services.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#C5A059] hover:bg-[#DFCCA3] text-[#060D1A] text-xs uppercase tracking-[0.18em] font-semibold transition-all shadow-md hover:scale-[1.02]"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" fill="#060D1A" />
              <span>Direct WhatsApp Guidance</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#060D1A]" />
            </a>

            <a
              href="tel:0741614191"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-[#DFCCA3] hover:text-white border border-[#C5A059]/30 text-xs uppercase tracking-[0.18em] font-light transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Call 074 161 4191</span>
            </a>
          </div>
        </div>
      </div>

      {/* Right Column: Category Tabs & Sculptural Accordion Cards */}
      <div className="lg:col-span-7 space-y-6">
        
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 pb-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-[0.15em] font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-[#0B1528] text-white border border-[#C5A059] shadow-sm"
                  : "bg-white hover:bg-[#FAF8F2] text-[#5E6977] hover:text-[#0B1528] border border-[#E8DEC8]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion Cards */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                  isOpen
                    ? "bg-white border-[#C5A059] shadow-lg ring-1 ring-[#C5A059]/30"
                    : "bg-white/75 hover:bg-white border-[#E8DEC8] hover:border-[#C5A059]/40 shadow-sm"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 focus:outline-none group"
                >
                  <div className="flex items-start gap-4 sm:gap-5 flex-1">
                    <span className="font-mono text-xs text-[#C5A059] font-medium tracking-widest pt-1">
                      {faq.id}
                    </span>

                    <div className="space-y-1 flex-1">
                      <span className="text-[10px] uppercase tracking-widest text-[#8C9BB4] font-mono block">
                        {faq.categoryLabel}
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl text-[#0B1528] font-normal group-hover:text-[#C5A059] transition-colors leading-snug">
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 mt-1 border ${
                      isOpen
                        ? "bg-[#0B1528] text-[#DFCCA3] border-[#C5A059]"
                        : "bg-[#F5EFE6] text-[#0B1528] border-[#E8DEC8] group-hover:border-[#C5A059]"
                    }`}
                  >
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-0 border-t border-[#E8DEC8]/60 space-y-4 animate-in fade-in duration-300">
                    <p className="text-sm sm:text-base text-[#5E6977] font-light leading-relaxed pt-4">
                      {faq.answer}
                    </p>

                    <div className="flex items-center gap-2 p-3 rounded-xl bg-[#FAF8F2] border border-[#E8DEC8] text-xs text-[#0B1528]">
                      <Sparkles className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                      <span className="font-medium text-[#C5A059]">Key Tenet:</span>
                      <span className="text-[#5E6977]">{faq.highlight}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
}
