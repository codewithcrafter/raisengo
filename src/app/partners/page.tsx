import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container/Container';
import { FinalCTA } from '@/components/sections/FinalCTA/FinalCTA';
import styles from './page.module.css';

export const metadata = {
  title: 'Our Partners & Collaborators | Raise India Foundation',
  description: 'Corporate partners, hospital networks, and institutional allies supporting Raise India Foundation.',
};

const partnerList = [
  {
    name: 'Konverge Technologies Pvt. Ltd.',
    category: 'DIGITAL EMPOWERMENT',
    description: 'Premier IT solutions company that funded and launched Techshaala, an advanced computer learning lab delivering digital literacy and programming fundamentals to slum youth.',
    impact: 'Dedicated Desktop Lab & Daily Computer Literacy Batches',
  },
  {
    name: 'Fortis Hospital (Manesar & Gurugram)',
    category: 'HEALTHCARE & CARDIAC SURGERY',
    description: 'Premier tertiary care hospital providing pediatric cardiac surgical infrastructure, specialized ICUs, and leading pediatric cardiac surgeons for Mission Little Heartbeats.',
    impact: '14+ Open-Heart Surgeries for Indigent Children',
  },
  {
    name: 'Ahluwalia Contracts (India) Ltd.',
    category: 'CONSTRUCTION WORKER WELFARE',
    description: 'Major construction & infrastructure conglomerate partnering with Raise India Foundation to host regular health, vision, and menstrual hygiene camps for frontline laborers.',
    impact: 'Recipient of National Safety Day 2024 Social Welfare Award',
  },
  {
    name: 'Centre for Sight & NDCFS Foundation',
    category: 'EYE & VISION HEALTHCARE',
    description: 'Ophthalmic healthcare partner conducting joint community vision camps and providing free prescription eyeglasses for low-income citizens across NCR.',
    impact: 'World NGO Day Certificate of Appreciation Collaborator',
  },
];

export default function PartnersPage() {
  return (
    <main className={styles.main}>
      {/* Hero */}
      <section className={styles.hero}>
        <Container>
          <span className={styles.eyebrow}>STRATEGIC ALLIANCES</span>
          <h1 className={styles.title}>
            Partners in <span className={styles.highlightText}>Compassion &amp; Change</span>
          </h1>
          <p className={styles.heroDesc}>
            Sustainable social change requires collaborative conviction. We work alongside leading hospitals, technology companies, infrastructure leaders, and public institutions to transform underserved communities.
          </p>
        </Container>
      </section>

      {/* Partners Grid */}
      <section className={styles.section}>
        <Container>
          <div className={styles.grid}>
            {partnerList.map((partner) => (
              <div key={partner.name} className={styles.partnerCard}>
                <span className={styles.tag}>{partner.category}</span>
                <h2 className={styles.name}>{partner.name}</h2>
                <p className={styles.desc}>{partner.description}</p>
                <div className={styles.impact}>
                  <strong>Documented Collaboration:</strong> {partner.impact}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.ctaCard}>
            <h3>Partner with Raise India Foundation</h3>
            <p>
              Join our network of institutional and corporate allies to sponsor life-saving pediatric surgeries, educational infrastructure, or employee volunteering initiatives.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/csr" className={styles.partnerBtn}>
                Explore CSR Programs →
              </Link>
              <Link
                href="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(255, 255, 255, 0.15)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  color: '#FFFFFF',
                  padding: '14px 28px',
                  borderRadius: '999px',
                  fontWeight: 700,
                  fontSize: '15px',
                  textDecoration: 'none',
                }}
              >
                Contact CSR Desk
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </main>
  );
}
