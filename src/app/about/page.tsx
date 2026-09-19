import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, CheckCircle2, Shield, Sparkles, Heart, Compass } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { BRAND_INFO } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/utils";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export const metadata: Metadata = {
  title: "About Us | CROSA Colombo",
  description:
    "Learn about CROSA — our story, holistic wellness philosophy, and integrated approach combining fitness training with therapeutic massage in Colombo.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO */}
      <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 bg-[#060D1A] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/images/about.jpg"
            alt="About CROSA Colombo"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060D1A] via-[#060D1A]/80 to-[#060D1A]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <p className="text-xs uppercase tracking-[0.3em] font-semibold text-[#C5A059]">
            Our Story & Ethos
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white leading-tight">
            About CROSA
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#DFE7F3] font-light leading-relaxed">
            A holistic wellness and rejuvenation destination in Colombo uniting functional fitness training with restorative therapeutic care.
          </p>
        </div>
      </section>

      {/* 2. OUR STORY */}
      <section className="py-20 sm:py-28 bg-[#FAF8F2] border-b border-[#E8DEC8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                eyebrow="The Beginning"
                title="Our Story"
                align="left"
              />

              <p className="text-base text-[#5E6977] leading-relaxed">
                CROSA was established with a singular, clear vision: to redefine how fitness and well-being are experienced in Colombo. We recognized that conventional gyms often emphasize exhausting exertion without recovery, while traditional relaxation spas rarely address functional body mechanics and postural health.
              </p>

              <p className="text-sm text-[#5E6977] leading-relaxed">
                Situated at 283 - 287 Thimbirigasyaya Road, CROSA bridges these two worlds. We built an environment where you can build vitality through thoughtful movement, and then immediately nurture and restore your muscles through targeted therapeutic massage treatments.
              </p>

              <div className="pt-2">
                <blockquote className="p-4 rounded-xl border-l-2 border-[#C5A059] bg-[#F4EFE6] text-sm italic text-[#0B1528]">
                  &ldquo;We don&apos;t just ask your body to work harder. We teach it to move better, recover deeper, and sustain vibrant health.&rdquo;
                </blockquote>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative h-[380px] sm:h-[460px] w-full rounded-2xl overflow-hidden shadow-xl border border-[#E8DEC8]">
                <Image
                  src="/images/facility.jpg"
                  alt="CROSA Modern Facility"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. OUR INTEGRATED APPROACH */}
      <section className="py-20 sm:py-28 bg-[#F5EFE6] border-b border-[#E8DEC8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Methodology"
            title="Our Approach"
            description="We view human well-being as a complete cycle: movement, recovery, nutrition, and peaceful balance."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-[#E8DEC8] shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#0B1528] text-[#DFCCA3] border border-[#C5A059]/30 flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-normal text-[#0B1528]">
                1. Intelligent Movement
              </h3>
              <p className="text-xs sm:text-sm text-[#5E6977] leading-relaxed">
                Training tailored to your functional mobility, building real-world strength, joint stability, and endurance without unnecessary strain.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#E8DEC8] shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#0B1528] text-[#DFCCA3] border border-[#C5A059]/30 flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-normal text-[#0B1528]">
                2. Therapeutic Release
              </h3>
              <p className="text-xs sm:text-sm text-[#5E6977] leading-relaxed">
                Expert therapeutic massage that releases deep tension, improves muscular circulation, accelerates recovery, and resets the nervous system.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#E8DEC8] shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#0B1528] text-[#DFCCA3] border border-[#C5A059]/30 flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-normal text-[#0B1528]">
                3. Sustainable Balance
              </h3>
              <p className="text-xs sm:text-sm text-[#5E6977] leading-relaxed">
                A non-dogmatic, individualized routine that seamlessly fits into your lifestyle, keeping you energized, focused, and free from chronic soreness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WELLNESS PHILOSOPHY & WHY CHOOSE US */}
      <section className="py-20 sm:py-28 bg-[#060D1A] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                eyebrow="Core Values"
                title="Why Choose CROSA"
                align="left"
                theme="dark"
              />

              <p className="text-sm sm:text-base text-[#8C9BB4] leading-relaxed">
                When you visit CROSA, you step into a tranquil setting where you are treated with attentiveness, discretion, and sincere care.
              </p>

              <div className="space-y-3.5 pt-2 text-sm text-[#DFE7F3]">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Personalized One-on-One Attention:</span>{" "}
                    We listen first. Your physical journey is customized to your exact objectives.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Certified & Experienced Team:</span>{" "}
                    Skilled practitioners in functional fitness programming and therapeutic massage therapies.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Premium Hygiene & Sanctuary Ambiance:</span>{" "}
                    Meticulously cleaned private therapy suites and top-tier workout facilities.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Prime Central Colombo Access:</span>{" "}
                    Centrally located on Thimbirigasyaya Road with convenient access and parking.
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#0B1528] p-8 sm:p-10 rounded-2xl border border-[#1C2E50] space-y-6 shadow-2xl">
              <Shield className="w-10 h-10 text-[#C5A059]" />
              <h3 className="font-serif text-2xl text-white">
                Our Commitment to You
              </h3>
              <p className="text-sm text-[#9EADC2] leading-relaxed">
                We believe health is an enduring asset. We do not provide quick fixes or generic fitness trends. At CROSA, every session is designed to make you feel empowered, physically relieved, and mentally restored.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#C5A059] hover:bg-[#DFCCA3] text-[#0B1528] text-xs font-semibold uppercase tracking-wider transition-colors shadow-md"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={getWhatsAppUrl("Hello CROSA, I would like to learn more about your philosophy and services.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
                >
                  <WhatsAppIcon className="w-4 h-4" fill="white" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
