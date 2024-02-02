"use client";

import SwiperCore from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Pagination, Navigation, Mousewheel } from "swiper/modules";
import "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ServiceImageLink from "../ServiceImageLink";
import Image from "next/image";

import type {
  serviceType,
  projectType,
  testimonialsType,
  awardsType,
} from "@/types";
import ProjectSlide from "../ProjectSlide";
import { SwiperArrowNext, SwiperArrowPrev } from "../common/SwiperArrows";
import { useRef } from "react";

export const ServiceSwiper = ({ data }: { data: serviceType[] }) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView="auto"
      direction="vertical"
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
      wrapperClass="service-swiper"
      modules={[Scrollbar, Mousewheel]}
      // mousewheel={{
      //   forceToAxis: true,
      //   sensitivity: 1,
      //   releaseOnEdges: true,
      // }}
      // free-mode={true}
      scrollbar={{
        hide: false,
        el: ".services-swiper-scrollbar",
      }}
      breakpoints={{
        512: {
          spaceBetween: 10,
          slidesPerView: "auto",
          direction: "horizontal",
        },
      }}
    >
      {data.map((elm, index) => {
        return (
          <SwiperSlide key={index}>
            <ServiceImageLink service={elm} index={index} />
          </SwiperSlide>
        );
      })}

      {/* <div className="swiper-scrollbar"></div> */}
      {/* <div className="swiper-scrollbar" style={dynamicStyles}></div> */}
    </Swiper>
  );
};

// PROJECTS SWIPER

export const ProjectsSwiper = ({ data }: { data: projectType[] }) => {
  const projectsSwiperRef = useRef<SwiperCore | null>(null);
  const projectsPaginationSwiperRef = useRef<SwiperCore | null>(null);

  const handleProjectsSwiperSlideChange = () => {
    if (projectsPaginationSwiperRef.current) {
      projectsPaginationSwiperRef.current.slideTo(
        projectsSwiperRef.current?.realIndex ?? 0
      );
    }
  };

  return (
    <Swiper
      spaceBetween={40}
      slidesPerView={1}
      onSlideChange={handleProjectsSwiperSlideChange}
      // onSwiper={(swiper) => console.log(swiper)}
      wrapperClass="pb-14 small:pb-0 relative"
      modules={[Pagination, Navigation]}
      pagination={{
        el: ".project-pagination",
      }}
      navigation={{
        nextEl: ".next-project",
        prevEl: ".prev-project",
      }}
      onSwiper={(swiper) => {
        projectsSwiperRef.current = swiper;
      }}
    >
      {data.map((elm, index) => {
        const { _id, slug, projectTitle, projectSummary, image } = elm;
        return (
          <SwiperSlide key={index}>
            <ProjectSlide project={elm} index={index} />
          </SwiperSlide>
        );
      })}

      <div className="absolute top-0 left-0 w-full aspect-square xsmall:aspect-[690/451] small:aspect-[567/456] small:min-w-[522px] invisible">
        <div className="absolute w-full h-fit top-auto bottom-0 left-0 z-20 px-[4rem] flex justify-between items-center xsmall:h-full invisible">
          <div className="w-0 small:w-1/3 invisible"></div>

          <div className="project-pagination h-[5.6rem] w-[40%] pb-[4rem] z-30 flex gap-1 items-center xsmall:absolute xsmall:right-0 xsmall:bottom-0 xsmall:mb-[4%] xsmall:pl-[5%] xsmall:w-fit xsmall:justify-start xsmall:mx-[5%] small:w-1/3 small:justify-center small:mb-0 small:mx-0 small:px-0 small:hidden visible"></div>

          <div className="relative flex gap-4 pb-[5.5rem] pr-[1.5rem] xsmall:pb-0 xsmall:pr-0 xsmall:rotate-90 xsmall:absolute xsmall:right-0 xsmall:mr-[7%] small:pr-[1.5rem] small:pb-[clamp(10%,5vw,8.5rem)]  small:rotate-0 small:w-1/3 small:justify-end visible">
            <SwiperArrowPrev swiperDivName="prev-project" />
            <SwiperArrowNext swiperDivName="next-project" />
          </div>
        </div>
      </div>
    </Swiper>
  );
};

export const ProjectsPaginationSwiper = ({ data }: { data: projectType[] }) => {
  const projectsPaginationSwiperRef = useRef<SwiperCore | null>(null);
  return (
    <Swiper
      onSwiper={(swiper) => {
        projectsPaginationSwiperRef.current = swiper;
      }}
      navigation={{
        nextEl: ".next-project",
        prevEl: ".prev-project",
      }}
      wrapperClass=""
      modules={[Pagination, Navigation]}
      pagination={{
        el: ".project-pagination-outer",
      }}
    >
      {data.map((elm, index) => {
        return (
          <SwiperSlide key={index}>
            <div></div>
          </SwiperSlide>
        );
      })}
      <div className="project-pagination-outer hidden small:flex h-fit z-30 gap-3 items-center small:justify-center w-fit mx-auto pt-[4.6rem] pb-[5.2rem]"></div>
    </Swiper>
  );
};

export const TestimonialSwiper = ({ data }: { data: testimonialsType[] }) => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
      wrapperClass=""
      modules={[Pagination, Navigation]}
      pagination={{
        el: ".testimonial-pagination",
      }}
      navigation={{
        nextEl: ".next-testimonial",
        prevEl: ".prev-testimonial",
      }}
    >
      {data.map((elm, index) => (
        <div key={index}>
          {elm.testimonialsSection.testimonialsList.map(
            (content, innerIndex) => (
              <SwiperSlide key={innerIndex}>
                <p>{content.message}</p>
                <p className="pt-7">{content.name}</p>
              </SwiperSlide>
            )
          )}
        </div>
      ))}

      {/* <div className="swiper-scrollbar"></div> */}
    </Swiper>
  );
};

export const AwardsSwiper = ({ data }: { data: awardsType[] }) => {
  return (
    <Swiper
      spaceBetween={18}
      slidesPerView="auto"
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
      wrapperClass="award-swiper pl-[5%] small:pl-0 pb-14"
      modules={[Scrollbar]}
      scrollbar={{
        hide: false,
        el: ".award-scrollbar",
      }}
      breakpoints={{
        1024: {
          spaceBetween: 18,
          slidesPerView: "auto",
        },
      }}
    >
      {data.map((award, index) => (
        <div key={index}>
          {award.awardsSection.awardsList.map((content, innerIndex) => {
            const titleWithLineBreaks = content.awardTitle.replace(
              /\\n/g,
              "\n"
            );
            return (
              <SwiperSlide key={innerIndex}>
                <div
                  key={index}
                  className="aspect-[255/345] w-auto px-[5%] xsmall:w-auto max-w-[255px] flex justify-center items-center flex-col gap-8 bg-theme-purple text-white text-center my-4"
                >
                  <div className="relative h-[150px] w-full mb-4">
                    <Image
                      src={content.awardLogo.image}
                      width={155}
                      height={145}
                      alt={content.awardLogo.image}
                      className="absolute bottom-0 left-0 right-0 h-auto w-full max-w-[70%] max-h-[145px] mx-auto object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="uppercase font-bold text-[1.6rem] pb-2">
                      {content.awardDate}
                    </h4>
                    <div>
                      {titleWithLineBreaks.split("\n").map((line, index) => {
                        return (
                          <h5
                            key={index}
                            className="font-semibold text-[1.4rem]"
                          >
                            {line}
                          </h5>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </div>
      ))}
      <div className="relative h-[5rem] mx-[5%] small:h-[7rem] small:mx-0 small:mr-[clamp(8rem,11.1vw,16rem)]">
        <div className="award-scrollbar"></div>
      </div>
    </Swiper>
  );
};
