import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Activity, ArrowRight, ArrowUpRight, Clock, Dumbbell, Footprints, MapPin, Phone, RotateCcw, Trophy, Waves } from "lucide-react";
import HomeFaq from "@/components/HomeFaq";
import HeroBgCarousel from "@/components/HeroBgCarousel";
import ExperienceShowcase from "@/components/ExperienceShowcase";
import MethodologySection from "@/components/MethodologySection";
import PrinciplesSection from "@/components/PrinciplesSection";
import WellnessJourneySection from "@/components/WellnessJourneySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AmbientGoldParticles from "@/components/AmbientGoldParticles";
import SpecialPackageBanner from "@/components/SpecialPackageBanner";
import ServiceCard from "@/components/ServiceCard";
import { BRAND_INFO, SERVICES, CONDITIONS_TREATED } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/utils";

const CONDITION_ICONS = [Activity, Waves, Dumbbell, Footprints, Trophy, RotateCcw];
const CONDITION_IMAGES = [
  "/images/physio/pain-relief.jpg",
  "/images/physio/neck-decompression.jpg",
  "/images/physio/shoulder-mobility.jpg",
  "/images/physio/rehabilitation.jpg",
  "/images/physio/sports-massage.jpg",
  "/images/physio/movement-therapy.jpg",
];

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden bg-[#FAF8F2] text-[#0B1528]">

      {/* 1. HERO — NAVY-VEILED PHOTO, IVORY TYPE */}
      <section className="surface-dark relative min-h-[640px] h-screen max-h-[1100px] flex flex-col overflow-hidden bg-[#060D1A] text-white">
        <HeroBgCarousel />

        <div className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-28 sm:pt-32 pb-8">
          <div className="max-w-2xl space-y-6 lg:space-y-7">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-soft animate-pulse" />
              <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] font-medium text-accent-soft">
                Pain Management &amp; Rehabilitation Center
              </p>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-light tracking-tight text-white leading-[1.02]">
              Move Better.
              <br />
              <span className="italic font-normal text-accent">Live Pain Free.</span>
            </h1>

            <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed max-w-xl">
              Specialised care for your pain &amp; movement. Expert clinical care for back, neck, shoulder and knee pain, sports injuries and post-injury rehab.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={getWhatsAppUrl("Hello CROSA, I would like to consult about pain relief and rehabilitation.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#FAF8F2] hover:bg-white text-[#0B1528] text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-lg shadow-black/30 hover:-translate-y-0.5"
              >
                <span>Consult On WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full border border-white/40 hover:border-white hover:bg-white/10 text-white text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 group"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="flex items-center gap-3 pt-2 text-[11px] uppercase tracking-[0.25em] text-white/70 font-medium">
              <span>Recover</span>
              <span className="w-6 h-px bg-white/30" />
              <span>Rehabilitate</span>
              <span className="w-6 h-px bg-white/30" />
              <span>Perform</span>
            </div>
          </div>
        </div>

        {/* Info strip */}
        <div className="relative z-10 w-full border-t border-white/15 bg-[#060D1A]/70 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 text-xs">
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-accent shrink-0" />
              <span className="text-white/80">283 - 287 Thimbirigasyaya Rd, Colombo 05</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-accent shrink-0" />
              <span className="text-white/80">Mon – Sat 6:00 AM – 8:30 PM</span>
            </div>
            <div className="flex items-center justify-between gap-3">
              <span className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span className="text-white/80">074 161 4191</span>
              </span>
              <a
                href="#conditions"
                aria-label="Scroll to conditions treated"
                className="hidden sm:flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-white/60 hover:text-white transition-colors pr-16"
              >
                Conditions Treated
                <ArrowRight className="w-3 h-3 rotate-90" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <SpecialPackageBanner />

      {/* 2. CONDITIONS WE TREAT */}
      <section id="conditions" className="py-24 sm:py-28 bg-[#FAF8F2] border-b border-line">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-accent" />
                <p className="text-xs uppercase tracking-[0.3em] font-semibold text-accent">Specialised Care</p>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#0B1528] font-light tracking-tight leading-[1.08]">
                Conditions <span className="italic text-accent">We Treat</span>
              </h2>
            </div>
            <p className="lg:col-span-5 text-base text-[#5E6977] font-light leading-relaxed lg:pb-2">
              Targeted clinical interventions to eliminate pain, stabilise joints and restore natural movement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CONDITIONS_TREATED.map((item, idx) => {
              const Icon = CONDITION_ICONS[idx % CONDITION_ICONS.length];
              const img = CONDITION_IMAGES[idx % CONDITION_IMAGES.length];
              return (
                <Link
                  key={item.name}
                  href="/services#pain-relief"
                  className="group surface-dark relative block overflow-hidden rounded-3xl h-[22rem] bg-[#0B1528] hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-20px_rgba(11,21,40,0.55)] transition-all duration-500"
                >
                  <Image
                    src={img}
                    alt={`${item.name} treatment at CROSA`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-[1200ms] ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060D1A] via-[#060D1A]/55 to-[#060D1A]/10 group-hover:via-[#060D1A]/75 transition-colors duration-500" />

                  <div className="absolute top-5 left-5 right-5 flex items-start justify-between">
                    <span className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center">
                      <Icon className="w-5 h-5" strokeWidth={1.5} />
                    </span>
                    <span className="font-serif text-4xl font-light text-white/40 leading-none select-none">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                    <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-accent-soft/80">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-3xl text-white font-normal mt-1.5 mb-2">{item.name}</h3>
                    <p className="text-sm text-white/70 font-light leading-relaxed lg:max-h-0 lg:opacity-0 lg:group-hover:max-h-24 lg:group-hover:opacity-100 overflow-hidden transition-all duration-500">
                      {item.description}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-medium text-white">
                      Learn more
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. INTRODUCTION */}
      <section id="intro" className="surface-dark relative py-28 sm:py-36 bg-[#060D1A] text-white overflow-hidden">
        {/* Depth: soft navy glows + hairline grid */}
        <div className="absolute -top-40 -left-40 w-[620px] h-[620px] rounded-full bg-[#1C3A6E]/40 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[520px] h-[520px] rounded-full bg-[#2F4A7A]/25 blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:72px_72px]" />
        <AmbientGoldParticles density={26} speed={0.25} colorScheme="gold" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center">
            {/* Left: narrative */}
            <div className="lg:col-span-6 space-y-8 order-2 lg:order-1">
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-accent" />
                <p className="text-xs uppercase tracking-[0.35em] font-medium text-accent">Welcome to CROSA</p>
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl lg:text-[3.6rem] font-light text-white tracking-tight leading-[1.08]">
                Less Pain. <span className="italic text-accent">More Movement.</span> Better Life.
              </h2>

              <p className="text-lg sm:text-xl text-white/90 font-light leading-relaxed">
                Living with pain alters everything: how you sit, how you sleep, how you train, and how you think.
              </p>

              <p className="text-base text-white/60 font-light leading-relaxed border-l border-white/20 pl-5">
                <strong className="text-white font-medium">CROSA</strong> is a dedicated clinical center for pain management and physical rehabilitation at 283 - 287 Thimbirigasyaya Road. Our clinicians unite targeted pain relief, sports massage and structured movement therapy to guide you back to total physical freedom, without masking symptoms or enduring crowded gyms that aggravate hidden injuries.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-2">
                {[
                  { n: "6", l: "Core disciplines" },
                  { n: "6", l: "Conditions treated" },
                  { n: "14h", l: "Open daily" },
                ].map((stat) => (
                  <div key={stat.l} className="border-t border-white/20 pt-4">
                    <div className="font-serif text-4xl sm:text-5xl font-light text-white leading-none">{stat.n}</div>
                    <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-white/50">{stat.l}</div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#FAF8F2] hover:bg-white text-[#0B1528] text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-lg shadow-black/30 hover:-translate-y-0.5"
                >
                  <span>Our Story &amp; Ethos</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right: framed image with floating cards */}
            <div className="lg:col-span-6 relative order-1 lg:order-2">
              <div className="relative max-w-md sm:max-w-lg mx-auto lg:mr-0">
                <div className="absolute -inset-4 translate-x-5 translate-y-5 rounded-t-[9rem] rounded-b-3xl border border-white/15" />
                <div className="relative aspect-[4/5] w-full rounded-t-[9rem] rounded-b-3xl overflow-hidden group shadow-[0_40px_90px_rgba(0,0,0,0.6)]">
                  <Image
                    src="/images/physio/pain-relief.jpg"
                    alt="Attentive CROSA male physiotherapist providing clinical spinal pain relief treatment"
                    fill
                    quality={92}
                    sizes="(min-width: 1024px) 560px, 90vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060D1A]/70 via-transparent to-transparent" />
                </div>

                <div className="absolute -bottom-6 -left-4 sm:-left-10 px-5 py-4 rounded-2xl bg-[#FAF8F2] text-[#0B1528] shadow-2xl flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#0B1528] text-white flex items-center justify-center">
                    <Activity className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-[#5E6977]">Clinical Excellence</p>
                    <p className="font-serif text-lg leading-tight">Spine &amp; Joint Care</p>
                  </div>
                </div>

                <div className="absolute top-10 -right-3 sm:-right-8 px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-white/60">Private Suites</p>
                  <p className="font-serif text-base text-white">Colombo 05</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pillars: connected journey */}
          <div className="mt-28 sm:mt-32">
            <div className="flex items-end justify-between mb-10">
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-white">The CROSA Method</h3>
              <span className="hidden sm:block text-[10px] uppercase tracking-[0.3em] text-white/40">Three phases, one outcome</span>
            </div>
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="hidden md:block absolute top-[3.1rem] left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
              {[
                { n: "01", t: "Recover", d: "Immediate pain alleviation, spinal decompression, inflammation reduction and muscular tension release.", f: "Spine & Joint Decompression" },
                { n: "02", t: "Rehabilitate", d: "Evidence-based protocols to restore joint stability, tissue integrity and healthy range of motion after injury or surgery.", f: "Structured Post-Injury Care" },
                { n: "03", t: "Perform", d: "Corrective biomechanics, functional kinetic conditioning and sports massage to keep you moving at your peak.", f: "Movement Therapy & Longevity" },
              ].map((p) => (
                <div
                  key={p.n}
                  className="group relative p-8 rounded-3xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/30 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5"
                >
                  <div className="relative w-12 h-12 rounded-full bg-[#060D1A] border border-white/30 group-hover:bg-[#FAF8F2] group-hover:text-[#0B1528] flex items-center justify-center font-mono text-xs tracking-widest text-white mb-7 transition-colors duration-500">
                    {p.n}
                  </div>
                  <h4 className="font-serif text-3xl text-white font-normal mb-3">{p.t}</h4>
                  <p className="text-sm text-white/60 font-light leading-relaxed mb-6">{p.d}</p>
                  <div className="flex items-center gap-2.5 text-[11px] uppercase tracking-[0.18em] text-accent pt-4 border-t border-white/10">
                    <span className="w-1 h-1 rounded-full bg-accent" />
                    <span>{p.f}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE 5 CLINIC SERVICES SHOWCASE (FULL GRID) */}
      <section id="services-grid" className="py-24 sm:py-32 bg-ivory-deep border-b border-line">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center justify-center gap-3">
              <span className="w-6 h-[1px] bg-accent" />
              <p className="text-xs uppercase tracking-[0.35em] font-semibold text-accent">
                Clinical Offerings
              </p>
              <span className="w-6 h-[1px] bg-accent" />
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-[#0B1528] tracking-tight leading-[1.12]">
              Our 6 Core Disciplines
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
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full surface-dark bg-[#0B1528] hover:bg-[#14233e] text-accent-soft hover:text-white border border-accent/40 text-xs uppercase tracking-[0.2em] font-medium transition-all shadow-md group"
            >
              <span>View In-Depth Protocols &amp; Details</span>
              <ArrowRight className="w-3.5 h-3.5 text-accent group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. CROSA EXPERIENCE CHAPTERS SHOWCASE */}
      <section id="experience" className="py-24 sm:py-32 bg-[#FAF8F2] border-b border-line">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center justify-center gap-3">
              <span className="w-6 h-[1px] bg-accent" />
              <p className="text-xs uppercase tracking-[0.35em] font-medium text-accent">
                The CROSA Standard
              </p>
              <span className="w-6 h-[1px] bg-accent" />
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-[#0B1528] tracking-tight leading-[1.12]">
              Clinical Precision. Restorative Care.
            </h2>
            <p className="text-sm sm:text-base text-[#5E6977] font-light leading-relaxed max-w-lg mx-auto">
              Explore how our pain relief protocols, sports massage, and rehabilitation work together for complete physical renewal.
            </p>
          </div>

          <ExperienceShowcase />
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
      <section id="faq" className="py-28 sm:py-36 bg-[#FAF8F2] border-b border-line relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
          <HomeFaq />
        </div>
      </section>

      {/* 11. FINAL CTA */}
      <section className="py-32 sm:py-40 surface-dark bg-[#0B1528] text-white text-center relative overflow-hidden">
        <AmbientGoldParticles density={30} speed={0.35} colorScheme="gold" />

        <div className="max-w-3xl mx-auto px-6 sm:px-8 space-y-8 relative z-10">
          <p className="text-xs uppercase tracking-[0.35em] font-light text-accent-soft">
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
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full bg-accent hover:bg-accent-soft text-[#0B1528] text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-md hover:scale-[1.02]"
            >
              <span>Consult on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4 text-[#0B1528]" />
            </a>

            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/30 hover:border-white text-white text-xs uppercase tracking-[0.2em] font-light transition-colors"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-3.5 h-3.5 text-accent-soft" />
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
