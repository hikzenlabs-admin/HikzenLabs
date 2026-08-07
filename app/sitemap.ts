import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return [
    { url: 'https://hikzenlabs.com/', lastModified },
    { url: 'https://hikzenlabs.com/engineering', lastModified },
  ]
}
