"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";
import { BRAND_INFO } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/utils";
import WhatsAppIcon from "./WhatsAppIcon";
import AmbientGoldParticles from "./AmbientGoldParticles";
import Logo from "./Logo";

const NAV_ITEMS = [
  { name: "About", href: "/about", number: "01" },
  { name: "Experience", href: "/#experience", number: "02" },
  { name: "Services", href: "/services", number: "03" },
  { name: "Contact", href: "/contact", number: "04" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [progress, setProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pill, setPill] = useState<{ left: number; width: number } | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const lastY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setIsScrolled(y > 20);
      setProgress(max > 0 ? Math.min(y / max, 1) : 0);
      // Hide while scrolling down past the hero, reveal on scroll up
      if (y < 240) setHidden(false);
      else if (y > lastY.current + 4) setHidden(true);
      else if (y < lastY.current - 4) setHidden(false);
      lastY.current = y;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  const movePill = (e: React.MouseEvent<HTMLElement> | React.FocusEvent<HTMLElement>) => {
    const nav = navRef.current;
    if (!nav) return;
    const t = e.currentTarget.getBoundingClientRect();
    const n = nav.getBoundingClientRect();
    setPill({ left: t.left - n.left, width: t.width });
  };

  return (
    <>
      {/* Floating glass island nav */}
      <header
        className={`fixed top-0 inset-x-0 z-50 px-3 sm:px-6 pt-3 sm:pt-4 pointer-events-none transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          hidden && !mobileMenuOpen ? "-translate-y-[130%]" : "translate-y-0"
        }`}
      >
        <div
          className={`pointer-events-auto relative mx-auto flex items-center justify-between rounded-full border backdrop-blur-2xl overflow-hidden transition-all duration-500 ${
            isScrolled
              ? "max-w-5xl h-14 pl-2.5 pr-2 surface-dark bg-[#060D1A]/80 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
              : "max-w-6xl h-16 pl-3 pr-2.5 surface-dark bg-[#060D1A]/55 border-white/15 shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
          }`}
        >
          {/* Top sheen */}
          <span className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-accent-soft/60 to-transparent" />

          {/* Brand */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            <Logo />
          </Link>

          {/* Center nav with sliding pill */}
          <nav
            ref={navRef}
            onMouseLeave={() => setPill(null)}
            className="hidden md:flex relative items-center gap-1"
            aria-label="Main Navigation"
          >
            <span
              aria-hidden
              className={`absolute top-0 bottom-0 rounded-full bg-white/10 border border-white/10 transition-all duration-300 ease-out ${
                pill ? "opacity-100" : "opacity-0"
              }`}
              style={{ left: pill?.left ?? 0, width: pill?.width ?? 0 }}
            />
            {NAV_ITEMS.map((link) => {
              const isCurrent = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onMouseEnter={movePill}
                  onFocus={movePill}
                  className={`relative z-10 px-4 py-2 text-[11px] uppercase tracking-[0.2em] font-medium transition-colors duration-300 ${
                    isCurrent ? "text-accent-soft" : "text-[#B4C0D3] hover:text-white"
                  }`}
                >
                  {link.name}
                  {isCurrent && (
                    <span className="absolute left-1/2 -bottom-0.5 -translate-x-1/2 w-1 h-1 rounded-full bg-accent shadow-[0_0_8px_rgba(174,189,217,0.9)]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-2">
            <a
              href="tel:0741614191"
              className="hidden xl:flex items-center gap-1.5 px-3 text-[11px] font-mono text-[#8C9BB4] hover:text-white transition-colors"
              title="Call CROSA Colombo"
            >
              <Phone className="w-3.5 h-3.5 text-accent" />
              074 161 4191
            </a>

            <a
              href={getWhatsAppUrl("Hello CROSA, I would like to inquire about your pain relief and rehabilitation services.")}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#25D366]/50 flex items-center justify-center transition-all duration-300"
              title="Chat with Clinic Reception on WhatsApp"
              aria-label="WhatsApp Reception"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" fill="#25D366" />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
            </a>

            <a
              href={getWhatsAppUrl("Hello CROSA, I would like to book a consultation at your clinic.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 pl-5 pr-1.5 h-10 rounded-full overflow-hidden text-[11px] uppercase tracking-[0.18em] font-semibold bg-gradient-to-r from-accent via-white to-accent bg-[length:200%_100%] hover:bg-[position:100%_0] text-[#060D1A] transition-all duration-500 shadow-[0_4px_20px_rgba(174,189,217,0.3)] hover:shadow-[0_6px_28px_rgba(174,189,217,0.55)]"
            >
              <span>Book</span>
              <span className="w-7 h-7 rounded-full surface-dark bg-[#060D1A] flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-accent-soft group-hover:rotate-45 transition-transform duration-300" />
              </span>
            </a>
          </div>

          {/* Mobile actions */}
          <div className="flex items-center sm:hidden gap-2">
            <a
              href={getWhatsAppUrl("Hello CROSA, I would like to inquire about your pain relief and rehabilitation services.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" fill="#25D366" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-accent text-[#060D1A] focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Scroll progress */}
          <span
            aria-hidden
            className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-accent to-white"
            style={{ transform: `scaleX(${progress})` }}
          />
        </div>
      </header>

      {/* Luxury Deep Obsidian Mobile Drawer with Ambient Gold Particles */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 surface-dark bg-[#060D1A]/98 backdrop-blur-2xl px-8 pt-28 pb-10 flex flex-col justify-between overflow-y-auto animate-in fade-in duration-300 sm:hidden">
          {/* Ambient Particles in Mobile Menu */}
          <AmbientGoldParticles density={25} speed={0.3} colorScheme="gold" />

          <div className="space-y-8 relative z-10">
            <div className="flex items-center justify-between pb-4 border-b border-[#1C2E50] text-xs text-[#8C9BB4]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="uppercase tracking-[0.25em] text-accent-soft font-medium">Pain & Rehabilitation Center</span>
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
                  <span className="font-serif text-3xl text-white font-light group-hover:text-accent-soft transition-colors">
                    {link.name}
                  </span>
                  <span className="text-xs text-accent font-mono tracking-widest">
                    {link.number}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          <div className="pt-8 space-y-5 border-t border-[#1C2E50] relative z-10">
            <div className="text-xs text-[#8C9BB4] space-y-1">
              <p className="uppercase tracking-widest text-accent-soft font-semibold">{BRAND_INFO.name} Colombo</p>
              <p>{BRAND_INFO.address.full}</p>
              <p className="text-white pt-1">Direct: {BRAND_INFO.phoneDisplay}</p>
            </div>

            <div className="flex flex-col gap-3 pt-2">
              <a
                href={getWhatsAppUrl("Hello CROSA, I would like to book a consultation.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-accent hover:bg-accent-soft text-[#060D1A] text-xs font-semibold uppercase tracking-[0.2em] transition-all shadow-md"
              >
                <span>Book Your Experience</span>
                <ArrowUpRight className="w-4 h-4 text-[#060D1A]" />
              </a>

              <a
                href={getWhatsAppUrl("Hello CROSA, I have a quick question.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-3 rounded-full surface-dark bg-[#112038] text-white border border-[#1C2E50] text-xs font-medium uppercase tracking-[0.2em] transition-colors"
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
