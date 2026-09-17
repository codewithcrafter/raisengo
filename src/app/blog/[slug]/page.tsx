import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container/Container';
import { FinalCTA } from '@/components/sections/FinalCTA/FinalCTA';
import { blogPosts } from '@/lib/content-data';
import styles from './page.module.css';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Post Not Found | Raise India Foundation',
    };
  }

  return {
    title: `${post.title} | Raise India Foundation`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const paragraphs = post.content.split('\n\n').filter(Boolean);

  return (
    <main className={styles.main}>
      {/* Hero */}
      <section className={styles.hero}>
        <Container>
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/blog">Blog &amp; Updates</Link>
            <span>/</span>
            <span>{post.category}</span>
          </div>

          <span className={styles.categoryBadge}>{post.category}</span>
          <h1 className={styles.title}>{post.title}</h1>

          <div className={styles.metaInfo}>
            <span className={styles.metaAuthor}>By {post.author}</span>
            <span>•</span>
            <span>Published {post.date}</span>
          </div>
        </Container>
      </section>

      {/* Article Content */}
      <section className={styles.contentSection}>
        <Container>
          <div className={styles.contentGrid}>
            <div>
              <div className={styles.imageWrapper}>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  priority
                  sizes="(max-width: 960px) 100vw, 65vw"
                  className={styles.articleImage}
                />
              </div>

              <div className={styles.articleBody}>
                {paragraphs.map((p, idx) => (
                  <p key={idx} className={styles.paragraph}>
                    {p}
                  </p>
                ))}
              </div>

              <div style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid rgba(45, 17, 69, 0.08)' }}>
                <Link
                  href="/blog"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 24px',
                    background: '#FAF6FB',
                    color: '#2D1145',
                    borderRadius: '999px',
                    fontWeight: 700,
                    fontSize: '14px',
                    textDecoration: 'none',
                    border: '1px solid rgba(45, 17, 69, 0.12)',
                  }}
                >
                  ← Back to All Updates
                </Link>
              </div>
            </div>

            <aside>
              <div className={styles.sidebarCard}>
                <h3 className={styles.sidebarTitle}>Support Our Work</h3>
                <p className={styles.sidebarText}>
                  Your tax-deductible contribution under Section 80G powers life-saving child surgeries, free education, and emergency disaster relief across India.
                </p>
                <Link href="/donate" className={styles.donateBtn}>
                  Contribute Today →
                </Link>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </main>
  );
}
