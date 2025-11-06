# Fantasy Sports Affiliate Website

A modern, fully functional fantasy sports affiliate website showcasing the top fantasy sports platforms with detailed information about each site and sign-up bonuses.

## 🚀 READY TO LAUNCH!

**Your site is production-ready!** See:
- **[QUICK START LAUNCH](./QUICK_START_LAUNCH.md)** - Deploy in 10 minutes ⚡
- **[LAUNCH GUIDE](./LAUNCH_GUIDE.md)** - Complete deployment instructions
- **[LAUNCH COMMAND CENTER](./LAUNCH_COMMAND_CENTER.md)** - Master launch guide

## Features

- 🎯 **10+ Fantasy Sports Platforms** - Underdog, FanDuel, PrizePicks, Sleeper, Parlay Play, BETR, DraftKings, Boom Fantasy, OwnersBox, and Dabble
- ⭐ **Star Ratings** - Real, honest 3-5 star ratings based on user reviews
- 💳 **Detailed Platform Cards** - Beautiful cards with platform info and bonuses
- 📱 **Responsive Design** - Perfect on desktop, tablet, and mobile devices
- 🔗 **Platform Deep Dives** - Click any platform to view comprehensive details
- 🎨 **Modern UI** - Gradient designs, smooth animations, and dark theme
- 💰 **Bonus Information** - Current sign-up bonus details for each platform
- 📋 **Honest Reviews** - User testimonials with constructive feedback
- ✅ **Pros/Cons Analysis** - Comprehensive platform comparisons
- 🔍 **SEO Optimized** - Full metadata, schema markup, and keyword optimization
- 📊 **Rich Snippets** - Star ratings appear in Google search results

## Platforms Included

1. **Underdog** - Fantasy League Contests
2. **FanDuel** - Daily Fantasy Sports Leader
3. **PrizePicks** - Prop Betting Simplified
4. **Sleeper** - Social Fantasy League Platform
5. **Parlay Play** - Parlay Contests Platform
6. **BETR** - Prediction-Based Contests
7. **DraftKings** - Largest DFS Platform
8. **Boom Fantasy** - Fun Fantasy Contests
9. **OwnersBox** - Innovative DFS Contests
10. **Dabble** - Micro-Contest Platform

## Technology Stack

- **Next.js 14** - React framework for production
- **Tailwind CSS** - Utility-first CSS framework
- **React** - UI library
- **JavaScript/JSX** - Programming language

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd fantasy_sports_affiliate
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

```
fantasy_sports_affiliate/
├── app/
│   ├── layout.js           # Root layout
│   ├── page.js             # Homepage with platform cards
│   └── platform/
│       └── [id]/
│           └── page.js     # Dynamic platform detail page
├── lib/
│   └── fantasySports.js    # Platform data and utilities
├── public/                 # Static assets
├── styles/
│   └── globals.css         # Global styles
├── tailwind.config.js      # Tailwind configuration
├── next.config.js          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint

## Features Breakdown

### Homepage (`/`)
- Grid layout of all fantasy sports platforms
- Platform cards with emojis, names, and bonuses
- Smooth hover effects and transitions
- Responsive design for all screen sizes
- Professional header and footer

### Platform Detail Pages (`/platform/[id]`)
- Comprehensive platform overview
- List of available sports
- Detailed welcome bonus information
- Step-by-step sign-up instructions
- Pros and cons analysis
- Quick start guide with icons
- Important notice about age requirements and gambling
- Links to other platforms
- Direct sign-up and website links

## Customization

### Adding New Platforms

Edit `lib/fantasySports.js` and add a new object to the `fantasySports` array:

```javascript
{
  id: 'platform-id',
  name: 'Platform Name',
  image: '🎯',
  shortDescription: 'Brief description',
  color: 'from-color-500 to-color-600',
  website: 'https://...',
  affiliateLink: 'https://...',
  bonus: 'Bonus details',
  description: 'Full description',
  details: {
    overview: '...',
    sports: ['Sport1', 'Sport2'],
    bonusInfo: '...',
    howToSignUp: ['Step 1', 'Step 2', ...],
    pros: ['Pro 1', 'Pro 2', ...],
    cons: ['Con 1', 'Con 2', ...],
  },
}
```

### Customizing Colors

Edit `tailwind.config.js` to change the color scheme, or modify the `color` property in platform objects.

## Affiliate Links

Update the `affiliateLink` and `website` properties in `lib/fantasySports.js` with your actual affiliate links to generate revenue.

## Responsive Breakpoints

- **Mobile**: < 640px (1 column)
- **Tablet**: 640px - 1024px (2-3 columns)
- **Desktop**: > 1024px (3-4 columns)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Fast page loads with Next.js optimization
- Lazy loading for images
- CSS-in-JS for smaller bundle size
- Optimized for Core Web Vitals

## SEO

The website includes:
- Semantic HTML structure
- Proper heading hierarchy
- Meta descriptions
- Open Graph tags ready for customization

## Legal

This website includes:
- 18+ age restriction notice
- Gambling responsibility warning
- Disclaimer that this is an affiliate website

⚠️ **Important**: Affiliate links are provided for informational purposes. Always review terms and conditions of each platform.

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please create an issue in the repository.

---

**Disclaimer**: This is an affiliate website. Please gamble responsibly. Must be 18+ to participate.
