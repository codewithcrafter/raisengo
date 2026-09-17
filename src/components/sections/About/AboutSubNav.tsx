'use client';

import React, { useState, useEffect } from 'react';
import styles from './AboutSubNav.module.css';

const navItems = [
  { id: 'who-we-are', label: 'Who We Are' },
  { id: 'what-we-do', label: 'What We Do' },
  { id: 'mission-vision', label: 'Mission & Vision' },
  { id: 'directors-message', label: 'Director’s Message' },
  { id: 'legal-statutory', label: 'Legal & Statutory' },
  { id: 'awards-recognition', label: 'Awards & Honors' },
];

export const AboutSubNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('who-we-are');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offsetTop = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  return (
    <nav className={styles.subnavBar} aria-label="About Page Navigation">
      <div className={styles.container}>
        <ul className={styles.navList}>
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id} className={styles.navItem}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className={styles.activeDot} aria-hidden="true" />}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
