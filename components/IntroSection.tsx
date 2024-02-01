import { getCroppedImageSrc, getIntro } from "@/sanity/sanity.query";
import type { introType } from "@/types";
import { PortableText } from "@portabletext/react";
import ButtonLink from "./common/ButtonLink";
import BgDots from "./assets/BgDots";

export default async function IntroSection() {
  const intro: introType[] = await getIntro();

  return (
    <section className="relative bg-theme-dark px-[4%] pt-[5%] pb-[5.5rem] xsmall:px-[3%] xsmall:pt-[3%]  small:py-[11rem] small:pr-16 small:pl-0 text-white overflow-hidden">
      {/* top left dots */}
      <div className="absolute bottom-0 right-0 h-full w-auto mix-blend-multiply rotate-180 xsmall:w-[70%] xsmall:h-auto small:scale-y-[-1] small:top-0 small:bottom-auto small:w-[40%] small:h-auto z-0 ">
        <BgDots />
      </div>
      <div className="absolute bottom-0 right-0 h-full w-auto mix-blend-multiply rotate-180 xsmall:w-[70%] xsmall:h-auto small:scale-y-[-1] small:top-0 small:bottom-auto small:w-[40%] small:h-auto z-0 ">
        <BgDots />
      </div>
      <div className="absolute bottom-0 right-0 h-full w-auto mix-blend-multiply rotate-180 xsmall:w-[70%] xsmall:h-auto small:scale-y-[-1] small:top-0 small:bottom-auto small:w-[40%] small:h-auto z-0 ">
        <BgDots />
      </div>

      {intro.map((content) => {
        const croppedImage = getCroppedImageSrc(
          content.introSection.introImage
        );
        // console.log(croppedImage);

        return (
          <div
            key={content.introSection._id}
            className="relative grid grid-cols-1 small:grid-cols-2 gap-10 items-center z-10"
          >
            <div className="relative w-full mx-auto aspect-square xsmall:px-0 xsmall:aspect-[690/451]">
              <div className="absolute -top-[6%] -left-[8.4%] xsmall:-left-[4.4%] w-[112%] h-[112%]">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 389 412"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="block xsmall:hidden"
                >
                  <rect
                    x="20"
                    y="20"
                    width="372"
                    height="372"
                    stroke="url(#paint0_linear_62_2866)"
                    strokeOpacity="0.5"
                    strokeWidth="40"
                    className="mix-blend-color-dodge"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_62_2866"
                      x1="383.689"
                      y1="9.10812"
                      x2="-41.2097"
                      y2="214.621"
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
                  width="100%"
                  height="100%"
                  viewBox="0 0 731 510"
                  fill="none"
                  className="hidden xsmall:block"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="28"
                    width="703"
                    height="454"
                    stroke="url(#paint0_linear_0_4932)"
                    strokeOpacity="0.5"
                    strokeWidth="56"
                    className="mix-blend-color-dodge "
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_0_4931"
                      x1="732.588"
                      y1="14.7072"
                      x2="370.402"
                      y2="433.912"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.161927" stopColor="#4804F8" />
                      <stop offset="0.741249" stopColor="#FF4A1D" />
                      <stop offset="0.838542" stopColor="#F9BA17" />
                      <stop offset="0.978225" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div
                style={
                  {
                    "--image-url": `url(${getCroppedImageSrc(
                      content.introSection.introImage
                    )})`,
                  } as React.CSSProperties
                }
                className="relative bg-[image:var(--image-url)] bg-cover w-full mx-auto aspect-square xsmall:px-0 xsmall:aspect-[690/451] cursor-pointer group"
              >
                <div className="absolute -top-[6%] -left-[8.4%] xsmall:-left-[4.4%] w-[112%] h-[112%]">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 389 412"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="block xsmall:hidden"
                  >
                    <rect
                      x="20"
                      y="20"
                      width="372"
                      height="372"
                      stroke="url(#paint0_linear_62_2866)"
                      strokeOpacity="0.5"
                      strokeWidth="40"
                      className="mix-blend-color-dodge"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_62_2866"
                        x1="383.689"
                        y1="9.10812"
                        x2="-41.2097"
                        y2="214.621"
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
                    width="100%"
                    height="100%"
                    viewBox="0 0 731 510"
                    fill="none"
                    className="hidden xsmall:block"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="28"
                      width="703"
                      height="454"
                      stroke="url(#paint0_linear_0_4932)"
                      strokeOpacity="0.5"
                      strokeWidth="56"
                      className="mix-blend-color-dodge "
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_0_4932"
                        x1="732.588"
                        y1="14.7072"
                        x2="87.5547"
                        y2="529.643"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.161927" stopColor="#4804F8" />
                        <stop offset="0.375" stopColor="#FF4A1D" />
                        <stop offset="0.635417" stopColor="#F9BA17" />
                        <stop offset="0.978225" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            <div className="small:max-w-[90%] small:pl-[70px]">
              <h3 className="uppercase pb-14 pt-[2.7rem]">
                {content.introSection.introSubheading}
              </h3>
              <h2 className="pb-20">{content.introSection.introHeading}</h2>
              <div className="pr-2 xsmall:w-[90%] small:w-[clamp(445px,43vw,525px)] small:pr-0">
                <PortableText value={content.introSection.introText} />
              </div>
              <div className="mt-16 mx-[15px] xsmall:w-fit xsmall:ml-0">
                <ButtonLink
                  destination="/about"
                  text={content.introSection.aboutUsButton}
                  theme="light"
                  ctaType="general"
                  hoverEffect="fill-col"
                />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
