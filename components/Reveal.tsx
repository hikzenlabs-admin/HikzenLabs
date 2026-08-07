'use client'

import { useLayoutEffect, useRef, type ReactNode } from 'react'
import { gsap } from '@/lib/gsap'

interface RevealProps {
  children: ReactNode
  className?: string
}

// Motion everywhere else — BUILD.md §8: direct children fade up 12px on
// entering view, 400ms, staggered 60ms. The one rule for the rest of the
// site. Skipped entirely under prefers-reduced-motion.
export default function Reveal({ children, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return

    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const targets = gsap.utils.toArray<HTMLElement>(el.children)
      gsap.set(targets, { opacity: 0, y: 12 })
      const tween = gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.06,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once: true,
        },
      })

      return () => {
        tween.scrollTrigger?.kill()
        tween.kill()
      }
    })

    return () => mm.revert()
  }, [])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
