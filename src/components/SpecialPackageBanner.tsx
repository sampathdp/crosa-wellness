import React from "react";
import { Dumbbell, Stethoscope, Utensils, Sparkles } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { getWhatsAppUrl } from "@/lib/utils";

const PILLARS = [
  {
    icon: Dumbbell,
    title: "Targeted Workout Plan",
    text: "Safe, guided physical exercises to improve metabolic health and overall fitness.",
  },
  {
    icon: Utensils,
    title: "Customized Meal Plan",
    text: "Tailored dietary routines specifically structured to naturally regulate blood sugar and cholesterol.",
  },
  {
    icon: Stethoscope,
    title: "Pain Relief & Rehabilitation Therapy",
    text: "Specialized therapeutic treatments to recover from calcium deficiencies, joint stiffness, and numbness in the hands, feet, back, and neck.",
  },
];

export default function SpecialPackageBanner() {
  return (
    <section id="special-package" className="scroll-mt-24 py-12 sm:py-16 bg-[#FAF8F2]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="surface-dark relative overflow-hidden rounded-[2rem] bg-[#0B1528] text-white ring-1 ring-accent/60 shadow-[0_40px_80px_-30px_rgba(11,21,40,0.6)]">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-accent/25 blur-[120px] pointer-events-none" />
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 p-8 sm:p-12">
            <div className="lg:col-span-5 space-y-5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-[#0B1528] text-[10px] font-semibold uppercase tracking-[0.25em]">
                <Sparkles className="w-3 h-3" /> Special Treatment Package
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-light tracking-tight leading-[1.08]">
                Diabetes &amp; <span className="italic text-accent-soft">Cholesterol</span> Management
              </h2>
              <p className="text-[#D0DBE8] font-light leading-relaxed">
                A comprehensive, 3-in-1 holistic wellness program designed to help individuals effectively manage and
                significantly reduce diabetes and cholesterol levels to restore a healthy, active daily life.
              </p>
              <a
                href={getWhatsAppUrl("Hello CROSA, I would like to enquire about the Diabetes & Cholesterol Management special treatment package.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold uppercase tracking-[0.15em] transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" fill="white" />
                Enquire about this package
              </a>
            </div>
            <div className="lg:col-span-7 grid gap-4">
              {PILLARS.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div key={p.title} className="flex items-start gap-5 p-5 rounded-2xl bg-white/5 border border-white/15">
                    <span className="w-12 h-12 rounded-xl bg-white/10 text-accent-soft grid place-items-center shrink-0">
                      <Icon className="w-5 h-5" strokeWidth={1.6} />
                    </span>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl mb-1">{p.title}</h3>
                      <p className="text-sm text-[#C7D2E3] leading-relaxed">{p.text}</p>
                    </div>
                    <span className="font-serif text-3xl text-white/20">0{i + 1}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
