# HikzenLabs — Website Copy & Build Spec

Prepared for Faik Aijaz & Rashid Geelani · hikzenlabs.com

---

## 0. Positioning

**One line, internal:** We make Kashmir's travel, craft and food businesses look world-class online — and we take on engineering work for product teams anywhere.

**Two audiences, two front doors:**

| Page | Audience | How they arrive | CTA |
|---|---|---|---|
| `/` | Travel operators, craft houses, food & retail brands in Kashmir | Referral, Instagram, walking in | WhatsApp |
| `/engineering` | Agencies, studios, product teams (India + international) | You send the link. Cold email, Upwork, LinkedIn | Email + Calendly |

Nobody browses their way to `/engineering`. You paste it into outbound. That's why the homepage doesn't have to serve both.

---

# PAGE 1 — HOMEPAGE (`/`)

## Nav

```
HikzenLabs          Work    Services    Pricing    Studio →    [WhatsApp us]
```

`Studio →` links to `/engineering`. The arrow signals "different room."

---

## Hero

> ### We make Kashmir businesses look as good as they are.
>
> Websites, design and photography for travel operators, craft houses and food brands. Built in Srinagar by two people who answer their own phones.
>
> **[Message us on WhatsApp]**  ·  See our work ↓

**Visual:** the before/after. A plain Word-document itinerary on the left, your designed PDF on the right, one slider or one hard split between them. This is your entire pitch in a single image and it needs no explanation. If the shot isn't ready, use the itinerary PDF alone, shown large.

---

## Work

> ## Recent work

Three items. Each one gets: a large image, client name, one line on what you did, one line on the outcome if you have it.

**01 — [Travel client name]**
Itinerary and package design. A print-ready template system the team refills for every new departure.

**02 — [Website client name]**
Website design and build. Enquiries now come through a form instead of scattered DMs.

**03 — [Friend/client name]**
Product photography and website. Shot the full range, built the store, launched in three weeks.
*Photography with [her name] →* (links to her portfolio)

> If you only have two ready at launch, run two. An empty third slot looks worse than a short section.

---

## Services

> ## What we do
>
> Most clients start with one thing and come back for the rest.

**Websites & apps**
Sites people trust enough to book from. Booking forms, catalogues, online stores, and the quiet automations behind them — enquiry routing, WhatsApp replies, order alerts.
*From ₹25,000*

**Design**
Itineraries, brochures, catalogues, menus, brand identity. Print-ready, and yours to reuse.
*From ₹3,000*

**Photography & video**
Your products, shot properly. Enough images for your website, your Instagram, and your listings — from one session.
*From ₹15,000*

**Everything, together**
Shoot, build, launch. One team, one timeline, one invoice.
*From ₹55,000*

---

## Process

> ## How it works

**Shoot** — We photograph your products, your space, your work.
**Build** — Website, design, and the systems behind them.
**Launch** — You get the files, the logins, and a walkthrough. Everything is yours.

Three steps, one line each. This section exists to remove fear, not to impress.

---

## About

> ## Two people, Srinagar
>
> HikzenLabs is Faik Aijaz and Rashid Geelani. We're both developers, and between us we handle the design, the build and the shoot.
>
> You won't be passed to an account manager. You'll talk to whoever is doing the work.

**Photos of both of you.** Real ones, not avatars. This section does more for local trust than anything else on the page.

---

## Closing CTA

> ### Tell us what you're working on.
>
> Send a message and we'll come back within a day — usually sooner.
>
> **[WhatsApp us]**  ·  hello@hikzenlabs.com  ·  Srinagar, Kashmir

---

# PAGE 2 — STUDIO / ENGINEERING (`/engineering`)

Different register. No warmth-first framing, no Kashmir-as-lead, no rupee prices. Capability, evidence, availability.

## Hero

> ### Engineering partners for product teams and agencies.
>
> Full-stack development from Srinagar, India. Two senior developers, direct contact, no layers.
>
> **[Book a call]**  ·  hello@hikzenlabs.com

---

## What we take on

**Product engineering**
Web applications end to end. React, Next.js, TypeScript, Postgres. Discovery through deployment.

**White-label delivery**
We build under your brand for your clients. NDA-friendly, your process, your repo, your client relationship.

**Automation & AI integration**
Document generation, data pipelines, LLM-backed internal tools. Things that remove hours from a week.

---

## How we work

**Direct contact.** You talk to the people writing the code.
**Fixed scope or retainer.** Whichever suits the work. Fixed scope for defined builds, retainer for ongoing.
**Overlapping hours.** IST is UTC+5:30 — full working overlap with the Gulf and Europe, and our evenings meet the US East Coast morning.
**Your infrastructure.** Your repos, your cloud, your accounts. We leave when the work is done and take nothing with us.

---

## Stack

Next.js · React · TypeScript · Node · Python · Postgres · Prisma · Tailwind · AWS · Vercel

*Keep this as a plain type-set line, not a wall of logo badges. Logo grids read as padding.*

---

## Who you'd be working with

**Faik Aijaz** — [one line: focus area, e.g. full-stack and AI integration]
**Rashid Geelani** — [one line: focus area]

Named people, one line each, LinkedIn and GitHub links. For an international buyer evaluating a small unknown team, this section is the whole decision.

---

## Closing

> ### Send us the brief.
>
> We'll tell you within a day whether we're the right fit — and if we're not, we'll say so.
>
> **[Book a call]** · hello@hikzenlabs.com

---

# BUILD SPEC

## Stack

**Next.js (App Router) + TypeScript + Tailwind, deployed on Vercel.** No CMS — content lives in `content.ts` as typed objects. You'll edit it four times a year and Claude Code edits it in seconds. A CMS here is a week of work to solve a problem you don't have.

```
app/
  page.tsx              # homepage
  engineering/page.tsx  # studio page
  layout.tsx
components/
  Hero.tsx  Work.tsx  Services.tsx  Process.tsx  About.tsx  CTA.tsx  Nav.tsx  Footer.tsx
content/
  site.ts               # all copy + project data, typed
public/work/            # images
```

Images: Next `<Image>`, WebP, and compress before committing. Photography is your product — a slow-loading gallery undercuts the pitch.

---

## Design tokens

Drawn from Kashmiri *naqashi* — papier-mâché lacquerwork, which is lapis blue and gold on a bone-white ground. It's specific to your market, and it deliberately avoids the cream-and-terracotta palette every AI-built agency site currently lands on.

```css
--paper:    #FBFAF6;  /* page ground, soft bone white */
--paper-2:  #F2EFE7;  /* alternating section bands */
--ink:      #141917;  /* body + headings */
--ink-soft: #5A615C;  /* secondary text */
--lapis:    #1B3B6F;  /* primary accent — links, buttons, rules */
--saffron:  #C8891C;  /* secondary accent — used maybe four times total */
--line:     #DFD9CC;  /* hairlines */
```

Rule: lapis carries every interactive element. Saffron appears rarely enough that it still registers — an underline on the hero, the active nav state, nothing else.

## Type

- **Display:** Bricolage Grotesque (variable) — headings, weight 600, tight tracking at large sizes
- **Body:** Newsreader — paragraphs and project descriptions, 18px, generous leading
- **Utility:** JetBrains Mono — small caps labels, eyebrows, the stack line. **Only on `/engineering`**

Inverting the usual serif-display/sans-body pairing is doing work here: it reads as a studio choice rather than a template. The mono appearing only on the engineering page marks the shift in audience without needing a separate visual identity.

Scale: 60/40/28/20/18/14. On mobile: 38/28/22/18/16/13.

## Layout

- Max width 1180px, generous side padding, sections separated by whitespace not boxes
- Work items alternate image-left / image-right, images large — 60% of column width minimum
- Hairline rules (1px `--line`) between major sections instead of cards or shadows
- Border radius: 4px, or 0. No pill buttons, no soft rounded cards
- Buttons: solid lapis, white text, 4px radius, no gradient

## Motion

One thing only: sections fade up 12px on scroll into view, 400ms, staggered 60ms. Respect `prefers-reduced-motion`. Nothing else. Scattered animation is the clearest tell of a generated site.

## Do not include

Dark mode · gradients · glassmorphism · stock photos · tech-stack logo grids · a blog · "Our Mission" · testimonials you don't have · "coming soon" products · the phrase "one-stop solution" · the word "solutions" anywhere

---

## Claude Code prompt

Paste this as your opening instruction, with this file attached.

> Build a marketing site for HikzenLabs, a two-person design and development studio in Srinagar, Kashmir. Next.js App Router, TypeScript, Tailwind, deployed to Vercel. Two pages: `/` for local travel, craft and food businesses, and `/engineering` for agencies and product teams.
>
> Follow the attached spec exactly — tokens, typography, layout rules and copy are all defined there. Do not substitute your own palette or type pairing.
>
> Critical constraints: no dark mode, no gradients, no glassmorphism, no card-and-shadow layouts, no logo grids, no emoji. Sections are separated by whitespace and 1px hairlines. Border radius is 4px maximum. The only animation is a 12px fade-up on scroll, respecting prefers-reduced-motion.
>
> All copy and project data goes in `content/site.ts` as typed objects, imported by components. No CMS.
>
> Build mobile-first. Verify at 375px before desktop. Visible keyboard focus states throughout.

---

## Before launch

- [ ] `hello@hikzenlabs.com` set up — a Gmail address in the footer undoes the rest of the page
- [ ] WhatsApp Business number, with `wa.me` links carrying a prefilled message
- [ ] Both photographs taken
- [ ] Three work images exported and compressed
- [ ] Prices confirmed, or "from" figures you're happy defending in a room
- [ ] Open graph image so the link previews properly when you send it
- [ ] Test the WhatsApp button on an actual phone

Four days. Then outreach starts, finished or not.
