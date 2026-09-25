'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { organization } from '@/lib/content-data';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${organization.address.line1}, ${organization.address.line2}, ${organization.address.city} ${organization.address.pincode}`
  )}`;

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} aria-label="Site Footer">
      {/* ─────────────────────────────────────────────────────────
          TOP 2PX ACCENT LINE (Pink → Violet → Pink)
          ───────────────────────────────────────────────────────── */}
      <div className={styles.topAccentBorder} aria-hidden="true" />

      {/* ─────────────────────────────────────────────────────────
          1. TOP QUICK CONTACT STRIP (3-part structured bar)
          ───────────────────────────────────────────────────────── */}
      <section className={styles.contactStripSection} aria-label="Quick Contact Information">
        <div className={styles.footerContainer}>
          <div className={styles.contactStripGrid}>
            {/* 1. VISIT US */}
            <div className={styles.contactStripItem}>
              <div className={`${styles.stripIconWrap} ${styles.iconPurple}`} aria-hidden="true">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className={styles.stripTextGroup}>
                <span className={styles.stripLabel}>VISIT US</span>
                <address className={styles.stripValueAddress}>
                  {organization.address.line1}, {organization.address.line2}, {organization.address.city} – {organization.address.pincode}
                </address>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.stripLinkAction}
                  aria-label="Get directions to our office on Google Maps"
                >
                  <span>Get Directions</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            {/* 2. EMAIL US */}
            <div className={styles.contactStripItem}>
              <div className={`${styles.stripIconWrap} ${styles.iconPink}`} aria-hidden="true">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div className={styles.stripTextGroup}>
                <span className={styles.stripLabel}>EMAIL US</span>
                <a
                  href={`mailto:${organization.email}`}
                  className={styles.stripInteractiveLink}
                  title="Send email to Raise India Foundation"
                >
                  {organization.email}
                </a>
                <span className={styles.stripSubtext}>Prompt support &amp; inquiries</span>
              </div>
            </div>

            {/* 3. CALL US */}
            <div className={styles.contactStripItem}>
              <div className={`${styles.stripIconWrap} ${styles.iconViolet}`} aria-hidden="true">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className={styles.stripTextGroup}>
                <span className={styles.stripLabel}>CALL US</span>
                <a
                  href={`tel:${organization.phone.replace(/[^0-9+]/g, '')}`}
                  className={styles.stripInteractiveLink}
                  title="Call Raise India Foundation helpline"
                >
                  {organization.phone}
                </a>
                <span className={styles.stripSubtext}>Mon – Sat, 10:00 AM – 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          2. MAIN FOOTER CONTENT (4 Clean Columns)
          ───────────────────────────────────────────────────────── */}
      <div className={styles.mainContentSection}>
        <div className={styles.footerContainer}>
          <div className={styles.mainGrid}>
            {/* COLUMN 1: RAISE INDIA FOUNDATION */}
            <div className={styles.brandColumn}>
              <Link href="/" className={styles.logoLink} aria-label="Raise India Foundation Home">
                <div className={styles.logoGlowHalo} aria-hidden="true" />
                <Image
                  src="/logo.png"
                  alt="Raise India Foundation Logo"
                  width={128}
                  height={130}
                  className={styles.logoImage}
                />
              </Link>
              <h2 className={styles.brandTitle}>RAISE INDIA FOUNDATION</h2>
              <p className={styles.brandDescription}>
                Empowering communities and building a better tomorrow through healthcare, education, and livelihood support.
              </p>
              <div className={styles.trustBadgeTag}>
                <span className={styles.trustDot} aria-hidden="true" />
                <span>Registered Public Charitable Trust</span>
              </div>
            </div>

            {/* COLUMN 2: ABOUT US */}
            <nav className={styles.navColumn} aria-label="About Us Navigation">
              <h3 className={styles.columnHeading}>ABOUT US</h3>
              <ul className={styles.linkList}>
                <li>
                  <Link href="/about" className={styles.footerLink}>
                    <span className={styles.chevron} aria-hidden="true">»</span>
                    <span>Who We Are</span>
                  </Link>
                </li>
                <li>
                  <Link href="/our-work" className={styles.footerLink}>
                    <span className={styles.chevron} aria-hidden="true">»</span>
                    <span>What We Do</span>
                  </Link>
                </li>
                <li>
                  <Link href="/about" className={styles.footerLink}>
                    <span className={styles.chevron} aria-hidden="true">»</span>
                    <span>Mission &amp; Vision</span>
                  </Link>
                </li>
                <li>
                  <Link href="/about" className={styles.footerLink}>
                    <span className={styles.chevron} aria-hidden="true">»</span>
                    <span>Director&apos;s Message</span>
                  </Link>
                </li>
                <li>
                  <Link href="/transparency" className={styles.footerLink}>
                    <span className={styles.chevron} aria-hidden="true">»</span>
                    <span>Legal &amp; Statutory</span>
                  </Link>
                </li>
                <li>
                  <Link href="/impact" className={styles.footerLink}>
                    <span className={styles.chevron} aria-hidden="true">»</span>
                    <span>Awards &amp; Recognition</span>
                  </Link>
                </li>
              </ul>
            </nav>

            {/* COLUMN 3: WHAT WE DO */}
            <nav className={styles.navColumn} aria-label="Programs & Initiatives">
              <h3 className={styles.columnHeading}>WHAT WE DO</h3>
              <ul className={styles.linkList}>
                <li>
                  <Link href="/our-work/education" className={styles.footerLink}>
                    <span className={styles.chevron} aria-hidden="true">»</span>
                    <span>Education (Shikshalaya)</span>
                  </Link>
                </li>
                <li>
                  <Link href="/our-work/healthcare" className={styles.footerLink}>
                    <span className={styles.chevron} aria-hidden="true">»</span>
                    <span>Mission Little Heartbeats</span>
                  </Link>
                </li>
                <li>
                  <Link href="/our-work/womens-empowerment" className={styles.footerLink}>
                    <span className={styles.chevron} aria-hidden="true">»</span>
                    <span>Women&apos;s Empowerment</span>
                  </Link>
                </li>
                <li>
                  <Link href="/our-work/menstrual-hygiene" className={styles.footerLink}>
                    <span className={styles.chevron} aria-hidden="true">»</span>
                    <span>Menstrual Hygiene (Chuppi Todo)</span>
                  </Link>
                </li>
                <li>
                  <Link href="/our-work/disaster-relief" className={styles.footerLink}>
                    <span className={styles.chevron} aria-hidden="true">»</span>
                    <span>Disaster &amp; Flood Relief</span>
                  </Link>
                </li>
                <li>
                  <Link href="/our-work/seasonal-projects" className={styles.footerLink}>
                    <span className={styles.chevron} aria-hidden="true">»</span>
                    <span>Seasonal &amp; Blanket Drives</span>
                  </Link>
                </li>
              </ul>
            </nav>

            {/* COLUMN 4: PAST EVENTS */}
            <nav className={styles.navColumn} aria-label="Documented Past Events">
              <h3 className={styles.columnHeading}>PAST EVENTS</h3>
              <ul className={styles.linkList}>
                <li>
                  <Link href="/our-work/past-events" className={styles.footerLink}>
                    <span className={styles.chevron} aria-hidden="true">»</span>
                    <span>Education Kit Distribution</span>
                  </Link>
                </li>
                <li>
                  <Link href="/our-work/past-events" className={styles.footerLink}>
                    <span className={styles.chevron} aria-hidden="true">»</span>
                    <span>Agra Shikshalaya Inaugural</span>
                  </Link>
                </li>
                <li>
                  <Link href="/our-work/past-events" className={styles.footerLink}>
                    <span className={styles.chevron} aria-hidden="true">»</span>
                    <span>Delhi Flood Relief Operations</span>
                  </Link>
                </li>
                <li>
                  <Link href="/our-work/past-events" className={styles.footerLink}>
                    <span className={styles.chevron} aria-hidden="true">»</span>
                    <span>Sweet Home Orphanage Visit</span>
                  </Link>
                </li>
                <li>
                  <Link href="/our-work/past-events" className={styles.footerLink}>
                    <span className={styles.chevron} aria-hidden="true">»</span>
                    <span>Dental &amp; Eye Checkup Camp</span>
                  </Link>
                </li>
                <li>
                  <Link href="/our-work/past-events" className={styles.footerLink}>
                    <span className={styles.chevron} aria-hidden="true">»</span>
                    <span>World Heart Day Celebration</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────
          3. ORGANIC FOOTER EDGE (Subtle transition to bottom bar)
          ───────────────────────────────────────────────────────── */}
      <div className={styles.organicWaveWrap} aria-hidden="true">
        <svg
          viewBox="0 0 1440 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className={styles.organicWaveSvg}
        >
          <path
            d="M0 12C240 22 480 4 720 14C960 24 1200 6 1440 16V24H0V12Z"
            fill="#32144D"
          />
        </svg>
      </div>

      {/* ─────────────────────────────────────────────────────────
          4. BOTTOM BAR (Compact Legal & Social Strip)
          ───────────────────────────────────────────────────────── */}
      <div className={styles.bottomBarSection}>
        <div className={styles.footerContainer}>
          <div className={styles.bottomBarInner}>
            {/* Left: Copyright */}
            <p className={styles.copyrightText}>
              &copy; {currentYear} Raise India Foundation. All Rights Reserved.
            </p>

            {/* Center: Legal Links */}
            <div className={styles.legalNavGroup}>
              <Link href="/blog" className={styles.legalLink}>
                Blog
              </Link>
              <span className={styles.legalDivider} aria-hidden="true">•</span>
              <Link href="/transparency" className={styles.legalLink}>
                Privacy Policy
              </Link>
              <span className={styles.legalDivider} aria-hidden="true">•</span>
              <Link href="/transparency" className={styles.legalLink}>
                Legal &amp; Statutory
              </Link>
              <span className={styles.legalDivider} aria-hidden="true">•</span>
              <Link href="/faq" className={styles.legalLink}>
                FAQ
              </Link>
            </div>

            {/* Right: Follow Us Social Icons + Back to Top */}
            <div className={styles.socialFollowGroup}>
              <span className={styles.followUsLabel}>Follow Us</span>
              <div className={styles.socialIcons}>
                {/* Facebook */}
                <a
                  href={organization.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                  aria-label="Facebook"
                  title="Follow on Facebook"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href={organization.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                  aria-label="Instagram"
                  title="Follow on Instagram"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href={organization.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                  aria-label="YouTube"
                  title="Follow on YouTube"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#32144D" />
                  </svg>
                </a>

                {/* Twitter / X */}
                <a
                  href={organization.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                  aria-label="X (formerly Twitter)"
                  title="Follow on X"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>

              {/* Compact Back to Top Button */}
              <button
                type="button"
                onClick={scrollToTop}
                className={styles.backToTopBtn}
                aria-label="Scroll back to top"
                title="Back to top"
              >
                <span className={styles.backToTopArrow} aria-hidden="true">↑</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
