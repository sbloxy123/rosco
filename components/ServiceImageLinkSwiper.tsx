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
    <section className="relative bg-theme-off-white mt-section-gap mb-[6rem] xsmall:pb-[6rem] small:pb-[5.6rem] small:mb-[5.5rem]">
      <div className="absolute top-0 w-[115%] h-auto left-[-10%] xsmall:left-0 xsmall:h-full xsmall:w-auto small:bottom-0 small:transform small:scale-y-[-1]">
        <BgDots />
      </div>
      {serviceSectionHeadings.map((heading) => {
        return (
          <div
            key={heading.servicesSection.servicesHeading}
            className="text-theme-dark"
          >
            <h3 className="uppercase pb-2 pt-[7rem] xsmall:pt-[7.5rem] text-center ">
              {heading.servicesSection.servicesSubheading}
            </h3>
            <h2 className="text-center pb-[5rem] pt-[4rem] xsmall:pt-[3.5rem]">
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
      <div className="invisible mb-0 h-0 w-fit  mx-auto xsmall:visible xsmall:w-full xsmall:h-full xsmall:mb-[0] small:pl-layout-small">
        <ServiceSwiper data={services} />
        <div className="relative h-[5rem] mx-[5%] small:h-[7rem] small:mx-0 small:mr-[clamp(8rem,11.1vw,16rem)]">
          <div className="swiper-scrollbar left-0"></div>
        </div>
      </div>

      {serviceSectionHeadings.map((heading) => {
        return (
          <div
            key={heading.servicesSection.servicesHeading}
            className="mt-[4rem] m-auto px-[5%] xsmall:px-0 xsmall:mt-[5rem] xsmall:w-[229px] xsmall:mx-auto small:mt-[6.5rem]"
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
