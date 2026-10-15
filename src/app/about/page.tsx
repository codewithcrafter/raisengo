import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container/Container';
import { AboutSubNav } from '@/components/sections/About/AboutSubNav';
import { WhoWeAre } from '@/components/sections/About/WhoWeAre';
import { WhatWeDo } from '@/components/sections/About/WhatWeDo';
import { MissionVision } from '@/components/sections/MissionVision/MissionVision';
import { DirectorsMessage } from '@/components/sections/About/DirectorsMessage';
import { LegalStatutory } from '@/components/sections/About/LegalStatutory';
import { AwardsRecognition } from '@/components/sections/About/AwardsRecognition';
import { FinalCTA } from '@/components/sections/FinalCTA/FinalCTA';
import styles from './page.module.css';

export const metadata = {
  title: 'About Us | Raise India Foundation',
  description: 'Learn about our story, mission, vision, program impact, leadership, and statutory transparency at Raise India Foundation.',
};

export default function AboutPage() {
  return (
    <main className={styles.main}>
      {/* 1. ABOUT HERO */}
      <section className={styles.heroSection}>
        <Container className={styles.aboutContainer}>
          <div className={styles.heroGrid}>
            {/* Left Content */}
            <div className={styles.heroLeft}>
              <span className={styles.eyebrow}>OUR STORY</span>
              <h1 className={styles.heroTitle}>
                Raise India Foundation: NGO for Heart Surgery,<br />
                Education & Women's Empowerment in India <br />
                <span className={styles.highlightText}>choose to act.</span>
              </h1>
              <p className={styles.heroDescription}>
                Since 2014, Raise India Foundation has worked across Delhi, Uttar Pradesh, Bihar, and Madhya Pradesh,
                supporting children, women, and underserved communities through education, healthcare, livelihood support,
                relief initiatives, and community development programmes.

                What began with volunteers providing informal educational support to children in underserved communities has
                grown into an organisation working across multiple areas of community development. Today, the Foundation's
                work includes free education, menstrual hygiene, women's empowerment, healthcare, disaster relief, winter and
                summer relief, food security, and other community-based initiatives.

                One of its current priorities is Mission Little Heartbeats, through which Raise India Foundation supports corrective
                cardiac surgery for children whose families cannot afford treatment, in partnership with Fortis Hospital, Manesar.
                Fourteen children have already received cardiac surgeries through the initiative.
                Raise India Foundation is registered under 80G and 12A, with its registration and financial details available for
                donors and partners seeking greater transparency about the organisation and its work
              </p>
              <div className={styles.heroActions}>
                <Link href="#who-we-are" className={styles.btnPrimary}>
                  <span>OUR STORY &amp; WORK</span>
                  <svg className={styles.btnArrow} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>

                <Link href="/get-involved" className={styles.btnSecondary}>
                  <span>GET INVOLVED</span>
                  <svg className={styles.btnArrow} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className={styles.heroRight}>
              <div className={styles.heroImageWrapper}>
                <Image
                  src="/images/about-community.jpg"
                  alt="Volunteers and children learning together in a community center"
                  width={640}
                  height={520}
                  className={styles.heroImage}
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. STICKY INTERNAL ABOUT SUB-NAVIGATION */}
      <AboutSubNav />

      {/* 3. WHO WE ARE */}
      <WhoWeAre />

      {/* 4. WHAT WE DO */}
      <WhatWeDo />

      {/* 5. OUR MISSION & VISION */}
      <MissionVision />

      {/* 6. DIRECTOR'S MESSAGE */}
      <DirectorsMessage />

      {/* 7. LEGAL & STATUTORY */}
      <LegalStatutory />

      {/* 8. AWARDS & RECOGNITIONS */}
      <AwardsRecognition />

      {/* 9. FINAL CTA COMPONENT */}
      <FinalCTA />
    </main>
  );
}
