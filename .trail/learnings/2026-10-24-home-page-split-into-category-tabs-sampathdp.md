---
title: Home page split into category tabs (HomeTabs)
author: Sampathdp
date: 2026-10-24
branch: master
cost: { minutes: 2, tokens: 55679 }
touches:
  - src/app/page.tsx
  - src/components/HomeTabs.tsx
---

## Decided
Home page sections grouped into tabs via client component src/components/HomeTabs.tsx; page.tsx stays a server component and passes each tab's content as ReactNode. Tabs: Conditions (default), About, Services, Experience (experience+methodology+principles+journey), Reviews, FAQ, Location. Hero, SpecialPackageBanner and final CTA stay outside tabs. Only the active panel renders, so the map iframe loads lazily.
Location tab is new on home (map/address/hours were only on /contact), reusing BRAND_INFO.

## Tried and ruled out
Sticky tab bar: Navbar is a floating fixed pill (~80px), so sticky risks overlap. Used scroll-mt-24 + scrollIntoView on select instead.

## Watch out
Hero link href="#conditions" only works while the Conditions tab is active (it is the default). Tab state resets on switch because inactive panels unmount.
