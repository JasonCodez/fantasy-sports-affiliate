import '../styles/globals.css'
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: 'Best Fantasy Sports Platforms 2025 | Reviews & Bonuses',
  description: 'Compare top fantasy sports platforms including FanDuel, DraftKings, PrizePicks & more. Get honest reviews, exclusive bonuses, and find the best fantasy site for you.',
  keywords: 'fantasy sports platforms, fantasy sports sites, best DFS apps, daily fantasy sports, FanDuel, DraftKings, PrizePicks',
  authors: [{ name: 'Fantasy Sports Hub' }],
  openGraph: {
    title: 'Best Fantasy Sports Platforms 2025 | Reviews & Bonuses',
    description: 'Compare top fantasy sports platforms with real user reviews and exclusive bonuses. Find your perfect fantasy sports site.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Fantasy Sports Platforms 2025',
    description: 'Compare fantasy sports platforms and claim exclusive bonuses.',
  },
  robots: 'index, follow',
  alternates: {
    canonical: 'https://fantasy-sports-affiliate.com',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Fantasy Sports Hub',
    description: 'Compare the best fantasy sports platforms with real reviews and exclusive bonuses.',
    url: 'https://fantasy-sports-affiliate.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://fantasy-sports-affiliate.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
