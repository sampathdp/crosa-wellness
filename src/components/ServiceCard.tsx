import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";
import WhatsAppIcon from "./WhatsAppIcon";

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription?: string;
  benefits: string[];
  image: string;
  whatsappMessage: string;
  badge?: string;
}

interface ServiceCardProps {
  service: ServiceItem;
  variant?: "preview" | "detailed";
  index?: number;
}

export default function ServiceCard({ service, variant = "preview", index }: ServiceCardProps) {
  const isPreview = variant === "preview";

  return (
    <article
      id={service.id}
      className="group relative flex flex-col bg-white rounded-3xl overflow-hidden border border-line shadow-[0_2px_12px_rgba(11,21,40,0.05)] hover:-translate-y-1.5 hover:shadow-[0_28px_60px_-20px_rgba(11,21,40,0.35)] hover:border-accent/40 transition-all duration-500 ease-out"
    >
      {/* Image Container */}
      <div className="relative h-64 sm:h-72 w-full overflow-hidden surface-dark bg-[#0B1528]">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-110 transition-transform duration-[1200ms] ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060D1A]/90 via-[#060D1A]/20 to-transparent" />

        {service.badge && (
          <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-semibold tracking-[0.18em] uppercase surface-dark bg-[#0B1528]/70 text-accent-soft backdrop-blur-md border border-white/15">
            {service.badge}
          </span>
        )}

        {index !== undefined && (
          <span className="absolute top-3 right-5 font-serif text-5xl font-light text-white/30 leading-none select-none">
            {String(index).padStart(2, "0")}
          </span>
        )}

        {/* Title over image */}
        <div className="absolute inset-x-0 bottom-0 p-6 sm:px-8">
          <span className="block w-8 h-px bg-accent mb-3 group-hover:w-16 transition-all duration-500" />
          <h3 className="font-serif text-3xl sm:text-[2rem] text-white font-normal leading-tight">
            {service.title}
          </h3>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col gap-6">
        <p className="text-sm text-[#5E6977] leading-relaxed">
          {isPreview ? service.shortDescription : service.fullDescription || service.shortDescription}
        </p>

        {/* Benefits List */}
        <div className="rounded-2xl bg-[#FAF8F2] border border-line/70 p-5">
          <h4 className="text-[10px] uppercase tracking-[0.25em] text-accent font-bold mb-3">
            Key Highlights
          </h4>
          <ul className="space-y-2.5 text-xs text-[#3B4755]">
            {(isPreview ? service.benefits.slice(0, 3) : service.benefits).map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="grid place-items-center w-4 h-4 rounded-full bg-accent text-white shrink-0 mt-px">
                  <Check className="w-2.5 h-2.5" strokeWidth={3} />
                </span>
                <span className="leading-snug">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card Action Buttons */}
        <div className="mt-auto pt-2 flex flex-col sm:flex-row items-center gap-3">
          <a
            href={getWhatsAppUrl(service.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-sm"
          >
            <WhatsAppIcon className="w-4 h-4" fill="white" />
            <span>Enquire on WhatsApp</span>
          </a>

          {isPreview && (
            <Link
              href={`/services#${service.id}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl border border-accent-soft text-[#0B1528] hover:bg-[#FAF8F2] text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              <span>Details</span>
              <ArrowRight className="w-3.5 h-3.5 text-accent group-hover:translate-x-0.5 transition-transform" />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
