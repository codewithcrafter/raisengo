import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { 
  Heart, 
  ArrowRight, 
  ShieldCheck, 
  Building2, 
  CheckCircle2, 
  Users
} from 'lucide-react';
import { DonationExperience } from './DonationExperience';
import { BankTransferCards } from './BankTransferCards';
import { QrSection } from './QrSection';
import { RevealOnScroll } from '@/components/ui/Animation/RevealOnScroll';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Donate Now | Raise India Foundation',
  description: 'Support verified campaigns across child education, life-saving heart surgeries, and women empowerment. All donations eligible for 50% Tax Exemption under Section 80G.',
};

export default function DonatePage() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        {/* ─────────────────────────────────────────────────────────────
            1. DONATION HERO (EDITORIAL 2-COLUMN BALANCED LAYOUT)
            ───────────────────────────────────────────────────────────── */}
        <section className={styles.heroSection} aria-labelledby="donation-hero-title">
          <div className={styles.heroGrid}>
            {/* Left Column: Eyebrow, Headline, Supporting Text & Highlights */}
            <RevealOnScroll delay={0} className={styles.heroContent}>
              <div className={styles.eyebrow}>
                <Heart className={`w-3.5 h-3.5 ${styles.eyebrowHeart}`} />
                <span>MAKE A DIFFERENCE</span>
              </div>

              <h1 id="donation-hero-title" className={styles.heroTitle}>
                Your Kindness Can <br />
                <span className={styles.heroTitleAccent}>Change a Life</span>
              </h1>

              <p className={styles.heroDescription}>
                Every contribution directly powers critical child heart surgeries, non-formal learning centers for first-generation learners, and essential menstrual hygiene dignity kits across underserved communities in India.
              </p>

              <div className={styles.heroActions}>
                <a href="#donation-form" className={styles.heroPrimaryBtn}>
                  <span>Sponsor Now</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </a>
                <a href="#bank-transfer" className={styles.heroSecondaryBtn}>
                  <span>Direct Bank Transfer</span>
                </a>
              </div>

              {/* Small Benefit Highlights */}
              <div className={styles.heroBenefitHighlights}>
                <div className={styles.benefitItem}>
                  <ShieldCheck className={`w-4 h-4 ${styles.benefitIcon}`} />
                  <span>50% Tax Exemption u/s 80G</span>
                </div>
                <div className={styles.benefitItem}>
                  <Building2 className={`w-4 h-4 ${styles.benefitIcon}`} />
                  <span>Trust Reg. 274409</span>
                </div>
                <div className={styles.benefitItem}>
                  <CheckCircle2 className={`w-4 h-4 ${styles.benefitIcon}`} />
                  <span>100% Direct Impact</span>
                </div>
              </div>
            </RevealOnScroll>

            {/* Right Column: Authentic Outreach Photograph */}
            <RevealOnScroll delay={120} className={styles.heroImageCol}>
              <div className={styles.heroImageFrame}>
                <Image
                  src="/images/about-community.jpg"
                  alt="Raise India Foundation community education and healthcare outreach"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className={styles.heroImage}
                />
                <div className={styles.heroImageOverlay} />
                <div className={styles.heroImageBadge}>
                  <div className={styles.heroImageBadgeIcon}>
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <div className={styles.heroImageBadgeTitle}>Grassroots Action Since 2014</div>
                    <div className={styles.heroImageBadgeSub}>Over 18,050 students &amp; families supported</div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            2. DONATION FORM (DYNAMIC CAMPAIGNS & BALANCED 2-COLUMN PANEL)
            ───────────────────────────────────────────────────────────── */}
        <RevealOnScroll delay={80}>
          <Suspense fallback={
            <div className="w-full py-16 text-center text-[#665D6C]">
              Loading sponsorship portal...
            </div>
          }>
            <DonationExperience />
          </Suspense>
        </RevealOnScroll>

        {/* ─────────────────────────────────────────────────────────────
            3. DIRECT BANK TRANSFER (THREE EQUAL-WIDTH BANK CARDS)
            ───────────────────────────────────────────────────────────── */}
        <RevealOnScroll delay={80}>
          <BankTransferCards />
        </RevealOnScroll>

        {/* ─────────────────────────────────────────────────────────────
            4. SCAN & PAY USING QR CODE (AUTHENTIC UPI POSTERS)
            ───────────────────────────────────────────────────────────── */}
        <RevealOnScroll delay={80}>
          <QrSection />
        </RevealOnScroll>
      </div>
    </div>
  );
}
