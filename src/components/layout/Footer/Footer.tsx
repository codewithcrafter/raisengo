"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container/Container';
import { useScrollReveal } from '@/lib/useScrollReveal';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  const [gridRef, gridVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.1, triggerOnce: true });
  const [bottomRef, bottomVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.1, triggerOnce: true });

  return (
    <footer className={styles.footer} aria-label="Site Footer">
      {/* Background Arc Decoration 1 (Top Right) */}
      <div className={styles.bgArcDecorationTop} aria-hidden="true">
        <svg viewBox="0 0 1000 650" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M50 550C200 400 450 350 750 500C850 550 950 480 900 380C820 220 580 120 350 200C120 280 -20 420 50 550Z" 
            stroke="url(#footerArcGrad1)" 
            strokeWidth="2.5" 
            strokeDasharray="6 6"
          />
          <defs>
            <linearGradient id="footerArcGrad1" x1="0" y1="0" x2="1000" y2="650" gradientUnits="userSpaceOnUse">
              <stop stopColor="#E0679D" stopOpacity="0.22" />
              <stop offset="0.5" stopColor="#814CBA" stopOpacity="0.12" />
              <stop offset="1" stopColor="#E0679D" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Background Arc Decoration 2 (Bottom Left) */}
      <div className={styles.bgArcDecorationBottom} aria-hidden="true">
        <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="400" r="350" stroke="url(#footerArcGrad2)" strokeWidth="2" strokeDasharray="8 8" />
          <defs>
            <linearGradient id="footerArcGrad2" x1="0" y1="0" x2="800" y2="600" gradientUnits="userSpaceOnUse">
              <stop stopColor="#814CBA" stopOpacity="0.15" />
              <stop offset="1" stopColor="#E0679D" stopOpacity="0.03" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <Container className={styles.footerContainer}>
        {/* Main Footer Navigation + Organization Contact */}
        <div 
          ref={gridRef}
          className={`${styles.mainGrid} ${gridVisible ? styles.revealActive : styles.revealHidden}`}
        >
          {/* Column 1: Logo + Mission */}
          <div className={styles.brandColumn}>
            <Link href="/" className={styles.logoBadge} aria-label="Raise India Foundation Home">
              <Image 
                src="/logo.png" 
                alt="Raise India Foundation Logo" 
                width={160} 
                height={56} 
                className={styles.logoImage} 
              />
            </Link>
            <p className={styles.missionText}>
              Empowering communities and building a better tomorrow through healthcare, education, and livelihood support.
            </p>
            <div className={styles.brandMotif} aria-hidden="true">
              <span className={styles.motifLine} />
            </div>
          </div>

          {/* Column 2: Explore */}
          <nav className={styles.navColumn} aria-label="Explore Navigation">
            <h3 className={styles.columnTitle}>EXPLORE</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="/" className={styles.navLink}>
                  <span>Home</span>
                  <span className={styles.linkArrow}>→</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className={styles.navLink}>
                  <span>About Us</span>
                  <span className={styles.linkArrow}>→</span>
                </Link>
              </li>
              <li>
                <Link href="/our-work" className={styles.navLink}>
                  <span>Our Work</span>
                  <span className={styles.linkArrow}>→</span>
                </Link>
              </li>
              <li>
                <Link href="/campaigns" className={styles.navLink}>
                  <span>Campaigns</span>
                  <span className={styles.linkArrow}>→</span>
                </Link>
              </li>
              <li>
                <Link href="/impact" className={styles.navLink}>
                  <span>Impact</span>
                  <span className={styles.linkArrow}>→</span>
                </Link>
              </li>
              <li>
                <Link href="/stories" className={styles.navLink}>
                  <span>Stories</span>
                  <span className={styles.linkArrow}>→</span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Column 3: Get Involved */}
          <nav className={styles.navColumn} aria-label="Get Involved Navigation">
            <h3 className={styles.columnTitle}>GET INVOLVED</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="/donate" className={styles.navLink}>
                  <span>Donate</span>
                  <span className={styles.linkArrow}>→</span>
                </Link>
              </li>
              <li>
                <Link href="/volunteer" className={styles.navLink}>
                  <span>Volunteer</span>
                  <span className={styles.linkArrow}>→</span>
                </Link>
              </li>
              <li>
                <Link href="/partners" className={styles.navLink}>
                  <span>Partner With Us</span>
                  <span className={styles.linkArrow}>→</span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Column 4: Contact */}
          <div className={styles.navColumn}>
            <h3 className={styles.columnTitle}>CONTACT</h3>
            <ul className={styles.contactList}>
              <li>
                <a href="mailto:care@raiseindiafoundation.org" className={styles.contactLink}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span>care@raiseindiafoundation.org</span>
                </a>
              </li>
              <li>
                <a href="tel:+911141254474" className={styles.contactLink}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>+91-11-41254474</span>
                </a>
              </li>
              <li>
                <div className={styles.contactItem}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>B-16, 3rd Floor, Ramdutt Enclave, Uttam Nagar, New Delhi 110059</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className={styles.divider} aria-hidden="true" />

        {/* Bottom Legal & Copyright Bar */}
        <div 
          ref={bottomRef}
          className={`${styles.bottomBar} ${bottomVisible ? styles.revealActive : styles.revealHidden}`}
        >
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Raise India Foundation. All rights reserved.
          </p>
          <div className={styles.legalLinks}>
            <Link href="/transparency" className={styles.legalLink}>
              Transparency & Policies
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};




