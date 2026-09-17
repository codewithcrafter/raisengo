import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container/Container';
import { FinalCTA } from '@/components/sections/FinalCTA/FinalCTA';
import { ongoingProjects } from '@/lib/content-data';
import styles from './page.module.css';

export const metadata = {
  title: 'Ongoing Projects | Raise India Foundation',
  description: 'Active continuous programs by Raise India Foundation: Shikshalaya, Techshaala, Mission Little Heartbeats, and Chuppi Todo.',
};

export default function OngoingProjectsPage() {
  return (
    <main className={styles.main}>
      {/* Hero */}
      <section className={styles.hero}>
        <Container>
          <span className={styles.eyebrow}>ACTIVE PROGRAMS</span>
          <h1 className={styles.title}>
            Ongoing <span className={styles.highlightText}>Projects &amp; Centers</span>
          </h1>
          <p className={styles.heroDesc}>
            These long-term grassroots programs run year-round across Delhi, Agra, and surrounding areas to deliver sustained improvements in children's education, pediatric cardiac surgery, digital skills, and menstrual dignity.
          </p>
        </Container>
      </section>

      {/* Projects List */}
      <section className={styles.projectsSection}>
        <Container>
          <div className={styles.projectList}>
            {ongoingProjects.map((project, idx) => (
              <div
                key={project.id}
                className={`${styles.projectCard} ${idx % 2 !== 0 ? styles.projectCardReverse : ''}`}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 960px) 100vw, 50vw"
                    className={styles.projectImage}
                  />
                </div>
                <div className={styles.cardContent}>
                  {project.partner && (
                    <span className={styles.badgePartner}>
                      🤝 {project.partner}
                    </span>
                  )}
                  <h2 className={styles.projectTitle}>{project.title}</h2>
                  <p className={styles.projectDesc}>{project.fullDescription}</p>
                  <div className={styles.impactBadge}>
                    <span>Documented Metric:</span> {project.impactMetric}
                  </div>
                  <Link href={project.ctaLink || '/donate'} className={styles.ctaBtn}>
                    <span>{project.ctaText || 'Learn More'}</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
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
