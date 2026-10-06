"use client";

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container/Container';
import { useScrollReveal } from '@/lib/useScrollReveal';
import styles from './MissionVision.module.css';

export const MissionVision: React.FC = () => {
  const [sectionRef, isVisible] = useScrollReveal<HTMLElement>({ threshold: 0.15, triggerOnce: true });

  return (
    <section 
      id="mission-vision" 
      ref={sectionRef} 
      className={`${styles.section} ${isVisible ? styles.revealed : ''}`}
    >

      <Container className={styles.container}>
        {/* Centered Section Header */}
        <div className={styles.header}>
          <div className={styles.eyebrowWrapper}>
            <span className={styles.eyebrowAccent} aria-hidden="true" />
            <span className={styles.eyebrow}>OUR PURPOSE</span>
          </div>
          <p className={styles.subtitle}>
            Guided by purpose, committed to sustainable community transformation across India.
          </p>
        </div>

        {/* Composition Grid */}
        <div className={styles.compositionGrid}>
          {/* LEFT: MISSION PANEL */}
          <div className={`${styles.panel} ${styles.missionPanel}`}>
            <div className={styles.panelHeader}>
              <span className={styles.panelEyebrow}>OUR MISSION</span>
            </div>

            <h3 className={styles.panelTitle}>Our Mission</h3>
            
            <p className={styles.panelDescription}>
              To create a holistic and sustainable impact on society by addressing problems persisting at the grassroots level. Every human deserves the chance to reach their full potential and live with dignity through quality education, life-saving healthcare, and community empowerment.
            </p>

            <div className={styles.cardAccentLine} aria-hidden="true" />
          </div>

          {/* RIGHT: VISION PANEL */}
          <div className={`${styles.panel} ${styles.visionPanel}`}>
            <div className={styles.panelHeader}>
              <span className={styles.panelEyebrowVision}>OUR VISION</span>
            </div>

            <h3 className={styles.panelTitleVision}>Our Vision</h3>

            <p className={styles.panelDescriptionVision}>
              To build a resilient, equitable nation where opportunity, healthcare, and education are universal rights—enabling every marginalized individual to lead a self-sufficient, dignified life.
            </p>

            <div className={styles.readMoreWrapper}>
              <Link 
                href="/about#mission-vision" 
                className={styles.readMoreBtn} 
                aria-label="Read more about Our Vision"
              >
                <span>Read More</span>
                <svg 
                  className={styles.readMoreArrow} 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
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
