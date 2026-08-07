'use client'

import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    num: '01',
    title: 'Websites that book',
    desc: 'Sites people trust enough to book from. Booking forms, catalogues, online stores, and the systems behind them.',
    tag: 'From ₹25,000',
    tagColor: 'text-[#7DD3FC] bg-[#7DD3FC]/10',
    imgBg: 'bg-gradient-to-br from-[#0f172a] to-[#1e293b]',
    imgWeb: true,
  },
  {
    num: '02',
    title: 'Apps & custom software',
    desc: 'Mobile apps and internal tools built for your workflow. No off-the-shelf bloat — exactly what your business needs.',
    tag: 'Custom builds',
    tagColor: 'text-[#7DD3FC] bg-[#7DD3FC]/10',
    imgBg: 'bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f172a]',
    imgPattern: true,
  },
  {
    num: '03',
    title: 'AI integration',
    desc: 'Chatbots, smart enquiry routing, auto-replies, and content tools. AI that actually saves you time, not creates more work.',
    tag: 'Smart features',
    tagColor: 'text-[#A78BFA] bg-[#A78BFA]/10',
    imgBg: 'bg-gradient-to-b from-[#1e1b4b] to-[#0f172a]',
    imgAi: true,
  },
  {
    num: '04',
    title: 'Travel itineraries & print',
    desc: 'The document system: itineraries, proposals, voucher packs, and Instagram carousels — branded templates your team refills.',
    tag: 'From ₹3,000',
    tagColor: 'text-[#FB923C] bg-[#FB923C]/10',
    imgBg: 'bg-gradient-to-b from-[#2a1810] to-[#1a0f08]',
    imgSaffron: true,
  },
  {
    num: '05',
    title: 'UI/UX & product design',
    desc: 'Interfaces that don\'t need a manual. Design systems, dashboards, and brand identity that holds together across every touchpoint.',
    tag: 'Design systems',
    tagColor: 'text-[#7DD3FC] bg-[#7DD3FC]/10',
    imgBg: 'bg-gradient-to-br from-[#0f172a] to-[#1e293b]',
    imgUi: true,
  },
  {
    num: '06',
    title: 'Product photography',
    desc: 'Products, spaces, and process — shot properly. Enough images for your website, Instagram, and listings from one session.',
    tag: 'From ₹15,000',
    tagColor: 'text-[#FB923C] bg-[#FB923C]/10',
    imgBg: 'bg-gradient-to-br from-[#2d1f16] to-[#1a120e]',
    imgWalnut: true,
  },
  {
    num: '07',
    title: 'Backend & infrastructure',
    desc: 'Databases, APIs, payment gateways, and hosting. The parts users never see but your business can\'t run without.',
    tag: 'Backend',
    tagColor: 'text-[#34D399] bg-[#34D399]/10',
    imgBg: 'bg-gradient-to-b from-[#064e3b] to-[#0f172a]',
    imgBackend: true,
  },
  {
    num: '08',
    title: 'AI & automations',
    desc: 'Workflows that run while you sleep. Auto-enquiry routing, order alerts, scheduled posts, and follow-ups — no manual work.',
    tag: 'Automate',
    tagColor: 'text-[#A78BFA] bg-[#A78BFA]/10',
    imgBg: 'bg-gradient-to-br from-[#1e1b4b] to-[#0f172a]',
    imgAutomation: true,
  },
  {
    num: '09',
    title: 'Engineering',
    desc: 'Complex problems solved simply. System architecture, performance, security, and the technical decisions that last.',
    tag: 'Engineering',
    tagColor: 'text-[#F472B6] bg-[#F472B6]/10',
    imgBg: 'bg-gradient-to-br from-[#312e81] to-[#0f172a]',
    imgEngineering: true,
  },
  {
    num: '10',
    title: 'Everything, together',
    desc: 'Shoot, build, launch. One team, one timeline, one invoice. Most clients start with one thing and come back for the rest.',
    tag: 'From ₹55,000',
    tagColor: 'text-[#D4A574] bg-[#D4A574]/10',
    imgBg: 'bg-gradient-to-br from-[#2d1f16] via-[#1a120e] to-[#0f172a]',
    imgBundle: true,
  },
]

export default function WhatWeDo() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const section = sectionRef.current
    const track = trackRef.current
    if (!section || !track) return

    const ctx = gsap.context(() => {
      const scrollWidth = track.scrollWidth - window.innerWidth

      gsap.to(track, {
        x: -scrollWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${scrollWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative bg-[#071018]">
      <div className="h-screen flex items-center overflow-hidden">
        {/* Section label */}
        <div className="absolute top-12 left-6 md:left-12 z-10">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
            What we <span className="text-[#7DD3FC]">do</span>
          </h2>
          <p className="text-white/40 text-sm mt-2">
            Ten services. One team. One invoice.
          </p>
        </div>

        {/* Horizontal track */}
        <div
          ref={trackRef}
          className="flex gap-8 pl-6 md:pl-12 pr-[40vw] will-change-transform"
        >
          {services.map((s) => (
            <div
              key={s.num}
              className="flex-shrink-0 w-[320px] md:w-[380px] h-[420px] md:h-[480px] rounded-3xl border border-white/[0.06] bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-8 flex flex-col relative overflow-hidden hover:border-[#7DD3FC]/20 transition-colors duration-300"
            >
              {/* Number */}
              <span className="font-serif text-6xl md:text-7xl font-bold text-[#7DD3FC]/15 leading-none mb-6">
                {s.num}
              </span>

              {/* Image area */}
              <div className={`relative w-full h-44 md:h-48 rounded-xl mb-6 overflow-hidden ${s.imgBg}`}>
                {/* Pashmina weave */}
                {s.imgPattern && (
                  <div className="absolute inset-0 opacity-30" style={{
                    background: `repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(180,140,100,0.15) 10px, rgba(180,140,100,0.15) 11px),
                                 repeating-linear-gradient(0deg, transparent, transparent 14px, rgba(180,140,100,0.1) 14px, rgba(180,140,100,0.1) 15px)`
                  }} />
                )}

                {/* Website frame */}
                {s.imgWeb && (
                  <>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-24 border border-[#7DD3FC]/20 rounded-md bg-[#7DD3FC]/[0.03]" />
                    <div className="absolute top-[42%] left-1/2 -translate-x-1/2 w-20 h-1 bg-[#7DD3FC]/15 rounded-full" />
                  </>
                )}

                {/* Saffron thread */}
                {s.imgSaffron && (
                  <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-0.5 h-[60%] bg-gradient-to-b from-[#FB923C] to-[#92400E] opacity-70" />
                )}

                {/* Walnut */}
                {s.imgWalnut && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-[70px] bg-gradient-to-br from-[#5C4033] to-[#3E2723] rounded-[45%_45%_40%_40%] opacity-60" />
                )}

                {/* AI nodes */}
                {s.imgAi && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-24 h-24">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#A78BFA] rounded-full" />
                      {[0, 60, 120, 180, 240, 300].map((deg) => (
                        <div
                          key={deg}
                          className="absolute top-1/2 left-1/2 w-2 h-2 bg-[#A78BFA]/60 rounded-full"
                          style={{
                            transform: `rotate(${deg}deg) translateX(28px) translateY(-50%)`,
                            transformOrigin: 'center',
                          }}
                        />
                      ))}
                      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="20" fill="none" stroke="#A78BFA" strokeWidth="0.5" />
                        <circle cx="50" cy="50" r="35" fill="none" stroke="#A78BFA" strokeWidth="0.3" />
                      </svg>
                    </div>
                  </div>
                )}

                {/* UI/UX grid */}
                {s.imgUi && (
                  <>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-20 border border-[#7DD3FC]/20 rounded bg-[#7DD3FC]/[0.03]" />
                    <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-16 h-1 bg-[#7DD3FC]/20 rounded-full" />
                    <div className="absolute top-[55%] left-1/2 -translate-x-1/2 w-10 h-1 bg-[#7DD3FC]/10 rounded-full" />
                    <div className="absolute top-[48%] left-[35%] w-2 h-2 bg-[#FB923C]/40 rounded-full" />
                  </>
                )}

                {/* Backend server stack */}
                {s.imgBackend && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-1.5">
                    {[0, 1, 2].map((i) => (
                      <div key={i} className="w-20 h-5 border border-[#34D399]/20 rounded bg-[#34D399]/[0.05] flex items-center px-2 gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#34D399]/40" />
                        <div className="h-px flex-1 bg-[#34D399]/10" />
                      </div>
                    ))}
                  </div>
                )}

                {/* Automation flow */}
                {s.imgAutomation && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3">
                    <div className="w-8 h-8 border border-[#A78BFA]/20 rounded bg-[#A78BFA]/[0.05] flex items-center justify-center text-[#A78BFA]/40 text-xs">In</div>
                    <div className="w-6 h-px bg-[#A78BFA]/20 relative">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-[#A78BFA]/30" />
                    </div>
                    <div className="w-10 h-10 border border-[#A78BFA]/30 rounded bg-[#A78BFA]/10 flex items-center justify-center">
                      <div className="w-4 h-4 border-2 border-[#A78BFA]/40 rounded-full border-t-transparent animate-spin" />
                    </div>
                    <div className="w-6 h-px bg-[#A78BFA]/20 relative">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-[#A78BFA]/30" />
                    </div>
                    <div className="w-8 h-8 border border-[#A78BFA]/20 rounded bg-[#A78BFA]/[0.05] flex items-center justify-center text-[#A78BFA]/40 text-xs">Out</div>
                  </div>
                )}

                {/* Engineering circuit */}
                {s.imgEngineering && (
                  <div className="absolute inset-0 opacity-40">
                    <svg width="100%" height="100%" viewBox="0 0 200 160" preserveAspectRatio="none">
                      <path d="M20,80 L60,80 L60,40 L100,40" fill="none" stroke="#F472B6" strokeWidth="0.8" />
                      <path d="M20,100 L80,100 L80,120 L140,120" fill="none" stroke="#F472B6" strokeWidth="0.8" opacity="0.5" />
                      <circle cx="60" cy="80" r="3" fill="#F472B6" opacity="0.6" />
                      <circle cx="100" cy="40" r="3" fill="#F472B6" opacity="0.6" />
                      <circle cx="80" cy="100" r="3" fill="#F472B6" opacity="0.4" />
                    </svg>
                  </div>
                )}

                {/* Bundle all-in-one */}
                {s.imgBundle && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2">
                    <div className="w-8 h-10 border border-[#D4A574]/20 rounded bg-[#D4A574]/[0.05]" />
                    <div className="w-6 h-px bg-[#D4A574]/20" />
                    <div className="w-10 h-10 border border-[#7DD3FC]/20 rounded-full bg-[#7DD3FC]/[0.03] flex items-center justify-center">
                      <div className="w-3 h-3 bg-[#7DD3FC]/30 rounded-full" />
                    </div>
                    <div className="w-6 h-px bg-[#D4A574]/20" />
                    <div className="w-8 h-8 border border-[#FB923C]/20 rounded bg-[#FB923C]/[0.05] flex items-center justify-center">
                      <div className="w-2 h-2 bg-[#FB923C]/40 rounded-full" />
                    </div>
                  </div>
                )}
              </div>

              {/* Text */}
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-white mb-3">
                {s.title}
              </h3>
              <p className="text-sm md:text-[15px] text-white/50 leading-relaxed flex-1">
                {s.desc}
              </p>

              {/* Tag */}
              <span className={`inline-flex self-start mt-4 px-4 py-1.5 rounded-full text-xs font-medium ${s.tagColor}`}>
                {s.tag}
              </span>
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3 text-xs text-white/30 uppercase tracking-widest animate-pulse">
          <span className="w-6 h-px bg-white/20" />
          Keep scrolling
        </div>
      </div>
    </section>
  )
}