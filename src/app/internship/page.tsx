import type { Metadata } from 'next';
import Image from 'next/image';
import { Container } from '@/components/ui/Container/Container';
import { ApplyScrollButton } from './ApplyScrollButton';
import { InternshipForm } from './InternshipForm';
import {
  HeartHandshake,
  TrendingUp,
  Lightbulb,
  Laptop,
  Heart,
  Award,
  Coins,
  FileCheck,
  Megaphone,
  ThumbsUp,
  Quote,
  Sparkles,
  CheckCircle,
  Users,
} from 'lucide-react';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Crowdfunding Internship | Raise India Foundation',
  description:
    'Join Raise India Foundation as a Crowdfunding Intern. Create direct social impact, gain mentorship, earn a performance-based stipend, and change lives remotely.',
  openGraph: {
    title: 'Crowdfunding Internship | Raise India Foundation',
    description:
      'Join Raise India Foundation as a Crowdfunding Intern. Empower underprivileged communities through meaningful fundraising.',
    url: 'https://www.raiseindiafoundation.org/internship',
    images: [
      {
        url: 'https://www.raiseindiafoundation.org/files/partner/whatsapp-image-2024-05-17-at-02-47-14-26f0d4ca.webp',
        width: 1600,
        height: 1200,
        alt: 'Raise India Foundation Crowdfunding Internship',
      },
    ],
  },
};

const whyInternBenefits = [
  {
    id: 'meaningful-work',
    title: 'MEANINGFUL WORK',
    description:
      'As an intern, you will have the opportunity to create a direct impact on the lives of underprivileged people.',
    icon: HeartHandshake,
    accentClass: styles.benefitIconHeart,
  },
  {
    id: 'skill-development',
    title: 'SKILL DEVELOPMENT',
    description:
      'Throughout the internship, you will receive guidance and mentorship from skilled professionals, giving you an opportunity to learn and grow.',
    icon: TrendingUp,
    accentClass: styles.benefitIconSkill,
  },
  {
    id: 'flexibility',
    title: 'FLEXIBILITY',
    description:
      'We value creativity and innovation. As an intern, you will be encouraged to contribute your ideas and work collaboratively with our team.',
    icon: Lightbulb,
    accentClass: styles.benefitIconFlex,
  },
  {
    id: 'remote-work',
    title: 'REMOTE WORK',
    description:
      'The internship will be virtual, giving you the chance to customize your workspace and enhance your productivity.',
    icon: Laptop,
    accentClass: styles.benefitIconRemote,
  },
  {
    id: 'personal-fulfillment',
    title: 'PERSONAL FULFILLMENT',
    description:
      'By being a part of our team, you will experience personal fulfillment, knowing that your efforts are contributing to positive social change.',
    icon: Heart,
    accentClass: styles.benefitIconFulfill,
  },
];

const perksList = [
  {
    id: 'certificate',
    title: 'Certificate of Completion',
    description: 'Recognized official certificate acknowledging your dedicated contribution and impact.',
    icon: Award,
  },
  {
    id: 'stipend',
    title: 'Performance-based Stipend',
    description: 'Competitive monetary stipend awarded based on your initiative and campaign milestones.',
    icon: Coins,
    highlight: true,
  },
  {
    id: 'letter',
    title: 'Letter of Appreciation',
    description: 'Formal letter documenting your leadership, empathy, and organizational skills.',
    icon: FileCheck,
  },
  {
    id: 'shoutout',
    title: 'Social Media Shoutout',
    description: 'Public spotlight celebrating top-performing interns across our official channels.',
    icon: Megaphone,
  },
  {
    id: 'recommendation',
    title: 'LinkedIn recommendation',
    description: 'Professional endorsement directly on your LinkedIn profile from organization leaders.',
    icon: ThumbsUp,
  },
];

export default function InternshipPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* ─────────────────────────────────────────────────────────
          SECTION A: HERO
          ───────────────────────────────────────────────────────── */}
      <section className={styles.heroSection} aria-label="Crowdfunding Internship Introduction">
        <div className={styles.heroGlow} aria-hidden="true" />
        <Container>
          <div className={styles.heroContentWrapper}>
            <div className={styles.heroTextCol}>
              <div className={styles.heroBadge}>
                <Sparkles className="w-4 h-4 text-pink-500 mr-2" aria-hidden="true" />
                <span>YOUTH LEADERSHIP &amp; SOCIAL IMPACT</span>
              </div>

              <h1 className={styles.heroHeading}>
                Crowdfunding <span className={styles.highlightGradient}>Internship</span>
              </h1>

              <blockquote className={styles.heroQuoteBox}>
                <Quote className={styles.heroQuoteIcon} aria-hidden="true" />
                <p className={styles.heroQuoteText}>
                  “The Best Way To Find Your self Is To Lose your self In The service Of Others -MAHATMA GANDHI”
                </p>
              </blockquote>

              <div className={styles.heroCtaWrapper}>
                <ApplyScrollButton>Apply for Internship</ApplyScrollButton>
              </div>

              <div className={styles.heroStatsRow}>
                <div className={styles.heroStatItem}>
                  <Users className="w-5 h-5 text-purple-600" aria-hidden="true" />
                  <span>100% Virtual &amp; Flexible</span>
                </div>
                <div className={styles.heroStatItem}>
                  <CheckCircle className="w-5 h-5 text-emerald-600" aria-hidden="true" />
                  <span>Mentorship &amp; Certificate</span>
                </div>
              </div>
            </div>

            <div className={styles.heroVisualCol}>
              <div className={styles.heroCardFrame}>
                <div className={styles.heroVisualInner}>
                  <Image
                    src="https://www.raiseindiafoundation.org/files/partner/whatsapp-image-2024-05-17-at-02-47-14-26f0d4ca.webp"
                    alt="Raise India Foundation Crowdfunding Internship Cohort"
                    width={800}
                    height={600}
                    priority
                    className={styles.heroBannerImage}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className={styles.heroImageOverlayBadge}>
                    <span className={styles.overlayDot} aria-hidden="true" />
                    <span>Applications Open for Next Cohort</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────
          SECTION B: DEAR INTERNS
          ───────────────────────────────────────────────────────── */}
      <section className={styles.dearInternsSection} aria-label="Dear Interns Message">
        <Container>
          <div className={styles.dearInternsCard}>
            <div className={styles.dearInternsHeader}>
              <div className={styles.dearInternsBadge}>
                <Heart className="w-4 h-4 text-pink-600 mr-2" aria-hidden="true" />
                <span>FROM OUR LEADERSHIP</span>
              </div>
              <h2 className={styles.dearInternsHeading}>Dear Interns</h2>
            </div>

            <div className={styles.dearInternsBody}>
              <p className={styles.dearInternsParagraph}>
                “Remember that you have the power to change lives. Each task you undertake, no matter how small, will contribute to a larger mission of creating a better future for those who are deprived. Your presence with us will reflect your passion, empathy, and desire to make a difference. Embrace this opportunity with open hearts and open minds.”
              </p>
              <div className={styles.dearInternsFooter}>
                <div className={styles.dearInternsSignatureLine}>
                  <span className={styles.signatureName}>Raise India Foundation Team</span>
                  <span className={styles.signatureRole}>Mentorship &amp; Youth Outreach Cell</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────
          SECTION C: WHY INTERN WITH US?
          ───────────────────────────────────────────────────────── */}
      <section className={styles.whyInternSection} aria-label="Why Intern With Us">
        <Container>
          <div className={styles.sectionHeadingBlock}>
            <span className={styles.subHeadingEyebrow}>EMPOWERMENT &amp; GROWTH</span>
            <h2 className={styles.sectionMainTitle}>Why Intern With Us?</h2>
            <p className={styles.sectionMainSubtitle}>
              Experience hands-on changemaking, gain invaluable leadership tools, and expand your horizons with a forward-thinking social development organization.
            </p>
          </div>

          <div className={styles.benefitsGrid}>
            {whyInternBenefits.map((benefit, index) => {
              const IconComp = benefit.icon;
              return (
                <div
                  key={benefit.id}
                  className={`${styles.benefitCard} ${index === 0 ? styles.benefitCardLarge : ''}`}
                >
                  <div className={`${styles.benefitIconWrap} ${benefit.accentClass}`}>
                    <IconComp className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                  <p className={styles.benefitDescription}>{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────
          SECTION D: PERKS OF THE INTERNSHIP
          ───────────────────────────────────────────────────────── */}
      <section className={styles.perksSection} aria-label="Perks of the Internship">
        <Container>
          <div className={styles.sectionHeadingBlock}>
            <span className={styles.subHeadingEyebrow}>YOUR REWARDS</span>
            <h2 className={styles.sectionMainTitle}>Perks of the Internship</h2>
            <p className={styles.sectionMainSubtitle}>
              We value the time and passion our interns invest. Here is what you will earn during your journey with Raise India Foundation:
            </p>
          </div>

          <div className={styles.perksGrid}>
            {perksList.map((perk) => {
              const IconComp = perk.icon;
              return (
                <div
                  key={perk.id}
                  className={`${styles.perkCard} ${perk.highlight ? styles.perkHighlightCard : ''}`}
                >
                  <div className={styles.perkIconWrap}>
                    <IconComp className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className={styles.perkTitle}>{perk.title}</h3>
                  <p className={styles.perkDescription}>{perk.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────
          SECTION E: CROWDFUNDING INTERNSHIP VISUAL
          ───────────────────────────────────────────────────────── */}
      <section className={styles.visualShowcaseSection} aria-label="Crowdfunding Internship Visual Showcase">
        <Container>
          <div className={styles.sectionHeadingBlock}>
            <span className={styles.subHeadingEyebrow}>COMMUNITY IN ACTION</span>
            <h2 className={styles.sectionMainTitle}>Empowering Change Together</h2>
            <p className={styles.sectionMainSubtitle}>
              See how our crowdfunding interns connect grassroots beneficiaries with supporters across the nation.
            </p>
          </div>

          <div className={styles.visualFrameContainer}>
            <div className={styles.visualFrame}>
              <Image
                src="https://www.raiseindiafoundation.org/files/partner/whatsapp-image-2024-05-17-at-02-47-14-26f0d4ca.webp"
                alt="Raise India Foundation Crowdfunding Internship campaign and volunteer interaction"
                width={1600}
                height={1200}
                className={styles.showcaseImage}
                sizes="(max-width: 1024px) 100vw, 1000px"
              />
            </div>
            <div className={styles.visualCaptionStrip}>
              <Sparkles className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0" aria-hidden="true" />
              <span>
                Every campaign organized by our interns fuels lifesaving healthcare, child nutrition, and grassroots education.
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────
          SECTION H (Part 1): DONATE WAVE 1 TRANSITION
          ───────────────────────────────────────────────────────── */}
      <div className={styles.waveDividerWrapper} aria-hidden="true">
        <Image
          src="https://www.raiseindiafoundation.org/assets/img/donate-waves.webp"
          alt="Campaign support wave decoration"
          width={1500}
          height={44}
          className={styles.waveDividerImage}
        />
      </div>

      {/* ─────────────────────────────────────────────────────────
          SECTION F: HOW TO APPLY? & SECTION G: APPLICATION FORM
          ───────────────────────────────────────────────────────── */}
      <section className={styles.applicationSection} aria-label="How to Apply and Application Form">
        <Container>
          {/* Section F: How to Apply Info Banner */}
          <div className={styles.howToApplyBanner}>
            <div className={styles.howToApplyIcon}>
              <FileCheck className="w-8 h-8 text-purple-700" aria-hidden="true" />
            </div>
            <div className={styles.howToApplyContent}>
              <span className={styles.howToApplyEyebrow}>SIMPLE APPLICATION PROCESS</span>
              <h2 className={styles.howToApplyHeading}>How To Apply?</h2>
              <p className={styles.howToApplyText}>
                “To apply for a crowdfunding internship, simply fill out our online internship application form and indicate your interest in fundraising and crowdfunding. Our internship coordinator will then contact you to discuss potential opportunities and next steps.”
              </p>
            </div>
          </div>

          {/* Section G: Form Component */}
          <InternshipForm />
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────
          SECTION H (Part 2): DONATE WAVE 2 TRANSITION
          ───────────────────────────────────────────────────────── */}
      <div className={styles.waveDividerWrapperBottom} aria-hidden="true">
        <Image
          src="https://www.raiseindiafoundation.org/assets/img/donate-waves2.webp"
          alt="Community support transition wave"
          width={1500}
          height={44}
          className={styles.waveDividerImage}
        />
      </div>
    </div>
  );
}
