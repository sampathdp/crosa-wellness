import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BRAND_INFO, SERVICES } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/utils";
import WhatsAppIcon from "./WhatsAppIcon";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="surface-dark bg-[#060D1A] text-[#DFE7F3] pt-24 pb-14 border-t border-[#1C2E50]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-20">
        
        {/* Top Row: Editorial Brand & Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="inline-block group">
              <Logo size="lg" />
            </Link>

            <p className="text-sm sm:text-base text-[#9EADC2] font-light leading-relaxed max-w-md">
              A premier clinical center in the heart of Colombo uniting evidence-led movement rehabilitation with clinical pain management and sports therapy.
            </p>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl("Hello CROSA, I would like to reserve a clinical consultation.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-accent-soft hover:text-white transition-colors group"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" fill="#F1ECDD" />
                <span>Reserve a Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Columns */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Clinic */}
            <div className="space-y-4">
              <p className="text-[11px] uppercase tracking-[0.25em] font-semibold text-accent">
                Clinic
              </p>
              <ul className="space-y-3 text-xs sm:text-sm font-light text-[#9EADC2]">
                <li>
                  <Link href="/about" className="hover:text-accent-soft transition-colors">
                    Our Story & Ethos
                  </Link>
                </li>
                <li>
                  <Link href="/#experience" className="hover:text-accent-soft transition-colors">
                    The Experience
                  </Link>
                </li>
                <li>
                  <Link href="/#philosophy" className="hover:text-accent-soft transition-colors">
                    Clinical Philosophy
                  </Link>
                </li>
                <li>
                  <Link href="/#testimonials" className="hover:text-accent-soft transition-colors">
                    Client Reflections
                  </Link>
                </li>
                <li>
                  <Link href="/#faq" className="hover:text-accent-soft transition-colors">
                    Frequently Inquired
                  </Link>
                </li>
              </ul>
            </div>

            {/* Offerings */}
            <div className="space-y-4">
              <p className="text-[11px] uppercase tracking-[0.25em] font-semibold text-accent">
                Disciplines
              </p>
              <ul className="space-y-3 text-xs sm:text-sm font-light text-[#9EADC2]">
                {SERVICES.map((s) => (
                  <li key={s.id}>
                    <Link href={`/services#${s.id}`} className="hover:text-accent-soft transition-colors">
                      {s.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/services" className="text-accent-soft hover:underline pt-1 inline-block text-xs">
                    All Offerings &rarr;
                  </Link>
                </li>
              </ul>
            </div>

            {/* Visit & Connect */}
            <div className="space-y-4">
              <p className="text-[11px] uppercase tracking-[0.25em] font-semibold text-accent">
                Clinic Location
              </p>
              <div className="space-y-3 text-xs sm:text-sm font-light text-[#9EADC2] leading-relaxed">
                <p>{BRAND_INFO.address.full}</p>
                <p>
                  <a href={`tel:${BRAND_INFO.phone.replace(/\s+/g, "")}`} className="text-white hover:text-accent-soft hover:underline">
                    {BRAND_INFO.phoneDisplay}
                  </a>
                </p>
                <p>
                  <a href={`mailto:${BRAND_INFO.email}`} className="hover:text-accent-soft break-all">
                    {BRAND_INFO.email}
                  </a>
                </p>
                <div className="pt-1 text-[11px] text-[#7A8A9E]">
                  <p>Mon - Sat: 6:00am - 8:30pm</p>
                  <p>Sunday: 7:00am - 6:00pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#1C2E50] flex flex-col sm:flex-row items-center justify-between text-xs text-[#7A8A9E] gap-4">
          <p>&copy; 2026 {BRAND_INFO.name}. All rights reserved.</p>
          <p className="tracking-wider uppercase text-[10px]">
            Thimbirigasyaya Road &bull; Colombo, Sri Lanka
          </p>
        </div>

      </div>
    </footer>
  );
}
