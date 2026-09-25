import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/lib/content-data';
import styles from './BlogPreview.module.css';

export const BlogPreview: React.FC = () => {
  const featuredPost = blogPosts[0];
  const sidePosts = blogPosts.slice(1, 3);

  return (
    <section className={styles.section} aria-label="Latest News and Field Dispatches">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.eyebrow}>LATEST FROM RAISE INDIA</span>
            <h2 className={styles.title}>Stories &amp; Field Dispatches</h2>
            <p className={styles.subtitle}>
              Direct dispatches, community milestones, and frontline reporting from our learning centers and relief missions.
            </p>
          </div>
          <div className={styles.headerRight}>
            <Link href="/blog" className={styles.allNewsLink}>
              <span>VISIT NEWSROOM</span>
              <span className={styles.arrow} aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Publication Editorial Layout */}
        <div className={styles.newsGrid}>
          {/* Large Featured Article (Left) */}
          {featuredPost && (
            <article className={styles.featuredArticle}>
              <Link href={`/blog/${featuredPost.slug}`} className={styles.featuredImageLink}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className={styles.image}
                  />
                  <div className={styles.featuredBadge}>FEATURED DISPATCH</div>
                  <div className={styles.imageOverlay} />
                </div>
              </Link>

              <div className={styles.featuredContent}>
                <div className={styles.metaRow}>
                  <span className={styles.categoryBadge}>{featuredPost.category}</span>
                  <span className={styles.metaDivider} aria-hidden="true">•</span>
                  <time className={styles.date}>{featuredPost.date}</time>
                </div>

                <h3 className={styles.featuredTitle}>
                  <Link href={`/blog/${featuredPost.slug}`} className={styles.titleLink}>
                    {featuredPost.title}
                  </Link>
                </h3>

                <p className={styles.excerpt}>{featuredPost.excerpt}</p>

                <Link href={`/blog/${featuredPost.slug}`} className={styles.readMoreLink}>
                  <span>Read Article</span>
                  <span className={styles.arrowIcon} aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          )}

          {/* Sidebar Smaller Articles (Right) */}
          <div className={styles.sidebarColumn}>
            {sidePosts.map((post) => (
              <article key={post.id} className={styles.sideArticle}>
                <Link href={`/blog/${post.slug}`} className={styles.sideImageLink}>
                  <div className={styles.sideImageWrapper}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 240px"
                      className={styles.sideImage}
                    />
                  </div>
                </Link>

                <div className={styles.sideContent}>
                  <div className={styles.metaRow}>
                    <span className={styles.categoryBadge}>{post.category}</span>
                    <span className={styles.metaDivider} aria-hidden="true">•</span>
                    <time className={styles.date}>{post.date}</time>
                  </div>

                  <h4 className={styles.sideTitle}>
                    <Link href={`/blog/${post.slug}`} className={styles.titleLink}>
                      {post.title}
                    </Link>
                  </h4>

                  <p className={styles.sideExcerpt}>{post.excerpt}</p>

                  <Link href={`/blog/${post.slug}`} className={styles.sideReadLink}>
                    <span>Read Dispatch</span>
                    <span className={styles.arrowIcon} aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
