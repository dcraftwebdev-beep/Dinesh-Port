export const balance = {
  amount: '$1,240.50',
  limit: '$5,000',
  used: 24.8,
  stats: [
    { label: 'Available', value: '$3,759.50' },
    { label: 'Limit', value: '$5,000' },
    { label: 'Due in', value: '12 days' },
  ],
};

export const weeklySpending = [
  { day: 'Mon', value: 18, above: false },
  { day: 'Tue', value: 42, above: true },
  { day: 'Wed', value: 14, above: false },
  { day: 'Thu', value: 58, above: true },
  { day: 'Fri', value: 32, above: false },
  { day: 'Sat', value: 46, above: true },
  { day: 'Sun', value: 18, above: false },
];

export const activity = [
  { name: 'Starbucks', category: 'Food & Drink', amount: '−$12.40', date: 'Today', tone: 'orange' },
  { name: 'Apple.com', category: 'Subscriptions', amount: '−$14.99', date: 'Yesterday', tone: 'blue' },
  { name: 'Uber', category: 'Transport', amount: '−$24.50', date: 'May 2', tone: 'grey' },
  { name: 'Whole Foods', category: 'Groceries', amount: '−$84.20', date: 'May 1', tone: 'green' },
  { name: 'Netflix', category: 'Entertainment', amount: '−$15.99', date: 'Apr 30', tone: 'red' },
];
