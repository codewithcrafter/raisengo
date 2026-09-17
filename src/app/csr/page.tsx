import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container/Container';
import { FinalCTA } from '@/components/sections/FinalCTA/FinalCTA';
import styles from './page.module.css';

export const metadata = {
  title: 'CSR Partnerships | Raise India Foundation',
  description: 'Corporate Social Responsibility partnerships under Section 135 and Schedule VII of the Companies Act with Raise India Foundation.',
};

const corporatePartners = [
  {
    name: 'Konverge Technologies Pvt. Ltd.',
    category: 'DIGITAL EDUCATION PARTNER',
    description: 'Spearheaded and fully sponsored the Techshaala Digital Learning Lab, equipping underprivileged students with modern desktop computers, internet connectivity, and digital skills training.',
    impact: 'Daily Digital Literacy Classes for 100+ Enrolled Youth',
  },
  {
    name: 'Fortis Hospital (Manesar & Gurugram)',
    category: 'HEALTHCARE & CARDIAC PARTNER',
    description: 'Collaborative medical partner executing Mission Little Heartbeats. Top pediatric cardiac surgeons perform corrective open-heart surgeries for children with Congenital Heart Defects (CHD).',
    impact: '14+ Pediatric Open-Heart Surgeries Successfully Completed',
  },
  {
    name: 'Ahluwalia Contracts (India) Ltd.',
    category: 'INFRASTRUCTURE & WORKER WELFARE',
    description: 'Partnered on frontline health awareness camps, construction worker health screenings, and the Chuppi Todo menstrual dignity distribution for female construction laborers.',
    impact: 'National Safety Day 2024 Social Welfare Award Winner',
  },
];

const scheduleViiPillars = [
  {
    num: '01',
    title: 'Promoting Education & Digital Literacy',
    desc: 'Setting up non-formal Shikshalaya schooling and Techshaala digital labs for first-generation learners and slum youth.',
  },
  {
    num: '02',
    title: 'Preventive Healthcare & Sanitation',
    desc: 'Sponsoring pediatric cardiac surgeries under Mission Little Heartbeats, rural eye camps, and Chuppi Todo sanitary hygiene kits.',
  },
  {
    num: '03',
    title: 'Disaster Relief & Climate Protection',
    desc: 'Rapid food/tarpaulin deployment during Yamuna floods, urban tree plantation drives, and Project Tapan heatwave survival points.',
  },
];

export default function CsrPage() {
  return (
    <main className={styles.main}>
      {/* Hero */}
      <section className={styles.hero}>
        <Container>
          <span className={styles.eyebrow}>CORPORATE SOCIAL RESPONSIBILITY</span>
          <h1 className={styles.title}>
            Strategic CSR &amp; <span className={styles.highlightText}>Corporate Partnerships</span>
          </h1>
          <p className={styles.heroDesc}>
            Raise India Foundation is an eligible implementation partner under Section 135 of the Companies Act 2013, holding valid 12A, 80G (50% Tax Exemption), and Ministry of Corporate Affairs CSR-1 registration.
          </p>
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          {/* Overview Grid */}
          <div className={styles.overviewGrid}>
            <div className={styles.overviewContent}>
              <h2>Schedule VII Aligned Social Interventions</h2>
              <p>
                India made Corporate Social Responsibility mandatory in April 2014 under Section 135 of the Companies Act. Over the past decade, Raise India Foundation has collaborated with corporate leaders to translate CSR mandates into verifiable, transparent, and auditable ground impact.
              </p>
              <p>
                Whether funding digital classrooms through computer lab infrastructure, sponsoring pediatric heart surgeries for indigent children, or distributing Dignity Kits to migrant construction laborers, our projects comply fully with Ministry of Corporate Affairs reporting norms and deliver comprehensive impact documentation.
              </p>
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/migrated/partners/csr-partnership-2.webp"
                alt="Corporate CSR partnership ceremony"
                fill
                sizes="(max-width: 960px) 100vw, 50vw"
                className={styles.partnerImage}
              />
            </div>
          </div>

          {/* Schedule VII Pillars */}
          <div className={styles.scheduleBox}>
            <div className={styles.scheduleHeader}>
              <h3>Key Schedule VII Operational Domains</h3>
              <p style={{ color: '#564861', margin: 0 }}>
                Every program executed with corporate partners maps directly to specified Schedule VII CSR clauses.
              </p>
            </div>
            <div className={styles.scheduleGrid}>
              {scheduleViiPillars.map((pillar) => (
                <div key={pillar.num} className={styles.scheduleCard}>
                  <span className={styles.scheduleNumber}>PILLAR {pillar.num}</span>
                  <h4 className={styles.scheduleTitle}>{pillar.title}</h4>
                  <p className={styles.scheduleDesc}>{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Corporate Spotlights */}
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '0.12em', color: '#814CBA', textTransform: 'uppercase' }}>
              PROVEN TRACK RECORD
            </span>
            <h2 style={{ fontFamily: 'var(--font-display, inherit)', fontSize: '32px', fontWeight: 800, color: '#2D1145', marginTop: '8px' }}>
              Corporate Partnerships in Action
            </h2>
          </div>

          <div className={styles.partnersGrid}>
            {corporatePartners.map((partner) => (
              <div key={partner.name} className={styles.partnerCard}>
                <span className={styles.partnerTag}>{partner.category}</span>
                <h3 className={styles.partnerName}>{partner.name}</h3>
                <p className={styles.partnerDesc}>{partner.description}</p>
                <div className={styles.partnerImpact}>
                  <strong>Outcome:</strong> {partner.impact}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Strip */}
          <div className={styles.contactStrip}>
            <h3>Initiate a CSR Partnership</h3>
            <p>
              Connect with our CSR leadership team to discuss customized program proposals, project budgets, and Schedule VII compliance documentation.
            </p>
            <div className={styles.contactButtons}>
              <a href="mailto:care@raiseindiafoundation.org" className={styles.emailBtn}>
                <span>✉ Email CSR Office: care@raiseindiafoundation.org</span>
              </a>
              <a href="tel:+9141254474" className={styles.phoneBtn}>
                <span>📞 Call +91-11-41254474</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </main>
  );
}
