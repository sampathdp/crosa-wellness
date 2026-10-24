"use client";

import React, { useRef, useState } from "react";

export interface HomeTab {
  id: string;
  label: string;
  content: React.ReactNode;
}

export default function HomeTabs({ tabs }: { tabs: HomeTab[] }) {
  const [activeId, setActiveId] = useState(tabs[0].id);
  const barRef = useRef<HTMLDivElement>(null);
  const active = tabs.find((t) => t.id === activeId) ?? tabs[0];

  const select = (id: string) => {
    setActiveId(id);
    barRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div>
      <div
        ref={barRef}
        className="scroll-mt-24 bg-[#FAF8F2] border-b border-line"
      >
        <div
          role="tablist"
          aria-label="Explore CROSA"
          className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-5 flex gap-2 overflow-x-auto no-scrollbar sm:justify-center"
        >
          {tabs.map((tab) => {
            const selected = tab.id === active.id;
            return (
              <button
                key={tab.id}
                id={`home-tab-${tab.id}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={`home-panel-${tab.id}`}
                onClick={() => select(tab.id)}
                className={`shrink-0 px-5 py-2.5 rounded-full border text-[11px] uppercase tracking-[0.2em] font-medium transition-all duration-300 ${
                  selected
                    ? "surface-dark bg-[#0B1528] border-[#0B1528] text-white shadow-md"
                    : "border-line text-[#5E6977] hover:border-[#0B1528] hover:text-[#0B1528]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      <div
        key={active.id}
        id={`home-panel-${active.id}`}
        role="tabpanel"
        aria-labelledby={`home-tab-${active.id}`}
      >
        {active.content}
      </div>
    </div>
  );
}
