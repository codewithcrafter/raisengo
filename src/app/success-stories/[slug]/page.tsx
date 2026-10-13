import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container/Container';
import { successStoriesData } from '@/data/success-stories';
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Stethoscope,
  Building2,
  MapPin,
} from 'lucide-react';
import styles from './page.module.css';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return successStoriesData.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const story = successStoriesData.find((s) => s.slug === slug);

  if (!story) {
    return {
      title: 'Story Not Found | Raise India Foundation',
    };
  }

  return {
    title: `${story.title} | Raise India Foundation`,
    description: story.excerpt,
    openGraph: {
      title: story.title,
      description: story.excerpt,
      url: `https://www.raiseindiafoundation.org/success-stories/${story.slug}`,
      siteName: 'Raise India Foundation',
      type: 'article',
    },
  };
}

export default async function StoryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const story = successStoriesData.find((s) => s.slug === slug);

  if (!story) {
    notFound();
  }

  // Get 3 other stories for the "More Stories" section
  const otherStories = successStoriesData
    .filter((s) => s.slug !== story.slug)
    .slice(0, 3);

  return (
    <main className={styles.main}>
      {/* ─────────────────────────────────────────────────────────
          BREADCRUMBS & HEADER
          ───────────────────────────────────────────────────────── */}
      <section className={styles.headerSection} aria-label="Story Header">
        <Container>
          <nav aria-label="Breadcrumb" className={styles.breadcrumbNav}>
            <ol className={styles.breadcrumbList}>
              <li>
                <Link href="/" className={styles.breadcrumbLink}>
                  Home
                </Link>
              </li>
              <li className={styles.breadcrumbSeparator} aria-hidden="true">
                /
              </li>
              <li>
                <Link href="/success-stories" className={styles.breadcrumbLink}>
                  Success Story
                </Link>
              </li>
              <li className={styles.breadcrumbSeparator} aria-hidden="true">
                /
              </li>
              <li className={styles.breadcrumbCurrent} aria-current="page">
                {story.childName}
              </li>
            </ol>
          </nav>

          <div className={styles.storyHeroWrap}>
            <div className={styles.badgeRow}>
              <span className={styles.categoryBadge}>{story.category}</span>
              <div className={styles.statusPill}>
                <span className={styles.statusDot} aria-hidden="true" />
                <span>{story.status}</span>
              </div>
            </div>

            <h1 className={styles.storyTitle}>{story.title}</h1>

            <div className={styles.storyMetaGrid}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Child</span>
                <span className={styles.metaValue}>{story.childName}</span>
              </div>
              {story.age && (
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Age</span>
                  <span className={styles.metaValue}>{story.age}</span>
                </div>
              )}
              {story.location && (
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Location</span>
                  <span className={styles.metaValue}>
                    <MapPin className="w-3.5 h-3.5 inline mr-1 text-purple-600" aria-hidden="true" />
                    {story.location}
                  </span>
                </div>
              )}
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Hospital</span>
                <span className={styles.metaValue}>
                  <Building2 className="w-3.5 h-3.5 inline mr-1 text-purple-600" aria-hidden="true" />
                  {story.hospital}
                </span>
              </div>
              {story.treatingDoctor && (
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Treating Doctor</span>
                  <span className={styles.metaValue}>
                    <Stethoscope className="w-3.5 h-3.5 inline mr-1 text-purple-600" aria-hidden="true" />
                    {story.treatingDoctor}
                  </span>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────
          ARTICLE CONTENT
          ───────────────────────────────────────────────────────── */}
      <article className={styles.articleSection}>
        <Container>
          <div className={styles.articleContainer}>
            {/* Main Visual */}
            <div className={styles.mainMediaFrame}>
              <Image
                src={story.image}
                alt={story.title}
                width={1200}
                height={800}
                priority
                className={styles.mainImage}
                sizes="(max-width: 1200px) 100vw, 1180px"
              />
            </div>

            <div className={styles.articleBody}>
              {story.sections.map((sec, idx) => (
                <div key={idx} className={styles.articleSectionBlock}>
                  {sec.heading && <h2 className={styles.subHeading}>{sec.heading}</h2>}
                  {sec.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className={styles.paragraph}>
                      {p}
                    </p>
                  ))}
                </div>
              ))}

              {/* Quotes where present */}
              {story.quotes &&
                story.quotes.map((q, qIdx) => (
                  <blockquote key={qIdx} className={styles.quoteCard}>
                    <p className={styles.quoteText}>“{q.text}”</p>
                    <footer className={styles.quoteAuthor}>— {q.author}</footer>
                  </blockquote>
                ))}

              {/* Structured Cost Breakdown Box where present */}
              {story.costBreakdown && story.costBreakdown.length > 0 && (
                <div className={styles.costBreakdownCard} aria-label="Cost and Treatment Information">
                  <div className={styles.costHeader}>
                    <ShieldCheck className="w-6 h-6 text-purple-700" aria-hidden="true" />
                    <h3 className={styles.costTitle}>Financial &amp; Treatment Breakdown</h3>
                  </div>
                  <div className={styles.costGrid}>
                    {story.costBreakdown.map((item, itemIdx) => (
                      <div key={itemIdx} className={styles.costRow}>
                        <span className={styles.costLabel}>{item.label}</span>
                        <span className={styles.costValue}>{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Additional Images where present */}
              {story.additionalImages && story.additionalImages.length > 0 && (
                <div className={styles.additionalMediaGrid}>
                  {story.additionalImages.map((img, imgIdx) => (
                    <div key={imgIdx} className={styles.additionalMediaCard}>
                      <Image
                        src={img.url}
                        alt={img.caption || `${story.childName} gallery image`}
                        width={600}
                        height={400}
                        className={styles.additionalImage}
                      />
                      {img.caption && <p className={styles.mediaCaption}>{img.caption}</p>}
                    </div>
                  ))}
                </div>
              )}

              {/* Back to Stories Navigation */}
              <div className={styles.bottomNavRow}>
                <Link href="/success-stories" className={styles.backToListLink}>
                  <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                  <span>← Back to All Success Stories</span>
                </Link>

                <Link href="/donate" className={styles.backToListLink}>
                  <span>Make a Difference</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </article>

      {/* ─────────────────────────────────────────────────────────
          MORE SUCCESS STORIES
          ───────────────────────────────────────────────────────── */}
      <section className={styles.moreStoriesSection} aria-label="More Beneficiary Stories">
        <Container>
          <h2 className={styles.moreSectionTitle}>More Success Stories</h2>
          <div className={styles.moreGrid}>
            {otherStories.map((other) => (
              <Link
                key={other.id}
                href={`/success-stories/${other.slug}`}
                className={styles.moreCard}
                aria-label={`Read story for ${other.childName}`}
              >
                <div className={styles.moreImageWrap}>
                  <Image
                    src={other.image}
                    alt={other.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={styles.moreImage}
                  />
                </div>
                <div className={styles.moreCardBody}>
                  <span className={styles.moreCardChild}>{other.childName}</span>
                  <h3 className={styles.moreCardTitle}>{other.title}</h3>
                  <span className={styles.moreCardAction}>
                    <span>Read Story</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
