"use client";

import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container/Container';
import { useScrollReveal } from '@/lib/useScrollReveal';
import styles from './JourneyTimeline.module.css';

export const JourneyTimeline: React.FC = () => {
  const [sectionRef, isVisible] = useScrollReveal<HTMLElement>({ threshold: 0.1, triggerOnce: true });

  return (
    <section 
      id="journey" 
      ref={sectionRef} 
      className={`${styles.journeySection} ${isVisible ? styles.revealed : ''}`}
    >
      <Container className={styles.container}>
        
        {/* Editorial Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.sectionEyebrow}>OUR JOURNEY</span>
          <h2 className={styles.journeyTitle}>
            A JOURNEY OF HOPE
          </h2>
          <p className={styles.journeySubtitle}>
            A story of steady action, community partnership and measurable impact.
          </p>
        </div>

        {/* Story Rows Container */}
        <div className={styles.journeyList}>
          
          {/* Subtle Vertical Connector Rule */}
          <div className={styles.verticalRule} aria-hidden="true"></div>

          {/* ══════════════════════════════════════════════
              ROW 01: 2014
          ══════════════════════════════════════════════ */}
          <div className={`${styles.journeyRow} ${styles.rowLeftText}`}>
            
            <div className={styles.rowTextContent}>
              <div className={styles.rowMeta}>
                <span className={styles.chapterNum}>01</span>
                <span className={styles.chapterYear}>2014</span>
              </div>
              <h3 className={styles.rowTitle}>Foundation Established</h3>
              <p className={styles.rowDesc}>
                Established on 22nd December 2014 by Mr. Jai Pal Singh Malik and Ms. Shipra Chauhan. Began direct child education support through Shikshalaya and winter street relief through Kambal Uddhao.
              </p>
            </div>
            
            <div className={styles.rowImageContent}>
              <div className={styles.imageBox}>
                <Image 
                  src="/images/programs/education.jpg" 
                  alt="Foundation Established" 
                  fill 
                  className={styles.editorialImage} 
                  sizes="(max-width: 768px) 100vw, 580px"
                />
              </div>
            </div>
            
          </div>

          <div className={styles.rowDivider} aria-hidden="true"></div>

          {/* ══════════════════════════════════════════════
              ROW 02: 2021
          ══════════════════════════════════════════════ */}
          <div className={`${styles.journeyRow} ${styles.rowRightText}`}>
            
            <div className={styles.rowImageContent}>
              <div className={styles.imageBox}>
                <Image 
                  src="/images/migrated/events/flood-relief.jpg" 
                  alt="Pandemic Relief" 
                  fill 
                  className={styles.editorialImage} 
                  sizes="(max-width: 768px) 100vw, 580px"
                />
              </div>
            </div>
            
            <div className={styles.rowTextContent}>
              <div className={styles.rowMeta}>
                <span className={styles.chapterNum}>02</span>
                <span className={styles.chapterYear}>2021</span>
              </div>
              <h3 className={styles.rowTitle}>Pandemic Relief &amp; Honors</h3>
              <p className={styles.rowDesc}>
                Mounted extensive frontline relief: 25,000+ dry ration kits, cooked meals for daily wagers, and Chuppi Todo menstrual hygiene. Conferred with the Covid Warriors Award by the Delhi Government.
              </p>
            </div>
            
          </div>

          <div className={styles.rowDivider} aria-hidden="true"></div>

          {/* ══════════════════════════════════════════════
              ROW 03: TODAY
          ══════════════════════════════════════════════ */}
          <div className={`${styles.journeyRow} ${styles.rowLeftText} ${styles.rowToday}`}>
            
            <div className={styles.rowTextContent}>
              <div className={styles.rowMeta}>
                <span className={styles.chapterNum}>03</span>
                <span className={styles.chapterYearToday}>TODAY</span>
              </div>
              <h3 className={styles.rowTitleToday}>
                <span className={styles.todayHighlightNumber}>1.83M+</span><br />
                Lives Uplifted
              </h3>
              <p className={styles.rowDesc}>
                Over 1.83 million lives uplifted across Delhi, UP, MP, and Bihar. Expanding Techshaala digital labs with Konverge Technologies and life-saving pediatric surgeries with Fortis Hospital.
              </p>
            </div>
            
            <div className={styles.rowImageContent}>
              <div className={styles.imageBox}>
                <Image 
                  src="/images/about-community.jpg" 
                  alt="Current Impact" 
                  fill 
                  className={styles.editorialImage} 
                  sizes="(max-width: 768px) 100vw, 580px"
                />
              </div>
            </div>
            
          </div>

        </div>

      </Container>
    </section>
  );
};
