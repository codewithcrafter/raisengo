import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container/Container';
import { successStoriesData } from '@/data/success-stories';
import { Heart, Sparkles, ArrowRight, Activity, MapPin } from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
  title: 'Our Success Story | Project Little Heartbeats | Raise India Foundation',
  description:
    'Every child deserves the opportunity to grow, dream, and live a healthier life. Explore stories of children supported through Project Little Heartbeats by Raise India Foundation.',
  openGraph: {
    title: 'Our Success Story | Raise India Foundation',
    description:
      'True stories of children and families supported through Project Little Heartbeats.',
    url: 'https://www.raiseindiafoundation.org/success-stories',
    siteName: 'Raise India Foundation',
    type: 'website',
  },
};

export default function SuccessStoriesPage() {
  return (
    <main className={styles.main}>
      {/* ─────────────────────────────────────────────────────────
          HERO SECTION
          ───────────────────────────────────────────────────────── */}
      <section className={styles.heroSection} aria-label="Our Success Story Introduction">
        <div className={styles.heroGlow} aria-hidden="true" />
        <Container>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <Sparkles className="w-4 h-4 text-pink-500 mr-2" aria-hidden="true" />
              <span>PROJECT LITTLE HEARTBEATS</span>
            </div>

            <h1 className={styles.heroHeading}>
              Our <span className={styles.highlightGradient}>Success Story</span>
            </h1>

            <p className={styles.heroIntro}>
              Every child deserves the opportunity to grow, dream, and live a healthier life. Explore the stories shared through Raise India Foundation’s Project Little Heartbeats and the people working together to make a difference.
            </p>

            <div className={styles.heroStatsStrip}>
              <div className={styles.heroStatItem}>
                <span className={styles.heroStatValue}>15+</span>
                <span className={styles.heroStatLabel}>Stories of Courage</span>
              </div>
              <div className={styles.heroStatItem}>
                <span className={styles.heroStatValue}>Fortis Hospital</span>
                <span className={styles.heroStatLabel}>Clinical Partner</span>
              </div>
              <div className={styles.heroStatItem}>
                <span className={styles.heroStatValue}>100%</span>
                <span className={styles.heroStatLabel}>Verified Due Diligence</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────
          STORIES GRID SECTION
          ───────────────────────────────────────────────────────── */}
      <section className={styles.storiesSection} aria-label="Beneficiary Stories List">
        <Container>
          <div className={styles.gridHeader}>
            <div>
              <h2 className={styles.gridTitle}>All Beneficiary Journeys</h2>
            </div>
            <div className={styles.gridCountBadge}>
              <span>{successStoriesData.length} Documented Stories</span>
            </div>
          </div>

          <div className={styles.storiesGrid}>
            {successStoriesData.map((story) => (
              <article key={story.id} className={styles.storyCard}>
                <Link
                  href={`/success-stories/${story.slug}`}
                  className={styles.cardImageLink}
                  aria-label={`Read story of ${story.childName}: ${story.title}`}
                >
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={styles.cardImage}
                  />
                  <span className={styles.cardBadge}>{story.childName}</span>
                  <div className={styles.cardStatusPill}>
                    <span className={styles.statusDot} aria-hidden="true" />
                    <span>{story.status}</span>
                  </div>
                </Link>

                <div className={styles.cardBody}>
                  <div className={styles.cardMetaRow}>
                    <span className={styles.cardHospital}>
                      <Activity className="w-3.5 h-3.5" aria-hidden="true" />
                      {story.hospital.split(',')[0]}
                    </span>
                    {story.location && (
                      <span className={styles.cardHospital}>
                        <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                        {story.location.split(',')[0]}
                      </span>
                    )}
                  </div>

                  <h3 className={styles.cardTitle}>
                    <Link href={`/success-stories/${story.slug}`} className={styles.cardTitleLink}>
                      {story.title}
                    </Link>
                  </h3>

                  <p className={styles.cardExcerpt}>{story.excerpt}</p>

                  <div className={styles.cardFooter}>
                    <span className={styles.cardConditionTag} title={story.condition}>
                      {story.condition}
                    </span>
                    <Link
                      href={`/success-stories/${story.slug}`}
                      className={styles.readStoryBtn}
                      aria-label={`Read full story for ${story.childName}`}
                    >
                      <span>Read Story</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────
          DONATION CTA SECTION
          ───────────────────────────────────────────────────────── */}
      <section className={styles.ctaSection} aria-label="Support Project Little Heartbeats">
        <Container>
          <div className={styles.ctaCard}>
            <div className={styles.ctaBadge}>
              <Heart className="w-3.5 h-3.5 mr-1.5 fill-current text-pink-400" aria-hidden="true" />
              <span>CHHOTI DHADKANE BADE SAPNE</span>
            </div>
            <h2 className={styles.ctaHeading}>Help Give a Little Heart a Second Chance</h2>
            <p className={styles.ctaParagraph}>
              No child should be denied life-saving cardiac surgery because of poverty. Your contribution directly funds emergency heart procedures for underprivileged children.
            </p>
            <Link href="/donate" className={styles.ctaButton}>
              <Heart className="w-4 h-4 fill-current text-white" aria-hidden="true" />
              <span>Support a Child’s Surgery</span>
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
