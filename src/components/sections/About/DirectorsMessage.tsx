'use client';

import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container/Container';
import { useScrollReveal } from '@/lib/useScrollReveal';
import styles from './DirectorsMessage.module.css';

export const DirectorsMessage: React.FC = () => {
  const [sectionRef, isVisible] = useScrollReveal<HTMLElement>({ threshold: 0.15, triggerOnce: true });

  return (
    <section 
      id="directors-message" 
      ref={sectionRef}
      className={`${styles.section} ${isVisible ? styles.revealed : ''}`}
    >
      <Container className={styles.container}>
        <div className={styles.card}>
          {/* Subtle Background Glow Accent */}
          <div className={styles.bgGlow} aria-hidden="true" />
          
          <div className={styles.grid}>
            {/* LEFT: DIRECTOR'S PORTRAIT */}
            <div className={styles.imageColumn}>
              <div className={styles.imageFrameBacking} aria-hidden="true" />
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/hero/slide-2.jpg"
                  alt="Raise India Foundation Director engaging with community members"
                  fill
                  sizes="(max-width: 960px) 100vw, 40vw"
                  style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
                  className={styles.image}
                />
                <div className={styles.imageOverlay} aria-hidden="true" />
                <div className={styles.portraitBadge}>
                  <span>LEADERSHIP &amp; VISION</span>
                </div>
              </div>
            </div>

            {/* RIGHT: EDITORIAL MESSAGE CONTENT */}
            <div className={styles.contentColumn}>
              {/* Decorative Quote Mark Motif */}
              <div className={styles.quoteMotif} aria-hidden="true">
                &ldquo;
              </div>

              <div className={styles.eyebrowWrapper}>
                <span className={styles.accentDot} aria-hidden="true" />
                <span className={styles.eyebrow}>DIRECTOR’S MESSAGE</span>
              </div>

              <h2 className={styles.title}>
                Message from <span className={styles.highlightText}>Our Founders &amp; Directors</span>
              </h2>

              <div className={styles.messageBody}>
                <p className={styles.paragraph}>
                  Welcome to Raise India Foundation, a non-governmental organization established on <strong>22nd December 2014</strong> by <strong>Mr. Jai Pal Singh Malik</strong> and <strong>Ms. Shipra Chauhan</strong>.
                </p>
                <p className={styles.paragraph}>
                  <strong>Mr. Jai Pal Singh Malik</strong> served the Government of India as a Class 1 Gazetted Officer in the Research &amp; Analysis Wing (RAW), and is an experienced social worker for the past 19 years having worked with different sections of the underprivileged. A true leader for whom age is just a number, at 78 his administrative leadership has steered our programs to success across India.
                </p>
                <p className={styles.paragraph}>
                  <strong>Ms. Shipra Chauhan</strong> is a management professional with 6 years of financial services experience and an ardent social activist. Her vision for the development of children and women drives our educational initiatives like Shikshalaya and environmental programs, turning compassion into structured, sustainable change.
                </p>
              </div>

              <div className={styles.signatureBlock}>
                <div className={styles.signatureLine} aria-hidden="true" />
                <div className={styles.directorMeta}>
                  <h3 className={styles.directorName}>Mr. Jai Pal Singh Malik &amp; Ms. Shipra Chauhan</h3>
                  <p className={styles.directorTitle}>Founders &amp; Directors, Raise India Foundation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
