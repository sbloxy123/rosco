import { getCroppedImageSrc, getAboutPageContent } from "@/sanity/sanity.query";
import type { aboutPageType } from "@/types";
import { PortableText } from "@portabletext/react";
import ButtonLink from "./common/ButtonLink";
import GradientLineThick from "./assets/GradientLineThick";
import GradientLineVerticalThick from "./assets/GradientLineVerticalThick";

export default async function InnerHero() {
  const aboutContent: aboutPageType[] = await getAboutPageContent();

  return (
    <section className="">
      {aboutContent.map((content) => {
        // const croppedImage = getCroppedImageSrc();
        return (
          <div
            key={content.aboutPage._id}
            className="small:flex small:justify-between small:mr-0 small:ml-auto small:py-10 small:items-center"
          >
            <div className="text-center py-10 max-w-[323px] mx-auto xsmall:text-left xsmall:ml-32 xsmall:max-w-[505px] xsmall:py-24 small:py-0">
              <h3 className="uppercase font-semibold">About Us</h3>
              <h1 className="py-8">{content.aboutPage.pageHeading}</h1>
              <div className="w-full mx-auto py-4 xsmall:w-fit xsmall:ml-0">
                <ButtonLink
                  theme="dark"
                  text={content.aboutPage.btnText}
                  destination="/contact"
                  ctaType="general"
                />
              </div>
            </div>
            <div className="relative w-full mx-[390/408] aspect-square xsmall:px-0 xsmall:aspect-[744/408] small:aspect-[704/480] small:w-full small:h-auto small:max-w-[704px] small:mr-0">
              <img
                alt={content.aboutPage.pageImage.alt}
                src={getCroppedImageSrc(content.aboutPage.pageImage)}
                // style={
                //   {
                //     "--image-url": `url(${getCroppedImageSrc(
                //       content.aboutPage.pageImage
                //     )})`,
                //   } as React.CSSProperties
                // }
                className="object-cover w-full h-full"
              />
              <div className="absolute top-0 left-0 w-full h-auto">
                <GradientLineThick />
              </div>
              <div className="absolute bottom-0 left-0 w-full h-auto">
                <GradientLineThick />
              </div>
              <div className="absolute bottom-0 left-0 w-full h-full hidden small:block">
                <GradientLineVerticalThick />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
