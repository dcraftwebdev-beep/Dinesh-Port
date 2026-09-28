// Case study: Lunch Register — internal tool built at Firebrand Labs
// Screenshots: /public/projects/lunch-register/ (team emails blurred for privacy).
const DASHBOARD = 1894 / 998;
const DEMO = 1680 / 926; // scripted showcase recording (tools/showcase), emails blurred
const BASECAMP = 1670 / 905;
const BASECAMP_CANCEL = 1670 / 901;
const URL = 'firebrandlabs · Internal Portal';

export default {
  intro:
    'I built an internal lunch register for Firebrand Labs: a Basecamp bot collects who’s in for lunch, every entry lands automatically on an admin dashboard, and the final list is sent to the kitchen the moment orders close.',
  cover: {
    theme: 'ember',
    media: { type: 'video', src: '/projects/lunch-register/dashboard-demo.mp4', poster: '/projects/lunch-register/dashboard-demo-poster.webp', url: 'fbl-lunch.vercel.app', ratio: DEMO },
  },
  facts: [
    { label: 'Role', value: 'Design & Full-stack Development' },
    { label: 'Company', value: 'Firebrand Labs (internal tool)' },
    { label: 'Year', value: '2026' },
    { label: 'Platform', value: 'Basecamp bot + admin dashboard' },
  ],
  sections: [
    {
      id: 'problem',
      nav: 'Problem',
      eyebrow: 'Problem',
      title: 'Counting lunch every day was manual and error-prone',
      body: [
        'Every morning someone had to ask the team who wanted lunch, collect replies scattered across chat, count veg and non-veg plates, and pass the number to the kitchen before the cut-off. People missed the message, replied late or changed their minds. And there was no record of who ate on which day.',
      ],
      blocks: [
        {
          type: 'cards',
          items: [
            { title: 'Scattered replies', text: 'Lunch confirmations were buried in chat threads, so counting them meant scrolling and tallying by hand.' },
            { title: 'Late or wrong counts', text: 'Missed or last-minute replies meant the kitchen cooked too much or too little.' },
            { title: 'No history', text: 'Without a register there was no easy way to see attendance, averages or month-end totals.' },
          ],
        },
      ],
    },
    {
      id: 'solution',
      nav: 'Solution',
      eyebrow: 'Solution',
      title: 'A bot where the team already talks, a dashboard for the admin',
      body: [
        'Instead of asking people to learn a new app, the entry point lives inside Basecamp, where the team already works. The bot handles the daily roll-call, and everything it collects flows straight into an admin dashboard.',
      ],
      blocks: [
        {
          type: 'media',
          browser: { type: 'image', src: '/projects/lunch-register/basecamp-bot.webp', url: 'basecamp.com · Chat', ratio: BASECAMP },
          caption: 'The bot in Basecamp chat: confirming an entry, a 15-minute reminder, and the final list sent to the kitchen.',
        },
        {
          type: 'cards',
          columns: 4,
          items: [
            { title: 'Type “!lunch in”', text: 'Teammates join in the Basecamp chat they already use. Regulars marked ★ default are added automatically each morning.' },
            { title: 'Instant confirmation', text: 'The bot replies right away with “Sahana IN for today (veg). 7 plates.” and the entry lands on the dashboard.' },
            { title: 'Reminder at 11:00', text: '“15 minutes left!” The bot posts who’s in so far and the current count, nudging anyone who forgot.' },
            { title: 'Final list at 11:15', text: 'Orders close, the bot locks the list and the final plate count is sent to the kitchen automatically.' },
          ],
        },
      ],
    },
    {
      id: 'rules',
      nav: 'Bot rules',
      eyebrow: 'Bot rules',
      title: 'Fair rules, enforced with a sense of humour',
      body: [
        'Once the kitchen has the final count, changes cause waste. So the bot enforces the cut-off itself: before 11:15 anyone can join or drop out, after 11:15 the list is locked. Instead of a dry error, it replies with a bit of personality, which is a big part of why the team actually enjoys using it.',
      ],
      blocks: [
        {
          type: 'media',
          browser: { type: 'image', src: '/projects/lunch-register/basecamp-cancel.webp', url: 'basecamp.com · Chat', ratio: BASECAMP_CANCEL },
          caption: 'Trying to cancel after the cut-off: “Cancel? The kitchen already counted your plate. Denied. 👋”',
        },
        {
          type: 'insights',
          items: [
            { title: '!lunch in', text: 'Join today’s list any time before 11:15 AM and the bot confirms instantly with the updated plate count.' },
            { title: '!lunch out', text: 'Changed plans? Drop out before the cut-off and your plate is removed from the count.' },
            { title: 'Locked after 11:15', text: 'Once the list is sent to the kitchen, late cancellations are politely (and playfully) denied.' },
            { title: 'A bot with personality', text: 'Friendly, witty replies turn a daily chore into a small team ritual people look forward to.' },
          ],
        },
      ],
    },
    {
      id: 'emails',
      nav: 'Emails',
      eyebrow: 'Emails',
      title: 'A little note in your inbox, either way',
      body: [
        'Chat messages scroll away fast, so the system also sends a short email. If you signed up, you get a clear yes. If you forgot, you get a friendly nudge and the exact steps for tomorrow. Both carry the same voice as the bot, so it feels like one product and not three separate tools.',
      ],
      blocks: [
        {
          type: 'media',
          src: '/projects/lunch-register/emails-clean.webp',
          alt: 'Two lunch register emails: “Your lunch is sorted” and “No lunch marked today”',
          aspect: '2000 / 1198',
          caption: 'Left: the confirmation after a teammate joins. Right: the nudge when someone misses the register.',
        },
        {
          type: 'cards',
          items: [
            { title: 'Your lunch is sorted ✅', text: 'Sent as soon as you are on the list. It thanks you for being on time and tells you there is nothing more to do.' },
            { title: 'No lunch marked today 👀', text: 'Missed the cut-off? A light joke about eating out every day instead of a boring warning.' },
            { title: 'Always a next step', text: 'The missed email ends with the fix: type !lunch in on Basecamp before 11:15 AM and a plate is yours.' },
          ],
        },
      ],
    },
    {
      id: 'dashboard',
      nav: 'Dashboard',
      eyebrow: 'Admin dashboard',
      title: 'Today’s lunch at a glance',
      body: [
        'The admin sees exactly how many plates to cook, the veg / non-veg split and trends like the 10-day average, and can handle the exceptions that bots can’t.',
      ],
      blocks: [
        {
          type: 'media',
          browser: { type: 'video', src: '/projects/lunch-register/dashboard-demo.mp4', poster: '/projects/lunch-register/dashboard-demo-poster.webp', url: 'fbl-lunch.vercel.app', ratio: DEMO },
          caption: 'Dashboard tour: today’s plate count, the attendance register, the kitchen hand-off, Excel export and the team roster (emails blurred).',
        },
        {
          type: 'insights',
          items: [
            { title: 'Order window status', text: 'Shows when orders open (~10:00 AM) and close (11:15 AM), so everyone knows the cut-off.' },
            { title: 'Guest plates & notes', text: 'Add plates for visitors and leave notes like “Friday biryani · two Jain meals”.' },
            { title: 'One-tap exceptions', text: '“No cooking today” for holidays and “Copy yesterday’s list” for repeat days.' },
            { title: 'Useful numbers', text: 'Plates to cook, veg / non-veg split, 10-day average and the most regular diner.' },
          ],
        },
      ],
    },
    {
      id: 'register',
      nav: 'Register',
      eyebrow: 'The register',
      title: 'A clear record of every lunch, every day',
      body: [
        'A member × date grid replaces guesswork with history. Admins can click any cell to correct a day, browse past weeks and see each person’s total.',
      ],
      blocks: [
        {
          type: 'media',
          browser: { type: 'image', src: '/projects/lunch-register/register-grid.webp', url: URL, ratio: DASHBOARD },
          caption: 'The register: attendance for each teammate across the last 10 days, with per-person totals.',
        },
      ],
    },
    {
      id: 'admin',
      nav: 'Admin tools',
      eyebrow: 'Admin tools',
      title: 'Roster, kitchen and reports in one place',
      body: [
        'Everything the admin needs to run lunch lives on the same page, from managing the team roster to sending the list to the kitchen and exporting reports.',
      ],
      blocks: [
        {
          type: 'media',
          browser: { type: 'image', src: '/projects/lunch-register/admin-tools.webp', url: URL, ratio: DASHBOARD },
          caption: 'Kitchen hand-off, Excel export and the team roster (emails blurred for privacy).',
        },
        {
          type: 'cards',
          items: [
            { title: 'Team roster', text: 'Add members with veg / non-veg preference, toggle ★ default to auto-add regulars, and mark people as left while keeping their history.' },
            { title: 'Kitchen hand-off', text: 'The final list is auto-sent to the cook at 11:15 AM, with a “Send today’s list now” button for on-demand updates.' },
            { title: 'Excel reports', text: 'Download the full member × date register plus a daily summary (headcount, veg / non-veg, guest plates, notes).' },
          ],
        },
      ],
    },
    {
      id: 'impact',
      nav: 'Impact',
      eyebrow: 'Impact',
      title: 'Lunch now runs itself',
      body: [
        'The daily roll-call, counting and kitchen hand-off happen automatically. The admin only steps in for exceptions, and the company finally has an accurate record of lunch attendance.',
      ],
      blocks: [
        {
          type: 'insights',
          items: [
            { title: 'No more manual counting', text: 'The bot and dashboard replace chat tallies and last-minute messages.' },
            { title: 'Accurate plate counts', text: 'The kitchen receives a final, veg / non-veg split list exactly at cut-off.' },
            { title: 'Zero learning curve', text: 'The team keeps using Basecamp. The tool meets them where they already are.' },
            { title: 'Reliable records', text: 'A full attendance history and Excel exports for month-end reporting.' },
          ],
        },
      ],
    },
  ],
};
