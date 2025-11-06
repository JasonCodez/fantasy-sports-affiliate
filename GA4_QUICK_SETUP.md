# ⚡ Quick Google Analytics 4 Setup (5 minutes)

## Step 1: Create GA4 Account (2 minutes)

1. Go to: https://analytics.google.com/
2. Click **Start measuring**
3. Enter:
   - **Account name**: `Propstars`
   - **Website URL**: `https://propstars.vercel.app`
4. Click **Create**
5. Accept terms and conditions

## Step 2: Get Your Measurement ID (1 minute)

After creating:
1. You'll see: "Welcome to Google Analytics"
2. Look for **Measurement ID** - looks like: `G-XXXXXXXXXX`
3. **COPY THIS ID** - you need it next

## Step 3: Add Tracking Code to Your Site (2 minutes)

### Option A: Add to layout.js (Recommended)

Open `app/layout.js` and add this in the `<head>` section:

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
      gtag('config', 'G-YOUR_ID_HERE', {
        page_path: window.location.pathname,
      });
    `,
  }}
/>
```

**Replace `G-YOUR_ID_HERE` with your actual Measurement ID!**

### Option B: Use Next.js Script Component

```javascript
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_ID_HERE"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YOUR_ID_HERE');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

## Step 4: Verify It's Working (1 minute)

1. Save your changes
2. Visit: https://propstars.vercel.app
3. In Google Analytics, go to **Realtime**
4. You should see yourself as an active user!

✅ If you see yourself = GA4 is working!

---

## Step 5: Generate Your Tracking URLs

Use this URL generator to create tracking links:

### For Google Search
```
https://propstars.vercel.app/?utm_source=google&utm_medium=organic&utm_campaign=search-gsc
```

### For Bing
```
https://propstars.vercel.app/?utm_source=bing&utm_medium=organic&utm_campaign=search-bing
```

### For Yandex
```
https://propstars.vercel.app/?utm_source=yandex&utm_medium=organic&utm_campaign=search-yandex
```

### For DuckDuckGo
```
https://propstars.vercel.app/?utm_source=duckduckgo&utm_medium=organic&utm_campaign=search-ddg
```

### For Reddit Posts
```
https://propstars.vercel.app/?utm_source=reddit&utm_medium=social&utm_campaign=reddit-post&utm_content=r/DFS
```

### For Quora Answers
```
https://propstars.vercel.app/?utm_source=quora&utm_medium=social&utm_campaign=quora-answer
```

**Or use the URL builder:** https://ga-dev-tools.web.app/campaign-url-builder

---

## Step 6: View Your Data (Next 24 hours)

After adding GA4 tracking:

1. Go to: https://analytics.google.com/
2. Select your property (Propstars)
3. Wait 24 hours for data to populate
4. Then view:
   - **Real-time users** (instant)
   - **Traffic by source** (24 hours later)
   - **Conversion events** (24 hours later)

---

## 📊 What You'll See in Google Analytics

### Real-time Users
```
Active users right now: 1-3
Current page: /
Events: page_view, click
```

### Traffic by Source (After 24 hours)
```
Organic Search (Google):     45 users
Organic Search (Bing):       0 users
Social (Reddit):             0 users
Social (Quora):              0 users
Direct:                      10 users
```

### Top Pages
```
/                    45 views
/platform/fanduel    20 views
/platform/draftkings 15 views
/platform/sleeper    10 views
```

---

## 🎯 Common Issues

| Problem | Solution |
|---------|----------|
| Not seeing data | Wait 24 hours for GA to populate |
| Only seeing yourself | That's normal at first! Real traffic will appear |
| Traffic showing as "Direct" | These are your UTM links being found by GA |
| No real-time data | Make sure script is loaded: Check DevTools → Console |

---

## 💡 Next Steps

1. ✅ Add GA4 code to your site
2. ✅ Deploy to Vercel
3. ⏳ Wait 24 hours for data
4. 📊 Create custom dashboard
5. 🔍 Track affiliate clicks per source

---

## 🚀 Your Tracking URLs (Copy & Paste)

Save these somewhere safe:

```
GOOGLE:     https://propstars.vercel.app/?utm_source=google&utm_medium=organic&utm_campaign=search-gsc
BING:       https://propstars.vercel.app/?utm_source=bing&utm_medium=organic&utm_campaign=search-bing
YANDEX:     https://propstars.vercel.app/?utm_source=yandex&utm_medium=organic&utm_campaign=search-yandex
DUCKDUCKGO: https://propstars.vercel.app/?utm_source=duckduckgo&utm_medium=organic&utm_campaign=search-ddg
REDDIT:     https://propstars.vercel.app/?utm_source=reddit&utm_medium=social&utm_campaign=reddit-post
QUORA:      https://propstars.vercel.app/?utm_source=quora&utm_medium=social&utm_campaign=quora-answer
```

---

**Your analytics are now ready to track every visitor!** 📊✨
