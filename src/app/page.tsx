import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChevronDown, Clock, MapPin } from "lucide-react";
import HomeFaq from "@/components/HomeFaq";
import HeroBgCarousel from "@/components/HeroBgCarousel";
import ExperienceShowcase from "@/components/ExperienceShowcase";
import MethodologySection from "@/components/MethodologySection";
import PrinciplesSection from "@/components/PrinciplesSection";
import WellnessJourneySection from "@/components/WellnessJourneySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AmbientGoldParticles from "@/components/AmbientGoldParticles";
import { BRAND_INFO, SERVICES } from "@/lib/constants";
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
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.35em] font-medium text-[#C5A059]">
                The CROSA Experience
              </p>
            </div>

            {/* Editorial Headline with Proportional Pacing */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-[3.25rem] lg:text-[3.85rem] xl:text-[4.25rem] font-light tracking-tight text-[#0B1528] leading-[1.05]">
              Move Better. <br />
              <span className="italic font-normal text-[#C5A059]">Feel Better.</span> <br />
              Live Better.
            </h1>

            {/* Short Supporting Statement */}
            <p className="text-sm sm:text-base md:text-lg text-[#5E6977] font-light leading-relaxed max-w-lg">
              A thoughtful approach to movement, wellbeing and a healthier life in the heart of Colombo.
            </p>

            {/* Restrained Luxury CTAs — Deep Navy & Ivory Gold Text Link */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 pt-1 sm:pt-2">
              <a
                href={getWhatsAppUrl("Hello CROSA, I would like to begin my wellness journey.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#0B1528] hover:bg-[#112038] text-white border border-[#C5A059]/40 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.02]"
              >
                <span>Begin Your Journey</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#DFCCA3]" />
              </a>

              <Link
                href="/#experience"
                className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#0B1528] hover:text-[#C5A059] transition-colors group"
              >
                <span>Explore CROSA</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#C5A059]" />
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator with Tiny Animated Line — Always visible within viewport */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pb-3 sm:pb-4 flex items-center justify-between text-xs text-[#8C9BB4] border-t border-[#E8DEC8]/80 pt-3 shrink-0">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            <span>283 - 287 Thimbirigasyaya Rd &bull; Colombo 00500</span>
          </div>

          <a
            href="#intro"
            className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#5E6977] hover:text-[#0B1528] transition-colors ml-auto pr-16 sm:pr-20"
            aria-label="Scroll to introduction"
          >
            <span>Scroll to Explore</span>
            <span className="w-6 h-[1px] bg-[#C5A059] inline-block animate-pulse" />
          </a>
        </div>
      </section>

      {/* 2. INTRODUCTION — SCULPTURAL ARCHITECTURAL SANCTUARY SPREAD */}
      <section id="intro" className="relative py-28 sm:py-36 bg-[#060D1A] text-white border-y border-[#C5A059]/25 overflow-hidden">
        {/* Colossal Subtle Background Watermark */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 select-none pointer-events-none font-serif text-[15vw] leading-none text-white/[0.025] tracking-[0.2em] font-extralight uppercase">
          SANCTUARY
        </div>

        {/* Subtle Ambient Radial Gold Glow */}
        <div className="absolute top-0 right-1/4 w-[650px] h-[650px] bg-[radial-gradient(circle,rgba(197,160,89,0.08)_0%,transparent_70%)] pointer-events-none blur-3xl" />
        <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(11,21,40,0.9)_0%,transparent_70%)] pointer-events-none blur-3xl" />

        {/* Ambient Gold Floating Particles */}
        <AmbientGoldParticles density={36} speed={0.3} colorScheme="gold" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Top Editorial Row: Quote & Narrative + Sculptural Arched Imagery */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
            {/* Left: Eyebrow + Large Serif Statement + Narrative */}
            <div className="lg:col-span-6 space-y-7">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#C5A059]" />
                <p className="text-xs uppercase tracking-[0.35em] font-medium text-[#C5A059]">
                  Welcome to CROSA
                </p>
              </div>

              {/* Decorative Quotation Mark */}
              <div className="relative">
                <span className="absolute -top-8 -left-3 font-serif text-7xl text-[#C5A059]/20 select-none pointer-events-none leading-none">
                  &ldquo;
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl md:text-[3.25rem] font-light text-white tracking-tight leading-[1.18] relative z-10">
                  Wellness is not simply something you do. It is how you return to yourself.
                </h2>
              </div>

              <div className="space-y-5 text-[#C9D6E8] font-light text-base sm:text-lg leading-relaxed pt-1">
                <p>
                  In Colombo&apos;s fast-paced tempo, physical fitness is frequently isolated from restorative recovery. Many push their bodies through exhaustive training without muscular release, or visit spas that provide only temporary relaxation without correcting functional imbalances.
                </p>
                <p>
                  <strong className="text-[#DFCCA3] font-normal">CROSA</strong> unites these two essential practices. Located on Thimbirigasyaya Road, our sanctuary combines purposeful 1-on-1 movement coaching with anatomical therapeutic massage. Here, your body is guided with quiet luxury, biological respect, and bespoke care.
                </p>
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-[#DFCCA3] hover:text-white border border-[#C5A059]/40 text-xs uppercase tracking-[0.2em] font-medium transition-all group shadow-sm hover:border-[#C5A059] hover:shadow-[0_0_20px_rgba(197,160,89,0.15)]"
                >
                  <span>Our Story & Ethos</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#C5A059]" />
                </Link>

                <div className="flex items-center gap-2 text-xs text-[#8C9BB4] pl-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                  <span className="tracking-wider uppercase text-[10px]">Private Sanctuary • Colombo 05</span>
                </div>
              </div>
            </div>

            {/* Right: Sculptural Arched Portal & Floating Medallion Imagery */}
            <div className="lg:col-span-6 relative">
              <div className="relative max-w-lg mx-auto lg:mr-0">
                {/* Primary Roman Arch Sanctuary Portal */}
                <div className="p-1 rounded-t-[7rem] sm:rounded-t-[8rem] rounded-b-2xl bg-gradient-to-b from-[#C5A059]/40 via-[#C5A059]/10 to-transparent shadow-[0_30px_70px_rgba(0,0,0,0.6)]">
                  <div className="relative aspect-[3/4] w-full rounded-t-[6.8rem] sm:rounded-t-[7.8rem] rounded-b-xl overflow-hidden group">
                    <Image
                      src="/images/intro/practitioner.jpg"
                      alt="Attentive CROSA practitioner preparing herbal compresses and basalt stones"
                      fill
                      quality={92}
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060D1A]/85 via-transparent to-transparent" />
                    
                    {/* Caption Overlay */}
                    <div className="absolute bottom-5 left-5 right-5">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                        <span className="text-[10px] uppercase tracking-[0.25em] text-[#DFCCA3] font-medium block">
                          Bespoke Release
                        </span>
                      </div>
                      <span className="font-serif text-base text-white font-light block">
                        Herbal Compresses & Basalt Stones
                      </span>
                    </div>
                  </div>
                </div>

                {/* Secondary Offset Studio Card with Gold Border */}
                <div className="absolute -bottom-8 -left-6 sm:-left-10 w-48 sm:w-56 rounded-2xl overflow-hidden border border-[#C5A059]/40 shadow-[0_25px_50px_rgba(0,0,0,0.6)] bg-[#0B1528] group">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src="/images/intro/movement-coaching.jpg"
                      alt="Private 1-on-1 movement and mobility training at CROSA"
                      fill
                      quality={90}
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060D1A]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-2.5 left-3 right-3">
                      <span className="text-[9px] uppercase tracking-[0.2em] text-[#DFCCA3] font-medium block">
                        Movement Studio
                      </span>
                      <span className="font-serif text-xs text-white font-light">
                        1-on-1 Calibration
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating Architectural Gold Medallion */}
                <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-20 h-20 rounded-full bg-[#0B1528] border border-[#C5A059] shadow-2xl flex flex-col items-center justify-center text-center p-2 backdrop-blur-md">
                  <span className="font-serif text-lg text-[#DFCCA3] leading-none mb-0.5 font-normal">C</span>
                  <span className="text-[7px] uppercase tracking-[0.2em] text-[#C5A059] font-medium">EST. 2024</span>
                  <span className="text-[6px] uppercase tracking-widest text-[#8C9BB4]">COLOMBO</span>
                </div>
              </div>
            </div>
          </div>

          {/* Three Pillars — Architectural Glass Cards with Metric Tags */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 border-t border-[#1C2E50]/80">
            {/* Pillar 01 */}
            <div className="relative p-8 rounded-2xl bg-[#0B1528]/70 border border-[#1C2E50] hover:border-[#C5A059]/50 transition-all duration-300 group hover:-translate-y-1.5 shadow-xl hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)]">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-[#C5A059] font-medium tracking-widest">
                  01
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#DFCCA3] px-2.5 py-1 rounded-full bg-white/5 border border-[#C5A059]/20 font-medium">
                  RECOVERY
                </span>
              </div>
              <h3 className="font-serif text-2xl text-white group-hover:text-[#DFCCA3] transition-colors font-normal mb-3">
                Personalised Care
              </h3>
              <p className="text-sm text-[#8C9BB4] font-light leading-relaxed mb-5">
                Every movement session and massage therapy is calibrated around your unique mobility, posture, and lifestyle requirements.
              </p>
              <div className="flex items-center gap-2 text-[11px] text-[#DFE7F3]/70 pt-3 border-t border-white/5">
                <span className="w-1 h-1 rounded-full bg-[#C5A059]" />
                <span>Biomechanical Assessment & Fascial Release</span>
              </div>
            </div>

            {/* Pillar 02 */}
            <div className="relative p-8 rounded-2xl bg-[#0B1528]/70 border border-[#1C2E50] hover:border-[#C5A059]/50 transition-all duration-300 group hover:-translate-y-1.5 shadow-xl hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)]">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-[#C5A059] font-medium tracking-widest">
                  02
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#DFCCA3] px-2.5 py-1 rounded-full bg-white/5 border border-[#C5A059]/20 font-medium">
                  GUIDANCE
                </span>
              </div>
              <h3 className="font-serif text-2xl text-white group-hover:text-[#DFCCA3] transition-colors font-normal mb-3">
                Experienced Practitioners
              </h3>
              <p className="text-sm text-[#8C9BB4] font-light leading-relaxed mb-5">
                Certified practitioners dedicated to anatomical understanding, safe progression, and attentive therapeutic release.
              </p>
              <div className="flex items-center gap-2 text-[11px] text-[#DFE7F3]/70 pt-3 border-t border-white/5">
                <span className="w-1 h-1 rounded-full bg-[#C5A059]" />
                <span>Certified Anatomists & Attentive 1-on-1</span>
              </div>
            </div>

            {/* Pillar 03 */}
            <div className="relative p-8 rounded-2xl bg-[#0B1528]/70 border border-[#1C2E50] hover:border-[#C5A059]/50 transition-all duration-300 group hover:-translate-y-1.5 shadow-xl hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)]">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-[#C5A059] font-medium tracking-widest">
                  03
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#DFCCA3] px-2.5 py-1 rounded-full bg-white/5 border border-[#C5A059]/20 font-medium">
                  EQUILIBRIUM
                </span>
              </div>
              <h3 className="font-serif text-2xl text-white group-hover:text-[#DFCCA3] transition-colors font-normal mb-3">
                Holistic Approach
              </h3>
              <p className="text-sm text-[#8C9BB4] font-light leading-relaxed mb-5">
                Harmonizing athletic conditioning with nervous system rejuvenation under one peaceful, immaculate roof.
              </p>
              <div className="flex items-center gap-2 text-[11px] text-[#DFE7F3]/70 pt-3 border-t border-white/5">
                <span className="w-1 h-1 rounded-full bg-[#C5A059]" />
                <span>Physical Conditioning & Nervous System Calm</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CROSA EXPERIENCE — INTERACTIVE ARCHITECTURAL SUITE SHOWCASE */}
      <section id="experience" className="py-24 sm:py-32 bg-[#F5EFE6] border-b border-[#E8DEC8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">

          {/* Section Header — Centered Luxury Editorial Alignment */}
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center justify-center gap-3">
              <span className="w-6 h-[1px] bg-[#C5A059]" />
              <p className="text-xs uppercase tracking-[0.35em] font-medium text-[#C5A059]">
                The CROSA Experience
              </p>
              <span className="w-6 h-[1px] bg-[#C5A059]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-[#0B1528] tracking-tight leading-[1.12]">
              Designed around how you want to feel.
            </h2>
            <p className="text-sm sm:text-base text-[#5E6977] font-light leading-relaxed max-w-lg mx-auto">
              Explore our core pillars of anatomical bodywork, private 1-on-1 movement coaching, and holistic nervous system rejuvenation.
            </p>
          </div>

          {/* Interactive Experience Showcase (Panoramic Display + Category Tabs + Specifications) */}
          <ExperienceShowcase />

          {/* SERVICE 04: DEEP NAVY SANCTUARY FEATURE */}
          <div className="bg-[#0B1528] text-white rounded-3xl p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl border border-[#1C2E50]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#DFCCA3] block">
                  04 • Sanctuary Location
                </span>
                <h3 className="font-serif text-3xl sm:text-5xl font-light text-white leading-tight">
                  283 - 287 Thimbirigasyaya Rd, Colombo 00500
                </h3>
                <p className="text-sm sm:text-base text-[#DFE7F3] font-light leading-relaxed max-w-xl">
                  Centrally situated with quiet private suites, modern exercise facilities, and dedicated parking for an effortless wellness visit.
                </p>
                <div className="pt-2 text-xs text-[#DFCCA3] space-y-1">
                  <p>Monday – Saturday: 6:00 AM – 8:30 PM</p>
                  <p>Sunday: 7:00 AM – 6:00 PM</p>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-4">
                <a
                  href={getWhatsAppUrl("Hello CROSA, I would like to schedule a visit to your sanctuary.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#C5A059] hover:bg-[#DFCCA3] text-[#0B1528] text-xs uppercase tracking-[0.2em] font-semibold transition-colors shadow-sm"
                >
                  <span>Schedule a Visit</span>
                  <ArrowUpRight className="w-4 h-4 text-[#0B1528]" />
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/30 hover:border-white text-white text-xs uppercase tracking-[0.2em] font-light transition-colors"
                >
                  <span>Directions & Contact</span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. CLINICAL METHODOLOGY — 3-STAGE KINETIC PROGRESSION */}
      <MethodologySection />

      {/* 5. WELLBEING PRINCIPLES — 2x2 BENTO GRID & CREDO SEAL */}
      <PrinciplesSection />

      {/* 6. WELLNESS JOURNEY — ARCHITECTURAL PORTAL & INTERACTIVE PATHWAYS */}
      <WellnessJourneySection />

      {/* 7. TESTIMONIALS — DEEP OBSIDIAN CAROUSEL & VERIFIED STORIES */}
      <TestimonialsSection />

      {/* 8. FAQ — TWO-COLUMN ARCHITECTURAL CONCIERGE & CATEGORIZED ACCORDION */}
      <section id="faq" className="py-28 sm:py-36 bg-[#FAF8F2] border-b border-[#E8DEC8] relative overflow-hidden">
        {/* Subtle Ambient Background */}
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#C5A059]/[0.03] rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
          <HomeFaq />
        </div>
      </section>

      {/* 9. FINAL CTA — REGAL DEEP NAVY SANCTUARY CLOSURE */}
      <section className="py-32 sm:py-40 bg-[#0B1528] text-white text-center relative overflow-hidden">
        {/* Ambient Gold Floating Particles */}
        <AmbientGoldParticles density={30} speed={0.35} colorScheme="gold" />

        <div className="max-w-3xl mx-auto px-6 sm:px-8 space-y-8 relative z-10">
          <p className="text-xs uppercase tracking-[0.35em] font-light text-[#DFCCA3]">
            Your Transformation Awaits
          </p>

          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-white tracking-tight leading-tight">
            Ready to Feel Your Best?
          </h2>

          <p className="text-base sm:text-lg text-[#DFE7F3] font-light leading-relaxed max-w-xl mx-auto">
            Connect with our sanctuary team to discuss your goals, reserve your private consultation, or learn more about our holistic services.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-7">
            <a
              href={getWhatsAppUrl("Hello CROSA, I am ready to begin my wellness journey.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full bg-[#C5A059] hover:bg-[#DFCCA3] text-[#0B1528] text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-md hover:scale-[1.02]"
            >
              <span>Begin Your Journey</span>
              <ArrowUpRight className="w-4 h-4 text-[#0B1528]" />
            </a>

            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/30 hover:border-white text-white text-xs uppercase tracking-[0.2em] font-light transition-colors"
            >
              <span>Explore CROSA</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#DFCCA3]" />
            </Link>
          </div>

          <div className="pt-12 text-xs text-[#8C9BB4] flex flex-wrap items-center justify-center gap-6">
            <span>283 - 287 Thimbirigasyaya Rd, Colombo 00500</span>
            <span>&bull;</span>
            <span>Direct: {BRAND_INFO.phoneDisplay}</span>
          </div>
        </div>
      </section>

    </div>
  );
}
