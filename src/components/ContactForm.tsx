"use client";

import React, { useState } from "react";
import { CheckCircle, Send, ArrowRight } from "lucide-react";
import { BRAND_INFO, SERVICES } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/utils";
import WhatsAppIcon from "./WhatsAppIcon";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "General Inquiry",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Please enter your name";
    if (!formData.phone.trim() && !formData.email.trim()) {
      errs.contact = "Please provide either a phone number or email address";
    }
    if (!formData.message.trim()) errs.message = "Please write a brief message or question";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);

    // Prepare WhatsApp inquiry text from form data
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 400);
  };

  const formattedWhatsAppText = `Hello CROSA,
My Name: ${formData.name}
Phone: ${formData.phone || "Not provided"}
Email: ${formData.email || "Not provided"}
Service of Interest: ${formData.service}
Message: ${formData.message}`;

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "General Inquiry",
      message: "",
    });
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-[#E8DEC8]">
      {submitted ? (
        <div className="text-center py-8 space-y-5 animate-in fade-in zoom-in-95 duration-200">
          <div className="w-16 h-16 bg-[#F4EBD8] text-[#C5A059] rounded-full flex items-center justify-center mx-auto border border-[#DFCCA3]">
            <CheckCircle className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <h3 className="font-serif text-2xl text-[#0B1528] font-semibold">
              Thank You, {formData.name}
            </h3>
            <p className="text-sm text-[#5E6977] max-w-md mx-auto">
              Your message has been captured. For the fastest response, you can immediately send your inquiry straight to our front desk on WhatsApp.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={getWhatsAppUrl(formattedWhatsAppText)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-semibold uppercase tracking-wider transition-all shadow-md"
            >
              <WhatsAppIcon className="w-4 h-4" fill="white" />
              <span>Forward to WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={resetForm}
              className="w-full sm:w-auto text-xs text-[#5E6977] hover:text-[#0B1528] underline py-2"
            >
              Send Another Message
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <div className="space-y-1">
            <h3 className="font-serif text-2xl text-[#0B1528]">Send a Message</h3>
            <p className="text-xs text-[#5E6977]">
              Fill out the details below, or reach us directly on WhatsApp at{" "}
              <span className="font-semibold text-[#0B1528]">{BRAND_INFO.phoneDisplay}</span>.
            </p>
          </div>

          {errors.contact && (
            <div className="p-3 bg-amber-50 border border-amber-200 text-amber-800 text-xs rounded-lg">
              {errors.contact}
            </div>
          )}

          {/* Full Name */}
          <div className="space-y-1.5">
            <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-[#0B1528]">
              Your Name *
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Priyantha Silva"
              className={`w-full px-4 py-3 rounded-lg border text-sm text-[#0B1528] placeholder-[#8C9BB4] focus:outline-none focus:ring-2 focus:ring-[#C5A059] transition-colors ${
                errors.name ? "border-red-400 bg-red-50/20" : "border-[#EBE3D5] bg-[#FAF8F2]"
              }`}
            />
            {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
          </div>

          {/* Contact Fields (Phone & Email) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-[#0B1528]">
                Phone / WhatsApp Number
              </label>
              <input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="e.g. 077 123 4567"
                className="w-full px-4 py-3 rounded-lg border border-[#EBE3D5] bg-[#FAF8F2] text-sm text-[#0B1528] placeholder-[#8C9BB4] focus:outline-none focus:ring-2 focus:ring-[#C5A059] transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#0B1528]">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="e.g. name@example.com"
                className="w-full px-4 py-3 rounded-lg border border-[#EBE3D5] bg-[#FAF8F2] text-sm text-[#0B1528] placeholder-[#8C9BB4] focus:outline-none focus:ring-2 focus:ring-[#C5A059] transition-colors"
              />
            </div>
          </div>

          {/* Service Dropdown */}
          <div className="space-y-1.5">
            <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-[#0B1528]">
              Interested Service
            </label>
            <select
              id="service"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-[#EBE3D5] bg-[#FAF8F2] text-sm text-[#0B1528] focus:outline-none focus:ring-2 focus:ring-[#C5A059] transition-colors"
            >
              <option value="General Inquiry">General Inquiry & Consultation</option>
              {SERVICES.map((s) => (
                <option key={s.id} value={s.title}>
                  {s.title}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div className="space-y-1.5">
            <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#0B1528]">
              Your Message *
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about your fitness or wellness goals, preferred times, or questions..."
              className={`w-full px-4 py-3 rounded-lg border text-sm text-[#0B1528] placeholder-[#8C9BB4] focus:outline-none focus:ring-2 focus:ring-[#C5A059] transition-colors resize-none ${
                errors.message ? "border-red-400 bg-red-50/20" : "border-[#EBE3D5] bg-[#FAF8F2]"
              }`}
            />
            {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
          </div>

          {/* Submit Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg bg-[#0B1528] hover:bg-[#112038] text-white border border-[#C5A059]/30 text-xs font-semibold uppercase tracking-wider transition-all disabled:opacity-50 shadow-sm"
            >
              <Send className="w-4 h-4 text-[#DFCCA3]" />
              <span>{loading ? "Preparing..." : "Send Message"}</span>
            </button>

            <a
              href={getWhatsAppUrl("Hello CROSA, I would like to make an inquiry via WhatsApp.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-sm"
            >
              <WhatsAppIcon className="w-4 h-4" fill="white" />
              <span>Quick WhatsApp</span>
            </a>
          </div>
        </form>
      )}
    </div>
  );
}
