import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container/Container';
import { FinalCTA } from '@/components/sections/FinalCTA/FinalCTA';
import { initiatives } from '@/lib/content-data';
import styles from './page.module.css';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return initiatives.map((init) => ({
    slug: init.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const initiative = initiatives.find((i) => i.slug === slug);

  if (!initiative) {
    return {
      title: 'Program Not Found | Raise India Foundation',
    };
  }

  return {
    title: `${initiative.title} | Raise India Foundation`,
    description: initiative.shortDescription,
  };
}

export default async function InitiativeDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const initiative = initiatives.find((i) => i.slug === slug);

  if (!initiative) {
    notFound();
  }

  const paragraphs = initiative.fullDescription.split('\n\n').filter(Boolean);
  const otherInitiatives = initiatives.filter((i) => i.slug !== slug);

  return (
    <main className={styles.main}>
      {/* Hero Banner */}
      <section className={styles.hero}>
        <Container>
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/our-work">Our Work</Link>
            <span>/</span>
            <span>{initiative.category}</span>
          </div>

          <div className={styles.heroGrid}>
            <div>
              <span className={styles.categoryBadge}>{initiative.category}</span>
              <h1 className={styles.title}>{initiative.title}</h1>
              <p className={styles.shortDesc}>{initiative.shortDescription}</p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link href="/donate" className={styles.donateBtn}>
                  <span>Support This Initiative</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </Link>
                <Link
                  href="/our-work"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '14px 24px',
                    background: '#FFFFFF',
                    color: '#2D1145',
                    border: '1px solid rgba(45, 17, 69, 0.15)',
                    borderRadius: '999px',
                    fontWeight: 700,
                    fontSize: '14px',
                    textDecoration: 'none',
                  }}
                >
                  ← All Programs
                </Link>
              </div>
            </div>

            <div className={styles.heroImageWrapper}>
              <Image
                src={initiative.image}
                alt={initiative.title}
                fill
                priority
                sizes="(max-width: 960px) 100vw, 50vw"
                className={styles.heroImage}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content & Sidebar */}
      <section className={styles.contentSection}>
        <Container>
          <div className={styles.contentGrid}>
            {/* Story Content */}
            <div className={styles.storyContent}>
              <h2 className={styles.sectionHeading}>Program Overview &amp; Field Reality</h2>
              {paragraphs.map((p, idx) => (
                <p key={idx} className={styles.paragraph}>
                  {p}
                </p>
              ))}

              {/* Key Highlights */}
              <div className={styles.highlightsBox}>
                <h3 className={styles.highlightsTitle}>Key Program Highlights &amp; Execution</h3>
                <ul className={styles.highlightsList}>
                  {initiative.keyHighlights.map((highlight, idx) => (
                    <li key={idx} className={styles.highlightItem}>
                      <span className={styles.highlightIcon}>✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <aside className={styles.sidebar}>
              {/* Impact Card */}
              <div className={styles.impactCard}>
                <span className={styles.impactLabel}>Documented Impact</span>
                <h3 className={styles.impactMetric}>{initiative.impact}</h3>
                {initiative.partner && (
                  <div className={styles.partnerBadge}>
                    🤝 {initiative.partner}
                  </div>
                )}
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#F1E6F5', marginBottom: '24px' }}>
                  Every donation directly funds supplies, emergency medicines, learning materials, and on-ground field deployment.
                </p>
                <Link href="/donate" className={styles.donateBtn}>
                  Make a Contribution →
                </Link>
              </div>

              {/* Other Initiatives */}
              <div className={styles.otherInitiativesCard}>
                <h3 className={styles.otherTitle}>Explore Other Initiatives</h3>
                <ul className={styles.otherList}>
                  {otherInitiatives.slice(0, 5).map((other) => (
                    <li key={other.id}>
                      <Link href={`/our-work/${other.slug}`} className={styles.otherLink}>
                        <span>{other.title}</span>
                        <span style={{ color: '#E0679D' }}>→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </main>
  );
}
