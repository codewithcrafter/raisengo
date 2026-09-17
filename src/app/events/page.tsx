import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container/Container';
import { events } from '@/lib/placeholder-data';
import styles from './page.module.css';

export const metadata = {
  title: 'Events | Raise India Foundation',
  description: 'Join our upcoming events, workshops, and fundraisers.',
};

export default function EventsPage() {
  const upcomingEvents = events; // using all for mockup
  
  return (
    <main className={styles.main}>
      <section className={`${styles.hero} full-bleed`}>
        <div className={styles.heroBlob}></div>
        <Container>
          <div className={styles.heroContent}>
            <div className={styles.eyebrowDecor}>📅 Upcoming Events</div>
            <h1 className="statement-text">
              Join the <span className={styles.highlightText}>Movement</span>
            </h1>
            <p className={styles.heroDescription}>
              Participate in our upcoming events, workshops, and fundraisers. Your presence makes a difference.
            </p>
          </div>
        </Container>
      </section>

      <section className={styles.eventsSection}>
        <Container>
          <div className={styles.eventList}>
            {upcomingEvents.map((event) => (
              <div key={event.id} className={styles.eventCard}>
                <div className={styles.eventDateBox}>
                  <span className={styles.dateMonth}>{event.date.split(' ')[0].substring(0, 3).toUpperCase()}</span>
                  <span className={styles.dateDay}>{event.date.split(' ')[1].replace(',', '')}</span>
                </div>
                
                <div className={styles.eventImage}>
                   <div className={styles.imagePlaceholder}>
                     <span className={styles.imageDoodle}>🎫</span>
                   </div>
                </div>
                
                <div className={styles.eventContent}>
                  <h3 className={styles.eventTitle}>{event.title}</h3>
                  <div className={styles.eventMeta}>
                    <span className={styles.metaItem}>🕒 {event.time}</span>
                    <span className={styles.metaItem}>📍 {event.location}</span>
                  </div>
                  <p className={styles.eventDesc}>{event.description}</p>
                  
                  <Link href={`/events/${event.slug}`} className={styles.registerBtn}>
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
