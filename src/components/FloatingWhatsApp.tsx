"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import { BRAND_INFO } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/utils";
import WhatsAppIcon from "./WhatsAppIcon";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Quick Tooltip Popup */}
      {showTooltip && (
        <div className="mb-3 max-w-xs bg-[#0B1528] text-white p-4 rounded-xl shadow-2xl border border-[#1C2E50] animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-start justify-between gap-3 mb-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
              <p className="text-xs font-semibold text-[#DFCCA3] uppercase tracking-wider">
                {BRAND_INFO.name} Colombo
              </p>
            </div>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-[#8C9BB4] hover:text-white transition-colors"
              aria-label="Close message"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-xs text-[#DFE7F3] mb-3 leading-relaxed">
            Have questions about our fitness training, therapeutic massage, or wellness sessions? We are ready to assist you.
          </p>
          <a
            href={getWhatsAppUrl("Hello CROSA, I would like to chat about your wellness services.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold transition-colors shadow-sm"
          >
            <WhatsAppIcon className="w-4 h-4" fill="white" />
            <span>Open WhatsApp</span>
          </a>
        </div>
      )}

      {/* Floating Circle Button */}
      <div className="relative group">
        <a
          href={getWhatsAppUrl("Hello CROSA, I would like to enquire about your services.")}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowTooltip(true)}
          className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#20bd5a] hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/50"
          aria-label="Chat with CROSA on WhatsApp"
        >
          <WhatsAppIcon className="w-7 h-7" fill="white" />
          
          {/* Subtle Attention Ping Ring */}
          <span className="absolute -inset-1 rounded-full border-2 border-[#25D366] opacity-30 animate-pulse pointer-events-none" />
        </a>

        {/* Small Tooltip on desktop hover if popup is closed */}
        {!showTooltip && (
          <span className="hidden md:block absolute right-16 top-3 px-3 py-1.5 rounded-md bg-[#0B1528] text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-[#1C2E50] shadow-lg">
            Chat on WhatsApp
          </span>
        )}
      </div>
    </aside>
  );
}
