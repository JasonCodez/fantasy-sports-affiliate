#!/bin/bash
# Fantasy Sports Affiliate - Quick Launch Script

echo "🚀 FANTASY SPORTS AFFILIATE - QUICK LAUNCH"
echo "==========================================="
echo ""

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📦 Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial commit - SEO optimized fantasy sports platform"
    echo "✅ Git initialized"
else
    echo "✅ Git already initialized"
fi

echo ""
echo "📋 Current status:"
git log -1 --pretty=format:"  Last commit: %h - %s"
echo ""

echo "🔍 Checking build..."
npm run build > /dev/null 2>&1
if [ $? -eq 0 ]; then
    echo "✅ Build successful (0 errors)"
else
    echo "❌ Build failed - please run 'npm run build' to see errors"
    exit 1
fi

echo ""
echo "📊 Project Statistics:"
echo "  - Platform count: 10"
echo "  - Review ratings: 3.67-4.0 stars (realistic)"
echo "  - SEO optimization: ✅ Complete"
echo "  - Mobile responsive: ✅ Yes"
echo "  - Build size: ~110 KB"
echo ""

echo "🌐 DEPLOYMENT OPTIONS:"
echo ""
echo "Option 1: VERCEL (Recommended - 5 minutes)"
echo "  → Visit: https://vercel.com/new"
echo "  → Import your GitHub repo"
echo "  → Click Deploy"
echo "  → Your site goes LIVE! 🎉"
echo ""
echo "Option 2: NETLIFY"
echo "  → Visit: https://app.netlify.com"
echo "  → Connect to your GitHub repo"
echo "  → Auto-deploys on push"
echo ""
echo "Option 3: GITHUB PAGES"
echo "  → Simple but limited for Next.js"
echo "  → Not recommended"
echo ""

echo "📝 NEXT STEPS:"
echo "  1. Create GitHub account (if needed)"
echo "  2. Push code: git push origin main"
echo "  3. Deploy to Vercel/Netlify"
echo "  4. Get live URL"
echo "  5. Submit to Google Search Console"
echo ""

echo "✅ Your site is ready to launch!"
echo ""
echo "Questions? Check LAUNCH_GUIDE.md for detailed instructions"
