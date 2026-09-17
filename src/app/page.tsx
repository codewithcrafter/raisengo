import { HeroSlider } from "@/components/sections/Hero/HeroSlider";
import { About } from "@/components/sections/About/About";
import { Work } from "@/components/sections/Work/Work";
import { FeaturedCampaign } from "@/components/sections/FeaturedCampaign/FeaturedCampaign";
import { Stats } from "@/components/sections/Stats/Stats";
import { Stories } from "@/components/sections/Stories/Stories";
import { CorporatePartners } from "@/components/sections/CorporatePartners/CorporatePartners";
import { Testimonials } from "@/components/sections/Testimonials/Testimonials";
import { GetInvolved } from "@/components/sections/GetInvolved/GetInvolved";
import { FinalCTA } from "@/components/sections/FinalCTA/FinalCTA";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <About />
      <Work />
      <FeaturedCampaign />
      <Stats />
      <Stories />
      <CorporatePartners />
      <Testimonials />
      <GetInvolved />
      <FinalCTA />
    </>
  );
}
