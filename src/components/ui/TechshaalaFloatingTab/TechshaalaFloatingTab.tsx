'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { Laptop } from 'lucide-react';
import styles from './TechshaalaFloatingTab.module.css';

export const TechshaalaFloatingTab: React.FC = () => {
  const [navbarBottom, setNavbarBottom] = useState<number | null>(null);
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const updatePosition = () => {
      const header = document.querySelector('header');
      if (header) {
        const rect = header.getBoundingClientRect();
        setNavbarBottom(Math.round(rect.bottom));
      }
    };

    // Initial measurement
    updatePosition();

    // Listen to scroll and track dynamically through the header's 300ms transition
    const handleScroll = () => {
      updatePosition();
      const startTime = performance.now();
      const trackTransition = (now: number) => {
        updatePosition();
        if (now - startTime < 350) {
          animFrameRef.current = requestAnimationFrame(trackTransition);
        }
      };
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = requestAnimationFrame(trackTransition);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updatePosition, { passive: true });

    // Observe header resize if header content or dimensions change
    const header = document.querySelector('header');
    let observer: ResizeObserver | null = null;
    if (header && typeof ResizeObserver !== 'undefined') {
      observer = new ResizeObserver(() => {
        updatePosition();
      });
      observer.observe(header);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updatePosition);
      if (observer) observer.disconnect();
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <Link
      href="/techshaala"
      className={styles.floatingTab}
      style={
        navbarBottom !== null
          ? ({ '--navbar-bottom': `${navbarBottom}px` } as React.CSSProperties)
          : undefined
      }
      aria-label="Techshaala Now Open: Empowering Education through Technology"
    >
      <div className={styles.iconWrapper} aria-hidden="true">
        <Laptop className={styles.tabIcon} />
      </div>
      <span className={styles.tabText}>
        <span className={styles.brandTitle}>Techshaala</span>
        <span className={styles.nowOpenBadge}>Now Open</span>
      </span>
      <span className={styles.livePulseDot} aria-hidden="true" />
    </Link>
  );
};
