"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container/Container';
import { useScrollReveal } from '@/lib/useScrollReveal';
import styles from './WhoWeAre.module.css';

export const WhoWeAre: React.FC = () => {
  const [sectionRef, isVisible] = useScrollReveal<HTMLElement>({ threshold: 0.15, triggerOnce: true });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section 
      id="who-we-are" 
      ref={sectionRef}
      className={`${styles.section} ${isVisible ? styles.revealed : ''}`}
    >
      {/* Background Decorative Elements */}
      <div className={styles.bgDecorCircle} aria-hidden="true" />
      <div className={styles.bgCurvedLine} aria-hidden="true">
        <svg viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M50 500C180 380 320 320 380 150" 
            stroke="url(#whoLineGrad)" 
            strokeWidth="2" 
            strokeDasharray="4 6"
          />
          <defs>
            <linearGradient id="whoLineGrad" x1="0" y1="500" x2="400" y2="150" gradientUnits="userSpaceOnUse">
              <stop stopColor="#E0679D" stopOpacity="0.35" />
              <stop offset="1" stopColor="#814CBA" stopOpacity="0.08" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className={styles.bgDotsCluster} aria-hidden="true">
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
      </div>
      <div className={styles.bgPinkAccent} aria-hidden="true" />

      <Container className={styles.container}>
        <div className={styles.grid}>
          
          {/* LEFT: IMMERSIVE COMMUNITY IMAGE COLUMN */}
          <div className={styles.imageColumn}>
            {/* Layered Backing Frame */}
            <div className={styles.imageFrameBacking} aria-hidden="true" />

            {/* Corner Decorative Accent */}
            <div className={styles.imageCornerAccent} aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E0679D" strokeWidth="2.5">
                <path d="M2 12V2h10" />
              </svg>
            </div>

            {/* Main Image Frame Container with Mouse Follow Light */}
            <div 
              className={styles.imageWrapper}
              onMouseMove={handleMouseMove}
            >
              {/* Radial Mouse Light Overlay */}
              <div className={styles.mouseLight} aria-hidden="true" />

              <Image
                src="/images/about-community.jpg"
                alt="Volunteers and children learning together in a community center"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
                className={styles.image}
                priority
              />

              {/* Gradient Overlay & Diagonal Light Sweep */}
              <div className={styles.imageGradientOverlay} aria-hidden="true" />
              <div className={styles.diagonalSweep} aria-hidden="true" />

              {/* Top-Right Story Badge */}
              <div className={styles.imageIndexBadge}>
                <span className={styles.indexNum}>01</span>
                <span className={styles.indexDivider}>/</span>
                <span className={styles.indexLabel}>OUR STORY</span>
              </div>

              {/* Bottom-Left Subtle Overlay Story Element */}
              <div className={styles.storyElementBadge}>
                <span className={styles.storyBadgeDot} aria-hidden="true" />
                <span className={styles.storyBadgeText}>REAL STORIES • REAL COMMUNITIES</span>
              </div>

              {/* Floating Glass-Style Information Strip */}
              <div className={styles.floatingGlassStrip}>
                <span className={styles.glassDot} aria-hidden="true" />
                <span className={styles.glassText}>COMMUNITY • EDUCATION • EMPOWERMENT</span>
              </div>
            </div>
          </div>

          {/* RIGHT: EDITORIAL CONTENT COLUMN */}
          <div className={styles.contentColumn}>
            {/* Eyebrow Header with Vertical Pink Accent Line */}
            <div className={styles.eyebrowHeader}>
              <div className={styles.editorialAccentLine} aria-hidden="true" />
              <span className={styles.eyebrow}>WHO WE ARE</span>
            </div>

            {/* Main Section Heading */}
            <h2 className={styles.heading}>
              Change begins when people{' '}
              <span className={styles.highlightWrapper}>
                <span className={styles.highlightText}>come together.</span>
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

            {/* Horizontal Pink Impact Accent Line */}
            <div className={styles.impactAccentLine} aria-hidden="true" />

            {/* CTA Action Buttons */}
            <div className={styles.actions}>
              <Link href="/our-work" className={styles.btnPrimary}>
                <span>EXPLORE OUR WORK</span>
                <svg className={styles.btnArrow} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>

              <Link href="/get-involved" className={styles.btnSecondary}>
                <span>GET INVOLVED</span>
                <svg className={styles.btnArrow} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
};
