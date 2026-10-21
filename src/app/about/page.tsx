import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { CONDITIONS_TREATED, CORE_PILLARS } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/utils";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export const metadata: Metadata = {
  title: "About Us | CROSA Pain Management & Rehabilitation Center",
  description:
    "Learn about CROSA — Colombo's specialised pain management and rehabilitation center. We provide clinical care for back pain, neck pain, shoulder pain, knee pain, sports injuries, and post-injury rehab.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO */}
      <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 surface-dark bg-[#060D1A] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/images/physio/rehabilitation.jpg"
            alt="About CROSA Pain Management Colombo"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060D1A] via-[#060D1A]/80 to-[#060D1A]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <p className="text-xs uppercase tracking-[0.3em] font-semibold text-accent">
            Specialised Care For Your Pain &amp; Movement
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white leading-tight">
            About CROSA
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#DFE7F3] font-light leading-relaxed">
            A premier pain management and movement rehabilitation center in Colombo dedicated to helping you live pain-free.
          </p>
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/10 border border-accent/40 text-xs uppercase tracking-[0.2em] text-accent-soft">
            <span>Recover</span>
            <span className="text-accent">&bull;</span>
            <span>Rehabilitate</span>
            <span className="text-accent">&bull;</span>
            <span>Perform</span>
          </div>
        </div>
      </section>

      {/* 2. OUR STORY */}
      <section className="py-20 sm:py-28 bg-[#FAF8F2] border-b border-line">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                eyebrow="Clinical Vision"
                title="Our Story &amp; Purpose"
                align="left"
              />

              <p className="text-base text-[#5E6977] leading-relaxed">
                CROSA was established with a singular, clear commitment: to provide specialized, non-invasive clinical care for pain and movement disorders in Colombo. Far too often, individuals suffering from debilitating back or neck strain are offered only temporary painkillers, while active athletes with sports injuries struggle to find structured rehabilitation.
              </p>

              <p className="text-sm text-[#5E6977] leading-relaxed">
                Situated at 283 - 287 Thimbirigasyaya Road, CROSA bridges the critical gap between medical pain management and active kinetic recovery. In our private, tranquil clinic suites, our certified clinicians diagnose the biomechanical root causes of your symptoms and formulate an evidence-based roadmap to recovery.
              </p>

              <div className="pt-2">
                <blockquote className="p-4 rounded-xl border-l-2 border-accent bg-ivory-deep text-sm italic text-[#0B1528]">
                  &ldquo;Less pain. More movement. Better life. We don&apos;t just alleviate symptoms; we restore your body&apos;s natural capacity to move without fear.&rdquo;
                </blockquote>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative h-[380px] sm:h-[460px] w-full rounded-2xl overflow-hidden shadow-xl border border-line">
                <Image
                  src="/images/physio/shoulder-mobility.jpg"
                  alt="CROSA male physiotherapist conducting clinical mobility examination"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CONDITIONS TREATED SHOWCASE */}
      <section className="py-20 sm:py-28 bg-ivory-deep border-b border-line">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            eyebrow="Clinical Scope"
            title="What We Specialise In"
            description="Our clinical therapies directly target the major sources of musculoskeletal and athletic pain."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CONDITIONS_TREATED.map((c, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-line shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl font-normal text-[#0B1528]">{c.name}</h3>
                  <span className="text-[10px] uppercase font-semibold tracking-wider text-accent px-2.5 py-0.5 rounded-full bg-[#FAF8F2] border border-line">
                    {c.category}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#5E6977] leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE 3 PHASES: RECOVER, REHABILITATE, PERFORM */}
      <section className="py-20 sm:py-28 surface-dark bg-[#060D1A] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              The Clinical Cycle
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white leading-tight">
              Recover &bull; Rehabilitate &bull; Perform
            </h2>
            <p className="text-sm text-[#DFE7F3] font-light leading-relaxed">
              Every client journey follows our proven 3-phase clinical protocol.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CORE_PILLARS.map((pillar) => (
              <div
                key={pillar.number}
                className="p-8 rounded-2xl surface-dark bg-[#0B1528] border border-[#1C2E50] hover:border-accent/50 transition-all space-y-4"
              >
                <span className="font-mono text-xs text-accent tracking-widest">{pillar.number}</span>
                <h3 className="font-serif text-2xl text-white font-normal">{pillar.title}</h3>
                <span className="text-xs uppercase tracking-wider text-accent-soft block">{pillar.tagline}</span>
                <p className="text-xs sm:text-sm text-[#8C9BB4] leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="text-center pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent hover:bg-accent-soft text-[#0B1528] text-xs font-semibold uppercase tracking-[0.2em] transition-all shadow-md"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href={getWhatsAppUrl("Hello CROSA, I would like to learn more about your pain management clinic.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/30 hover:border-white text-white text-xs font-medium uppercase tracking-[0.2em] transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" fill="white" />
              <span>Consult on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
