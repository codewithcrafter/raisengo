import React from 'react';
import { Container } from '@/components/ui/Container/Container';
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading';
import { Transparency } from '@/components/sections/Transparency/Transparency';
import { FinalCTA } from '@/components/sections/FinalCTA/FinalCTA';
import styles from './page.module.css';

export const metadata = {
  title: 'Transparency | Raise India Foundation',
  description: 'View our annual reports, financial audits, and certifications.',
};

export default function TransparencyPage() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={`${styles.hero} full-bleed`}>
        <Container>
          <h1 className="statement-text">Trust is built<br />on transparency.</h1>
          <p className={styles.heroDescription}>
            We are committed to complete transparency in our operations, impact, and financials. Explore our audited reports and policies.
          </p>
        </Container>
      </section>

      {/* Reuse the existing Transparency section component */}
      <Transparency />

      {/* Additional Documents Section */}
      <section className={styles.docs}>
        <Container>
          <SectionHeading 
            eyebrow="Policies"
            title="Organizational Policies"
            align="left"
          />
          <div className={styles.docGrid}>
            <div className={styles.docCard}>
              <h4>Child Protection Policy</h4>
              <p>Guidelines ensuring the safety of all children in our care.</p>
              <a href="#download" className={styles.downloadLink}>Download PDF &rarr;</a>
            </div>
            <div className={styles.docCard}>
              <h4>Anti-Sexual Harassment Policy</h4>
              <p>Our commitment to a safe workplace (POSH).</p>
              <a href="#download" className={styles.downloadLink}>Download PDF &rarr;</a>
            </div>
            <div className={styles.docCard}>
              <h4>Privacy Policy</h4>
              <p>How we handle donor data and website tracking.</p>
              <a href="#download" className={styles.downloadLink}>View Policy &rarr;</a>
            </div>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </main>
  );
}
