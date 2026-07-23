"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const motionQueries = {
  noPreference: "(prefers-reduced-motion: no-preference)",
  desktop:
    "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
  timelineDesktop:
    "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
  timelineMobile:
    "(max-width: 767px) and (prefers-reduced-motion: no-preference)",
} as const;

export const motionDurations = {
  enter: 0.72,
  reveal: 0.56,
} as const;

export const gsapEases = {
  enter: "power2.out",
  reveal: "power2.out",
} as const;

export { gsap, useGSAP };
