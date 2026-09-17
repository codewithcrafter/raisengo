'use client';

import React from 'react';
import { Container } from '@/components/ui/Container/Container';
import { useScrollReveal } from '@/lib/useScrollReveal';
import styles from './LegalStatutory.module.css';

const statutoryItems = [
  {
    title: 'Registered Charitable Trust',
    status: 'Verified & Active',
    description: 'Duly registered as a Public Charitable Trust under the Indian Trust Act on 22nd December 2014.',
    icon: '📜',
    ctaText: 'View Trust Certificate',
    href: '/images/migrated/legal/trust-certificate.webp',
  },
  {
    title: '80G Tax Exemption',
    status: 'Section 80G Certified',
    description: 'Donations made to Raise India Foundation are eligible for 50% tax deduction under Section 80G of the Income Tax Act.',
    icon: '🔒',
    ctaText: 'View 80G Certificate',
    href: '/images/migrated/legal/80g-certificate.webp',
  },
  {
    title: '12A Registration',
    status: 'Income Tax Approved',
    description: 'Registered under Section 12A of the Income Tax Act granting non-profit tax-exempt status.',
    icon: '🏛️',
    ctaText: 'View 12A Certificate',
    href: '/images/migrated/legal/12a-certificate.webp',
  },
  {
    title: 'PAN Card Registration',
    status: 'Income Tax Department',
    description: 'Official verified Permanent Account Number registered with the Government of India.',
    icon: '💳',
    ctaText: 'View PAN Card',
    href: '/images/migrated/legal/pancard.webp',
  },
  {
    title: 'NGO Darpan Registered',
    status: 'NITI Aayog Partner',
    description: 'Registered on the Government of India NITI Aayog NGO Darpan portal for government transparency.',
    icon: '✅',
    ctaText: 'View Darpan Compliance',
    href: '/about#legal-statutory',
  },
  {
    title: 'CSR Registration (CSR-1)',
    status: 'Ministry of Corporate Affairs',
    description: 'Eligible for Corporate Social Responsibility (CSR) partnerships under Section 135 & Schedule VII.',
    icon: '🤝',
    ctaText: 'View CSR Eligibility',
    href: '/csr',
  },
];

const annualReports = [
  { year: '2022–2023', title: 'Annual Impact & Governance Report', size: '2.4 MB PDF' },
  { year: '2022–2023', title: 'Audited Financial Statements', size: '1.1 MB PDF' },
  { year: '2021–2022', title: 'Annual Impact & Governance Report', size: '3.0 MB PDF' },
  { year: '2021–2022', title: 'Audited Financial Statements', size: '1.2 MB PDF' },
];

export const LegalStatutory: React.FC = () => {
  const [sectionRef, isVisible] = useScrollReveal<HTMLElement>({ threshold: 0.15, triggerOnce: true });

  return (
    <section 
      id="legal-statutory" 
      ref={sectionRef}
      className={`${styles.section} ${isVisible ? styles.revealed : ''}`}
    >
      <Container className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.eyebrowWrapper}>
            <span className={styles.accentLine} aria-hidden="true" />
            <span className={styles.eyebrow}>GOVERNANCE &amp; ACCOUNTABILITY</span>
          </div>
          <h2 className={styles.title}>
            Legal &amp; Statutory <span className={styles.highlightText}>Compliance</span>
          </h2>
          <p className={styles.subtitle}>
            Operating with complete transparency, statutory compliance, and rigorous financial governance.
          </p>
        </div>

        {/* Statutory Credentials Grid */}
        <div className={styles.grid}>
          {statutoryItems.map((item, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.cardIcon}>{item.icon}</span>
                <span className={styles.statusBadge}>{item.status}</span>
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
              <a href={item.href} className={styles.cardCta}>
                <span>{item.ctaText}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Audited Reports Download Block */}
        <div className={styles.reportsBlock}>
          <div className={styles.reportsHeader}>
            <div className={styles.reportsHeaderLeft}>
              <span className={styles.reportsBadge}>FINANCIAL TRANSPARENCY</span>
              <h3 className={styles.reportsTitle}>Audited Reports &amp; Disclosures</h3>
            </div>
            <p className={styles.reportsSubtitle}>
              Download our verified annual impact reports and independent financial audit statements.
            </p>
          </div>

          <div className={styles.reportsGrid}>
            {annualReports.map((report, idx) => (
              <a key={idx} href="#download-report" className={styles.reportCard}>
                <div className={styles.reportFileIcon}>📄</div>
                <div className={styles.reportMeta}>
                  <span className={styles.reportYear}>{report.year}</span>
                  <h4 className={styles.reportName}>{report.title}</h4>
                  <span className={styles.reportSize}>{report.size}</span>
                </div>
                <div className={styles.downloadIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
