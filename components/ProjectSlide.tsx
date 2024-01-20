// "use client";

import type { projectType } from "@/types";
import ButtonLink from "./common/ButtonLink";
import Image from "next/image";

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
      <div className="relative play-image order-1">
        {/* border */}
        <div className="projects-inner-border-container absolute small:hidden">
          <div className="projects-inner-border-element"></div>
        </div>
        {/*  */}
        <div className="relative aspect-[35/37] xsmall:aspect-[70/45] small:aspect-[56/45] small:w-[567px] h-auto">
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
      </div>

      {/* <p>here is the image url: {project.image.image}</p> */}
      {/* <Image src={project.image?.image} alt={project.image?.alt} /> */}
      <div className="relative small:flex small:justify-between">
        <div className="small:min-w-[80px]">
          <h3 className="uppercase px-[15px] pt-[2.7rem] mb-8 small:absolute small:top-[65px] small:-left-[28px] small:rotate-90 small:whitespace-nowrap small:pt-0 small:mb-0 small:px-0">
            project 0{index + 1}
          </h3>
        </div>
        <div className="px-[15px] small:pr-[50px]">
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
