---
title: "Opening hours now 24/7 every day: where hours live"
author: Sampathdp
date: 2026-10-25
branch: master
cost: { minutes: 1, tokens: 28667 }
touches:
  - src/app/layout.tsx
  - src/app/page.tsx
  - src/components/Footer.tsx
  - src/components/HomeFaq.tsx
  - src/lib/constants.ts
---

## Decided
Business hours changed to open every day, 24/7. Single source: BRAND_INFO.hours in src/lib/constants.ts (used by contact page and home contact card). JSON-LD openingHoursSpecification in src/app/layout.tsx now one entry, all 7 days, 00:00-23:59.

## Tried and ruled out
Nothing ruled out. Did not run build or view the site.

## Watch out
Hours are also hardcoded (not from constants) in Footer.tsx, app/page.tsx (hero line + "Open daily" stat tile), and HomeFaq.tsx. Grep for "AM"/"Mon" when hours change again.
