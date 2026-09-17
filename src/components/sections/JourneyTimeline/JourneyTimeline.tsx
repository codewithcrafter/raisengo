"use client";

import React, { useRef } from 'react';
import { Container } from '@/components/ui/Container/Container';
import { useScrollReveal } from '@/lib/useScrollReveal';
import styles from './JourneyTimeline.module.css';

export const JourneyTimeline: React.FC = () => {
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
      id="journey" 
      ref={sectionRef} 
      className={`${styles.journeySection} ${isVisible ? styles.revealed : ''}`}
    >
      {/* Background Depth Elements */}
      <div className={styles.bgGlowCircle} aria-hidden="true" />
      
      {/* Floating Particles */}
      <div className={styles.particlesContainer} aria-hidden="true">
        <span className={`${styles.particle} ${styles.p1}`} />
        <span className={`${styles.particle} ${styles.p2}`} />
        <span className={`${styles.particle} ${styles.p3}`} />
        <span className={`${styles.particle} ${styles.p4}`} />
        <span className={`${styles.particle} ${styles.p5}`} />
      </div>

      <Container className={styles.container}>
        {/* Header Block */}
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>OUR JOURNEY</span>
          <h2 className={styles.journeyTitle}>
            A Journey of Hope
            <span className={styles.titleUnderline} aria-hidden="true" />
          </h2>
        </div>

        {/* Timeline Grid Container */}
        <div className={styles.timelineWrapper}>
          {/* Connector Line running behind cards */}
          <div className={styles.connectorTrack} aria-hidden="true">
            <div className={styles.connectorProgress} />
          </div>

          <div className={styles.timelineGrid}>
            {/* MILESTONE 1: 2014 */}
            <div 
              className={`${styles.timelineCard} ${styles.card2010}`}
              onMouseMove={handleMouseMove}
            >
              {/* Radial Mouse Light Overlay */}
              <div className={styles.mouseLight} aria-hidden="true" />
              
              {/* Background Watermark SVG Motif (Seed/Sprout) */}
              <div className={styles.watermarkMotif} aria-hidden="true">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M12 22V12M12 12C12 7.5 8.5 4 4 4C4 8.5 7.5 12 12 12ZM12 12C12 7.5 15.5 4 20 4C20 8.5 16.5 12 12 12Z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <div className={styles.nodeHeader}>
                <div className={styles.dotContainer}>
                  <span className={styles.nodeDot} />
                  <span className={styles.dotWaveRing} />
                </div>
                <span className={styles.nodeYear}>2014</span>
              </div>

              <h3 className={styles.cardTitle}>Foundation Established</h3>
              <p className={styles.cardDesc}>
                Established on 22nd December 2014 by Mr. Jai Pal Singh Malik and Ms. Shipra Chauhan. Began direct child education support through Shikshalaya and winter street relief through Kambal Udhao.
              </p>
            </div>

            {/* MILESTONE 2: 2021 */}
            <div 
              className={`${styles.timelineCard} ${styles.card2016}`}
              onMouseMove={handleMouseMove}
            >
              {/* Radial Mouse Light Overlay */}
              <div className={styles.mouseLight} aria-hidden="true" />

              {/* Background Watermark SVG Motif (Growth Circles) */}
              <div className={styles.watermarkMotif} aria-hidden="true">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>

              <div className={styles.nodeHeader}>
                <div className={styles.dotContainer}>
                  <span className={`${styles.nodeDot} ${styles.dot2016}`} />
                  <span className={styles.dotWaveRing} />
                </div>
                <span className={styles.nodeYear}>2021</span>
              </div>

              <h3 className={styles.cardTitle}>Pandemic Relief &amp; Honors</h3>
              <p className={styles.cardDesc}>
                Mounted extensive frontline relief: 25,000+ dry ration kits, cooked meals for daily wagers, and Chuppi Todo menstrual hygiene. Conferred with the Covid Warriors Award by the Delhi Government.
              </p>
            </div>

            {/* MILESTONE 3: TODAY (Hero Milestone) */}
            <div 
              className={`${styles.timelineCard} ${styles.cardToday}`}
              onMouseMove={handleMouseMove}
            >
              {/* Radial Mouse Light Overlay */}
              <div className={styles.mouseLight} aria-hidden="true" />

              {/* Background Watermark SVG Motif (Community People) */}
              <div className={styles.watermarkMotif} aria-hidden="true">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>

              {/* Current Chapter Badge */}
              <div className={styles.currentBadge}>
                <span>11+ YEARS OF IMPACT</span>
              </div>

              <div className={styles.nodeHeader}>
                <div className={styles.dotContainer}>
                  <span className={`${styles.nodeDot} ${styles.dotToday}`} />
                  <span className={`${styles.dotWaveRing} ${styles.ringToday}`} />
                </div>
                <span className={styles.nodeYearToday}>TODAY</span>
              </div>

              <h3 className={styles.cardTitleToday}>1.83M+ Lives Uplifted</h3>
              <p className={styles.cardDescToday}>
                Over 1.83 million lives uplifted across Delhi, UP, MP, and Bihar. Expanding Techshaala digital labs with Konverge Technologies and life-saving pediatric surgeries with Fortis Hospital.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
