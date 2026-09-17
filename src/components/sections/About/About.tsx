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
      {/* BLOCK 1: WHO WE ARE SECTION (EDITORIAL REDESIGN) */}
      <WhoWeAre />

      {/* BLOCK 2: A JOURNEY OF HOPE (INTERACTIVE TIMELINE) */}
      <JourneyTimeline />

      {/* BLOCK 3: MISSION + VISION (EDITORIAL PANELS) */}
      <MissionVision />
    </section>
  );
};

