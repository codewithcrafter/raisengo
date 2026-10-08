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
