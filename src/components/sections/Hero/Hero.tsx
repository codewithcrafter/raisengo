import React from 'react';
import { Container } from '@/components/ui/Container/Container';
import { Button } from '@/components/ui/Button/Button';
import styles from './Hero.module.css';

export const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <Container>
        <div className="grid-asymmetrical">
          {/* Left Content */}
          <div className={styles.content}>
            <div className={styles.eyebrowWrapper}>
              <span className={styles.eyebrow}>RAISING HOPE. CREATING OPPORTUNITIES.</span>
            </div>
            
            <h1 className={styles.title}>
              Every Child Deserves a <br/>
              <span className={styles.highlight}>Brighter</span> Tomorrow.
            </h1>
            
            <p className={styles.description}>
              Join our mission to empower marginalized communities through education, healthcare, and sustainable livelihood programs across the nation.
            </p>
            
            <div className={styles.actions}>
              <Button variant="primary" size="lg">DONATE NOW</Button>
              <Button variant="outline" size="lg" className={styles.outlineBtn}>EXPLORE OUR WORK</Button>
            </div>
          </div>
          
          {/* Right Image Composition */}
          <div className={styles.imageSection}>
            <div className={styles.blobBackground}></div>
            <div className={styles.magentaAccent}></div>
            
            <div className={styles.imageWrapper}>
              {/* Using a placeholder div for the image to simulate a real photo */}
              <div className={styles.placeholderImage}></div>
            </div>
            
            {/* Minimal Decorative element */}
            <div className={styles.decorElement}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 0L24 16L40 20L24 24L20 40L16 24L0 20L16 16L20 0Z" fill="var(--secondary)" opacity="0.8"/>
              </svg>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
