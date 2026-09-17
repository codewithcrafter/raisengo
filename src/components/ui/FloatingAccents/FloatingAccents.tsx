import React from 'react';
import styles from './FloatingAccents.module.css';

interface FloatingAccentsProps {
  variant?: 'stars' | 'sparkles' | 'hearts' | 'mixed';
  className?: string;
}

export const FloatingAccents: React.FC<FloatingAccentsProps> = ({ variant = 'mixed', className = '' }) => {
  return (
    <div className={`${styles.accentsWrapper} ${className}`} aria-hidden="true">
      {(variant === 'stars' || variant === 'mixed') && (
        <svg className={`${styles.accentItem} ${styles.star1}`} width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="#E0679D" opacity="0.8"/>
        </svg>
      )}

      {(variant === 'sparkles' || variant === 'mixed') && (
        <svg className={`${styles.accentItem} ${styles.sparkle1}`} width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" fill="#814CBA" opacity="0.7"/>
        </svg>
      )}

      {(variant === 'hearts' || variant === 'mixed') && (
        <svg className={`${styles.accentItem} ${styles.heart1}`} width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#E0679D" opacity="0.6"/>
        </svg>
      )}

      {(variant === 'mixed') && (
        <svg className={`${styles.accentItem} ${styles.circle1}`} width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="6" stroke="#814CBA" strokeWidth="2" strokeDasharray="3 3" opacity="0.6" />
        </svg>
      )}
    </div>
  );
};
