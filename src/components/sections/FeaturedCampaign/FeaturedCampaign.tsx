'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container/Container';
import { FloatingAccents } from '@/components/ui/FloatingAccents/FloatingAccents';
import { useScrollReveal } from '@/lib/useScrollReveal';
import styles from './FeaturedCampaign.module.css';

export const FeaturedCampaign: React.FC = () => {
  const [sectionRef, isVisible] = useScrollReveal<HTMLElement>({ threshold: 0.15, triggerOnce: true });
  
  // Count-up states for fundraising numbers
  const [raisedCount, setRaisedCount] = useState(0);
  const [supportersCount, setSupportersCount] = useState(0);

  const raisedTarget = 1.95; // Lakh
  const goalTarget = 2.75; // Lakh
  const progressPercent = Math.min(100, Math.max(0, (1.95 / 2.75) * 100));

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const duration = 1100;

    const animateCounts = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const ratio = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - ratio, 3);

      setRaisedCount(Number((easeOut * 1.95).toFixed(2)));
      setSupportersCount(Math.floor(easeOut * 420));

      if (ratio < 1) {
        requestAnimationFrame(animateCounts);
      }
    };

    const handle = requestAnimationFrame(animateCounts);
    return () => cancelAnimationFrame(handle);
  }, [isVisible]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section 
      id="campaigns" 
      ref={sectionRef}
      className={`${styles.campaign} ${isVisible ? styles.revealed : ''}`}
    >
      {/* Background Floating Dots & Glow */}
      <div className={styles.bgGlowCircle} aria-hidden="true" />
      <div className={styles.floatingDotsContainer} aria-hidden="true">
        <span className={`${styles.dot} ${styles.dot1}`} />
        <span className={`${styles.dot} ${styles.dot2}`} />
      </div>

      <FloatingAccents variant="sparkles" />
      
      <Container>
        <div className={styles.campaignContainer}>
          <div 
            className={styles.card}
            onMouseMove={handleMouseMove}
          >
            {/* Radial Mouse Light Overlay */}
            <div className={styles.mouseLight} aria-hidden="true" />

            {/* Left — Image Section */}
            <div className={styles.imageSection}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/migrated/events/world-heart-day.webp"
                  alt="Mission Little Heartbeats pediatric care at Fortis Hospital"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className={styles.image}
                  priority
                />

                {/* Shimmer Light Sweep Effect */}
                <div className={styles.shimmerSweep} aria-hidden="true" />
                
                {/* Active Campaign Badge */}
                <div className={styles.activeBadge}>
                  <span className={styles.pulseDot} aria-hidden="true" /> ACTIVE SURGERY FUND
                </div>

                {/* Bottom Overlay Gradient & Category */}
                <div className={styles.imageOverlay}>
                  <div className={styles.categoryLabel}>
                    <span className={styles.categoryName}>MISSION LITTLE HEARTBEATS</span>
                    <span className={styles.categoryNumber}>01</span>
                  </div>
                </div>
              </div>
              
              {/* Subtle Decorative Arc */}
              <div className={styles.decorativeArc} aria-hidden="true" />
            </div>

            {/* Right — Content Section */}
            <div className={styles.contentSection}>
              <div className={styles.contentHeader}>
                <span className={styles.eyebrow}>CRITICAL MEDICAL CAMPAIGN</span>
                <h2 className={styles.title}>
                  <span className={styles.titleLine1}>Help Kanishk —</span><br />
                  <span className={styles.titleLine2}>
                    <span className={styles.highlightText}>Heal His Little Heart</span>
                    <span className={styles.highlightUnderline} aria-hidden="true" />
                  </span>
                </h2>
                <p className={styles.description}>
                  At just one year old, baby Kanishk from Gwalior is fighting a life-threatening Ventricular Septal Defect (VSD). Evaluated at Fortis Hospital, his corrective cardiac surgery needs urgent support to give him a healthy tomorrow.
                </p>
              </div>

              {/* Fundraising Module */}
              <div className={styles.fundraisingModule}>
                <div className={styles.progressLabels}>
                  <div className={styles.raisedBlock}>
                    <span className={styles.amount}>₹{raisedCount} Lakh</span>
                    <span className={styles.label}>RAISED</span>
                  </div>
                  <div className={styles.targetBlock}>
                    <span className={styles.amount}>₹2.75 Lakh</span>
                    <span className={styles.label}>ESTIMATED GOAL</span>
                  </div>
                </div>

                <div className={styles.progressBar}>
                  <div
                    className={styles.progressFill}
                    style={{ width: isVisible ? `${progressPercent}%` : '0%' }}
                  />
                </div>

                <div className={styles.metricsRow}>
                  <div className={styles.metric}>
                    <span className={styles.metricIcon}>♥</span>
                    <div className={styles.metricData}>
                      <strong>{supportersCount.toLocaleString()}</strong>
                      <span>Supporters</span>
                    </div>
                  </div>
                  <div className={styles.metricDivider} aria-hidden="true" />
                  <div className={styles.metric}>
                    <span className={styles.metricIcon}>⏱</span>
                    <div className={styles.metricData}>
                      <strong>Fortis Hospital</strong>
                      <span>Medical Partner</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className={styles.actions}>

                <Link href="/our-work/healthcare" className={styles.secondaryLink}>
                  <span className={styles.secTextWrapper}>
                    <span>MISSION DETAILS</span>
                    <span className={styles.secUnderline} aria-hidden="true" />
                  </span>
                  <span className={styles.arrow} aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
};
