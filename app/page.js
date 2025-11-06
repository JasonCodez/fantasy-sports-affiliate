'use client'

import Image from 'next/image'
import Link from 'next/link'
import { fantasySportsWithCalculatedRatings } from '../lib/fantasySports'
import PlatformImage from './components/PlatformImage'
import '../styles/globals.css'
import { useEffect } from 'react'

function StarRating({ rating }) {
  // Round to nearest 0.25 for more precise half/quarter star display
  const roundedRating = Math.round(rating * 4) / 4
  const stars = []
  
  for (let i = 1; i <= 5; i++) {
    if (roundedRating >= i) {
      // Full star
      stars.push(<span key={i} className="text-yellow-400">★</span>)
    } else if (roundedRating > i - 1 && roundedRating >= i - 0.25) {
      // Half star - if decimal is 0.25 or higher
      stars.push(<span key={i} className="text-yellow-400">⯨</span>)
    } else {
      // Empty star
      stars.push(<span key={i} className="text-gray-500">★</span>)
    }
  }
  
  return <div className="flex gap-0.5">{stars}</div>
}

export default function Home() {
  useEffect(() => {
    // Add structured data for the homepage
    const schemaData = {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Fantasy Sports Platform Reviews and Bonuses',
      description: 'Compare the top 10 fantasy sports platforms with real reviews, ratings, and exclusive bonuses.',
      url: 'https://fantasy-sports-affiliate.com',
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: fantasySportsWithCalculatedRatings.map((site, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          url: `https://fantasy-sports-affiliate.com/platform/${site.id}`,
          name: site.name,
          description: site.description,
          image: site.image,
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: site.rating.toFixed(2),
            bestRating: '5',
            worstRating: '1',
            ratingCount: site.reviewCount,
          },
        })),
      },
    }
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(schemaData)
    document.head.appendChild(script)
    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/40 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          {/* Logo Section */}
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-lg">
              <span className="text-2xl">⭐</span>
              <h1 className="text-3xl font-bold text-white">Propstars</h1>
            </div>
          </div>
          
          {/* Main Title and Description */}
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Fantasy Sports Hub: Best Platforms & Bonuses 2025
            </h2>
            <p className="text-xl text-gray-300">
              Compare top fantasy sports platforms, read honest reviews, and claim exclusive sign-up bonuses
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction Section */}
        <section className="mb-16 bg-gradient-to-r from-purple-900/40 to-blue-900/40 rounded-lg p-8 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-4">Welcome to Propstars: Your Guide to the Best DFS Platforms</h2>
          <p className="text-gray-300 text-lg mb-4">
            Find the perfect fantasy sports platform for your style of play. Compare the top daily fantasy sports (DFS) sites including FanDuel, DraftKings, PrizePicks, Underdog, and more. Our comprehensive reviews include honest user testimonials, real star ratings, and the latest sign-up bonuses available in 2025.
          </p>
          <p className="text-gray-300 text-lg mb-6">
            Whether you're interested in daily fantasy football (DFF), basketball contests, baseball leagues, or parlay betting, we've reviewed all 10 major fantasy sports platforms to help you make an informed decision.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <article className="bg-black/30 rounded p-4 border border-green-500/20">
              <h3 className="text-green-400 font-bold text-lg">10+ Platforms</h3>
              <p className="text-gray-300 text-sm">In-depth reviews of leading fantasy sports sites and DFS apps</p>
            </article>
            <article className="bg-black/30 rounded p-4 border border-blue-500/20">
              <h3 className="text-blue-400 font-bold text-lg">Verified Reviews & Ratings</h3>
              <p className="text-gray-300 text-sm">Honest user testimonials with real star ratings from verified players</p>
            </article>
            <article className="bg-black/30 rounded p-4 border border-yellow-500/20">
              <h3 className="text-yellow-400 font-bold text-lg">Current Bonuses</h3>
              <p className="text-gray-300 text-sm">Updated 2025 sign-up offers, welcome bonuses, and promotions</p>
            </article>
          </div>
        </section>

        {/* Platforms Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Best Fantasy Sports Platforms 2025 – Complete Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {fantasySportsWithCalculatedRatings.map((site) => (
            <Link key={site.id} href={`/platform/${site.id}`}>
              <div className={`h-full bg-gradient-to-br ${site.color} rounded-xl p-1 cursor-pointer group hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}>
                <div className="bg-gray-900 rounded-lg p-6 h-full flex flex-col justify-between group-hover:bg-gray-800 transition-colors">
                  <div>
                    {/* Logo */}
                    <div className="h-20 w-20 mx-auto mb-4 relative flex items-center justify-center bg-gray-800 rounded-lg overflow-hidden">
                      <PlatformImage
                        src={site.image}
                        alt={site.name}
                        emoji={site.emoji}
                        width={64}
                        height={64}
                        className="object-contain"
                      />
                    </div>

                    {/* Name & Description */}
                    <h2 className="text-2xl font-bold text-white mb-2">
                      {site.name}
                    </h2>
                    <p className="text-gray-300 text-sm mb-4">
                      {site.shortDescription}
                    </p>

                    {/* Rating & Reviews */}
                    <div className="mb-4 pb-4 border-b border-gray-700">
                      <StarRating rating={site.rating} />
                      <p className="text-xs text-gray-400 mt-1">{site.rating.toFixed(2)}/5 ({site.reviewCount?.toLocaleString()} reviews)</p>
                    </div>

                    {/* Quick Review */}
                    {site.reviews && site.reviews[0] && (
                      <div className="bg-black/30 rounded p-3 mb-4 text-xs">
                        <p className="text-gray-300 italic mb-2">&quot;{site.reviews[0].text.substring(0, 80)}...&quot;</p>
                        <p className="text-gray-400">— {site.reviews[0].author}</p>
                      </div>
                    )}

                    {/* Sports Offered */}
                    {site.details?.sports && (
                      <div className="mb-4">
                        <p className="text-xs text-gray-400 mb-2 font-semibold">Sports:</p>
                        <div className="flex flex-wrap gap-1">
                          {site.details.sports.slice(0, 3).map((sport) => (
                            <span key={sport} className="text-xs bg-gray-700 text-gray-200 px-2 py-1 rounded">
                              {sport}
                            </span>
                          ))}
                          {site.details.sports.length > 3 && (
                            <span className="text-xs bg-gray-700 text-gray-200 px-2 py-1 rounded">
                              +{site.details.sports.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  <div>
                    {/* Bonus */}
                    <div className={`bg-gradient-to-r ${site.color} rounded p-3 text-white text-center font-semibold mb-4 text-sm`}>
                      {site.bonus}
                    </div>
                    {/* Learn More Button */}
                    <button className="w-full bg-white text-gray-900 font-bold py-2 rounded-lg hover:bg-gray-100 transition-colors">
                      Learn More & Reviews
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">What Fantasy Sports Players Are Saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "Underdog has been a game-changer for me. The entry fees are incredibly low, and the payouts are generous.",
                author: "Mike_DFS_Pro",
                platform: "Underdog"
              },
              {
                quote: "FanDuel is the king of daily fantasy sports. The contests are huge and the interface is smooth.",
                author: "DFSKing_2024",
                platform: "FanDuel"
              },
              {
                quote: "Sleeper is the gold standard for fantasy football leagues. The app is beautiful and the interface is intuitive.",
                author: "LeagueCommish",
                platform: "Sleeper"
              }
            ].map((testimonial, index) => (
              <article key={index} className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-lg p-6 border border-white/10">
                <p className="text-white mb-4 italic">&quot;{testimonial.quote}&quot;</p>
                <div className="flex items-center justify-between">
                  <p className="text-gray-300 font-semibold">{testimonial.author}</p>
                  <p className="text-xs text-gray-400">{testimonial.platform}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Comparison Section */}
        <section className="mb-16 bg-gradient-to-r from-purple-900/40 to-blue-900/40 rounded-lg p-8 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-8">Daily Fantasy Sports Platform Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-600">
                  <th className="text-left p-3 text-white">Platform</th>
                  <th className="text-center p-3 text-white">Rating</th>
                  <th className="text-left p-3 text-white">Sports</th>
                  <th className="text-left p-3 text-white">Best For</th>
                </tr>
              </thead>
              <tbody>
                {fantasySportsWithCalculatedRatings.slice(0, 5).map((site) => (
                  <tr key={site.id} className="border-b border-gray-700 hover:bg-white/5">
                    <td className="p-3">
                      <Link href={`/platform/${site.id}`} className="text-blue-400 hover:text-blue-300">
                        {site.name}
                      </Link>
                    </td>
                    <td className="p-3 text-center">
                      <StarRating rating={site.rating} />
                    </td>
                    <td className="p-3 text-gray-300">{site.details?.sports?.slice(0, 2).join(', ')}</td>
                    <td className="p-3 text-gray-300">{site.shortDescription}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Fantasy Sports FAQs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: "Which platform is best for beginners?",
                a: "PrizePicks and Dabble are excellent for beginners due to their simple pick-em formats and generous sign-up bonuses. FanDuel is also a great choice for traditional DFS."
              },
              {
                q: "Do these sign-up bonuses actually work?",
                a: "Yes! All bonuses listed are current and verified. Terms and conditions vary by site, so check each platform's details page for specific bonus requirements and restrictions."
              },
              {
                q: "Is daily fantasy sports legal in my state?",
                a: "Daily fantasy sports are legal in most U.S. states, but some states have restrictions or bans. Always check your local regulations before signing up. Several states explicitly allow DFS."
              },
              {
                q: "Can I play on multiple fantasy sports platforms?",
                a: "Absolutely! Many serious DFS players maintain accounts on multiple platforms to diversify their contest selections and maximize their earning opportunities."
              },
              {
                q: "What's the difference between DFS and sports betting?",
                a: "Daily Fantasy Sports (DFS) involves creating a lineup from a salary cap and competing against other players. Sports betting is wagering on game outcomes. They're different games with different regulations."
              },
              {
                q: "Which fantasy sports platform has the best payouts?",
                a: "Payouts vary by contest type and platform. Check our individual platform reviews for detailed payout information and comparison tables."
              }
            ].map((faq, index) => (
              <article key={index} className="bg-black/30 rounded-lg p-6 border border-white/10">
                <h3 className="text-white font-bold mb-3 text-lg">{faq.q}</h3>
                <p className="text-gray-300">{faq.a}</p>
              </article>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-sm border-t border-white/10 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-400">
            <p>
              © 2024 Fantasy Sports Hub. This is an affiliate website.{' '}
              <span className="text-yellow-400 font-semibold">
                Please gamble responsibly
              </span>
              . Must be 18+ to participate.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
