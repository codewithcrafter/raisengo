import React from 'react';
import styles from './ImpactStrip.module.css';

interface MetricItem {
  id: string;
  number: string;
  label: string;
  detail: string;
}

const metrics: MetricItem[] = [
  {
    id: 'years',
    number: '11+',
    label: 'Years of Service',
    detail: 'Grassroots impact since 2014',
  },
  {
    id: 'lives',
    number: '1.83M+',
    label: 'Lives Uplifted',
    detail: 'Across 4 northern states',
  },
  {
    id: 'education',
    number: '18,050+',
    label: 'Students Educated',
    detail: 'Shikshalaya & Techshaala',
  },
  {
    id: 'surgeries',
    number: '14+',
    label: 'Heart Surgeries',
    detail: 'Pediatric cardiac procedures',
  },
];

export const ImpactStrip: React.FC = () => {
  return (
    <section className={styles.impactStrip} aria-label="Key Impact Highlights">
      <div className={styles.container}>
        <div className={styles.stripGrid}>
          {metrics.map((item, idx) => (
            <div key={item.id} className={styles.metricBlock}>
              <div className={styles.headerRow}>
                <span className={styles.indicatorDot} aria-hidden="true" />
                <span className={styles.metricNumber}>{item.number}</span>
              </div>
              <div className={styles.textGroup}>
                <h3 className={styles.metricLabel}>{item.label}</h3>
                <p className={styles.metricDetail}>{item.detail}</p>
              </div>
              {idx < metrics.length - 1 && (
                <div className={styles.divider} aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
