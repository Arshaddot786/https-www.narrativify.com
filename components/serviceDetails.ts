// Extended, in-depth content for each service page.
// Prices of third-party software are public list prices checked on the date in `PRICES_CHECKED`.
// They change often: re-check the linked sources before relying on them.

export const PRICES_CHECKED = 'November 2026';

export type Tool = {
  name: string;
  price: string;          // human-readable list price
  monthlyFrom: number;    // numeric entry price used in the example stacks
  covers: string;         // what the software does
  leaves: string;         // what you still have to do yourself
  source: string;         // public pricing page
};

export const tools: Record<string, Tool> = {
  buffer: {
    name: 'Buffer',
    price: 'From $6 per channel / month (Essentials); $12 per channel (Team)',
    monthlyFrom: 6,
    covers: 'Schedules posts and shows basic analytics for each connected channel.',
    leaves: 'Strategy, writing, design, replying and community management.',
    source: 'https://buffer.com/pricing'
  },
  hootsuite: {
    name: 'Hootsuite',
    price: 'From $99 per user / month (Standard, billed annually)',
    monthlyFrom: 99,
    covers: 'Scheduling, a shared inbox and reporting across channels.',
    leaves: 'Everything that has to be created, decided or said.',
    source: 'https://www.g2.com/products/hootsuite/pricing'
  },
  sprout: {
    name: 'Sprout Social',
    price: 'From $79 per seat / month (Essentials); $199 per seat (Standard), billed annually',
    monthlyFrom: 79,
    covers: 'Publishing, a smart inbox, reporting and some monitoring.',
    leaves: 'The strategy, content and conversations. Each extra seat costs extra.',
    source: 'https://www.g2.com/products/sprout-social/pricing'
  },
  brand24: {
    name: 'Brand24',
    price: 'From $199 per month (Individual plan)',
    monthlyFrom: 199,
    covers: 'Tracks mentions of your keywords and shows sentiment and reach dashboards.',
    leaves: 'Deciding which mentions matter, what they mean and what to do next.',
    source: 'https://www.capterra.com/p/149054/Brand24/pricing/'
  },
  redreplier: {
    name: 'RedReplier',
    price: 'From $19 per month (Starter)',
    monthlyFrom: 19,
    covers: 'Surfaces Reddit, X, Bluesky and Hacker News posts that match your keywords.',
    leaves: 'Judging fit, writing a useful reply and following the rules of each community.',
    source: 'https://www.capterra.com/p/10047817/RedReplier/'
  }
};

export type ServiceDetail = {
  process: { title: string; body: string }[];
  whoFor: { title: string; body: string }[];
  youProvide: { title: string; body: string }[];
  boundaries: string[];
  versus: { intro: string; toolKeys: string[]; ours: string; note: string };
};

export const serviceDetails: Record<string, ServiceDetail> = {
  'social-media-management': {
    process: [
      { title: 'Discover', body: 'We learn your offer, audience, tone and goals, then review your current profiles and what is working.' },
      { title: 'Plan', body: 'We agree the platforms, content themes and a publishing rhythm that fits your brand and capacity.' },
      { title: 'Create and publish', body: 'We write, design and publish posts, graphics and carousels, and take part in relevant conversations.' },
      { title: 'Review and refine', body: 'Each month you receive a performance review with practical recommendations for what to do next.' }
    ],
    whoFor: [
      { title: 'Busy founders and creators', body: 'You know what you offer but do not have the time to show up consistently.' },
      { title: 'Small teams', body: 'You need steady social presence without hiring a full-time social media person.' },
      { title: 'Brands refreshing their voice', body: 'Your channels are inconsistent and you want one clear, recognizable direction.' }
    ],
    youProvide: [
      { title: 'Access', body: 'Account access through each platform\'s own delegation or team tools wherever they exist.' },
      { title: 'Facts and assets', body: 'Your offers, brand assets and anything we must stay accurate about.' },
      { title: 'Timely feedback', body: 'Quick answers on drafts and on inquiries we hand off to you.' }
    ],
    boundaries: [
      'No purchased followers, likes or comments',
      'No fake accounts and no posing as customers',
      'No guaranteed follower, reach or sales numbers',
      'Clear disclosure whenever content is promotional'
    ],
    versus: {
      intro: 'Scheduling software is inexpensive, but it only publishes what you give it. Here is what the common tools cost and what they leave to you.',
      toolKeys: ['buffer', 'hootsuite', 'sprout'],
      ours: 'Narrativify Social Media Management is $149 to $349 per month and includes the strategy, content, graphics, engagement and reporting, done for you.',
      note: 'Software is cheaper in cash. The difference is who does the work every week.'
    }
  },
  'conversation-intelligence-radar': {
    process: [
      { title: 'Set up', body: 'We agree the keywords, topics, brands and competitors to watch, and the platforms that matter to you.' },
      { title: 'Monitor', body: 'We track supported platforms against your list and collect relevant conversations.' },
      { title: 'Review', body: 'A person filters noise and flags what is relevant, within your plan\'s alert allowance.' },
      { title: 'Report', body: 'You receive summaries, insights and recommended next steps, depending on your plan.' }
    ],
    whoFor: [
      { title: 'Brands that want to hear buyers', body: 'You want to know when people ask questions you can answer.' },
      { title: 'Teams watching competitors', body: 'You want to understand what is being said about others in your market.' },
      { title: 'Founders choosing what to create', body: 'You want real audience language to guide content and messaging.' }
    ],
    youProvide: [
      { title: 'Starting keywords', body: 'A first list of terms, brands and competitors. We help refine it.' },
      { title: 'Context', body: 'Your offer and ideal customer so we can judge what is relevant.' },
      { title: 'Feedback', body: 'Which alerts were useful, so we can tune what we flag.' }
    ],
    boundaries: [
      'Monitoring uses supported platform access and each platform\'s rules',
      'Alerts are limited by plan allowances',
      'No promise of coverage of every post on every platform',
      'Insights inform decisions. They are not predictions of results'
    ],
    versus: {
      intro: 'Listening software finds mentions. It does not decide what matters or what to do about it.',
      toolKeys: ['brand24', 'redreplier'],
      ours: 'Narrativify Radar is $79 to $299 per month and adds human-reviewed recommendations on top of the monitoring.',
      note: 'Plan limits differ between products, so compare keyword counts and alert volumes as well as price.'
    }
  },
  'managed-conversation-marketing': {
    process: [
      { title: 'Research', body: 'We study the communities, topics and norms where your audience talks, and the rules of each space.' },
      { title: 'Discover', body: 'We find conversations where your experience can genuinely help.' },
      { title: 'Participate', body: 'People write and review each contribution, and we are clear about who the brand is when it is mentioned.' },
      { title: 'Hand off', body: 'We pass on qualified opportunities and send activity summaries and insights.' }
    ],
    whoFor: [
      { title: 'Startups and SaaS', body: 'Your buyers ask for recommendations in public communities and you want to be helpfully present.' },
      { title: 'Experts and creators', body: 'You want to build familiarity and credibility through useful contributions.' },
      { title: 'Businesses short on time', body: 'You want steady participation without checking communities every day.' }
    ],
    youProvide: [
      { title: 'Product facts', body: 'What you offer, who it suits and where it does not fit.' },
      { title: 'Tone and boundaries', body: 'Topics to stay away from and how you like to sound.' },
      { title: 'Lead follow-up', body: 'Prompt follow-up on the opportunities we hand to you.' }
    ],
    boundaries: [
      'No coordinated artificial engagement',
      'No fake endorsements and no posing as unrelated customers',
      'No guaranteed virality',
      'Monthly volumes are proposed activity targets, not guaranteed likes, shares, followers or sales',
      'Disclosure whenever your brand is represented'
    ],
    versus: {
      intro: 'Reply tools help you find threads. Writing a useful answer, judging fit and following each community\'s rules is still work someone has to do.',
      toolKeys: ['redreplier', 'brand24'],
      ours: 'Narrativify Managed Conversation Marketing is $249 to $999 per month and includes human-led participation and lead identification.',
      note: 'Fully automated posting can break platform and community rules. Our approach keeps people in charge of every contribution.'
    }
  },
  'industry-visibility-creator-distribution': {
    process: [
      { title: 'Strategy', body: 'We define the audience, the message and what a good result looks like for this campaign.' },
      { title: 'Research and shortlist', body: 'We research creators, publishers and partners, then qualify and shortlist the best fits.' },
      { title: 'Approve and fund', body: 'You approve partners, creative direction and every external cost. Partner funds are in place before booking.' },
      { title: 'Coordinate and report', body: 'We manage outreach, briefs and publishing, then report on the campaign.' }
    ],
    whoFor: [
      { title: 'Launches and new offers', body: 'You need to reach audiences beyond your own channels.' },
      { title: 'Brands wanting partnerships', body: 'You want creator, newsletter or publisher partnerships but lack time to find and manage them.' },
      { title: 'Teams without outreach capacity', body: 'You need someone to research, approach and coordinate partners.' }
    ],
    youProvide: [
      { title: 'Approvals', body: 'Your decision on every partner, creative direction and external cost.' },
      { title: 'Partner budget', body: 'Funds for third-party placements, provided before any booking.' },
      { title: 'Assets', body: 'Product details, offers and any material partners need.' }
    ],
    boundaries: [
      'No undisclosed paid placements',
      'Sponsored content is labelled in line with platform and partner rules',
      'Partner costs are separate from our management fee and are never discounted',
      'Placement numbers are maximums, subject to partner acceptance and your approval'
    ],
    versus: {
      intro: 'No software books placements for you. The alternative is doing the research, outreach and follow-up yourself.',
      toolKeys: [],
      ours: 'Narrativify Industry Visibility & Creator Distribution is $299 to $999 per month in management fees, plus third-party partner budgets shown separately.',
      note: 'Partner fees apply whether you do this yourself or use us. Our fee covers the research, outreach, coordination and reporting.'
    }
  }
};
