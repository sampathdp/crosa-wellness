import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  theme = "light",
  className = "",
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={`space-y-3 ${
        align === "center" ? "text-center mx-auto" : "text-left"
      } max-w-3xl ${className}`}
    >
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C5A059]">
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight leading-tight ${
          isDark ? "text-white" : "text-[#0B1528]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base sm:text-lg leading-relaxed ${
            isDark ? "text-[#8C9BB4]" : "text-[#5E6977]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
