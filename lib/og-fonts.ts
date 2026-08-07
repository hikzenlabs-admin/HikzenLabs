// lib/og-fonts.ts
//
// Loads the site's Google Fonts as raw font data for next/og's ImageResponse,
// which renders via Satori and can't use next/font. Falls back to Satori's
// default font if the fetch fails (e.g. no network at build time) so
// opengraph-image generation never breaks the build over a missing font.

async function loadGoogleFont(family: string, weight: number): Promise<ArrayBuffer | null> {
  const cssUrl = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${weight}`
  const css = await fetch(cssUrl, {
    headers: {
      // An old UA makes Google serve TTF instead of WOFF2 — Satori needs TTF/OTF.
      'User-Agent':
        'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36',
    },
  }).then((res) => res.text())

  const match = css.match(/src: url\(([^)]+)\) format\('(?:opentype|truetype)'\)/)
  if (!match) return null

  const fontRes = await fetch(match[1])
  return fontRes.arrayBuffer()
}

export interface OgFont {
  name: string
  data: ArrayBuffer
  weight: 400 | 600
  style: 'normal'
}

export async function loadOgFonts(): Promise<OgFont[]> {
  try {
    const [display, body] = await Promise.all([
      loadGoogleFont('Bricolage Grotesque', 600),
      loadGoogleFont('Newsreader', 400),
    ])
    if (!display || !body) return []
    return [
      { name: 'Bricolage Grotesque', data: display, weight: 600, style: 'normal' },
      { name: 'Newsreader', data: body, weight: 400, style: 'normal' },
    ]
  } catch {
    return []
  }
}
