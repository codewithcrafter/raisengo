import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container/Container';
import { FinalCTA } from '@/components/sections/FinalCTA/FinalCTA';
import styles from './page.module.css';
import GalleryClient from './GalleryClient';

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
          </div>Fix the Print Media photo thumbnails.

          IMPORTANT:

          * Do NOT change the header.
          * Do NOT change the video section.
          * Do NOT change the Print Media layout, dimensions, borders, or modal behavior.
          * Do NOT modify the original image files.

          For the 11 Print Media photos:

          1. Keep the thumbnail box exactly:

          * Width: `305.63px`
          * Height: `367px`
          * `overflow-hidden`

          2. Check EACH photo individually in the actual browser.

          3. **If a photo already fills the entire 305.63px × 367px box with no visible white space, DO NOT zoom it. Keep it at its original/default scale.**

          4. **Only photos that have visible white space or do not properly fill the box should be zoomed IN.**

          * Increase the scale only for that specific photo.
          * Use the minimum zoom necessary to completely remove the white space.
          * Do NOT apply the same zoom to all 11 photos.
          * Different photos can have different zoom levels.

          5. Do NOT stretch or distort any photo.

          * Maintain the original aspect ratio.
          * Only use cropping/zooming to remove unwanted white space.

          6. Keep the existing styling:
          `w-[305.63px] h-[367px] object-cover border-4 border-purple-700 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer`

          7. The hover effect must remain separate from the individual photo's base zoom.

          8. The full-screen modal must remain unchanged:

          * When clicked, show the **complete original photo**.
          * Do NOT use the thumbnail zoom level inside the modal.
          * Use `object-contain`.
          * Do not crop the original photo in the modal.

          The key rule is:

          **Already fills box → NO zoom.**
          **Does not fill box / has white space → zoom IN only that photo until the white space is gone.**

          After implementing, visually inspect all 11 photos in the browser and correct the individual zoom values where necessary.

        </Container>
      </section>

      {/* Event Photos & Press Clippings Gallery */}
      <section className={styles.section} style={{ backgroundColor: '#FAF6FB' }}>
        <Container>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Print Media</span>
            <h2 className={styles.sectionTitle}>Event Photos &amp; Press Clippings</h2>
            <p className={styles.sectionSubtitle}>
              A visual journey of our grassroots impact, community events, and coverage in leading newspapers.
            </p>
          </div>

          <GalleryClient />



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
