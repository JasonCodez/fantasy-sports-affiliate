# 📊 TRACKING SETUP - ONE-PAGE REFERENCE

## 🎯 YOUR TRACKING URLS (Copy & Paste)

```
GOOGLE:     https://propstars.vercel.app/?utm_source=google&utm_medium=organic&utm_campaign=search-gsc
BING:       https://propstars.vercel.app/?utm_source=bing&utm_medium=organic&utm_campaign=search-bing
YANDEX:     https://propstars.vercel.app/?utm_source=yandex&utm_medium=organic&utm_campaign=search-yandex
DUCKDUCKGO: https://propstars.vercel.app/?utm_source=duckduckgo&utm_medium=organic&utm_campaign=search-ddg
REDDIT:     https://propstars.vercel.app/?utm_source=reddit&utm_medium=social&utm_campaign=reddit-post
QUORA:      https://propstars.vercel.app/?utm_source=quora&utm_medium=social&utm_campaign=quora-answer
```

---

## ⚡ GA4 SETUP (5 MINUTES)

### 1. Create Account
- Go to: https://analytics.google.com/
- Click "Start measuring"
- Create property for propstars.vercel.app

### 2. Copy Measurement ID
- Find: G-XXXXXXXXXX
- Save it!

### 3. Add Code to `app/layout.js`
```javascript
<script 
  async 
  src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_ID_HERE"
></script>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-YOUR_ID_HERE');
    `,
  }}
/>
```

### 4. Deploy
```bash
git add .
git commit -m "Add GA4"
git push
```

### 5. Verify
- Visit your site
- Check GA4 Real-time
- See yourself as active user ✅

---

## 📱 TRACKING FUNCTIONS

```javascript
// Track affiliate clicks
window.trackAffiliateClick('FanDuel', 'hero')

// Track claim bonus clicks
window.trackClaimBonusClick('DraftKings', 'bottom')

// Track shares
window.trackShareClick('PrizePicks')

// Track platform views
window.trackPlatformView('Sleeper', 'sleeper')
```

---

## 📊 WHAT YOU'LL SEE (After 24 hours)

### Real-time Dashboard
- Active users: 1-5
- Current page: /
- Top events: page_view

### Traffic by Source
- Google: 95 sessions
- Bing: 0 sessions
- Direct: 5 sessions

### Top Pages
- /: 45 views
- /platform/fanduel: 20 views
- /platform/draftkings: 15 views

### Events Tracked
- affiliate_click: 8
- platform_view: 100
- page_view: 155

---

## ✅ DAILY CHECKLIST

```
☐ Created GA4 account
☐ Got Measurement ID
☐ Added code to layout.js
☐ Deployed to Vercel
☐ Verified real-time data
☐ Created tracking URLs
☐ Bookmarked GA4 dashboard
```

---

## 📈 EXPECTED RESULTS (By Date)

| Date | Result |
|------|--------|
| Today | GA4 set up |
| +1 day | Tracking active |
| +2 days | First data in GA4 |
| +7 days | Traffic patterns visible |
| +30 days | Revenue data clear |
| +90 days | 5x traffic growth |

---

## 🔗 IMPORTANT LINKS

- Google Analytics: https://analytics.google.com/
- Your Site: https://propstars.vercel.app/
- GitHub Repo: https://github.com/JasonCodez/fantasy-sports-affiliate
- Vercel Dashboard: https://vercel.com/dashboard

---

## 💡 PRO TIPS

1. **Check GA4 daily** for first week
2. **Use incognito mode** when testing (doesn't skew data)
3. **Tag your posts** with UTM parameters
4. **Create dashboard** by week 1
5. **Weekly reports** starting week 2
6. **Optimize** based on data week 3+

---

## 🎯 SUCCESS METRICS

✅ GA4 showing data in real-time  
✅ Traffic attributed correctly to sources  
✅ Affiliate clicks tracked  
✅ Platform popularity visible  
✅ Revenue trackable per source  
✅ Mobile vs desktop visible  
✅ Time-of-day patterns visible  
✅ Top performers identified  

---

**You're ready to launch! 🚀**

Start with GA4 setup TODAY!
