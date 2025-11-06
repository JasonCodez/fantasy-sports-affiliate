const { fantasySportsWithCalculatedRatings } = require('./lib/fantasySports.js');

console.log('UPDATED PLATFORM RATINGS:\n');
fantasySportsWithCalculatedRatings.forEach(p => {
  const reviewRatings = p.reviews.map(r => r.rating);
  const avg = Math.round((reviewRatings.reduce((a, b) => a + b, 0) / reviewRatings.length) * 100) / 100;
  console.log(`${p.name.padEnd(20)} ${p.rating.toFixed(2)}★ (from reviews: ${reviewRatings.join(', ')})`);
});
