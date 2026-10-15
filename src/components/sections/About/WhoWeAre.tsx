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
                  src="/whatsapp-image-2024-06-24-at-00-35-19-8962026a-1.webp"
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
              Raise India Foundation: NGO for Heart Surgery,
              Education & Women's Empowerment in India{' '}
              <span className={styles.highlightWrapper}>
                <span className={styles.highlightText}>matters most.</span>
                <span className={styles.highlightUnderline} aria-hidden="true" />
              </span>
            </h2>

            {/* Paragraph 1 */}
            <p className={`${styles.paragraph} ${styles.p1}`}>
              Since 2014, Raise India Foundation has worked across Delhi, Uttar Pradesh, Bihar, and Madhya Pradesh,
              supporting children, women, and underserved communities through education, healthcare, livelihood support,
              relief initiatives, and community development programmes.
            </p>

            {/* Paragraph 2 */}
            <p className={`${styles.paragraph} ${styles.p2}`}>
              Raise India Foundation is registered under 80G and 12A, with its registration and financial details available for
              donors and partners seeking greater transparency about the organisation and its work.
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
