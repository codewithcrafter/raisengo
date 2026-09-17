import React from 'react';
import { Container } from '@/components/ui/Container/Container';
import { Button } from '@/components/ui/Button/Button';
import styles from './FinalCTA.module.css';

export const FinalCTA: React.FC = () => {
  return (
    <section className={styles.cta}>
      <div className={styles.blobDecor1}></div>
      <div className={styles.blobDecor2}></div>

      <Container className={styles.container}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>MAKE A DIFFERENCE TODAY</span>
          <h2 className={styles.title}>
            Your support can become <br/>
            <span className={styles.highlight}>someone's tomorrow.</span>
          </h2>
          <p className={styles.description}>
            Join hands with Raise India Foundation today and help us create lasting change in communities that need it the most.
          </p>

          <div className={styles.actions}>
            <Button variant="primary" size="lg">DONATE NOW</Button>
            <a href="/volunteer" className={styles.volunteerLink}>Become a Volunteer →</a>
          </div>
        </div>
      </Container>
    </section>
  );
};
