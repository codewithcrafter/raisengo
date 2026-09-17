'use client';

import React from 'react';
import { Container } from '@/components/ui/Container/Container';
import { useScrollReveal } from '@/lib/useScrollReveal';
import styles from './WhatWeDo.module.css';

const focusAreas = [
  {
    id: 'edu',
    title: 'Education (Shikshalaya & Techshaala)',
    category: 'PRIMARY & DIGITAL LEARNING',
    description: 'Operating free learning centers in Delhi and Agra educating 18,050+ children, and advancing computer literacy through Techshaala supported by Konverge Technologies.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
    badge: '18,050+ Students Reached',
  },
  {
    id: 'health',
    title: 'Healthcare (Mission Little Heartbeats)',
    category: 'PEDIATRIC CARDIAC SURGERY',
    description: 'Partnering with Fortis Hospital to fully fund life-saving open-heart surgeries for underprivileged children born with Congenital Heart Defects (CHD).',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    badge: '14+ Heart Surgeries Completed',
  },
  {
    id: 'hygiene',
    title: 'Menstrual Hygiene (Chuppi Todo)',
    category: 'WOMEN’S HEALTH & SANITATION',
    description: 'Combating menstrual taboos and distributing monthly Dignity Kits and hygienic sanitary napkins to female construction laborers and slum communities.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    badge: 'Thousands of Dignity Kits Distributed',
  },
  {
    id: 'livelihood',
    title: "Women's Empowerment & Skills",
    category: 'VOCATIONAL AUTONOMY',
    description: 'Vocational tailoring training and eco-friendly cloth/paper bag making, connecting self-reliant women artisans directly to commercial retail markets.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    badge: 'Sustainable Artisan Incomes',
  },
  {
    id: 'relief',
    title: 'Seasonal & Disaster Relief',
    category: 'URBAN RESILIENCE',
    description: 'Kambal Udhao winter warmth on streets since 2014, Project Tapan summer hydration protection, and emergency Yamuna flood relief camps in Delhi.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
    badge: 'Continuous Emergency Aid Since 2014',
  },
  {
    id: 'environment',
    title: 'Environmental Stewardship',
    category: 'GREEN URBAN INITIATIVES',
    description: 'Planting indigenous shade and air-purifying trees across Delhi, accompanied by strict post-plantation watering and nurturing routines.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    badge: 'Thousands of Trees Nurtured',
  },
];

export const WhatWeDo: React.FC = () => {
  const [sectionRef, isVisible] = useScrollReveal<HTMLElement>({ threshold: 0.15, triggerOnce: true });

  return (
    <section 
      id="what-we-do" 
      ref={sectionRef} 
      className={`${styles.section} ${isVisible ? styles.revealed : ''}`}
    >
      <Container className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.eyebrowWrapper}>
            <span className={styles.accentLine} aria-hidden="true" />
            <span className={styles.eyebrow}>WHAT WE DO</span>
          </div>
          <h2 className={styles.title}>
            Empowering Communities Through <span className={styles.highlightText}>Focused Action</span>
          </h2>
          <p className={styles.subtitle}>
            We design and scale grassroots programs that tackle the root causes of poverty, inequality, and lack of opportunity across India.
          </p>
        </div>

        {/* Focus Area Cards Grid */}
        <div className={styles.grid}>
          {focusAreas.map((area, idx) => (
            <div 
              key={area.id} 
              className={styles.card}
              style={{ animationDelay: `${idx * 100 + 100}ms` }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconBox}>
                  {area.icon}
                </div>
                <span className={styles.categoryBadge}>{area.category}</span>
              </div>
              <h3 className={styles.cardTitle}>{area.title}</h3>
              <p className={styles.cardDesc}>{area.description}</p>
              <div className={styles.cardFooter}>
                <span className={styles.impactBadge}>{area.badge}</span>
              </div>
              <div className={styles.cardHoverBorder} aria-hidden="true" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
