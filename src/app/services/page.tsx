import React from "react";
import { Metadata } from "next";
import ServicesView from "@/components/services/ServicesView";

export const metadata: Metadata = {
  title: "Sanctuary Services | Movement Coaching, Therapeutic Massage & Wellness",
  description:
    "Explore bespoke fitness movement coaching, anatomical therapeutic massage, and holistic rejuvenation protocols at CROSA, Colombo's premier private sanctuary.",
  keywords: [
    "therapeutic massage colombo",
    "private personal training colombo",
    "deep tissue massage colombo 05",
    "wellness sanctuary sri lanka",
    "sports recovery colombo",
    "crosa wellness services",
  ],
};

export default function ServicesPage() {
  return <ServicesView />;
}
