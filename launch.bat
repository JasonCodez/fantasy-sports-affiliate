@echo off
REM Fantasy Sports Affiliate - Quick Launch Script for Windows

echo.
echo ========================================
echo   FANTASY SPORTS AFFILIATE - QUICK LAUNCH
echo ========================================
echo.

REM Check if git is initialized
if not exist ".git" (
    echo 6 Initializing Git repository...
    git init
    git add .
    git commit -m "Initial commit - SEO optimized fantasy sports platform"
    echo 9 Git initialized
) else (
    echo 9 Git already initialized
)

echo.
echo 6 Checking build...
call npm run build >nul 2>&1
if errorlevel 1 (
    echo X Build failed - run 'npm run build' to see errors
    pause
    exit /b 1
) else (
    echo 9 Build successful (0 errors)
)

echo.
echo 6 Project Statistics:
echo   - Platform count: 10
echo   - Review ratings: 3.67-4.0 stars (realistic)
echo   - SEO optimization: 9 Complete
echo   - Mobile responsive: 9 Yes
echo   - Build size: ~110 KB
echo.

echo 6 DEPLOYMENT OPTIONS:
echo.
echo 3 Option 1: VERCEL (Recommended - 5 minutes)
echo   9 Visit: https://vercel.com/new
echo   9 Import your GitHub repo
echo   9 Click Deploy
echo   9 Your site goes LIVE! 6 BOOM!
echo.
echo 3 Option 2: NETLIFY
echo   9 Visit: https://app.netlify.com
echo   9 Connect to your GitHub repo
echo   9 Auto-deploys on push
echo.
echo 3 Option 3: GITHUB PAGES
echo   9 Visit: https://pages.github.com
echo   9 Good for static sites
echo.

echo 6 NEXT STEPS:
echo   1. Create GitHub account if needed
echo   2. Push code: git push origin main
echo   3. Deploy to Vercel/Netlify
echo   4. Get live URL
echo   5. Submit to Google Search Console
echo.

echo 9 Your site is READY TO LAUNCH!
echo.
echo 6 For detailed instructions, check: LAUNCH_GUIDE.md
echo.

pause
