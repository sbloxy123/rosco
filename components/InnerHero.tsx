import getPositionFromHotspot, {
  getCroppedImageSrc,
} from "@/sanity/sanity.query";
import type { SanityImageQueryResult } from "@/types";
import ButtonLink from "./common/ButtonLink";
import GradientLineThick from "./assets/GradientLineThick";
import GradientLineVerticalThick from "./assets/GradientLineVerticalThick";
import { MapProvider } from "@/components/providers/map-provider";
import { MapComponent } from "@/components/Map";
import Image from "next/image";
import { removelineBreakCodeFromHTML } from "./utils/lineBreaks";
import { getTextWithLineBreaks } from "./utils/getTextWithLineBreaks";
import ButtonLinkNew from "./common/ButtonLinkNew";

export default function InnerHero({
  title,
  sectionTitle,
  imageAltText,
  image,
  pageNumber,
}: {
  title: string;
  sectionTitle: string;
  imageAltText?: string;
  image?: SanityImageQueryResult | undefined;
  pageNumber?: string;
}) {
  return (
    <section className="mt-[7rem] xsmall:mt-[10rem] small:mt-0">
      <div className="gap-10 max-w-[1440px] small:flex small:justify-between small:mr-0 small:ml-auto  small:mt-[104px] small:gap-0 medium:mx-auto small:pt-[3rem]">
        <div className="text-theme-dark text-center pt-[5.5rem] mx-auto xsmall:ml-0 xsmall:text-left xsmall:pt-[4rem] small:pt-0 small:mt-[6rem] small:max-w-full ">
          <h3 className="uppercase font-semibold xsmall:ml-[7.5rem] small:ml-layout-small">
            {removelineBreakCodeFromHTML(sectionTitle)}
          </h3>
          <div className="w-full order-last small:order-first px-[5%] small:px-0">
            <div className="w-full relative pl-0 xsmall:pl-[3.7rem] small:pr-0 xsmall:mt-[4rem] xsmall:pb-[3rem] xsmall:text-[clamp(3.5rem,6.3vw,4rem)] small:text-[clamp(3.2rem,2.8vw,4rem)] large:static pb-12 small:pl-layout-small">
              <h1 className="absolute -left-5 hidden xsmall:block xsmall:-translate-x-[5.3vw] small:-translate-x-0 w-fit h-auto font-body small:top-0 large:top-[26rem] mt-[0.1rem] ">
                {pageNumber}
              </h1>

              {/* NOTE: if/else for variable line breaks in cms. see also small:pr-[clamp(...)] which may be individual per page */}

              {/* desktop has line breaks... */}
              <h1 className="inner__hero__title pt-[3rem] mx-auto max-w-[383px] font-bold pb-[2rem] xsmall:max-w-full xsmall:pt-0 xsmall:pb-0 xsmall:ml-0 small:w-[clamp(400px,43vw,558px)] small:pr-[2rem]">
                {title && getTextWithLineBreaks(title)}
              </h1>
            </div>
          </div>
          {pageNumber !== "06" && (
            <div className="w-full mx-auto px-[8%] xsmall:px-0 pb-[5rem] xsmall:pb-[6.5rem] xsmall:w-fit xsmall:ml-[7.5rem] small:ml-layout-small">
              <ButtonLinkNew
                theme="dark"
                text="Get in touch"
                destination="/contact"
                ctaType="general"
                hoverEffect="fill-col"
              />
              {/* <ButtonLink
                theme="dark"
                text="Get in touch"
                destination="/contact"
                ctaType="general"
                hoverEffect="fill-col"
              /> */}
            </div>
          )}
        </div>
        <div className="relative w-full mx-[390/408] aspect-square xsmall:px-0 xsmall:aspect-[744/408] small:aspect-[704/480] small:w-full small:h-auto small:max-w-[704px] small:mr-0">
          {image ? (
            <Image
              src={getCroppedImageSrc(image)}
              alt={image.alt}
              fill
              priority
              className="object-cover"
              style={{
                objectPosition: `${getPositionFromHotspot(image?.hotspot)}`,
              }}
            />
          ) : (
            <MapProvider>
              <MapComponent />
            </MapProvider>
          )}
          <div className="absolute top-0 left-0 w-full h-[1.7rem]">
            <GradientLineThick />
          </div>
          <div className="absolute bottom-0 left-0 w-full h-[1.7rem]">
            <GradientLineThick />
          </div>

          <div className="absolute bottom-0 left-0 h-full w-[1.7rem] hidden small:block">
            <GradientLineVerticalThick />
          </div>
          <div className="hidden overLarge:block absolute bottom-0 right-0 h-full w-[1.7rem]">
            <GradientLineVerticalThick />
          </div>
        </div>
      </div>
    </section>
  );
}
