import AboutPageAwards from "@/components/AboutPageAwards";
import ContactSection from "@/components/ContactSection";
import InnerHero from "@/components/InnerHero";
import MailingListCta from "@/components/MailingListCta";
import ServiceImageLinkSwiper from "@/components/ServiceImageLinkSwiper";
import TotPromo from "@/components/TotPromo";
import LatestProjects from "@/components/LatestProjects";
import BgDots from "@/components/assets/BgDots";
import {
  getCroppedImageSrc,
  getAboutPageContent,
  aboutPageContent,
  getAwards,
  awardList,
} from "@/sanity/sanity.query";
import type { aboutPageType, awardsType } from "@/types";
import { PortableText } from "@portabletext/react";

import { getTextWithLineBreaks } from "@/components/utils/getTextWithLineBreaks";
import { removelineBreakCodeFromHTML } from "@/components/utils/lineBreaks";
import { loadQuery } from "@/sanity/lib/store";
import { draftMode } from "next/headers";
import { SanityDocument } from "next-sanity";
import InnerHeroPreview from "@/components/previewComponents/InnerHeroPreview";
import AboutIntroText from "@/components/AboutIntroText";
import AboutIntroTextPreview from "@/components/previewComponents/AboutIntroTextPreview";
import AboutPageContent from "@/components/AboutPageContent";
import AboutPageContentPreview from "@/components/previewComponents/AboutPageContentPreview";
import AboutPageAwardsPreview from "@/components/previewComponents/AboutPageAwardsPreview";

export async function metadata() {
  const aboutContent: aboutPageType[] = await getAboutPageContent();

  return {
    title: "Rosco & Perlini | About",
    description: removelineBreakCodeFromHTML(
      aboutContent[0].aboutPage.pageHeading
    ),
    openGraph: {
      images: aboutContent[0].aboutPage.pageImage.image,
    },
  };
}

export default async function About() {
  const aboutContent: aboutPageType[] = await getAboutPageContent();
  const awards: awardsType[] = await getAwards();

  const initialAboutPageContent = await loadQuery<SanityDocument>(
    aboutPageContent,
    {},
    {
      // Because of Next.js, RSC and Dynamic Routes this currently
      // cannot be set on the loadQuery function at the "top level"
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );
  const initialAwards = await loadQuery<SanityDocument>(
    awardList,
    {},
    {
      // Because of Next.js, RSC and Dynamic Routes this currently
      // cannot be set on the loadQuery function at the "top level"
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );

  return (
    <section>
      {draftMode().isEnabled ? (
        <InnerHeroPreview
          pageVariable="aboutPage"
          initial={initialAboutPageContent.data[0]}
          sectionTitle="about us"
          pageNumber="02"
          originalContent={aboutPageContent}
        />
      ) : (
        <InnerHero
          title={aboutContent[0].aboutPage.pageHeading}
          image={aboutContent[0].aboutPage.pageImage}
          sectionTitle="about us"
          imageAltText={aboutContent[0].aboutPage.pageImage.alt}
          pageNumber="02"
        />
      )}
      {/*
      {aboutContent.map((content) => {
        return (
          <div key={content.aboutPage._id}>
            <InnerHero
              sectionTitle="about us"
              title={content.aboutPage.pageHeading}
              image={content.aboutPage.pageImage}
              imageAltText={content.aboutPage.pageImage.alt}
              pageNumber="02"
            />
          </div>
        );
      })} */}

      <div className="mt-[5.5rem] xsmall:mt-[7rem] small:mt-[clamp(50px,6.3vw,90px)] w-screen">
        <section>
          <div className="relative bg-theme-dark w-full h-auto">
            <div
              style={
                {
                  "--image-url": `url(${getCroppedImageSrc(
                    aboutContent[0].aboutPage.introBgImage
                  )})`,
                } as React.CSSProperties
              }
              className="absolute top-0 left-0 mix-blend-overlay opacity-30 bg-[image:var(--image-url)] bg-cover w-full h-full"
            ></div>

            {draftMode().isEnabled ? (
              <AboutIntroTextPreview
                initial={initialAboutPageContent.data[0]}
              />
            ) : (
              <AboutIntroText
                heading={aboutContent[0].aboutPage.introHeading}
                text={aboutContent[0].aboutPage.introText}
              />
            )}

            {/* <div className="relative px-[5%] pb-[16.6rem] xsmall:pb-[15rem] small:pb-[22.7rem] text-white max-w-[1147px] mx-auto small:px-5 z-10">
                  <h3 className="text-[3.2rem] font-bold pt-[4.7rem] xsmall:pt-[6rem] small:pt-[12.5rem] pb-[3.5rem] xsmall:pb-[5.4rem] small:pb-[4.7rem]">
                    {content.aboutPage.introHeading}
                  </h3>
                  <div className="small:w-[87%]">
                    <PortableText value={content.aboutPage.introText} />
                  </div>
                </div> */}
          </div>

          {draftMode().isEnabled ? (
            <AboutPageContentPreview
              initial={initialAboutPageContent.data[0]}
            />
          ) : (
            <AboutPageContent
              contentArea={aboutContent[0].aboutPage.contentArea}
              featureText={aboutContent[0]?.aboutPage?.featureText}
            />
          )}

          {/* <div className="relative mb-[-7.6rem] xsmall:mb-[-7.2rem] small:mb-[-10rem] py-[4rem] xsmall:py-[4rem] xsmall:w-[95%] xsmall:mx-auto small:py-[6rem] after:absolute after:content-[''] after:w-full after:h-full after:bg-white after:top-0 after:left-0 after:z-10">
            <svg
              className="about-color-border absolute inset-0 w-full h-full pointer-events-none -translate-y-[13.2rem] xsmall:-translate-y-[12.8rem] small:-translate-y-[15.6rem] max-w-[calc(1065px+56px)] left-0 right-0 mx-auto mix-blend-color-dodge top-0 bottom-0 m-auto "
              viewBox="0 0 1121 286"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="28"
                y="28"
                width="1065"
                height="230"
                stroke="url(#paint0_linear_97_10568)"
                strokeOpacity="0.5"
                strokeWidth="56"
                style={{ mixBlendMode: "color-dodge" }}
              />
              <defs>
                <linearGradient
                  id="paint0_linear_97_10568"
                  x1="1137.82"
                  y1="21.2658"
                  x2="898.985"
                  y2="591.427"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.161927" stopColor="#4804F8" />
                  <stop offset="0.375" stopColor="#FF4A1D" />
                  <stop offset="0.635417" stopColor="#F9BA17" />
                  <stop offset="0.978225" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <svg
              className="about-color-border absolute inset-0 w-full h-full pointer-events-none -translate-y-[13.2rem] xsmall:-translate-y-[12.8rem] small:-translate-y-[15.6rem] max-w-[calc(1065px+56px)] left-0 right-0 mx-auto mix-blend-color-dodge top-0 bottom-0 m-auto "
              viewBox="0 0 1121 286"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="28"
                y="28"
                width="1065"
                height="230"
                stroke="url(#paint0_linear_97_10568)"
                strokeOpacity="0.5"
                strokeWidth="56"
                style={{ mixBlendMode: "color-dodge" }}
              />
              <defs>
                <linearGradient
                  id="paint0_linear_97_10568"
                  x1="1137.82"
                  y1="21.2658"
                  x2="898.985"
                  y2="591.427"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.161927" stopColor="#4804F8" />
                  <stop offset="0.375" stopColor="#FF4A1D" />
                  <stop offset="0.635417" stopColor="#F9BA17" />
                  <stop offset="0.978225" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>

            <div className="feature-text relative z-30 overflow-hidden bg-theme-purple mx-auto w-[90%]  -translate-y-[13.2em] py-[3rem] xsmall:py-[4rem] small:py-[5.5rem] xsmall:-translate-y-[12.8rem] small:-translate-y-[15.6rem] small:max-w-[1065px] ">
              <div className="hidden xsmall:block absolute -bottom-[20%] right-0 h-[200%] w-auto mix-blend-multiply rotate-180">
                <BgDots />
              </div>
              <div className="hidden xsmall:block absolute -bottom-[20%] right-0 h-[200%] w-auto mix-blend-multiply rotate-180">
                <BgDots />
              </div>
              <div className="hidden xsmall:block absolute -bottom-[20%] right-0 h-[200%] w-auto mix-blend-multiply rotate-180">
                <BgDots />
              </div>

              <div className="hidden xsmall:block absolute -bottom-[20%] left-0 h-[200%] w-auto mix-blend-multiply scale-y-[-1]">
                <BgDots />
              </div>
              <div className="hidden xsmall:block absolute -bottom-[20%] left-0 h-[200%] w-auto mix-blend-multiply scale-y-[-1]">
                <BgDots />
              </div>
              <div className="hidden xsmall:block absolute -bottom-[20%] left-0 h-[200%] w-auto mix-blend-multiply scale-y-[-1]">
                <BgDots />
              </div>

              <div className="relative text-white px-[4%] flex justify-center items-center w-full h-full z-10">
                <h4 className="text-[clamp(1.8rem,5.4vw,2.2rem)] xsmall:text-[clamp(1.9rem,3.7vw,2.4rem)] small:text-[clamp(2.5rem,2.7vw,3.2rem)] text-center tracking-[0.06em] font-bold small:w-[78%]">
                  {getTextWithLineBreaks(
                    aboutContent[0]?.aboutPage?.featureText
                  )}
                </h4>
              </div>
            </div>
          </div>


          <div className="relative px-[5%] z-40 text-theme-dark mx-auto small:max-w-[1065px] small:px-5 -mt-[13.2em] xsmall:-mt-[12.8rem] small:-mt-[15.6rem]">
            <PortableText value={aboutContent[0].aboutPage.contentArea} />
          </div> */}

          <section className="my-section-gap xsmall:my-section-gap-xsmall small:my-section-gap-small">
            {draftMode().isEnabled ? (
              <AboutPageAwardsPreview initial={initialAwards.data[0]} />
            ) : (
              <AboutPageAwards awards={awards} />
            )}
          </section>
        </section>
        <section>
          <ServiceImageLinkSwiper />
        </section>
        <section>
          <TotPromo />
        </section>
        <section className="my-section-gap xsmall:my-section-gap-xsmall small:my-section-gap-small">
          <LatestProjects />
        </section>
        <section className="mb-section-gap xsmall:mb-section-gap-xsmall small:mb-section-gap-small">
          <MailingListCta />
        </section>
        <section>
          <ContactSection />
        </section>
      </div>
    </section>
  );
}
