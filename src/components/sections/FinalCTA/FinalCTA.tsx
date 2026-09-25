import React from 'react';
import Link from 'next/link';
import styles from './FinalCTA.module.css';

export const FinalCTA: React.FC = () => {
  return (
    <section className={styles.ctaSection} aria-label="Support Our Mission">
      {/* Top Subtle Pink/Violet Accent Border */}
      <div className={styles.topAccent} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.splitGrid}>
          {/* Left Column: Messaging */}
          <div className={styles.leftColumn}>
            <div className={styles.eyebrowRow}>
              <span className={styles.pinkDot} aria-hidden="true" />
              <span className={styles.eyebrow}>MAKE A LASTING DIFFERENCE</span>
            </div>
            <h2 className={styles.heading}>
              Be part of meaningful change.
            </h2>
            <p className={styles.subtext}>
              Join hands with Raise India Foundation today. Together, we can fund life-saving pediatric surgeries, educate first-generation learners, and bring dignity to underserved communities across India.
            </p>
          </div>

          {/* Right Column: Actions */}
          <div className={styles.rightColumn}>
            <div className={styles.actionCard}>
              <Link href="/donate" className={styles.primaryBtn}>
                <span>Donate Now</span>
                <span className={styles.arrow} aria-hidden="true">→</span>
              </Link>
              <Link href="/our-work" className={styles.secondaryBtn}>
                <span>Explore Our Work</span>
                <span className={styles.arrow} aria-hidden="true">→</span>
              </Link>
              <span className={styles.statutoryNote}>
                Registered Public Charitable Trust • 80G Tax Exemption Available
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
