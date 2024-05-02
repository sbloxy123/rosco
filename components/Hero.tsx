import Image from "next/image";
import type { heroType } from "@/types";
import { PortableText } from "@portabletext/react";
import type { Metadata } from "next";
import { getTextWithLineBreaks } from "./utils/getTextWithLineBreaks";
import ButtonLinkNew from "./common/ButtonLinkNew";

export default function Hero({ content }: { content: heroType[] }) {
  console.log(content[0].heroText)
  return (
    <section className="relative mt-[11rem] small:mt-0">
      <div className="hero__content grid grid-cols-1 small:grid-cols-2 align-middle items-center gap-10 justify-between small:pt-[6rem] mb-[6rem] max-w-screen-large small:mx-auto text-theme-dark small:mt-[90px]">
        <div className="w-full order-last small:order-first px-[5%] small:px-0">
          <div className="relative large:static w-full pb-12  pl-0 xsmall:px-20 small:pl-layout-small mt-[1.5rem] small:pr-0 small:text-[clamp(3.2rem,2.8vw,4rem)]">
            <h1 className="absolute -top-[0%] -left-5 hidden xsmall:block xsmall:-translate-x-[4.5vw] small:-translate-x-0 w-fit h-auto font-body large:top-[24.3%]">
              01
            </h1>
            <div className="">
              <h1 className="font-bold">
                {getTextWithLineBreaks(content[0].heroHeading)}
              </h1>
            </div>
          </div>
          <div className="pl-0 xsmall:px-20 xsmall:pr-10 small:pl-layout-small small:pr-0 small:pb-40px">
            <div className="small:max-w-[542px]">
              <PortableText value={content[0].heroText} />
            </div>
            <div className="mt-[3.5rem] w-[95%] mx-auto xsmall:w-fit xsmall:ml-0">
              <ButtonLinkNew
                destination="/contact"
                text={content[0].heroButtonText}
                theme="dark"
                ctaType="general"
                hoverEffect="fill-col"
              />
            </div>
          </div>
        </div>
        <div className="hero-image relative object-cover max-w-[645px] mx-auto small:mx-0">
          <Image
            src={content[0].heroImage.image}
            fill
            priority
            alt={content[0].heroImage.alt}
            className="absolute w-full h-full object-cover z-0 group-hover:opacity-75 m-auto"
          />
        </div>
      </div>
    </section>
  );
}
