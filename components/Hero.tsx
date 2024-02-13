import Image from "next/image";

import { getCroppedImageSrc, getHero, urlFor } from "@/sanity/sanity.query";
import type { heroType } from "@/types";
import { PortableText } from "@portabletext/react";
import ButtonLink from "./common/ButtonLink";

export default async function Hero() {
  const hero: heroType[] = await getHero();

  return (
    <section className="relative">
      {hero &&
        hero.map((content) => {
          let titleWithLineBreaks = content.heroHeading;
          // Check if heroHeading is a string and includes the newline character
          if (
            typeof titleWithLineBreaks === "string" &&
            titleWithLineBreaks.includes("\\n")
          ) {
            titleWithLineBreaks = titleWithLineBreaks.split("\\n");
          }
          return (
            <div
              key={content._id}
              className="hero__content grid grid-cols-1 small:grid-cols-2 align-middle items-center gap-10 justify-between small:pt-[6rem] mb-[6rem] max-w-screen-large small:mx-auto text-theme-dark small:mt-[90px]"
            >
              <div className="w-full order-last small:order-first px-[5%] small:px-0">
                <div className="relative large:static w-full pb-12  pl-0 xsmall:px-20 small:pl-layout-small small:pr-0 small:text-[clamp(3.2rem,2.8vw,4rem)]">
                  <h1 className="absolute -top-[0%] -left-5 hidden xsmall:block xsmall:-translate-x-[4.5vw] small:-translate-x-0 w-fit h-auto font-body large:top-[23.8%]">
                    01
                  </h1>
                  <div className="">
                    {Array.isArray(titleWithLineBreaks) ? (
                      titleWithLineBreaks.map((line, index) => (
                        <h1 key={index} className="font-bold">
                          {line}
                        </h1>
                      ))
                    ) : (
                      <h1>{content.heroHeading}</h1>
                    )}
                  </div>
                </div>
                <div className="pl-0 xsmall:px-20 xsmall:pr-10 small:pl-layout-small small:pr-0 small:pb-40px">
                  <div className="small:max-w-[542px]">
                    <PortableText value={content.heroText} />
                  </div>
                  <div className="mt-[3.5rem] mx-auto xsmall:w-fit xsmall:ml-0">
                    <ButtonLink
                      destination="/about"
                      text={content.heroButtonText}
                      theme="dark"
                      ctaType="general"
                      hoverEffect="fill-col"
                    />
                  </div>
                </div>
              </div>
              <div className="hero-image relative object-cover max-w-[645px] mx-auto small:mx-0">
                <Image
                  src={content.heroImage.image}
                  width={400}
                  height={400}
                  alt={content.heroImage.alt}
                  className="absolute w-full h-full object-cover z-0 group-hover:opacity-75 m-auto"
                />
              </div>
            </div>
          );
        })}
    </section>
  );
}
