import React from "react";
import { Metadata } from "next";
import ServicesView from "@/components/services/ServicesView";

export const metadata: Metadata = {
  title: "Specialised Care for Pain & Movement | CROSA Colombo",
  description:
    "Expert care for back pain, neck pain, shoulder pain, knee pain, sports injuries, and post-injury rehab. Discover CROSA's 5 specialised disciplines in Colombo: Pain Relief, Sports Massage, Rehabilitation, Movement Therapy, and Wellness & Recovery.",
  keywords: [
    "pain relief colombo",
    "back pain treatment colombo",
    "neck pain relief sri lanka",
    "sports massage colombo",
    "rehabilitation colombo",
    "post injury rehab sri lanka",
    "movement therapy colombo",
    "crosa pain management center",
  ],
};

export default function ServicesPage() {
  return <ServicesView />;
}
