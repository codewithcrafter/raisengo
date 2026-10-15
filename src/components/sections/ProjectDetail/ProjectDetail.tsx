import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container/Container';
import styles from './ProjectDetail.module.css';

interface Stat {
  label: string;
  value: string;
}

interface FAQ {
  q: string;
  a: string;
}

interface ProjectData {
  title: string;
  badge?: string;
  description: string | string[];
  image: string;
  ctaText?: string;
  ctaLink?: string;
  details?: {
    about?: string | string[];
    whyItMatters?: string | string[];
    whatWeDo?: string[];
    impact?: Stat[];
    impactHeading?: string;
    impactStory?: string;
    faqs?: FAQ[];
    gallery?: string[];
  };
}

interface ProjectDetailProps {
  project: ProjectData;
  categoryName: string;
  categoryLink: string;
  relatedProjects: Array<{
    title: string;
    slug: string;
    image: string;
  }>;
}

const renderParagraphs = (
  content: string | string[] | undefined,
  className?: string
) => {
  if (!content) return null;

  const paragraphs = Array.isArray(content)
    ? content
    : content.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);

  return paragraphs.map((para, index) => (
    <p key={index} className={className}>
      {para}
    </p>
  ));
};

export const ProjectDetail: React.FC<ProjectDetailProps> = ({
  project,
  categoryName,
  categoryLink,
  relatedProjects,
}) => {
  return (
    <div className={styles.projectDetailContainer}>
      {/* BREADCRUMB */}
      <section className={styles.breadcrumbSection}>
        <Container>
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span className={styles.separator}>/</span>
            <Link href="/our-work">Our Work</Link>
            <span className={styles.separator}>/</span>
            <Link href={categoryLink}>{categoryName}</Link>
            <span className={styles.separator}>/</span>
            <span className={styles.current}>{project.title}</span>
          </div>
        </Container>
      </section>

      {/* HERO SECTION */}
      <section className={styles.heroSection}>
        <Container>
          <div className={styles.heroContent}>
            {project.badge && <span className={styles.heroBadge}>{project.badge}</span>}
            <h1 className={styles.heroTitle}>{project.title}</h1>
            <div className={styles.heroSubtitleWrapper}>
              {renderParagraphs(project.description, styles.heroSubtitle)}
            </div>
          </div>
          <div className={styles.heroImageWrapper}>
            <Image
              src={project.image}
              alt={project.title}
              fill
              className={styles.heroImage}
              priority
            />
          </div>
        </Container>
      </section>

      {/* MAIN CONTENT SECTION */}
      {project.details && (
        <section className={styles.contentSection}>
          <Container>
            <div className={styles.contentGrid}>
              <div className={styles.mainContent}>
                {project.details.about && (
                  <>
                    <h2 className={styles.sectionHeading}>About the Project</h2>
                    {renderParagraphs(project.details.about, styles.textBlock)}
                  </>
                )}

                {project.details.whyItMatters && (
                  <>
                    <h2 className={styles.sectionHeading}>Why It Matters</h2>
                    {renderParagraphs(project.details.whyItMatters, styles.textBlock)}
                  </>
                )}

                {project.details.whatWeDo && project.details.whatWeDo.length > 0 && (
                  <>
                    <h2 className={styles.sectionHeading}>What We Do</h2>
                    <ul className={styles.bulletList}>
                      {project.details.whatWeDo.map((item, index) => (
                        <li key={index}>
                          <span className={styles.bulletIcon}>✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {/* IMPACT BLOCK */}
                {project.details.impact && project.details.impact.length > 0 && (
                  <div className={styles.impactBlock}>
                    <h3 className={styles.impactHeading}>
                      {project.details.impactHeading || 'Documented Outcome'}
                    </h3>
                    <div className={styles.statsGrid}>
                      {project.details.impact.map((stat, idx) => (
                        <div key={idx} className={styles.statCard}>
                          <span className={styles.statValue}>{stat.value}</span>
                          <span className={styles.statLabel}>{stat.label}</span>
                        </div>
                      ))}
                    </div>
                    {project.details.impactStory && (
                      <div className={styles.impactStoryBox}>
                        <p className={styles.impactStoryText}>
                          <strong>Real-World Impact:</strong> {project.details.impactStory}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* FAQ */}
                {project.details.faqs && project.details.faqs.length > 0 && (
                  <>
                    <h2 className={styles.sectionHeading}>Frequently Asked Questions</h2>
                    <div className={styles.faqList}>
                      {project.details.faqs.map((faq, idx) => (
                        <div key={idx} className={styles.faqItem}>
                          <h4 className={styles.faqQ}>{faq.q}</h4>
                          <p className={styles.faqA}>{faq.a}</p>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* GALLERY */}
                {project.details.gallery && project.details.gallery.length > 0 && (
                  <div className={styles.gallerySection}>
                    <h2 className={styles.sectionHeading}>Photo Gallery</h2>
                    <div className={styles.galleryGrid}>
                      {project.details.gallery.map((img, idx) => (
                        <div key={idx} className={styles.galleryImgWrapper}>
                          <Image src={img} alt={`${project.title} gallery ${idx + 1}`} fill className={styles.galleryImg} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* SIDEBAR CTA */}
              <aside className={styles.sidebar}>
                {project.ctaText && (
                  <div className={styles.ctaBox}>
                    <h3 className={styles.ctaTitle}>Make an Impact</h3>
                    <p className={styles.ctaText}>Your contribution helps us sustain and expand this vital initiative.</p>
                    <Link href={project.ctaLink || '/get-involved'} className={styles.ctaPrimaryBtn}>
                      {project.ctaText}
                    </Link>
                  </div>
                )}

                <div className={styles.backLinkBox}>
                  <Link href={categoryLink} className={styles.backLink}>
                    ← Back to {categoryName}
                  </Link>
                </div>
              </aside>
            </div>
          </Container>
        </section>
      )}

      {/* RELATED PROJECTS */}
      {relatedProjects && relatedProjects.length > 0 && (
        <section className={styles.relatedSection}>
          <Container>
            <h2 className={styles.relatedHeading}>More in {categoryName}</h2>
            <div className={styles.relatedGrid}>
              {relatedProjects.map((rel, idx) => (
                <Link key={idx} href={`${categoryLink}/${rel.slug}`} className={styles.relatedCard}>
                  <div className={styles.relatedImgWrapper}>
                    <Image src={rel.image} alt={rel.title} fill className={styles.relatedImg} />
                  </div>
                  <div className={styles.relatedCardBody}>
                    <h4 className={styles.relatedCardTitle}>{rel.title}</h4>
                    <span className={styles.relatedCardLink}>View Details →</span>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}
    </div>
  );
};
