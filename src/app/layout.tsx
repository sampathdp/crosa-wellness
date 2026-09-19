import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { BRAND_INFO } from "@/lib/constants";

const sansFont = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const serifFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://crosa.lk"),
  title: {
    default: "CROSA | Fitness, Wellness & Therapeutic Massage in Colombo",
    template: "%s | CROSA Colombo",
  },
  description:
    "Discover CROSA in Colombo — a modern destination for fitness training, therapeutic massage and holistic wellness at 283 - 287 Thimbirigasyaya Rd.",
  keywords: [
    "CROSA",
    "wellness Colombo",
    "therapeutic massage Colombo",
    "fitness training Sri Lanka",
    "massage Thimbirigasyaya",
    "personal training Colombo",
    "recovery and massage Colombo",
    "luxury wellness Sri Lanka",
  ],
  authors: [{ name: "CROSA" }],
  openGraph: {
    title: "CROSA | Fitness, Wellness & Therapeutic Massage in Colombo",
    description:
      "Move Better. Feel Better. Live Better. Discover holistic fitness training and therapeutic massage at CROSA.",
    url: "https://crosa.lk",
    siteName: "CROSA",
    locale: "en_LK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CROSA | Fitness, Wellness & Therapeutic Massage in Colombo",
    description: "Holistic wellness, fitness training and therapeutic massage in Colombo.",
  },
  alternates: {
    canonical: "https://crosa.lk",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "name": BRAND_INFO.name,
    "description": BRAND_INFO.description,
    "telephone": BRAND_INFO.phone,
    "email": BRAND_INFO.email,
    "url": `https://${BRAND_INFO.website}`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BRAND_INFO.address.street,
      "addressLocality": BRAND_INFO.address.city,
      "postalCode": BRAND_INFO.address.postalCode,
      "addressCountry": "LK",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 6.892319,
      "longitude": 79.868737,
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "06:00",
        "closes": "20:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "07:00",
        "closes": "18:00",
      },
    ],
    "priceRange": "$$",
  };

  return (
    <html lang="en" className={`${sansFont.variable} ${serifFont.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans min-h-screen flex flex-col bg-[#FAF8F2] text-[#0B1528] antialiased selection:bg-[#0B1528] selection:text-[#DFCCA3]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#C5A059] text-[#0B1528] font-semibold rounded-md shadow-lg"
        >
          Skip to main content
        </a>

        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
