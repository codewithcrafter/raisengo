import React from 'react';
import { Container } from '@/components/ui/Container/Container';
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading';
import { Stats } from '@/components/sections/Stats/Stats';
import { FinalCTA } from '@/components/sections/FinalCTA/FinalCTA';
import styles from './page.module.css';

export const metadata = {
  title: 'Our Impact | Raise India Foundation',
  description: 'Discover the tangible impact Raise India Foundation has made across communities in India.',
};

export default function ImpactPage() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={`${styles.hero} full-bleed`}>
        <div className={styles.blobDecorBg}></div>
        <Container>
          <div className="grid-asymmetrical">
            <div className={styles.heroContent}>
              <span className={styles.eyebrow}>MAKING A DIFFERENCE</span>
              <h1 className="statement-text">
                Every action<br />
                creates an<br />
                <span className={styles.highlightText}>impact.</span>
              </h1>
              <p className={styles.heroDescription}>
                We believe in measurable, sustainable change. Here is a look at the lives we've touched and the communities we've strengthened over the years.
              </p>
            </div>
            <div className={styles.heroImageWrapper}>
              <div className={styles.blobDecor}></div>
              <div className={styles.imagePlaceholder}></div>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Detailed Impact Breakdown */}
      <section className={styles.breakdown}>
        <Container>
          <SectionHeading
            eyebrow="By The Numbers"
            title="Impact Across Programs"
            description="Our initiatives span multiple sectors, each designed to address specific community needs."
            align="center"
          />

          <div className={styles.grid}>
            <div className={`${styles.impactCard} ${styles.cardPurple}`}>
              <div className={styles.largeNumber}>12,000+</div>
              <h3 className={styles.cardTitle}>Children Educated</h3>
              <p className={styles.cardDesc}>Through our after-school programs and scholarship funds across 5 states.</p>
            </div>

            <div className={`${styles.impactCard} ${styles.cardMagenta}`}>
              <div className={styles.largeNumber}>50+</div>
              <h3 className={styles.cardTitle}>Medical Camps</h3>
              <p className={styles.cardDesc}>Conducted annually, providing free checkups and medicines to rural areas.</p>
            </div>

            <div className={`${styles.impactCard} ${styles.cardLavender}`}>
              <div className={styles.largeNumber}>5,000+</div>
              <h3 className={styles.cardTitle}>Women Empowered</h3>
              <p className={styles.cardDesc}>Through vocational training, micro-finance support, and entrepreneurship programs.</p>
            </div>

            <div className={`${styles.impactCard} ${styles.cardPink}`}>
              <div className={styles.largeNumber}>25+</div>
              <h3 className={styles.cardTitle}>Villages Adopted</h3>
              <p className={styles.cardDesc}>Comprehensive rural development focusing on sanitation, water, and infrastructure.</p>
            </div>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </main>
  );
}
