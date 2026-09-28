// Product idea: AdPeek, a Chrome extension for competitor ad research
// Visuals are coded mockups (components/mockups/AdPeek*). Brands shown are fictional.
export default {
  intro:
    'AdPeek is a Chrome extension idea for startups. Open any competitor’s website, click the icon, and see every ad they are running on Meta and Google, the offers they keep testing and the pages those ads send people to. Save the good ones to a swipe file your whole team can use.',
  cover: { mockup: 'adpeek', theme: 'sky' },
  facts: [
    { label: 'Role', value: 'Idea, product design and frontend' },
    { label: 'Type', value: 'Chrome extension' },
    { label: 'Year', value: '2026' },
    { label: 'Status', value: 'Concept' },
  ],
  sections: [
    {
      id: 'idea',
      nav: 'Idea',
      eyebrow: 'The idea',
      title: 'Competitor ad research in one click',
      body: [
        'Every founder I have worked with asks the same question before spending on ads: what is working for everyone else? The answer is public. Meta and Google both publish the ads every brand is running. It is just painful to find, and nobody has time to dig through it every week.',
        'AdPeek brings that answer to the place you already are. You visit a competitor’s site, and their ads are one click away.',
      ],
      blocks: [
        {
          type: 'cards',
          items: [
            { title: 'Lives in your browser', text: 'No new dashboard to log into. It opens as a side panel on the site you are looking at.' },
            { title: 'Built on public data', text: 'Ads come from Meta Ad Library and Google Ads Transparency Center, which anyone can already view.' },
            { title: 'Made for small teams', text: 'Priced and designed for startups, not for agencies with a research department.' },
          ],
        },
      ],
    },
    {
      id: 'problem',
      nav: 'Problem',
      eyebrow: 'Problem',
      title: 'Ad research is slow, scattered and priced for big budgets',
      body: [
        'Today a founder has to open the ad libraries, search one brand at a time, scroll through hundreds of creatives and screenshot anything useful into a folder they will never open again. There is no history, so you cannot tell which offer they dropped and which one they kept running for two months. The paid tools that solve this often cost more than a startup spends on ads in a month.',
      ],
      blocks: [
        {
          type: 'cards',
          items: [
            { title: 'Too many steps', text: 'Separate libraries for Meta and Google, clunky search, and no link to the brand’s own website.' },
            { title: 'No context', text: 'You see an ad, but not how long it has run, what else they tested or where it leads.' },
            { title: 'Ideas get lost', text: 'Good references end up in camera rolls and random WhatsApp chats instead of one shared place.' },
          ],
        },
      ],
    },
    {
      id: 'people',
      nav: 'Who it’s for',
      eyebrow: 'Who it’s for',
      title: 'People doing marketing with a small team and a tight budget',
      body: [
        'AdPeek is for anyone who has to plan a campaign without a research team behind them.',
      ],
      blocks: [
        {
          type: 'cards',
          columns: 4,
          items: [
            { title: 'Founders', text: 'Running their own ads and wanting to know what the category leaders are doing before spending.' },
            { title: 'D2C brands', text: 'Tracking competitor offers around sales, launches and festive seasons like Diwali.' },
            { title: 'Freelance marketers', text: 'Pitching clients with real examples of what is working in their market.' },
            { title: 'Small agencies', text: 'Building a shared library of hooks and creatives the whole team can pull from.' },
          ],
        },
      ],
    },
    {
      id: 'how',
      nav: 'How it works',
      eyebrow: 'How it works',
      title: 'Visit a site, open the panel, see their ads',
      body: [
        'AdPeek reads the domain of the page you are on, matches it to the brand’s advertiser pages and pulls in their active ads. Everything shows up in a side panel, so the competitor’s site stays in view while you research it.',
      ],
      blocks: [
        {
          type: 'media',
          mockup: 'adpeek',
          caption: 'The side panel open on a competitor’s store: live ads, where they run and how long each one has been running.',
        },
        {
          type: 'cards',
          columns: 4,
          items: [
            { title: 'Visit a competitor', text: 'Browse any brand’s website the way you normally would.' },
            { title: 'Click AdPeek', text: 'The side panel finds the brand and loads its active ads in seconds.' },
            { title: 'Read the signals', text: 'See platforms, offers, run time and the landing page for every ad.' },
            { title: 'Save what works', text: 'One tap adds an ad to your swipe file with a tag and a note.' },
          ],
        },
      ],
    },
    {
      id: 'insights',
      nav: 'Insights',
      eyebrow: 'Insights',
      title: 'Not just a list of ads, a picture of their strategy',
      body: [
        'A single ad tells you very little. Ninety days of ads tell you a lot. AdPeek groups a brand’s history so you can see what they are testing, what they keep and where they send the traffic.',
      ],
      blocks: [
        {
          type: 'media',
          mockup: 'adpeekInsights',
          caption: 'Insights for one brand: the offers they rotated, the hooks they rely on and the ads that have run the longest.',
        },
        {
          type: 'insights',
          items: [
            { title: 'Offer timeline', text: 'See when a discount started, how long it lasted and what replaced it.' },
            { title: 'Top hooks', text: 'Ads grouped by angle, like price drop, customer story or fast delivery.' },
            { title: 'Likely winners', text: 'Brands rarely keep paying for ads that fail, so the longest running ones rise to the top.' },
            { title: 'Landing pages', text: 'Every page their ads point to, with a count, so you can study the full funnel.' },
          ],
        },
      ],
    },
    {
      id: 'swipe',
      nav: 'Swipe file',
      eyebrow: 'Swipe file',
      title: 'One place for every ad worth remembering',
      body: [
        'Saved ads go into a swipe file instead of a camera roll. Collections, tags and search turn scattered screenshots into a library the team can open the next time they sit down to write a campaign.',
      ],
      blocks: [
        {
          type: 'media',
          mockup: 'adpeekSwipe',
          caption: 'The swipe file: saved ads from different brands, sorted into collections and ready to share.',
        },
        {
          type: 'cards',
          items: [
            { title: 'Collections', text: 'Group saves by offers, hooks, customer stories or seasons.' },
            { title: 'Search everything', text: 'Find an ad by brand, words in the copy or the tag you gave it.' },
            { title: 'Share with the team', text: 'Send a collection link to a teammate, a designer or a client.' },
          ],
        },
      ],
    },
    {
      id: 'next',
      nav: 'What’s next',
      eyebrow: 'What’s next',
      title: 'How I would build it and where it could go',
      body: [
        'The extension would use Chrome’s Manifest V3 side panel with a React interface, a small backend that fetches and caches ads from the public libraries, and Supabase to store swipe files and team accounts. The first version would focus on Meta ads only, since that is where most startups spend first.',
      ],
      blocks: [
        {
          type: 'insights',
          items: [
            { title: 'New ad alerts', text: 'Follow a competitor and get a ping when they launch a new offer.' },
            { title: 'Weekly digest', text: 'A short Monday email with what changed across the brands you follow.' },
            { title: 'Compare brands', text: 'Put two competitors side by side to see who is pushing harder and on what.' },
            { title: 'Write your own', text: 'Turn saved hooks into first drafts of ad copy in your brand’s voice.' },
          ],
        },
      ],
    },
  ],
};
