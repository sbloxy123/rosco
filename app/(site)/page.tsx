import ServiceImageLinkSwiper from "@/components/ServiceImageLinkSwiper";
import IntroSection from "@/components/IntroSection";
import Hero from "@/components/Hero";
import MailingListCta from "@/components/MailingListCta";
import LatestProjects from "@/components/LatestProjects";
import TotPromo from "@/components/TotPromo";
import Testimonials from "@/components/Testimonials";
import AwardsSection from "@/components/AwardsSection";
import ContactSection from "@/components/ContactSection";
import type { Metadata } from "next";
import { getHero } from "@/sanity/sanity.query";
import type { heroType } from "@/types";
import thumbnail from "./assets/Thumbnail_1280x720.png";

export async function metadata() {
  const hero: heroType[] = await getHero();
  let titleWithLineBreaks;
  hero.map((content) => {
    titleWithLineBreaks = content.heroHeading;
    if (
      typeof titleWithLineBreaks === "string" &&
      titleWithLineBreaks.includes("\\n")
    ) {
      titleWithLineBreaks = titleWithLineBreaks.replace(/\\n/g, "");
    }
  });

  return {
    title: "Rosco & Perlini",
    description: titleWithLineBreaks,
    openGraph: {
      images: thumbnail.src,
    },
  };
}

export default async function Home() {
  return (
    <main>
      <Hero />
      <IntroSection />
      <div className="my-section-gap xsmall:my-section-gap-xsmall small:my-section-gap-small ">
        <ServiceImageLinkSwiper />
      </div>
      <div className="my-section-gap xsmall:my-section-gap-xsmall small:my-section-gap-small">
        <MailingListCta />
      </div>
      <LatestProjects />
      <div className="my-section-gap xsmall:my-section-gap-xsmall small:my-section-gap-small">
        <TotPromo />
      </div>
      <Testimonials />
      <div className="mt-[10rem] my-section-gap xsmall:my-section-gap-xsmall small:my-section-gap-small">
        <AwardsSection />
      </div>
      <ContactSection />
    </main>
  );
}
