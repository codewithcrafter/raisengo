import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container/Container';
import { stories } from '@/lib/content-data';
import styles from './page.module.css';

export const metadata = {
  title: 'Success Stories & Beneficiary Journeys | Raise India Foundation',
  description: 'True stories of children and families healed through Mission Little Heartbeats and empowered by Raise India Foundation.',
};

export default function StoriesPage() {
  const featuredStory = stories[0];
  const otherStories = stories.slice(1);

  return (
    <main className={styles.main}>
      <section className={`${styles.hero} full-bleed`}>
        <Container>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>REAL LIVES · RESTORED FUTURES</span>
            <h1 className="statement-text">
              Voices of <span className={styles.highlightText}>Impact</span>
            </h1>
            <p className={styles.heroDescription}>
              Over 14 young lives saved through pediatric open-heart surgeries, and thousands of children educated. Behind every recovery is a story of medical heroism, family resilience, and community support.
            </p>
          </div>
        </Container>
      </section>

      {/* Featured Story */}
      {featuredStory && (
        <section className={styles.featuredSection}>
          <Container>
            <div className={styles.featuredStory}>
              <div className={styles.featuredImageWrapper}>
                <Image
                  src={featuredStory.image}
                  alt={featuredStory.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
              <div className={styles.featuredContent}>
                <div className={styles.meta}>
                  <span className={styles.category}>{featuredStory.category}</span>
                  <span className={styles.date}>{featuredStory.date}</span>
                </div>
                <h2 className={styles.featuredTitle}>{featuredStory.title}</h2>
                <p className={styles.featuredExcerpt}>{featuredStory.excerpt}</p>
                <div style={{ marginBottom: '24px' }}>
                  <span style={{ fontSize: '13px', fontWeight: 800, color: '#2E7D32', background: '#E8F5E9', padding: '6px 14px', borderRadius: '999px' }}>
                    Status: {featuredStory.status}
                  </span>
                </div>
                <Link href={`/stories/${featuredStory.slug}`} className={styles.readArticleBtn}>
                  Read Full Story →
                </Link>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Story Grid */}
      <section className={styles.gridSection}>
        <Container>
          <div className={styles.storyGrid}>
            {otherStories.map((story) => (
              <article key={story.id} className={styles.storyCard}>
                <Link href={`/stories/${story.slug}`} className={styles.cardImageLink}>
                  <div className={styles.cardImage}>
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </Link>
                <div className={styles.cardContent}>
                  <div className={styles.meta}>
                    <span className={styles.category}>{story.category}</span>
                    <span className={styles.date}>{story.date}</span>
                  </div>
                  <h3 className={styles.cardTitle}>
                    <Link href={`/stories/${story.slug}`}>{story.title}</Link>
                  </h3>
                  <p className={styles.cardExcerpt}>{story.excerpt}</p>
                  <div style={{ marginTop: '12px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#2E7D32', background: '#E8F5E9', padding: '4px 10px', borderRadius: '999px' }}>
                      {story.status}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
