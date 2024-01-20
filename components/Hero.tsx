import Image from "next/image";

import { getCroppedImageSrc, getHero, urlFor } from "@/sanity/sanity.query";
import type { heroType } from "@/types";
import { PortableText } from "@portabletext/react";
import ButtonLink from "./common/ButtonLink";

export default async function Hero() {
  const hero: heroType[] = await getHero();

  return (
    <section className="tablet:px-16 px-6 py-10">
      {hero &&
        hero.map((content) => {
          return (
            <div
              key={content._id}
              className="hero__content grid grid-cols-1 small:grid-cols-2 align-middle items-center gap-10 justify-between py-4 max-w-screen-large lg:m-auto text-theme-dark"
            >
              <div className="w-full order-last small:order-first">
                <div className="w-full pb-12 relative pl-0 xsmall:px-20">
                  <h1 className="absolute -top-[0%] -left-5 hidden xsmall:block xsmall:-translate-x-[35%] small:-translate-x-[31%] w-fit h-auto">
                    01
                  </h1>
                  <PortableText value={content.heroHeading} />
                </div>
                <div className="pl-0 xsmall:px-20">
                  <PortableText value={content.heroText} />
                  <div className="mt-8 mx-auto xsmall:w-fit xsmall:ml-0">
                    <ButtonLink
                      destination="/about"
                      text={content.heroButtonText}
                      theme="dark"
                      ctaType="general"
                    />
                  </div>
                </div>
              </div>
              <div className="hero-image relative object-cover">
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
