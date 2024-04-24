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
import {
  getHero,
  getIntro,
  getMailingListCta,
  heroContent,
  introContent,
  mailingListCta,
} from "@/sanity/sanity.query";
import type { heroType, introType, mailingListType } from "@/types";
import thumbnail from "./assets/Thumbnail_1280x720.png";
import { loadQuery } from "@/sanity/lib/store";
import { SanityDocument } from "next-sanity";
import { draftMode } from "next/headers";
import HeroPreview from "@/components/previewComponents/HeroPreview";
import IntroSectionPreview from "@/components/previewComponents/IntroSectionPreview";
import MailingListCtaPreview from "@/components/previewComponents/MailingListCtaPreview";

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
  const hero: heroType[] = await getHero();
  const intro: introType[] = await getIntro();
  const mailingList: mailingListType[] = await getMailingListCta();

  const initialHeroContent = await loadQuery<SanityDocument>(
    heroContent,
    {},
    {
      // Because of Next.js, RSC and Dynamic Routes this currently
      // cannot be set on the loadQuery function at the "top level"
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );
  const initialIntroContent = await loadQuery<SanityDocument>(
    introContent,
    {},
    {
      // Because of Next.js, RSC and Dynamic Routes this currently
      // cannot be set on the loadQuery function at the "top level"
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );
  const initialmailingListCtaContent = await loadQuery<SanityDocument>(
    mailingListCta,
    {},
    {
      // Because of Next.js, RSC and Dynamic Routes this currently
      // cannot be set on the loadQuery function at the "top level"
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );

  return (
    <main>
      {draftMode().isEnabled ? (
        <HeroPreview
          initial={initialHeroContent.data[0]}
          originalContent={heroContent}
        />
      ) : (
        <Hero content={hero} />
      )}
      {/* <Hero /> */}
      {draftMode().isEnabled ? (
        <IntroSectionPreview
          initial={initialIntroContent.data[0]}
          originalContent={introContent}
        />
      ) : (
        <IntroSection intro={intro} />
      )}
      {/* <IntroSection /> */}
      <section className="my-section-gap xsmall:my-section-gap-xsmall small:my-section-gap-small ">
        <ServiceImageLinkSwiper />
      </section>
      <section className="my-section-gap xsmall:my-section-gap-xsmall small:my-section-gap-small">
        {draftMode().isEnabled ? (
          <MailingListCtaPreview
            initial={initialmailingListCtaContent.data[0]}
            originalContent={mailingListCta}
          />
        ) : (
          <MailingListCta content={mailingList} />
        )}

        {/* <MailingListCta /> */}
      </section>
      <LatestProjects />
      <section className="my-section-gap xsmall:my-section-gap-xsmall small:my-section-gap-small">
        <TotPromo />
      </section>
      <Testimonials />
      <section className="mt-[10rem] my-section-gap xsmall:my-section-gap-xsmall small:my-section-gap-small">
        <AwardsSection />
      </section>
      <ContactSection />
    </main>
  );
}
