// Case study: Aviera — Making financial data easier to understand
// Photos live in /public/images/aviera/ — replace the placeholders with your own.
export default {
  intro:
    'I redesigned key parts of a financial dashboard to improve transaction visibility, simplify navigation, and help users understand their finances faster during everyday workflows.',
  cover: { mockup: 'cardShowcase', theme: 'sky' },
  facts: [
    { label: 'Role', value: 'Product Designer' },
    { label: 'Timeline', value: 'July 2025' },
    { label: 'Team', value: '3 Designers' },
    { label: 'Platform', value: 'Web application' },
  ],
  sections: [
    {
      id: 'overview',
      nav: 'Overview',
      eyebrow: 'Overview',
      title: 'Making financial data easier to understand',
      body: [
        'Aviera is a financial dashboard concept focused on helping small business teams better understand spending activity and everyday financial workflows. The redesign explored how clearer hierarchy, improved transaction visibility, and more structured layouts could reduce friction across the platform.',
      ],
      blocks: [
        {
          type: 'text',
          title: 'The Impact',
          body: [
            'The redesign focused on improving clarity across the dashboard through better hierarchy, cleaner spacing, and more visible transaction details. The updated experience made everyday financial workflows easier to scan and navigate while introducing lightweight interactions that surfaced more context when needed.',
          ],
        },
        {
          type: 'stats',
          items: [
            { value: '+32%', label: 'Balance check speed', meta: '2.5 min → 1.7 min' },
            { value: '+41%', label: 'Transaction clarity', meta: '34% → 48% confidence' },
            { value: '−25%', label: 'Navigation steps', meta: '4 steps → 3 steps' },
          ],
        },
      ],
    },
    {
      id: 'problem',
      nav: 'Problem',
      eyebrow: 'Problem',
      title: 'Understanding financial activity felt unnecessarily difficult',
      body: [
        'The existing dashboard contained large amounts of financial data, but weak hierarchy and dense layouts made balances, transactions, and actions harder to interpret during everyday use. Users frequently paused to compare balances, reopen transaction details, and rescan sections before feeling confident enough to take action.',
      ],
      blocks: [
        {
          type: 'media',
          mockup: 'finance',
          canvasHeight: 490,
          // Marker centres in mockup canvas px (667 × 490)
          markers: [
            { n: 1, x: 54, y: 67 },
            { n: 2, x: 588, y: 279 },
            { n: 3, x: 86, y: 374 },
          ],
        },
        {
          type: 'cards',
          items: [
            { title: 'Weak hierarchy', text: 'Balances and supporting details competed for attention throughout the interface and reduced clarity.' },
            { title: 'Inconsistent spacing', text: 'Grouping and inconsistent spacing slowed down dashboard scanning across everyday workflows.' },
            { title: 'Workflow friction', text: 'Important actions required extra steps to access transaction details and payment context.' },
          ],
        },
      ],
    },
    {
      id: 'research',
      nav: 'Research',
      eyebrow: 'Research',
      title: 'Looking beyond the numbers',
      body: [
        'To better understand where friction appeared across the dashboard, I reviewed financial workflows and conducted user interviews with people regularly managing transactions, balances, and payment activity. The research focused on how users scanned information, interpreted financial context, and navigated everyday tasks across the interface.',
      ],
      blocks: [
        {
          type: 'media',
          src: '/images/aviera/research-session.jpg',
          alt: 'Two people reviewing a laptop during a research session',
          aspect: '16 / 9',
        },
        {
          type: 'cards',
          numbered: false,
          items: [
            { title: '5 users', text: 'Small business owners and finance professionals.' },
            { title: '45 minutes', text: 'Moderated sessions focused on dashboard workflows.' },
            { title: '3 tasks', text: 'Reviewing balances, transactions, and payments.' },
          ],
        },
        {
          type: 'text',
          title: 'What we learned',
          body: [
            'Through interviews and workflow analysis, I identified recurring patterns in how users reviewed balances, tracked transactions, and navigated everyday financial tasks. The biggest issue wasn’t financial complexity itself. It was uncertainty. Users often stopped to compare balances, reopen transaction details, or rescan multiple sections before taking action. Similar visual weight across the interface made it difficult to quickly identify what mattered most.',
          ],
        },
        {
          type: 'quote',
          text: 'Most of the time, I understood the numbers. I just didn’t understand what needed my attention first. I kept jumping between balances, transactions, and reports to make sure I wasn’t missing something important before taking action.',
          name: 'Interview participant',
          role: 'E-commerce founder',
        },
        {
          type: 'text',
          title: 'Organizing recurring patterns and behaviors',
          body: [
            'I used Claude AI to help cluster interview notes, recurring frustrations, and behavioral patterns into broader themes. This made it easier to identify where users experienced the most friction across the dashboard experience.',
          ],
        },
        {
          type: 'affinity',
          groups: [
            {
              label: 'Feedback and confirmation clarity',
              color: 'purple',
              notes: [
                'Transaction outcomes didn’t feel clear enough',
                'Users relied on email confirmations',
                'System feedback felt passive during payments',
                'Users wanted more visibility into processing',
                'People paused before leaving confirmation screens',
                'Failed and pending actions looked too similar',
                'Success states disappeared too quickly',
                'Receipts were hard to find later',
              ],
            },
            {
              label: 'Balance and hierarchy',
              color: 'green',
              notes: [
                'Available balance wasn’t the first thing seen',
                'Limits and usage felt disconnected',
                'Pending amounts caused confusion',
                'Too many numbers had equal weight',
                'Users rescanned before acting',
                'Due dates were easy to miss',
                'Wanted a quick “all good” signal',
              ],
            },
            {
              label: 'Transaction context',
              color: 'blue',
              notes: [
                'Merchant names were hard to recognise',
                'Categories felt inconsistent',
                'Details required too many clicks',
                'Wanted weekly comparisons',
                'Long lists lacked grouping',
                'Refunds were hard to spot',
              ],
            },
            {
              label: 'Navigation and actions',
              color: 'pink',
              notes: [
                'Key actions hidden in menus',
                'Jumping between tabs to compare',
                'Pay balance took too many steps',
                'Settings felt scattered',
                'Reports lived too far away',
                'Wanted shortcuts on overview',
              ],
            },
          ],
        },
        { type: 'text', title: 'Key insights' },
        {
          type: 'insights',
          items: [
            { icon: 'eye', text: 'Users want to quickly identify the most relevant financial information first.' },
            { icon: 'layers', text: 'Transactions need clearer grouping and visual separation to feel understandable.' },
            { icon: 'search', text: 'Important financial actions should be reachable without deep navigation.' },
            { icon: 'sliders', text: 'Spending insights feel more useful when paired with context and comparisons.' },
          ],
        },
        {
          type: 'text',
          title: 'Understanding the user journey',
          body: [
            'Mapping the most common financial workflows helped reveal where users hesitated, where information was missing, and which moments shaped their trust in the product.',
          ],
        },
        {
          type: 'journey',
          stages: [
            { title: 'Checking balances', goals: 'Quickly understand available funds and overall account health.', pains: 'Balances, limits and pending amounts are scattered.', needs: 'A clear summary with visual progress towards the limit.' },
            { title: 'Reviewing transactions', goals: 'Spot unusual charges and understand recent spending.', pains: 'Long, flat lists with little grouping or context.', needs: 'Grouped activity with categories and quick details.' },
            { title: 'Managing payments', goals: 'Pay on time and avoid interest or late fees.', pains: 'Due dates and payment actions are hard to find.', needs: 'Visible due dates and a one-tap pay action.' },
            { title: 'Scanning data', goals: 'See how this week compares to normal spending.', pains: 'Charts lack comparison or explanation.', needs: 'Weekly trends with simple above/below average cues.' },
          ],
        },
      ],
    },
    {
      id: 'ideation',
      nav: 'Ideation',
      eyebrow: 'Ideation',
      title: 'Exploring interface directions',
      body: [
        'Using the research, I explored several layout directions that balanced density with clarity. Each concept tested a different way of prioritizing balances, activity, and actions before converging on a single direction.',
      ],
      blocks: [
        {
          type: 'media',
          mockup: 'wireframes',
          caption: 'Exploring different dashboard concepts focused on hierarchy, transaction visibility, and clearer everyday financial workflows.',
        },
        {
          type: 'cards',
          items: [
            { title: 'Focused overview', text: 'Centered on a single balance summary with supporting details tucked below.' },
            { title: 'Modular layouts', text: 'Flexible cards that could be rearranged, but diluted the key numbers.' },
            { title: 'Task-oriented flows', text: 'Balances first, activity second, and actions always within reach. This became the chosen direction.', highlight: true },
          ],
        },
        {
          type: 'text',
          title: 'Testing interaction flows early',
          body: [
            'Before moving into high fidelity, I tested interaction flows using paper prototypes. This helped validate the order of information, navigation patterns, and moments of confidence without investing in visual detail too early.',
          ],
        },
        {
          type: 'media',
          src: '/images/aviera/paper-prototypes.jpg',
          alt: 'Paper prototypes of dashboard screens laid out on a table',
          aspect: '16 / 9',
        },
      ],
    },
    {
      id: 'designs',
      nav: 'Designs',
      eyebrow: 'Designs',
      title: 'Refining the dashboard experience',
      body: [
        'The final designs focused on making everyday financial tasks feel effortless. Clearer hierarchy, better grouping, and lightweight interactions helped users understand their finances at a glance.',
      ],
      blocks: [
        {
          type: 'media',
          mockup: 'analytics',
          caption: 'Overview of spending trends, category insights, and budget usage designed for faster scanning.',
        },
        {
          type: 'media',
          mockup: 'cardSettings',
          caption: 'Card controls combine usage, status, and security settings in one calm view.',
        },
        {
          type: 'media',
          mockup: 'finance',
          caption: 'A simplified overview focused on balance clarity, recent activity, and weekly spending behavior.',
        },
        {
          type: 'text',
          title: 'Before & after',
          body: [
            'The redesign focused on improving clarity across everyday financial workflows by simplifying information, strengthening visual hierarchy, and surfacing the most important actions and insights.',
          ],
        },
        { type: 'compare', before: 'legacy', after: 'finance' },
        {
          type: 'cards',
          items: [
            { title: 'Clearer balance hierarchy', text: 'Available balance and credit usage are now the first things users see.' },
            { title: 'More understandable activity flows', text: 'Grouped transactions with categories make recent spending easy to review.' },
            { title: 'Simplified navigation patterns', text: 'Key actions like paying a balance are always one tap away.' },
          ],
        },
      ],
    },
    {
      id: 'lessons',
      nav: 'Lessons',
      eyebrow: 'Lessons',
      title: 'Designing for clarity, confidence, and everyday financial workflows',
      body: [
        'This project reinforced how strongly financial confidence is shaped by interface clarity rather than financial complexity itself. Throughout the redesign, I explored how hierarchy, spacing, and contextual feedback could reduce uncertainty during everyday financial tasks. One of the biggest learnings was recognizing how small interface decisions, like grouping, transaction context and action placement, significantly influenced how users interpreted information and navigated the product.',
      ],
      blocks: [
        { type: 'text', title: 'Key outcomes' },
        {
          type: 'insights',
          items: [
            { title: 'Clearer hierarchy', text: 'Improved separation between balances, transactions, and supporting details.' },
            { title: 'Faster dashboard scanning', text: 'Reduced visual competition across key financial workflows and actions.' },
            { title: 'More contextual activity', text: 'Introduced transaction states, merchant context, and clearer activity grouping.' },
            { title: 'Scalable design system', text: 'Created reusable dashboard patterns and modular components for future features.' },
          ],
        },
      ],
    },
  ],
};
