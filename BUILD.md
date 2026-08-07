# BUILD.md — HikzenLabs

Technical build specification. Read alongside `COPY.md`, which holds all page text.
Both files live in the repo root and are the source of truth. Where this file and your instincts disagree, this file wins.

**Domain:** hikzenlabs.com
**Pages:** `/` (local businesses) · `/engineering` (agencies and product teams)

---

## 1. Locked decisions

- Prices are published as "from" figures. Website floor is **₹25,000**.
- Prices appear in **one** Pricing section only — never inside the Services blocks.
- Automation is a sub-line under Websites & apps. Never a headline, a service block, or a nav item.
- No product or "coming soon" section. Products go on the site the day a product exists.
- The word "solutions" appears nowhere. Neither does "one-stop."

**The site's single job:** make a business owner who has just met Faik or Rashid feel confident enough to send a WhatsApp message. Everything else is secondary.

---

## 2. Stack

| | |
|---|---|
| Framework | Next.js 15, App Router, TypeScript |
| Styling | Tailwind CSS |
| Animation | GSAP + ScrollTrigger. Lenis for smooth scroll. Nothing else. |
| Content | Typed objects in `content/site.ts`. No CMS. |
| Hosting | Vercel |
| Forms | None — WhatsApp deep links on `/`, mailto and Cal.com on `/engineering` |

**Explicitly rejected:** Three.js (no 3D content — a WebGL canvas to show two flat documents is dead weight), Rive (needs an authoring workflow that doesn't exist here), Taxi.js (fights the Next router), any CMS (four content edits a year doesn't justify it), any component library.

---

## 3. Repo structure

```
app/
  layout.tsx
  page.tsx
  engineering/page.tsx
  opengraph-image.tsx
components/
  Nav.tsx  Hero.tsx  Showcase.tsx  Work.tsx  Services.tsx
  Pricing.tsx  Process.tsx  About.tsx  CTA.tsx  Footer.tsx
  engineering/  Capabilities.tsx  HowWeWork.tsx  Team.tsx
lib/
  gsap.ts          # registers plugins once, exports helpers
content/
  site.ts          # ALL copy and asset paths
public/
  work/showcase/   # before/after assets
  work/projects/   # project images
  team/            # founder photos
```

---

## 4. Content architecture

Every string and every asset path lives in `content/site.ts` as typed exports. No copy hardcoded in components. This is what makes the site editable later without touching JSX.

```ts
// content/site.ts

export interface ShowcaseAsset {
  src: string
  alt: string
  width: number
  height: number
}

export const showcase = {
  eyebrow: 'The difference',
  heading: 'Most itineraries look like this.',
  before: {
    src: '/work/showcase/before.webp',
    alt: 'A plain word-processor itinerary, unformatted',
    width: 1200, height: 1600,
  } satisfies ShowcaseAsset,
  after: {
    src: '/work/showcase/after.webp',
    alt: 'The same itinerary, redesigned',
    width: 1200, height: 1600,
  } satisfies ShowcaseAsset,
  pages: [
    { src: '/work/showcase/page-02.webp', alt: 'Day-by-day spread', width: 1200, height: 1600 },
    { src: '/work/showcase/page-03.webp', alt: 'Inclusions page',   width: 1200, height: 1600 },
    { src: '/work/showcase/page-04.webp', alt: 'Pricing page',      width: 1200, height: 1600 },
  ],
  caption: 'Itinerary design for [client name].',
}
```

**Asset replacement contract.** Showcase images are **1200 × 1600px, WebP, under 200KB each**, at those exact filenames. Replacing the showcase later is a file drop into `public/work/showcase/` — no code change. If dimensions ever change, update `width`/`height` in `site.ts` and nothing else.

Write `public/work/showcase/README.txt` stating those requirements, so this is still true in six months.

---

## 5. Design tokens

Drawn from Kashmiri *naqashi* lacquerwork — lapis and gold on a bone ground. Chosen partly because it is specific to this market, and partly to avoid the cream-and-terracotta palette that every AI-assisted agency site currently arrives at.

```css
--paper:    #FBFAF6;
--paper-2:  #F2EFE7;
--ink:      #141917;
--ink-soft: #5A615C;
--lapis:    #1B3B6F;
--saffron:  #C8891C;
--line:     #DFD9CC;
```

Lapis carries every interactive element — links, buttons, the wipe seam, focus rings. Saffron appears **no more than four times per page**: the hero underline and the active nav state. If saffron is doing more work than that, it has stopped being an accent.

## 6. Typography

| Role | Face | Usage |
|---|---|---|
| Display | Bricolage Grotesque (variable) | Headings, weight 600, tracking −0.02em above 40px |
| Body | Newsreader | Paragraphs, 18px, line-height 1.65 |
| Utility | JetBrains Mono | Eyebrows, labels, stack line — **`/engineering` only** |

Load via `next/font/google`, `display: 'swap'`, latin subset.

The sans-display / serif-body inversion is deliberate — it reads as a studio choice rather than a template. The mono appearing only on `/engineering` marks the audience shift without needing a second visual identity.

**Scale (desktop):** 60 / 40 / 28 / 20 / 18 / 14
**Scale (mobile):** 38 / 28 / 22 / 18 / 16 / 13

## 7. Layout

- Container max-width 1180px. Side padding 24px mobile, 48px desktop.
- Sections separated by whitespace and 1px `--line` hairlines. **No cards, no shadows, no borders around content blocks.**
- Work items alternate image-left / image-right. Images occupy 60% minimum of the column.
- Border radius 4px maximum. Buttons are solid lapis, white text, no gradient.
- Alternate `--paper` and `--paper-2` between major sections for rhythm.

---

## 8. Signature moment — the before/after showcase

This is the one place boldness gets spent. Everything else stays quiet.

### Desktop (≥768px)

```
ScrollTrigger:
  trigger: section
  start: 'top top'
  end: '+=180%'
  pin: true
  scrub: 1
```

Two images stacked absolutely, identical dimensions. `after` sits on top.

| Progress | Behaviour |
|---|---|
| 0 → 0.55 | `after` clip-path animates `inset(0 100% 0 0)` → `inset(0 0 0 0)`. A 2px lapis seam tracks the wipe edge. |
| 0 → 0.15 | "Before" label fades out |
| 0.45 → 0.60 | "After" label fades in |
| 0.65 → 1.0 | Three `pages` thumbnails fan out below — y 40 → 0, opacity 0 → 1, stagger 0.08 |

The seam is a single absolutely-positioned div whose `left` is driven by the same progress value. Animate **clip-path only** — never `width` or `left` on the images themselves — so the work stays on the compositor.

### Mobile (<768px)

**No pin, no scrub.** Pinned scroll-scrub on phones is the most common way to make a page feel broken. Replace with a draggable divider using pointer events, defaulting to 50%, with a visible handle. The three `pages` become a horizontal scroll strip.

Construct via `gsap.matchMedia()` so the desktop timeline never exists on mobile.

### Motion everywhere else

One rule for the entire rest of the site: sections fade up 12px on entering view, 400ms, 60ms stagger. Nothing more. Scattered animation is the clearest tell of a generated site.

`prefers-reduced-motion` means: no pin, no scrub, both images shown side by side statically, no fade-ups.

---

## 9. Performance budget

Non-negotiable — the buyer is on a mid-range Android on Srinagar 4G, and a stuttering page disproves the pitch.

- LCP under 2.5s on 4G
- Total JS under 150KB gzipped. Import GSAP core + ScrollTrigger only, never the full bundle.
- All images WebP through `next/image`. Showcase images get `priority`.
- Lenis is optional. If Lighthouse drops below 90, remove Lenis first.
- Lighthouse 90+ on all four categories, tested under mobile emulation with throttling.

## 10. Accessibility floor

- Visible focus rings, 2px lapis, on every interactive element
- Real alt text on every image, sourced from `site.ts`
- The showcase must be comprehensible with JavaScript disabled — both images visible, stacked
- Verify `--ink-soft` on `--paper-2` clears 4.5:1; it is the risky pair
- Semantic headings, one `h1` per page

## 11. Do not include

Dark mode · gradients · glassmorphism · cards with shadows · stock photography · tech-stack logo grids · a blog · "Our Mission" · testimonials you don't have · stat counters · "coming soon" · emoji · cookie banners you don't need

---

## 12. Page section order

**`/`** — Nav · Hero · **Showcase** · Work · Services · Pricing · Process · About · CTA · Footer

**`/engineering`** — Nav · Hero · Capabilities · How we work · Stack · Team · CTA · Footer

`/engineering` gets no showcase animation, no prices, no rupee figures, no photography section.

---

## 13. Claude Code prompt

Attach this file and `COPY.md`, then:

> Build the HikzenLabs marketing site per the attached BUILD.md. All copy comes from COPY.md and must live in `content/site.ts` as typed exports — no strings hardcoded in components.
>
> Follow BUILD.md exactly on tokens, typography, layout and motion. Do not substitute your own palette or type pairing, and do not add sections outside the specified section order.
>
> Build in this order, stopping after each stage for review:
> 1. Scaffold, fonts, tokens, `content/site.ts`, Nav and Footer
> 2. Homepage static sections — everything except the Showcase
> 3. The Showcase, GSAP ScrollTrigger, desktop and mobile variants via `gsap.matchMedia()`
> 4. `/engineering`
> 5. Metadata, OG image, Lighthouse pass
>
> Hard constraints: no dark mode, no gradients, no glassmorphism, no card-and-shadow layouts, no logo grids, no emoji, 4px maximum border radius. Total JS under 150KB gzipped. Verify at 375px before desktop.
>
> Use placeholder images at the exact specified dimensions so real assets drop in with no layout change.

---

## 14. Steps from here to a professional launch

### Before any code

1. **Email.** `hello@hikzenlabs.com` on Google Workspace or Zoho. A Gmail address in the footer undoes everything else the page is doing.
2. **WhatsApp Business** on a number that isn't your personal one. Set the profile, hours, and greeting message.
3. **Private GitHub repo**, Vercel connected. Push from day one, not at the end.
4. **Founder photographs.** Same background, same light, both of you, shot properly — you sell photography.
5. **Showcase assets** exported at 1200×1600 WebP. The "before" should be a genuine plain-document itinerary, honestly recreated, not a strawman.
6. **Confirm the three projects** and get written permission to name each client.

### While building

7. Mobile-first. Check 375px at every step, not at the end.
8. Commit per section. Use deploy previews from day one so you're always looking at the real thing on a real phone.
9. Test the WhatsApp deep link on an actual Android device — `wa.me` behaves differently inside some in-app browsers.

### Before launch

10. **Metadata and OG image** on both pages. You'll paste this link into WhatsApp constantly; a broken preview costs you more here than anywhere else.
11. **Lighthouse under mobile emulation**, throttled. Fix anything below 90.
12. **Read every line of copy aloud.** Anything you wouldn't say in a room, cut.
13. **Show it to one travel agency owner before launch.** Not a developer. Ask what they think you do — if the answer isn't close to your positioning line, the page has failed and polish won't fix it.

### After launch

14. Plausible or Vercel Analytics. Not Google Analytics — you don't need a cookie banner for the three numbers you'll actually check.
15. Google Business Profile for HikzenLabs, Srinagar. Free, and it's how local searches find you.
16. Update the Work section every time you ship. A site whose newest project is four months old reads as a closed business.

**Cap this at four days.** It will not feel finished. Ship it anyway — the site only becomes genuinely good once there are five case studies in it, and you cannot get those from behind a keyboard.
