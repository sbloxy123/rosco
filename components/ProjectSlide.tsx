// "use client";

import type { projectType } from "@/types";
import ButtonLink from "./common/ButtonLink";
import Image from "next/image";
import { getCroppedImageSrc } from "@/sanity/sanity.query";

type ProjectSlideProps = {
  project: projectType;
  index: number;
};

const ProjectSlide: React.FC<ProjectSlideProps> = ({ project, index }) => {
  // console.log(project.image.image);
  const imageUrl = "your-image-url";
  const customStyle = { "--image-url": imageUrl } as React.CSSProperties;

  return (
    <div
      key={project._id}
      className="text-white z-20 small:flex small:items-center"
    >
      {/* <div className="relative play-image order-1"> */}
      {/* border */}
      {/* <div className="projects-inner-border-container absolute small:hidden">
          <div className="projects-inner-border-element"></div>
        </div> */}
      {/*  */}
      {/* <div className="relative aspect-[35/37] xsmall:aspect-[70/45] small:aspect-[56/45] small:w-[567px] h-auto">
          <div
            style={
              {
                "--image-url": `url(${project.image.image})`,
              } as React.CSSProperties
            }
            className="project-img relative bg-[image:var(--image-url)] bg-cover mx-auto group saturate-0 small:saturate-100 small:w-full small:h-full"
          >
            {" "}
            <div className="bg-opacity-5 bg-cover absolute top-0 left-0 bg-gradient-to-l from-black to-white mix-blend-multiply opacity-[0.7] w-full h-full small:hidden"></div>
          </div>
        </div>
      </div> */}

      <div className="w-full px-[4%] pt-[5%] pb-20 xsmall:px-[3%] xsmall:pt-[3%] small:py-25 small:pl-[2%] small:pt-[2.2%] small:pb-[2.1%] small:pr-[2.6%] order-1">
        <div className="relative w-full mx-auto aspect-square xsmall:aspect-[690/451] small:aspect-[567/456]">
          <div className="absolute w-[112%] h-[112%] -top-[6%] -left-[8.4%] xsmall:-left-[4.4%] small:-left-[5.4%]">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 389 412"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="block xsmall:hidden small:hidden"
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
              className="hidden xsmall:block small:hidden"
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
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 623 512"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden small:block"
            >
              <rect
                x="28"
                y="28"
                width="567"
                height="456"
                stroke="url(#paint0_linear_1601_4743)"
                stroke-opacity="0.5"
                stroke-width="56"
                className="mix-blend-color-dodge "
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1601_4743"
                  x1="618.864"
                  y1="14.6487"
                  x2="15.1537"
                  y2="401.655"
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

          <div
            style={
              {
                "--image-url": `url(${getCroppedImageSrc(project.image)})`,
              } as React.CSSProperties
            }
            className="relative bg-[image:var(--image-url)] bg-cover w-full mx-auto aspect-square xsmall:px-0 xsmall:aspect-[690/451] small:aspect-[567/456] cursor-pointer group"
          >
            <div className="bg-opacity-5 bg-cover absolute top-0 left-0 bg-gradient-to-l from-black to-white mix-blend-multiply opacity-[0.7] w-full h-full"></div>

            <div className="absolute w-[112%] h-[112%] -top-[6%] -left-[8.4%] xsmall:-left-[4.4%] small:-left-[5.4%]">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 389 412"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="block xsmall:hidden xsmall:opacity-0"
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
                className="hidden xsmall:block small:hidden"
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
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 623 512"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hidden small:block"
              >
                <rect
                  x="28"
                  y="28"
                  width="567"
                  height="456"
                  stroke="url(#paint0_linear_1601_4743)"
                  stroke-opacity="0.5"
                  stroke-width="56"
                  className="mix-blend-color-dodge "
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1601_4743"
                    x1="618.864"
                    y1="14.6487"
                    x2="15.1537"
                    y2="401.655"
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
      </div>

      {/* <p>here is the image url: {project.image.image}</p> */}
      {/* <Image src={project.image?.image} alt={project.image?.alt} /> */}
      <div className="relative small:flex small:justify-between xsmall:px-[8%] small:px-[15px] order-0">
        <div className="small:min-w-[80px]">
          <h3 className="uppercase px-[15px] pt-[2.7rem] mb-8 xsmall:px-0 small:absolute small:top-[65px] small:-left-[28px] small:rotate-90 small:whitespace-nowrap small:pt-0 small:mb-0 small:px-0">
            project 0{index + 1}
          </h3>
        </div>
        <div className="px-[15px] xsmall:px-0 small:pr-[50px]">
          <h2 className="pb-16">{project.projectTitle}</h2>
          <p>{project.projectSummary}</p>
          <div className="mt-20 mx-[15px] xsmall:w-fit xsmall:ml-0">
            <ButtonLink
              destination={`projects/{project.slug}`}
              ctaType="general"
              text="view project"
              theme="light"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSlide;
