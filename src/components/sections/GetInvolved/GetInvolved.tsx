'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container/Container';
import { FloatingAccents } from '@/components/ui/FloatingAccents/FloatingAccents';
import styles from './GetInvolved.module.css';

export const GetInvolved: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.revealVisible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(`.${styles.revealHidden}`);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="involved" className={styles.involved} ref={sectionRef}>
      <FloatingAccents variant="hearts" />
      <Container>
        <div className={styles.sectionHeader}>
          <div className={`${styles.headerContent} ${styles.revealHidden}`}>
            <span className={styles.eyebrow}>Get Involved</span>
            <h2 className={styles.title}>Your Way to Make<br/>a Difference.</h2>
            <p className={styles.description}>
              Whether you give your time, resources, or expertise, every contribution helps move communities forward.
            </p>
          </div>
          <div className={`${styles.headerStatement} ${styles.revealHidden}`}>
            <p>Small actions.<br/>Shared purpose.<br/>Real change.</p>
          </div>
        </div>

        <div className={styles.grid}>
          {/* Donate Card (Featured/Large) */}
          <article className={`${styles.donateCard} interaction-card ${styles.revealHidden}`}>
            <Link href="#donate" className={styles.cardLink}>
              <div className={`${styles.imageBackgroundWrapper} interaction-image-wrapper`}>
                <Image 
                  src="/images/get-involved/donate.jpg" 
                  alt="Children smiling in a community program" 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className={`${styles.image} interaction-image`} 
                />
                <div className={styles.gradientOverlay}></div>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardNumber}>01</span>
                  <span className={styles.cardTitle}>DONATE</span>
                </div>
                <h3 className={styles.cardHighlight}>Give resources.</h3>
                <p className={styles.cardDescription}>
                  Your financial support allows us to fund education, healthcare, and livelihood programs.
                </p>
                <div className={styles.primaryCta}>
                  MAKE A DONATION <span className={`${styles.arrow} interaction-arrow`}>→</span>
                </div>
              </div>
              <div className={styles.decorativeArc}></div>
            </Link>
          </article>

          {/* Volunteer Card */}
          <article className={`${styles.standardCard} ${styles.volunteerCard} interaction-card ${styles.revealHidden}`}>
            <Link href="#volunteer" className={styles.cardLink}>
              <div className={`${styles.imageWrapper} interaction-image-wrapper`}>
                <Image 
                  src="/images/get-involved/volunteer.jpg" 
                  alt="Volunteers interacting with community members" 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className={`${styles.image} interaction-image`} 
                />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardNumber}>02</span>
                  <span className={styles.cardTitle}>VOLUNTEER</span>
                </div>
                <h3 className={styles.cardHighlight}>Give your time.</h3>
                <p className={styles.cardDescription}>
                  Give your time and skills to help us on the ground. Join our community of dedicated volunteers.
                </p>
                <div className={styles.editorialCta}>
                  JOIN OUR TEAM <span className={`${styles.arrow} interaction-arrow`}>→</span>
                </div>
              </div>
            </Link>
          </article>

          {/* Partner Card */}
          <article className={`${styles.standardCard} ${styles.partnerCard} interaction-card ${styles.revealHidden}`}>
            <Link href="#partner" className={styles.cardLink}>
              <div className={`${styles.imageWrapper} interaction-image-wrapper`}>
                <Image 
                  src="/images/get-involved/partner.jpg" 
                  alt="People collaborating in a workshop" 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className={`${styles.image} interaction-image`} 
                />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardNumber}>03</span>
                  <span className={styles.cardTitle}>PARTNER</span>
                </div>
                <h3 className={styles.cardHighlight}>Build together.</h3>
                <p className={styles.cardDescription}>
                  We collaborate with corporations, foundations, and other NGOs to amplify our impact.
                </p>
                <div className={styles.editorialCta}>
                  BECOME A PARTNER <span className={`${styles.arrow} interaction-arrow`}>→</span>
                </div>
              </div>
            </Link>
          </article>
        </div>
      </Container>
    </section>
  );
};
