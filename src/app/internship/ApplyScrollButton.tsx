'use client';

import React from 'react';
import { ArrowDown } from 'lucide-react';
import styles from './page.module.css';

interface ApplyScrollButtonProps {
  children?: React.ReactNode;
  className?: string;
}

export const ApplyScrollButton: React.FC<ApplyScrollButtonProps> = ({
  children = 'Apply for Internship',
  className = '',
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const formElement = document.getElementById('application-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Focus the first form input for accessibility
      const firstInput = formElement.querySelector<HTMLInputElement>('input, textarea');
      if (firstInput) {
        setTimeout(() => firstInput.focus(), 600);
      }
    }
  };

  return (
    <a
      href="#application-form"
      onClick={handleClick}
      className={`${styles.heroCtaBtn} ${className}`.trim()}
      aria-label="Scroll to internship application form"
    >
      <span>{children}</span>
      <ArrowDown className="w-5 h-5 ml-2 transition-transform group-hover:translate-y-1" aria-hidden="true" />
    </a>
  );
};
