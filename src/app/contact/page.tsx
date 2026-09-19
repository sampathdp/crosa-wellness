import React from "react";
import { Metadata } from "next";
import { MapPin, Phone, Mail, Globe, Clock, Navigation } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/SectionHeading";
import { BRAND_INFO } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/utils";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export const metadata: Metadata = {
  title: "Contact Us | CROSA Colombo",
  description:
    "Get in touch with CROSA at 283 - 287 Thimbirigasyaya Rd, Colombo. Call 074 161 4191 or WhatsApp us for consultations and inquiries.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO */}
      <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 bg-[#060D1A] text-white overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <p className="text-xs uppercase tracking-[0.3em] font-semibold text-[#C5A059]">
            We Look Forward to Welcoming You
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white leading-tight">
            Get in Touch
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#DFE7F3] font-light leading-relaxed">
            Have questions about our fitness memberships, therapeutic massage treatments, or consultation appointments? Reach out today.
          </p>
        </div>
      </section>

      {/* 2. CONTACT DETAILS & INTERACTIVE FORM */}
      <section className="py-20 sm:py-28 bg-[#FAF8F2] border-b border-[#E8DEC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
            
            {/* Left Column: Direct Details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <SectionHeading
                  eyebrow="Direct Inquiries"
                  title="Visit or Connect"
                  align="left"
                />
                <p className="text-sm text-[#5E6977] leading-relaxed">
                  We are conveniently situated along Thimbirigasyaya Road in Colombo. Drop by during opening hours or send us a message anytime.
                </p>
              </div>

              <div className="space-y-4">
                {/* Address Card */}
                <div className="p-5 rounded-xl bg-white border border-[#E8DEC8] shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#0B1528] text-[#DFCCA3] border border-[#C5A059]/30 flex items-center justify-center shrink-0 mt-1">
                    <MapPin className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div className="space-y-1 text-sm">
                    <h4 className="font-semibold text-[#0B1528]">Location</h4>
                    <p className="text-[#5E6977]">{BRAND_INFO.address.full}</p>
                    <a
                      href={BRAND_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#C5A059] font-semibold hover:underline pt-1"
                    >
                      <span>Get Directions on Google Maps</span>
                      <Navigation className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Phone & WhatsApp Card */}
                <div className="p-5 rounded-xl bg-white border border-[#E8DEC8] shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#0B1528] text-[#DFCCA3] border border-[#C5A059]/30 flex items-center justify-center shrink-0 mt-1">
                    <Phone className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div className="space-y-1 text-sm">
                    <h4 className="font-semibold text-[#0B1528]">Phone & WhatsApp</h4>
                    <p className="text-[#5E6977]">
                      Call or chat:{" "}
                      <a
                        href={`tel:${BRAND_INFO.phone.replace(/\s+/g, "")}`}
                        className="font-medium text-[#0B1528] hover:text-[#C5A059]"
                      >
                        {BRAND_INFO.phoneDisplay}
                      </a>
                    </p>
                    <div className="pt-2">
                      <a
                        href={getWhatsAppUrl("Hello CROSA, I would like to get in touch regarding your wellness services.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
                      >
                        <WhatsAppIcon className="w-3.5 h-3.5" fill="white" />
                        <span>Chat on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email & Website Card */}
                <div className="p-5 rounded-xl bg-white border border-[#E8DEC8] shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#0B1528] text-[#DFCCA3] border border-[#C5A059]/30 flex items-center justify-center shrink-0 mt-1">
                    <Mail className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div className="space-y-1 text-sm">
                    <h4 className="font-semibold text-[#0B1528]">Email & Web</h4>
                    <p className="text-[#5E6977]">
                      <a
                        href={`mailto:${BRAND_INFO.email}`}
                        className="hover:underline text-[#0B1528] hover:text-[#C5A059] break-all"
                      >
                        {BRAND_INFO.email}
                      </a>
                    </p>
                    <p className="text-xs text-[#8C9BB4] flex items-center gap-1.5 pt-0.5">
                      <Globe className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>{BRAND_INFO.website}</span>
                    </p>
                  </div>
                </div>

                {/* Opening Hours Card */}
                <div className="p-5 rounded-xl bg-white border border-[#E8DEC8] shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#0B1528] text-[#DFCCA3] border border-[#C5A059]/30 flex items-center justify-center shrink-0 mt-1">
                    <Clock className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div className="space-y-1 text-sm">
                    <h4 className="font-semibold text-[#0B1528]">Opening Hours</h4>
                    <p className="text-[#5E6977] text-xs">{BRAND_INFO.hours.weekdays}</p>
                    <p className="text-[#5E6977] text-xs">{BRAND_INFO.hours.weekends}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* 3. GOOGLE MAPS EMBED */}
      <section className="bg-[#F5EFE6] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C5A059]">
                Location Map
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#0B1528]">
                Find Us in Colombo
              </h3>
            </div>
            <a
              href={BRAND_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0B1528] hover:text-[#C5A059] transition-colors"
            >
              <span>Open in Google Maps</span>
              <Navigation className="w-3.5 h-3.5 text-[#C5A059]" />
            </a>
          </div>

          <div className="w-full h-[400px] sm:h-[450px] rounded-2xl overflow-hidden border border-[#E8DEC8] shadow-md bg-[#FAF8F2]">
            <iframe
              title="CROSA Location in Colombo"
              src={BRAND_INFO.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[25%] contrast-[1.05]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
