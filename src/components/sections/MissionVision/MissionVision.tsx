"use client";

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container/Container';
import { useScrollReveal } from '@/lib/useScrollReveal';
import styles from './MissionVision.module.css';

export const MissionVision: React.FC = () => {
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
      id="mission-vision" 
      ref={sectionRef} 
      className={`${styles.section} ${isVisible ? styles.revealed : ''}`}
    >
      {/* Background Depth Elements */}
      <div className={styles.bgGlow} aria-hidden="true" />
      <div className={styles.bgGridLines} aria-hidden="true" />

      <Container className={styles.container}>
        {/* Centered Section Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>OUR PURPOSE</span>
          <h2 className={styles.title}>Our Mission &amp; Vision</h2>
          <p className={styles.subtitle}>
            Guided by purpose, committed to sustainable community transformation across India.
          </p>
        </div>

        {/* Composition Grid */}
        <div className={styles.compositionGrid}>
          {/* LEFT: MISSION PANEL */}
          <div 
            className={`${styles.panel} ${styles.missionPanel}`}
            onMouseMove={handleMouseMove}
          >
            {/* Mouse-following Radial Light */}
            <div className={styles.mouseLight} aria-hidden="true" />

            {/* Corner Badge */}
            <div className={styles.cornerBadge}>
              <span>01 / MISSION</span>
            </div>

            {/* Decorative Background Watermark Motif (Education + Healthcare + Livelihood) */}
            <div className={styles.watermarkMotif} aria-hidden="true">
              <svg width="180" height="180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <div className={styles.panelHeader}>
              <span className={styles.panelEyebrow}>OUR MISSION</span>
              <div className={`${styles.iconContainer} ${styles.missionIconBg}`}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
            </div>

            <h3 className={styles.panelTitle}>Our Mission</h3>
            
            <p className={styles.panelDescription}>
              To create a holistic and sustainable impact on society by addressing problems persisting at the grassroots level. Every human deserves the chance to reach their full potential and live with dignity through quality education, life-saving healthcare, and community empowerment.
            </p>

            <div className={styles.cardAccentLine} aria-hidden="true" />
          </div>

          {/* CENTER: ANIMATED CONNECTOR */}
          <div className={styles.connectorArea} aria-hidden="true">
            <div className={styles.connectorLine}>
              <span className={styles.movingPulseDot} />
            </div>
            <div className={styles.connectorBadge}>
              <span>MISSION</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
              <span>VISION</span>
            </div>
          </div>

          {/* RIGHT: VISION PANEL */}
          <div 
            className={`${styles.panel} ${styles.visionPanel}`}
            onMouseMove={handleMouseMove}
          >
            {/* Mouse-following Radial Light */}
            <div className={styles.mouseLightVision} aria-hidden="true" />

            {/* Corner Badge */}
            <div className={styles.cornerBadgeVision}>
              <span>02 / VISION</span>
            </div>

            {/* Decorative Background Watermark Motif (Growth + People + Opportunity) */}
            <div className={styles.watermarkMotifVision} aria-hidden="true">
              <svg width="180" height="180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M5.6 18.4L18.4 5.6" strokeLinecap="round" />
              </svg>
            </div>

            <div className={styles.panelHeader}>
              <span className={styles.panelEyebrowVision}>OUR VISION</span>
              <div className={`${styles.iconContainer} ${styles.visionIconBg}`}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
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

            <div className={styles.cardAccentLineVision} aria-hidden="true" />
          </div>
        </div>

        {/* Editorial Impact Statement */}
        <div className={styles.impactStatementBlock}>
          <div className={styles.statementDividerLine} aria-hidden="true" />
          <blockquote className={styles.statementQuote}>
            &ldquo;Creating opportunity today. Building a stronger tomorrow.&rdquo;
          </blockquote>
        </div>
      </Container>
    </section>
  );
};
