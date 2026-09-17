import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container/Container';
import { FinalCTA } from '@/components/sections/FinalCTA/FinalCTA';
import styles from './page.module.css';

export const metadata = {
  title: 'Media & Press Coverage | Raise India Foundation',
  description: 'Documentaries, news clippings, video coverage, and press releases highlighting Raise India Foundation initiatives across India.',
};

const digitalVideos = [
  {
    id: 'yLsinyUlqdc',
    title: 'Mission Little Heartbeats: Healing Congenital Heart Defects',
    description: 'Documentary following underprivileged children receiving life-saving pediatric cardiac surgery in partnership with Fortis Hospital.',
  },
  {
    id: 'SW6_pDe-gYA',
    title: 'Shikshalaya: Educating First-Generation Learners',
    description: 'A glimpse inside our learning centers in Delhi and Agra, nurturing over 18,050 students with dignity and holistic care.',
  },
  {
    id: 'ZDO1PqmqHbM',
    title: 'Chuppi Todo – Sharam Nahi Samman',
    description: 'Breaking menstrual health taboos and distributing Dignity Kits to daily-wage female construction workers.',
  },
  {
    id: 'W70Dik1J30M',
    title: 'Yamuna Monsoon Flood Relief Operations',
    description: 'Ground coverage of Raise India Foundation relief teams distributing emergency rations, water, and shelters along Delhi riverbanks.',
  },
  {
    id: '320V3QEwQTw',
    title: 'Kambal Udhao Zindagi Bachao: Midnight Winter Drive',
    description: 'Annual midnight winter relief placing heavy woolen blankets on homeless citizens sleeping on cold Delhi pavements.',
  },
  {
    id: 'IP8L9RteJmI',
    title: 'Techshaala Digital Lab Inauguration with Konverge Technologies',
    description: 'Launch of cutting-edge computer education lab providing digital literacy and coding basics for slum youth.',
  },
];

const printArticles = [
  {
    id: 'p1',
    title: 'Dainik Jagran: Free Shikshalaya Learning Center Inaugurated in Balkeshwar, Agra',
    date: 'July 2023',
    image: '/images/migrated/media/news1.webp',
  },
  {
    id: 'p2',
    title: 'Amar Ujala: Raise India Foundation Organizes Free Vision & Health Check-up Camp',
    date: 'September 2023',
    image: '/images/migrated/media/news2.webp',
  },
  {
    id: 'p3',
    title: 'Navbharat Times: COVID Warriors Honored for Tireless Pandemic Ration Relief',
    date: 'June 2021',
    image: '/images/migrated/awards/covid-warriors-award.webp',
  },
  {
    id: 'p4',
    title: 'Punjab Kesari: Chuppi Todo Campaign Reaches Female Construction Workers Across NCR',
    date: 'March 2024',
    image: '/images/migrated/partners/csr-partnership-1.webp',
  },
];

export default function MediaPage() {
  return (
    <main className={styles.main}>
      {/* Hero */}
      <section className={styles.hero}>
        <Container>
          <span className={styles.eyebrow}>NEWS &amp; DOCUMENTARIES</span>
          <h1 className={styles.title}>
            Media Coverage &amp; <span className={styles.highlightText}>Field Stories</span>
          </h1>
          <p className={styles.heroDesc}>
            Watch authentic video documentaries from our project sites and read regional press coverage chronicling Raise India Foundation's grassroots impact over the past 11 years.
          </p>
        </Container>
      </section>

      {/* Digital Media / Documentaries */}
      <section className={styles.section}>
        <Container>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>VIDEO STORIES</span>
            <h2 className={styles.sectionTitle}>Digital Media &amp; Field Documentaries</h2>
            <p className={styles.sectionSubtitle}>
              Video chronicles capturing real transformations, heart surgeries, and community relief operations.
            </p>
          </div>

          <div className={styles.videoGrid}>
            {digitalVideos.map((video) => (
              <div key={video.id} className={styles.videoCard}>
                <div className={styles.videoFrameWrapper}>
                  <iframe
                    className={styles.videoIframe}
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className={styles.videoBody}>
                  <h3 className={styles.videoTitle}>{video.title}</h3>
                  <p className={styles.videoDesc}>{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Print Media Clippings */}
      <section className={styles.section} style={{ backgroundColor: '#FAF6FB' }}>
        <Container>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>PRESS CLIPPINGS</span>
            <h2 className={styles.sectionTitle}>Print Media Coverage</h2>
            <p className={styles.sectionSubtitle}>
              Articles, event features, and editorial coverage in leading national and regional daily newspapers.
            </p>
          </div>

          <div className={styles.printGrid}>
            {printArticles.map((article) => (
              <div key={article.id} className={styles.printCard}>
                <div className={styles.printImageWrapper}>
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className={styles.printImage}
                  />
                </div>
                <div className={styles.printBody}>
                  <span className={styles.printDate}>{article.date}</span>
                  <h3 className={styles.printTitle}>{article.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <p style={{ fontSize: '15px', color: '#564861' }}>
              For press inquiries, documentary filming, or media kits, contact{' '}
              <a href="mailto:care@raiseindiafoundation.org" style={{ color: '#E0679D', fontWeight: 700 }}>
                care@raiseindiafoundation.org
              </a>
            </p>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </main>
  );
}
