export interface Initiative {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  keyHighlights: string[];
  impact: string;
  image: string;
  partner?: string;
}

export interface PastEvent {
  id: string;
  slug: string;
  title: string;
  date?: string;
  location?: string;
  description: string;
  highlights: string[];
  image: string;
  gallery?: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: 'ongoing' | 'seasonal';
  season?: string;
  partner?: string;
  shortDescription: string;
  fullDescription: string;
  impactMetric: string;
  image: string;
  ctaText?: string;
  ctaLink?: string;
}

export interface Award {
  id: string;
  title: string;
  awardedBy: string;
  year?: string;
  description: string;
  image: string;
  objectFit?: 'cover' | 'contain';
}

export interface Testimonial {
  id: string;
  name: string;
  designation: string;
  location?: string;
  quote: string;
  type: 'intern' | 'donor' | 'volunteer' | 'collaborator';
}

export interface BeneficiaryStory {
  id: string;
  slug: string;
  title: string;
  childName: string;
  age?: string;
  condition: string;
  hospital?: string;
  excerpt: string;
  story: string;
  status: string;
  image: string;
  category: string;
  date: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// 1. ORGANIZATIONAL STATS & IDENTITY
// ─────────────────────────────────────────────────────────────────────────────
export const organization = {
  name: 'Raise India Foundation',
  tagline: 'A New Way of Giving Life',
  foundingDate: '22nd December 2014',
  yearsActive: '11+',
  livesImpacted: '1.83 Million+',
  statesActive: ['Delhi', 'Uttar Pradesh', 'Madhya Pradesh', 'Bihar'],
  phone: '+91-11-41254474',
  email: 'care@raiseindiafoundation.org',
  address: {
    line1: 'B-16, Third Floor, Ramdutt Enclave',
    line2: 'Uttam Nagar',
    city: 'New Delhi',
    pincode: '110059',
    country: 'India',
  },
  social: {
    facebook: 'https://www.facebook.com/RaiseIndiaNGO/',
    twitter: 'https://x.com/RaiseIndia_NGO',
    instagram: 'https://www.instagram.com/raiseindiango/',
    youtube: 'https://www.youtube.com/@raiseindiafoundation6234',
  },
  founders: [
    {
      name: 'Mr. Jai Pal Singh Malik',
      role: 'Founder & Director',
      bio: 'Served the Government of India as a Class 1 Gazetted Officer in the Research & Analysis Wing (RAW). An experienced social worker for over 19 years dedicated to empowering the underprivileged. At 78, his vast administrative expertise continues to guide the foundation in successful nationwide program execution.',
    },
    {
      name: 'Ms. Shipra Chauhan',
      role: 'Founder & Director',
      bio: 'A management professional with a 6-year background in financial services. A passionate social activist from an early age, her deep commitment to child development, education, and environmental stewardship drives the foundation’s grassroots initiatives, volunteer culture, and institutional partnerships.',
    },
  ],
  statutory: {
    registrationNo: '274409',
    pan: 'AAHCR1346N',
    licenseNumber: '104625',
    section80G: 'DEL-RE28502-27042018/9939',
    section12A: 'DEL-RR27075-27042018/8245',
    nitiAayog: 'ID U85100DL2014NPL274409',
    csrRegistration: 'CSR-1 Registered under Ministry of Corporate Affairs for Schedule VII compliance',
    trustRegistration: 'Public Charitable Trust registered under the Indian Trusts Act',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// 2. 9 CORE INITIATIVES (WHAT WE DO)
// ─────────────────────────────────────────────────────────────────────────────
export const initiatives: Initiative[] = [
  {
    id: 'prog-1',
    slug: 'education',
    title: 'Education (Shikshalaya & Techshaala)',
    category: 'EDUCATION',
    shortDescription: 'Free community schooling, literacy bridge programs, and digital skills education for first-generation learners in Delhi and Agra.',
    fullDescription: `Education is the flagship project of Raise India Foundation, through which we have positively impacted the lives of over 18,050 students across four states in India. We firmly believe that education is the most potent tool for breaking systemic generational poverty.

Our non-formal learning center 'Shikshalaya' has been operational since 2014. Originally started by funding school tuition and stationery for underprivileged children, it has evolved into full-fledged learning centers in Delhi and Agra (Radha Nagar, Balkeshwar). Over 750 children have passed out of our centers and transitioned into formal schools.

In 2024, in partnership with Konverge Technologies Pvt. Ltd., we inaugurated 'Techshaala', an advanced digital lab bridging the technological divide with computer literacy, coding fundamentals, and digital applications for underprivileged youth.`,
    keyHighlights: [
      '18,050+ students reached across Delhi, UP, MP, and Bihar',
      'Free Shikshalaya Learning Centers operational in Delhi and Agra',
      'Techshaala digital literacy lab supported by Konverge Technologies',
      'Comprehensive educational kit distributions (backpacks, books, stationery)',
    ],
    impact: '18,050+ Students Educated',
    image: '/images/migrated/events/agra-shikshalaya.webp',
    partner: 'Supported by Konverge Technologies Pvt. Ltd.',
  },
  {
    id: 'prog-2',
    slug: 'healthcare',
    title: 'Healthcare (Mission Little Heartbeats)',
    category: 'HEALTHCARE',
    shortDescription: 'Life-saving pediatric cardiac surgeries and critical healthcare support in collaboration with Fortis Hospital.',
    fullDescription: `“To the world, you may be one person, but to one child, you may be the world.” – Dr. Seuss.

Every year in India, nearly 200,000 children are born with congenital heart disease (CHD) — a structural defect present from birth. Among these, approximately 20 percent require corrective heart surgery within their first year of life to survive. For impoverished families, the catastrophic cost of pediatric cardiac surgery is completely out of reach.

Raise India Foundation launched Project Little Heartbeats in close collaboration with Fortis Hospital (Manesar & Gurugram). We support children from infancy up to 18 years of age diagnosed with critical, life-threatening heart conditions such as Ventricular Septal Defect (VSD) and Tetralogy of Fallot. Over 14 children have successfully undergone emergency open-heart surgery and are now living full, healthy lives.`,
    keyHighlights: [
      'Dedicated pediatric cardiac surgery sponsorship in partnership with Fortis Hospital',
      '14+ children successfully cured of critical congenital heart defects',
      'Free semi-annual dental, vision, and preventive health check-up camps',
      'Emergency medical diagnostic and post-operative nutritional support',
    ],
    impact: '14+ Heart Surgeries Completed',
    image: '/images/migrated/events/world-heart-day.webp',
    partner: 'In collaboration with Fortis Hospital',
  },
  {
    id: 'prog-3',
    slug: 'womens-empowerment',
    title: "Women's Empowerment & Livelihood",
    category: 'EMPOWERMENT',
    shortDescription: 'Skill training, economic self-reliance, and sustainable income generation through eco-friendly product production.',
    fullDescription: `At Raise India Foundation, women’s empowerment is a foundational pillar. In addition to health and legal awareness workshops, we train marginalized women in vocational tailoring and the hand-crafting of eco-friendly paper and cloth bags.

Recognizing the environmental hazards of single-use plastic, we established a sustainable value chain: women produce sturdy, reusable cloth and paper bags, while our team acts as a mediator connecting them directly with local retailers, grocery markets, and corporate partners. This directly eliminates middlemen exploitation, ensuring fair wages, financial autonomy, and dignity.`,
    keyHighlights: [
      'Vocational training in tailoring, paper crafting, and artisan bag making',
      'Direct market linkages connecting women artisans with local merchants',
      'Financial literacy and independent bank account access support',
      'Fostering self-governance, decision-making autonomy, and respect',
    ],
    impact: 'Hundreds of Women Economically Empowered',
    image: '/images/migrated/events/womens-day.webp',
  },
  {
    id: 'prog-4',
    slug: 'menstrual-hygiene',
    title: 'Menstrual Hygiene (Chuppi Todo)',
    category: 'HEALTH & SANITATION',
    shortDescription: 'Breaking social taboos and distributing Dignity Kits to female construction workers and slum communities.',
    fullDescription: `Inspired by the national call to action on Menstrual Health, Raise India Foundation launched the flagship campaign "Chuppi Todo - Sharam Nahi Samman" (Break the Silence - Dignity, Not Shame).

For countless women on construction sites and in informal settlements, maintaining menstrual hygiene remains an arduous challenge. Through our campaign, we distribute Dignity Kits containing high-grade sanitary napkins, soap, and hygiene essentials to female construction laborers and underprivileged adolescent girls across the National Capital Region.

Crucially, our medical volunteers hold interactive community workshops that dispel myths, eliminate cultural stigma, and educate participants on reproductive health and sanitary disposal.`,
    keyHighlights: [
      'Thousands of Dignity Kits distributed to daily-wage construction laborers',
      'Menstrual hygiene awareness sessions breaking generational silence and stigma',
      'Free medical consultations with female gynecologists and health workers',
      'Expansion across Delhi-NCR and rural Uttar Pradesh',
    ],
    impact: 'Thousands of Dignity Kits Distributed',
    image: '/images/migrated/partners/csr-partnership-1.webp',
  },
  {
    id: 'prog-5',
    slug: 'disaster-relief',
    title: 'Disaster Relief & Emergency Aid',
    category: 'EMERGENCY RELIEF',
    shortDescription: 'Immediate ground response, temporary shelters, clean water, and ration kits during seasonal floods and seismic crises.',
    fullDescription: `Disasters strike without warning, and the most vulnerable communities bear the heaviest burden. Delhi falls under high-risk Seismic Zone IV, making densely populated informal colonies acutely vulnerable. Furthermore, seasonal monsoon surges in the Yamuna River frequently submerge low-lying floodplains.

Raise India Foundation maintains a trained crisis intervention network. During the devastating 2023 Yamuna floods, our teams deployed on the ground within hours, establishing emergency distribution points, dry food rations, clean drinking water tankers, tarpaulins, and first-aid camps for evacuated families.`,
    keyHighlights: [
      'Rapid on-ground deployment during the Yamuna River floods in Delhi',
      'Distribution of dry food rations, packaged water, and medical kits',
      'Temporary waterproofing tarpaulins and shelter support',
      'Trained volunteer network prepared for urban natural disasters',
    ],
    impact: 'Critical Relief for Thousands Displaced',
    image: '/images/migrated/events/flood-relief.jpg',
  },
  {
    id: 'prog-6',
    slug: 'environment',
    title: 'Environmental Stewardship & Green Delhi',
    category: 'ENVIRONMENT',
    shortDescription: 'Urban tree plantation drives, sapling care routines, and environmental awareness to battle urban air pollution.',
    fullDescription: `At Raise India Foundation, we envision cleaner, greener, and more breathable cities. Recognizing Delhi’s severe air quality index challenges, we champion environmental stewardship as a core public health priority.

Our flagship environmental drive encompasses massive tree plantation campaigns in public parks, school grounds, and roadside verges. Unlike symbolic events, we ensure long-term sapling survival through systematic watering schedules, mulching, tree guards, and neighborhood stewardship. We also run community campaigns educating citizens on waste segregation, water conservation, and plastic reduction.`,
    keyHighlights: [
      'Tree plantation drives planting indigenous air-purifying trees',
      'Post-plantation maintenance schedules ensuring high sapling survival rates',
      'Neighborhood cleanliness and plastic-reduction community workshops',
      'Celebration of Environmental Threat Day and World Environment Day',
    ],
    impact: 'Thousands of Trees Planted & Nurtured',
    image: '/images/migrated/events/environmental-threat.webp',
  },
  {
    id: 'prog-7',
    slug: 'livelihood',
    title: 'Livelihood & Food Security',
    category: 'LIVELIHOOD',
    shortDescription: 'Project BHOOKH food security initiatives and essential winter survival distributions across North India.',
    fullDescription: `Under our livelihood and social protection umbrella, Raise India Foundation operates targeted relief programs that protect families from destitution.

During economic shocks and lockdowns, our Project BHOOKH served as a vital safety net for daily-wage earners facing acute starvation. Each winter since 2014, our 'Kambal Udhao Zindagi Bachao' campaign mobilizes volunteers late at night across Delhi-NCR and northern cities to place warm, heavy blankets on homeless individuals exposed to freezing weather. During Deepawali, our 'Khushiyon Ki Potli' drive distributes festive hampers containing groceries, sweets, and gifts to underserved households.`,
    keyHighlights: [
      'Project BHOOKH ensuring emergency nutrition for daily-wage households',
      'Kambal Udhao Zindagi Bachao winter relief drive running uninterrupted since 2014',
      'Khushiyon Ki Potli Deepawali gift and ration hampers for marginalized families',
      'Pitru Paksha food and nutrition distribution to hospital patients and attendants',
    ],
    impact: 'Over 100,000 Meals & Winter Kits Distributed',
    image: '/images/migrated/events/kambal-udhao.webp',
  },
  {
    id: 'prog-8',
    slug: 'heat-relief',
    title: 'Heat Relief (Project Tapan)',
    category: 'CLIMATE RELIEF',
    shortDescription: 'Summer survival supplies, hydration stations, ORS, and protective footwear for roadside workers in extreme heatwaves.',
    fullDescription: `In response to unprecedented summer temperatures crossing 48°C in North India, Raise India Foundation launched Project Tapan. Extreme heat pushes outdoor laborers, rickshaw pullers, construction workers, and street vendors into life-threatening conditions.

Project Tapan operates mobile hydration stations distributing chilled drinking water and electrolyte ORS packets to prevent fatal heatstroke. In addition, our teams distribute sturdy protective footwear (chappals) to underprivileged laborers working barefoot on scorching asphalt, alongside wide-brim sun protection umbrellas.`,
    keyHighlights: [
      'Chilled clean drinking water tankers and hydration points across high-traffic intersections',
      'Distribution of oral rehydration salts (ORS) to combat dehydration and heat exhaustion',
      'Protective footwear distributed to street vendors and laborers',
      'Sun umbrellas and cooling caps distributed to outdoor daily-wage earners',
    ],
    impact: 'Heatwave Protection for Thousands of Street Workers',
    image: '/images/migrated/events/tapan.webp',
  },
  {
    id: 'prog-9',
    slug: 'covid-19-relief',
    title: 'COVID-19 Pandemic Response',
    category: 'CRISIS RESPONSE',
    shortDescription: 'National lockdown relief, dry rations, Khana Khilao Punya Kamao meals, and digital E-Shikshalaya.',
    fullDescription: `During the unprecedented waves of the COVID-19 pandemic, Raise India Foundation mounted a massive relief mobilization across the National Capital Region. During the national 21-day lockdown, we provided dry ration survival kits to daily wage earners who found themselves without income or food.

On Ram Navami, we launched the 'Khana Khilao Punya Kamao' campaign, scaling from 500 meals daily to thousands of freshly cooked meals distributed across migrant settlements. When schools shut down, we initiated 'E-Shikshalaya' to ensure that children from impoverished backgrounds did not fall completely out of the education system. Our work was recognized by the Delhi Government with the COVID Warriors Award.`,
    keyHighlights: [
      'Over 25,000+ dry ration kits distributed to migrant worker families',
      'Khana Khilao Punya Kamao cooked meal program during national lockdown',
      'E-Shikshalaya digital bridge program maintaining continuity of education',
      'Honored with the official Delhi Government COVID Warriors Award',
    ],
    impact: 'Official COVID Warriors Award from Delhi Government',
    image: '/images/migrated/awards/covid-warriors-award.webp',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 3. ONGOING & SEASONAL PROJECTS
// ─────────────────────────────────────────────────────────────────────────────
export const ongoingProjects: Project[] = [
  {
    id: 'on-1',
    slug: 'shikshalaya',
    title: 'Shikshalaya Free Learning Centers',
    category: 'ongoing',
    partner: 'Delhi & Agra Centers',
    shortDescription: 'Full-time remedial education, literacy development, and school integration for underprivileged children.',
    fullDescription: `Operating since 2014, Shikshalaya provides quality elementary education, basic numeracy, language literacy, and character development to children residing in urban slums and rural settlements. We maintain active centers in Delhi and Agra (Radha Nagar, Balkeshwar), having prepared over 750 children for formal school enrollment.`,
    impactMetric: '18,050+ Students Benefited',
    image: '/images/migrated/events/agra-shikshalaya.webp',
    ctaText: 'Support Shikshalaya',
    ctaLink: '/get-involved',
  },
  {
    id: 'on-2',
    slug: 'techshaala',
    title: 'Techshaala Digital Learning Lab',
    category: 'ongoing',
    partner: 'Supported by Konverge Technologies Pvt. Ltd.',
    shortDescription: 'Cutting-edge digital classroom offering computer literacy and digital tools to underprivileged students.',
    fullDescription: `Techshaala stems from the conviction that digital literacy is an essential fundamental right in modern society. Supported by Konverge Technologies Pvt. Ltd., Techshaala provides desktops, internet access, and dedicated instructors teaching computer basics, office tools, and introductory coding to underprivileged children.`,
    impactMetric: 'Daily Computer Literacy Batches',
    image: '/images/migrated/partners/csr-partnership-2.webp',
    ctaText: 'Learn About Techshaala',
    ctaLink: '/our-work/education',
  },
  {
    id: 'on-3',
    slug: 'little-heartbeats',
    title: 'Mission Little Heartbeats',
    category: 'ongoing',
    partner: 'Partnered with Fortis Hospital',
    shortDescription: 'Fully funded pediatric heart surgeries for underprivileged children suffering from Congenital Heart Disease (CHD).',
    fullDescription: `Through our partnership with Fortis Hospital (Manesar & Gurugram), Mission Little Heartbeats identifies children from low-income households with life-threatening heart defects (such as VSD, ASD, and TOF) and covers the entire cost of cardiac surgery, pre-op diagnostics, and intensive post-operative recovery.`,
    impactMetric: '14+ Surgeries Successfully Completed',
    image: '/images/migrated/events/world-heart-day.webp',
    ctaText: 'Heal a Little Heart',
    ctaLink: '/get-involved',
  },
  {
    id: 'on-4',
    slug: 'chuppi-todo',
    title: 'Chuppi Todo – Sharam Nahi Samman',
    category: 'ongoing',
    shortDescription: 'Community menstrual hygiene initiative distributing Dignity Kits and ending menstrual stigma across NCR.',
    fullDescription: `Our ongoing sanitation and health campaign provides sustainable, monthly supplies of sanitary pads and hygiene essentials to female laborers working on construction sites and living in marginalized colonies, coupled with healthcare worker-led awareness sessions.`,
    impactMetric: 'Thousands of Women Supported Monthly',
    image: '/images/migrated/partners/csr-partnership-1.webp',
    ctaText: 'Sponsor a Dignity Kit',
    ctaLink: '/get-involved',
  },
];

export const seasonalProjects: Project[] = [
  {
    id: 'seas-1',
    slug: 'project-tapan',
    title: 'Project Tapan (Summer Heat Relief)',
    category: 'seasonal',
    season: 'Summer (May – July)',
    shortDescription: 'Hydration tankers, electrolyte ORS packets, protective footwear, and umbrellas for street laborers during heatwaves.',
    fullDescription: `During extreme northern summers when temperatures exceed 45°C, Project Tapan delivers life-saving heat protection directly to street vendors, traffic workers, and daily wage earners through cold water points, ORS kits, and footwear.`,
    impactMetric: 'Thousands Protected Every Heatwave',
    image: '/images/migrated/events/tapan.webp',
    ctaText: 'Support Summer Relief',
    ctaLink: '/get-involved',
  },
  {
    id: 'seas-2',
    slug: 'kambal-udhao',
    title: 'Kambal Udhao Zindagi Bachao',
    category: 'seasonal',
    season: 'Winter (November – January)',
    shortDescription: 'Nighttime distribution of warm blankets and winter clothing to homeless individuals sleeping on open streets.',
    fullDescription: `Active since December 2014, this flagship winter initiative mobilizes teams during bitter winter nights to cover pavement dwellers, destitute seniors, and outdoor laborers with high-quality warm blankets, saving lives from hypothermia.`,
    impactMetric: '10+ Consecutive Winter Drives Since 2014',
    image: '/images/migrated/events/kambal-udhao.webp',
    ctaText: 'Donate a Blanket',
    ctaLink: '/get-involved',
  },
  {
    id: 'seas-3',
    slug: 'khushiyon-ki-potli',
    title: 'Khushiyon Ki Potli (Diwali Festive Drive)',
    category: 'seasonal',
    season: 'Festive Season (October – November)',
    shortDescription: 'Spreading joy and dignity during Deepawali through curated gift hampers, sweets, and essential groceries.',
    fullDescription: `Deepawali is a festival of light and prosperity. Khushiyon Ki Potli ensures that vulnerable families, orphans, and daily wage earners celebrate the festival with pride and joy through thoughtfully assembled gift hampers.`,
    impactMetric: 'Hundreds of Festive Hampers Distributed Annually',
    image: '/images/migrated/events/khushiyon-ki-potli.webp',
    ctaText: 'Share Festive Joy',
    ctaLink: '/get-involved',
  },
  {
    id: 'seas-4',
    slug: 'flood-relief',
    title: 'Yamuna Monsoon Flood Relief',
    category: 'seasonal',
    season: 'Monsoon (July – September)',
    shortDescription: 'Emergency rations, clean drinking water, temporary shelter tarpaulins, and medical aid during river flooding.',
    fullDescription: `Monsoon surges in the Yamuna River frequently displace thousands living in riverbank slums in Delhi. Our emergency teams mobilize on the ground to provide dry ration kits, water purification, and temporary tarpaulin shelters.`,
    impactMetric: 'Immediate Aid for Flood Evacuees',
    image: '/images/migrated/events/flood-relief.jpg',
    ctaText: 'Support Disaster Fund',
    ctaLink: '/get-involved',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 4. 13 AUTHENTIC PAST EVENTS
// ─────────────────────────────────────────────────────────────────────────────
export const pastEvents: PastEvent[] = [
  {
    id: 'ev-1',
    slug: 'education-kit-distribution',
    title: 'Education Kit Distribution Drive',
    date: 'July 2023',
    location: 'Shikshalaya Centers, Delhi & Agra',
    description: 'At our Shikshalaya centers, we believe that education begins with dignity. We distributed comprehensive educational kits containing school bags, notebooks, drawing kits, water bottles, and stationery to ensure every enrolled child has the tools needed to thrive.',
    highlights: ['Distributed school bags and complete stationery kits', 'Motivational interactions with volunteer mentors', 'Parent-teacher orientation on regular attendance'],
    image: '/images/migrated/events/education-kit.webp',
  },
  {
    id: 'ev-2',
    slug: 'agra-shikshalaya-inaugural',
    title: 'Agra Shikshalaya Learning Center Inauguration',
    date: 'July 2023',
    location: 'Radha Nagar, Near Balkeshwar Hospital, Balkeshwar, Agra',
    description: 'Inauguration of our dedicated learning center in Agra. Located in the heart of Radha Nagar, this center provides free elementary education, digital learning sessions, and nutritious snacks to children from surrounding marginalized settlements.',
    highlights: ['Permanent learning space equipped with study materials', 'Inaugural ceremony attended by community leaders', 'Enrollment of over 100 first-generation learners'],
    image: '/images/migrated/events/agra-shikshalaya.webp',
  },
  {
    id: 'ev-3',
    slug: 'flood-relief-delhi',
    title: 'Delhi Monsoon Flood Relief Operations',
    date: 'Monsoon 2023',
    location: 'Yamuna Floodplains & Evacuation Camps, Delhi',
    description: 'When torrential rains and rising Yamuna waters inundated low-lying colonies across Delhi, thousands were evacuated into makeshift roadside camps. Raise India Foundation teams distributed dry ration kits, bottled drinking water, tarpaulins, and primary medical support.',
    highlights: ['Direct aid distribution in evacuated flood camps', 'Provision of clean drinking water and dry rations', 'First-aid and sanitation supplies delivered'],
    image: '/images/migrated/events/flood-relief.jpg',
  },
  {
    id: 'ev-4',
    slug: 'sweet-home-orphanage-visit',
    title: 'Sweet Home Orphanage Outreach',
    date: 'August 2023',
    location: 'Sweet Home Orphanage for Girls, Delhi',
    description: 'A special outreach visit to the Sweet Home Orphanage for Girls. Our volunteers spent the day engaging the children in interactive storytelling, educational games, and distributed stationery, clothing, and nutritious meals.',
    highlights: ['Distribution of educational supplies and books', 'Creative arts and storytelling workshops', 'Celebration of youth and companionship'],
    image: '/images/migrated/events/sweet-home-orphanage.webp',
  },
  {
    id: 'ev-5',
    slug: 'dental-and-eye-checkup',
    title: 'Comprehensive Dental and Eye Check-Up Camp',
    date: 'September 2023',
    location: 'Community Center, New Delhi',
    description: 'As part of our commitment to holistic community health, we organized semi-annual dental and eye check-up camps with certified dental surgeons and ophthalmologists, providing free consultations, screenings, and free corrective spectacles and medicines.',
    highlights: ['Free vision testing and prescription eyeglasses distribution', 'Dental check-ups, cleanings, and oral hygiene kits', 'Doctor counseling on preventive healthcare'],
    image: '/images/migrated/events/dental-eye-checkup.webp',
  },
  {
    id: 'ev-6',
    slug: 'world-heart-day',
    title: 'World Heart Day Awareness & Pediatric Screening',
    date: 'September 2023',
    location: 'New Delhi & NCR',
    description: 'In observance of World Heart Day and in coordination with hospital partners, we conducted heart health screenings and awareness seminars emphasizing early detection of congenital heart defects in children and cardiovascular wellness.',
    highlights: ['Specialist pediatric cardiologist consultations', 'Screening sessions identifying children with heart murmurs', 'Awareness lectures for parents on CHD symptoms'],
    image: '/images/migrated/events/world-heart-day.webp',
  },
  {
    id: 'ev-7',
    slug: 'environmental-threat-day',
    title: 'Environmental Threat Day Green Drive',
    date: 'September 2023',
    location: 'Delhi-NCR Parks & Community Spaces',
    description: 'Observing Environmental Threat Day, our team spearheaded tree plantation drives and community seminars highlighting the urgent need to protect urban green cover, cut single-use plastic, and protect groundwater tables.',
    highlights: ['Plantation of native shade and air-purifying trees', 'Pledge campaign against single-use plastics', 'Youth volunteer participation across Delhi'],
    image: '/images/migrated/events/environmental-threat.webp',
  },
  {
    id: 'ev-8',
    slug: 'khushiyon-ki-potli',
    title: 'Khushiyon Ki Potli Deepawali Celebration',
    date: 'November 2023',
    location: 'Underprivileged Settlements, Delhi & UP',
    description: 'Spreading joy and light during Deepawali, our volunteers delivered festive hampers containing dry groceries, festive sweets, diyas, and new clothes to families in underserved communities.',
    highlights: ['Festive hampers distributed to over 500 households', 'Celebration with children at Shikshalaya learning centers', 'Creating inclusive festive cheer for all'],
    image: '/images/migrated/events/khushiyon-ki-potli.webp',
  },
  {
    id: 'ev-9',
    slug: 'pitru-paksha-food-drive',
    title: 'Pitru Paksha Nutrition and Food Outreach',
    date: 'October 2023',
    location: 'Government Hospitals & Shelters, Delhi',
    description: 'During the sacred period of Pitru Paksha, Raise India Foundation volunteers distributed wholesome cooked meals and fresh fruits to patients and attendants waiting outside major government hospitals.',
    highlights: ['Nutritious cooked meals and fresh fruit distribution', 'Supporting attendants of critically ill patients', 'Fostering dignity and empathy in hospital waiting areas'],
    image: '/images/migrated/events/pitru-paksha.webp',
  },
  {
    id: 'ev-10',
    slug: 'kambal-udhao-zindagi-bachao',
    title: 'Kambal Udhao Zindagi Bachao Winter Relief',
    date: 'December 2023 – January 2024',
    location: 'Street Pavements & Slums across Delhi-NCR',
    description: 'Our annual winter drive running since 2014. Teams traversed the streets of Delhi late at night to distribute heavy woolen blankets directly to homeless citizens, rickshaw drivers, and vulnerable elders sleeping without shelter.',
    highlights: ['Late-night on-street direct blanket distribution', 'Over 2,000+ heavy woolen blankets provided', 'Thermal jackets and caps distributed to street children'],
    image: '/images/migrated/events/kambal-udhao.webp',
  },
  {
    id: 'ev-11',
    slug: 'ram-mahotsav-community-feast',
    title: 'Ram Mahotsav Community Feast & Outreach',
    date: 'January 2024',
    location: 'Community Grounds, Delhi',
    description: 'On the auspicious occasion of the consecration in Ayodhya on January 22, 2024, Raise India Foundation organized a community bhandara and feast, distributing sanctified meals and clothes to hundreds of families.',
    highlights: ['Community feast feeding hundreds of attendees', 'Distribution of seasonal clothing and sweets', 'Fostering brotherhood and community harmony'],
    image: '/images/migrated/events/ram-mahotsav.webp',
  },
  {
    id: 'ev-12',
    slug: 'international-womens-day',
    title: "International Women's Day Celebration & Health Camp",
    date: 'March 2024',
    location: 'Women Empowerment Centers, Delhi',
    description: 'Dedicated to honoring the strength and resilience of women, we conducted health awareness sessions, distributed Dignity Kits, and felicitated female community leaders and self-reliant artisans.',
    highlights: ['Distribution of sanitary hygiene dignity kits', 'Interactive session on women’s health and rights', 'Showcasing products crafted by our vocational women trainees'],
    image: '/images/migrated/events/womens-day.webp',
  },
  {
    id: 'ev-13',
    slug: 'project-tapan-summer-drive',
    title: 'Project Tapan Summer Heat Relief Drive',
    date: 'May – June 2024',
    location: 'High-Temperature Traffic Intersections, Delhi',
    description: 'Responding to recorded 49°C heatwaves in 2024, Raise India Foundation mobilized emergency hydration teams distributing chilled water, ORS packets, and protective footwear to daily wage laborers and street sweepers.',
    highlights: ['Over 10,000 liters of potable chilled water distributed', 'Hundreds of ORS electrolyte sachets handed out', 'Sturdy footwear provided to barefoot street workers'],
    image: '/images/migrated/events/tapan.webp',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 5. 9 OFFICIAL AWARDS & RECOGNITIONS
// ─────────────────────────────────────────────────────────────────────────────
export const awards: Award[] = [
  {
    id: 'aw-1',
    title: 'National Safety Day Award 2024',
    awardedBy: 'Ahluwalia Contracts (India) Ltd.',
    year: '2024',
    description: 'Alluwahlia Contracts India Ltd. Presented an award to Raise India Foundation for their outstanding service and dedication towards the weaker section of society on the occasion of National Safety Day.',
    image: '/images/migrated/awards/award-banner-1.jpg',
  },
  {
    id: 'aw-2',
    title: 'World NGO Day Certificate of Appreciation',
    awardedBy: 'Centre for Sight with NDCFS Foundation',
    year: '2021',
    description: 'On the occasion of World NGO Day, 27th February 2021, Centre for Sight and with NDCFS Foundation presented Certificate of Appreciation for the outstanding Service and Dedication during COVID-19',
    image: '/images/migrated/awards/world-ngo-day.webp',
  },
  {
    id: 'aw-3',
    title: 'Best Volunteer Organization Award',
    awardedBy: 'Health Care & Medical Welfare Consortium',
    year: '2022',
    description: 'Raise India Foundation got BEST VOLUNTEER AWARD several times on organizing health checkup camps.',
    image: '/images/migrated/awards/best-volunteer-award.webp',
  },
  {
    id: 'aw-4',
    title: 'Women Marathon Run for Health Award',
    awardedBy: 'Delhi University College Network',
    year: '2022',
    description: 'Raise India Foundation is awarded with a award for Run for Health, Run for Life for organizing Women Marathon in Delhi University College.',
    image: '/images/migrated/awards/women-marathon.webp',
  },
  {
    id: 'aw-5',
    title: 'Global NGO Expo Work of Excellence Award',
    awardedBy: 'Global NGO Expo Committee',
    year: '2021',
    description: 'Raise India Foundation is awarded with the Work of Excellence Award in GLOBAL NGO EXPO AWARD 2021',
    image: '/images/migrated/awards/exact-uploaded-certificate.jpg',
    objectFit: 'contain',
  },
  {
    id: 'aw-6',
    title: 'Best Emerging NGO Award',
    awardedBy: 'Chairperson, Grameen Vikas Samiti & SDM',
    year: '2022',
    description: 'Raise India Foundation is awarded with the Best Emerging NGO by Chairperson Grameen Vikas Samiti SDMC. This award is presented by Smt. Antim Gahlot, Chairperson Grameen Vikas Samiti SDMC for the work done in rural outer Delhi',
    image: '/images/migrated/awards/award-banner-2.webp',
  },
  {
    id: 'aw-7',
    title: 'Covid Warriors Award',
    awardedBy: 'Government of Delhi (Presented by MLA Raghav Chadha)',
    year: '2021',
    description: 'Raise India Foundation is awarded with the COVID WARRIORS AWARD by Delhi Government for the outstanding work done during pandemic. This award is presented by Awarded by Mr. Raghav Chadha, Member of Legislative Assembly, Rajendra Nagar Assembly Constituency, New Delhi.',
    image: '/images/migrated/awards/covid-warriors-award.webp',
  },
  {
    id: 'aw-8',
    title: 'Unsung Heroes Covid Warrior Award',
    awardedBy: 'Hon. Sh. Parvesh Sahib Singh Verma, Member of Parliament, West Delhi',
    year: '2021',
    description: 'Honourable Sh. Parvesh Sahib Singh Verma, Member of Parliament, West Delhi, Lok Sabha Constituency, presented the Unsung Heroes Covid Warrior Award to Raise India Foundation for outstanding contribution in the fight against the COVID-19 pandemic.',
    image: '/images/migrated/awards/world-ngo-day.webp',
  },
  {
    id: 'aw-9',
    title: 'Dil Se Salaam – Heart of Humanity Award',
    awardedBy: 'Fortis Hospital & Medical Partners',
    year: '2023',
    description: 'Raise India Foundation received the "Dil Se Salaam – Heart of Humanity Award" from Fortis Hospital, Manesar for launching Project Little Heartbeats, which funds surgeries for children with congenital heart diseases. The day was marked by the successful surgery of Mitanshu, the project\'s first beneficiary.',
    image: '/images/migrated/awards/dil-se-salaam-awards.jpg',
    objectFit: 'cover',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 6. 6 GENUINE TESTIMONIALS
// ─────────────────────────────────────────────────────────────────────────────
export const testimonials: Testimonial[] = [
  {
    id: 't-1',
    name: 'Aarju Sheoran',
    designation: 'Social Intern (TAPMI Bengaluru)',
    type: 'intern',
    quote: `Working as an intern at Raise India Foundation, specifically on the Shikshalaya project, has been an extraordinary experience. Shikshalaya provides free education to children, and being part of this initiative was incredibly rewarding. Interacting with the children and helping them with their studies was an eye-opener. Raise India Foundation not only provides education but treats these children and their families as part of their own family. This holistic approach makes a significant impact, and I am proud to have contributed.`,
  },
  {
    id: 't-2',
    name: 'Mr. Ajay Agarwal',
    designation: 'Philanthropist & Global Supporter',
    location: 'Palo Alto, CA 94306, USA',
    type: 'donor',
    quote: `I have spent a lifetime with charities and over the years got polarized from organizations that existed as tax shelters or for profiteering. Roughly two years ago, Raise India Foundation reached out. RIF proved to be a breath of fresh air. This organization is all hands on deck, serving humanity where it hurts the most. The directors, Shipra and Sanjeev, get into the trenches and work with their hands. When I visited an event at the school they run, the abundance of happy faces of children and parents dwarfed any jackpot. I strongly recommend supporting RIF.`,
  },
  {
    id: 't-3',
    name: 'Mr. Vimal Malik',
    designation: 'Community Donor & Volunteer',
    type: 'donor',
    quote: `I am so happy to see my donation going for a genuine, impactful purpose thanks to Raise India Foundation. I truly love their campaigns such as Khana Khilao Punya Kamao and Kambal Udhao Zindagi Bachao. I have personally participated in their on-ground activities alongside my son. Team Raise India Foundation, you are doing amazing work!`,
  },
  {
    id: 't-4',
    name: 'Mr. Sunil Sharma',
    designation: 'Long-term Supporter',
    type: 'donor',
    quote: `I feel proud and honored to share my ideas and support with a team like this. You all are enthusiastic, energetic, and possess the right attitude. I thank every one of you for your constant hard work and dedication. With your team, we are able to bring joy to people who need it most.`,
  },
  {
    id: 't-5',
    name: 'Mr. Gaurav Jain',
    designation: 'NGO Collaborator & Partner',
    type: 'collaborator',
    quote: `As someone who has been a donor and collaborator of Raise India Foundation through my own NGO, I must commend their efforts for working for the downtrodden sections of our society. Anyone is free to witness their activities on the ground and the genuine difference they make regardless of caste, creed, or background. Jai Hind!`,
  },
  {
    id: 't-6',
    name: 'Mr. Sachin Sharma',
    designation: 'Regular Donor',
    type: 'donor',
    quote: `I am privileged to be part of Raise India Foundation and really happy to see the outstanding work done by them. You don't need huge money to contribute for noble causes; even a small amount makes a massive difference. I am very glad to support their girl child education and healthcare initiatives.`,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 7. 14 BENEFICIARY SUCCESS STORIES (REAL CHILDREN & FAMILIES HEALED)
// ─────────────────────────────────────────────────────────────────────────────
export const stories: BeneficiaryStory[] = [
  {
    id: 'st-1',
    slug: 'baby-shauryas-heart-beats-strong-again',
    title: "Baby Shaurya's Heart Beats Strong Again",
    childName: 'Baby Shaurya',
    age: '2 Years',
    condition: 'Congenital Heart Defect (Ventricular Septal Defect)',
    hospital: 'Fortis Hospital, Gurugram',
    excerpt: 'Diagnosed with a critical hole in the heart, Baby Shaurya underwent a successful surgery through Mission Little Heartbeats.',
    story: `Baby Shaurya was born into an impoverished family struggling to make ends meet. At just a few months old, persistent breathlessness and blue-tinted lips alerted his parents that something was terribly wrong. Medical screening confirmed a critical Congenital Heart Defect that required immediate open-heart surgery.

With the surgery cost far exceeding his parents' annual earnings, hope seemed lost. Raise India Foundation stepped in under Mission Little Heartbeats, coordinating with Fortis Hospital. Within weeks, the surgery was successfully completed. Today, Shaurya’s heart beats strong, and he is a cheerful, active toddler full of life.`,
    status: 'Fully Recovered & Healthy',
    image: '/images/migrated/events/world-heart-day.webp',
    category: 'Healthcare',
    date: 'February 2024',
  },
  {
    id: 'st-2',
    slug: 'aarvis-little-heart-beats-strong-again',
    title: "Aarvi's Little Heart Beats Strong Again",
    childName: 'Aarvi',
    age: '1.5 Years',
    condition: 'Complex Congenital Heart Disease',
    hospital: 'Fortis Hospital, Manesar',
    excerpt: 'Little Aarvi received a second chance at life through timely surgery funded by generous supporters.',
    story: `Aarvi’s parents noticed she wasn’t gaining weight and frequently broke into cold sweats while feeding. Doctors diagnosed severe Congenital Heart Disease requiring urgent surgical correction.

Through the dedicated fundraising drive under Mission Little Heartbeats, Raise India Foundation mobilized donors to finance her surgery at Fortis Hospital. The complex cardiac procedure was an absolute success. Aarvi’s mother shared through tears: “Raise India Foundation gave my daughter a second life.”`,
    status: 'Recovered & Thriving',
    image: '/images/migrated/events/world-heart-day.webp',
    category: 'Healthcare',
    date: 'January 2024',
  },
  {
    id: 'st-3',
    slug: 'satyam-a-child-with-down-syndrome',
    title: 'Satyam: A Story of Hope & Unconditional Love',
    childName: 'Satyam',
    age: '7 Years',
    condition: 'Down Syndrome & Associated Health Complications',
    hospital: 'Fortis Hospital & Shikshalaya Learning Center',
    excerpt: 'Overcoming cognitive and medical obstacles, Satyam found healing and personalized education support.',
    story: `Born with Down Syndrome into a socio-economically marginalized family, Satyam faced steep developmental hurdles and underlying cardiac vulnerability. Rather than allowing him to be isolated, Raise India Foundation embraced Satyam into our Shikshalaya family.

We provided him with nutritional supplements, speech therapy consultations, and integrated him into our special-needs inclusive classroom. Today, Satyam greets everyone with a joyful smile and is learning basic cognitive skills with remarkable eagerness.`,
    status: 'Enrolled in Inclusive Learning',
    image: '/images/migrated/events/education-kit.webp',
    category: 'Education & Health',
    date: 'March 2024',
  },
  {
    id: 'st-4',
    slug: 'mitanshus-new-heartbeat',
    title: "Mitanshu's New Heartbeat: A Story of Hope & Healing",
    childName: 'Mitanshu',
    age: '3 Years',
    condition: 'Severe Ventricular Septal Defect (VSD)',
    hospital: 'Fortis Hospital',
    excerpt: 'Celebrated his 3rd birthday with a newly repaired heart after successful surgery arranged by Raise India Foundation.',
    story: `Mitanshu’s family was devastated when routine checks revealed a dangerous ventricular septal defect that threatened his life. His father, a daily wage laborer, had exhausted every penny on diagnostic visits.

Raise India Foundation sponsored the complete procedure under Mission Little Heartbeats. The operation was performed by leading pediatric heart specialists at Fortis Hospital. Mitanshu celebrated his third birthday healthy, joyful, and completely free of cardiac symptoms.`,
    status: 'Fully Healed',
    image: '/images/migrated/events/world-heart-day.webp',
    category: 'Healthcare',
    date: 'April 2024',
  },
  {
    id: 'st-5',
    slug: 'harsh-sharma-chance-at-healthy-future',
    title: 'Giving Harsh Sharma a Chance at a Healthy Future',
    childName: 'Harsh Sharma',
    age: '4 Years',
    condition: 'Congenital Cardiac Defect',
    hospital: 'Fortis Hospital, Gurugram',
    excerpt: 'Timely surgical intervention saved young Harsh, enabling him to attend school for the first time.',
    story: `Young Harsh was constantly fatigued and unable to play with other children his age due to poor blood oxygenation. His parents had almost lost hope until they contacted our field team. Raise India Foundation prioritized his case, funding his surgery and continuous post-operative medications. Today, Harsh is attending preschool with boundless energy.`,
    status: 'School-going & Energetic',
    image: '/images/migrated/events/agra-shikshalaya.webp',
    category: 'Healthcare',
    date: 'May 2024',
  },
  {
    id: 'st-6',
    slug: 'prishas-heart-is-healed',
    title: "Prisha's Heart is Healed: A Miracle of Compassion",
    childName: 'Prisha',
    age: '2 Years',
    condition: 'Atrial Septal Defect',
    hospital: 'Fortis Hospital',
    excerpt: 'Little Prisha returned home with a completely repaired heart thanks to collaborative donor support.',
    story: `Diagnosed with a life-threatening defect, little Prisha underwent a successful procedure thanks to Mission Little Heartbeats. She is now healthy, playful, and surrounded by her relieved and grateful family.`,
    status: 'Healthy & Cheerful',
    image: '/images/migrated/events/world-heart-day.webp',
    category: 'Healthcare',
    date: 'June 2024',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 8. AUTHENTIC FIELD UPDATES & BLOG ARTICLES
// ─────────────────────────────────────────────────────────────────────────────
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'b-1',
    slug: 'techshaala-digital-lab-inauguration',
    title: 'Techshaala Digital Learning Lab Inaugurated in Partnership with Konverge Technologies',
    category: 'Digital Education',
    date: 'June 2024',
    author: 'Ms. Shipra Chauhan, Director',
    image: '/images/migrated/partners/csr-partnership-2.webp',
    excerpt: 'Bridging the technological divide for underprivileged students through a state-of-the-art computer lab providing digital literacy, office tools, and introductory coding.',
    content: `In an era where digital literacy is essential to career survival and higher education, millions of first-generation learners remain excluded from basic computing skills. To solve this critical bottleneck, Raise India Foundation partnered with leading IT systems integrator Konverge Technologies Pvt. Ltd. to establish 'Techshaala'.

Techshaala is a dedicated computer learning center equipped with modern desktop workstations, high-speed internet connectivity, interactive multimedia displays, and structured curricula tailored for children from urban informal settlements.

Under the guidance of qualified computer instructors, students learn foundational keyboard navigation, word processing, digital communication, and introductory coding concepts. This initiative empowers our youth to transition confidently from rudimentary schooling into modern digital society.`,
  },
  {
    id: 'b-2',
    slug: 'agra-shikshalaya-learning-center-opening',
    title: 'Agra Shikshalaya Learning Center Opens in Balkeshwar',
    category: 'Elementary Education',
    date: 'July 2023',
    author: 'Field Operations Team',
    image: '/images/migrated/events/agra-shikshalaya.webp',
    excerpt: 'Expanding our non-formal elementary schooling network to Radha Nagar, Balkeshwar, enrolling over 100 first-generation learners.',
    content: `Following the successful decade-long operation of our Delhi Shikshalaya centers, Raise India Foundation reached an important milestone with the inauguration of a permanent learning center in Agra, Uttar Pradesh.

Located at Radha Nagar, near Balkeshwar Hospital, the Agra Shikshalaya center provides free foundational schooling, remedial tutoring, free textbooks, backpacks, and daily nutritional snacks to children whose parents work predominantly as daily-wage artisans and laborers.

Over 100 children were enrolled on the inaugural day, embarking on a transformative educational journey that aims to prepare them for seamless integration into the formal government school system.`,
  },
  {
    id: 'b-3',
    slug: 'chuppi-todo-menstrual-hygiene-drive',
    title: 'Chuppi Todo Campaign: Breaking Menstrual Taboos & Distributing Dignity Kits',
    category: 'Women & Health',
    date: 'March 2024',
    author: 'Health Outreach Cell',
    image: '/images/migrated/partners/csr-partnership-1.webp',
    excerpt: 'Reaching female construction workers and slum dwellers with essential sanitary kits and physician-led reproductive health sessions.',
    content: `Under the national call to action on Menstrual Health, Raise India Foundation's flagship drive "Chuppi Todo - Sharam Nahi Samman" (Break the Silence - Dignity, Not Shame) continues to make a measurable difference in marginalized communities.

Female laborers on active construction sites often work long hours in harsh outdoor conditions with no access to private sanitation or hygienic menstrual products. Our medical outreach teams distribute comprehensive Dignity Kits containing high-quality sanitary napkins, antiseptic soap, and personal care necessities.

Crucially, volunteer female doctors conduct open, compassionate discussions to demystify menstrual hygiene, address gynecological concerns, and eliminate generational stigmas.`,
  },
  {
    id: 'b-4',
    slug: 'emergency-yamuna-flood-relief-operations',
    title: 'Frontline Field Report: Emergency Flood Relief Along the Yamuna Riverbanks',
    category: 'Disaster Relief',
    date: 'August 2023',
    author: 'Crisis Response Unit',
    image: '/images/migrated/events/flood-relief.jpg',
    excerpt: 'Ground relief operations delivering clean drinking water, dry food provisions, and temporary tarpaulin shelters to flood evacuees.',
    content: `When record monsoon rainfall caused the Yamuna River to breach its embankments in Delhi, floodwaters rapidly submerged low-lying slums and settlements along the riverbanks, displacing thousands of families into temporary roadside evacuation camps.

Raise India Foundation mobilized its emergency crisis response unit within hours. Our volunteers distributed hundreds of dry ration food hampers (including flour, pulses, cooking oil, and biscuits), thousands of liters of clean packaged drinking water, and heavy-duty waterproof tarpaulins to shield displaced families from continuous rains.

Our teams remained deployed until floodwaters receded and safe rehabilitation was secured.`,
  },
  {
    id: 'b-5',
    slug: 'delhi-government-covid-warriors-award',
    title: 'Raise India Foundation Honored with Delhi Government Covid Warriors Award',
    category: 'Recognition',
    date: 'June 2021',
    author: 'Executive Secretariat',
    image: '/images/migrated/awards/covid-warriors-award.webp',
    excerpt: 'Presented by MLA Raghav Chadha on behalf of the Government of Delhi for frontline ration distribution and humanitarian pandemic relief.',
    content: `During the height of the COVID-19 pandemic lockdowns, daily-wage laborers, migrant workers, and street dwellers were pushed to the brink of starvation. Raise India Foundation mounted a massive non-stop community kitchen and dry ration distribution campaign across Delhi.

In official recognition of this selfless frontline dedication, the Government of Delhi conferred the esteemed "COVID Warriors Award" upon Raise India Foundation, presented by MLA Raghav Chadha.

We dedicate this prestigious recognition to our frontline volunteers, donors, and medical partners who risked their safety to ensure no vulnerable family went to sleep hungry during the darkest days of the pandemic.`,
  },
  {
    id: 'b-6',
    slug: 'project-tapan-heatwave-relief-delhi',
    title: 'Project Tapan: Emergency Hydration and Footwear Distribution During 49°C Heatwave',
    category: 'Climate Relief',
    date: 'June 2024',
    author: 'Emergency Relief Team',
    image: '/images/migrated/events/tapan.webp',
    excerpt: 'Combating unprecedented urban heatwaves with mobile chilled hydration stations, ORS sachets, and footwear for daily-wage street workers.',
    content: `During May and June 2024, Delhi-NCR experienced extreme heatwaves with ambient temperatures soaring up to 49°C. For rickshaw pullers, street vendors, and road construction laborers, working outdoors under the relentless sun posed an immediate risk of fatal heatstroke.

Raise India Foundation deployed Project Tapan across high-density traffic junctions and construction corridors. Our teams dispensed over 10,000 liters of cold, purified drinking water, hundreds of packets of Oral Rehydration Salts (ORS), wide-brim sun umbrellas, and durable protective footwear to barefoot street workers.

Project Tapan exemplifies our proactive ethos of designing targeted survival initiatives that directly answer acute seasonal threats.`,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 8. CORPORATE & INSTITUTIONAL PARTNERS
// ─────────────────────────────────────────────────────────────────────────────
export interface CorporatePartner {
  id: string;
  name: string;
  category: string;
  logo: string;
}

export const corporatePartners: CorporatePartner[] = [
  { id: 'cp-1', name: 'Konverge Technologies Pvt. Ltd.', category: 'CSR Technology Partner', logo: '/images/migrated/partners/logos/cropped-sadasda-12.png' },
  { id: 'cp-2', name: 'M/s Threads (India) Limited', category: 'Corporate Partner', logo: '/images/migrated/partners/logos/2.webp' },
  { id: 'cp-3', name: 'Baxter (India) Pvt Ltd', category: 'Corporate Partner', logo: '/images/migrated/partners/logos/3.webp' },
  { id: 'cp-4', name: 'Gracure Pharmaceuticals Limited', category: 'Healthcare Partner', logo: '/images/migrated/partners/logos/4.webp' },
  { id: 'cp-5', name: 'Ferolite Jointings Limited', category: 'Corporate Partner', logo: '/images/migrated/partners/logos/5.webp' },
  { id: 'cp-6', name: 'Viavi Solutions India Private Limited', category: 'Corporate Partner', logo: '/images/migrated/partners/logos/6.webp' },
  { id: 'cp-7', name: 'GSP Foundation', category: 'Institutional Partner', logo: '/images/migrated/partners/logos/7.webp' },
  { id: 'cp-8', name: 'Sumridhi Aluminium Pvt. Ltd.', category: 'Corporate Partner', logo: '/images/migrated/partners/logos/8.webp' },
  { id: 'cp-9', name: 'ANZEN Projects Private Limited', category: 'Corporate Partner', logo: '/images/migrated/partners/logos/anzen-projects-private-limited.webp' },
  { id: 'cp-10', name: 'Swastik Technology Private Limited', category: 'Technology Partner', logo: '/images/migrated/partners/logos/swastik-technology-private-limited.webp' },
  { id: 'cp-11', name: 'TO THE NEW Private Limited', category: 'Corporate Partner', logo: '/images/migrated/partners/logos/to-the-new-private-limited.webp' },
  { id: 'cp-12', name: 'Asian Worldwide Services (India) Pvt Ltd', category: 'Logistics Partner', logo: '/images/migrated/partners/logos/asian-worldwide-services-india-pvt-ltd.webp' },
  { id: 'cp-13', name: 'Monochem Graphics Pvt Ltd', category: 'Corporate Partner', logo: '/images/migrated/partners/logos/monochem-graphics-pvt-ltd.webp' },
  { id: 'cp-14', name: 'Clubmillionaire Financial Services Pvt Ltd', category: 'Financial Services Partner', logo: '/images/migrated/partners/logos/clubmillionaire-financial-services-pvt-ltd.webp' },
  { id: 'cp-15', name: 'Beumer India Private Limited', category: 'Engineering Partner', logo: '/images/migrated/partners/logos/beumer-india-private-limited.webp' },
  { id: 'cp-16', name: 'Samrat Pharmachem Limited', category: 'Healthcare Partner', logo: '/images/migrated/partners/logos/1.webp' },
];

// ─────────────────────────────────────────────────────────────────────────────
// 9. STATUTORY FINANCIAL DETAILS
// ─────────────────────────────────────────────────────────────────────────────
export const financialDetails = [
  { label: 'Registration No', value: '274409' },
  { label: 'PAN No', value: 'AAHCR1346N' },
  { label: 'License Number', value: '104625' },
  { label: '80G Registration Number', value: 'DEL-RE28502-27042018/9939' },
  { label: '12A Registration Number', value: 'DEL-RR27075-27042018/8245' },
  { label: 'NITI Aayog Reg.', value: 'ID U85100DL2014NPL274409' },
];

// ─────────────────────────────────────────────────────────────────────────────
// 10. DONOR & SUPPORTER TESTIMONIALS
// ─────────────────────────────────────────────────────────────────────────────
export const donorTestimonials: Testimonial[] = [
  {
    id: 't-1',
    name: 'Mr. Sachin Sharma',
    designation: 'Donor & Supporter',
    quote: "I am privileged to be part of Raise India Foundation and really happy to see outstanding work done by them. It is the best way to stay connected with the noble cause and have the feeling of doing something for society. And the best part is, you don't need huge money to contribute for such noble causes, even a small amount can make a massive difference. I am very happy to be part of initiatives like girl education, support for Covid-19, distribution of sanitization kits to women, khana khilao punya kamao and many more.",
    type: 'donor',
  },
  {
    id: 't-2',
    name: 'Mr. Gaurav Jain',
    designation: 'Donor & NGO Collaborator',
    quote: 'As someone who has been a donor and through my own NGO, collaborator of the Raise India Foundation, I must commend their efforts for working for the downtrodden sections of our society. Anyone is free to see their activities on the ground and the genuine difference they are making to lives of our fellow citizens, irrespective of caste, creed, gender or linguistic affiliation. I am immensely satisfied and would urge one and all with the means to support them in their wonderful initiatives.',
    type: 'collaborator',
  },
  {
    id: 't-3',
    name: 'Mr. Sunil Sharma',
    designation: 'Donor & Well-wisher',
    quote: 'I feel proud and honored to share my ideas and ethics with a team like this. You all are enthusiastic, energetic, and have a positive attitude. I thank every one of you for the constant hard work and dedication. With the help of your team we are able to cherish moments of people not known to us.',
    type: 'donor',
  },
  {
    id: 't-4',
    name: 'Mr. Vimal Malik',
    designation: 'Donor & Field Participant',
    quote: 'I am so happy to see my donation going for a useful purpose, thanks to Raise India Foundation, who makes it happen. I truly love their campaigns such as Khana Khilao Punya Kamao, Kambal Udhao Zindagi Bachao. I even participated in their activities. I love to take my son along with me and show the generosity of work they are doing. Team Raise India Foundation, you are all doing amazing work. Thank you for providing the opportunity to contribute to your noble work.',
    type: 'donor',
  },
  {
    id: 't-5',
    name: 'Mr. Ajay Agarwal',
    designation: 'Donor & Benefactor',
    location: 'Palo Alto, CA 94306, USA',
    quote: 'RIF proved to be too good to be true, and in the truest sense of the phrase, was a "breath of fresh air". This organization is all hands on deck, serving humanity where it hurts the most. Their focus is empowerment to live with dignity, food, shelter, medicines and they do everything as efficiently as possible. If anyone witnesses their staff in action, they will see that RIF is an epitome of affection and hope to the masses they assist. If anyone is wondering how to give back to society, or seeking avenues to help the poor, look no further: I strongly recommend donating to RIF.',
    type: 'donor',
  },
  {
    id: 't-6',
    name: 'Aarju Sheoran',
    designation: 'Social Intern (TAPMI, Bengaluru)',
    quote: 'Working as an intern at Raise India Foundation, specifically on the Shikshalaya project, has been an extraordinary experience. Shikshalaya provides free education to children, and being a part of this initiative was an incredibly rewarding experience. Interacting with the children and helping them with their studies was an eye-opener for me. Raise India Foundation is doing a commendable job. They not only provide education to these children but also treat them and their families as part of the Shikshalaya family.',
    type: 'intern',
  },
];

