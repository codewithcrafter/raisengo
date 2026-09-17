import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container/Container';
import { blogPosts } from '@/lib/content-data';
import styles from './page.module.css';

export const metadata = {
  title: 'Blog & Field Updates | Raise India Foundation',
  description: 'Stay updated with ground reports, project milestones, and community news from Raise India Foundation.',
};

export default function BlogPage() {
  return (
    <main className={styles.main}>
      <section className={`${styles.hero} full-bleed`}>
        <div className={styles.heroBlob}></div>
        <Container>
          <div className={styles.heroContent}>
            <div className={styles.eyebrowDecor}>🗞️ FIELD CHRONICLES</div>
            <h1 className="statement-text">
              News &amp; <span className={styles.highlightText}>Updates</span>
            </h1>
            <p className={styles.heroDescription}>
              Read verified reports from the field — learning center inaugurations, pediatric healthcare recoveries, corporate CSR initiatives, and seasonal relief drives.
            </p>
          </div>
        </Container>
      </section>

      <section className={styles.blogSection}>
        <Container>
          <div className={styles.grid}>
            {blogPosts.map((post) => (
              <article key={post.id} className={styles.postCard}>
                <Link href={`/blog/${post.slug}`} className={styles.imageLink}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </Link>
                <div className={styles.postContent}>
                  <div className={styles.meta}>
                    <span className={styles.category}>{post.category}</span>
                    <span className={styles.date}>{post.date}</span>
                  </div>
                  <h2 className={styles.postTitle}>
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className={styles.postExcerpt}>{post.excerpt}</p>
                  <div style={{ marginTop: '16px' }}>
                    <Link
                      href={`/blog/${post.slug}`}
                      style={{
                        fontSize: '13px',
                        fontWeight: 700,
                        color: '#E0679D',
                        textDecoration: 'none',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                      }}
                    >
                      Read Full Article →
                    </Link>
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
