/**
 * UTM Parameter Generator
 * Generate tracking URLs for each search engine source
 */

export const UTM_SOURCES = {
  GOOGLE: {
    source: 'google',
    medium: 'organic',
    campaign: 'search-gsc',
  },
  BING: {
    source: 'bing',
    medium: 'organic',
    campaign: 'search-bing',
  },
  YANDEX: {
    source: 'yandex',
    medium: 'organic',
    campaign: 'search-yandex',
  },
  DUCKDUCKGO: {
    source: 'duckduckgo',
    medium: 'organic',
    campaign: 'search-ddg',
  },
  REDDIT: {
    source: 'reddit',
    medium: 'social',
    campaign: 'reddit-post',
  },
  QUORA: {
    source: 'quora',
    medium: 'social',
    campaign: 'quora-answer',
  },
  DIRECT: {
    source: 'direct',
    medium: 'direct',
    campaign: 'homepage',
  },
}

/**
 * Generate UTM URL
 * @param {string} baseUrl - Base URL (e.g., https://propstars.vercel.app)
 * @param {string} source - UTM source (e.g., 'google')
 * @param {string} medium - UTM medium (e.g., 'organic')
 * @param {string} campaign - UTM campaign (e.g., 'search-gsc')
 * @param {object} additionalParams - Additional UTM parameters
 * @returns {string} Full URL with UTM parameters
 */
export function generateUTMUrl(
  baseUrl,
  source,
  medium,
  campaign,
  additionalParams = {}
) {
  const url = new URL(baseUrl)
  url.searchParams.append('utm_source', source)
  url.searchParams.append('utm_medium', medium)
  url.searchParams.append('utm_campaign', campaign)

  Object.entries(additionalParams).forEach(([key, value]) => {
    if (value) {
      url.searchParams.append(`utm_${key}`, value)
    }
  })

  return url.toString()
}

/**
 * Generate tracking links for all sources
 * @param {string} baseUrl - Base URL
 * @returns {object} Object with tracking URLs for each source
 */
export function generateAllTrackingUrls(baseUrl) {
  return {
    google: generateUTMUrl(
      baseUrl,
      UTM_SOURCES.GOOGLE.source,
      UTM_SOURCES.GOOGLE.medium,
      UTM_SOURCES.GOOGLE.campaign
    ),
    bing: generateUTMUrl(
      baseUrl,
      UTM_SOURCES.BING.source,
      UTM_SOURCES.BING.medium,
      UTM_SOURCES.BING.campaign
    ),
    yandex: generateUTMUrl(
      baseUrl,
      UTM_SOURCES.YANDEX.source,
      UTM_SOURCES.YANDEX.medium,
      UTM_SOURCES.YANDEX.campaign
    ),
    duckduckgo: generateUTMUrl(
      baseUrl,
      UTM_SOURCES.DUCKDUCKGO.source,
      UTM_SOURCES.DUCKDUCKGO.medium,
      UTM_SOURCES.DUCKDUCKGO.campaign
    ),
    reddit: generateUTMUrl(
      baseUrl,
      UTM_SOURCES.REDDIT.source,
      UTM_SOURCES.REDDIT.medium,
      UTM_SOURCES.REDDIT.campaign
    ),
    quora: generateUTMUrl(
      baseUrl,
      UTM_SOURCES.QUORA.source,
      UTM_SOURCES.QUORA.medium,
      UTM_SOURCES.QUORA.campaign
    ),
  }
}

/**
 * Get UTM parameters from current URL
 * @returns {object} Object with current UTM parameters
 */
export function getCurrentUTMParams() {
  if (typeof window === 'undefined') return {}

  const params = new URLSearchParams(window.location.search)
  return {
    source: params.get('utm_source'),
    medium: params.get('utm_medium'),
    campaign: params.get('utm_campaign'),
    content: params.get('utm_content'),
    term: params.get('utm_term'),
  }
}

/**
 * Get source name from UTM source
 * @param {string} source - UTM source value
 * @returns {string} Human-readable source name
 */
export function getSourceName(source) {
  const sourceMap = {
    google: 'Google',
    bing: 'Bing',
    yandex: 'Yandex',
    duckduckgo: 'DuckDuckGo',
    reddit: 'Reddit',
    quora: 'Quora',
    direct: 'Direct',
  }
  return sourceMap[source] || source
}

/**
 * Generate tracking report
 * @param {object} trafficData - Traffic data object
 * @returns {string} Formatted report
 */
export function generateTrackingReport(trafficData) {
  let report = 'TRAFFIC TRACKING REPORT\n'
  report += '======================\n\n'

  Object.entries(trafficData).forEach(([source, data]) => {
    report += `${getSourceName(source)}:\n`
    report += `  Sessions: ${data.sessions || 0}\n`
    report += `  Clicks: ${data.clicks || 0}\n`
    report += `  Conversion Rate: ${data.conversionRate || '0%'}\n`
    report += `  Revenue: $${data.revenue || '0'}\n\n`
  })

  return report
}

export default {
  UTM_SOURCES,
  generateUTMUrl,
  generateAllTrackingUrls,
  getCurrentUTMParams,
  getSourceName,
  generateTrackingReport,
}
