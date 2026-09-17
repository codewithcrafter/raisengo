import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container/Container';
import { FinalCTA } from '@/components/sections/FinalCTA/FinalCTA';
import { initiatives } from '@/lib/content-data';
import styles from './page.module.css';

export const metadata = {
  title: 'Our Work | Raise India Foundation',
  description: 'Explore our core humanitarian initiatives driven by Raise India Foundation across education, healthcare, women empowerment, sanitation, and disaster relief.',
};

export default function OurWorkPage() {
  // Featured project: Mission Little Heartbeats
  const featured = initiatives.find((i) => i.slug === 'healthcare') || initiatives[1];

  // Core Pillars (Education, Healthcare, Women's Empowerment, Livelihood)
  const corePillars = initiatives.filter(
    (i) => ['education', 'womens-empowerment', 'livelihood'].includes(i.slug)
  );

  // Other initiatives
  const otherInitiatives = initiatives.filter(
    (i) => !['healthcare', 'education', 'womens-empowerment', 'livelihood'].includes(i.slug)
  );

  return (
    <main className={styles.main}>
      {/* 1. HERO SECTION */}
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>GRASSROOTS INITIATIVES</span>
            <h1 className={styles.heroTitle}>
              Where We Create <span className={styles.highlightText}>Lasting Impact</span>
            </h1>
            <p className={styles.heroDescription}>
              For over 11 years, Raise India Foundation has mobilized grassroots interventions across Delhi, Uttar Pradesh, Bihar, and Madhya Pradesh to create lasting self-reliance for vulnerable children and marginalized families.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. FEATURED PROJECT */}
      {featured && (
        <section className={styles.featuredSection}>
          <Container>
            <div className={styles.sectionHeader}>
              <span className={styles.subEyebrow}>CRITICAL MEDICAL INTERVENTION</span>
              <h2 className={styles.sectionTitle}>Featured Project</h2>
            </div>

            <div className={styles.featuredCard}>
              <div className={styles.featuredImageWrapper}>
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={styles.featuredImage}
                  priority
                />
                <div className={styles.featuredBadge}>FEATURED PROGRAM</div>
              </div>

              <div className={styles.featuredContent}>
                <span className={styles.categoryLabel}>{featured.category}</span>
                <h3 className={styles.featuredTitle}>{featured.title}</h3>
                <p className={styles.featuredDesc}>{featured.shortDescription}</p>

                {featured.partner && (
                  <div className={styles.partnerTag}>
                    <span>Medical Partner:</span> {featured.partner}
                  </div>
                )}

                <div className={styles.impactBox}>
                  <strong>Documented Impact:</strong> {featured.impact}
                </div>

                <div className={styles.featuredActions}>
                  <Link href="/donate" className={styles.btnPrimary}>
                    Donate to Medical Fund →
                  </Link>
                  <Link href={`/our-work/${featured.slug}`} className={styles.linkSecondary}>
                    Explore Full Story →
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* 3. PROGRAM OVERVIEW (CORE PILLARS) */}
      <section className={styles.pillarsSection}>
        <Container>
          <div className={styles.sectionHeader}>
            <span className={styles.subEyebrow}>CORE PROGRAMMATIC AREAS</span>
            <h2 className={styles.sectionTitle}>Program Overview</h2>
            <p className={styles.sectionSubtitle}>
              Our foundational programs designed to build long-term empowerment and systemic resilience.
            </p>
          </div>

          <div className={styles.pillarsGrid}>
            {corePillars.map((program) => (
              <div key={program.id} className={styles.pillarCard}>
                <div className={styles.pillarImageWrapper}>
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={styles.pillarImage}
                  />
                </div>
                <div className={styles.pillarContent}>
                  <span className={styles.categoryLabel}>{program.category}</span>
                  <h3 className={styles.pillarTitle}>{program.title}</h3>
                  <p className={styles.pillarDesc}>{program.shortDescription}</p>

                  <div className={styles.pillarImpact}>
                    <strong>Impact:</strong> {program.impact}
                  </div>

                  <Link href={`/our-work/${program.slug}`} className={styles.exploreLink}>
                    View Program Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. OTHER INITIATIVES (HORIZONTAL ROWS) */}
      <section className={styles.otherSection}>
        <Container>
          <div className={styles.sectionHeader}>
            <span className={styles.subEyebrow}>SPECIALIZED &amp; RELIEF WORK</span>
            <h2 className={styles.sectionTitle}>Other Initiatives</h2>
            <p className={styles.sectionSubtitle}>
              Targeted seasonal relief, sanitation drives, climate response, and emergency interventions.
            </p>
          </div>

          <div className={styles.initiativesList}>
            {otherInitiatives.map((item, idx) => (
              <div key={item.id} className={styles.initiativeRow}>
                <div className={styles.rowMeta}>
                  <span className={styles.rowNumber}>0{idx + 1}</span>
                  <div>
                    <span className={styles.rowCategory}>{item.category}</span>
                    <h3 className={styles.rowTitle}>{item.title}</h3>
                  </div>
                </div>

                <p className={styles.rowDesc}>{item.shortDescription}</p>

                <div className={styles.rowImpact}>
                  <span>{item.impact}</span>
                </div>

                <div className={styles.rowAction}>
                  <Link href={`/our-work/${item.slug}`} className={styles.rowLink}>
                    Explore →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. PROGRAM PATHWAYS (ONGOING, PAST EVENTS, SEASONAL) */}
      <section className={styles.pathwaysSection}>
        <Container>
          <div className={styles.sectionHeader}>
            <span className={styles.subEyebrow}>EXPLORE BY PORTAL</span>
            <h2 className={styles.sectionTitle}>Specialized Program Portals</h2>
            <p className={styles.sectionSubtitle}>
              Dive deeper into our active centers, archive of completed events, and annual seasonal drives.
            </p>
          </div>

          <div className={styles.pathwaysGrid}>
            <Link href="/our-work/ongoing-projects" className={styles.pathwayCard}>
              <div className={styles.pathwayIcon}>📍</div>
              <span className={styles.pathwayBadge}>ACTIVE CENTERS</span>
              <h3 className={styles.pathwayTitle}>Ongoing Projects</h3>
              <p className={styles.pathwayDesc}>
                Year-round operational programs including Shikshalaya learning centers, Techshaala digital lab, and Mission Little Heartbeats.
              </p>
              <span className={styles.pathwayLink}>View Ongoing Projects →</span>
            </Link>

            <Link href="/our-work/past-events" className={styles.pathwayCard}>
              <div className={styles.pathwayIcon}>📅</div>
              <span className={styles.pathwayBadge}>DOCUMENTED ARCHIVE</span>
              <h3 className={styles.pathwayTitle}>Past Events</h3>
              <p className={styles.pathwayDesc}>
                A chronological record of community workshops, health screening camps, festive gift distributions, and volunteer mobilizations.
              </p>
              <span className={styles.pathwayLink}>Browse Past Events →</span>
            </Link>

            <Link href="/our-work/seasonal-projects" className={styles.pathwayCard}>
              <div className={styles.pathwayIcon}>❄️</div>
              <span className={styles.pathwayBadge}>ANNUAL CAMPAIGNS</span>
              <h3 className={styles.pathwayTitle}>Seasonal Projects</h3>
              <p className={styles.pathwayDesc}>
                Targeted seasonal survival drives: Kambal Udhao winter blanket distributions, Project Tapan summer heatwave relief, and festival hampers.
              </p>
              <span className={styles.pathwayLink}>Discover Seasonal Drives →</span>
            </Link>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </main>
  );
}
