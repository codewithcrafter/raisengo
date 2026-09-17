"use client";

import React from 'react';
import { Container } from '@/components/ui/Container/Container';
import { useScrollReveal } from '@/lib/useScrollReveal';
import { useCounter } from '@/lib/useCounter';
import interactionStyles from '@/lib/interactions.module.css';
import styles from './Stats.module.css';

const statsData = [
  { numVal: 183, isDecimal: true, suffix: 'M+', label: 'Lives Uplifted (Audited)' },
  { numVal: 11, isDecimal: false, suffix: '+ Years', label: 'Dedicated Grassroots Service' },
  { numVal: 18050, isDecimal: false, suffix: '+', label: 'Students in Shikshalaya' },
  { numVal: 14, isDecimal: false, suffix: '+', label: 'Heart Surgeries Completed' },
];

export const Stats: React.FC = () => {
  const [sectionRef, isVisible] = useScrollReveal<HTMLElement>({ threshold: 0.5 });

  return (
    <section id="impact" ref={sectionRef} className={`${styles.stats} ${interactionStyles.revealUp} ${isVisible ? interactionStyles.revealed : ''}`}>
      <Container>
        <div className={`${styles.grid} ${interactionStyles.staggerContainer}`}>
          {statsData.map((stat, idx) => (
            <StatItem 
              key={idx} 
              numVal={stat.numVal} 
              isDecimal={stat.isDecimal}
              suffix={stat.suffix} 
              label={stat.label} 
              isVisible={isVisible} 
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

const StatItem = ({ 
  numVal, 
  isDecimal,
  suffix, 
  label, 
  isVisible 
}: { 
  numVal: number;
  isDecimal?: boolean;
  suffix: string;
  label: string;
  isVisible: boolean;
}) => {
  const count = useCounter(numVal, isVisible, 1200);
  const displayCount = isDecimal ? (count / 100).toFixed(2) : count.toLocaleString();
  
  return (
    <div className={styles.statItem}>
      <span className={styles.value}>{displayCount}{suffix}</span>
      <span className={styles.label}>{label}</span>
    </div>
  );
};
