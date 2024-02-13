import { getCroppedImageSrc } from "@/sanity/sanity.query";
import type { projectType } from "@/types";
import { ImageSlider } from "./ImageSlider";
import Image from "next/image";
import ProjectsImageSwiper from "./swiper/Swipers";

interface BgImage {
  alt: string;
  image: string;
  asset: {
    _ref: string;
  };
  crop: {
    _type: "sanity.imageCrop";
    bottom: number;
    left: number;
    right: number;
    top: number;
  };
  hotspot: {
    _type: "sanity.imageHotspot";
    height: number;
    width: number;
    x: number;
    y: number;
  };
}

export default function ProjectsComponent({
  project,
  bg,
}: {
  project: projectType;
  bg: BgImage;
}) {
  // console.log(project);

  return (
    <div className="block relative z-0 text-white">
      <div
        style={
          {
            "--image-url": `url(${getCroppedImageSrc(bg)})`,
          } as React.CSSProperties
        }
        className="relative  bg-[image:var(--image-url)] bg-cover w-full h-auto group -z-10 px-[5%] py-[4rem] small:px-layout-small xsmall:pb-[7.5rem] small:pb-[10rem]"
      >
        <div className="small:w-[clamp(720px,64vw,930px)] mx-auto flex flex-col">
          {/* categories and title */}
          <div className="order-1 xsmall:order-3 small:order-2">
            <div className="flex gap-[5rem] flex-wrap">
              {project.categories.map((category, index) => {
                return (
                  <div key={index}>
                    <h3 key={index} className="uppercase pb-[2rem]">
                      {category}{" "}
                    </h3>
                  </div>
                );
              })}
            </div>
            <h1 className="pb-[2.6rem] xsmall:order-3 xsmall:pb-0">
              {project.projectTitle}
            </h1>
          </div>

          {/* image/s */}
          <div className="relative order-2 xsmall:pt-[3.4rem] small:order-1 small:-mt-[27rem] small:pt-0">
            <div className="hidden">
              <ImageSlider
                before={project.beforeAfter.beforeImage.image}
                after={project.beforeAfter.afterImage.image}
              />
            </div>
            <ProjectsImageSwiper
              images={project.gallery?.images}
              beforeImage={project.beforeAfter.beforeImage.image}
              afterImage={project.beforeAfter.afterImage.image}
            />
            {/*
            {project?.gallery?.images?.map((image) => {
              console.log(image);
              return <div></div>;
            })} */}

            {/* <div className="pt-[2rem] flex gap-[1rem] xsmall:justify-end">
              {project?.gallery?.images?.map((image) => {
                console.log(image);
                return (
                  <div
                    className="max-w-[52px] aspect-square"
                    key={image.asset._ref}
                  >
                    <Image
                      src={image.image}
                      alt={image.alt}
                      width={52}
                      height={52}
                      className="object-cover h-full w-full"
                    />
                  </div>
                );
              })}
            </div> */}

            {/* lg - project location and timeframe */}
            <div className="uppercase tracking-[0.06em] hidden small:block absolute top-[0rem] -right-[0rem] rotate-90 text-theme-dark translate-x-[clamp(117px,12vw,151px)] translate-y-[100%] ">
              <p className="text-[1.4rem]">{project.completionTimeframe}</p>
              <p className="pt-[0.4rem] text-[1.4rem]">
                {project.projectLocation}
              </p>
            </div>
          </div>

          <p className="order-3 font-normal pt-[4rem] xsmall:order-4 small:order-3">
            {project.projectSummary}
          </p>

          {/* location and timeframe */}
          <div className="project-time-address order-4 pt-[3.5rem] uppercase xsmall:order-1 tracking-[0.06em] small:hidden">
            <p className="text-[1.4rem]">{project.completionTimeframe}</p>
            <p className="pt-[0.4rem] text-[1.4rem]">
              {project.projectLocation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
