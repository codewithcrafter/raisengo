import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container/Container';
import { FinalCTA } from '@/components/sections/FinalCTA/FinalCTA';
import { pastEvents } from '@/data/our-work-past-events';
import styles from './page.module.css';

import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Past Events & Community Drives | Raise India Foundation',
    description: 'Chronicle of community welfare drives, medical camps, educational distributions, and disaster relief events led by Raise India Foundation.',
    openGraph: {
      title: 'Past Events & Community Drives | Raise India Foundation',
      description: 'Chronicle of community welfare drives, medical camps, educational distributions, and disaster relief events led by Raise India Foundation.',
      images: ['/images/migrated/events/education-kit.webp'],
    },
  };
}

export default function PastEventsPage() {
  return (
    <main className={styles.main}>
      {/* Hero */}
      <section className={styles.hero}>
        <Container>
          <span className={styles.eyebrow}>ARCHIVE OF IMPACT</span>
          <h1 className={styles.title}>
            Past Events &amp; <span className={styles.highlightText}>Community Drives</span>
          </h1>
          <p className={styles.heroDesc}>
            Explore our documented history of on-ground interventions — from learning center inaugurations in Agra and Delhi to emergency Yamuna flood relief, heart health camps, and annual winter blanket drives.
          </p>
        </Container>
      </section>

      {/* Events Grid */}
      <section className={styles.eventsSection}>
        <Container>
          <div className={styles.eventsGrid}>
            {pastEvents.map((event) => (
              <article key={event.id} className={styles.eventCard}>
                <Link href={`/our-work/past-events/${event.slug}`} className={styles.imageWrapper}>
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={styles.eventImage}
                  />
                  {event.date && <span className={styles.metaBadge}>{event.date}</span>}
                </Link>
                <div className={styles.cardBody}>
                  {event.location && (
                    <div className={styles.locationText}>
                      <span>📍</span> {event.location}
                    </div>
                  )}
                  <Link href={`/our-work/past-events/${event.slug}`} style={{ textDecoration: 'none' }}>
                    <h2 className={styles.eventTitle}>{event.title}</h2>
                  </Link>
                  <p className={styles.eventDesc}>{event.description}</p>

                  {event.highlights && event.highlights.length > 0 && (
                    <ul className={styles.highlightsList}>
                      {event.highlights.map((item, idx) => (
                        <li key={idx} className={styles.highlightItem}>
                          <span className={styles.bullet}>•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div style={{ marginTop: '20px' }}>
                    <Link href={`/our-work/past-events/${event.slug}`} style={{ fontSize: '14px', fontWeight: 600, color: '#814CBA', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      View Details <span>→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <Link
              href="/our-work"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 32px',
                background: '#FAF6FB',
                color: '#2D1145',
                borderRadius: '999px',
                fontWeight: 700,
                fontSize: '15px',
                textDecoration: 'none',
                border: '1px solid rgba(45, 17, 69, 0.12)',
              }}
            >
              ← Back to Our Work Overview
            </Link>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </main>
  );
}
