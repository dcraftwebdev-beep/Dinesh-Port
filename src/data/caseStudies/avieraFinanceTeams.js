// Case study: Aviera — Expanding Aviera for finance teams
export default {
  intro:
    'I extended Aviera from a personal finance tool into a workspace for finance teams, adding approval workflows, team spending and automations.',
  cover: { mockup: 'approvals', theme: 'ember' },
  facts: [
    { label: 'Role', value: 'Senior Product Designer' },
    { label: 'Timeline', value: 'Jun 2024 to Dec 2024' },
    { label: 'Team', value: '2 designers, 6 engineers, 1 PM' },
    { label: 'Platforms', value: 'Web application' },
  ],
  sections: [
    {
      id: 'overview',
      nav: 'Overview',
      eyebrow: 'Overview',
      title: 'Bringing teams into the product',
      body: [
        'As more small businesses adopted Aviera, finance leads needed a way to manage requests, reimbursements and budgets across their organization without leaving the product.',
      ],
      blocks: [
        {
          type: 'stats',
          items: [
            { value: '2.4d', label: 'Avg. approval time', meta: 'Down from 5.1 days' },
            { value: '+36%', label: 'Team adoption', meta: 'Accounts with 3+ members' },
            { value: '−45%', label: 'Manual follow-ups', meta: 'Thanks to automations' },
          ],
        },
      ],
    },
    {
      id: 'problem',
      nav: 'Problem',
      eyebrow: 'Problem',
      title: 'Approvals lived in email threads and spreadsheets',
      body: [
        'Requests were scattered across tools, making it hard to see what was pending, who was responsible and how spending tracked against budget.',
      ],
      blocks: [
        {
          type: 'cards',
          items: [
            { title: 'No single queue', text: 'Pending requests were spread across inboxes and chats.' },
            { title: 'Unclear ownership', text: 'Approvers didn’t know which requests needed them.' },
            { title: 'Budget blind spots', text: 'Spending was only reconciled at the end of the month.' },
          ],
        },
      ],
    },
    {
      id: 'designs',
      nav: 'Designs',
      eyebrow: 'Designs',
      title: 'One place for every request',
      body: [
        'Approval Workflows gives finance teams a single, prioritized queue with the context they need to decide quickly.',
      ],
      blocks: [
        { type: 'media', mockup: 'approvals', caption: 'Pending requests with owners, amounts and status at a glance.' },
        {
          type: 'cards',
          items: [
            { title: 'Prioritized queue', text: 'Urgent and high-value requests rise to the top.' },
            { title: 'Clear ownership', text: 'Each request shows its requester, team and approver.' },
            { title: 'Automations', text: 'Rules auto-approve routine spend under set thresholds.' },
          ],
        },
      ],
    },
    {
      id: 'lessons',
      nav: 'Lessons',
      eyebrow: 'Lessons',
      title: 'Scaling a product from one user to many',
      body: [
        'Designing for teams meant rethinking permissions, notifications and trust, while keeping the calm, simple feel that personal users loved.',
      ],
    },
  ],
};
