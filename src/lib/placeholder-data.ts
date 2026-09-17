import { initiatives, ongoingProjects, pastEvents, stories as authenticStories } from './content-data';

// Map authentic initiatives to programs schema for legacy consumers
export const programs = initiatives.map((init, idx) => ({
  id: `p${idx + 1}`,
  slug: init.slug,
  title: init.title,
  description: init.shortDescription,
  image: init.image,
  impact: init.impact,
}));

// Map authentic active campaign: Mission Little Heartbeats & Shikshalaya
export const campaigns = [
  {
    id: 'c1',
    slug: 'help-kanishk-heal-his-little-heart',
    title: 'Help Kanishk — Heal His Little Heart',
    shortDescription: '1-year-old Kanishk from Gwalior needs emergency cardiac surgery at Fortis Hospital to correct a life-threatening Ventricular Septal Defect.',
    goal: 275000,
    raised: 195000,
    image: '/images/migrated/events/world-heart-day.webp',
    category: 'Healthcare',
  },
  {
    id: 'c2',
    slug: 'support-shikshalaya-education-centers',
    title: 'Support Shikshalaya Free Learning Centers',
    shortDescription: 'Providing free education, books, uniforms, and digital literacy at Techshaala to 18,050+ underprivileged children across Delhi & Agra.',
    goal: 500000,
    raised: 380000,
    image: '/images/migrated/events/agra-shikshalaya.webp',
    category: 'Education',
  },
  {
    id: 'c3',
    slug: 'chuppi-todo-dignity-kits',
    title: 'Chuppi Todo — Menstrual Dignity Kits',
    shortDescription: 'Distribute monthly Dignity Kits and hygienic sanitary products to female construction workers and slum residents across Delhi-NCR.',
    goal: 250000,
    raised: 210000,
    image: '/images/migrated/partners/csr-partnership-1.webp',
    category: 'Women Empowerment',
  },
];

// Map authentic stories
export const stories = authenticStories.map((s, idx) => ({
  id: `s${idx + 1}`,
  slug: s.slug,
  title: s.title,
  category: s.category,
  excerpt: s.excerpt,
  image: s.image,
  date: s.date,
}));

// Map authentic past events
export const events = pastEvents.map((e, idx) => ({
  id: `e${idx + 1}`,
  slug: e.slug,
  title: e.title,
  date: e.date || '2023–2024',
  time: '10:00 AM - 4:00 PM',
  location: e.location || 'Delhi-NCR',
  image: e.image,
  description: e.description,
}));
