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
  awardsContent,
  contactUsContent,
  getAwards,
  getContactContent,
  getHero,
  getIntro,
  getMailingListCta,
  getTestimonials,
  getTotPromo,
  heroContent,
  introContent,
  mailingListCta,
  testimonialContent,
  totPromoContent,
} from "@/sanity/sanity.query";
import type {
  awardsType,
  contactType,
  heroType,
  introType,
  mailingListType,
  testimonialsType,
  TotPromoType,
} from "@/types";
import thumbnail from "./assets/Thumbnail_1280x720.png";
import { loadQuery } from "@/sanity/lib/store";
import { SanityDocument } from "next-sanity";
import { draftMode } from "next/headers";
import HeroPreview from "@/components/previewComponents/HeroPreview";
import IntroSectionPreview from "@/components/previewComponents/IntroSectionPreview";
import MailingListCtaPreview from "@/components/previewComponents/MailingListCtaPreview";
import TotPromoPreview from "@/components/previewComponents/TotPromoPreview";
import TestimonialsPreview from "@/components/previewComponents/TestimonialsPreview";
import AwardsSectionPreview from "@/components/previewComponents/AwardsSectionPreview";
import ContactSectionPreview from "@/components/previewComponents/ContactSectionPreview";

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
  const totPromo: TotPromoType[] = await getTotPromo();
  const testimonials: testimonialsType[] = await getTestimonials();
  const awards: awardsType[] = await getAwards();
  const contactContent: contactType[] = await getContactContent();

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
  const initialTotPromo = await loadQuery<SanityDocument>(
    totPromoContent,
    {},
    {
      // Because of Next.js, RSC and Dynamic Routes this currently
      // cannot be set on the loadQuery function at the "top level"
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );
  const initialTestimonialContent = await loadQuery<SanityDocument>(
    testimonialContent,
    {},
    {
      // Because of Next.js, RSC and Dynamic Routes this currently
      // cannot be set on the loadQuery function at the "top level"
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );
  const initialAwardContent = await loadQuery<SanityDocument>(
    awardsContent,
    {},
    {
      // Because of Next.js, RSC and Dynamic Routes this currently
      // cannot be set on the loadQuery function at the "top level"
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );
  const initialContactContent = await loadQuery<SanityDocument>(
    contactUsContent,
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
      <section className="hidden xsmall:block my-section-gap xsmall:my-section-gap-xsmall small:my-section-gap-small">
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
        {draftMode().isEnabled ? (
          <TotPromoPreview
            initial={initialTotPromo.data[0]}
            originalContent={totPromoContent}
          />
        ) : (
          <TotPromo totPromo={totPromo} />
        )}
      </section>
      {draftMode().isEnabled ? (
        <TestimonialsPreview
          initial={initialTestimonialContent.data[0]}
          originalContent={testimonialContent}
        />
      ) : (
        <Testimonials testimonials={testimonials} />
      )}
      <section className="mt-[5rem] my-section-gap xsmall:my-section-gap-xsmall small:my-section-gap-small">
        {draftMode().isEnabled ? (
          <AwardsSectionPreview
            initial={initialAwardContent.data[0]}
            originalContent={awardsContent}
          />
        ) : (
          <AwardsSection awards={awards} />
        )}
      </section>
      {draftMode().isEnabled ? (
        <ContactSectionPreview
          initial={initialContactContent.data[0]}
          originalContent={contactUsContent}
        />
      ) : (
        <ContactSection contactContent={contactContent} />
      )}
    </main>
  );
}
