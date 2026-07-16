/**
 * Brand narrative & company positioning.
 * Sources: Createchs_Brand_Story.md and Createchs_Company_Knowledge_Base (2026).
 * The four C's are Creative · Connect · Code · CRM. "Connect" is the standard
 * pillar name across the system — the KB's "Communication" refers to the same C.
 */

export const story = {
  narrative: [
    "Most businesses don't have a growth problem. They have a fragmentation problem.",
    'A tool for design. Another for email. An agency for the brand, a developer for the site, a CRM nobody fully trusts, and a stack of manual work holding it all together with tape. Every part works. Nothing connects. Growth leaks out of the gaps.',
    'Createchs exists to close those gaps. We are a creative and technology company — and that "and" is the whole point. Most partners give you one or the other: creatives who can\'t build the system, or engineers who can\'t tell the story. We do both, under one roof.',
    'We call the framework the 4Cs — Creative, Connect, Code, and CRM. Four forces that, in most companies, live in four different places. At Createchs they rotate into one mark, one platform, one connected system — a Business Operating System that runs marketing, sales, operations, and customer relationships in a single place.',
    "And it doesn't run alone. AI is built into the core, not bolted on after — intelligent agents, including AI voice agents, working across every function around the clock.",
    "The result isn't four services. It's one system that thinks, creates, and grows with you. Human-first, always — because technology should empower people, not replace the connection between them.",
    'From Tampa, for clients worldwide.',
  ],

  taglines: [
    'Creative & Technology, connected.',
    'One connected system. Infinite growth.',
    'Not four services. One system.',
  ],

  /** The 4Cs animation voiceover — timed to the build (one C rotating into four, then the mark). */
  voiceover: [
    { cue: 'single C forms', line: 'Four capabilities.' },
    { cue: 'Creative stamps · cyan', line: 'Creative — to capture attention.' },
    { cue: 'Connect stamps · orange', line: 'Connect — to reach and engage.' },
    { cue: 'Code stamps · lime', line: 'Code — to build and scale.' },
    { cue: 'CRM stamps · pink', line: 'CRM — to nurture and convert.' },
    { cue: 'the mark locks', line: 'Most businesses run these in four places. We run them as one.' },
    { cue: 'payoff', line: 'One connected system.' },
    { cue: 'lockup', line: 'Createchs. Creative & Technology, connected.' },
  ],

  values: [
    { name: 'Human-First', body: 'People at the heart of every decision — technology that empowers individuals and strengthens human connection.' },
    { name: 'Integrity', body: 'Honesty, transparency and respect — lasting relationships built on trust.' },
    { name: 'Ethical Innovation', body: 'Technology developed and deployed responsibly, to the highest standards.' },
    { name: 'Creativity First', body: 'Creativity is the catalyst for innovation and bold ideas.' },
    { name: 'Collaboration', body: 'More achieved together — teamwork, open communication, shared success.' },
    { name: 'Accountability', body: 'Ownership of our actions and our commitments.' },
    { name: 'Empowerment', body: 'Giving people, clients and communities the tools and confidence to grow.' },
    { name: 'Sustainability', body: 'Solutions that create long-term value — growth that is responsible and enduring.' },
  ],

  differentiators: [
    { title: 'Creative + Technology together', body: 'Most agencies do one or the other. Createchs delivers both as one integrated service — the systems a business runs on and the brand that grows it.' },
    { title: 'One all-in-one system', body: 'A complete Business Operating System that replaces the fragmented tools, agencies and manual processes most businesses juggle.' },
    { title: 'AI at the core', body: 'AI is built into how businesses operate, not bolted on. AI agents span every function — with AI voice agents a star among many.' },
  ],

  messaging: {
    leadWith: [
      'Creative + Technology combined — one partner for the systems and the brand.',
      'Business Operating System — the all-in-one platform that replaces fragmented tools.',
      'AI Agents & AI Voice Agents — intelligent digital employees, around the clock.',
    ],
    core: 'Createchs eliminates complexity — replacing fragmented tools, agencies, and manual processes with one connected platform powered by creativity, technology, and AI.',
  },

  /** The single platform replaces these tools. */
  platformReplaces: ['HubSpot', 'Mailchimp', 'Salesforce', 'Calendly', 'ClickFunnels', 'Podium', 'Kajabi'],

  industries: [
    'Healthcare & Medical', 'Real Estate', 'Legal & Professional Services', 'Home Services', 'SaaS & Technology',
    'E-commerce & Retail', 'Government & Public Sector', 'Education & Non-Profits', 'Sports & Entertainment', 'Hospitality & Tourism',
  ],
} as const;
