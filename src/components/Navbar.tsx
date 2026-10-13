"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";
import { BRAND_INFO } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/utils";
import WhatsAppIcon from "./WhatsAppIcon";
import AmbientGoldParticles from "./AmbientGoldParticles";

const NAV_ITEMS = [
  { name: "About", href: "/about", number: "01" },
  { name: "Experience", href: "/#experience", number: "02" },
  { name: "Services", href: "/services", number: "03" },
  { name: "Contact", href: "/contact", number: "04" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  return (
    <>
      {/* Ultra-Luxury Full-Bleed Deep Obsidian & Gold Architectural Header */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 w-full ${
          isScrolled
            ? "bg-[#060D1A]/95 backdrop-blur-2xl border-b border-[#C5A059]/30 shadow-[0_15px_40px_rgba(0,0,0,0.45)] h-20"
            : "bg-[#060D1A]/88 backdrop-blur-xl border-b border-[#C5A059]/20 shadow-[0_8px_30px_rgba(0,0,0,0.3)] h-20 sm:h-22"
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          
          {/* Left: Brand Monogram Crest & Haute-Couture Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-3.5 group focus:outline-none"
          >
            {/* Monogram Seal */}
            <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-[#0B1528] to-[#040810] border border-[#C5A059] flex items-center justify-center text-[#DFCCA3] font-serif font-semibold text-base shadow-sm group-hover:border-[#DFCCA3] group-hover:shadow-[0_0_15px_rgba(197,160,89,0.35)] transition-all duration-300">
              <span className="group-hover:scale-105 transition-transform">C</span>
            </div>

            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl tracking-[0.25em] font-normal text-white group-hover:text-[#DFCCA3] transition-colors leading-none">
                {BRAND_INFO.name}
              </span>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#C5A059] font-medium font-mono">
                  Sanctuary
                </span>
                <span className="w-1 h-1 rounded-full bg-[#C5A059]/60" />
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#8C9BB4] font-light font-mono">
                  Colombo 05
                </span>
              </div>
            </div>
          </Link>

          {/* Center: Editorial Architectural Navigation Links */}
          <nav
            className="hidden md:flex items-center space-x-8 lg:space-x-10"
            aria-label="Main Navigation"
          >
            {NAV_ITEMS.map((link) => {
              const isCurrent = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`group relative text-xs uppercase tracking-[0.22em] font-medium transition-all duration-300 py-2 ${
                    isCurrent
                      ? "text-white"
                      : "text-[#9EADC2] hover:text-white"
                  }`}
                >
                  <span className="group-hover:text-[#DFCCA3] transition-colors">
                    {link.name}
                  </span>

                  {/* Active & Hover Underline Accent */}
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-[#C5A059] transition-all duration-300 ${
                      isCurrent
                        ? "w-full shadow-[0_0_8px_rgba(197,160,89,0.8)]"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right: Actions Cluster */}
          <div className="hidden sm:flex items-center space-x-5">
            
            {/* WhatsApp Concierge Trigger */}
            <a
              href={getWhatsAppUrl("Hello CROSA, I would like to inquire about your sanctuary services.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-[#C5A059]/50 transition-all duration-300 group"
              title="Chat with Sanctuary Concierge on WhatsApp"
            >
              <div className="relative flex items-center justify-center">
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" fill="#25D366" />
                <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
              </div>
              <span className="text-[11px] uppercase tracking-[0.16em] text-[#DFCCA3] group-hover:text-white font-medium">
                Concierge
              </span>
            </a>

            {/* Direct Phone Micro Link */}
            <a
              href="tel:0741614191"
              className="hidden lg:flex items-center gap-1.5 text-xs text-[#8C9BB4] hover:text-white transition-colors"
              title="Call CROSA Colombo"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="font-mono text-[11px]">074 161 4191</span>
            </a>

            {/* Primary Booking Button — Shimmering Ivory Gold */}
            <a
              href={getWhatsAppUrl("Hello CROSA, I would like to book an experience at your sanctuary.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs uppercase tracking-[0.2em] font-semibold bg-[#C5A059] hover:bg-[#DFCCA3] text-[#060D1A] transition-all duration-300 shadow-[0_4px_20px_rgba(197,160,89,0.25)] hover:shadow-[0_6px_25px_rgba(197,160,89,0.4)] hover:scale-105 group"
            >
              <span>Book Experience</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#060D1A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Actions: WhatsApp Icon + Hamburger */}
          <div className="flex items-center sm:hidden gap-3">
            <a
              href={getWhatsAppUrl("Hello CROSA, I would like to inquire about your sanctuary services.")}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 border border-[#C5A059]/30 text-white"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" fill="#25D366" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white focus:outline-none hover:bg-white/10 transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#DFCCA3]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Luxury Deep Obsidian Mobile Drawer with Ambient Gold Particles */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#060D1A]/98 backdrop-blur-2xl px-8 pt-28 pb-10 flex flex-col justify-between overflow-y-auto animate-in fade-in duration-300 sm:hidden">
          {/* Ambient Particles in Mobile Menu */}
          <AmbientGoldParticles density={25} speed={0.3} colorScheme="gold" />

          <div className="space-y-8 relative z-10">
            <div className="flex items-center justify-between pb-4 border-b border-[#1C2E50] text-xs text-[#8C9BB4]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                <span className="uppercase tracking-[0.25em] text-[#DFCCA3] font-medium">Boutique Sanctuary</span>
              </div>
              <span className="font-mono text-[10px] text-[#8C9BB4]">Colombo 00500</span>
            </div>

            <nav className="flex flex-col space-y-4" aria-label="Mobile Navigation">
              {NAV_ITEMS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group flex items-baseline justify-between py-2.5 border-b border-white/5"
                >
                  <span className="font-serif text-3xl text-white font-light group-hover:text-[#DFCCA3] transition-colors">
                    {link.name}
                  </span>
                  <span className="text-xs text-[#C5A059] font-mono tracking-widest">
                    {link.number}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          <div className="pt-8 space-y-5 border-t border-[#1C2E50] relative z-10">
            <div className="text-xs text-[#8C9BB4] space-y-1">
              <p className="uppercase tracking-widest text-[#DFCCA3] font-semibold">{BRAND_INFO.name} Colombo</p>
              <p>{BRAND_INFO.address.full}</p>
              <p className="text-white pt-1">Direct: {BRAND_INFO.phoneDisplay}</p>
            </div>

            <div className="flex flex-col gap-3 pt-2">
              <a
                href={getWhatsAppUrl("Hello CROSA, I would like to book a consultation.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#C5A059] hover:bg-[#DFCCA3] text-[#060D1A] text-xs font-semibold uppercase tracking-[0.2em] transition-all shadow-md"
              >
                <span>Book Your Experience</span>
                <ArrowUpRight className="w-4 h-4 text-[#060D1A]" />
              </a>

              <a
                href={getWhatsAppUrl("Hello CROSA, I have a quick question.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-3 rounded-full bg-[#112038] text-white border border-[#1C2E50] text-xs font-medium uppercase tracking-[0.2em] transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" fill="#25D366" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
