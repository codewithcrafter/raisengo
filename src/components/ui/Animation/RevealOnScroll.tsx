'use client';

import React, { createContext, useContext, useEffect, useState, useRef } from 'react';
import styles from './RevealOnScroll.module.css';

interface RevealOnScrollProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'none';
  threshold?: number;
  as?: keyof React.JSX.IntrinsicElements;
}

export function RevealOnScroll({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  threshold = 0.12,
  as: Component = 'div',
  style: userStyle,
  ...rest
}: RevealOnScrollProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsRevealed(true);
      return;
    }

    const node = elementRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(node);
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const style: React.CSSProperties = {
    ...(userStyle || {}),
    ...(delay > 0 ? { transitionDelay: `${delay}ms` } : {}),
  };
  const Element = Component as any;

  return (
    <Element
      ref={elementRef}
      style={style}
      className={`${styles.revealBase} ${direction === 'up' ? styles.revealUp : ''} ${
        isRevealed ? styles.isRevealed : ''
      } ${className}`}
      {...rest}
    >
      {children}
    </Element>
  );
}

const StaggerContext = createContext<boolean>(false);

interface StaggerContainerProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  as?: keyof React.JSX.IntrinsicElements;
}

export function StaggerContainer({
  children,
  className = '',
  threshold = 0.1,
  as: Component = 'div',
  ...rest
}: StaggerContainerProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsRevealed(true);
      return;
    }

    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(node);
        }
      },
      { threshold, rootMargin: '0px 0px -30px 0px' }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const Element = Component as any;

  return (
    <StaggerContext.Provider value={isRevealed}>
      <Element
        ref={containerRef}
        className={`${styles.staggerContainer} ${isRevealed ? styles.isRevealed : ''} ${className}`}
        {...rest}
      >
        {children}
      </Element>
    </StaggerContext.Provider>
  );
}

interface StaggerItemProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  index?: number;
  as?: keyof React.JSX.IntrinsicElements;
}

export function StaggerItem({
  children,
  className = '',
  index = 0,
  as: Component = 'div',
  style: userStyle,
  ...rest
}: StaggerItemProps) {
  const isParentRevealed = useContext(StaggerContext);
  const Element = Component as any;

  const style: React.CSSProperties = {
    ...(userStyle || {}),
    transitionDelay: `${Math.min(index * 90, 600)}ms`,
  };

  return (
    <Element
      style={style}
      className={`${styles.staggerItem} ${isParentRevealed ? styles.isRevealed : ''} ${className}`}
      {...rest}
    >
      {children}
    </Element>
  );
}
