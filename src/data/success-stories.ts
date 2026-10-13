export interface CostBreakdownItem {
  label: string;
  value: string;
}

export interface SuccessStoryItem {
  id: string;
  slug: string;
  title: string;
  childName: string;
  age?: string;
  location?: string;
  condition: string;
  hospital: string;
  treatingDoctor?: string;
  excerpt: string;
  image: string;
  remoteImage: string;
  additionalImages?: Array<{ url: string; remoteUrl: string; caption?: string }>;
  status: string;
  category: string;
  date?: string;
  costBreakdown?: CostBreakdownItem[];
  quotes?: Array<{ text: string; author: string }>;
  sections: Array<{
    heading?: string;
    paragraphs: string[];
  }>;
}

export const successStoriesData: SuccessStoryItem[] = [
  // STORY 1
  {
    id: 'kanishk',
    slug: 'kanishk',
    title: "Kanishk’s Little Heart, A Bigger Hope",
    childName: 'Kanishk',
    age: '1 Year',
    location: 'Gwalior, Madhya Pradesh',
    condition: 'Moderate-sized muscular Ventricular Septal Defect (VSD) & Dilated Left Ventricle',
    hospital: 'Fortis Hospital, Manesar, Gurugram',
    excerpt: 'At just one year old, Kanishk from Gwalior was facing a serious congenital heart condition requiring urgent corrective cardiac treatment.',
    image: '/images/stories/kanish1.png',
    remoteImage: 'https://www.raiseindiafoundation.org/assets/img/kanish1.png',
    status: 'Treatment Supported',
    category: 'Mission Little Heartbeats',
    costBreakdown: [
      { label: 'Estimated Procedure Cost', value: '₹2,75,000' },
      { label: 'Raise India Foundation Responsibility', value: '₹2,60,000' },
      { label: 'Hospital Concession', value: 'Granted by Fortis Hospital' },
      { label: 'Hospital Stay Duration', value: '7–8 days' },
      { label: 'Father / Monthly Income', value: 'Puneet Rahul (Helper) / ~₹12,000' },
    ],
    sections: [
      {
        paragraphs: [
          'At just one year old, Kanishk from Gwalior, Madhya Pradesh, was facing a serious congenital heart condition. He was diagnosed with a moderate-sized muscular Ventricular Septal Defect (VSD), along with a dilated left ventricle. His condition required timely cardiac treatment so that he could have the opportunity to grow up healthy and enjoy the childhood he deserved.',
          'Kanishk was evaluated at Fortis Hospital, Manesar, Gurugram, where doctors advised corrective cardiac treatment. The estimated cost of the procedure, including hospitalisation, was ₹2,75,000, with an expected hospital stay of approximately 7–8 days for treatment and recovery.',
        ],
      },
      {
        heading: 'An Overwhelming Burden for the Family',
        paragraphs: [
          'For Kanishk’s family, this was an overwhelming financial burden. His father, Puneet Rahul, is the family’s sole earning member and works as a helper, earning approximately ₹12,000 per month. With a documented annual family income of ₹1,44,000, arranging ₹2.75 lakh for Kanishk’s treatment was far beyond what the family could reasonably afford.',
          'Through the Little Heartbeats initiative, Raise India Foundation stepped in to support Kanishk and his family. Fortis Hospital extended a concession towards the treatment, bringing down the amount that needed to be arranged. Raise India Foundation took responsibility for the remaining treatment cost of ₹2,60,000, helping ensure that financial hardship would not prevent Kanishk from accessing the cardiac care he needed.',
        ],
      },
      {
        heading: 'A Healthier Tomorrow Within Reach',
        paragraphs: [
          'For Kanishk, this support means more than meeting a medical expense. It represents the possibility of a healthier childhood, of growing up without his congenital heart condition defining his early years, and of having the chance to play, learn and dream like every child should.',
          'Kanishk’s story reflects what Little Heartbeats stands for: ensuring that a child’s access to essential healthcare is not determined by their family’s financial circumstances. By coming together at a critical moment, we can help little hearts move towards stronger and healthier futures.',
        ],
      },
    ],
  },

  // STORY 2
  {
    id: 'shivaay',
    slug: 'shivaay',
    title: "Success Story: Shivaay’s Little Heartbeat, Big Fight",
    childName: 'Shivaay',
    age: '7 Months',
    condition: 'Tetralogy of Fallot (TOF), Pulmonary Atresia & Duct-Dependent Pulmonary Circulation',
    hospital: 'Fortis Hospital, Manesar',
    excerpt: 'At just seven months old, Shivaay was fighting a battle far bigger than his tiny hands could understand, diagnosed with complex TOF.',
    image: '/images/stories/Shivaay5.jpg',
    remoteImage: 'https://www.raiseindiafoundation.org/assets/img/Shivaay5.jpg',
    status: 'Treatment Supported',
    category: 'Mission Little Heartbeats',
    costBreakdown: [
      { label: 'Estimated Procedure Cost', value: '₹3,20,000' },
      { label: 'Raise India Foundation Commitment', value: '₹3,00,000' },
      { label: 'Hospital Concession', value: '5–10% granted' },
      { label: 'Advised Treatment', value: 'Early-stage Rastelli surgery' },
      { label: 'Father / Family Size', value: 'Dinesh Rai (Labourer, ~₹14,000/mo) / 7 Members' },
    ],
    sections: [
      {
        paragraphs: [
          'At just seven months old, Shivaay, the son of Pinki and Dinesh Rai, was already fighting a battle far bigger than his tiny hands could understand.',
          'Shivaay was diagnosed with Tetralogy of Fallot (TOF), pulmonary atresia, and duct-dependent pulmonary circulation—a serious congenital heart condition affecting the way blood reaches his lungs. His condition had been worsening, with progressive cyanosis reported over the preceding two to three months. Doctors at Fortis Hospital, Manesar, advised early-stage Rastelli surgery as the necessary treatment.',
        ],
      },
      {
        heading: 'A Silent Struggle for a Family of Seven',
        paragraphs: [
          'For his family, the situation was frightening not only because of the complexity of his condition, but also because of the financial burden. Shivaay’s father, Dinesh Rai, is the only earning member of a family of seven, working as a labourer and earning approximately ₹14,000 per month. The estimated cost of Shivaay’s treatment was ₹3.2 lakh, an amount far beyond what his family could manage on their own.',
          'That was when Raise India Foundation’s Project Little Heartbeats stepped in.',
          'The Foundation committed ₹3 lakh towards Shivaay’s treatment, with the hospital providing an estimated 5–10% concession. For a family struggling to arrange the cost of a life-saving heart procedure, this support meant more than financial assistance—it meant that Shivaay’s parents could focus on what mattered most: giving their little boy a chance at a healthier future.',
        ],
      },
      {
        heading: 'Every Little Heartbeat Deserves a Chance',
        paragraphs: [
          'Shivaay may be small, but his fight is anything but.',
          'His little heartbeat carries a big dream: to grow up healthy, happy, and free to chase all the dreams that are waiting for him.',
          'Every child deserves the chance to grow up with a healthy heart. Every little heartbeat deserves a chance.',
        ],
      },
    ],
  },

  // STORY 3
  {
    id: 'shaurya',
    slug: 'shaurya',
    title: "Success Story: Baby Shaurya's Heart Beat Strong Again",
    childName: 'Baby Shaurya',
    age: '5 Months',
    location: 'Saharanpur, Uttar Pradesh',
    condition: 'Tetralogy of Fallot (TOF)',
    hospital: 'Fortis Hospital, Manesar',
    excerpt: 'Diagnosed with Tetralogy of Fallot at birth, Baby Shaurya received vital surgical support through Project Little Heartbeats.',
    image: '/images/stories/Shaurya2.jpg',
    remoteImage: 'https://www.raiseindiafoundation.org/assets/img/Shaurya2.jpg',
    status: 'Fundraising & Treatment Support',
    category: 'Mission Little Heartbeats',
    costBreakdown: [
      { label: 'Estimated Surgery & Hospitalization', value: '₹2,60,000' },
      { label: 'Recommended Procedure', value: 'Early-stage TOF repair surgery' },
      { label: 'Parents', value: 'Mr. Sandeep Kumar & Mrs. Nishu Devi' },
      { label: 'Father / Income', value: 'Helper in general store / ₹12,000/mo' },
      { label: 'Family Size', value: '5 members (Annual income ₹1.44 lakh)' },
    ],
    sections: [
      {
        paragraphs: [
          'At just five months old, Baby Shaurya should be discovering the world with innocent smiles and boundless curiosity. Instead, he is fighting a life-threatening congenital heart condition that threatens to take away his chance at a healthy childhood.',
          'Shaurya, the son of Mr. Sandeep Kumar and Mrs. Nishu Devi from a modest family in Saharanpur, Uttar Pradesh, has been diagnosed with Tetralogy of Fallot (TOF), a serious congenital heart defect present since birth. This condition affects the normal flow of blood through the heart, causing reduced oxygen levels in the body. Since birth, his parents have noticed a bluish discoloration of his skin, a visible sign of the silent battle taking place inside his tiny heart.',
        ],
      },
      {
        heading: 'Fighting Against the Odds',
        paragraphs: [
          'Shaurya\'s father works as a helper in a general store and earns only ₹12,000 per month, supporting a family of five. With an annual family income of just ₹1.44 lakh, arranging funds for advanced cardiac surgery is far beyond their means. Yet every day they hold onto hope that their son will receive the treatment he urgently needs.',
          'Doctors at Fortis Hospital, Manesar, have recommended an early-stage TOF repair surgery to correct the defect and give Shaurya the opportunity to live a healthy and normal life. The estimated cost of the surgery and hospitalization is ₹2.6 lakh. While Raise India Foundation has committed substantial support toward the treatment, additional resources are required to ensure that Shaurya receives timely care without delay.',
        ],
      },
      {
        heading: 'Chhoti Dhadkane Bade Sapne',
        paragraphs: [
          'Under our Project Little Heartbeats – Chhoti Dhadkane Bade Sapne initiative, we strive to ensure that no child is denied life-saving treatment because of financial hardship. Shaurya\'s story is a reminder that even the smallest hearts carry the biggest dreams.',
          'Your contribution, regardless of the amount, can help provide a second chance at life for this little fighter. Together, we can help Shaurya overcome this challenge, grow up healthy, attend school, play with friends, and dream without limitations.',
          'Every donation brings him one step closer to a successful surgery and a brighter future. Join us in giving Baby Shaurya the gift of a healthy heartbeat. Because every child deserves the chance to live, laugh, and dream.',
        ],
      },
    ],
  },

  // STORY 4
  {
    id: 'harsh-sharma',
    slug: 'harsh-sharma',
    title: "Project Little Heartbeats: Giving Harsh Sharma a Chance at a Healthy Future",
    childName: 'Harsh Sharma',
    age: '8 Years',
    location: 'Moti Nagar, New Delhi',
    condition: 'TOF, Severe Infundibular & Valvular Pulmonary Stenosis, Large PMVSD, Bidirectional Shunt',
    hospital: 'Fortis Hospital, Manesar, Gurugram',
    treatingDoctor: 'Dr. Deepak Thakur, Senior Consultant Pediatric Cardiology',
    excerpt: 'Eight-year-old Harsh Sharma from New Delhi battles complex congenital cardiac complications, dreaming of a normal childhood.',
    image: '/images/stories/harsh-sharma.webp',
    remoteImage: 'https://www.raiseindiafoundation.org/assets/img/harsh-sharma.webp',
    status: 'Treatment Support in Progress',
    category: 'Mission Little Heartbeats',
    costBreakdown: [
      { label: 'Estimated Total Treatment Cost', value: '₹2,60,000' },
      { label: 'Raise India Foundation Contribution', value: '₹2,50,000' },
      { label: 'Estimated Hospital Discount', value: '10 to 15 percent' },
      { label: 'Hospital Stay Duration', value: '7 to 8 days' },
      { label: 'Hospital', value: 'Fortis Hospital, Manesar, Gurugram' },
      { label: 'Treating Doctor', value: 'Dr. Deepak Thakur, Senior Consultant Pediatric Cardiology' },
    ],
    sections: [
      {
        paragraphs: [
          'Project Little Heartbeats is an initiative by Raise India Foundation dedicated to supporting children suffering from critical congenital heart diseases whose families are unable to afford timely treatment. Through this initiative, we aim to ensure that no child loses the chance to live a healthy life due to financial hardship. One such child currently in urgent need of support is 8-year-old Harsh Sharma from Moti Nagar, New Delhi.',
          'Harsh was diagnosed with severe congenital heart complications at birth. According to the medical assessment conducted at Fortis Hospital, Manesar, he is suffering from TOF (Tetralogy of Fallot), severe infundibular and valvular pulmonary stenosis, a large PMVSD, and a bidirectional shunt. His condition has caused visible discoloration of the skin and severe breathing difficulties since childhood, affecting his daily life, education, and physical development. Doctors have advised an early surgical repair to prevent further complications and to give him a chance at a healthier future.',
        ],
      },
      {
        heading: 'Family Background & Medical Realities',
        paragraphs: [
          'Harsh belongs to an economically weaker family consisting of six members with only two earning members. His father, Vijay Kumar Sharma, works as a helper and earns approximately ₹8,000 per month, making it extremely difficult for the family to bear the expenses of advanced cardiac treatment. Despite financial limitations, the family has continued to seek medical help and remains hopeful for Harsh’s recovery.',
          'The estimated cost of Harsh’s surgery and treatment at Fortis Hospital is approximately ₹2,60,000. This amount includes surgery charges, ICU stay, medicines, investigations, and 7 to 8 days of hospitalization. Raise India Foundation has committed a contribution of ₹2,50,000 towards his treatment, while the hospital has also agreed to provide a concession of nearly 10 to 15 percent to reduce the financial burden on the family.',
        ],
      },
      {
        heading: 'Dreams of a Pain-Free Childhood',
        paragraphs: [
          'Harsh is currently enrolled in Sarvodaya Bal Vidyalaya and dreams of living a normal childhood free from pain and constant medical struggles. Every contribution towards his treatment directly supports lifesaving medical care and gives him a chance to recover and grow without fear of his illness limiting his future.',
          'At Raise India Foundation, we believe that every child deserves access to timely healthcare, regardless of their financial circumstances. Through Project Little Heartbeats, we continue to stand beside families fighting impossible battles and strive to turn hope into healing. Your support, encouragement, and contribution can help Harsh receive the urgent cardiac treatment he needs and move one step closer toward a healthier tomorrow.',
        ],
      },
    ],
  },

  // STORY 5
  {
    id: 'prisha',
    slug: 'prisha',
    title: "Project Little Heartbeats: Prisha’s Heart is Healed!",
    childName: 'Prisha',
    age: '11 Months',
    location: 'Rewari, Haryana',
    condition: 'PMVSD with Left-to-Right Shunt & Moderate-sized ASD',
    hospital: 'Fortis Hospital',
    excerpt: 'Eleven-month-old Prisha from Rewari, Haryana, received critical financial backing for life-saving ASD/VSD surgical closure.',
    image: '/images/stories/prisha-healed.webp',
    remoteImage: 'https://www.raiseindiafoundation.org/assets/img/prisha-healed.webp',
    status: 'Treatment Supported',
    category: 'Mission Little Heartbeats',
    costBreakdown: [
      { label: 'Estimated Procedure Cost', value: '₹2,60,000' },
      { label: 'Raise India Foundation Support', value: '₹2,40,000' },
      { label: 'Advised Surgery', value: 'ASD/VSD surgical closure' },
      { label: 'Father / Occupation', value: 'Farmer Labourer / ~₹4,166 per month' },
      { label: 'Annual Household Income', value: 'Approximately ₹50,000 (Family of 4)' },
    ],
    sections: [
      {
        paragraphs: [
          'Prisha is an 11-month-old child diagnosed with a congenital heart condition, including PMVSD with a left-to-right shunt and a moderate-sized ASD. Her condition requires early surgical intervention to prevent further complications and support normal growth and development. Medical assessment at Fortis Hospital confirms that ASD/VSD surgical closure at this stage is critical for her recovery. The estimated cost of the procedure, including ICU care, is ₹2,60,000.',
          'Prisha’s health challenges are already affecting her early development. She has been experiencing inadequate weight gain and recurring illness, both of which are common indicators of underlying cardiac strain in infants. Timely medical intervention is therefore not optional but necessary.',
        ],
      },
      {
        heading: 'Overcoming Extreme Economic Vulnerability',
        paragraphs: [
          'She belongs to a family based in Rewari, Haryana. Her father, the sole earning member, works as a farmer labourer and earns approximately ₹4,166 per month, amounting to about ₹50,000 annually. Supporting a family of four on this income leaves no financial capacity to bear the cost of a major cardiac surgery.',
          'Through Project Little Heartbeats, Raise India Foundation is extending financial support of ₹2,40,000 towards Prisha’s treatment. This contribution significantly reduces the financial burden on the family and enables access to timely medical care that would otherwise remain out of reach.',
        ],
      },
      {
        heading: 'Structured Medical Due Diligence',
        paragraphs: [
          'Project Little Heartbeats focuses on identifying children with congenital heart defects from economically vulnerable backgrounds and facilitating their treatment through verified medical partnerships. The approach ensures that support is directed where it is most urgently needed, with emphasis on both transparency and impact.',
          'Prisha’s case reflects a broader challenge faced by many families where critical healthcare remains inaccessible due to financial constraints. With structured support and timely intervention, such cases can be effectively addressed, allowing children the opportunity to lead healthier lives.',
        ],
      },
    ],
  },

  // STORY 6
  {
    id: 'baby-aaban',
    slug: 'baby-aaban',
    title: "Support Baby Aaban’s Heart Surgery: A Fight for Survival against All Odds",
    childName: 'Baby Aaban',
    condition: 'Congenital Heart Defect Requiring Specialized Cardiac Care',
    hospital: 'Fortis Hospital, Gurugram',
    excerpt: 'Baby Aaban is fighting a critical cardiac battle where time is of the essence. Medical intervention is urgently needed.',
    image: '/images/stories/Baby-Aaban.png',
    remoteImage: 'https://www.raiseindiafoundation.org/assets/img/Baby%20Aaban.png',
    status: 'Urgent Appeal for Surgery',
    category: 'Mission Little Heartbeats',
    costBreakdown: [
      { label: 'Medical Facility', value: 'Fortis Hospital, Gurugram' },
      { label: 'Family Monthly Income', value: 'Approximately ₹12,000' },
      { label: 'Care Requirement', value: 'Surgery, ICU Care, Post-operative medication' },
      { label: 'Key Factor', value: 'Time-critical intervention' },
    ],
    sections: [
      {
        paragraphs: [
          'Baby Aaban is fighting a battle no child should have to face. Diagnosed with a congenital heart defect at a very young age, his condition requires urgent medical intervention to give him a chance at a healthy life. His treatment is being supported at Fortis Hospital, Gurugram, where doctors have confirmed the need for specialized cardiac care.',
          'Aaban comes from a family with extremely limited financial means. His family\'s monthly income is approximately ₹12,000, which barely covers basic necessities like food, rent, and daily survival. The cost of life-saving heart treatment is far beyond what they can afford. For them, this is not just a medical crisis but a situation that threatens to take away their child simply because they cannot pay for care.',
        ],
      },
      {
        heading: 'Why Time is Critical in Aaban\'s Care',
        paragraphs: [
          'At Raise India Foundation, we have taken up Aaban\'s case with the goal of ensuring that lack of resources does not decide his future. Children with congenital heart defects can live full and healthy lives if they receive timely surgery and follow-up care. Without it, their condition can worsen rapidly, leading to severe complications or even loss of life. Time is critical in Aaban\'s case. Every delay reduces his chances of recovery.',
          'Your support can directly change this outcome. Contributions will go towards covering hospital expenses, surgical procedures, medicines, and post-operative care. Each donation, regardless of size, brings Aaban one step closer to the treatment he urgently needs. More importantly, it gives his family hope in a moment where they feel helpless.',
        ],
      },
      {
        heading: 'An Urgent Appeal to Compassionate Donors',
        paragraphs: [
          'We believe that every child deserves access to healthcare, regardless of their financial background. Aaban\'s story is one of many, but today, we have the opportunity to act and make a tangible difference in his life.',
          'We request you to come forward and support this appeal. Help us ensure that Aaban gets the care he deserves and the chance to grow up healthy. Your contribution is not just financial support. It is the difference between uncertainty and survival, between despair and hope.',
        ],
      },
    ],
  },

  // STORY 7
  {
    id: 'lal-chand-prajapat',
    slug: 'lal-chand-prajapat',
    title: "Hope Won: Baby Lal Chand Prajapat’s Miracle Recovery Story",
    childName: 'Baby Lal Chand Prajapat',
    age: '1 Year',
    condition: 'Large Patent Ductus Arteriosus (PDA)',
    hospital: 'Fortis Hospital, Manesar (Social Wing)',
    excerpt: 'One-year-old Lal Chand Prajapat was diagnosed with a large PDA, becoming the 10th child aided under Mission Little Heartbeats.',
    image: '/images/stories/lal-chand-prajapat.jpg',
    remoteImage: 'https://www.raiseindiafoundation.org/assets/img/lal-chand-prajapat.jpg',
    status: 'Critical Intervention Supported',
    category: 'Mission Little Heartbeats',
    costBreakdown: [
      { label: 'Total Cost of Surgery', value: '₹1,90,000' },
      { label: 'Hospital Concession Granted', value: '₹15,000' },
      { label: 'Net Amount Needed / Arranged', value: '₹1,75,000' },
      { label: 'Recommended Surgery', value: 'Early-stage PDA device closure' },
      { label: 'Initiative Milestone', value: '10th Child supported under Mission Little Heartbeats' },
    ],
    sections: [
      {
        paragraphs: [
          'At just one year old, Baby Lal Chand Prajapat is facing a critical health condition that requires urgent medical attention. He has been diagnosed with a Large Patent Ductus Arteriosus (PDA), a serious heart defect that can lead to life-threatening complications if not treated in time.',
          'This case was referred to us by the Social Wing of Fortis Hospital, Manesar. After a thorough medical evaluation, doctors have strongly recommended an early-stage PDA device closure surgery. This procedure is essential to correct the defect and ensure that Lal Chand can lead a healthy life. Without timely intervention, his condition may worsen, increasing the risk to his survival.',
        ],
      },
      {
        heading: 'The Financial Reality & Hospital Support',
        paragraphs: [
          'Lal Chand\'s family is in a difficult financial situation. His father, the sole earning member, works hard to provide for the family\'s basic needs but does not have the resources to afford such a high-cost treatment. The total cost of the surgery is ₹1,90,000. With the hospital\'s support, a concession of ₹15,000 has been granted. Despite this, an amount of ₹1,75,000 still needs to be arranged urgently.',
          'For Lal Chand, time is of the essence. Delays in treatment can result in severe complications and may reduce the chances of a full recovery. Immediate support is crucial to ensure that he receives the care he needs without further delay.',
        ],
      },
      {
        heading: 'Mission Little Heartbeats: The 10th Child',
        paragraphs: [
          'At Raise India Foundation, through our Mission Little Heartbeats, we strive to support children suffering from critical heart conditions who lack access to necessary medical care due to financial constraints. Lal Chand is the 10th child under this initiative, and we are determined to do everything possible to help him receive timely treatment.',
          'Your support can make a meaningful difference. Every contribution, whether small or large, directly helps in bridging the financial gap and bringing Lal Chand closer to recovery. Together, we can give him the opportunity to grow, play, and live a healthy life.',
          'We request you to come forward and support this urgent cause. Your generosity can help save a life and bring hope to a family in distress. Donate now and help Lal Chand get the treatment he urgently needs.',
        ],
      },
    ],
  },

  // STORY 8
  {
    id: 'tanushri',
    slug: 'tanushri',
    title: "A New Life for Tanushri: The Victory of a Little Heart",
    childName: 'Tanushri Kumari',
    age: '4 Years',
    location: 'Almora, Uttarakhand',
    condition: 'Moderate to Large Ventricular Septal Defect (VSD) with Dilated LA/LV',
    hospital: 'Fortis Hospital, Manesar',
    excerpt: 'Four-year-old Tanushri from Almora, Uttarakhand, receives life-saving support for VSD device or surgical closure.',
    image: '/images/stories/tanushri1o.png',
    remoteImage: 'https://www.raiseindiafoundation.org/assets/img/tanushri1o.png',
    status: 'Surgical Support Committed',
    category: 'Mission Little Heartbeats',
    costBreakdown: [
      { label: 'Estimated Total Cost', value: '₹2,50,000' },
      { label: 'Raise India Foundation Commitment', value: '₹2,40,000' },
      { label: 'Hospital Stay Duration', value: '7 to 8 days (ICU included)' },
      { label: 'Father / Income', value: 'Bhagwat Lal (Security Guard) / ₹12,143/mo' },
      { label: 'Annual Household Income', value: '₹1,45,716 (Family of 3)' },
    ],
    sections: [
      {
        paragraphs: [
          'Under Project Little Heartbeats – Chhoti Dhadkane Bade Sapne, Raise India Foundation is supporting 4-year-old Tanushri Kumari, a brave little girl from Almora, Uttarakhand, who is battling a serious congenital heart defect.',
          'As certified by Fortis Hospital, Manesar, Tanushri has been diagnosed with a Moderate to Large Ventricular Septal Defect (VSD) with Dilated LA/LV and requires early-stage VSD device or surgical closure. Over time, her condition has led to inadequate weight gain and recurrent respiratory infections, weakening her body and putting her at continued medical risk.',
        ],
      },
      {
        heading: 'Financial Hardship in the Hills',
        paragraphs: [
          'Tanushri belongs to an economically weaker family. Her father, Bhagwat Lal, works as a security guard and is the sole earning member of the household. His monthly income is ₹12,143, which amounts to an annual income of ₹1,45,716. The family of three survives on this limited income, making it impossible for them to afford advanced pediatric cardiac surgery independently.',
          'The estimated total cost of Tanushri’s life-saving procedure, including ICU stay and hospitalization for 7 to 8 days, is ₹2,50,000. Raise India Foundation has committed ₹2,40,000 towards her treatment, and the hospital has extended a partial concession. However, additional financial support remains essential to ensure that her surgery proceeds without delay and that post-operative care is fully secured.',
        ],
      },
      {
        heading: 'Restoring a Young Life',
        paragraphs: [
          'A Ventricular Septal Defect is a structural heart condition that forces a child’s heart to work harder than normal. If left untreated, it can lead to complications affecting lung pressure, growth, and long-term cardiac function. With timely surgical intervention, however, children like Tanushri can recover and lead healthy, active lives.',
          'At just four years old, Tanushri deserves the chance to grow without breathlessness, hospital visits, or physical limitations. Your contribution directly supports her surgery, hospitalization, medications, and recovery care. Every donation, regardless of amount, strengthens her chance at survival and normal childhood development.',
          'Under Project Little Heartbeats, Raise India Foundation ensures thorough document verification, medical due diligence, and direct coordination with treating hospitals before extending support to each child.',
        ],
      },
    ],
  },

  // STORY 9
  {
    id: 'arya',
    slug: 'arya',
    title: "Project Arya – From Struggle to Strong Heartbeat",
    childName: 'Arya',
    age: '4 Months',
    condition: 'Complex Cyanotic CHD: CCTGA, VSD, Pulmonary Stenosis, Dextrocardia',
    hospital: 'Fortis Hospital, Manesar',
    excerpt: 'Four-month-old baby boy Arya battles a rare combination of heart defects including CCTGA and dextrocardia.',
    image: '/images/stories/arya01.png',
    remoteImage: 'https://www.raiseindiafoundation.org/assets/img/arya01.png',
    status: 'Under Intensive Care & Support',
    category: 'Mission Little Heartbeats',
    costBreakdown: [
      { label: 'Total Estimated Cost', value: '₹3,20,000' },
      { label: 'Raise India Foundation Contribution', value: '₹3,00,000' },
      { label: 'Hospital Concession', value: 'Covering balance amount' },
      { label: 'Father / Income', value: 'Daily-wage Labourer / ₹3,840 per month' },
      { label: 'Mother', value: 'Homemaker (No savings / insurance)' },
    ],
    sections: [
      {
        paragraphs: [
          'Arya is a four-month-old baby boy fighting a rare and life-threatening congenital heart condition. He has been diagnosed with complex cyanotic congenital heart disease, including CCTGA, ventricular septal defect (VSD), pulmonary stenosis, and dextrocardia. This serious combination affects the normal flow of blood and oxygen in his body. Since birth, Arya has experienced bluish discoloration, a clear sign that his body is not receiving enough oxygen. Doctors have advised urgent early-stage corrective cardiac surgery, without which his condition can worsen rapidly. With timely medical intervention, his life may have a chance at a healthier future.',
          'Arya is currently receiving treatment at Fortis Hospital, Manesar, where his condition is being closely monitored by a team of pediatric cardiology specialists. His treatment requires surgery, intensive medical care, and close post-operative monitoring to stabilize his health and support his recovery.',
        ],
      },
      {
        heading: 'A Daily Wage of ₹128 vs. a ₹3.2 Lakh Procedure',
        paragraphs: [
          'Arya comes from an economically weaker family. His father is a daily-wage labourer earning ₹3,840 per month, and his mother is a homemaker. The family has no financial savings or access to medical insurance and is unable to afford the high cost of specialized cardiac treatment on their own. The total estimated cost of Arya’s surgery and hospital care is ₹3,20,000. Raise India Foundation is contributing ₹3,00,000 towards Arya’s treatment, and the remaining amount is being covered through hospital concessions. This support is crucial to ensure that Arya receives uninterrupted medical care at this critical stage of his life.',
        ],
      },
      {
        heading: 'Together, We Can Help Arya Heal',
        paragraphs: [
          'Arya is just beginning his journey in the world. At an age when he should be learning to smile, respond to voices, and feel safe in his parents’ arms, he is instead fighting for every breath. With the right treatment at the right time, his condition may be treatable. Your support helps ensure that financial hardship does not stand between a child and essential medical care. Every contribution, every share, and every act of kindness brings Arya one step closer to a healthier future.',
          'Together, we can help Arya heal.',
        ],
      },
    ],
  },

  // STORY 10
  {
    id: 'baby-afdan',
    slug: 'baby-afdan',
    title: "Baby Afdan’s Brave Fight Against Critical Heart Defects",
    childName: 'Baby Afdan',
    age: '5 Months',
    condition: 'Transposition of the Great Arteries, VSD, PDA & Pulmonary Arterial Hypertension',
    hospital: 'Fortis Hospital, Manesar',
    excerpt: 'Five-month-old Baby Afdan faces complex defects including TGA, requiring immediate Arterial Switch Surgery.',
    image: '/images/stories/0001afdan-baby.jpg',
    remoteImage: 'https://www.raiseindiafoundation.org/assets/img/0001afdan-baby.jpg',
    status: 'Critical Heart Appeal',
    category: 'Mission Little Heartbeats',
    costBreakdown: [
      { label: 'Estimated Procedure Cost', value: '₹2,90,000' },
      { label: 'Fortis Hospital Concession', value: '₹25,000' },
      { label: 'Amount Required', value: '₹2,65,000' },
      { label: 'Advised Surgery', value: 'Arterial Switch Surgery with VSD & PDA closure' },
      { label: 'Urgency', value: 'Time-sensitive / Critical' },
    ],
    sections: [
      {
        paragraphs: [
          'Baby Afdan is a five-month-old infant who is fighting for his life every single day. He was born with multiple complex congenital heart defects that severely affect the functioning of his heart and lungs, making even basic survival a challenge. His medical diagnosis includes Transposition of the Great Arteries, Ventricular Septal Defect, Patent Ductus Arteriosus, and Pulmonary Arterial Hypertension. Together, these conditions prevent oxygen-rich blood from circulating properly in his body, placing immense strain on his fragile heart.',
          'Doctors have stated that Baby Afdan\'s condition is critical and life-threatening. After detailed medical evaluation, specialists at Fortis Hospital, Manesar have confirmed that an immediate Arterial Switch Surgery along with VSD and PDA closure is needed. The surgery is time-sensitive. Every passing day may increase the risk to Afdan\'s survival.',
        ],
      },
      {
        heading: 'Mobilizing Support for Arterial Switch Surgery',
        paragraphs: [
          'The estimated cost of this life-saving procedure is ₹2,90,000. With the support of Fortis Hospital, a concession of ₹25,000 has been extended, reducing the amount required to ₹2,65,000. For Afdan\'s family, arranging this amount urgently is beyond their means, making external support essential to proceed with the surgery in time.',
          'Through Project Little Heartbeats, Raise India Foundation works to ensure that children born with congenital heart diseases receive timely medical care and a fair chance at life. The initiative has supported children including Mitanshu, Amrita, Satyam, Baby Aarvi, Baby Raj Kushwaha, and Baby Kavyansh as examples of previous cases supported by the initiative.',
        ],
      },
      {
        heading: 'A Fair Chance at Life',
        paragraphs: [
          'Today, Baby Afdan needs that same chance. Your support can help arrange his surgery and give him the opportunity to grow up healthy, play freely, and live a life beyond hospital walls. Every contribution, regardless of size, brings him closer to a future filled with possibilities.',
          'Medical reports, hospital estimates, and supporting documents related to Baby Afdan\'s case are available for reference. Donors may meet Afdan and his parents at the time of hospital admission.',
          'We humbly appeal to you to come forward and support Baby Afdan\'s surgery. Your compassion can help support his treatment and give him a chance at a healthier future.',
        ],
      },
    ],
  },

  // STORY 11
  {
    id: 'kavyansh',
    slug: 'kavyansh',
    title: "Help Baby Kavyansh’s Heart Keep Beating",
    childName: 'Baby Kavyansh',
    age: '1 Year',
    condition: 'Single Ventricle Physiology, MAPCAs-dependent Circulation, Severe MAPCAs Stenosis',
    hospital: 'Fortis Hospital, Manesar',
    excerpt: 'One-year-old Baby Kavyansh battles rare single-ventricle physiology, urgently requiring MAPCA stenting.',
    image: '/images/stories/kavyansh.jpg',
    remoteImage: 'https://www.raiseindiafoundation.org/assets/img/kavyansh.jpg',
    status: 'Urgent Appeal for Surgery',
    category: 'Mission Little Heartbeats',
    costBreakdown: [
      { label: 'Total Procedure Cost', value: '₹1,80,000' },
      { label: 'Fortis Hospital Discount', value: '₹10,000' },
      { label: 'Amount Needed for Procedure', value: '₹1,70,000' },
      { label: 'Recommended Intervention', value: 'Early-stage MAPCA stenting' },
      { label: 'Primary Goal', value: 'Stabilize oxygen supply and cardiac function' },
    ],
    sections: [
      {
        paragraphs: [
          'At Raise India Foundation, we believe that every child deserves the chance to live a healthy and happy life. For over 10 years, we have worked to uplift underprivileged communities through initiatives in health, education, and dignity-focused welfare. One of our most heartfelt missions is Project Little Heartbeats, dedicated to supporting children born with Congenital Heart Diseases (CHD).',
          'Baby Kavyansh, just one year old, is currently fighting for his life. He has been diagnosed with a severe congenital heart disease involving single ventricle physiology, MAPCAs-dependent circulation, and severe MAPCAs stenosis. Due to the seriousness and complexity of his condition, doctors have urgently advised early-stage MAPCA stenting to stabilize his oxygen supply and prevent further deterioration. After detailed evaluation, Fortis Hospital, Manesar has recommended surgical intervention. The total cost of the procedure is ₹1,80,000, out of which the hospital has offered a ₹10,000 discount. The source states that ₹1,70,000 is needed to proceed with the surgery.',
        ],
      },
      {
        heading: 'Stand with Baby Kavyansh',
        paragraphs: [
          'Through Mission Little Heartbeats, Raise India Foundation has supported children including Mitanshu, Amrita, Satyam, Baby Aarvi, and Baby Raj Kushwaha. Today, we seek compassionate support to help Baby Kavyansh receive the care he needs.',
          'Your contribution, no matter the amount, can help Kavyansh receive treatment and give his family hope during a difficult time.',
          'A small act of kindness today can help support this child. Every contribution is a step toward keeping Kavyansh\'s little heart beating strong. We humbly request you to come forward and support this cause.',
        ],
      },
    ],
  },

  // STORY 12
  {
    id: 'aarvi',
    slug: 'aarvi',
    title: "Aarvi’s Little Heart Beats Strong Again",
    childName: 'Aarvi',
    age: '6 Months',
    condition: 'Patent Ductus Arteriosus (PDA)',
    hospital: 'Fortis Hospital, Manesar',
    excerpt: 'Six-month-old Aarvi underwent a successful PDA device closure, breathing comfortably and growing strong.',
    image: '/images/stories/aarvi-1.jpg',
    remoteImage: 'https://www.raiseindiafoundation.org/assets/img/aarvi-s-little-heart-beats-strong-again-1.jpg',
    additionalImages: [
      {
        url: '/images/stories/aarvi-2.jpg',
        remoteUrl: 'https://www.raiseindiafoundation.org/assets/img/aarvi-s-little-heart-beats-strong-again-2.jpg',
        caption: 'Aarvi with her parents post successful recovery',
      },
    ],
    status: 'Fully Recovered & Healthy',
    category: 'Mission Little Heartbeats',
    costBreakdown: [
      { label: 'Diagnosed Condition', value: 'Patent Ductus Arteriosus (PDA)' },
      { label: 'Procedure Performed', value: 'Early PDA device closure' },
      { label: 'Hospital', value: 'Fortis Hospital, Manesar' },
      { label: 'Father Employment', value: 'Textile factory worker' },
      { label: 'Outcome', value: 'Successful surgical recovery & weight gain' },
    ],
    sections: [
      {
        paragraphs: [
          'Aarvi was just six months old when her family learned she had Patent Ductus Arteriosus (PDA), a congenital heart defect in which a small vessel fails to close naturally after birth. Because of this, she experienced difficulty in breathing, frequent fatigue, and poor weight gain. Her parents, who rely on a modest income from her father’s work at a textile factory, faced significant financial barriers in accessing the treatment she urgently needed.',
          'Doctors at Fortis Hospital, Manesar advised an early PDA device closure to prevent long-term complications and support her healthy development. While the surgery had a high success rate, the cost remained beyond the family’s reach. That is where Raise India Foundation stepped in through Project Little Heartbeats, our initiative dedicated to supporting children with heart conditions.',
        ],
      },
      {
        heading: 'A Successful Intervention Through Collective Support',
        paragraphs: [
          'After assessing Aarvi’s case, Raise India Foundation initiated a fundraising effort to cover her surgical expenses. Thanks to the timely support from donors and well-wishers, the required amount was raised, and Aarvi was able to undergo the procedure without delay.',
          'The surgery was completed successfully, and her recovery progressed as expected. Post-operation, Aarvi began breathing more comfortably and gradually improving in weight and activity levels. Her parents, who had been worried about both her health and the financial burden, expressed deep relief and gratitude for the assistance provided.',
          'Aarvi’s case is now one of the growing success stories under Project Little Heartbeats, joining children like Mitanshu, Amrita, and Satyam who have received life-changing medical support through the initiative. Each completed case reaffirms the importance of early intervention and accessible healthcare for children from underserved backgrounds.',
        ],
      },
      {
        heading: 'Thank You for Making This Possible',
        paragraphs: [
          'We extend our sincere thanks to everyone who contributed to Aarvi’s treatment. Your support ensured timely medical care and helped a young child begin her life on a healthier path. Raise India Foundation remains committed to identifying and assisting more children in need of heart-related interventions, and we appreciate your continued partnership in this mission.',
        ],
      },
    ],
  },

  // STORY 13
  {
    id: 'satyam',
    slug: 'satyam',
    title: "Satyam, A Child with Down Syndrome",
    childName: 'Satyam',
    age: '10 Years',
    location: 'Varanasi, Uttar Pradesh',
    condition: 'Complex Congenital Heart Defect & Down Syndrome',
    hospital: 'Fortis Hospital, Manesar',
    excerpt: 'Ten-year-old Satyam from Varanasi overcame severe cardiac hurdles through open-heart surgery, now smiling and active.',
    image: '/images/stories/satyam2.webp',
    remoteImage: 'https://www.raiseindiafoundation.org/assets/img/satyam2.webp',
    status: 'Healed & Returning to School',
    category: 'Mission Little Heartbeats',
    costBreakdown: [
      { label: 'Estimated Surgery Cost', value: '₹2,35,000' },
      { label: 'Procedure Performed', value: 'High-risk open-heart surgery' },
      { label: 'Hospital Facility', value: 'Fortis Hospital, Manesar' },
      { label: 'Father / Income', value: 'Small-time priest / ~₹6,000 per month' },
      { label: 'Outcome', value: 'Stabilized cardiac function, returned to school' },
    ],
    quotes: [
      {
        text: 'I had lost all hope. You people saved not just our child, but our entire world.',
        author: 'Satyam’s Grandmother',
      },
    ],
    sections: [
      {
        paragraphs: [
          'Under Project Little Heartbeats, Raise India Foundation is proud to share the recovery story of Satyam, a 10-year-old from Varanasi who has overcome significant challenges with a smile that inspires hope in everyone who meets him.',
          'Satyam, a child with Down Syndrome, lost his mother when he was just a year old. Since then, his father—a small-time priest earning around ₹6,000 a month—has single-handedly cared for him. Life was already full of struggles, and when Satyam began experiencing severe chest pain, breathlessness, and weakness, their world was shaken to its core.',
          'Doctors at Fortis Hospital, Manesar, diagnosed him with a complex congenital heart defect that had gone unnoticed for years. Without urgent open-heart surgery, doctors feared he would not survive much longer.',
        ],
      },
      {
        heading: 'Overcoming the Odds: The Surgery',
        paragraphs: [
          'The estimated cost of the surgery was ₹2,35,000, an impossible amount for a family surviving on daily offerings from temple work. His father felt helpless, and hope seemed to fade until the case was taken up under Project Little Heartbeats by Raise India Foundation.',
          'Thanks to the compassion of donors, supporters, and the partner hospital, the funds were raised in time. Satyam underwent a high-risk open-heart surgery, during which doctors repaired the structural defects and stabilized his heart.',
          'The days following surgery were critical. He remained in the ICU under close observation, battling fluctuating oxygen levels and weakness. Slowly, his strength returned—one heartbeat, one smile at a time.',
        ],
      },
      {
        heading: 'Regaining Joy, Art & Education',
        paragraphs: [
          'The supplied source describes Satyam as regaining his energy, enjoying drawing and playing with friends, and preparing to return to school.',
          'Satyam’s story is a reminder of why Project Little Heartbeats exists—to give every child, regardless of circumstances, the chance to live a healthier and happier life.',
          'Thank you to every donor and supporter who came forward for Satyam. Together, we made one little heart beat stronger.',
        ],
      },
    ],
  },

  // STORY 14
  {
    id: 'mitanshu',
    slug: 'mitanshu',
    title: "Mitanshu’s New Heartbeat: A Story of Hope, Healing, and a Birthday to Remember",
    childName: 'Mitanshu',
    age: '4 Years',
    location: 'Gwalior, Madhya Pradesh',
    condition: 'Congenital Heart Disease (VSD)',
    hospital: 'Fortis Hospital',
    excerpt: 'Mitanshu became the first heartbeat of Project Little Heartbeats, receiving life-saving surgery for his birthday.',
    image: '/images/stories/mitanshu-1.jpeg',
    remoteImage: 'https://www.raiseindiafoundation.org/assets/img/success-story01.jpeg',
    additionalImages: [
      {
        url: '/images/stories/mitanshu-2.jpeg',
        remoteUrl: 'https://www.raiseindiafoundation.org/assets/img/success-story02.jpeg',
        caption: 'Mitanshu celebrating his discharge and birthday with the foundation team',
      },
    ],
    status: 'Fully Healed & Thriving',
    category: 'Mission Little Heartbeats',
    costBreakdown: [
      { label: 'Amount Raised & Sponsored', value: '₹2,30,000' },
      { label: 'Admission Date', value: 'July 15, 2025 (Mitanshu’s Birthday)' },
      { label: 'Surgery Date', value: 'July 16, 2025 (Successful)' },
      { label: 'Discharge Date', value: 'July 22, 2025' },
      { label: 'Father / Income', value: 'Sole earner / ₹3,000 per month' },
    ],
    sections: [
      {
        paragraphs: [
          'It all began in a hospital during the final days of our late director, Mr. Jaipal Singh Malik. While visiting him, his son, Mr. Sanjeev Kumar Malik, noticed a family nearby—heartbroken and worried. Their three-month-old baby had a hole in his heart. Every breath was a struggle for the tiny infant. The parents stood helplessly by his side, frightened and unsure of how they would afford the treatment their child so desperately needed. The family came from an underserved background, and their silent desperation deeply moved Mr. Malik.',
        ],
      },
      {
        heading: 'That Moment Stayed With Him',
        paragraphs: [
          'To honour his father’s memory, Mr. Sanjeev Malik made a promise. A promise to help children like that baby, to give them a second chance at life. That’s how Project Little Heartbeats was born.',
        ],
      },
      {
        heading: 'Mitanshu, a Four-Year-Old from Gwalior, Became Our First Heartbeat',
        paragraphs: [
          'Born with a congenital heart disease, Mitanshu’s condition was serious. His father, the sole earner in the family, makes just ₹3,000 per month. Affording the cost of surgery needed to save their son’s life was beyond their reach. When we met the family on July 2, 2025, we knew we had just 45 days to raise ₹2,30,000 to make the impossible, possible.',
          'We poured every bit of energy and love into this mission. Our goal was simple yet deeply meaningful—to get Mitanshu admitted on his birthday, July 15. And as we had promised, we did. On July 16, 2025, Mitanshu went into surgery. It was a success.',
          'We stood by his family throughout, reassuring them, supporting them, and celebrating every small victory. We brought gifts for Mitanshu, sat beside his parents in the waiting room, and watched his mother’s eyes well up with hope for the first time in years.',
          'On July 22, Mitanshu was discharged from the hospital. We celebrated his recovery and new life. We cut a cake, sang songs, gave him toys, and watched him play. His parents smiled with relief and gratitude, knowing their son now had a chance at a healthier life.',
          'Mitanshu’s heartbeat is strong. And with it, the heart of Project Little Heartbeats beats stronger too.',
        ],
      },
    ],
  },

  // STORY 15
  {
    id: 'amrita',
    slug: 'amrita',
    title: "Little Heartbeats – Amrita’s Success Story",
    childName: 'Amrita Kumari',
    age: '10 Years',
    location: 'New Delhi',
    condition: 'Patent Ductus Arteriosus (PDA)',
    hospital: 'Fortis Hospital',
    excerpt: 'Ten-year-old Amrita from Delhi recovered from a critical PDA condition, holding tight to her dream of becoming a doctor.',
    image: '/images/stories/amrita.jpg',
    remoteImage: 'https://www.raiseindiafoundation.org/assets/img/amrita-success-story-image.jpg',
    status: 'Successfully Treated & Healthy',
    category: 'Mission Little Heartbeats',
    costBreakdown: [
      { label: 'Procedure Performed', value: 'PDA Device Closure' },
      { label: 'Procedure Cost', value: '₹1,80,000' },
      { label: 'Surgery Date', value: 'August 27, 2025' },
      { label: 'Discharge Date', value: 'August 29, 2025' },
      { label: 'Mother / Profession', value: 'Choti Kumari (Full-time maid) / ₹8,000 per month' },
    ],
    sections: [
      {
        paragraphs: [
          'Amrita’s journey with Project Little Heartbeats is a story of courage, a mother’s unwavering love, and the kindness of strangers who became her angels.',
          'Amrita Kumari, a 10-year-old girl from Delhi, was born with a congenital heart condition called Patent Ductus Arteriosus (PDA). This illness was weakening her every day—making it hard for her to breathe, play, and live like other children. Without timely treatment, it could have led to heart failure.',
          'Her mother, Choti Kumari, had been raising Amrita single-handedly ever since her father abandoned them when she was just a baby. Working as a full-time maid and earning only ₹8,000 per month, she managed to keep Amrita in school and provide for her needs. But the life-saving procedure Amrita needed, a PDA Device Closure, came at a cost of ₹1,80,000. For her mother, this amount was unimaginable.',
        ],
      },
      {
        heading: 'Mobilizing Hope for a Future Doctor',
        paragraphs: [
          'Amrita’s family reached out to Fortis Hospital, where doctors diagnosed her condition and referred her case to Raise India Foundation. Through Project Little Heartbeats, the Foundation took up Amrita’s case to help ensure that her dream of becoming a doctor one day would not be cut short. With the support of donors, the required funds were raised in time.',
          'On August 27, 2025, Amrita underwent her heart procedure. It was successful. On August 29, 2025, she was discharged from the hospital, with a new chance at life.',
        ],
      },
      {
        heading: 'A Celebration of Courage',
        paragraphs: [
          'We celebrated her new beginning with love and laughter. We cut a cake, celebrated her new life, and filled her hands with gifts. Her smile lit up the room as she promised us she would study hard to achieve her dream of becoming a doctor, so she could one day save lives just like hers had been saved.',
          'Amrita’s heartbeat is stronger now, and so is her hope. Her story is proof that when compassion meets action, meaningful change is possible. With every child like Amrita, the heart of Project Little Heartbeats beats louder, stronger, and braver.',
        ],
      },
    ],
  },
];
