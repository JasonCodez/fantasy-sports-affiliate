'use client'

import Link from 'next/link'
import { fantasySports, getSiteById } from '../../../lib/fantasySports'
import PlatformImage from '../../components/PlatformImage'
import { useEffect } from 'react'

export default function PlatformDetail({ params }) {
  const site = getSiteById(params.id)

  useEffect(() => {
    if (site) {
      // Add Product/Service schema
      const schemaData = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: `${site.name} - Fantasy Sports Platform`,
        description: site.description,
        image: site.image,
        brand: {
          '@type': 'Brand',
          name: site.name,
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: site.rating.toFixed(2),
          bestRating: '5',
          worstRating: '1',
          ratingCount: site.reviewCount,
        },
        offers: {
          '@type': 'Offer',
          description: site.bonus,
          url: site.affiliateLink,
        },
        review: site.reviews.map((r) => ({
          '@type': 'Review',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: r.rating,
            bestRating: '5',
            worstRating: '1',
          },
          author: {
            '@type': 'Person',
            name: r.author,
          },
          reviewBody: r.text,
        })),
      }
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(schemaData)
      document.head.appendChild(script)
      return () => {
        document.head.removeChild(script)
      }
    }
  }, [site])

  if (!site) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Platform not found</h1>
          <Link href="/">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    )
  }

  const gradientColor = site.color.replace('from-', 'from-').replace('to-', 'to-')

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/40 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/">
            <button className="text-white hover:text-gray-300 font-semibold mb-4 transition-colors">
              ← Back to Platforms
            </button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className={`bg-gradient-to-br ${site.color} rounded-xl p-1 mb-8`}>
          <div className="bg-gray-900 rounded-lg p-8">
            <div className="w-32 h-32 mx-auto mb-6 relative flex items-center justify-center bg-gray-800 rounded-lg overflow-hidden">
              <PlatformImage
                src={site.image}
                alt={site.name}
                emoji={site.emoji}
                width={128}
                height={128}
                className="object-contain"
              />
            </div>
            <h1 className="text-5xl font-bold text-white text-center mb-4">
              {site.name}
            </h1>
            <p className="text-xl text-gray-300 text-center mb-6">
              {site.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a
                href={site.affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-gradient-to-r ${site.color} text-white font-bold py-3 px-8 rounded-lg hover:shadow-lg transition-all text-center`}
              >
                Claim {site.name} Bonus
              </a>
              <a
                href={site.website}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg transition-colors text-center"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Overview */}
            <div className="bg-gray-800/50 backdrop-blur rounded-lg p-6 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-3">Overview</h2>
              <p className="text-gray-300">{site.details.overview}</p>
            </div>

            {/* Sports Available */}
            <div className="bg-gray-800/50 backdrop-blur rounded-lg p-6 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-3">Sports Available</h2>
              <div className="flex flex-wrap gap-2">
                {site.details.sports.map((sport) => (
                  <span
                    key={sport}
                    className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold"
                  >
                    {sport}
                  </span>
                ))}
              </div>
            </div>

            {/* Bonus Info */}
            <div className={`bg-gradient-to-br ${site.color} rounded-lg p-1`}>
              <div className="bg-gray-900 rounded p-6">
                <h2 className="text-2xl font-bold text-white mb-3">Welcome Bonus</h2>
                <p className="text-gray-300 mb-4">{site.details.bonusInfo}</p>
                <div className={`bg-gradient-to-r ${site.color} text-white font-bold text-xl py-3 px-4 rounded text-center`}>
                  {site.bonus}
                </div>
              </div>
            </div>

            {/* Pros */}
            <div className="bg-gray-800/50 backdrop-blur rounded-lg p-6 border border-green-500/20">
              <h2 className="text-2xl font-bold text-green-400 mb-3">✓ Pros</h2>
              <ul className="space-y-2">
                {site.details.pros.map((pro, index) => (
                  <li key={index} className="text-gray-300 flex items-start">
                    <span className="text-green-400 mr-3 font-bold">+</span>
                    {pro}
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons */}
            <div className="bg-gray-800/50 backdrop-blur rounded-lg p-6 border border-red-500/20">
              <h2 className="text-2xl font-bold text-red-400 mb-3">✗ Cons</h2>
              <ul className="space-y-2">
                {site.details.cons.map((con, index) => (
                  <li key={index} className="text-gray-300 flex items-start">
                    <span className="text-red-400 mr-3 font-bold">−</span>
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* How to Sign Up */}
            <div className="bg-gray-800/50 backdrop-blur rounded-lg p-6 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">How to Sign Up</h2>
              <ol className="space-y-3">
                {site.details.howToSignUp.map((step, index) => (
                  <li key={index} className="text-gray-300 flex items-start">
                    <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 font-bold text-sm">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Quick Start */}
            <div className={`bg-gradient-to-br ${site.color} rounded-lg p-1`}>
              <div className="bg-gray-900 rounded p-6">
                <h2 className="text-2xl font-bold text-white mb-4">Quick Start</h2>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">⏱️</span>
                    <div>
                      <p className="font-semibold text-white">Takes 5 Minutes</p>
                      <p className="text-sm text-gray-300">
                        Sign up and verify your account
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">💰</span>
                    <div>
                      <p className="font-semibold text-white">Deposit Bonus</p>
                      <p className="text-sm text-gray-300">{site.bonus}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">🎮</span>
                    <div>
                      <p className="font-semibold text-white">Start Playing</p>
                      <p className="text-sm text-gray-300">
                        Jump into contests and compete
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Notice */}
            <div className="bg-yellow-900/30 backdrop-blur rounded-lg p-6 border border-yellow-600/50">
              <h3 className="text-lg font-bold text-yellow-300 mb-3">⚠️ Important Notice</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Must be 18 years or older</li>
                <li>• Availability varies by state/country</li>
                <li>• Gamble responsibly</li>
                <li>• Check local laws and regulations</li>
                <li>• Set deposit limits</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Other Platforms */}
        <div className="mt-16 border-t border-white/10 pt-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Explore Other Platforms
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {fantasySports.filter((s) => s.id !== site.id).map((otherSite) => (
              <Link key={otherSite.id} href={`/platform/${otherSite.id}`}>
                <div className="bg-gray-800/50 hover:bg-gray-700/50 backdrop-blur rounded-lg p-4 cursor-pointer transition-all text-center border border-white/10 hover:border-purple-500/50">
                  <div className="h-12 w-12 mx-auto mb-2 flex items-center justify-center bg-gray-700 rounded">
                    <PlatformImage
                      src={otherSite.image}
                      alt={otherSite.name}
                      emoji={otherSite.emoji}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-white font-bold">{otherSite.name}</h3>
                  <p className="text-xs text-gray-400 mt-2">
                    {otherSite.bonus}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link href="/">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all">
              ← Back to All Platforms
            </button>
          </Link>
        </div>
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
