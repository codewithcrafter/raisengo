'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { corporatePartners } from '@/lib/content-data';
import styles from './CorporatePartners.module.css';

export const CorporatePartners: React.FC = () => {
  return (
    <section id="corporate-partners" className={styles.section} aria-label="Corporate Partners Showcase">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>CSR COLLABORATIONS</span>
          <h2 className={styles.title}>
            Some of our <span className={styles.titleHighlight}>Esteemed</span> Corporate Partners
          </h2>
          <p className={styles.subtitle}>
            We collaborate with leading corporations, institutions, and healthcare providers to implement impactful CSR programs under Schedule VII of the Companies Act.
          </p>
        </div>

        {/* Partners Grid */}
        <div className={styles.partnersGrid}>
          {corporatePartners.map((partner) => (
            <div key={partner.id} className={styles.partnerCard}>
              <div className={styles.logoWrapper}>
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className={styles.logoImage}
                />
              </div>
              <h3 className={styles.partnerName}>{partner.name}</h3>
              <span className={styles.partnerCategory}>{partner.category}</span>
            </div>
          ))}
        </div>

        {/* Bottom CSR Banner */}
        <div className={styles.bottomCta}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>Partner with Us for Impactful CSR</h3>
            <p className={styles.ctaSubtitle}>
              Raise India Foundation is fully certified with MCA CSR-1, 12A, and 80G registrations. We co-design, execute, and monitor measurable CSR programs with full audit compliance.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <Link href="/csr" className={styles.primaryCtaBtn}>
              <span>EXPLORE CSR OPPORTUNITIES</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link href="/contact" className={styles.secondaryCtaBtn}>
              Contact CSR Desk
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
