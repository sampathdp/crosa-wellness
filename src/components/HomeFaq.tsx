"use client";

import React, { useState } from "react";
import { Plus, Minus, ArrowUpRight, Phone } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";
import WhatsAppIcon from "./WhatsAppIcon";

interface FaqItem {
  id: string;
  category: "all" | "pain" | "sports" | "clinic";
  categoryLabel: string;
  question: string;
  answer: string;
  highlight: string;
}

const FAQS: FaqItem[] = [
  {
    id: "01",
    category: "pain",
    categoryLabel: "Pain Relief",
    question: "What specific conditions do you treat at CROSA?",
    answer:
      "Our clinic specialises in non-invasive, evidence-led clinical care for Back Pain, Neck Pain, Shoulder Pain, Knee Pain, Sports Injuries, and Post-Injury Rehabilitation. We also offer Sports Massage, Movement Therapy, and restorative Wellness & Recovery.",
    highlight: "Specialised in Back, Neck, Shoulder, Knee & Sports Injuries",
  },
  {
    id: "02",
    category: "sports",
    categoryLabel: "Sports Massage",
    question: "How does Sports Massage differ from conventional relaxation massage?",
    answer:
      "Conventional massage focuses primarily on superficial pampering. At CROSA, our Sports Massage is a clinical remedial discipline: certified therapists assess muscular restriction, deactivating dense trigger points, flushing cellular lactic acid, and restoring fascial glide so athletes and active performers recover faster.",
    highlight: "Remedial myofascial release & athletic performance priming",
  },
  {
    id: "03",
    category: "pain",
    categoryLabel: "Rehabilitation",
    question: "Do I need a doctor's referral to begin pain relief or rehabilitation?",
    answer:
      "No doctor's referral is necessary. At the start of your first appointment, our senior clinicians conduct a comprehensive anatomical screening and movement assessment to pinpoint the root causes of your pain and construct your personalized recovery plan.",
    highlight: "Comprehensive anatomical assessment on first visit",
  },
  {
    id: "04",
    category: "sports",
    categoryLabel: "Movement Therapy",
    question: "How does Movement Therapy help prevent recurring injuries?",
    answer:
      "Pain often recurs because the body develops faulty movement compensations. Our 1-on-1 Movement Therapy retrains your kinetic chain, strengthening stabilizing muscles, correcting postural asymmetries, and restoring pain-free biomechanics for long-term health.",
    highlight: "Corrective biomechanics & long-term kinetic resilience",
  },
  {
    id: "05",
    category: "clinic",
    categoryLabel: "Privacy & Environment",
    question: "Are the treatment rooms strictly private?",
    answer:
      "Yes, without exception. CROSA operates strictly with private, sound-insulated treatment suites and individual movement bays on Thimbirigasyaya Road in Colombo 05, ensuring complete privacy, personal dignity, and zero crowds during your visit.",
    highlight: "100% private treatment suites & individual bays",
  },
  {
    id: "06",
    category: "clinic",
    categoryLabel: "Location & Booking",
    question: "Where is the clinic located and how do I schedule an appointment?",
    answer:
      "We are located at 283 - 287 Thimbirigasyaya Road, Colombo 00500 with dedicated on-site parking. You can easily schedule an appointment by contacting our clinic concierge directly on WhatsApp or calling 074 161 4191.",
    highlight: "Prime Colombo 05 location with dedicated parking • 074 161 4191",
  },
];

const CATEGORIES = [
  { id: "all", label: "All Questions" },
  { id: "pain", label: "Pain Relief & Rehab" },
  { id: "sports", label: "Sports Massage & Movement" },
  { id: "clinic", label: "Clinic & Booking" },
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
    <div className="space-y-20 sm:space-y-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">
        {/* Left: title + category index */}
        <div className="lg:col-span-4 space-y-10 lg:sticky lg:top-32">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-accent" />
              <p className="text-xs uppercase tracking-[0.35em] font-semibold text-accent">FAQ</p>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#0B1528] tracking-tight leading-[1.08]">
              Questions, <span className="italic text-accent">answered.</span>
            </h2>
            <p className="text-base text-[#5E6977] font-light leading-relaxed">
              Everything you need to know before your first visit.
            </p>
          </div>

          <div className="flex lg:flex-col gap-2 overflow-x-auto no-scrollbar -mx-6 px-6 lg:mx-0 lg:px-0">
            {CATEGORIES.map((cat) => {
              const active = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`group shrink-0 flex items-center gap-3 text-left text-sm py-1.5 transition-colors ${
                    active ? "text-[#0B1528] font-medium" : "text-[#8C9BB4] hover:text-[#0B1528]"
                  }`}
                >
                  <span className={`h-px transition-all duration-500 ${active ? "w-8 bg-accent" : "w-3 bg-current"}`} />
                  <span className="whitespace-nowrap">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: open accordion */}
        <div className="lg:col-span-8 border-t border-line">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="border-b border-line">
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  className="group w-full text-left py-6 sm:py-7 flex items-center justify-between gap-6 focus:outline-none"
                >
                  <h3
                    className={`font-serif text-xl sm:text-2xl leading-snug transition-colors duration-300 ${
                      isOpen ? "text-[#0B1528]" : "text-[#0B1528]/70 group-hover:text-[#0B1528]"
                    }`}
                  >
                    {faq.question}
                  </h3>
                  <span
                    className={`relative w-10 h-10 rounded-full border shrink-0 flex items-center justify-center transition-all duration-500 ${
                      isOpen
                        ? "surface-dark bg-[#0B1528] border-[#0B1528] text-white rotate-180"
                        : "border-line text-[#0B1528] group-hover:border-[#0B1528]"
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-500 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-7 pr-14 text-base text-[#5E6977] font-light leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Still have questions */}
      <div className="surface-dark relative overflow-hidden rounded-[2rem] bg-[#0B1528] text-white px-8 sm:px-14 py-10 sm:py-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        <div className="absolute -top-20 -right-10 w-80 h-80 rounded-full bg-[#2F4A7A]/40 blur-[90px] pointer-events-none" />
        <div className="relative space-y-2">
          <h4 className="font-serif text-3xl sm:text-4xl font-light">Still have a question?</h4>
          <p className="text-sm text-white/60 font-light">Mon – Sat 6:00 AM – 8:30 PM &middot; Sun 7:00 AM – 6:00 PM</p>
        </div>
        <div className="relative flex flex-col sm:flex-row gap-3">
          <a
            href={getWhatsAppUrl("Hello CROSA, I have a question regarding your sanctuary services.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#FAF8F2] hover:bg-white text-[#0B1528] text-xs uppercase tracking-[0.18em] font-semibold transition-all hover:-translate-y-0.5"
          >
            <WhatsAppIcon className="w-4 h-4" fill="#0B1528" />
            <span>WhatsApp us</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <a
            href="tel:0741614191"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/30 hover:border-white hover:bg-white/10 text-white text-xs uppercase tracking-[0.18em] font-medium transition-all"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>074 161 4191</span>
          </a>
        </div>
      </div>
    </div>
  );
}
