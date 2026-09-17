'use client';

import React, { useState, useEffect, useCallback, useRef, TouchEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './HeroSlider.module.css';

// ─────────────────────────────────────────────
// SLIDE DATA (Preserving exact content & images)
// ─────────────────────────────────────────────
export const slides = [
  {
    id: 1,
    category: 'RAISE INDIA FOUNDATION',
    headline: ['A New Way of', 'Giving ', 'Life', '.'],
    highlightWord: 'Life',
    description: 'Dedicated to the holistic development of underprivileged communities across India through education, healthcare, and empowerment since 2014.',
    primaryCta: { label: 'DONATE NOW', href: '/donate' },
    secondaryCta: { label: 'EXPLORE OUR WORK', href: '/our-work' },
    image: '/images/hero/slide-1.jpg',
    placeholderBg: 'linear-gradient(135deg, #2D1145 0%, #5A2D7E 50%, #E0679D 100%)',
    objectPosition: 'center 30%',
    transitionType: 'cinematicZoom',
  },
  {
    id: 2,
    category: 'HEALTHCARE • MISSION LITTLE HEARTBEATS',
    headline: ['Healing Children Born with', 'Congenital ', 'Heart Defects', '.'],
    highlightWord: 'Heart Defects',
    description: 'In partnership with Fortis Escorts Heart Institute, sponsoring critical open-heart surgeries for children from impoverished families.',
    primaryCta: { label: 'SAVE A LITTLE HEART', href: '/donate' },
    secondaryCta: { label: 'READ RECOVERY STORIES', href: '/stories' },
    image: '/images/hero/slide-2.jpg',
    placeholderBg: 'linear-gradient(135deg, #1C0A2E 0%, #2D1145 50%, #814CBA 100%)',
    objectPosition: 'center center',
    transitionType: 'horizontalSlide',
  },
  {
    id: 3,
    category: 'EDUCATION • SHIKSHALAYA & TECHSHAALA',
    headline: ['Empowering 18,050+ Children with', 'Quality ', 'Education', '.'],
    highlightWord: 'Education',
    description: 'Free learning centers and modern digital labs supported by Konverge Technologies, equipping marginalized youth for the digital era.',
    primaryCta: { label: 'SUPPORT EDUCATION', href: '/donate' },
    secondaryCta: { label: 'ONGOING PROJECTS', href: '/our-work/ongoing-projects' },
    image: '/images/hero/slide-3.jpg',
    placeholderBg: 'linear-gradient(135deg, #3E1D5B 0%, #814CBA 70%, #E0679D 100%)',
    objectPosition: 'center 40%',
    transitionType: 'softScale',
  },
  {
    id: 4,
    category: 'WOMEN WELFARE • CHUPPI TODO',
    headline: ['Dignity and Hygiene for', 'Every ', 'Woman', '.'],
    highlightWord: 'Woman',
    description: 'Breaking taboos with menstrual awareness camps and distributing 12,000+ hygiene dignity kits to female construction workers across NCR.',
    primaryCta: { label: 'SUPPORT THE CAUSE', href: '/donate' },
    secondaryCta: { label: 'GET INVOLVED', href: '/get-involved' },
    image: '/images/hero/slide-4.png',
    placeholderBg: 'linear-gradient(160deg, #E0679D 0%, #814CBA 60%, #2D1145 100%)',
    objectPosition: 'center 20%',
    transitionType: 'diagonalReveal',
  },
];

function renderHeadline(parts: string[], highlightWord: string): React.ReactNode {
  return parts.map((part, i) => {
    if (part === highlightWord) {
      return (
        <span key={i} className={styles.highlight}>
          {part}
        </span>
      );
    }
    if (i === 0 && parts.length > 1) {
      return (
        <React.Fragment key={i}>
          {part}
          <br />
        </React.Fragment>
      );
    }
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
}

const SLIDE_DURATION = 3000; // 3 seconds display duration per slide

export const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState<number>(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [animating, setAnimating] = useState<boolean>(false);
  const [userPaused, setUserPaused] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isIntersecting, setIsIntersecting] = useState<boolean>(true);
  const [isTabVisible, setIsTabVisible] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const [preloadedIndices, setPreloadedIndices] = useState<number[]>([0]);

  const sectionRef = useRef<HTMLElement>(null);
  const requestRef = useRef<number | undefined>(undefined);
  const previousTimeRef = useRef<number | undefined>(undefined);
  const accumulatedTimeRef = useRef<number>(0);

  // Touch gesture state
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const total = slides.length;
  const isPaused = userPaused || isHovered || isFocused || !isIntersecting || !isTabVisible;

  // Viewport Visibility Tracking via IntersectionObserver
  useEffect(() => {
    const element = sectionRef.current;
    if (!element || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  // Tab / Window Visibility Tracking via Page Visibility API
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsTabVisible(document.visibilityState === 'visible');
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  // Preload NEXT slide image when current slide progress > 50% or slide changes
  const nextIndex = (current + 1) % total;
  useEffect(() => {
    if (!preloadedIndices.includes(nextIndex)) {
      setPreloadedIndices((prevList) => [...prevList, nextIndex]);
    }
  }, [current, nextIndex, preloadedIndices]);

  const goTo = useCallback(
    (index: number) => {
      if (animating || index === current) return;

      // Cleanly reset animation frame progress & accumulated time
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      previousTimeRef.current = undefined;
      accumulatedTimeRef.current = 0;
      setProgress(0);

      setPrev(current);
      setAnimating(true);
      setCurrent(index);

      setTimeout(() => {
        setPrev(null);
        setAnimating(false);
      }, 650); // 650ms transition duration
    },
    [animating, current]
  );

  const goNext = useCallback(() => goTo((current + 1) % total), [current, goTo, total]);
  const goPrev = useCallback(() => goTo((current - 1 + total) % total), [current, goTo, total]);

  // RequestAnimationFrame Autoplay Timer Loop
  const animate = useCallback(
    (time: number) => {
      if (previousTimeRef.current !== undefined && !isPaused && !animating) {
        const deltaTime = time - previousTimeRef.current;
        accumulatedTimeRef.current += deltaTime;

        const newProgress = Math.min((accumulatedTimeRef.current / SLIDE_DURATION) * 100, 100);
        setProgress(newProgress);

        if (accumulatedTimeRef.current >= SLIDE_DURATION) {
          goNext();
          return;
        }
      }
      previousTimeRef.current = time;
      if (!isPaused && !animating) {
        requestRef.current = requestAnimationFrame(animate);
      }
    },
    [isPaused, animating, goNext]
  );

  useEffect(() => {
    if (!isPaused && !animating) {
      previousTimeRef.current = performance.now();
      requestRef.current = requestAnimationFrame(animate);
    } else {
      previousTimeRef.current = undefined;
    }
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [animate, isPaused, animating]);

  // Keyboard Navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === ' ') {
        e.preventDefault();
        setUserPaused((p) => !p);
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [goNext, goPrev]);

  // Touch Swipe Handlers
  const minSwipeDistance = 40;
  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const onTouchEndHandler = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) goNext();
    if (distance < -minSwipeDistance) goPrev();
  };

  const prefersReducedMotion =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  const slide = slides[current];
  const prevSlide = prev !== null ? slides[prev] : null;

  const getTransitionStyleClass = (type: string) => {
    switch (type) {
      case 'cinematicZoom':
        return styles.transitionCinematicZoom;
      case 'horizontalSlide':
        return styles.transitionHorizontalSlide;
      case 'softScale':
        return styles.transitionSoftScale;
      case 'diagonalReveal':
        return styles.transitionDiagonalReveal;
      default:
        return styles.transitionCinematicZoom;
    }
  };

  return (
    <section
      ref={sectionRef}
      className={styles.hero}
      aria-label="Homepage Hero Slider"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEndHandler}
    >
      {/* Subtle Ambient Decorative Floating Shapes */}
      <div className={styles.bgGlowCircle} aria-hidden="true" />
      <div className={styles.floatingDecorContainer} aria-hidden="true">
        <span className={`${styles.dot} ${styles.floatingDot1}`} />
        <span className={`${styles.dot} ${styles.floatingDot2}`} />
        <span className={`${styles.dot} ${styles.floatingDot3}`} />
        <svg className={styles.decorativeCurve} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="48" stroke="rgba(224, 103, 157, 0.15)" strokeWidth="1.5" strokeDasharray="6 6" />
        </svg>
      </div>

      <div className={styles.slidesWrapper} aria-live="polite">
        {/* Exiting Slide */}
        {prevSlide && (
          <div
            className={`${styles.slide} ${styles.slideExit} ${prefersReducedMotion ? styles.noAnim : ''}`}
            aria-hidden="true"
          >
            <SlideContent slide={prevSlide} isActive={false} isFirstSlide={prevSlide.id === 1} />
          </div>
        )}

        {/* Active Slide */}
        <div
          key={current}
          className={`${styles.slide} ${styles.slideEnter} ${
            animating && !prefersReducedMotion ? getTransitionStyleClass(slide.transitionType) : styles.slideVisible
          }`}
          role="group"
          aria-roledescription="slide"
          aria-label={`Slide ${current + 1} of ${total}`}
        >
          <SlideContent slide={slide} isActive={true} isFirstSlide={slide.id === 1} />
        </div>

        {/* Controlled Preloading of Next Slide Image */}
        {preloadedIndices.includes(nextIndex) && nextIndex !== current && (
          <div style={{ display: 'none' }} aria-hidden="true">
            <Image 
              src={slides[nextIndex].image} 
              alt="Preload next slide" 
              fill 
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
              loading="lazy" 
            />
          </div>
        )}
      </div>

      {/* Modern Multi-Track Progress Indicator & Circular Controls */}
      <div className={styles.controlsBar}>
        {/* Editorial Progress Indicator Tracks (01 ━━━━━  02 ━━━━━  03 ━━━━━  04 ━━━━━) */}
        <div className={styles.progressTracksGroup} role="tablist" aria-label="Hero Slide Progress">
          {slides.map((s, idx) => {
            const isActive = idx === current;
            const isCompleted = idx < current;
            return (
              <button
                key={s.id}
                role="tab"
                aria-selected={isActive}
                aria-label={`Go to slide ${idx + 1}: ${s.category}`}
                className={`${styles.progressTrackBtn} ${isActive ? styles.trackActive : ''}`}
                onClick={() => goTo(idx)}
              >
                <span className={styles.trackNumber}>0{s.id}</span>
                <div className={styles.trackLineBg}>
                  <div
                    className={styles.trackLineFill}
                    style={{
                      width: isActive
                        ? prefersReducedMotion
                          ? '100%'
                          : `${progress}%`
                        : isCompleted
                        ? '100%'
                        : '0%',
                    }}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Circular Arrow Navigation Controls */}
        <div className={styles.navigationControls}>
          <button
            className={styles.pauseToggleBtn}
            onClick={() => setUserPaused((p) => !p)}
            aria-label={userPaused ? 'Resume autoplay' : 'Pause autoplay'}
          >
            {userPaused ? (
              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                <path d="M6 3.5L12.5 8L6 12.5V3.5Z" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                <rect x="4" y="3" width="3" height="10" rx="1" />
                <rect x="9" y="3" width="3" height="10" rx="1" />
              </svg>
            )}
          </button>

          <button
            className={`${styles.circleNavBtn} ${styles.prevBtn}`}
            onClick={goPrev}
            aria-label="Previous slide"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            className={`${styles.circleNavBtn} ${styles.nextBtn}`}
            onClick={goNext}
            aria-label="Next slide"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────
// SLIDE CONTENT COMPONENT (Full Bleed Image + Staggered Text)
// ─────────────────────────────────────────────
function SlideContent({ slide, isActive, isFirstSlide }: { slide: typeof slides[0]; isActive: boolean; isFirstSlide: boolean }) {
  return (
    <div className={styles.slideInner}>
      {/* Background Image / Gradient Layer with Ken Burns Motion */}
      <div className={styles.imageLayer}>
        {slide.image ? (
          <Image
            src={slide.image}
            alt={slide.headline.join('')}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
            style={{ objectFit: 'cover', objectPosition: slide.objectPosition }}
            priority={isFirstSlide}
            loading={isFirstSlide ? 'eager' : 'lazy'}
            className={styles.heroImage}
          />
        ) : (
          <div className={styles.heroImagePlaceholder} style={{ background: slide.placeholderBg }} />
        )}
        <div className={styles.gradientOverlay} />
      </div>

      {/* Staggered Text Content Container */}
      <div className={styles.contentContainer}>
        <div className={`${styles.textContent} ${isActive ? styles.contentActive : ''}`}>
          
          <div className={styles.eyebrowWrapper}>
            <span className={styles.categoryBadge}>{slide.category}</span>
          </div>

          <h1 className={styles.headline}>
            {renderHeadline(slide.headline, slide.highlightWord)}
          </h1>

          <p className={styles.description}>{slide.description}</p>

          <div className={styles.actions}>
            <Link href={slide.primaryCta.href} className={styles.primaryBtn}>
              <span className={styles.primaryBtnText}>{slide.primaryCta.label}</span>
              <span className={styles.btnShimmer} aria-hidden="true" />
            </Link>

            <Link href={slide.secondaryCta.href} className={styles.secondaryBtn}>
              <span>{slide.secondaryCta.label}</span>
              <span className={styles.arrowIcon} aria-hidden="true">→</span>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
