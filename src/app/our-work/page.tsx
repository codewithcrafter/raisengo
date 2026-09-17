import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container/Container';
import { FinalCTA } from '@/components/sections/FinalCTA/FinalCTA';
import { initiatives } from '@/lib/content-data';
import styles from './page.module.css';

export const metadata = {
  title: 'Our Work | Raise India Foundation',
  description: 'Explore the 9 core humanitarian initiatives driven by Raise India Foundation across education, healthcare, women empowerment, sanitation, and disaster relief.',
};

export default function OurWorkPage() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={`${styles.hero} full-bleed`}>
        <div className={styles.blobHero}></div>
        <Container>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>OUR 9 CORE INITIATIVES</span>
            <h1 className="statement-text">
              Transforming <span className={styles.highlightText}>Lives</span>
            </h1>
            <p className={styles.heroDescription}>
              For over 11 years, Raise India Foundation has mobilized grassroots interventions across Delhi, Uttar Pradesh, Bihar, and Madhya Pradesh to create lasting self-reliance for vulnerable children and marginalized families.
            </p>
          </div>
        </Container>
      </section>

      {/* Program Directory */}
      <section className={styles.directory}>
        <Container>
          <div className={styles.programList}>
            {initiatives.map((program, idx) => (
              <div
                key={program.id}
                className={`${styles.programPanel} ${idx % 2 !== 0 ? styles.programPanelReverse : ''}`}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.content}>
                  <span className={styles.categoryLabel}>{program.category}</span>
                  <h2 className={styles.title}>{program.title}</h2>
                  <p className={styles.description}>{program.shortDescription}</p>
                  <div className={styles.impactBadge}>
                    <strong>Verified Impact:</strong> {program.impact}
                  </div>
                  {program.partner && (
                    <p style={{ fontSize: '13px', fontWeight: 600, color: '#814CBA', marginBottom: '16px' }}>
                      {program.partner}
                    </p>
                  )}
                  <Link href={`/our-work/${program.slug}`} className={styles.exploreLink}>
                    Explore Program <span className={styles.arrow}>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </main>
  );
}
