import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container/Container';
import {
  Laptop,
  CheckCircle,
  Sparkles,
  BookOpen,
  Code2,
  Briefcase,
  Users,
  GraduationCap,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
  title: 'Techshaala: Empowering Education through Technology | Raise India Foundation',
  description:
    'Techshaala, supported by Konverge Technologies Pvt. Ltd., bridges the digital divide by equipping underprivileged children and youth with 21st-century digital literacy, AI, coding, and office skills.',
  openGraph: {
    title: 'Techshaala | Raise India Foundation & Konverge Technologies',
    description:
      'Bridging the digital divide with free modern technology courses and computer learning labs.',
    url: 'https://www.raiseindiafoundation.org/techshaala',
    siteName: 'Raise India Foundation',
    type: 'website',
  },
};

const objectives = [
  {
    id: 'digital-literacy',
    title: 'Digital Literacy',
    description:
      'The primary objective of TECHSHAALA is to impart basic digital skills, such as operating computers, navigating the internet, and using essential software applications.',
    icon: Laptop,
  },
  {
    id: 'skill-development',
    title: 'Skill Development',
    description:
      'The program also focuses on advanced skill-building, including coding, graphic design, and understanding emerging technologies like AI and cybersecurity.',
    icon: Code2,
  },
  {
    id: 'employment-readiness',
    title: 'Employment Readiness',
    description:
      'By providing training in industry-relevant tools and platforms, TECHSHAALA prepares participants for employment opportunities in the tech sector.',
    icon: Briefcase,
  },
  {
    id: 'empowering-educators',
    title: 'Empowering Educators',
    description:
      'The initiative trains teachers and community leaders to sustain digital learning programs and multiply the impact across generations.',
    icon: GraduationCap,
  },
  {
    id: 'inclusivity',
    title: 'Inclusivity',
    description:
      'TECHSHAALA emphasizes equal participation, ensuring girls and women are active beneficiaries of the program, thereby promoting gender equity in technology.',
    icon: Users,
  },
];

const courses = [
  {
    id: 'ms-office',
    title: 'MS Office Proficiency',
    image: '/images/techshaala/excel.png',
    description:
      'Comprehensive training in Microsoft Office tools, including Word, Excel, and PowerPoint, to enhance productivity and efficiency.',
  },
  {
    id: 'tally-prime',
    title: 'Tally Prime with GST Expertise',
    image: '/images/techshaala/tally-prime.webp',
    description:
      'Practical knowledge of accounting software with a focus on GST compliance, catering to small businesses and entrepreneurs.',
  },
  {
    id: 'graphic-designing',
    title: 'Graphic Designing',
    image: '/images/techshaala/graphic-designer.png',
    description:
      'Training in tools like Adobe Photoshop and Illustrator to develop creative and professional design skills.',
  },
  {
    id: 'web-development',
    title: 'Web Development',
    image: '/images/techshaala/app-development.png',
    description:
      'Hands-on learning of HTML, CSS, JavaScript, and other frameworks to build responsive and functional websites.',
  },
  {
    id: 'social-media',
    title: 'Social Media & Digital Marketing',
    image: '/images/techshaala/content-strategy.png',
    description:
      'Skills to leverage social media platforms and digital tools for marketing, branding, and engagement.',
  },
  {
    id: 'artificial-intelligence',
    title: 'Artificial Intelligence',
    image: '/images/techshaala/ai-assistant.png',
    description:
      'An introduction to AI concepts, including machine learning, data analysis, and real-world applications.',
  },
];

export default function TechshaalaPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* ─────────────────────────────────────────────────────────
          SECTION 1: HERO
          ───────────────────────────────────────────────────────── */}
      <section className={styles.heroSection} aria-label="Techshaala Introduction">
        <div className={styles.heroGlow} aria-hidden="true" />
        <Container>
          <div className={styles.heroContentWrapper}>
            <div className={styles.heroTextCol}>
              <div className={styles.heroBadge}>
                <Sparkles className="w-4 h-4 text-pink-500 mr-2" aria-hidden="true" />
                <span>DIGITAL EMPOWERMENT LAB</span>
              </div>

              <h1 className={styles.heroHeading}>
                Techshaala: <span className={styles.highlightGradient}>Empowering Education</span> through Technology
              </h1>

              <p className={styles.heroParagraph}>
                Raise India Foundation, a non-profit organization dedicated to uplifting underprivileged communities, has been working towards providing quality education to children who lack access to formal schooling. Among its many initiatives is Techshaala, a project aimed at integrating technology into education to bridge the digital divide and empower young minds with 21st-century skills.
              </p>

              <div className={styles.supportedByBadge}>
                <ShieldCheck className="w-5 h-5 text-purple-600 flex-shrink-0" aria-hidden="true" />
                <div>
                  <span className={styles.supportedByLabel}>Flagship Collaboration: </span>
                  <strong className={styles.supportedByName}>
                    Techshaala supported by Konverge Technologies Pvt. Ltd.
                  </strong>
                </div>
              </div>

              <div className={styles.heroActions}>
                <a href="#courses" className={styles.primaryCtaBtn}>
                  <span>Explore Free Courses</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
                <Link href="/contact" className={styles.secondaryCtaBtn}>
                  <span>Get in Touch</span>
                </Link>
              </div>
            </div>

            <div className={styles.heroMediaCol}>
              <div className={styles.heroMediaCard}>
                <div className={styles.heroPartnerLogoWrap}>
                  <Image
                    src="/images/techshaala/cropped-sadasda-12.png"
                    alt="Konverge Technologies Pvt. Ltd. Corporate Partner"
                    width={240}
                    height={60}
                    className={styles.partnerLogoImg}
                    priority
                  />
                </div>
                <div className={styles.heroLabMetrics}>
                  <div className={styles.labMetricBox}>
                    <span className={styles.labMetricValue}>100% Free</span>
                    <span className={styles.labMetricLabel}>Education</span>
                  </div>
                  <div className={styles.labMetricBox}>
                    <span className={styles.labMetricValue}>6 Modern</span>
                    <span className={styles.labMetricLabel}>Tech Courses</span>
                  </div>
                  <div className={styles.labMetricBox}>
                    <span className={styles.labMetricValue}>High-Speed</span>
                    <span className={styles.labMetricLabel}>Internet Labs</span>
                  </div>
                  <div className={styles.labMetricBox}>
                    <span className={styles.labMetricValue}>Industry</span>
                    <span className={styles.labMetricLabel}>Mentorship</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────
          SECTION 2: ABOUT TECHSHAALA
          ───────────────────────────────────────────────────────── */}
      <section className={styles.aboutSection} aria-label="About Techshaala Initiative">
        <Container>
          <div className={styles.aboutGrid}>
            <div>
              <span className={styles.sectionEyebrow}>EXTENSION OF SHIKSHALAYA</span>
              <h2 className={styles.sectionHeading}>About Techshaala</h2>
              <p className={styles.aboutParagraph}>
                Techshaala, supported by Konverge Technologies Pvt. Ltd., operates as an extension of Raise India Foundation&apos;s Shikshalaya, a non-formal learning center which served thousands of underprivileged children.
              </p>
              <p className={styles.aboutParagraph}>
                Shikshalaya has been a beacon of hope, offering free education and holistic development opportunities to children from marginalized communities. The program focuses not only on academics but also on extracurricular activities, annual health checkups, and the overall well-being of its students.
              </p>
              <p className={styles.aboutParagraph}>
                The Shikshalaya program provides education kits, uniforms, full-year stationery support, and access to events and awareness camps, fostering an environment of growth and learning.
              </p>

              <div className={styles.featureHighlightList}>
                <div className={styles.highlightItem}>
                  <CheckCircle className={styles.checkIcon} aria-hidden="true" />
                  <span>Free education kits, uniforms, and full-year stationery support</span>
                </div>
                <div className={styles.highlightItem}>
                  <CheckCircle className={styles.checkIcon} aria-hidden="true" />
                  <span>Dedicated computer labs with desktop PCs, laptops &amp; internet</span>
                </div>
                <div className={styles.highlightItem}>
                  <CheckCircle className={styles.checkIcon} aria-hidden="true" />
                  <span>Holistic character development, health checkups &amp; awareness</span>
                </div>
              </div>
            </div>

            <div>
              <div className={styles.aboutVisualCard}>
                <BookOpen className="w-10 h-10 text-pink-400 mb-4" aria-hidden="true" />
                <blockquote className={styles.aboutCardQuote}>
                  “Access to technology and digital literacy is no longer a luxury but a necessity for every child seeking dignity and self-reliance.”
                </blockquote>
                <div className={styles.aboutCardAuthor}>
                  Raise India Foundation &amp; Konverge Technologies
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────
          SECTION 3: THE VISION BEHIND TECHSHAALA
          ───────────────────────────────────────────────────────── */}
      <section className={styles.visionSection} aria-label="The Vision Behind Techshaala">
        <Container>
          <div className={styles.visionCard}>
            <div className={styles.visionHeader}>
              <span className={styles.sectionEyebrow}>INCLUSIVE FUTURE</span>
              <h2 className={styles.sectionHeading}>The Vision Behind TECHSHAALA</h2>
            </div>
            <div className={styles.visionBody}>
              <p className={styles.visionParagraph}>
                Techshaala stems from the belief that access to technology and digital literacy is no longer a luxury but a necessity. In today&apos;s fast-paced world, where technology drives almost every aspect of life, a significant section of society still remains untouched by its transformative power.
              </p>
              <p className={styles.visionParagraph}>
                Techshaala aims to equip children and young adults from underprivileged backgrounds with essential digital skills, ensuring they are not left behind in the digital age. The project is a step towards creating a more inclusive and equitable society by fostering opportunities for learning, growth, and employability.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────
          SECTION 4: KEY OBJECTIVES
          ───────────────────────────────────────────────────────── */}
      <section className={styles.objectivesSection} aria-label="Key Objectives">
        <Container>
          <div className={styles.sectionHeadingBlock}>
            <span className={styles.sectionEyebrow}>STRATEGIC PILLARS</span>
            <h2 className={styles.sectionHeading}>Key Objectives</h2>
            <p className="text-gray-600">
              Designed to transform first-generation digital learners into self-reliant, tech-competent individuals.
            </p>
          </div>

          <div className={styles.objectivesGrid}>
            {objectives.map((obj) => {
              const IconComp = obj.icon;
              return (
                <div key={obj.id} className={styles.objectiveCard}>
                  <div className={styles.objectiveIconWrap}>
                    <IconComp className="w-7 h-7" aria-hidden="true" />
                  </div>
                  <h3 className={styles.objectiveTitle}>{obj.title}</h3>
                  <p className={styles.objectiveDescription}>{obj.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────
          SECTION 5: COURSES OFFERED
          ───────────────────────────────────────────────────────── */}
      <section id="courses" className={styles.coursesSection} aria-label="Courses Offered">
        <Container>
          <div className={styles.sectionHeadingBlock}>
            <span className={styles.sectionEyebrow}>SKILL CURRICULUM</span>
            <h2 className={styles.sectionHeading}>Courses Offered</h2>
            <p className="text-gray-600">
              TECHSHAALA offers a range of free courses designed to meet the demands of the modern workforce.
            </p>
          </div>

          <div className={styles.coursesGrid}>
            {courses.map((course) => (
              <div key={course.id} className={styles.courseCard}>
                <div className={styles.courseImageContainer}>
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={80}
                    height={80}
                    className={styles.courseImg}
                  />
                </div>
                <h3 className={styles.courseTitle}>{course.title}</h3>
                <p className={styles.courseDescription}>{course.description}</p>
                <div className={styles.freeCourseBadge}>
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                  <span>Free Certified Course</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────
          SECTION 6 & 7: COLLABORATION WITH KONVERGE TECHNOLOGIES
          ───────────────────────────────────────────────────────── */}
      <section className={styles.collabSection} aria-label="Collaboration With Konverge Technologies">
        <Container>
          <div className={styles.collabCard}>
            <div className={styles.collabTextCol}>
              <span className={styles.sectionEyebrow}>CORPORATE SOCIAL RESPONSIBILITY</span>
              <h2 className={styles.sectionHeading}>
                The Collaboration with Konverge Technologies Pvt. Ltd.
              </h2>
              <p className={styles.aboutParagraph}>
                Raise India Foundation has partnered with Konverge Technologies to bring TECHSHAALA to life. This collaboration leverages Konverge&apos;s technical expertise, resources, and mentorship programs. Konverge Technologies has provided infrastructure, including laptops, desktops, internet connectivity, and other necessary arrangements.
              </p>
              <div className={styles.featureHighlightList}>
                <div className={styles.highlightItem}>
                  <CheckCircle className={styles.checkIcon} aria-hidden="true" />
                  <span>Hardware infrastructure: Desktop computers, laptops and peripherals</span>
                </div>
                <div className={styles.highlightItem}>
                  <CheckCircle className={styles.checkIcon} aria-hidden="true" />
                  <span>High-speed optical fiber connectivity and power backups</span>
                </div>
                <div className={styles.highlightItem}>
                  <CheckCircle className={styles.checkIcon} aria-hidden="true" />
                  <span>Corporate employee mentorship, curriculum guidance &amp; evaluation</span>
                </div>
              </div>
            </div>

            <div className={styles.collabBrandGrid}>
              <Image
                src="/images/techshaala/logo.png"
                alt="Raise India Foundation Official Logo"
                width={180}
                height={60}
                className={styles.brandLogoItem}
              />
              <span className={styles.brandDividerText}>In Collaboration With</span>
              <Image
                src="/images/techshaala/cropped-sadasda-12.png"
                alt="Konverge Technologies Pvt. Ltd."
                width={220}
                height={60}
                className={styles.brandLogoItem}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────
          SECTION 8: CONCLUSION
          ───────────────────────────────────────────────────────── */}
      <section className={styles.conclusionSection} aria-label="Building a Digitally Inclusive India">
        <Container>
          <div className={styles.conclusionCard}>
            <span className={styles.sectionEyebrow}>SUSTAINABLE SOCIAL IMPACT</span>
            <h2 className={styles.conclusionHeading}>Building a Digitally Inclusive India</h2>
            <p className={styles.conclusionParagraph}>
              TECHSHAALA is an example of how collaborations between social organizations and corporate entities can create meaningful change. By providing underprivileged communities with the tools and knowledge to succeed in the digital era, Raise India Foundation and Konverge Technologies are working towards the larger goal of a digitally inclusive India.
            </p>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────
          SECTION 9: EXPLORE OUR PREMIUM COURSES & CTA
          ───────────────────────────────────────────────────────── */}
      <section className={styles.exploreCtaSection} aria-label="Explore Courses CTA">
        <Container>
          <div className={styles.exploreCtaCard}>
            <h2 className={styles.exploreCtaTitle}>Explore Our Premium Courses</h2>
            <p className={styles.exploreCtaText}>
              Whether you&apos;re a school student or a college student, feel free to reach out. We are here to help you choose the perfect path!
            </p>
            <Link href="/contact" className={styles.exploreCtaBtn}>
              <span>Get in Touch</span>
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
