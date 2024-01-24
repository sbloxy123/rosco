import { getProjectsSection, getAllProjects } from "@/sanity/sanity.query";
import type { projectsSectionType, projectType } from "@/types";
import { ProjectsSwiper } from "./swiper/Swipers";
import ButtonLink from "./common/ButtonLink";
import { SwiperArrowNext, SwiperArrowPrev } from "./common/SwiperArrows";
import BgDots from "./assets/BgDots";

export default async function LatestProjects() {
  const projectsSection: projectsSectionType[] = await getProjectsSection();
  const projects: projectType[] = await getAllProjects();

  return (
    <section className="relative">
      <div className="relative">
        <div className="h-[410px] absolute -z-10 top-0 left-0 w-full small:h-1/2 bg-theme-off-white overflow-hidden">
          <div className="absolute top-0 left-0 h-[200%] w-auto hidden small:block">
            <BgDots />
          </div>
          <div className="absolute top-0 right-0 w-full h-auto small:h-[200%] small:w-auto transform scale-x-[-1]">
            <BgDots />
          </div>
        </div>

        {projectsSection.map((content) => {
          const { projectsHeading, projectsSubheading } =
            content.projectsSection;
          return (
            <div key={content._id}>
              <h3 className="uppercase pt-[2.7rem] text-center text-theme-dark">
                {projectsSubheading}
              </h3>
              <h2 className="text-center py-10 text-theme-dark">
                {projectsHeading}
              </h2>
            </div>
          );
        })}

        <div className="small:w-[90%] small:h-fit small:m-auto relative bg-theme-dark small:max-w-[1120px] small:flex small:items-center small:px-[0%]">
          <ProjectsSwiper data={projects} />
          <div className="absolute top-[calc(87vw-30px)] xsmall:top-[calc(50vw-15px)] left-0 px-[50px] w-full z-20 flex justify-between items-center small:top-auto small:bottom-[calc(-11vw-30px)] small:px-[120px]">
            <div className="w-0 small:w-1/3"></div>
            <div className="project-pagination h-10 w-[40%] z-30 flex gap-3 items-center xsmall:translate-y-[2vw] small:-translate-y-[7vw] small:w-1/3 small:justify-center"></div>
            <div className="flex gap-4 xsmall:rotate-90 xsmall:-translate-y-[20vw] xsmall:translate-x-9 small:rotate-0 small:w-1/3 small:justify-end">
              <SwiperArrowPrev swiperDivName="prev-project" />
              <SwiperArrowNext swiperDivName="next-project" />
            </div>
          </div>
        </div>
        {/* <div className="project-pagination h-10 w-full z-30 gap-3 items-center small:flex"></div> */}

        {projectsSection.map((content) => {
          return (
            <div
              key={content._id}
              className="mt-20 mx-[15px] xsmall:w-fit xsmall:mx-auto small:mt-40"
            >
              <ButtonLink
                text={content.projectsSection.projectsButtonText}
                theme="dark"
                destination="/projects"
                ctaType="none"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
