// Chatfollow concept: WhatsApp Web with a lead sidebar. Names are fictional.
export const chats = [
  { name: 'Priya S.', text: 'Will check with my partner', time: '10:42', stage: 'Quoted', active: true },
  { name: 'Arun K.', text: 'Can you share the price list?', time: '10:15', stage: 'New', unread: 2 },
  { name: 'Meena R.', text: 'Payment done, thank you!', time: '09:58', stage: 'Won' },
  { name: 'Suresh V.', text: 'Is Saturday possible?', time: 'Yesterday', stage: 'Follow up' },
  { name: 'Divya M.', text: 'Okay noted', time: 'Mon', stage: 'Quoted' },
];

export const messages = [
  { from: 'them', text: 'Hi, do you do office interiors? Need a quote for 1,200 sq ft in OMR.' },
  { from: 'me', text: 'Yes, we do! Sharing our brochure and a rough estimate now.' },
  { from: 'me', file: 'Estimate_Priya.pdf' },
  { from: 'them', text: 'Thanks, will check with my partner and get back.' },
];

export const stages = ['New', 'Quoted', 'Won', 'Lost'];

export const fields = [
  { label: 'Deal value', value: '₹2,40,000' },
  { label: 'Came from', value: 'Instagram ad' },
  { label: 'Last reply', value: '3 days ago', warn: true },
];
