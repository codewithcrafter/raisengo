import React from 'react';
import { Container } from '@/components/ui/Container/Container';
import styles from './ImpactStrip.module.css';

const impacts = [
  { label: 'Education', icon: '📚' },
  { label: 'Healthcare', icon: '🏥' },
  { label: 'Livelihood', icon: '🌱' },
  { label: 'Women Empowerment', icon: '👩🏽' },
  { label: 'Community', icon: '🤝' },
];

export const ImpactStrip: React.FC = () => {
  return (
    <section className={styles.strip}>
      <Container>
        <div className={styles.grid}>
          {impacts.map((item, idx) => (
            <div key={idx} className={styles.item}>
              <span className={styles.icon} aria-hidden="true">{item.icon}</span>
              <span className={styles.label}>{item.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
