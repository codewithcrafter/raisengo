import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container/Container';
import { FinalCTA } from '@/components/sections/FinalCTA/FinalCTA';
import styles from './page.module.css';

export const metadata = {
  title: 'Operational Context & Landscape | Raise India Foundation',
  description: 'Understanding the grassroots socio-economic landscape, educational gaps, and pediatric healthcare emergencies addressed by Raise India Foundation.',
};

const contexts = [
  {
    eyebrow: 'EDUCATION & THE DIGITAL DIVIDE',
    title: 'First-Generation Learners in Urban Informal Settlements',
    desc: 'Across metropolitan slums in Delhi and peri-urban clusters in Agra, thousands of first-generation learners face severe learning deficits, high dropout rates, and an absolute absence of computers or digital access. Without foundational literacy and numeracy support, poverty repeats across generations.',
    intervention: 'Shikshalaya learning centers provide free remedial coaching and nutritious snacks, while Techshaala bridges the technology divide with computer labs and introductory coding classes.',
  },
  {
    eyebrow: 'PEDIATRIC CARDIOLOGY',
    title: 'The Catastrophic Cost of Congenital Heart Defects (CHD)',
    desc: 'Nearly 200,000 infants are born with Congenital Heart Defects each year in India, and 1 in 5 requires surgical intervention during their first year of life to survive. For families earning daily wages, specialized pediatric open-heart surgeries costing ₹2,50,000 or more are impossible to afford.',
    intervention: 'Mission Little Heartbeats collaborates with Fortis Hospital to fully sponsor pediatric cardiac surgeries, diagnostic evaluations, and post-operative medications for indigent children.',
  },
  {
    eyebrow: 'SANITAITON & GENDER DIGNITY',
    title: 'Menstrual Health Realities in Informal Construction Labor',
    desc: 'Female daily-wage laborers working at construction sites and living in temporary settlements face immense cultural stigma, lack of clean sanitation facilities, and inability to purchase sanitary pads, resulting in chronic infections and loss of working days.',
    intervention: 'Chuppi Todo – Sharam Nahi Samman distributes monthly Dignity Kits containing sanitary pads and hygiene essentials, accompanied by gynecological counseling sessions to eliminate menstrual stigma.',
  },
  {
    eyebrow: 'CLIMATE & DISASTER VULNERABILITY',
    title: 'Extreme Weather Realities of North India',
    desc: 'Northern India experiences extreme climatic swings — summer temperatures surging to 49°C, dense sub-zero fog in winter, and rapid monsoon flooding along the Yamuna riverbanks that washes away makeshift dwellings.',
    intervention: 'Project Tapan provides roadside hydration and protective footwear; Kambal Udhao distributes heavy blankets directly to street sleepers late at night; and our Disaster Relief network delivers food rations and tarpaulins to displaced flood victims.',
  },
];

export default function ContextPage() {
  return (
    <main className={styles.main}>
      {/* Hero */}
      <section className={styles.hero}>
        <Container>
          <span className={styles.eyebrow}>ORGANIZATIONAL BACKDROP</span>
          <h1 className={styles.title}>
            Context &amp; <span className={styles.highlightText}>Grassroots Rationale</span>
          </h1>
          <p className={styles.heroDesc}>
            Raise India Foundation was established on 22nd December 2014 by retired RAW Class 1 Gazetted Officer Mr. Jai Pal Singh Malik and financial services professional Ms. Shipra Chauhan to address urgent, systemic gaps in education, child cardiology, and community survival across North India.
          </p>
        </Container>
      </section>

      {/* Context Grid */}
      <section className={styles.section}>
        <Container>
          <div className={styles.contextGrid}>
            {contexts.map((ctx, idx) => (
              <div key={idx} className={styles.contextCard}>
                <span className={styles.contextCardEyebrow}>{ctx.eyebrow}</span>
                <h2 className={styles.cardTitle}>{ctx.title}</h2>
                <p className={styles.cardDesc}>{ctx.desc}</p>
                <div className={styles.interventionBox}>
                  <strong>How We Intervene:</strong> {ctx.intervention}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <Link
              href="/our-work"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 32px',
                background: 'linear-gradient(135deg, #E0679D 0%, #814CBA 100%)',
                color: '#FFFFFF',
                borderRadius: '999px',
                fontWeight: 700,
                fontSize: '15px',
                textDecoration: 'none',
                boxShadow: '0 8px 24px rgba(224, 103, 157, 0.35)',
              }}
            >
              Explore Our 9 Flagship Programs →
            </Link>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </main>
  );
}
