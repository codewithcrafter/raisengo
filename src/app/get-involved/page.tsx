import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container/Container';
import styles from './page.module.css';

export const metadata = {
  title: 'Get Involved | Raise India Foundation',
  description: 'Donate, volunteer, or partner with us to create sustainable change.',
};

export default function GetInvolvedPage() {
  return (
    <main className={styles.main}>
      <section className={`${styles.hero} full-bleed`}>
        <Container>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>THREE WAYS TO HELP</span>
            <h1 className="statement-text">
              Your time, skills,<br />
              voice, or resources<br />
              can <span className={styles.highlightText}>create change.</span>
            </h1>
          </div>
        </Container>
      </section>

      <section className={styles.pathways}>
        <Container>
          <div className={styles.grid}>
            <div className={styles.pathwayCard}>
              <div className={`${styles.imageWrapper} ${styles.imgPartner}`}></div>
              <div className={styles.content}>
                <span className={styles.cardLabel}>Partner</span>
                <h2>Build Together</h2>
                <p>We collaborate with corporations, foundations, and institutions. Let's work together to create scalable, sustainable impact.</p>
                <Link href="/partners" className={styles.actionBtn}>Become a Partner</Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
