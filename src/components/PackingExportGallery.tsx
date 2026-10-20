"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ZoomIn, PackageCheck, Ship, Box, Layers } from "lucide-react";

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export const EXPORT_GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "cinnamon-bales",
    title: "Ceylon Cinnamon Bales & Quills",
    category: "Harvest & Packing",
    image: "/images/export/cinnamon-bales.jpg",
    description:
      "Hand-rolled pure Ceylon cinnamon quills bundled with natural twine and packed in export-grade cartons and traditional jute bales.",
  },
  {
    id: "container-boxes",
    title: "Containerized Export Cartons",
    category: "Container Loading",
    image: "/images/export/container-boxes.jpg",
    description:
      "Precision palletized export cartons stacked to container ceiling with heavy-duty strapping and shrink-wrap protection.",
  },
  {
    id: "export-sacks",
    title: "Agricultural Sacks Freight Stacking",
    category: "Bulk Packaging",
    image: "/images/export/export-sacks.jpg",
    description:
      "Heavy-duty woven polypropylene bags stacked securely inside ocean freight containers with cargo lashings for long transit.",
  },
  {
    id: "port-logistics",
    title: "Port Terminal & Maritime Dispatch",
    category: "Global Export",
    image: "/images/export/port-logistics.jpg",
    description:
      "Deep-water port terminal container crane operations loading cargo vessels for international ocean freight distribution.",
  },
];

interface PackingExportGalleryProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function PackingExportGallery({
  title = "Packing & Export",
  subtitle = "International standard packaging, rigorous quality inspection, and seamless ocean freight dispatch.",
  className = "",
}: PackingExportGalleryProps) {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const activeItem = selectedIdx !== null ? EXPORT_GALLERY_ITEMS[selectedIdx] : null;

  return (
    <section className={`w-full py-16 sm:py-24 bg-[#FAF8F2] text-[#0B1528] ${className}`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-px bg-accent" />
            <p className="text-xs uppercase tracking-[0.3em] font-semibold text-accent">
              Quality &amp; Logistics
            </p>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-[1.1]">
            {title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#5E6977] font-light leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* 4-Item Collage Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {EXPORT_GALLERY_ITEMS.map((item, idx) => {
            const isLast = idx === EXPORT_GALLERY_ITEMS.length - 1;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedIdx(idx)}
                className="group relative aspect-square sm:aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer bg-[#0B1528] border border-line shadow-md hover:shadow-2xl transition-all duration-500"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Gradient scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060D1A]/90 via-[#060D1A]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Category Pill */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                    {idx === 0 && <Box className="w-3 h-3 text-accent" />}
                    {idx === 1 && <Layers className="w-3 h-3 text-accent" />}
                    {idx === 2 && <PackageCheck className="w-3 h-3 text-accent" />}
                    {idx === 3 && <Ship className="w-3 h-3 text-accent" />}
                    {item.category}
                  </span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 z-10 flex items-end justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-lg sm:text-2xl text-white font-normal leading-tight group-hover:text-accent-soft transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-white/75 font-light mt-1 line-clamp-1">
                      {item.description}
                    </p>
                  </div>

                  {isLast ? (
                    <div className="shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-accent text-[#0B1528] font-semibold text-xs tracking-wider shadow-lg">
                      <ZoomIn className="w-4 h-4" />
                      <span>View</span>
                    </div>
                  ) : (
                    <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        {activeItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[#060D1A]/85 backdrop-blur-md animate-[fadeIn_0.2s_ease-out]"
            onClick={() => setSelectedIdx(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-[#FAF8F2] rounded-3xl overflow-hidden shadow-2xl border border-line"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedIdx(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#0B1528]/80 text-white hover:bg-[#0B1528] grid place-items-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">
                <div className="relative md:col-span-7 aspect-square md:aspect-auto min-h-[320px] bg-[#0B1528]">
                  <Image
                    src={activeItem.image}
                    alt={activeItem.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#0B1528] text-[10px] font-semibold uppercase tracking-[0.25em] text-accent-soft">
                      {activeItem.category}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#0B1528]">
                      {activeItem.title}
                    </h3>
                    <p className="text-sm text-[#5E6977] leading-relaxed font-light">
                      {activeItem.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-line flex items-center justify-between text-xs">
                    <span className="text-[#8C9BB4] uppercase tracking-wider font-mono">
                      0{selectedIdx! + 1} / 0{EXPORT_GALLERY_ITEMS.length}
                    </span>
                    <div className="flex gap-2">
                      <button
                        onClick={() =>
                          setSelectedIdx(
                            (selectedIdx! - 1 + EXPORT_GALLERY_ITEMS.length) %
                              EXPORT_GALLERY_ITEMS.length
                          )
                        }
                        className="px-3 py-1.5 rounded-lg border border-line hover:border-accent text-[#0B1528] transition-colors"
                      >
                        Prev
                      </button>
                      <button
                        onClick={() =>
                          setSelectedIdx((selectedIdx! + 1) % EXPORT_GALLERY_ITEMS.length)
                        }
                        className="px-3 py-1.5 rounded-lg bg-[#0B1528] text-white hover:bg-accent hover:text-[#0B1528] transition-colors"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
