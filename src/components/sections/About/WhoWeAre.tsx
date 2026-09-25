"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container/Container';
import { useScrollReveal } from '@/lib/useScrollReveal';
import styles from './WhoWeAre.module.css';

export const WhoWeAre: React.FC = () => {
  const [sectionRef, isVisible] = useScrollReveal<HTMLElement>({ threshold: 0.15, triggerOnce: true });

  return (
    <section 
      id="who-we-are" 
      ref={sectionRef}
      className={`${styles.section} ${isVisible ? styles.revealed : ''}`}
    >
      {/* Background Subtle Ambient Tint & Line */}
      <div className={styles.bgAmbient} aria-hidden="true" />

      <Container className={styles.container}>
        <div className={styles.grid}>
          
          {/* LEFT: EDITORIAL COMMUNITY IMAGE COLUMN (~52%) */}
          <div className={styles.imageColumn}>
            <div className={styles.imageFrame}>
              {/* Subtle Offset Border Backing */}
              <div className={styles.imageBacking} aria-hidden="true" />

              {/* Main Image Container */}
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/about-community.jpg"
                  alt="Volunteers and children learning together in a community center"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 52vw, 620px"
                  style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
                  className={styles.image}
                  priority={false}
                />

                {/* Subtle vignette gradient overlay at bottom for badge contrast */}
                <div className={styles.imageOverlay} aria-hidden="true" />

                {/* Floating Metadata Label */}
                <div className={styles.metadataBadge}>
                  <span className={styles.badgeDot} aria-hidden="true" />
                  <span className={styles.badgeText}>COMMUNITY • EDUCATION • EMPOWERMENT</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: EDITORIAL CONTENT COLUMN (~48%) */}
          <div className={styles.contentColumn}>
            
            {/* Editorial Eyebrow with Index Detail */}
            <div className={styles.eyebrowWrapper}>
              <span className={styles.eyebrowIndex}>01</span>
              <span className={styles.eyebrowDivider}>/</span>
              <span className={styles.eyebrow}>WHO WE ARE</span>
            </div>

            {/* Main Section Heading */}
            <h2 className={styles.heading}>
              Building opportunity where it{' '}
              <span className={styles.highlightWrapper}>
                <span className={styles.highlightText}>matters most.</span>
                <span className={styles.highlightUnderline} aria-hidden="true" />
              </span>
            </h2>

            {/* Paragraph 1 */}
            <p className={`${styles.paragraph} ${styles.p1}`}>
              Raise India Foundation stands as a pillar of support, dedicated to uplifting communities and driving positive change throughout India. Established on 22nd December 2014, we are a nationally registered non-profit organization addressing pressing social challenges through education, healthcare, livelihoods, and environmental conservation.
            </p>

            {/* Paragraph 2 */}
            <p className={`${styles.paragraph} ${styles.p2}`}>
              For the past 11+ years, our commitment to integrity and collaboration has guided every initiative. As confirmed in our statutory audited reports, we have successfully uplifted over 1.83 million lives through 7 projects running across Bihar, Uttar Pradesh, Madhya Pradesh, and Delhi.
            </p>

            {/* CTA Action - Read More Link */}
            <div className={styles.actions}>
              <Link href="/about" className={styles.readMoreLink} aria-label="Read more about Raise India Foundation">
                <span>Read More</span>
                <span className={styles.arrowIcon} aria-hidden="true">→</span>
              </Link>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
};
export default WhoWeAre;
