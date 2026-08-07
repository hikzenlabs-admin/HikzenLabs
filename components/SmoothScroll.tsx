'use client'

import { useEffect } from 'react'
import { initSmoothScroll } from '@/lib/gsap'

// Mounted once in the root layout. Renders nothing — just bootstraps Lenis.
export default function SmoothScroll() {
  useEffect(() => initSmoothScroll(), [])
  return null
}
