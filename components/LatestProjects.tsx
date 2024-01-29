import { getProjectsSection, getAllProjects } from "@/sanity/sanity.query";
import type { projectsSectionType, projectType } from "@/types";
import { ProjectsPaginationSwiper, ProjectsSwiper } from "./swiper/Swipers";
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
              <h3 className="uppercase pt-[7rem] text-center text-theme-dark">
                {projectsSubheading}
              </h3>
              <h2 className="text-center pt-[4rem] pb-[5rem] xsmall:pb-[6.5rem] text-theme-dark">
                {projectsHeading}
              </h2>
            </div>
          );
        })}

        <div className="relative small:w-[90%] small:h-fit small:m-auto bg-theme-dark small:max-w-[1120px] small:flex small:items-center small:px-[0%] overflow-hidden">
          {/* top left dots */}
          <div className="hidden xsmall:block absolute top-0 left-0 w-[40%] h-auto mix-blend-multiply">
            <BgDots />
          </div>
          <div className="hidden xsmall:block absolute top-0 left-0 w-[40%] h-auto mix-blend-multiply">
            <BgDots />
          </div>
          <div className="hidden xsmall:block absolute top-0 left-0 w-[40%] h-auto mix-blend-multiply">
            <BgDots />
          </div>

          {/* bottom right dots */}
          <div className="absolute bottom-0 right-0 w-full h-auto mix-blend-multiply rotate-180 xsmall:hidden">
            <BgDots />
          </div>
          <div className="absolute bottom-0 right-0 w-full h-auto mix-blend-multiply rotate-180 xsmall:hidden">
            <BgDots />
          </div>
          <div className="absolute bottom-0 right-0 w-full h-auto mix-blend-multiply rotate-180 xsmall:hidden">
            <BgDots />
          </div>

          <ProjectsSwiper data={projects} />
        </div>
        {/* <div className="project-pagination-outer h-[5.6rem] w-full pb-[4rem] z-30 flex gap-3 items-center small:justify-center"></div> */}
        <ProjectsPaginationSwiper data={projects} />

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
