'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import styles from './page.module.css';

interface ApplyScrollButtonProps {
  label?: string;
  targetId?: string;
}

export const ApplyScrollButton: React.FC<ApplyScrollButtonProps> = ({
  label = 'Become a Volunteer',
  targetId = 'volunteer-form',
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Set focus to the first input for accessibility
      const firstInput = el.querySelector('input') as HTMLInputElement | null;
      if (firstInput) {
        firstInput.focus({ preventScroll: true });
      }
    }
  };

  return (
    <a
      href={`#${targetId}`}
      onClick={handleClick}
      className={styles.heroCtaBtn}
      aria-label={`${label} - Jump straight to application form`}
    >
      <span>{label}</span>
      <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
    </a>
  );
};
