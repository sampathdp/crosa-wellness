import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, ShieldCheck } from "lucide-react";
import HomeFaq from "@/components/HomeFaq";
import HeroBgCarousel from "@/components/HeroBgCarousel";
import ExperienceShowcase from "@/components/ExperienceShowcase";
import MethodologySection from "@/components/MethodologySection";
import PrinciplesSection from "@/components/PrinciplesSection";
import WellnessJourneySection from "@/components/WellnessJourneySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AmbientGoldParticles from "@/components/AmbientGoldParticles";
import ServiceCard from "@/components/ServiceCard";
import { BRAND_INFO, SERVICES, CONDITIONS_TREATED } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/utils";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden bg-[#FAF8F2] text-[#0B1528]">

      {/* 1. HERO — LIGHT, WARM, SUNLIT SANCTUARY (FITS WINDOW WITHOUT CUTOFF) */}
      <section className="relative h-screen min-h-[580px] max-h-[100dvh] flex flex-col justify-between overflow-hidden bg-[#F4EFE6]">
        {/* Background Image Carousel with Smooth Crossfade, Transparent Scrim & Controls */}
        <HeroBgCarousel />

        {/* Hero Editorial Narrative — Positioned cleanly below floating navbar */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-28 sm:pt-32 pb-2 my-auto">
          <div className="max-w-2xl space-y-3.5 sm:space-y-4 lg:space-y-5">
            {/* Small Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#C5A059]" />
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.35em] font-semibold text-[#C5A059]">
                CROSA Pain Management &amp; Rehabilitation Center
              </p>
            </div>

            {/* Editorial Headline with Proportional Pacing */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-[3.25rem] lg:text-[3.85rem] xl:text-[4.25rem] font-light tracking-tight text-[#0B1528] leading-[1.05]">
              Move Better. <br />
              <span className="italic font-normal text-[#C5A059]">Live Pain Free.</span>
            </h1>

            {/* Short Supporting Statement */}
            <p className="text-sm sm:text-base md:text-lg text-[#5E6977] font-light leading-relaxed max-w-lg">
              Specialised care for your pain &amp; movement. Expert clinical care for Back Pain, Neck Pain, Shoulder Pain, Knee Pain, Sports Injuries &amp; Post Injury Rehab.
            </p>

            {/* Core Pillars Pill */}
            <div className="inline-flex items-center gap-2.5 py-1 px-3.5 rounded-full bg-[#0B1528]/10 border border-[#C5A059]/30 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0B1528]">
              <span>Recover</span>
              <span className="text-[#C5A059]">&bull;</span>
              <span>Rehabilitate</span>
              <span className="text-[#C5A059]">&bull;</span>
              <span>Perform</span>
            </div>

            {/* Restrained Luxury CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 pt-1 sm:pt-2">
              <a
                href={getWhatsAppUrl("Hello CROSA, I would like to consult about pain relief and rehabilitation.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#0B1528] hover:bg-[#112038] text-white border border-[#C5A059]/40 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.02]"
              >
                <span>Consult On WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#DFCCA3]" />
              </a>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#0B1528] hover:text-[#C5A059] transition-colors group"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#C5A059]" />
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator with Address */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pb-3 sm:pb-4 flex items-center justify-between text-xs text-[#8C9BB4] border-t border-[#E8DEC8]/80 pt-3 shrink-0">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            <span>283 - 287 Thimbirigasyaya Rd &bull; Colombo 00500 &bull; Tel: 074 161 4191</span>
          </div>

          <a
            href="#conditions"
            className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#5E6977] hover:text-[#0B1528] transition-colors ml-auto pr-16 sm:pr-20"
            aria-label="Scroll to conditions treated"
          >
            <span>Conditions Treated</span>
            <span className="w-6 h-[1px] bg-[#C5A059] inline-block animate-pulse" />
          </a>
        </div>
      </section>

      {/* 2. SPECIALISED CARE CONDITIONS BAR (DIRECT FROM CLINIC WINDOW) */}
      <section id="conditions" className="py-20 sm:py-24 bg-[#FAF8F2] border-b border-[#E8DEC8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B1528] text-[#DFCCA3] text-[10px] font-semibold uppercase tracking-widest">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Specialised Care For Your Pain &amp; Movement</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0B1528] font-normal tracking-tight">
              Conditions We Treat
            </h2>
            <p className="text-sm sm:text-base text-[#5E6977] font-light leading-relaxed">
              Targeted clinical interventions to eliminate pain, stabilize joints, and restore natural movement.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
            {CONDITIONS_TREATED.map((item, idx) => (
              <Link
                key={idx}
                href="/services#pain-relief"
                className="p-5 rounded-2xl bg-white border border-[#E8DEC8] hover:border-[#C5A059] hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-3 group text-center"
              >
                <div className="w-9 h-9 mx-auto rounded-full bg-[#FAF8F2] group-hover:bg-[#0B1528] text-[#0B1528] group-hover:text-[#DFCCA3] border border-[#E8DEC8] group-hover:border-[#C5A059] flex items-center justify-center transition-colors">
                  <Check className="w-4 h-4 text-[#C5A059]" />
                </div>
                <div>
                  <h3 className="font-serif text-base sm:text-lg text-[#0B1528] group-hover:text-[#C5A059] transition-colors font-medium">
                    {item.name}
                  </h3>
                  <span className="text-[10px] uppercase tracking-wider text-[#8C9BB4] font-medium block mt-1">
                    {item.category}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C5A059]">
              RECOVER &bull; REHABILITATE &bull; PERFORM
            </span>
          </div>
        </div>
      </section>

      {/* 3. INTRODUCTION — ARCHITECTURAL SANCTUARY SPREAD */}
      <section id="intro" className="relative py-28 sm:py-36 bg-[#060D1A] text-white border-y border-[#C5A059]/25 overflow-hidden">
        {/* Subtle Background Watermark */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 select-none pointer-events-none font-serif text-[15vw] leading-none text-white/[0.025] tracking-[0.2em] font-extralight uppercase">
          SANCTUARY
        </div>

        {/* Ambient Gold Floating Particles */}
        <AmbientGoldParticles density={36} speed={0.3} colorScheme="gold" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
            {/* Left: Narrative */}
            <div className="lg:col-span-6 space-y-7">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#C5A059]" />
                <p className="text-xs uppercase tracking-[0.35em] font-medium text-[#C5A059]">
                  Welcome to CROSA
                </p>
              </div>

              <div className="relative">
                <span className="absolute -top-8 -left-3 font-serif text-7xl text-[#C5A059]/20 select-none pointer-events-none leading-none">
                  &ldquo;
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl md:text-[3.25rem] font-light text-white tracking-tight leading-[1.18] relative z-10">
                  Less Pain. More Movement. Better Life.
                </h2>
              </div>

              <div className="space-y-5 text-[#C9D6E8] font-light text-base sm:text-lg leading-relaxed pt-1">
                <p>
                  Living with pain alters everything: how you sit, how you sleep, how you train, and how you think. In Colombo, many mask symptoms with temporary painkillers or endure crowded gyms that exacerbate hidden injuries.
                </p>
                <p>
                  <strong className="text-[#DFCCA3] font-normal">CROSA</strong> provides a dedicated clinical sanctuary for pain management and physical rehabilitation. Located at 283 - 287 Thimbirigasyaya Road, our clinicians unite targeted pain relief, sports massage, and structured movement therapy to guide you back to total physical freedom.
                </p>
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-[#DFCCA3] hover:text-white border border-[#C5A059]/40 text-xs uppercase tracking-[0.2em] font-medium transition-all group shadow-sm hover:border-[#C5A059]"
                >
                  <span>Our Story &amp; Ethos</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#C5A059]" />
                </Link>

                <div className="flex items-center gap-2 text-xs text-[#8C9BB4] pl-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                  <span className="tracking-wider uppercase text-[10px]">Private Treatment Suites &bull; Colombo 05</span>
                </div>
              </div>
            </div>

            {/* Right: Portal Imagery */}
            <div className="lg:col-span-6 relative">
              <div className="relative max-w-lg mx-auto lg:mr-0">
                <div className="p-1 rounded-t-[7rem] sm:rounded-t-[8rem] rounded-b-2xl bg-gradient-to-b from-[#C5A059]/40 via-[#C5A059]/10 to-transparent shadow-[0_30px_70px_rgba(0,0,0,0.6)]">
                  <div className="relative aspect-[3/4] w-full rounded-t-[6.8rem] sm:rounded-t-[7.8rem] rounded-b-xl overflow-hidden group">
                    <Image
                      src="/images/intro/practitioner.jpg"
                      alt="Attentive CROSA practitioner providing clinical pain relief treatment"
                      fill
                      quality={92}
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060D1A]/85 via-transparent to-transparent" />
                    
                    <div className="absolute bottom-5 left-5 right-5">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                        <span className="text-[10px] uppercase tracking-[0.25em] text-[#DFCCA3] font-medium block">
                          Clinical Excellence
                        </span>
                      </div>
                      <span className="font-serif text-base text-white font-light block">
                        Spine Care &amp; Joint Care
                      </span>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-20 h-20 rounded-full bg-[#0B1528] border border-[#C5A059] shadow-2xl flex flex-col items-center justify-center text-center p-2 backdrop-blur-md">
                  <span className="font-serif text-lg text-[#DFCCA3] leading-none mb-0.5 font-normal">C</span>
                  <span className="text-[7px] uppercase tracking-[0.2em] text-[#C5A059] font-medium">CLINIC</span>
                  <span className="text-[6px] uppercase tracking-widest text-[#8C9BB4]">COLOMBO</span>
                </div>
              </div>
            </div>
          </div>

          {/* Three Pillars — Recover, Rehabilitate, Perform */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 border-t border-[#1C2E50]/80">
            <div className="relative p-8 rounded-2xl bg-[#0B1528]/70 border border-[#1C2E50] hover:border-[#C5A059]/50 transition-all duration-300 group hover:-translate-y-1.5 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-[#C5A059] font-medium tracking-widest">01</span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#DFCCA3] px-2.5 py-1 rounded-full bg-white/5 border border-[#C5A059]/20 font-medium">
                  PHASE 1
                </span>
              </div>
              <h3 className="font-serif text-2xl text-white group-hover:text-[#DFCCA3] transition-colors font-normal mb-3">
                Recover
              </h3>
              <p className="text-sm text-[#8C9BB4] font-light leading-relaxed mb-5">
                Immediate pain alleviation, spinal decompression, inflammation reduction, and muscular tension release.
              </p>
              <div className="flex items-center gap-2 text-[11px] text-[#DFE7F3]/70 pt-3 border-t border-white/5">
                <span className="w-1 h-1 rounded-full bg-[#C5A059]" />
                <span>Spine &amp; Joint Decompression</span>
              </div>
            </div>

            <div className="relative p-8 rounded-2xl bg-[#0B1528]/70 border border-[#1C2E50] hover:border-[#C5A059]/50 transition-all duration-300 group hover:-translate-y-1.5 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-[#C5A059] font-medium tracking-widest">02</span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#DFCCA3] px-2.5 py-1 rounded-full bg-white/5 border border-[#C5A059]/20 font-medium">
                  PHASE 2
                </span>
              </div>
              <h3 className="font-serif text-2xl text-white group-hover:text-[#DFCCA3] transition-colors font-normal mb-3">
                Rehabilitate
              </h3>
              <p className="text-sm text-[#8C9BB4] font-light leading-relaxed mb-5">
                Evidence-based protocols to restore joint stability, tissue integrity, and healthy range of motion after injury or surgery.
              </p>
              <div className="flex items-center gap-2 text-[11px] text-[#DFE7F3]/70 pt-3 border-t border-white/5">
                <span className="w-1 h-1 rounded-full bg-[#C5A059]" />
                <span>Structured Post-Injury Care</span>
              </div>
            </div>

            <div className="relative p-8 rounded-2xl bg-[#0B1528]/70 border border-[#1C2E50] hover:border-[#C5A059]/50 transition-all duration-300 group hover:-translate-y-1.5 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-[#C5A059] font-medium tracking-widest">03</span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#DFCCA3] px-2.5 py-1 rounded-full bg-white/5 border border-[#C5A059]/20 font-medium">
                  PHASE 3
                </span>
              </div>
              <h3 className="font-serif text-2xl text-white group-hover:text-[#DFCCA3] transition-colors font-normal mb-3">
                Perform
              </h3>
              <p className="text-sm text-[#8C9BB4] font-light leading-relaxed mb-5">
                Corrective biomechanics, functional kinetic conditioning, and sports massage to keep you moving at your peak.
              </p>
              <div className="flex items-center gap-2 text-[11px] text-[#DFE7F3]/70 pt-3 border-t border-white/5">
                <span className="w-1 h-1 rounded-full bg-[#C5A059]" />
                <span>Movement Therapy &amp; Longevity</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE 5 CLINIC SERVICES SHOWCASE (FULL GRID) */}
      <section id="services-grid" className="py-24 sm:py-32 bg-[#F5EFE6] border-b border-[#E8DEC8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center justify-center gap-3">
              <span className="w-6 h-[1px] bg-[#C5A059]" />
              <p className="text-xs uppercase tracking-[0.35em] font-semibold text-[#C5A059]">
                Clinical Offerings
              </p>
              <span className="w-6 h-[1px] bg-[#C5A059]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-[#0B1528] tracking-tight leading-[1.12]">
              Our 5 Core Disciplines
            </h2>
            <p className="text-sm sm:text-base text-[#5E6977] font-light leading-relaxed max-w-lg mx-auto">
              Each discipline is delivered in private, immaculate suites by certified practitioners dedicated to clinical excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} variant="preview" />
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              href="/services"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#0B1528] hover:bg-[#14233e] text-[#DFCCA3] hover:text-white border border-[#C5A059]/40 text-xs uppercase tracking-[0.2em] font-medium transition-all shadow-md group"
            >
              <span>View In-Depth Protocols &amp; Details</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. CROSA EXPERIENCE CHAPTERS SHOWCASE */}
      <section id="experience" className="py-24 sm:py-32 bg-[#FAF8F2] border-b border-[#E8DEC8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center justify-center gap-3">
              <span className="w-6 h-[1px] bg-[#C5A059]" />
              <p className="text-xs uppercase tracking-[0.35em] font-medium text-[#C5A059]">
                The CROSA Standard
              </p>
              <span className="w-6 h-[1px] bg-[#C5A059]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-[#0B1528] tracking-tight leading-[1.12]">
              Clinical Precision. Restorative Care.
            </h2>
            <p className="text-sm sm:text-base text-[#5E6977] font-light leading-relaxed max-w-lg mx-auto">
              Explore how our pain relief protocols, sports massage, and rehabilitation work together for complete physical renewal.
            </p>
          </div>

          <ExperienceShowcase />

          {/* CLINIC LOCATION BANNER */}
          <div className="bg-[#0B1528] text-white rounded-3xl p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl border border-[#1C2E50]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#DFCCA3] block">
                  Clinic Location &bull; Colombo 05
                </span>
                <h3 className="font-serif text-3xl sm:text-5xl font-light text-white leading-tight">
                  283 - 287 Thimbirigasyaya Rd, Colombo 00500
                </h3>
                <p className="text-sm sm:text-base text-[#DFE7F3] font-light leading-relaxed max-w-xl">
                  Centrally situated with private treatment suites, dedicated parking, and peaceful surroundings for an unhurried clinical visit.
                </p>
                <div className="pt-2 text-xs text-[#DFCCA3] space-y-1">
                  <p>Monday – Saturday: 6:00 AM – 8:30 PM</p>
                  <p>Sunday: 7:00 AM – 6:00 PM</p>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-4">
                <a
                  href={getWhatsAppUrl("Hello CROSA, I would like to schedule an appointment at your clinic.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#C5A059] hover:bg-[#DFCCA3] text-[#0B1528] text-xs uppercase tracking-[0.2em] font-semibold transition-colors shadow-sm"
                >
                  <span>Schedule Appointment</span>
                  <ArrowUpRight className="w-4 h-4 text-[#0B1528]" />
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/30 hover:border-white text-white text-xs uppercase tracking-[0.2em] font-light transition-colors"
                >
                  <span>Directions &amp; Contact</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. METHODOLOGY SECTION */}
      <MethodologySection />

      {/* 7. WELLBEING PRINCIPLES */}
      <PrinciplesSection />

      {/* 8. WELLNESS JOURNEY PATHWAYS */}
      <WellnessJourneySection />

      {/* 9. TESTIMONIALS */}
      <TestimonialsSection />

      {/* 10. FAQS */}
      <section id="faq" className="py-28 sm:py-36 bg-[#FAF8F2] border-b border-[#E8DEC8] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
          <HomeFaq />
        </div>
      </section>

      {/* 11. FINAL CTA */}
      <section className="py-32 sm:py-40 bg-[#0B1528] text-white text-center relative overflow-hidden">
        <AmbientGoldParticles density={30} speed={0.35} colorScheme="gold" />

        <div className="max-w-3xl mx-auto px-6 sm:px-8 space-y-8 relative z-10">
          <p className="text-xs uppercase tracking-[0.35em] font-light text-[#DFCCA3]">
            Recover &bull; Rehabilitate &bull; Perform
          </p>

          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-white tracking-tight leading-tight">
            Ready to Live Pain Free?
          </h2>

          <p className="text-base sm:text-lg text-[#DFE7F3] font-light leading-relaxed max-w-xl mx-auto">
            Connect directly with our clinical care team to assess your symptoms, discuss your treatment plan, and begin your recovery today.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-7">
            <a
              href={getWhatsAppUrl("Hello CROSA, I would like to schedule a consultation for pain relief and rehabilitation.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full bg-[#C5A059] hover:bg-[#DFCCA3] text-[#0B1528] text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-md hover:scale-[1.02]"
            >
              <span>Consult on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4 text-[#0B1528]" />
            </a>

            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/30 hover:border-white text-white text-xs uppercase tracking-[0.2em] font-light transition-colors"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#DFCCA3]" />
            </Link>
          </div>

          <div className="pt-12 text-xs text-[#8C9BB4] flex flex-wrap items-center justify-center gap-6">
            <span>283 - 287 Thimbirigasyaya Rd, Colombo 00500</span>
            <span>&bull;</span>
            <span>Direct Concierge: {BRAND_INFO.phoneDisplay}</span>
          </div>
        </div>
      </section>

    </div>
  );
}
