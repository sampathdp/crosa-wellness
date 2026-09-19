import { BRAND_INFO } from "./constants";

export function getWhatsAppUrl(message?: string): string {
  const text = message || "Hello CROSA, I would like to learn more about your services.";
  return `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}
