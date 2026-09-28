export const usage = {
  spent: '$1,240.50',
  pct: 25,
  limitText: '25% of $5,000 limit',
  left: '$3,759.50 left',
};

export const cardStatus = [
  { label: 'Card number', value: '•••• 4821' },
  { label: 'Status', value: 'Active', tone: 'green' },
  { label: 'Card type', value: 'Polaris Black' },
  { label: 'Expires', value: '08/28' },
];

export const actions = [
  { label: 'Freeze', active: true },
  { label: 'Details' },
  { label: 'Limits' },
  { label: 'More' },
];

export const controls = [
  { title: 'Online Purchases', text: 'Allow e-commerce payments', on: true },
  { title: 'International Payments', text: 'Transactions outside the US', on: false },
  { title: 'Contactless Payments', text: 'Tap to pay at terminals', on: true },
  { title: 'ATM Withdrawals', text: 'Cash withdrawals worldwide', on: true },
];
