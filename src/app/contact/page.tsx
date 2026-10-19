import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Navigation, ArrowUpRight } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { BRAND_INFO } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/utils";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export const metadata: Metadata = {
  title: "Contact Us | CROSA Colombo",
  description:
    "Get in touch with CROSA at 283 - 287 Thimbirigasyaya Rd, Colombo. Call 074 161 4191 or WhatsApp us for consultations and inquiries.",
};

export default function ContactPage() {
  const quickActions = [
    {
      label: "WhatsApp",
      value: "Chat with our team",
      href: getWhatsAppUrl("Hello CROSA, I would like to get in touch regarding your wellness services."),
      icon: <WhatsAppIcon className="w-5 h-5" fill="currentColor" />,
      external: true,
    },
    {
      label: "Call",
      value: BRAND_INFO.phoneDisplay,
      href: `tel:${BRAND_INFO.phone.replace(/\s+/g, "")}`,
      icon: <Phone className="w-5 h-5" strokeWidth={1.6} />,
    },
    {
      label: "Email",
      value: BRAND_INFO.email,
      href: `mailto:${BRAND_INFO.email}`,
      icon: <Mail className="w-5 h-5" strokeWidth={1.6} />,
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[#FAF8F2]">
      {/* 1. HERO */}
      <section className="surface-dark relative pt-36 pb-44 sm:pt-44 sm:pb-52 bg-[#060D1A] text-white overflow-hidden">
        <Image
          src="/images/hero/arrival-lounge.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,13,26,0.96)_0%,rgba(8,17,34,0.85)_50%,rgba(11,21,40,0.6)_100%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-accent" />
              <p className="text-xs uppercase tracking-[0.35em] font-medium text-accent">Contact</p>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[1.03]">
              Let&apos;s talk about <span className="italic text-accent">your recovery.</span>
            </h1>
            <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed max-w-lg">
              Questions, appointments or a first consultation. Reach us the way that suits you best.
            </p>
          </div>
        </div>
      </section>

      {/* Quick actions overlapping hero */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full -mt-28 sm:-mt-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {quickActions.map((a) => (
            <a
              key={a.label}
              href={a.href}
              target={a.external ? "_blank" : undefined}
              rel={a.external ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-5 p-6 sm:p-7 rounded-3xl bg-white border border-line shadow-[0_30px_60px_-30px_rgba(11,21,40,0.35)] hover:bg-[#0B1528] hover:border-[#0B1528] hover:-translate-y-1 transition-all duration-500"
            >
              <span className="w-14 h-14 rounded-2xl bg-[#FAF8F2] group-hover:bg-white/10 text-[#0B1528] group-hover:text-white flex items-center justify-center shrink-0 transition-colors duration-500">
                {a.icon}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[10px] uppercase tracking-[0.28em] text-accent group-hover:text-white/60 font-semibold transition-colors">
                  {a.label}
                </span>
                <span className="block font-serif text-xl text-[#0B1528] group-hover:text-white truncate transition-colors">
                  {a.value}
                </span>
              </span>
              <ArrowUpRight className="w-5 h-5 text-[#0B1528]/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          ))}
        </div>
      </div>

      {/* 2. INFO PANEL + FORM */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border border-line shadow-[0_40px_90px_-40px_rgba(11,21,40,0.35)]">
            {/* Info panel */}
            <div className="surface-dark relative lg:col-span-5 bg-[#0B1528] text-white p-8 sm:p-12 flex flex-col justify-between gap-12 overflow-hidden">
              <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#2F4A7A]/40 blur-[90px] pointer-events-none" />

              <div className="relative space-y-3">
                <h2 className="font-serif text-3xl sm:text-4xl font-light leading-tight">Visit the clinic</h2>
                <p className="text-sm text-white/60 font-light leading-relaxed max-w-xs">
                  Private treatment suites and dedicated parking in the heart of Colombo 05.
                </p>
              </div>

              <div className="relative space-y-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0" strokeWidth={1.6} />
                  <div className="space-y-2">
                    <p className="text-[10px] uppercase tracking-[0.28em] text-white/50">Address</p>
                    <p className="text-base leading-relaxed">{BRAND_INFO.address.full}</p>
                    <a
                      href={BRAND_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/80 hover:text-white transition-colors"
                    >
                      Get directions
                      <Navigation className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-accent mt-0.5 shrink-0" strokeWidth={1.6} />
                  <div className="space-y-2">
                    <p className="text-[10px] uppercase tracking-[0.28em] text-white/50">Opening hours</p>
                    <p className="text-base">{BRAND_INFO.hours.weekdays}</p>
                    <p className="text-base">{BRAND_INFO.hours.weekends}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-12">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* 3. MAP */}
      <section className="pb-20 sm:pb-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="relative w-full h-[420px] sm:h-[520px] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border border-line shadow-[0_40px_90px_-40px_rgba(11,21,40,0.35)] bg-ivory-deep">
            <iframe
              title="CROSA Location in Colombo"
              src={BRAND_INFO.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[40%] contrast-[1.05]"
            />
            <div className="absolute left-4 right-4 bottom-4 sm:left-8 sm:bottom-8 sm:right-auto sm:max-w-sm surface-dark rounded-2xl bg-[#0B1528]/95 backdrop-blur-md text-white p-5 sm:p-6 shadow-2xl space-y-3">
              <p className="text-[10px] uppercase tracking-[0.28em] text-accent">Find us</p>
              <p className="font-serif text-xl leading-snug">{BRAND_INFO.address.full}</p>
              <a
                href={BRAND_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FAF8F2] hover:bg-white text-[#0B1528] text-[11px] uppercase tracking-[0.18em] font-semibold transition-colors"
              >
                Open in Google Maps
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
