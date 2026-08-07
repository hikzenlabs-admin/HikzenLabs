# BRAND.md

Brand reference for the HikzenLabs site. Scoped to what the code needs — the full brand guide lives outside the repo.

---

## 1. Palette — monochrome, no accent

```css
--paper:   #FBFAF6;   /* page background */
--paper-2: #F2EFE7;   /* alternating section bands */
--ink:     #141917;   /* text, mark, primary buttons */
--ink-mut: #5A615C;   /* secondary text */
--line:    #DFD9CC;   /* hairlines */
```

There is no accent colour. Nothing in the UI is blue, green, or any hue. If a colour is needed to distinguish something, the answer is scale, weight, or an underline — not a hue.

`#FBFAF6` not `#FFFFFF`: pure white is harsh and makes photography look cold, and photography is the product.
`#141917` not `#000000`: true black reads heavy and slightly unreal on screen.

## 2. Interaction states — the important part

With no accent colour, nothing is inherently "the clickable thing". Signal it with shape:

| Element | Treatment |
|---|---|
| Primary button | Solid `--ink` fill, `--paper` text, 4px radius |
| Primary button hover | Fill lightens to `#2A302C` |
| Secondary button | 1px `--ink` border, transparent fill, `--ink` text |
| Secondary button hover | `--paper-2` fill |
| Inline link | **Underlined**, `--ink`, `text-underline-offset: 3px` |
| Inline link hover | `--ink-mut` |
| Focus ring | 2px solid `--ink`, 2px offset, on every interactive element |

The underline on inline links is not optional. Without colour it is the only reliable signal that text is a link.

## 3. Logo assets

Committed to the repo:

```
public/brand/lockup-horizontal-light.svg   header, light surfaces
public/brand/lockup-horizontal-dark.svg    ink panels, dark footer
public/brand/mark-ink.svg                  small contexts, under 130px
public/brand/mark-paper.svg                small contexts on ink
app/icon.png                               32px favicon
app/apple-icon.png                         180px apple touch icon
```

Next.js picks up `app/icon.png` and `app/apple-icon.png` automatically. No `<link>` tags, no config.

### Rules

- **Inline the header lockup** as JSX rather than `<Image>`, so it renders with no flash and no extra request.
- Minimum widths: horizontal lockup 130px · mark alone 24px. Below 130px use the mark, never a shrunken lockup.
- Clear space around the lockup: the height of the `H` on all four sides.
- Never re-set the wordmark in a live font. The files are outlined; the tracking is part of the design.
- Never stretch, rotate, recolour, or add shadows.

### Optical note

The ح sits slightly taller than the wordmark's cap height. This is correct — Arabic letterforms need extra optical height beside Latin capitals. Do not scale the mark down to match cap height; it will look undersized.

## 4. What the mark means

ح is the first letter of *hikmat* (حكمة), wisdom — the root of "Hikzen". Useful for the about section and for anyone asking.

## 5. Typography

Unchanged from BUILD.md: Bricolage Grotesque for display, Newsreader for body. Emphasis comes from scale and weight only — never colour.

## 6. Do not

- Introduce an accent colour anywhere, including hover states, badges, form validation, or charts
- Use colour for error or success states — use text, weight, and an icon-free label
- Add gradients, shadows, glassmorphism, or card-and-shadow layouts
- Use `#000000` or `#FFFFFF` anywhere on screen (those files exist for print only)
