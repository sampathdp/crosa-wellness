import React from "react";

type LogoProps = {
  size?: "sm" | "lg";
  className?: string;
};

/** Wordmark: CR[O]SA — the O is a ring with a rising dot (movement / recovery). */
export default function Logo({ size = "sm", className = "" }: LogoProps) {
  const lg = size === "lg";
  const letters = `font-sans font-semibold uppercase leading-none text-white group-hover:text-accent-soft transition-colors duration-300 ${
    lg ? "text-4xl sm:text-5xl" : "text-[22px]"
  }`;
  const ring = lg ? "w-[0.82em] h-[0.82em] border-[0.09em]" : "w-[0.82em] h-[0.82em] border-[0.1em]";

  return (
    <span
      aria-label="CROSA"
      role="img"
      className={`inline-flex items-center ${letters} ${lg ? "gap-[0.16em]" : "gap-[0.14em]"} ${className}`}
    >
      <span aria-hidden>C</span>
      <span aria-hidden>R</span>
      <span
        aria-hidden
        className={`relative inline-block rounded-full border-solid border-accent-soft ${ring} shadow-[0_0_14px_rgba(174,189,217,0.45)]`}
      >
        <span className="absolute top-[8%] right-[8%] w-[0.2em] h-[0.2em] rounded-full bg-accent-soft shadow-[0_0_8px_rgba(228,234,245,0.9)]" />
      </span>
      <span aria-hidden>S</span>
      <span aria-hidden>A</span>
    </span>
  );
}
