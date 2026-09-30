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
  description: string;
  image: string;
  ctaText?: string;
  ctaLink?: string;
  details: {
    about: string;
    whyItMatters: string;
    whatWeDo: string[];
    impact: Stat[];
    faqs: FAQ[];
    gallery: string[];
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

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, categoryName, categoryLink, relatedProjects }) => {
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
            <p className={styles.heroSubtitle}>{project.description}</p>
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
      <section className={styles.contentSection}>
        <Container>
          <div className={styles.contentGrid}>
            <div className={styles.mainContent}>
              <h2 className={styles.sectionHeading}>About the Project</h2>
              <p className={styles.textBlock}>{project.details.about}</p>

              <h2 className={styles.sectionHeading}>Why It Matters</h2>
              <p className={styles.textBlock}>{project.details.whyItMatters}</p>

              <h2 className={styles.sectionHeading}>What We Do</h2>
              <ul className={styles.bulletList}>
                {project.details.whatWeDo.map((item, index) => (
                  <li key={index}>
                    <span className={styles.bulletIcon}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* IMPACT BLOCK */}
              <div className={styles.impactBlock}>
                <h3 className={styles.impactHeading}>Documented Outcome</h3>
                <div className={styles.statsGrid}>
                  {project.details.impact.map((stat, idx) => (
                    <div key={idx} className={styles.statCard}>
                      <span className={styles.statValue}>{stat.value}</span>
                      <span className={styles.statLabel}>{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <h2 className={styles.sectionHeading}>Frequently Asked Questions</h2>
              <div className={styles.faqList}>
                {project.details.faqs.map((faq, idx) => (
                  <div key={idx} className={styles.faqItem}>
                    <h4 className={styles.faqQ}>{faq.q}</h4>
                    <p className={styles.faqA}>{faq.a}</p>
                  </div>
                ))}
              </div>

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
              <div className={styles.ctaBox}>
                <h3 className={styles.ctaTitle}>Make an Impact Today</h3>
                <p className={styles.ctaText}>Your contribution helps us sustain and expand this vital initiative.</p>
                <Link href={project.ctaLink || '/donate'} className={styles.ctaPrimaryBtn}>
                  {project.ctaText || 'Donate Now'}
                </Link>
              </div>
              <div className={styles.backLinkBox}>
                <Link href={categoryLink} className={styles.backLink}>
                  ← Back to {categoryName}
                </Link>
              </div>
            </aside>
          </div>
        </Container>
      </section>

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
