import {
  getServiceLinks,
  getServicesSectionTitles,
} from "@/sanity/sanity.query";
import type { serviceType, serviceSectionType } from "@/types";
import ServicesBgTexture from "../app/assets/images/layout/dot_graphic-top-left.png";
import Image from "next/image";
import ButtonLink from "./common/ButtonLink";
import { ServiceSwiper } from "./swiper/Swipers";
import ServiceImageLink from "./ServiceImageLink";
import BgDots from "./assets/BgDots";

export default async function ServiceImageLinkSwiper() {
  const services: serviceType[] = await getServiceLinks();
  const serviceSectionHeadings: serviceSectionType[] =
    await getServicesSectionTitles();

  return (
    <section className="relative p-8 px-0 small:pl-10 bg-theme-off-white mt-20">
      <div className="absolute top-0 left-0 h-[100%] w-auto small:bottom-0 small:transform small:scale-y-[-1]">
        <BgDots />
      </div>
      {/* <Image
        src={ServicesBgTexture}
        width={525}
        height={800}
        alt="Dotted background texture"
        className="absolute top-0 left-0 w-[525px] h-auto -z-10"
      /> */}
      {serviceSectionHeadings.map((heading) => {
        return (
          <div
            key={heading.servicesSection.servicesHeading}
            className="text-theme-dark"
          >
            <h3 className="uppercase pb-2 pt-[2.7rem] text-center ">
              {heading.servicesSection.servicesSubheading}
            </h3>
            <h2 className="text-center py-8">
              {heading.servicesSection.servicesHeading}
            </h2>
          </div>
        );
      })}
      <div className="flex flex-col justify-center gap-[16px] visible xsmall:invisible xsmall:h-0">
        {services.map((service, index) => {
          return (
            <ServiceImageLink
              key={service._id}
              service={service}
              index={index}
            />
          );
        })}
      </div>
      <div className="invisible xsmall:visible h-0 w-fit mb-24 mx-auto xsmall:w-full xsmall:h-full">
        <ServiceSwiper data={services} />
        <div className="relative pt-14 pb-12 v-[70vw]">
          <div className="swiper-scrollbar left-0"></div>
        </div>
      </div>

      {serviceSectionHeadings.map((heading) => {
        return (
          <div
            key={heading.servicesSection.servicesHeading}
            className="mt-10 m-auto px-[5%] xsmall:px-0 xsmall:w-[229px] xsmall:mx-auto"
          >
            <ButtonLink
              theme="dark"
              text={heading.servicesSection.servicesLinkTitle}
              destination="/services"
              ctaType="none"
            />
          </div>
        );
      })}
    </section>
  );
}
