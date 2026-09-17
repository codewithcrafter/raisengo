'use client';

import React from 'react';
import Image from 'next/image';
import { awards } from '@/lib/content-data';
import styles from './AwardsRecognition.module.css';

export const AwardsRecognition: React.FC = () => {
  return (
    <section id="awards-recognition" className={styles.section} aria-label="Awards and Recognition">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.eyebrowWrapper}>
            <span className={styles.accentLine} />
            <span className={styles.eyebrow}>HONORS &amp; RECOGNITION</span>
            <span className={styles.accentLine} />
          </div>
          <h2 className={styles.title}>
            Recognized for <span className={styles.highlightText}>Excellence &amp; Integrity</span>
          </h2>
          <p className={styles.subtitle}>
            Over 11 years of grassroots dedication honored by the Government of Delhi, Member of Parliament, international forums, medical institutions, and corporate safety councils.
          </p>
        </div>

        <div className={styles.grid}>
          {awards.map((award) => (
            <article key={award.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={award.image}
                  alt={award.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 33vw"
                  className={styles.awardImage}
                />
                {award.year && <span className={styles.badgeYear}>{award.year}</span>}
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.awardTitle}>{award.title}</h3>
                <p className={styles.awardedBy}>{award.awardedBy}</p>
                <p className={styles.awardDesc}>{award.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
