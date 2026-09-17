import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container/Container';
import { FinalCTA } from '@/components/sections/FinalCTA/FinalCTA';
import { seasonalProjects } from '@/lib/content-data';
import styles from './page.module.css';

export const metadata = {
  title: 'Seasonal Projects & Drives | Raise India Foundation',
  description: 'Special seasonal relief campaigns: Project Tapan heat relief, Kambal Udhao winter relief, Khushiyon Ki Potli, and Yamuna flood relief.',
};

export default function SeasonalProjectsPage() {
  return (
    <main className={styles.main}>
      {/* Hero */}
      <section className={styles.hero}>
        <Container>
          <span className={styles.eyebrow}>SEASONAL DRIVES</span>
          <h1 className={styles.title}>
            Seasonal Projects &amp; <span className={styles.highlightText}>Rapid Relief</span>
          </h1>
          <p className={styles.heroDesc}>
            From scorching 49°C heatwaves in summer to sub-zero winter pavements and monsoon river inundation, Raise India Foundation organizes proactive survival interventions designed for seasonal vulnerability.
          </p>
        </Container>
      </section>

      {/* Projects Grid */}
      <section className={styles.projectsSection}>
        <Container>
          <div className={styles.grid}>
            {seasonalProjects.map((project) => (
              <article key={project.id} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 960px) 100vw, 50vw"
                    className={styles.cardImage}
                  />
                  {project.season && (
                    <span className={styles.seasonBadge}>{project.season}</span>
                  )}
                </div>
                <div className={styles.cardBody}>
                  <h2 className={styles.cardTitle}>{project.title}</h2>
                  <p className={styles.cardDesc}>{project.fullDescription}</p>
                  <div className={styles.impactBadge}>
                    <span>Documented Outcome:</span> {project.impactMetric}
                  </div>
                  <Link href={project.ctaLink || '/donate'} className={styles.ctaBtn}>
                    <span>{project.ctaText || 'Support This Drive'}</span>
                    <span>→</span>
                  </Link>
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
