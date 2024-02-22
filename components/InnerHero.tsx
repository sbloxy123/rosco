import { getCroppedImageSrc } from "@/sanity/sanity.query";
import type { SanityImageQueryResult } from "@/types";
import ButtonLink from "./common/ButtonLink";
import GradientLineThick from "./assets/GradientLineThick";
import GradientLineVerticalThick from "./assets/GradientLineVerticalThick";
import { MapProvider } from "@/components/providers/map-provider";
import { MapComponent } from "@/components/Map";

export default async function InnerHero({
  title,
  sectionTitle,
  imageAltText,
  image,
  pageNumber,
  smallScreenTitle,
}: {
  title: string;
  sectionTitle: string;
  imageAltText?: string;
  image?: SanityImageQueryResult;
  pageNumber?: string;
  smallScreenTitle?: string;
}) {
  return (
    <section>
      <div className="gap-10 max-w-[1440px] small:flex small:justify-between small:mr-0 small:ml-auto small:items-center small:mt-[104px] small:gap-0 medium:mx-auto small:pt-[3rem]">
        <div className="text-center pt-[5.5rem] xsmall:pt-[4rem] small:pt-0 xsmall:text-left max-w-[323px] mx-auto  xsmall:max-w-[580px] xsmall:ml-0 small:max-w-full">
          <h3 className="uppercase font-semibold xsmall:ml-[7.5rem] small:ml-layout-small">
            {sectionTitle}
          </h3>
          <div className="w-full relative pl-0 xsmall:pl-[7.5rem] small:pr-0 xsmall:mt-[4rem] xsmall:pb-[3rem] xsmall:text-[clamp(3.5rem,6.3vw,4rem)] small:text-[clamp(3.2rem,2.8vw,4rem)] small:pl-layout-small">
            <h1 className="absolute -top-[0%] -left-5 hidden xsmall:block xsmall:-translate-x-[0] small:-translate-x-0 w-fit h-auto font-body">
              {pageNumber}
            </h1>

            {pageNumber == "06" ? (
              <div>
                {/* show on small and large screens */}
                <h1 className="block xsmall:hidden small:block pt-[3rem] pb-[7rem] xsmall:pt-0 xsmall:pb-0 small:w-[clamp(400px,43vw,558px)] small:pr-[1rem] ">
                  {smallScreenTitle}
                </h1>
                {/* show on xsmall screens */}
                <h1 className="hidden xsmall:block small:hidden pt-[3rem] pb-[7rem] xsmall:pt-0 xsmall:pb-0 small:w-[clamp(400px,43vw,558px)] small:pr-[1rem] text-[clamp(3.2rem,5.4vw,4rem)]">
                  {title}
                </h1>
              </div>
            ) : (
              <h1 className="pt-[3rem] pb-[7rem] xsmall:pt-0 xsmall:pb-0 small:w-[clamp(400px,43vw,558px)] small:pr-[1rem] ">
                {title}
              </h1>
            )}
          </div>
          <div className="w-full mx-auto px-[5%] xsmall:px-0 pb-[5rem] xsmall:pb-[6.5rem] xsmall:w-fit xsmall:ml-[7.5rem] small:ml-layout-small">
            <ButtonLink
              theme="dark"
              text="Get in touch"
              destination="/contact"
              ctaType="general"
              hoverEffect="fill-col"
            />
          </div>
        </div>
        <div className="relative w-full mx-[390/408] aspect-square xsmall:px-0 xsmall:aspect-[744/408] small:aspect-[704/480] small:w-full small:h-auto small:max-w-[704px] small:mr-0">
          {image ? (
            <img
              alt={imageAltText}
              src={getCroppedImageSrc(image)}
              className="object-cover w-full h-full"
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
        </div>
      </div>
    </section>
  );
}
