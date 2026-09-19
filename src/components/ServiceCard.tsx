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
}

export default function ServiceCard({ service, variant = "preview" }: ServiceCardProps) {
  const isPreview = variant === "preview";

  return (
    <article
      id={service.id}
      className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#E8DEC8] shadow-sm hover:shadow-xl transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#0B1528]">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

        {service.badge && (
          <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-[#0B1528]/85 text-[#DFCCA3] backdrop-blur-md border border-[#C5A059]/40">
            {service.badge}
          </span>
        )}
      </div>

      {/* Card Content */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
        <div className="space-y-3">
          <h3 className="font-serif text-2xl sm:text-3xl text-[#0B1528] font-normal group-hover:text-[#C5A059] transition-colors">
            {service.title}
          </h3>

          <p className="text-sm text-[#5E6977] leading-relaxed">
            {isPreview ? service.shortDescription : service.fullDescription || service.shortDescription}
          </p>

          {/* Benefits List */}
          <div className="pt-2">
            <h4 className="text-[11px] uppercase tracking-widest text-[#8C9BB4] font-bold mb-3">
              Key Highlights
            </h4>
            <ul className="space-y-2 text-xs text-[#3B4755]">
              {(isPreview ? service.benefits.slice(0, 3) : service.benefits).map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="p-0.5 rounded-full bg-[#FAF8F2] text-[#C5A059] border border-[#C5A059]/30 shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Card Action Buttons */}
        <div className="pt-4 border-t border-[#EBE3D5] flex flex-col sm:flex-row items-center gap-3">
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
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl border border-[#DFCCA3] text-[#0B1528] hover:bg-[#FAF8F2] text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              <span>Details</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
