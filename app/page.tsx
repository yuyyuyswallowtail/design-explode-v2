import { AboutSection } from "@/components/design-explode/about-section";
import { Collage } from "@/components/design-explode/collage";
import { CultureSection } from "@/components/design-explode/culture-section";
import { FeaturedVisual } from "@/components/design-explode/featured-visual";
import { Hero } from "@/components/design-explode/hero";
import { Intro } from "@/components/design-explode/intro";
import { Lineup } from "@/components/design-explode/lineup";
import { WordMarquee } from "@/components/design-explode/marquee";
import { Newsletter } from "@/components/design-explode/newsletter";
import { ProgramPreview } from "@/components/design-explode/program-section";
import { SelectedWork } from "@/components/design-explode/selected-work";
import { ShopSection } from "@/components/design-explode/shop-section";
import { VenueSection } from "@/components/design-explode/venue-section";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Lineup />
      <WordMarquee />
      <FeaturedVisual />
      <ProgramPreview />
      <CultureSection />
      <Collage />
      <SelectedWork />
      <AboutSection />
      <VenueSection />
      <ShopSection />
      <Newsletter />
    </>
  );
}
