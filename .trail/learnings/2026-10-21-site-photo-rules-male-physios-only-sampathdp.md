---
title: "Site photo rules: male physios only, no spa imagery; cupping service"
author: Sampathdp
date: 2026-10-21
branch: master
cost: { minutes: 2, tokens: 97063 }
touches:
  - src/app/about/page.tsx
  - src/app/contact/page.tsx
  - src/app/page.tsx
  - src/components/ExperienceShowcase.tsx
  - src/components/HeroBgCarousel.tsx
  - src/components/MethodologySection.tsx
  - src/components/PrinciplesSection.tsx
  - src/components/WellnessJourneySection.tsx
  - src/components/services/ServicesView.tsx
  - src/lib/constants.ts
---

## Decided
- Client rule: all physiotherapists are male, so photos must show men only. No spa or Ayurvedic imagery; physiotherapy-only visuals.
- Cupping Therapy is a separate service (id cupping-therapy in src/lib/constants.ts). Diabetes & Cholesterol package lives in the special-package section of src/components/services/ServicesView.tsx.
- Only conditions/knee-pain.jpg (male physio) and fitness.jpg (dumbbells) qualify, so all image slots use those two until real photos arrive.

## Tried and ruled out
- Other photos in public/images/conditions show female therapists; all hero/, methodology/, journey/, intro/ images are spa style. Not used.
- Did not download stock photos: licence and gender unverifiable.

## Watch out
- Image paths are scattered: constants.ts, page.tsx, HeroBgCarousel, ExperienceShowcase, MethodologySection, WellnessJourneySection, about, contact, PrinciplesSection.
- Wellness & Recovery copy still mentions thermal basalt (spa-like); awaiting client decision.
