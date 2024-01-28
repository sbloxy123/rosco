import { getCroppedImageSrc, getAboutPageContent } from "@/sanity/sanity.query";
import type { SanityImageQueryResult, aboutPageType } from "@/types";
import { PortableText } from "@portabletext/react";
import ButtonLink from "./common/ButtonLink";
import GradientLineThick from "./assets/GradientLineThick";
import GradientLineVerticalThick from "./assets/GradientLineVerticalThick";

export default async function InnerHero({
  title,
  sectionTitle,
  imageAltText,
  image,
}: {
  title: string;
  sectionTitle: string;
  imageAltText: string;
  image: SanityImageQueryResult;
}) {
  const aboutContent: aboutPageType[] = await getAboutPageContent();

  return (
    <section className="">
      {aboutContent.map((content) => {
        // const croppedImage = getCroppedImageSrc();
        return (
          <div
            key={content.aboutPage._id}
            className="small:flex small:justify-between small:mr-0 small:ml-auto small:pb-[80px] small:items-center small:mt-[40px]"
          >
            <div className="text-center pt-[2.4rem] xsmall:pb-[6.6rem] max-w-[323px] mx-auto xsmall:text-left xsmall:ml-32 xsmall:max-w-[505px] small:py-0">
              <h3 className="uppercase font-semibold">{sectionTitle}</h3>
              <h1 className="py-8">{title}</h1>
              <div className="w-full mx-auto pt-8 xsmall:w-fit xsmall:ml-0">
                <ButtonLink
                  theme="dark"
                  text="Get in touch"
                  destination="/contact"
                  ctaType="general"
                />
              </div>
            </div>
            <div className="relative w-full mx-[390/408] aspect-square xsmall:px-0 xsmall:aspect-[744/408] small:aspect-[704/480] small:w-full small:h-auto small:max-w-[704px] small:mr-0">
              <img
                alt={imageAltText}
                src={getCroppedImageSrc(image)}
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
