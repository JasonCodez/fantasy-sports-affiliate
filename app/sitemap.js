// app/sitemap.js - Dynamic sitemap generation

import { fantasySports } from '@/lib/fantasySports'

export default function sitemap() {
  const baseUrl = 'https://propstars.vercel.app'

  // Homepage
  const homeEntry = {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1.0,
  }

  // Platform pages
  const platformEntries = fantasySports.map((platform) => ({
    url: `${baseUrl}/platform/${platform.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [homeEntry, ...platformEntries]
}
