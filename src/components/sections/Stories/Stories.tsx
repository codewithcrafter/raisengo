"use client";

import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container/Container';
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading';
import { useScrollReveal } from '@/lib/useScrollReveal';
import interactionStyles from '@/lib/interactions.module.css';
import styles from './Stories.module.css';

const storiesData = [
  {
    category: 'Healthcare',
    title: "Aarvi's Heart Beats Strong Again",
    excerpt: 'Diagnosed with complex congenital heart disease, little Aarvi underwent corrective surgery at Fortis Hospital funded by Mission Little Heartbeats.',
    image: '/images/migrated/events/world-heart-day.webp',
    number: '01',
    link: '/stories/aarvis-little-heart-beats-strong-again',
  },
  {
    category: 'Inclusive Education',
    title: 'Satyam: Hope & Love at Shikshalaya',
    excerpt: 'Overcoming cognitive hurdles and underlying health complications, Satyam found inclusive learning and support at our Shikshalaya center.',
    image: '/images/migrated/events/education-kit.webp',
    number: '02',
    link: '/stories/satyam-a-child-with-down-syndrome',
  },
  {
    category: 'Healthcare',
    title: "Mitanshu's New Heartbeat",
    excerpt: 'Young Mitanshu celebrated his 3rd birthday with a fully repaired heart after life-saving open-heart surgery sponsored by Raise India Foundation.',
    image: '/images/migrated/events/world-heart-day.webp',
    number: '03',
    link: '/stories/mitanshus-new-heartbeat',
  },
];

export const Stories: React.FC = () => {
  const [sectionRef, isVisible] = useScrollReveal<HTMLElement>({ threshold: 0.1 });

  return (
    <section id="stories" ref={sectionRef} className={`${styles.stories} ${interactionStyles.revealUp} ${isVisible ? interactionStyles.revealed : ''}`}>
      <Container className={styles.container}>
        <SectionHeading 
          eyebrow="REAL STORIES"
          title="Lives Transformed, Hearts Healed"
          description="Read authentic stories of medical miracles, resilience, and hope from the children and families we serve."
          className={styles.heading}
        />
        
        <div className={styles.grid}>
          {/* Featured Story */}
          <div className={`${styles.card} ${styles.featured} ${interactionStyles.cardHover}`}>
            <div className={`${styles.imageWrapper} ${interactionStyles.cardImageContainer}`}>
              <Image 
                src="/images/migrated/events/world-heart-day.webp"
                alt="Baby Shaurya surgery recovery under Mission Little Heartbeats"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className={`${styles.image} ${interactionStyles.cardImage}`}
              />
              <div className={styles.featuredBadge}>FEATURED RECOVERY</div>
              <div className={styles.imageOverlay}>
                <span className={styles.imagePill}>PEDIATRIC CARDIAC CARE</span>
              </div>
            </div>
            <div className={styles.cardContent}>
              <span className={styles.category}>Mission Little Heartbeats</span>
              <h3 className={styles.cardTitle}>Baby Shaurya&apos;s Heart Beats Strong Again</h3>
              <p className={styles.cardExcerpt}>
                Born with a life-threatening Ventricular Septal Defect into an impoverished family, baby Shaurya needed urgent open-heart surgery. Through Mission Little Heartbeats and Fortis Hospital, his procedure was fully sponsored. Today, his heart beats strong and healthy.
              </p>
              <a href="/stories/baby-shauryas-heart-beats-strong-again" className={styles.readMore}>
                Read Full Story <span className={`${styles.arrow} ${interactionStyles.cardArrow}`}>&rarr;</span>
              </a>
            </div>
          </div>
          
          {/* Smaller Stories Grid */}
          <div className={`${styles.smallGrid} ${interactionStyles.staggerContainer}`}>
            {storiesData.map((story, idx) => (
              <div key={idx} className={`${styles.smallCard} ${interactionStyles.cardHover}`} style={{ animationDelay: `${(idx + 1) * 80}ms` }}>
                <div className={`${styles.smallImageWrapper} ${interactionStyles.cardImageContainer}`}>
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className={`${styles.image} ${interactionStyles.cardImage}`}
                  />
                </div>
                <div className={styles.smallCardContent}>
                  <div className={styles.categoryWrapper}>
                    <span className={styles.category}>{story.category}</span>
                    <span className={styles.storyNumber}>{story.number}</span>
                  </div>
                  <h4 className={styles.smallCardTitle}>{story.title}</h4>
                  <p className={styles.smallCardExcerpt}>{story.excerpt}</p>
                  <a href={story.link} className={styles.readMore}>
                    Read Story <span className={`${styles.arrow} ${interactionStyles.cardArrow}`}>&rarr;</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
