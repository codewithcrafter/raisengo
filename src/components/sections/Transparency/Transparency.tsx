import React from 'react';
import { Container } from '@/components/ui/Container/Container';
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading';
import styles from './Transparency.module.css';

const reports = [
  { year: '2022-2023', name: 'Annual Impact Report', size: '2.4 MB PDF' },
  { year: '2022-2023', name: 'Audited Financials', size: '1.1 MB PDF' },
  { year: '2021-2022', name: 'Annual Impact Report', size: '3.0 MB PDF' },
  { year: '2021-2022', name: 'Audited Financials', size: '1.2 MB PDF' },
];

export const Transparency: React.FC = () => {
  return (
    <section className={styles.transparency}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.content}>
            <SectionHeading 
              eyebrow="Accountability"
              title="Transparency is our Foundation"
              align="left"
            />
            <p className={styles.description}>
              We are committed to complete transparency in our operations and financials. Your trust is our most valuable asset, and we ensure that every contribution is utilized effectively for maximum impact.
            </p>
            
            <div className={styles.certifications}>
              <div className={styles.certCard}>
                <span className={styles.certIcon}>📜</span>
                <span className={styles.certName}>Registered Public Trust</span>
              </div>
              <div className={styles.certCard}>
                <span className={styles.certIcon}>🔒</span>
                <span className={styles.certName}>80G 50% Tax Exemption</span>
              </div>
              <div className={styles.certCard}>
                <span className={styles.certIcon}>🏛️</span>
                <span className={styles.certName}>Section 12A &amp; CSR-1</span>
              </div>
            </div>
          </div>
          
          <div className={styles.reportsSection}>
            <h3 className={styles.reportsTitle}>Latest Reports</h3>
            <div className={styles.reportsList}>
              {reports.map((report, idx) => (
                <a key={idx} href="#download" className={styles.reportItem}>
                  <div className={styles.reportIcon}>📄</div>
                  <div className={styles.reportInfo}>
                    <span className={styles.reportName}>{report.name} ({report.year})</span>
                    <span className={styles.reportSize}>{report.size}</span>
                  </div>
                  <div className={styles.downloadIcon}>&darr;</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
