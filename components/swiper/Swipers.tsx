"use client";

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

export const ServiceSwiper = ({ data }: { data: serviceType[] }) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView="auto"
      direction="vertical"
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
      wrapperClass="service-swiper pb-14"
      modules={[Scrollbar, Mousewheel]}
      mousewheel={{
        forceToAxis: true,
        sensitivity: 1,
        releaseOnEdges: true,
      }}
      scrollbar={{
        hide: false,
        el: ".swiper-scrollbar",
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

      <div className="swiper-scrollbar"></div>
      {/* <div className="swiper-scrollbar" style={dynamicStyles}></div> */}
    </Swiper>
  );
};

// PROJECTS SWIPER

export const ProjectsSwiper = ({ data }: { data: projectType[] }) => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
      wrapperClass="pb-14 small:pb-0"
      modules={[Pagination, Navigation]}
      pagination={{
        el: ".project-pagination",
      }}
      navigation={{
        nextEl: ".next-project",
        prevEl: ".prev-project",
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

      {/* <div className="swiper-scrollbar"></div> */}
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
      spaceBetween={10}
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
          spaceBetween: 20,
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
                  className="aspect-[255/345] max-w-[255px] flex justify-center items-center flex-col gap-8 bg-theme-purple text-white text-center my-4"
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
      <div className="award-scrollbar"></div>
    </Swiper>
  );
};
