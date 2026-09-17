"use client";

import { useEffect, useState } from 'react';

export function useCounter(endValue: number, isVisible: boolean, duration: number = 1000): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    // Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setCount(endValue);
      return;
    }

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      // Easing function (ease-out)
      const easeOutQuart = 1 - Math.pow(1 - Math.min(progress / duration, 1), 4);
      
      const currentCount = Math.floor(easeOutQuart * endValue);
      setCount(currentCount);

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [endValue, isVisible, duration]);

  return count;
}
