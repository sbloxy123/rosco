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

export async function metadata() {
  const hero: heroType[] = await getHero();
  return {
    title: "Rosco & Perlini | Home",
    description: hero[0].heroHeading,
    openGraph: {
      images: hero[0].heroImage.image,
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
