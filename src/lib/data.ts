export const COMPANY = {
  name: 'Fiore by Haydee',
  shortName: 'Fiore by Haydee',
  tagline: 'Freelance floral design for Houston 77055',
  phone: '',
  phoneHref: '',
  email: '',
  address: 'Houston 77055',
  city: 'Houston, TX 77055',
  founder: 'Haydee',
  founderTitle: 'Floral Designer',
  instagram: 'https://www.instagram.com/fiorebyhaydee/',
  instagramHandle: '@fiorebyhaydee',
  facebook: '',
  pinterest: '',
  website: 'https://www.instagram.com/fiorebyhaydee/',
  yearsExperience: 4,
};

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
];

export const SERVICES = [
  {
    id: 'custom-orders',
    title: 'Custom Orders',
    subtitle: 'Houston Florals',
    description:
      'Made-to-order bouquets with peonies, orchids, lisianthus, and garden textures — designed for the person, not a catalog.',
    image: '/portfolio/bouquets/01.jpg',
    icon: 'heart',
  },
  {
    id: 'events',
    title: 'Events & Showers',
    subtitle: 'Houston Florals',
    description:
      'Freelance floral design for showers, dinners, and intimate celebrations, including delivery or door pickup in 77055.',
    image: '/portfolio/events/01.jpg',
    icon: 'briefcase',
  },
  {
    id: 'seasonal',
    title: 'Seasonal Drops',
    subtitle: 'Houston Florals',
    description:
      'Mother’s Day, holidays, and limited seasonal menus announced on Instagram — inquire early for custom color stories.',
    image: '/portfolio/details/01.jpg',
    icon: 'sparkles',
  },
];

export const ABOUT_CONTENT = {
  intro:
    'Fiore by Haydee is a Houston floral studio creating custom orders, event florals, and door-pickup bouquets from 77055.',
  body: 'Haydee works as a freelance designer — one arrangement at a time — with a romantic, modern palette of garden roses, orchids, lisianthus, and seasonal texture.',
  story:
    'Fiore by Haydee grew from a love of making florals feel personal. Clients come for custom color matching, event styling, and the kind of bouquet that still looks considered the next morning. Delivery and door pickup keep the process simple. Follow along on Instagram for seasonal menus, aftercare notes, and the latest work.',
};

export const ABOUT_PAGE = {
  hero: {
    kicker: 'Houston Floral Studio · 77055',
    titleBefore: 'Where every stem',
    titleEmphasis: 'tells a story.',
  },
  story: {
    heading: 'Rooted in romance,',
    emphasis: 'built on detail.',
    paragraphs: [
      'Fiore by Haydee began with a simple belief: flowers should feel as personal as the moment they celebrate. From first message to final ribbon, every arrangement is designed one at a time — never pulled from a catalog.',
      'Based in Spring Branch, Haydee works with clients across Houston for custom bouquets, intimate event florals, and seasonal menus shared on Instagram. Garden roses, orchids, lisianthus, and textured greens come together in palettes that feel romantic, modern, and unmistakably yours.',
    ],
    pullQuote:
      'The kind of bouquet that still looks considered the next morning.',
    gallery: [
      '/portfolio/bouquets/02.jpg',
      '/portfolio/events/02.jpg',
      '/portfolio/details/03.jpg',
      '/portfolio/occasions/02.jpg',
    ],
  },
  pillars: [
    {
      title: 'Custom First',
      description:
        'Every order starts with your palette, occasion, and vision — not a preset arrangement.',
      icon: 'palette',
    },
    {
      title: 'Seasonal Inspiration',
      description:
        'Limited menus for holidays and peak bloom seasons, announced first on Instagram.',
      icon: 'sparkles',
    },
    {
      title: 'Simple Pickup',
      description:
        'Delivery across Houston or door pickup in 77055 — designed to fit real life.',
      icon: 'map-pin',
    },
  ],
  process: [
    {
      step: '01',
      title: 'Share your vision',
      description:
        'Message on Instagram with colors, occasion, and any inspiration photos.',
    },
    {
      step: '02',
      title: 'We design together',
      description:
        'Haydee confirms details, seasonal availability, and pickup or delivery.',
    },
    {
      step: '03',
      title: 'Receive your florals',
      description:
        'Pickup at the studio or delivery day — with aftercare notes so they last.',
    },
  ],
} as const;

export const TEAM_MEMBERS = [
  {
    name: 'Haydee',
    title: 'Floral Designer & Founder',
    image: '/about/founder.jpg',
    bio: 'Haydee founded Fiore to bring a softer, more personal approach to Houston florals. She designs each arrangement by hand — balancing romantic color stories with modern, airy shapes — and loves the small details: a trailing stem, a wrapped ribbon, a palette matched to someone’s home or celebration.',
    highlights: [
      'Custom color matching for every order',
      'Event florals for showers & dinners',
      'Seasonal menus on Instagram',
    ],
  },
] as const;

export const STUDIO_INFO = {
  location: 'Spring Branch',
  city: 'Houston, TX 77055',
  locationNote: 'Delivery and door pickup',
  hours: [{ days: 'Custom orders', time: 'By inquiry on Instagram' }],
  hoursNote: 'Seasonal menus announced on Instagram',
};

export const SERVICE_OFFERINGS = [
  'Custom bouquets',
  'Event florals',
  'Delivery in Houston',
  'Door pickup in 77055',
  'Seasonal & holiday menus',
];

export const MAP_QUERY = 'Houston, TX 77055';

export const HERO = {
  kicker: 'Houston Floral Studio · 77055',
  titleBefore: 'Custom Florals.',
  titleEmphasis: 'Made to Order.',
  body: 'Fiore by Haydee creates freelance event florals, romantic custom bouquets, and door-pickup arrangements for Houston 77055.',
};

export const WELCOME = {
  heading: 'Romantic florals,',
  emphasis: 'designed for you.',
  stats: [
    { number: '77055', label: 'Houston Studio' },
    { number: 'Custom', label: 'Every Bouquet' },
    { number: 'Events', label: '& Showers' },
  ],
};

export const METADATA = {
  title: 'Fiore by Haydee — Houston Floral Studio',
  description:
    'Fiore by Haydee is a Houston floral studio offering custom orders, event florals, delivery, and door pickup in 77055.',
  keywords:
    'Houston florist, Fiore by Haydee, floral designer 77055, custom bouquet Houston, event florist Houston',
};
