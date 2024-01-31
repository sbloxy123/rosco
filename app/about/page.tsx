import AboutPageAwards from "@/components/AboutPageAwards";
import ContactSection from "@/components/ContactSection";
import InnerHero from "@/components/InnerHero";
import MailingListCta from "@/components/MailingListCta";
import ServiceImageLinkSwiper from "@/components/ServiceImageLinkSwiper";
import TotPromo from "@/components/TotPromo";
import BgDots from "@/components/assets/BgDots";
import { getCroppedImageSrc, getAboutPageContent } from "@/sanity/sanity.query";
import type { aboutPageType } from "@/types";

import { PortableText } from "@portabletext/react";

export default async function About() {
  const aboutContent: aboutPageType[] = await getAboutPageContent();
  return (
    <section>
      {aboutContent.map((content) => {
        return (
          <div key={content.aboutPage._id}>
            <InnerHero
              sectionTitle="about us"
              title={content.aboutPage.pageHeading}
              image={content.aboutPage.pageImage}
              imageAltText={content.aboutPage.pageImage.alt}
            />
          </div>
        );
      })}
      {aboutContent.map((content) => {
        return (
          <div key={content.aboutPage._id} className="my-10 w-screen">
            <div className="relative bg-theme-dark w-full h-auto aspect-[390/504] xsmall:aspect-[744/416] small:aspect-[1440/504]">
              <div
                style={
                  {
                    "--image-url": `url(${getCroppedImageSrc(
                      content.aboutPage.introBgImage
                    )})`,
                  } as React.CSSProperties
                }
                className="absolute top-0 left-0 mix-blend-overlay opacity-30 bg-[image:var(--image-url)] bg-cover w-full h-full"
              ></div>
              <div className="relative px-[5%] pt-[4vw] text-white max-w-[1065px] mx-auto small:px-5 z-10">
                <h3 className="text-[3.2rem] font-bold py-10">
                  {content.aboutPage.introHeading}
                </h3>
                <PortableText value={content.aboutPage.introText} />
              </div>
            </div>
            <div className="relative z-10 bg-theme-purple mx-auto aspect-[358/200] w-[90%] xsmall:aspect-[646/174] small:max-w-[1065px] -translate-y-[45%] small:-translate-y-[35%] overflow-hidden">
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

              <div className="text-white px-[4%] flex justify-center items-center w-full h-full ">
                <h4 className="text-[2.2rem] xsmall:text-[2.4rem] small:text-[3.2rem] text-center tracking-[0.06em] font-bold small:w-[78%]">
                  {content.aboutPage.featureText}
                </h4>
              </div>
            </div>
            <div className="px-[5%] small:max-w-[1065px] mx-auto small:px-5">
              <PortableText value={content.aboutPage.contentArea} />
            </div>

            <AboutPageAwards />

            <ServiceImageLinkSwiper />
            <TotPromo />
            <MailingListCta />
            <ContactSection />
          </div>
        );
      })}
    </section>
  );
}
