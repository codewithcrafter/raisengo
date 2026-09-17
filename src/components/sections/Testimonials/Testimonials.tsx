'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { donorTestimonials, financialDetails } from '@/lib/content-data';
import styles from './Testimonials.module.css';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = donorTestimonials.length;

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Auto rotate testimonials every 6 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(handleNext, 6000);
    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  const currentTestimonial = donorTestimonials[currentIndex];

  return (
    <section 
      id="testimonials" 
      className={styles.section}
      aria-label="Donor Testimonials and Statutory Details"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={styles.bgGlow} aria-hidden="true" />

      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>TRUST & TRANSPARENCY</span>
          <h2 className={styles.title}>
            Voices of Trust & <span className={styles.titleHighlight}>Verified Impact</span>
          </h2>
          <p className={styles.subtitle}>
            Hear directly from our dedicated donors, institutional partners, and academic interns who witness our grassroots operations firsthand.
          </p>
        </div>

        {/* Dual Layout Grid */}
        <div className={styles.dualGrid}>
          {/* Left Column: Official Financial & Statutory Details */}
          <div className={styles.financialCard}>
            <div>
              <div className={styles.cardHeader}>
                <div className={styles.cardBadge}>
                  <span className={styles.cardBadgeDot} />
                  <span>VERIFIED RECORD</span>
                </div>
                <h3 className={styles.cardTitle}>Financial & Legal Details</h3>
                <p className={styles.cardSubtitle}>
                  Transparent governance in full accordance with the Indian Trusts Act and Income Tax authorities.
                </p>
              </div>

              <div className={styles.tableWrapper}>
                {financialDetails.map((item, idx) => (
                  <div key={idx} className={styles.tableRow}>
                    <span className={styles.tableLabel}>{item.label}</span>
                    <span className={styles.tableValue}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.financialTrustNote}>
              <svg className={styles.trustIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <div className={styles.trustText}>
                <strong>Tax Exemption Benefit:</strong> All eligible monetary contributions to Raise India Foundation qualify for a 50% tax deduction under Section 80G of the Income Tax Act.
                <div>
                  <Link href="/transparency" className={styles.trustLink}>
                    View Statutory Disclosures &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Donor & Supporter Testimonials */}
          <div className={styles.testimonialsCard}>
            <span className={styles.quoteIconBg} aria-hidden="true">&ldquo;</span>

            <div className={styles.testimonialHeader}>
              <span className={styles.testimonialBadge}>
                {currentTestimonial.type.toUpperCase()} TESTIMONIAL ({currentIndex + 1}/{total})
              </span>

              <div className={styles.carouselNav}>
                <button 
                  className={styles.navBtn} 
                  onClick={handlePrev} 
                  aria-label="Previous testimonial"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <button 
                  className={styles.navBtn} 
                  onClick={handleNext} 
                  aria-label="Next testimonial"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            </div>

            <div className={styles.quoteBlock}>
              <p className={styles.quoteText}>
                &ldquo;{currentTestimonial.quote}&rdquo;
              </p>
            </div>

            <div className={styles.authorFooter}>
              <div className={styles.authorMeta}>
                <div className={styles.avatarCircle}>
                  {currentTestimonial.name.replace('Mr. ', '').charAt(0)}
                </div>
                <div>
                  <div className={styles.authorName}>{currentTestimonial.name}</div>
                  <div className={styles.authorRole}>
                    {currentTestimonial.designation}
                    {currentTestimonial.location && (
                      <span className={styles.authorLocation}> • {currentTestimonial.location}</span>
                    )}
                  </div>
                </div>
              </div>

              <div className={styles.indicators} role="tablist" aria-label="Testimonial slides">
                {donorTestimonials.map((_, idx) => (
                  <button
                    key={idx}
                    role="tab"
                    aria-selected={idx === currentIndex}
                    aria-label={`Go to testimonial ${idx + 1}`}
                    className={`${styles.dotIndicator} ${idx === currentIndex ? styles.dotActive : ''}`}
                    onClick={() => setCurrentIndex(idx)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
