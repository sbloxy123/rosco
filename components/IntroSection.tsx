import { getCroppedImageSrc, getIntro } from "@/sanity/sanity.query";
import type { introType } from "@/types";
import { PortableText } from "@portabletext/react";
import IntroBgTexture from "../app/assets/images/layout/dot_graphic.png";
import Image from "next/image";
import ButtonLink from "./common/ButtonLink";
// import bg from '../app/assets/images/'

export default async function IntroSection() {
  const intro: introType[] = await getIntro();

  return (
    <section className="relative bg-theme-dark small:pr-16 px-[15px] pt-[15px] pb-20 small:py-20 text-white overflow-hidden">
      {/* <IntroBgTexture /> */}

      {/* <div
        className="relative top-0 right-0 w-[525px] h-[808px]"
        style={{
          background: `url(${IntroBgTexture.src}) no-repeat`,
          mixBlendMode: "darken", // Fixing the mixBlendMode property
        }}
      ></div> */}
      {/* <div className="absolute top-0 right-0 w-[525px] h-auto z-10 mix-blend-darken bg-theme-dark"> */}
      <Image
        src={IntroBgTexture}
        width={525}
        height={800}
        alt="Dotted background texture"
        className="absolute top-0 right-0 w-[525px] h-auto -z-10 "
      />
      {/* </div> */}

      {intro.map((content) => {
        const croppedImage = getCroppedImageSrc(
          content.introSection.introImage
        );
        // console.log(croppedImage);

        return (
          <div
            key={content.introSection._id}
            className="grid grid-cols-1 small:grid-cols-2 gap-10 items-center"
          >
            <div className="h-fit">
              <div className="relative play-image">
                {/* border */}
                <div className="inner-border-container absolute">
                  <div className="inner-border-element"></div>
                </div>
                {/*  */}
                <div className="aspect-[35/37] xsmall:aspect-[70/45]">
                  <img
                    className="object-cover w-full h-full saturate-0"
                    src={getCroppedImageSrc(content.introSection.introImage)}
                  />
                </div>
              </div>
            </div>
            <div className="small:max-w-[90%] small:pl-20">
              <h3 className="uppercase pb-10 pt-[2.7rem]">
                {content.introSection.introSubheading}
              </h3>
              <h2 className="pb-20">{content.introSection.introHeading}</h2>
              <div className="pr-2 xsmall:pr-40">
                <PortableText value={content.introSection.introText} />
              </div>
              <div className="mt-20 mx-[15px] xsmall:w-fit xsmall:ml-0">
                <ButtonLink
                  destination="/about"
                  text={content.introSection.aboutUsButton}
                  theme="light"
                  ctaType="general"
                />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
