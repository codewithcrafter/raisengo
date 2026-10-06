import { HeroSlider } from '@/components/sections/Hero/HeroSlider';
import { WhoWeAre } from '@/components/sections/About/WhoWeAre';
import { MissionVision } from '@/components/sections/MissionVision/MissionVision';
import { Work } from '@/components/sections/Work/Work';
import { JourneyTimeline } from '@/components/sections/JourneyTimeline/JourneyTimeline';
import { FeaturedCampaign } from '@/components/sections/FeaturedCampaign/FeaturedCampaign';
import { Stories } from '@/components/sections/Stories/Stories';
import { BlogPreview } from '@/components/sections/BlogPreview/BlogPreview';
import { FinalCTA } from '@/components/sections/FinalCTA/FinalCTA';

export default function Home() {
  return (
    <main id="main-content">
      {/* 1. HERO SLIDER */}
      <HeroSlider />

      {/* 3. WHO WE ARE STORY */}
      <WhoWeAre />

      {/* 4. MISSION & VISION EDITORIAL SPLIT */}
      <MissionVision />

      {/* 5. OUR WORK / PROGRAMS SHOWCASE */}
      <Work />

      {/* 6. JOURNEY OF HOPE TIMELINE */}
      <JourneyTimeline />

      {/* 7. FEATURED CAMPAIGN */}
      <FeaturedCampaign />

      {/* 8. IMPACT / STORIES */}
      <Stories />

      {/* 9. MEDIA & FIELD DISPATCHES PREVIEW */}
      <BlogPreview />

      {/* 10. FINAL COMPACT CTA */}
      <FinalCTA />
    </main>
  );
}
