'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container/Container';
import { useScrollReveal } from '@/lib/useScrollReveal';
import styles from './Work.module.css';

const initiatives = [
  {
    id: '01',
    title: 'Education & Shikshalaya',
    category: 'FLAGSHIP EDUCATION',
    description: 'Operating free learning centers in Delhi and Agra educating 18,050+ children, and advancing digital literacy through Techshaala supported by Konverge Technologies.',
    image: '/images/migrated/events/agra-shikshalaya.webp',
    link: '/our-work/ongoing-projects/shikshalaya-free-learning-centers',
  },
  {
    id: '02',
    title: 'Mission Little Heartbeats',
    category: 'PEDIATRIC HEALTHCARE',
    description: 'Partnering with Fortis Hospital to fund life-saving open-heart surgeries for underprivileged children suffering from critical Congenital Heart Defects.',
    image: '/images/migrated/events/world-heart-day.webp',
    link: '/our-work/ongoing-projects/mission-little-heartbeats',
  },
  {
    id: '03',
    title: 'Chuppi Todo — Menstrual Hygiene',
    category: 'WOMEN’S HEALTH',
    description: 'Ending menstrual stigma and distributing Dignity Kits to thousands of female construction laborers and marginalized women across Delhi-NCR.',
    image: '/images/migrated/partners/csr-partnership-1.webp',
    link: '/our-work/ongoing-projects/chuppi-todo-sharam-nahi-samman',
  },
  {
    id: '04',
    title: "Women's Empowerment & Skills",
    category: 'LIVELIHOOD & CRAFT',
    description: 'Vocational tailoring training and eco-friendly cloth/paper bag production, connecting women artisans directly to commercial retail markets.',
    image: '/images/migrated/events/womens-day.webp',
    link: '/our-work/past-events/international-womens-day-celebration-and-health-camp',
  },
  {
    id: '05',
    title: 'Kambal Udhao & Project BHOOKH',
    category: 'COMMUNITY RELIEF',
    description: 'Running annual nighttime winter blanket distribution on northern streets since 2014, and providing emergency nutritional food security.',
    image: '/images/migrated/events/kambal-udhao.webp',
    link: '/our-work/seasonal-projects/kambal-udhao-zindagi-bachao',
  },
];

export const Work: React.FC = () => {
  const [sectionRef, isVisible] = useScrollReveal<HTMLElement>({ threshold: 0.12, triggerOnce: true });
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-rotation every 5 seconds (paused on hover or reduced-motion)
  useEffect(() => {
    if (isPaused) return;
    
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    timerRef.current = setInterval(() => {
      handleProgramSelect((activeIndex + 1) % initiatives.length);
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeIndex, isPaused]);

  const handleProgramSelect = (index: number) => {
    if (index === activeIndex) return;
    setIsTransitioning(true);
    setActiveIndex(index);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  const currentProgram = initiatives[activeIndex];

  return (
    <section 
      id="work" 
      ref={sectionRef} 
      className={`${styles.section} ${isVisible ? styles.revealed : ''}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Floating Background Decorative Elements */}
      <div className={styles.bgGlowCircle} aria-hidden="true" />
      <div className={styles.floatingDotsContainer} aria-hidden="true">
        <span className={`${styles.dot} ${styles.floatingDot1}`} />
        <span className={`${styles.dot} ${styles.floatingDot2}`} />
      </div>

      <Container className={styles.container}>
        {/* Header Area */}
        <div className={styles.headerArea}>
          <div className={styles.headerContent}>
            <span className={styles.eyebrow}>OUR WORK</span>
            <h2 className={styles.title}>Creating Opportunities That<br />Move Communities Forward</h2>
            <p className={styles.description}>
              Explore the core programs through which we empower children, support families, and build resilient communities across India.
            </p>
          </div>

          <div className={styles.headerRight}>
            <Link href="/our-work" className={styles.viewAllLink}>
              <span className={styles.viewAllText}>VIEW ALL PROGRAMS</span>
              <span className={styles.arrow} aria-hidden="true">→</span>
              <span className={styles.linkUnderline} aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Program Showcase Composition (Left List + Right Image Panel) */}
        <div className={styles.showcaseGrid}>
          
          {/* LEFT SIDE: EDITORIAL PROGRAM SELECTOR LIST */}
          <div className={styles.programList} role="tablist" aria-label="Program Showcase Selector">
            {initiatives.map((item, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div
                  key={item.id}
                  role="tab"
                  tabIndex={0}
                  aria-selected={isActive}
                  className={`${styles.programItem} ${isActive ? styles.programItemActive : ''}`}
                  onClick={() => handleProgramSelect(idx)}
                  onMouseEnter={() => handleProgramSelect(idx)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleProgramSelect(idx);
                    }
                  }}
                >
                  <div className={styles.programItemHeader}>
                    <span className={styles.programNum}>{item.id}</span>
                    <span className={styles.programCategory}>{item.category}</span>
                  </div>
                  <h3 className={styles.programTitle}>{item.title}</h3>
                  <p className={styles.programBrief}>{item.description}</p>
                  
                  {/* Active Indicator Line */}
                  <div className={styles.activeIndicatorTrack}>
                    <div className={`${styles.activeIndicatorFill} ${isActive ? styles.fillActive : ''}`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT SIDE: LARGE IMMERSIVE VISUAL PANEL */}
          <div 
            className={styles.visualPanel}
            onMouseMove={handleMouseMove}
          >
            {/* Mouse Follow Radial Light */}
            <div className={styles.mouseLight} aria-hidden="true" />
            
            {/* Shimmer Light Sweep Effect */}
            <div className={styles.shimmerSweep} aria-hidden="true" />

            {/* Large Decorative Watermark Number */}
            <div className={styles.watermarkNumber} aria-hidden="true">
              {currentProgram.id}
            </div>

            {/* Image Container with Cross-Fade Transition */}
            <div className={`${styles.imageContainer} ${isTransitioning ? styles.imageTransitioning : ''}`}>
              <Image
                key={currentProgram.id}
                src={currentProgram.image}
                alt={currentProgram.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className={styles.showcaseImage}
                priority
              />
              <div className={styles.gradientOverlay} aria-hidden="true" />
            </div>

            {/* Content Layer Over Image */}
            <div className={`${styles.showcaseContent} ${isTransitioning ? styles.contentTransitioning : ''}`}>
              <div className={styles.contentBadge}>
                <span className={styles.badgeNum}>{currentProgram.id}</span>
                <span className={styles.badgeDivider}>/</span>
                <span className={styles.badgeCategory}>{currentProgram.category}</span>
              </div>

              <h3 className={styles.showcaseTitle}>{currentProgram.title}</h3>
              <p className={styles.showcaseDescription}>{currentProgram.description}</p>

              <Link href={currentProgram.link} className={styles.exploreBtn} tabIndex={0}>
                <span className={styles.btnTextWrapper}>
                  <span>EXPLORE PROGRAM</span>
                  <span className={styles.btnUnderline} aria-hidden="true" />
                </span>
                <span className={styles.arrow} aria-hidden="true">→</span>
              </Link>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
};
