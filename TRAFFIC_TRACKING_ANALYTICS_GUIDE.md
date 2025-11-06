# 📊 Multi-Source Traffic Tracking Guide for Propstars

Track every visitor, every click, every conversion from all search engines!

---

## 🎯 What We're Tracking

| Metric | Purpose | Where to View |
|--------|---------|---------------|
| **Source** | Which search engine? | Analytics |
| **Medium** | Organic search | Analytics |
| **Campaign** | Campaign type | Analytics |
| **Clicks** | CTA button clicks | Analytics Events |
| **Conversions** | Affiliate link clicks | Analytics Events |
| **Revenue** | Affiliate commissions | Analytics + Manual |
| **Top Pages** | Most visited platforms | Analytics |
| **User Flow** | Where users go next | Analytics |

---

## 🔗 Part 1: UTM Parameters Setup

### What are UTM parameters?

UTM parameters are tags added to your URLs that Google Analytics reads automatically.

**Format:**
```
https://propstars.vercel.app/?utm_source=SOURCE&utm_medium=organic&utm_campaign=CAMPAIGN
```

### Your UTM Tracking Strategy

| Search Engine | Source | Medium | Campaign | Full URL |
|---------------|--------|--------|----------|----------|
| **Google** | `google` | `organic` | `search-gsc` | `?utm_source=google&utm_medium=organic&utm_campaign=search-gsc` |
| **Bing** | `bing` | `organic` | `search-bing` | `?utm_source=bing&utm_medium=organic&utm_campaign=search-bing` |
| **Yandex** | `yandex` | `organic` | `search-yandex` | `?utm_source=yandex&utm_medium=organic&utm_campaign=search-yandex` |
| **DuckDuckGo** | `duckduckgo` | `organic` | `search-ddg` | `?utm_source=duckduckgo&utm_medium=organic&utm_campaign=search-ddg` |
| **Reddit** | `reddit` | `social` | `reddit-post` | `?utm_source=reddit&utm_medium=social&utm_campaign=reddit-post` |
| **Quora** | `quora` | `social` | `quora-answer` | `?utm_source=quora&utm_medium=social&utm_campaign=quora-answer` |

---

## 📱 Part 2: Google Analytics Setup (Already in Your Site!)

### Current Status
✅ **Vercel Analytics** - Basic tracking active
✅ **Google Analytics Script** - Ready to add

### Add Google Analytics 4 (GA4)

**Step 1: Create a Google Analytics Account**

1. Go to: https://analytics.google.com/
2. Click **Start measuring**
3. Enter account name: `Propstars`
4. Create property: `propstars.vercel.app`
5. Create web stream
6. Get your **Measurement ID** (G-XXXXXXXXXX)

**Step 2: Add GA4 to Your Site**

I'll create a tracking component for you. Add this to `app/layout.js`:

```javascript
<script 
  async 
  src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA4_ID"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_GA4_ID', {
    page_path: window.location.pathname,
  });
</script>
```

**Step 3: Track Events**

Track when users click on affiliate links:

```javascript
function trackAffiliateClick(platformName) {
  gtag('event', 'affiliate_click', {
    'platform': platformName,
    'link_position': 'hero-cta',
    'value': 1
  });
}
```

---

## 🛠️ Part 3: Create Custom Dashboard

### In Google Analytics, Create a Custom Dashboard

**Step 1: Go to Analytics**
1. Open: https://analytics.google.com/
2. Select your property
3. Go to **Dashboards** (left sidebar)
4. Click **+ Create dashboard**
5. Name it: `Propstars Traffic Sources`

**Step 2: Add Cards**

Add these cards to your dashboard:

```
Card 1: Traffic by Source
├─ Metric: Users
├─ Dimension: Source/Medium
└─ Filter: organic traffic only

Card 2: Traffic Trend (7 days)
├─ Metric: Sessions
├─ Dimension: Date
└─ Grouped by: Source

Card 3: Top Pages by Source
├─ Metric: Page Views
├─ Dimension: Page Title
└─ Grouped by: Source

Card 4: Affiliate Clicks by Source
├─ Metric: Event Count (affiliate_click)
├─ Dimension: Platform
└─ Grouped by: Source

Card 5: Click-Through Rate
├─ Metric: Event Count / Sessions
├─ Dimension: Source
└─ Shows conversion rate by engine
```

---

## 📊 Part 4: Set Up Event Tracking

### Track These Events

| Event Name | When | What It Tells You |
|------------|------|------------------|
| `affiliate_click` | User clicks "Visit Website" | Which platforms get clicked from which sources |
| `claim_bonus_click` | User clicks "Claim Bonus" | Engagement level by source |
| `share_button_click` | User clicks share button | Viral potential by source |
| `platform_view` | User views platform page | Which platforms are most popular |

### Add Event Tracking to Your Site

I'll create a tracking utility for you:

---

## 🚀 Part 5: Manual Setup for Organic Sources

For traffic that comes **naturally** (not from your links):

### In Google Search Console

1. Go to: https://search.google.com/search-console
2. Select your property
3. Go to **Performance**
4. See queries, clicks, impressions by:
   - Country
   - Device
   - Search appearance
   - Query

### Create a Spreadsheet Tracker

Track this manually each week:

```
Date       | Source     | Impressions | Clicks | CTR    | Avg Position
Nov 6      | Google     | 145         | 12     | 8.3%   | 4.2
Nov 6      | Bing       | 8           | 1      | 12.5%  | 2.1
Nov 6      | Yandex     | 0           | 0      | 0%     | N/A
Nov 6      | DuckDuckGo | 0           | 0      | 0%     | N/A
```

**Save as Google Sheet** to track weekly trends!

---

## 💡 Part 6: Traffic Attribution Model

### How to Know Which Source Drives Revenue

1. **Track affiliate clicks per source**
2. **Monitor CPC (Cost Per Click)** from each
3. **Calculate ROI per source**

**Example:**
```
Google:     150 clicks → 1 signup → 5% conversion = $50 affiliate bonus
Bing:       10 clicks → 0 signups → 0% conversion = $0
Yandex:     5 clicks → 1 signup → 20% conversion = $50 affiliate bonus
DuckDuckGo: 2 clicks → 0 signups → 0% conversion = $0
```

---

## 📈 Part 7: Weekly Reporting Template

### What to Track Weekly

**Create a Google Sheet with:**

```
WEEKLY TRAFFIC REPORT - Week of Nov 6

SEARCH ENGINES:
┌──────────┬──────────┬────────┬──────────┬──────────┐
│ Source   │ Sessions │ Users  │ Avg Page │ Conv Rate│
├──────────┼──────────┼────────┼──────────┼──────────┤
│ Google   │ 145      │ 98     │ 2:34     │ 8.3%     │
│ Bing     │ 8        │ 6      │ 1:45     │ 12.5%    │
│ Yandex   │ 2        │ 2      │ 0:30     │ 0%       │
│ DDG      │ 0        │ 0      │ N/A      │ N/A      │
└──────────┴──────────┴────────┴──────────┴──────────┘

TOP PLATFORMS:
┌─────────────┬──────┬────────────────┐
│ Platform    │ Hits │ Affiliate Click│
├─────────────┼──────┼────────────────┤
│ FanDuel     │ 45   │ 8              │
│ DraftKings  │ 38   │ 6              │
│ PrizePicks  │ 32   │ 5              │
│ Sleeper     │ 15   │ 2              │
└─────────────┴──────┴────────────────┘

REVENUE TRACKING:
Total Clicks: 155
Est. Revenue: $50-100/week
Best Source: Google (92 clicks)
Best Platform: FanDuel (8 clicks)
```

---

## 🔍 Part 8: Tools to Use (Free)

| Tool | Purpose | Link |
|------|---------|------|
| **Google Analytics** | Track everything | https://analytics.google.com/ |
| **Google Search Console** | Track organic search | https://search.google.com/search-console |
| **Bing Webmaster Tools** | Track Bing traffic | https://www.bing.com/webmasters/ |
| **UTM Parameter Builder** | Generate tracking URLs | https://ga-dev-tools.web.app/campaign-url-builder |
| **Google Sheets** | Track manually | https://sheets.google.com/ |

---

## 🎯 Part 9: What Good Numbers Look Like

### Monthly Targets (3 Months In)

```
MONTH 1 (Nov):
├─ Google: 100 sessions
├─ Bing: 0 sessions
├─ Yandex: 0 sessions
└─ Total: 100 sessions

MONTH 2 (Dec):
├─ Google: 200 sessions (+100%)
├─ Bing: 20 sessions (new!)
├─ Yandex: 10 sessions (new!)
└─ Total: 230 sessions

MONTH 3 (Jan):
├─ Google: 350 sessions
├─ Bing: 40 sessions
├─ Yandex: 30 sessions
└─ Total: 420 sessions (+320% from start)
```

### Revenue Targets

```
CONVERSION RATE: 3-5% of visitors click affiliate link

REVENUE CALCULATION:
100 visitors → 3-5 clicks → $5-20 per month

420 visitors/month → 12-20 clicks → $60-100 per month
```

---

## 📱 Part 10: Set Up Alerts

### Create Alerts in Google Analytics

1. Go to **Admin** → **Events**
2. Create an alert for:
   - Unusual traffic spikes (sudden > 200%)
   - Traffic drops (sudden < 50%)
   - Affiliate click events

### Get Notified

Receive daily/weekly summaries via email.

---

## ✅ Quick Setup Checklist

```
☐ Create Google Analytics 4 account
☐ Add GA4 code to your site
☐ Generate UTM links for each source
☐ Set up custom events for affiliate clicks
☐ Create tracking dashboard in GA
☐ Create Google Sheet for manual tracking
☐ Set up alerts for traffic anomalies
☐ Add weekly reporting to calendar
☐ Track revenue per source
☐ Monitor top platforms weekly
```

---

## 🚀 Implementation Steps

### TODAY:
1. Create GA4 account
2. Add tracking code to site
3. Generate UTM parameters

### THIS WEEK:
1. Set up dashboard
2. Create Google Sheet tracker
3. Start collecting baseline data

### THIS MONTH:
1. Analyze which sources drive most traffic
2. Analyze which platforms convert best
3. Double down on best performing combinations

---

## 📊 Key Metrics to Watch

| Metric | Goal | Why It Matters |
|--------|------|----------------|
| **Click-Through Rate (CTR)** | >5% | Shows if people interested |
| **Conversion Rate** | >3% | Shows if they click affiliate links |
| **Avg Session Duration** | >2 min | Shows engagement level |
| **Pages Per Session** | >2 | Shows content consumption |
| **Bounce Rate** | <50% | Shows if site is relevant |

---

## 🎉 Expected Results

**After 3 months of tracking:**

✅ Know which search engine drives most traffic  
✅ Know which platform users prefer  
✅ Know which time of day gets most traffic  
✅ Know which UTM campaign works best  
✅ Track revenue by source  
✅ Optimize for best performers  
✅ Double your conversion rate  

---

## 📞 Support

- **Google Analytics Help**: https://support.google.com/analytics
- **UTM Builder Tool**: https://ga-dev-tools.web.app/campaign-url-builder
- **GA4 Setup Guide**: https://support.google.com/analytics/answer/10089681

Your traffic is about to become **transparent and trackable**! 🚀
