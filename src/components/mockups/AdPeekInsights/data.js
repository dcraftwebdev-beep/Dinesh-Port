// AdPeek concept: what one competitor has been testing over the last 90 days
export const weeks = ['Jul', 'Aug', 'Sep', 'Oct'];

// start / length in weeks (0 to 13)
export const offers = [
  { label: '10% off first order', start: 0, length: 4, tone: 'blue' },
  { label: 'Buy 2, get 1 free', start: 3, length: 7, tone: 'purple' },
  { label: 'Free delivery', start: 6, length: 3, tone: 'green' },
  { label: 'Diwali combo', start: 9, length: 4, tone: 'orange' },
];

export const hooks = [
  { label: 'Price drop', count: 9 },
  { label: 'Customer story', count: 6 },
  { label: 'Fast delivery', count: 4 },
  { label: 'Festival', count: 3 },
];

export const winners = [
  { hook: 'Buy 2, get 1 free this week only', days: 41 },
  { hook: '“I swapped my 3 PM chai for this”', days: 27 },
  { hook: 'Office pack for teams of 10', days: 19 },
];

export const pages = [
  { path: '/offers/buy-2-get-1', ads: 11 },
  { path: '/products/hazelnut', ads: 7 },
  { path: '/office-pack', ads: 4 },
];
