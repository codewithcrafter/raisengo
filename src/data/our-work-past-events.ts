// How to edit content:
// To change any card's or detail page's content, update the respective field below.
// Ensure highlights array has exactly 3 bullet points.
// The pages will automatically reflect the updated content without layout code changes.

export const pastEvents = [
  {
    id: 'ev-1',
    slug: 'education-kit-distribution-drive',
    title: 'Education Kit Distribution Drive',
    date: 'July 2023',
    location: 'Shikshalaya Centers, Delhi & Agra',
    description: 'At our Shikshalaya centers, we believe that education begins with dignity. We distributed comprehensive educational kits containing school bags, notebooks, drawing kits, water bottles, and stationery to ensure every enrolled child has the tools needed to thrive.',
    highlights: ['Distributed school bags and complete stationery kits', 'Motivational interactions with volunteer mentors', 'Parent-teacher orientation on regular attendance'],
    image: '/images/migrated/events/education-kit.webp',
    ctaLabel: 'Support Education',
    ctaLink: '/get-involved',
    seo: { metaTitle: 'Education Kit Distribution Drive | Raise India', metaDescription: 'Distribution of educational kits at Shikshalaya centers.' },
    details: {
      about: 'The Education Kit Distribution Drive was organized across our Shikshalaya centers in Delhi and Agra to equip our first-generation learners with all necessary academic tools for the new school term.',
      whyItMatters: 'Many families cannot afford basic school supplies. Providing a complete kit removes this financial barrier and gives children the confidence and dignity they need to succeed in their studies.',
      whatWeDo: [
        'Procure high-quality school bags, notebooks, and stationery items.',
        'Organize distribution events involving local community leaders and parents.',
        'Conduct interactive sessions to motivate students for the upcoming academic year.'
      ],
      impact: [ { label: 'Kits Distributed', value: '1,500+' }, { label: 'Centers Covered', value: '3' } ],
      faqs: [
        { q: 'What does the kit contain?', a: 'A school bag, 6 notebooks, geometry box, colors, pens/pencils, and a water bottle.' },
        { q: 'How often do you distribute kits?', a: 'We typically conduct large distribution drives at the beginning of each academic session.' },
        { q: 'Can I donate school supplies?', a: 'Yes, we accept donations of new stationery items and bags.' }
      ],
      gallery: ['/images/migrated/events/education-kit.webp']
    }
  },
  {
    id: 'ev-2',
    slug: 'agra-shikshalaya-learning-center-inauguration',
    title: 'Agra Shikshalaya Learning Center Inauguration',
    date: 'July 2023',
    location: 'Radha Nagar, Near Balkeshwar Hospital, Balkeshwar, Agra',
    description: 'Inauguration of our dedicated learning center in Agra. Located in the heart of Radha Nagar, this center provides free elementary education, digital learning sessions, and nutritious snacks to children from surrounding marginalized settlements.',
    highlights: ['Permanent learning space equipped with study materials', 'Inaugural ceremony attended by community leaders', 'Enrollment of over 100 first-generation learners'],
    image: '/images/migrated/events/agra-shikshalaya.webp',
    ctaLabel: 'Support Agra Center',
    ctaLink: '/get-involved',
    seo: { metaTitle: 'Agra Shikshalaya Inauguration | Raise India', metaDescription: 'Inauguration of our dedicated learning center in Agra.' },
    details: {
      about: 'The inauguration of the Agra Shikshalaya center marked a significant milestone in our mission to expand educational access. Located in a densely populated area, the center was set up to serve children from nearby informal settlements who previously had no access to schooling.',
      whyItMatters: 'Establishing a permanent physical space creates a safe, dedicated learning environment away from the harsh realities of the streets, significantly improving focus, attendance, and overall educational outcomes.',
      whatWeDo: [
        'Renovate and equip the space with desks, whiteboards, and a small library.',
        'Hire and train local educators to run daily classes.',
        'Conduct a massive community outreach campaign to enroll out-of-school children.'
      ],
      impact: [ { label: 'Initial Enrollment', value: '120 Children' }, { label: 'Teachers Appointed', value: '4' } ],
      faqs: [
        { q: 'Who attended the inauguration?', a: 'Local community leaders, parents, and our core volunteer team.' },
        { q: 'What are the operating hours?', a: 'The center runs two shifts, from 9 AM to 1 PM and 2 PM to 6 PM.' },
        { q: 'Is digital learning available here?', a: 'Yes, the center includes a small IT corner with 5 desktop computers.' }
      ],
      gallery: ['/images/migrated/events/agra-shikshalaya.webp']
    }
  },
  {
    id: 'ev-3',
    slug: 'delhi-monsoon-flood-relief-operations',
    title: 'Delhi Monsoon Flood Relief Operations',
    date: 'Monsoon 2023',
    location: 'Yamuna Floodplains & Evacuation Camps, Delhi',
    description: 'When torrential rains and rising Yamuna waters inundated low-lying colonies across Delhi, thousands were evacuated into makeshift roadside camps. Raise India Foundation teams distributed dry ration kits, bottled drinking water, tarpaulins, and primary medical support.',
    highlights: ['Direct aid distribution in evacuated flood camps', 'Provision of clean drinking water and dry rations', 'First-aid and sanitation supplies delivered'],
    image: '/images/migrated/events/flood-relief.jpg',
    ctaLabel: 'Donate to Relief Fund',
    ctaLink: '/get-involved',
    seo: { metaTitle: 'Delhi Flood Relief Operations | Raise India', metaDescription: 'Emergency flood relief operations in Delhi during the 2023 monsoon.' },
    details: {
      about: 'During the severe monsoon flooding of the Yamuna river in 2023, our emergency response teams were deployed to the worst-hit areas along the floodplains. We set up relief distribution points in evacuation camps to assist displaced families.',
      whyItMatters: 'Sudden displacement leaves families without food, clean water, or shelter, exposing them to starvation and waterborne diseases. Immediate intervention is crucial for their survival and health.',
      whatWeDo: [
        'Deploy mobile teams to distribute dry ration kits and safe drinking water.',
        'Provide heavy-duty tarpaulins to families living in makeshift open-air camps.',
        'Organize health camps to treat minor injuries and prevent disease outbreaks.'
      ],
      impact: [ { label: 'Families Assisted', value: '2,500+' }, { label: 'Rations Distributed', value: '3,000+ Kits' } ],
      faqs: [
        { q: 'How long did the operations last?', a: 'Our teams were on the ground actively distributing relief for over 14 days.' },
        { q: 'Did you coordinate with local authorities?', a: 'Yes, we worked alongside local administration to reach the most inaccessible camps.' },
        { q: 'Are you prepared for future floods?', a: 'We maintain a standby stock of tarpaulins and essential relief materials during monsoon season.' }
      ],
      gallery: ['/images/migrated/events/flood-relief.jpg']
    }
  },
  {
    id: 'ev-4',
    slug: 'sweet-home-orphanage-outreach',
    title: 'Sweet Home Orphanage Outreach',
    date: 'August 2023',
    location: 'Sweet Home Orphanage for Girls, Delhi',
    description: 'A special outreach visit to the Sweet Home Orphanage for Girls. Our volunteers spent the day engaging the children in interactive storytelling, educational games, and distributed stationery, clothing, and nutritious meals.',
    highlights: ['Distribution of educational supplies and books', 'Creative arts and storytelling workshops', 'Celebration of youth and companionship'],
    image: '/images/migrated/events/sweet-home-orphanage.webp',
    ctaLabel: 'Support Orphanages',
    ctaLink: '/get-involved',
    seo: { metaTitle: 'Sweet Home Orphanage Outreach | Raise India', metaDescription: 'A day of joy, learning, and support at the Sweet Home Orphanage for Girls.' },
    details: {
      about: 'Our volunteer network organized a full-day outreach program at the Sweet Home Orphanage for Girls. The event was focused on bringing joy, emotional support, and essential supplies to the residents, creating a memorable experience for everyone involved.',
      whyItMatters: 'Children in institutional care often lack personalized emotional engagement. Such outreach programs foster a sense of belonging, boost their confidence, and provide them with much-needed recreational and educational materials.',
      whatWeDo: [
        'Conduct interactive storytelling and creative arts sessions.',
        'Distribute personalized gift bags containing stationery, books, and new clothing.',
        'Host a communal nutritious lunch with the children and staff.'
      ],
      impact: [ { label: 'Girls Reached', value: '85' }, { label: 'Volunteers Engaged', value: '20+' } ],
      faqs: [
        { q: 'How often do you visit orphanages?', a: 'We organize such visits quarterly across various institutions in Delhi NCR.' },
        { q: 'Can I volunteer for the next visit?', a: 'Yes, we announce volunteer opportunities for outreach programs on our social media.' },
        { q: 'What kind of games were played?', a: 'We organized musical chairs, painting competitions, and team-building exercises.' }
      ],
      gallery: ['/images/migrated/events/sweet-home-orphanage.webp']
    }
  },
  {
    id: 'ev-5',
    slug: 'comprehensive-dental-and-eye-check-up-camp',
    title: 'Comprehensive Dental and Eye Check-Up Camp',
    date: 'September 2023',
    location: 'Community Center, New Delhi',
    description: 'As part of our commitment to holistic community health, we organized semi-annual dental and eye check-up camps with certified dental surgeons and ophthalmologists, providing free consultations, screenings, and free corrective spectacles and medicines.',
    highlights: ['Free vision testing and prescription eyeglasses distribution', 'Dental check-ups, cleanings, and oral hygiene kits', 'Doctor counseling on preventive healthcare'],
    image: '/images/migrated/events/dental-eye-checkup.webp',
    ctaLabel: 'Support Health Camps',
    ctaLink: '/get-involved',
    seo: { metaTitle: 'Dental and Eye Check-Up Camp | Raise India', metaDescription: 'Free dental and vision screening camp for underprivileged communities in New Delhi.' },
    details: {
      about: 'We hosted a large-scale, comprehensive dental and eye check-up camp in New Delhi, mobilizing specialized doctors to provide free screenings to residents of nearby low-income neighborhoods who otherwise lack access to basic healthcare.',
      whyItMatters: 'Preventive healthcare is often neglected in marginalized communities due to cost. Uncorrected vision problems and poor oral hygiene lead to severe long-term complications and hinder children\'s performance in school.',
      whatWeDo: [
        'Set up mobile screening units for vision testing and dental examinations.',
        'Provide free prescription eyeglasses on the spot for those diagnosed with refractive errors.',
        'Distribute oral hygiene kits (toothbrush, toothpaste) and necessary medications.'
      ],
      impact: [ { label: 'Patients Screened', value: '450+' }, { label: 'Eyeglasses Distributed', value: '120+' } ],
      faqs: [
        { q: 'Who were the doctors?', a: 'We partnered with volunteer ophthalmologists and dental surgeons from reputed local hospitals.' },
        { q: 'Were treatments provided?', a: 'Basic treatments like scaling and medication were provided; complex cases were referred to partner hospitals.' },
        { q: 'Is this an annual event?', a: 'We aim to conduct these specialized camps semi-annually.' }
      ],
      gallery: ['/images/migrated/events/dental-eye-checkup.webp']
    }
  },
  {
    id: 'ev-6',
    slug: 'world-heart-day-awareness-pediatric-screening',
    title: 'World Heart Day Awareness & Pediatric Screening',
    date: 'September 2023',
    location: 'New Delhi & NCR',
    description: 'In observance of World Heart Day and in coordination with hospital partners, we conducted heart health screenings and awareness seminars emphasizing early detection of congenital heart defects in children and cardiovascular wellness.',
    highlights: ['Specialist pediatric cardiologist consultations', 'Screening sessions identifying children with heart murmurs', 'Awareness lectures for parents on CHD symptoms'],
    image: '/images/migrated/events/world-heart-day.webp',
    ctaLabel: 'Fund Heart Surgeries',
    ctaLink: '/get-involved',
    seo: { metaTitle: 'World Heart Day Awareness | Raise India', metaDescription: 'Pediatric heart screening and awareness camps conducted on World Heart Day.' },
    details: {
      about: 'To mark World Heart Day, we expanded our Mission Little Heartbeats initiative by hosting widespread awareness campaigns and specialized pediatric cardiac screening camps across multiple locations in NCR, aimed at early detection of Congenital Heart Disease (CHD).',
      whyItMatters: 'Early diagnosis of CHD is critical for successful surgical intervention. Many parents in rural or slum areas remain unaware of the symptoms of heart defects until the child\'s condition becomes critical.',
      whatWeDo: [
        'Organize screening camps with pediatric cardiologists equipped with portable echocardiography machines.',
        'Conduct seminars educating parents on the warning signs of CHD (e.g., blue lips, poor weight gain).',
        'Register diagnosed children into our surgical funding pipeline for immediate intervention.'
      ],
      impact: [ { label: 'Children Screened', value: '300+' }, { label: 'Critical Cases Identified', value: '8' } ],
      faqs: [
        { q: 'What happens to the children diagnosed?', a: 'They are enrolled in Mission Little Heartbeats, and we begin the process to fund their surgeries at Fortis Hospital.' },
        { q: 'Were the screenings free?', a: 'Yes, all consultations and echocardiograms were provided completely free of charge.' },
        { q: 'How can I support this cause?', a: 'Donations to Mission Little Heartbeats directly fund these screenings and the subsequent surgeries.' }
      ],
      gallery: ['/images/migrated/events/world-heart-day.webp']
    }
  },
  {
    id: 'ev-7',
    slug: 'environmental-threat-day-green-drive',
    title: 'Environmental Threat Day Green Drive',
    date: 'September 2023',
    location: 'Delhi-NCR Parks & Community Spaces',
    description: 'Observing Environmental Threat Day, our team spearheaded tree plantation drives and community seminars highlighting the urgent need to protect urban green cover, cut single-use plastic, and protect groundwater tables.',
    highlights: ['Plantation of native shade and air-purifying trees', 'Pledge campaign against single-use plastics', 'Youth volunteer participation across Delhi'],
    image: '/images/migrated/events/environmental-threat.webp',
    ctaLabel: 'Support Green Drives',
    ctaLink: '/get-involved',
    seo: { metaTitle: 'Environmental Threat Day Green Drive | Raise India', metaDescription: 'Tree plantation and environmental awareness campaign across Delhi NCR.' },
    details: {
      about: 'On Environmental Threat Day, Raise India Foundation mobilized hundreds of youth volunteers for a massive urban greening and awareness campaign. The event focused on combating Delhi\'s severe air pollution and degrading urban ecosystem.',
      whyItMatters: 'Delhi consistently ranks among the most polluted cities globally. Expanding green cover with indigenous, air-purifying trees and reducing plastic waste are essential steps toward a breathable, sustainable future for the city\'s residents.',
      whatWeDo: [
        'Plant saplings of native tree species (like Neem, Peepal, and Banyan) in public parks and barren lands.',
        'Organize interactive workshops on waste segregation and the dangers of single-use plastics.',
        'Establish neighborhood "tree guard" committees to ensure the long-term survival of planted saplings.'
      ],
      impact: [ { label: 'Saplings Planted', value: '1,000+' }, { label: 'Volunteers Mobilized', value: '150+' } ],
      faqs: [
        { q: 'How do you ensure the trees survive?', a: 'We assign local volunteers and work with municipal park authorities to water and protect the saplings.' },
        { q: 'What types of trees were planted?', a: 'Only indigenous varieties suited to Delhi\'s climate and known for high oxygen output were selected.' },
        { q: 'Can my school participate next time?', a: 'Absolutely. We actively partner with schools and colleges for our environmental drives.' }
      ],
      gallery: ['/images/migrated/events/environmental-threat.webp']
    }
  },
  {
    id: 'ev-8',
    slug: 'khushiyon-ki-potli-deepawali-celebration',
    title: 'Khushiyon Ki Potli Deepawali Celebration',
    date: 'November 2023',
    location: 'Underprivileged Settlements, Delhi & UP',
    description: 'Spreading joy and light during Deepawali, our volunteers delivered festive hampers containing dry groceries, festive sweets, diyas, and new clothes to families in underserved communities.',
    highlights: ['Festive hampers distributed to over 500 households', 'Celebration with children at Shikshalaya learning centers', 'Creating inclusive festive cheer for all'],
    image: '/images/migrated/events/khushiyon-ki-potli.webp',
    ctaLabel: 'Share Festive Joy',
    ctaLink: '/get-involved',
    seo: { metaTitle: 'Deepawali Celebration Drive | Raise India', metaDescription: 'Distributing festive hampers and spreading joy in underserved communities during Deepawali.' },
    details: {
      about: 'Our 2023 Khushiyon Ki Potli drive was our largest Deepawali celebration to date. Volunteer teams fanned out across several informal settlements in Delhi and UP, delivering beautifully packed hampers to ensure that economic hardship did not dim the festival of lights for these families.',
      whyItMatters: 'Deepawali is culturally significant and a time of abundance. For families struggling for daily survival, the inability to celebrate can be deeply alienating. This drive brings dignity, inclusion, and sheer joy to their doorsteps.',
      whatWeDo: [
        'Source, pack, and distribute comprehensive festive hampers to vetted households.',
        'Host vibrant Deepawali parties at our Shikshalaya centers with music, rangoli making, and feasts.',
        'Distribute safe, eco-friendly diyas and candles to light up their homes.'
      ],
      impact: [ { label: 'Families Reached', value: '500+' }, { label: 'Children Celebrated', value: '1,200+' } ],
      faqs: [
        { q: 'Who sponsors these hampers?', a: 'The drive is entirely funded by our generous individual donors and corporate partners.' },
        { q: 'How do you select the beneficiary families?', a: 'Our ground teams identify the most vulnerable households in the slums where we operate our ongoing programs.' },
        { q: 'Are firecrackers included?', a: 'No, in line with our environmental commitments, we do not distribute firecrackers.' }
      ],
      gallery: ['/images/migrated/events/khushiyon-ki-potli.webp']
    }
  },
  {
    id: 'ev-9',
    slug: 'pitru-paksha-nutrition-and-food-outreach',
    title: 'Pitru Paksha Nutrition and Food Outreach',
    date: 'October 2023',
    location: 'Government Hospitals & Shelters, Delhi',
    description: 'During the sacred period of Pitru Paksha, Raise India Foundation volunteers distributed wholesome cooked meals and fresh fruits to patients and attendants waiting outside major government hospitals.',
    highlights: ['Nutritious cooked meals and fresh fruit distribution', 'Supporting attendants of critically ill patients', 'Fostering dignity and empathy in hospital waiting areas'],
    image: '/images/migrated/events/pitru-paksha.webp',
    ctaLabel: 'Support Food Drives',
    ctaLink: '/get-involved',
    seo: { metaTitle: 'Pitru Paksha Food Outreach | Raise India', metaDescription: 'Distribution of meals and nutrition to hospital attendants during Pitru Paksha.' },
    details: {
      about: 'Honoring the tradition of giving during the Pitru Paksha period, we organized a massive food outreach program targeting the often-overlooked attendants of patients at large government hospitals in Delhi, who frequently camp on pavements for weeks.',
      whyItMatters: 'While patients receive hospital meals, their family members and attendants—often migrant laborers from other states—struggle to afford food in the city, compromising their own health while caring for their loved ones.',
      whatWeDo: [
        'Prepare hygienic, highly nutritious cooked meals in our community kitchens.',
        'Distribute food packets, fresh fruits, and clean water directly to attendants outside hospital gates.',
        'Provide a moment of dignity and compassionate interaction during their stressful times.'
      ],
      impact: [ { label: 'Meals Served', value: '2,500+' }, { label: 'Hospitals Covered', value: '4' } ],
      faqs: [
        { q: 'Which hospitals were covered?', a: 'We focused on major government hospitals like AIIMS and Safdarjung where attendant crowds are highest.' },
        { q: 'Who cooks the meals?', a: 'The meals are prepared in certified hygienic kitchens by our dedicated staff and volunteers.' },
        { q: 'Can we donate raw rations for this?', a: 'Yes, we gladly accept donations of rice, lentils, oil, and spices for our community kitchens.' }
      ],
      gallery: ['/images/migrated/events/pitru-paksha.webp']
    }
  },
  {
    id: 'ev-10',
    slug: 'kambal-udhao-zindagi-bachao-winter-relief',
    title: 'Kambal Udhao Zindagi Bachao Winter Relief',
    date: 'December 2023 – January 2024',
    location: 'Street Pavements & Slums across Delhi-NCR',
    description: 'Our annual winter drive running since 2014. Teams traversed the streets of Delhi late at night to distribute heavy woolen blankets directly to homeless citizens, rickshaw drivers, and vulnerable elders sleeping without shelter.',
    highlights: ['Late-night on-street direct blanket distribution', 'Over 2,000+ heavy woolen blankets provided', 'Thermal jackets and caps distributed to street children'],
    image: '/images/migrated/events/kambal-udhao.webp',
    ctaLabel: 'Donate Blankets',
    ctaLink: '/get-involved',
    seo: { metaTitle: 'Winter Blanket Relief Drive | Raise India', metaDescription: 'Distributing heavy woolen blankets to the homeless during freezing Delhi winters.' },
    details: {
      about: 'The 2023-2024 iteration of our Kambal Udhao campaign was executed during one of the coldest winters recorded in recent years. Our volunteer convoys navigated the city between midnight and 3 AM to ensure blankets reached the genuinely destitute sleeping on pavements.',
      whyItMatters: 'Freezing temperatures are fatal for those without a roof. Providing a high-quality blanket acts as a direct, life-saving intervention against hypothermia for the city\'s most invisible population.',
      whatWeDo: [
        'Map out high-density homeless areas, railway stations, and underpasses.',
        'Conduct stealthy late-night distributions to avoid crowds and ensure blankets reach the sleeping homeless.',
        'Distribute supplementary winter gear like woolen caps and socks to children.'
      ],
      impact: [ { label: 'Blankets Distributed', value: '2,000+' }, { label: 'Nights Operated', value: '25+' } ],
      faqs: [
        { q: 'Why do you distribute so late at night?', a: 'It helps us identify those who are genuinely sleeping on the streets, preventing hoarding and ensuring aid reaches the right people.' },
        { q: 'What is the quality of the blankets?', a: 'We distribute heavy, durable woolen blankets specifically designed to withstand outdoor winter conditions.' },
        { q: 'Did you cover areas outside Delhi?', a: 'Yes, teams also operated in parts of Noida and Ghaziabad.' }
      ],
      gallery: ['/images/migrated/events/kambal-udhao.webp']
    }
  },
  {
    id: 'ev-11',
    slug: 'ram-mahotsav-community-feast-and-outreach',
    title: 'Ram Mahotsav Community Feast & Outreach',
    date: 'January 2024',
    location: 'Community Grounds, Delhi',
    description: 'On the auspicious occasion of the consecration in Ayodhya on January 22, 2024, Raise India Foundation organized a community bhandara and feast, distributing sanctified meals and clothes to hundreds of families.',
    highlights: ['Community feast feeding hundreds of attendees', 'Distribution of seasonal clothing and sweets', 'Fostering brotherhood and community harmony'],
    image: '/images/migrated/events/ram-mahotsav.webp',
    ctaLabel: 'Support Community Feasts',
    ctaLink: '/get-involved',
    seo: { metaTitle: 'Ram Mahotsav Community Feast | Raise India', metaDescription: 'A massive community bhandara and feast organized in Delhi.' },
    details: {
      about: 'To mark a day of national and cultural significance, we organized the Ram Mahotsav community feast. The event brought together people from various walks of life, focusing on feeding the underprivileged and celebrating unity, peace, and shared joy.',
      whyItMatters: 'Community feasts (bhandaras) break down social and economic barriers, allowing everyone to sit together and share a meal in a spirit of absolute equality and brotherhood.',
      whatWeDo: [
        'Set up a large-scale community kitchen to prepare fresh, hygienic festive meals.',
        'Organize seating and serving arrangements managed entirely by our volunteers.',
        'Distribute sweets and seasonal clothing to families from nearby informal settlements.'
      ],
      impact: [ { label: 'People Fed', value: '3,000+' }, { label: 'Clothes Distributed', value: '500+ Items' } ],
      faqs: [
        { q: 'Was the event open to everyone?', a: 'Yes, community feasts are open to all, regardless of background or community.' },
        { q: 'How was it funded?', a: 'Through generous crowd-funding and contributions from local market associations.' },
        { q: 'Did volunteers cook the food?', a: 'Professional cooks managed the main preparation, while volunteers handled chopping, serving, and logistics.' }
      ],
      gallery: ['/images/migrated/events/ram-mahotsav.webp']
    }
  },
  {
    id: 'ev-12',
    slug: 'international-womens-day-celebration-and-health-camp',
    title: 'International Women\'s Day Celebration & Health Camp',
    date: 'March 2024',
    location: 'Women Empowerment Centers, Delhi',
    description: 'Dedicated to honoring the strength and resilience of women, we conducted health awareness sessions, distributed Dignity Kits, and felicitated female community leaders and self-reliant artisans.',
    highlights: ['Distribution of sanitary hygiene dignity kits', 'Interactive session on women’s health and rights', 'Showcasing products crafted by our vocational women trainees'],
    image: '/images/migrated/events/womens-day.webp',
    ctaLabel: 'Empower Women',
    ctaLink: '/get-involved',
    seo: { metaTitle: 'Women\'s Day Health Camp | Raise India', metaDescription: 'Celebrating International Women\'s Day with health camps and empowerment workshops.' },
    details: {
      about: 'We celebrated International Women\'s Day by organizing a mega health and empowerment camp at our centers. The event was a culmination of our year-round efforts to uplift marginalized women, featuring health check-ups, awareness talks, and an exhibition of products made by our vocational trainees.',
      whyItMatters: 'Celebrating this day recognizes the immense contributions of women in these communities while simultaneously addressing critical gaps in their healthcare access and financial independence.',
      whatWeDo: [
        'Conduct specialized gynecological health camps and distribute Dignity Kits.',
        'Host seminars on legal rights, financial literacy, and domestic violence prevention.',
        'Felicitate successful women artisans who completed our vocational training programs.'
      ],
      impact: [ { label: 'Women Attended', value: '400+' }, { label: 'Artisans Felicitated', value: '35' } ],
      faqs: [
        { q: 'What products did the artisans showcase?', a: 'They showcased eco-friendly cloth and paper bags, tailored garments, and handicrafts.' },
        { q: 'Were male community members involved?', a: 'Yes, specific sensitization sessions were held for men to foster a supportive household environment.' },
        { q: 'Is the vocational training ongoing?', a: 'Yes, our centers run continuous 3-month batches for tailoring and crafting.' }
      ],
      gallery: ['/images/migrated/events/womens-day.webp']
    }
  },
  {
    id: 'ev-13',
    slug: 'project-tapan-summer-heat-relief-drive',
    title: 'Project Tapan Summer Heat Relief Drive',
    date: 'May – June 2024',
    location: 'High-Temperature Traffic Intersections, Delhi',
    description: 'Responding to recorded 49°C heatwaves in 2024, Raise India Foundation mobilized emergency hydration teams distributing chilled water, ORS packets, and protective footwear to daily wage laborers and street sweepers.',
    highlights: ['Over 10,000 liters of potable chilled water distributed', 'Hundreds of ORS electrolyte sachets handed out', 'Sturdy footwear provided to barefoot street workers'],
    image: '/images/migrated/events/tapan.webp',
    ctaLabel: 'Support Summer Relief',
    ctaLink: '/get-involved',
    seo: { metaTitle: '2024 Summer Heat Relief Drive | Raise India', metaDescription: 'Emergency hydration and heat protection drive during the 49°C heatwave in Delhi.' },
    details: {
      about: 'During the unprecedented heatwave of summer 2024, where temperatures touched 49°C, we rapidly scaled up Project Tapan. Our volunteers and mobile water tankers hit the streets daily, targeting the most exposed workers at traffic signals, construction sites, and markets.',
      whyItMatters: 'The 2024 heatwave was exceptionally brutal, causing widespread heatstroke. For daily wage earners, stopping work isn\'t an option. Our direct intervention provided the necessary hydration and protection to keep them safe and alive.',
      whatWeDo: [
        'Deploy mobile chilled water dispensing vans across strategic, high-exposure locations.',
        'Distribute thousands of ORS packets for immediate electrolyte replenishment.',
        'Identify barefoot workers and provide them with sturdy, protective chappals (footwear).'
      ],
      impact: [ { label: 'Water Distributed', value: '15,000+ Liters' }, { label: 'Footwear Provided', value: '500+ Pairs' } ],
      faqs: [
        { q: 'Where did the water tankers operate?', a: 'Major traffic intersections in Central and West Delhi, and large construction sites.' },
        { q: 'Did you collaborate with the traffic police?', a: 'Yes, we actively distributed water and ORS to traffic police personnel on duty in the sun.' },
        { q: 'How long did the drive last?', a: 'The drive operated continuously for 45 days during the peak heatwave alert period.' }
      ],
      gallery: ['/images/migrated/events/tapan.webp']
    }
  }
];
