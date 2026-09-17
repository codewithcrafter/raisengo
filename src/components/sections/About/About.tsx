"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container/Container';
import { useScrollReveal } from '@/lib/useScrollReveal';
import { FloatingAccents } from '@/components/ui/FloatingAccents/FloatingAccents';
import styles from './About.module.css';

import { WhoWeAre } from '@/components/sections/About/WhoWeAre';
import { JourneyTimeline } from '@/components/sections/JourneyTimeline/JourneyTimeline';
import { MissionVision } from '@/components/sections/MissionVision/MissionVision';

export const About: React.FC = () => {
  return (
    <section id="about" className={styles.about}>
      {/* Background Arc Decoration */}
      <div className={styles.bgArcTop} aria-hidden="true">
        <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M50 550C200 400 450 350 750 500C850 550 950 480 900 380C820 220 580 120 350 200C120 280 -20 420 50 550Z" 
            stroke="url(#aboutArcGrad)" 
            strokeWidth="2" 
            strokeDasharray="6 6"
          />
          <defs>
            <linearGradient id="aboutArcGrad" x1="0" y1="0" x2="800" y2="600" gradientUnits="userSpaceOnUse">
              <stop stopColor="#E0679D" stopOpacity="0.20" />
              <stop offset="1" stopColor="#814CBA" stopOpacity="0.05" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <FloatingAccents variant="mixed" />

      {/* BLOCK 1: WHO WE ARE SECTION (EDITORIAL REDESIGN) */}
      <WhoWeAre />

      {/* BLOCK 2: A JOURNEY OF HOPE (INTERACTIVE TIMELINE) */}
      <JourneyTimeline />

      {/* BLOCK 3: MISSION + VISION (EDITORIAL PANELS) */}
      <MissionVision />
    </section>
  );
};

