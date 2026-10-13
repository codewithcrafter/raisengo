import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container/Container';
import { VolunteeringForm } from './VolunteeringForm';
import { ApplyScrollButton } from './ApplyScrollButton';
import {
  Quote,
  Sparkles,
  Heart,
  Target,
  Briefcase,
  Users,
  Award,
  FileCheck,
  Megaphone,
  ThumbsUp,
  ClipboardList,
} from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
  title: 'Volunteering Opportunities | Raise India Foundation',
  description:
    'Join our volunteer community to make a tangible impact across education, healthcare, environmental conservation, and emergency relief with Raise India Foundation.',
  openGraph: {
    title: 'Volunteer with Raise India Foundation',
    description:
      'The smallest act of kindness is worth more than the grandest intention. Become a volunteer today.',
    url: 'https://www.raiseindiafoundation.org/volunteering',
    siteName: 'Raise India Foundation',
    type: 'website',
  },
};

const volunteerBenefits = [
  {
    id: 'tangible-impact',
    title: 'Make a Tangible Impact',
    description:
      'Whether you\'re tutoring children, organizing community events, or participating in our seasonal projects, your efforts will directly benefit those in need.',
    icon: Target,
    accentClass: styles.benefitIconImpact,
  },
  {
    id: 'valuable-experience',
    title: 'Gain Valuable Experience',
    description:
      'Volunteering with us provides a unique opportunity to gain hands-on experience in your field of interest, develop new skills, and expand your network.',
    icon: Briefcase,
    accentClass: styles.benefitIconExperience,
  },
  {
    id: 'supportive-community',
    title: 'Join a Supportive Community',
    description:
      'Our volunteers are a diverse and passionate group of individuals who share a common goal of making a difference. Joining our volunteer community means becoming part of a supportive network of like-minded individuals who are committed to creating positive change.',
    icon: Users,
    accentClass: styles.benefitIconCommunity,
  },
];

const volunteerPerks = [
  {
    id: 'certificate',
    title: 'Certificate of Volunteering',
    description: 'Official verified certificate acknowledging your service hours, dedication, and social impact.',
    icon: Award,
  },
  {
    id: 'letter',
    title: 'Letter of Appreciation',
    description: 'Personalized testimonial from executive leadership outlining your initiatives and reliability.',
    icon: FileCheck,
  },
  {
    id: 'shoutout',
    title: 'Social Media Shoutout',
    description: 'Public spotlight celebrating inspiring volunteer stories across our digital channels.',
    icon: Megaphone,
  },
  {
    id: 'recommendation',
    title: 'LinkedIn Recommendation',
    description: 'Direct endorsement of your teamwork and leadership skills on your professional profile.',
    icon: ThumbsUp,
  },
];

export default function VolunteeringPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* ─────────────────────────────────────────────────────────
          SECTION A: HERO
          ───────────────────────────────────────────────────────── */}
      <section className={styles.heroSection} aria-label="Volunteering Introduction">
        <div className={styles.heroGlow} aria-hidden="true" />
        <Container>
          <div className={styles.heroContentWrapper}>
            <div className={styles.heroTextCol}>
              <div className={styles.heroBadge}>
                <Sparkles className="w-4 h-4 text-pink-500 mr-2" aria-hidden="true" />
                <span>COMMUNITY CHANGEMAKERS</span>
              </div>

              <h1 className={styles.heroHeading}>
                <span>Volunteering</span>
              </h1>

              <div className={styles.heroQuoteBox}>
                <Quote className={styles.heroQuoteIcon} aria-hidden="true" />
                <p className={styles.heroQuoteText}>
                  “The smallest act of kindness is worth more than the grandest intention.”
                </p>
                <span className={styles.heroQuoteAuthor}>— Oscar Wilde</span>
              </div>

              <ApplyScrollButton label="Become a Volunteer" targetId="volunteer-form" />
            </div>

            <div className={styles.heroMediaCol}>
              <div className={styles.heroMediaCard}>
                <Image
                  src="/images/volunteering/volunteering-banner.webp"
                  alt="Volunteers in action with Raise India Foundation"
                  width={800}
                  height={600}
                  priority
                  className={styles.heroBannerImage}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className={styles.heroImageOverlayBadge}>
                  <span className={styles.overlayDot} aria-hidden="true" />
                  <span>Volunteer Openings Active</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────
          SECTION B: INTRODUCTION
          ───────────────────────────────────────────────────────── */}
      <section className={styles.introSection} aria-label="About Volunteering With Us">
        <Container>
          <div className={styles.introCard}>
            <div className={styles.introHeader}>
              <div className={styles.introBadge}>
                <Heart className="w-4 h-4 text-pink-600 mr-2" aria-hidden="true" />
                <span>PURPOSE IN ACTION</span>
              </div>
              <h2 className={styles.introHeading}>Make a Meaningful Difference</h2>
            </div>

            <div className={styles.introBody}>
              <p className={styles.introParagraph}>
                Volunteering with Raise India Foundation is not just about giving back—it&apos;s about making a meaningful difference in the lives of those who need it most. Whether you&apos;re passionate about education, healthcare, environmental conservation, or community development, we have a wide range of volunteer opportunities to suit your interests and skills.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────
          SECTION C: BENEFITS
          ───────────────────────────────────────────────────────── */}
      <section className={styles.benefitsSection} aria-label="Volunteer Chances and Benefits">
        <Container>
          <div className={styles.sectionHeadingBlock}>
            <span className={styles.subHeadingEyebrow}>YOUR OPPORTUNITY</span>
            <h2 className={styles.sectionMainTitle}>
              As a Volunteer, You Will Have the Chance To
            </h2>
            <p className={styles.sectionMainSubtitle}>
              Join hands with compassionate changemakers across the nation to build an inclusive society.
            </p>
          </div>

          <div className={styles.benefitsGrid}>
            {volunteerBenefits.map((b) => {
              const IconComp = b.icon;
              return (
                <div key={b.id} className={styles.benefitCard}>
                  <div className={`${styles.benefitIconWrap} ${b.accentClass}`}>
                    <IconComp className="w-7 h-7" aria-hidden="true" />
                  </div>
                  <h3 className={styles.benefitTitle}>{b.title}</h3>
                  <p className={styles.benefitDescription}>{b.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────
          SECTION D: PERKS
          ───────────────────────────────────────────────────────── */}
      <section className={styles.perksSection} aria-label="Volunteering Perks">
        <Container>
          <div className={styles.sectionHeadingBlock}>
            <span className={styles.subHeadingEyebrow}>VOLUNTEER PERKS</span>
            <h2 className={styles.sectionMainTitle}>Perks of Volunteering</h2>
            <p className={styles.sectionMainSubtitle}>
              We deeply respect your time and heart. Every volunteer is recognized for their invaluable service.
            </p>
          </div>

          <div className={styles.perksGrid}>
            {volunteerPerks.map((p) => {
              const IconComp = p.icon;
              return (
                <div key={p.id} className={styles.perkCard}>
                  <div className={styles.perkIconWrap}>
                    <IconComp className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className={styles.perkTitle}>{p.title}</h3>
                  <p className={styles.perkDescription}>{p.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────
          SECTION E: CAMPAIGN IMAGE SHOWCASE
          ───────────────────────────────────────────────────────── */}
      <section className={styles.visualShowcaseSection} aria-label="Volunteering Field Action Visual">
        <Container>
          <div className={styles.sectionHeadingBlock}>
            <span className={styles.subHeadingEyebrow}>ON-THE-GROUND SOLIDARITY</span>
            <h2 className={styles.sectionMainTitle}>Volunteers Transforming Lives</h2>
            <p className={styles.sectionMainSubtitle}>
              From distributing relief kits to mentoring underprivileged students in free learning centers.
            </p>
          </div>

          <div className={styles.visualFrameContainer}>
            <div className={styles.visualFrame}>
              <Image
                src="/images/volunteering/volunteering-banner.webp"
                alt="Raise India Foundation volunteers distributing aid and supporting communities"
                width={1280}
                height={720}
                className={styles.showcaseImage}
                sizes="(max-width: 1024px) 100vw, 980px"
              />
            </div>
            <div className={styles.visualCaptionStrip}>
              <Sparkles className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0" aria-hidden="true" />
              <span>
                Our volunteer family is at the forefront of bringing dignity, nourishment, and education to marginalized communities.
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────
          DONATE WAVES 1 TRANSITION
          ───────────────────────────────────────────────────────── */}
      <div className={styles.waveDividerWrapper} aria-hidden="true">
        <Image
          src="/images/volunteering/donate-waves.png"
          alt=""
          width={1200}
          height={60}
          className={styles.waveImage}
        />
      </div>

      {/* ─────────────────────────────────────────────────────────
          SECTION F: HOW TO VOLUNTEER & FORM
          ───────────────────────────────────────────────────────── */}
      <section className={styles.howToApplySection} aria-label="Volunteer Application Section">
        <Container>
          <div className={styles.howToApplyBanner}>
            <div className={styles.howToApplyIconCol}>
              <ClipboardList className="w-8 h-8" aria-hidden="true" />
            </div>
            <div className={styles.howToApplyTextCol}>
              <h2 className={styles.howToApplyHeading}>How To Volunteer</h2>
              <p className={styles.howToApplyParagraph}>
                Getting started as a volunteer with Raise India Foundation is easy! Simply fill out our online volunteer application form, where you can tell us more about yourself, your interests, and your availability. Once we receive your application, our volunteer coordinator will be in touch to discuss potential volunteer opportunities and next steps.
              </p>
            </div>
          </div>

          {/* Interactive Form Component */}
          <VolunteeringForm />
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────
          DONATE WAVES 2 TRANSITION
          ───────────────────────────────────────────────────────── */}
      <div className={styles.waveDividerWrapper} aria-hidden="true">
        <Image
          src="/images/volunteering/donate-waves2.png"
          alt=""
          width={1200}
          height={60}
          className={styles.waveImage}
        />
      </div>
    </div>
  );
}
