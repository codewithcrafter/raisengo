import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container/Container';
import { FinalCTA } from '@/components/sections/FinalCTA/FinalCTA';
import { stories } from '@/lib/content-data';
import styles from './page.module.css';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return stories.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const story = stories.find((s) => s.slug === slug);

  if (!story) {
    return {
      title: 'Story Not Found | Raise India Foundation',
    };
  }

  return {
    title: `${story.title} | Raise India Foundation`,
    description: story.excerpt,
  };
}

export default async function StoryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const story = stories.find((s) => s.slug === slug);

  if (!story) {
    notFound();
  }

  const paragraphs = story.story.split('\n\n').filter(Boolean);

  return (
    <main className={styles.main}>
      {/* Hero */}
      <section className={styles.hero}>
        <Container>
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/stories">Success Stories</Link>
            <span>/</span>
            <span>{story.childName}</span>
          </div>

          <div className={styles.heroGrid}>
            <div>
              <span className={styles.categoryBadge}>{story.category}</span>
              <h1 className={styles.title}>{story.title}</h1>

              <div className={styles.metaInfo}>
                <span className={styles.metaTag}>Child: {story.childName}</span>
                {story.age && <span className={styles.metaTag}>Age: {story.age}</span>}
                <span className={styles.metaTag}>Date: {story.date}</span>
              </div>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>

                <Link
                  href="/stories"
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
                  ← All Stories
                </Link>
              </div>
            </div>

            <div className={styles.heroImageWrapper}>
              <Image
                src={story.image}
                alt={story.title}
                fill
                priority
                sizes="(max-width: 960px) 100vw, 50vw"
                className={styles.heroImage}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Narrative & Case Details */}
      <section className={styles.contentSection}>
        <Container>
          <div className={styles.contentGrid}>
            <div className={styles.storyContent}>
              <h2 className={styles.sectionHeading}>The Journey to Recovery</h2>
              {paragraphs.map((p, idx) => (
                <p key={idx} className={styles.paragraph}>
                  {p}
                </p>
              ))}
            </div>

            <aside>
              <div className={styles.statusCard}>
                <span className={styles.statusTitle}>Case Status</span>
                <h3 className={styles.statusValue}>{story.status}</h3>

                <ul className={styles.detailsList}>
                  <li className={styles.detailItem}>
                    <strong>Condition:</strong> {story.condition}
                  </li>
                  {story.hospital && (
                    <li className={styles.detailItem}>
                      <strong>Medical Facility:</strong> {story.hospital}
                    </li>
                  )}
                  <li className={styles.detailItem}>
                    <strong>Intervention:</strong> Mission Little Heartbeats
                  </li>
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
