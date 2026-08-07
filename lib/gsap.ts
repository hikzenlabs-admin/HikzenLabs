// lib/gsap.ts
//
// Registers GSAP plugins once and exports the animation helpers used across
// the site. Import gsap/ScrollTrigger core only — never 'gsap/all' — to keep
// the JS budget in BUILD.md §9.

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export { gsap, ScrollTrigger }

/**
 * Wires Lenis smooth scroll into GSAP's ticker so ScrollTrigger stays in
 * sync. Lenis's own `respectReducedMotion` (on by default) already forces
 * 1:1 native-feeling scroll for prefers-reduced-motion, so no extra check
 * is needed here. Returns a cleanup function.
 */
export function initSmoothScroll() {
  const lenis = new Lenis()

  lenis.on('scroll', ScrollTrigger.update)

  const update = (time: number) => {
    lenis.raf(time * 1000)
  }
  gsap.ticker.add(update)
  gsap.ticker.lagSmoothing(0)

  return () => {
    gsap.ticker.remove(update)
    lenis.destroy()
  }
}
