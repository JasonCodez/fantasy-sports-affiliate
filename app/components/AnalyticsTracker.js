'use client'

import { useEffect } from 'react'

/**
 * Analytics Tracking Component
 * Tracks affiliate clicks and user interactions
 */
export default function AnalyticsTracker() {
  useEffect(() => {
    // Initialize tracking
    if (typeof window !== 'undefined' && window.gtag) {
      // Track page views
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_path: window.location.pathname,
      })
    }

    // Expose tracking functions to window for use throughout app
    window.trackAffiliateClick = (platformName, position = 'default') => {
      if (window.gtag) {
        window.gtag('event', 'affiliate_click', {
          platform: platformName,
          link_position: position,
          timestamp: new Date().toISOString(),
        })
      }
      console.log(`[Analytics] Affiliate click tracked: ${platformName} (${position})`)
    }

    window.trackClaimBonusClick = (platformName, position = 'default') => {
      if (window.gtag) {
        window.gtag('event', 'claim_bonus_click', {
          platform: platformName,
          link_position: position,
          timestamp: new Date().toISOString(),
        })
      }
      console.log(`[Analytics] Claim bonus click tracked: ${platformName} (${position})`)
    }

    window.trackShareClick = (platformName) => {
      if (window.gtag) {
        window.gtag('event', 'share_click', {
          platform: platformName,
          timestamp: new Date().toISOString(),
        })
      }
      console.log(`[Analytics] Share click tracked: ${platformName}`)
    }

    window.trackPlatformView = (platformName, platformId) => {
      if (window.gtag) {
        window.gtag('event', 'platform_view', {
          platform_name: platformName,
          platform_id: platformId,
          timestamp: new Date().toISOString(),
        })
      }
      console.log(`[Analytics] Platform view tracked: ${platformName}`)
    }
  }, [])

  return null
}
