// Product idea: Chatfollow, a WhatsApp Web sidebar for small businesses that sell on chat.
// Visuals are coded mockups (components/mockups/Chatfollow*). Names are fictional.
export default {
  intro:
    'Chatfollow is a Chrome extension idea for businesses that sell on WhatsApp. It adds a small sidebar to WhatsApp Web where every chat becomes a lead with a stage, a value and a follow up reminder, so no enquiry quietly disappears.',
  cover: { mockup: 'chatfollow', theme: 'ember' },
  facts: [
    { label: 'Role', value: 'Idea, product design and frontend' },
    { label: 'Type', value: 'Chrome extension' },
    { label: 'Year', value: '2026' },
    { label: 'Status', value: 'Concept' },
  ],
  sections: [
    {
      id: 'problem',
      nav: 'Problem',
      eyebrow: 'Problem',
      title: 'Customers message on WhatsApp, and leads get buried',
      body: [
        'In India most enquiries for interiors, clinics, builders and agencies start on WhatsApp. But WhatsApp has no pipeline. A quote goes out, the customer says they will get back, and three days later that chat is forty messages down the list. Nobody meant to ignore them. There was just nothing to remind you.',
      ],
      blocks: [
        {
          type: 'cards',
          items: [
            { title: 'No stages', text: 'You cannot tell a new enquiry from a sent quote or a closed deal just by looking at the chat list.' },
            { title: 'No reminders', text: 'Follow ups live in someone’s memory, so they happen late or not at all.' },
            { title: 'CRMs feel heavy', text: 'Small teams will not copy every chat into a separate CRM. The work has to stay inside WhatsApp.' },
          ],
        },
      ],
    },
    {
      id: 'how',
      nav: 'How it works',
      eyebrow: 'How it works',
      title: 'A sidebar right next to the chat',
      body: [
        'Open WhatsApp Web and Chatfollow sits beside the conversation. Tag the chat with a stage, add the deal value and where the customer came from, and set a follow up with a short note to your future self.',
      ],
      blocks: [
        {
          type: 'media',
          mockup: 'chatfollow',
          caption: 'Stages on every chat, a lead card beside the conversation and a reminder for tomorrow morning.',
        },
        {
          type: 'cards',
          columns: 4,
          items: [
            { title: 'Tag the chat', text: 'New, Quoted, Won or Lost in one click.' },
            { title: 'Add the details', text: 'Deal value, source and notes stay with the chat.' },
            { title: 'Set a follow up', text: 'Pick a time and write what to ask.' },
            { title: 'Get nudged', text: 'Chats that go quiet get flagged before the lead goes cold.' },
          ],
        },
      ],
    },
    {
      id: 'pipeline',
      nav: 'Pipeline',
      eyebrow: 'Pipeline',
      title: 'Every open lead on one board',
      body: [
        'Each morning the board shows who is waiting on you, how much money is sitting in quotes and which chats have gone quiet. One tap on a card jumps straight back into that WhatsApp chat.',
      ],
      blocks: [
        {
          type: 'media',
          mockup: 'chatfollowBoard',
          caption: 'The pipeline board: leads grouped by stage, with quiet chats highlighted.',
        },
      ],
    },
    {
      id: 'next',
      nav: 'What’s next',
      eyebrow: 'What’s next',
      title: 'How I would build it',
      body: [
        'A Manifest V3 extension that adds a React sidebar to WhatsApp Web and reads only the open chat’s name, never message content, to link it to a lead. Leads and reminders sync through Supabase so a small team can share one pipeline.',
      ],
      blocks: [
        {
          type: 'insights',
          items: [
            { title: 'Team handover', text: 'Assign a lead to a teammate with the full context attached.' },
            { title: 'Quick replies', text: 'Saved templates for price lists, brochures and payment details.' },
            { title: 'Monthly report', text: 'Leads won, lost and where the best ones came from.' },
            { title: 'Privacy first', text: 'Chats stay in WhatsApp. Only the lead card is stored.' },
          ],
        },
      ],
    },
  ],
};
