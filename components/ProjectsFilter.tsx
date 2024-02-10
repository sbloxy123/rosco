import type { projectType, projectsPageType } from "@/types";
import ButtonLink from "./common/ButtonLink";
import BgDots from "./assets/BgDots";
import ProjectsComponent from "./ProjectComponent";

export default async function ProjectsFilter({
  projects,
  assets,
}: {
  projects: projectType[];
  assets: projectsPageType[];
}) {
  let categories = new Set();

  projects.map((project) => {
    project.categories.map((category) => {
      if (category !== "") {
        categories.add(category);
      }
    });
  });

  const categoriesArray = Array.from(categories) as string[];

  return (
    <div>
      <div className="relative bg-theme-dark overflow-hidden pt-[3.7rem] pb-[5rem] px-[5%] xsmall:pt-[4.2rem] small:pt-[9rem] small:pb-[11rem] small:px-layout-small">
        {/* top right */}
        <div className="hidden xsmall:block absolute top-0 right-0 h-[140%] w-auto mix-blend-multiply rotate-180 scale-y-[-1]">
          <BgDots />
        </div>
        <div className="hidden xsmall:block absolute top-0 right-0 h-[140%] w-auto mix-blend-multiply rotate-180 scale-y-[-1]">
          <BgDots />
        </div>
        <div className="hidden xsmall:block absolute top-0 right-0 h-[140%] w-auto mix-blend-multiply rotate-180 scale-y-[-1]">
          <BgDots />
        </div>
        <div className="hidden xsmall:block absolute top-0 right-0 h-[140%] w-auto mix-blend-multiply rotate-180 scale-y-[-1]">
          <BgDots />
        </div>
        <div className="hidden xsmall:block absolute top-0 right-0 h-[140%] w-auto mix-blend-multiply rotate-180 scale-y-[-1]">
          <BgDots />
        </div>

        {/* top left */}
        <div className="hidden small:block absolute top-0 left-0 h-[140%] w-auto mix-blend-multiply">
          <BgDots />
        </div>
        <div className="hidden small:block absolute top-0 left-0 h-[140%] w-auto mix-blend-multiply">
          <BgDots />
        </div>
        <div className="hidden small:block absolute top-0 left-0 h-[140%] w-auto mix-blend-multiply">
          <BgDots />
        </div>
        <div className="hidden small:block absolute top-0 left-0 h-[140%] w-auto mix-blend-multiply">
          <BgDots />
        </div>
        <div className="hidden small:block absolute top-0 left-0 h-[140%] w-auto mix-blend-multiply">
          <BgDots />
        </div>

        <h2 className="text-white">Latest Projects</h2>

        <div className="uppercase text-[1.6rem] font-semibold tracking[0.06em] text-white flex justify-between pt-[3.5rem] pb-[3.3rem] xsmall:pt-[5rem] small:pt-[6rem] small:pb-[4rem]">
          <p className="">Filter by</p>
          <div className="flex gap-[1.5rem] items-center">
            <p>view all</p>
            <div className="bg-white rounded-full w-[56px] h-[28px] relative">
              <span className="w-[23.33px] aspect-square rounded-[100%] bg-theme-purple absolute left-0 top-0 bottom-0 my-auto translate-x-[2px]"></span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 xsmall:flex-row flex-wrap">
          {categoriesArray.map((category, index) => {
            return (
              <div key={index} className="xsmall:w-fit">
                <ButtonLink
                  key={index}
                  text={category}
                  ctaType="none"
                  hoverEffect="fill-col"
                  theme="light"
                  bgColor="black"
                />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        {assets.map((content) => {
          return (
            <div key={content.ProjectsPage._id}>
              {projects.map((project) => {
                return (
                  <div key={project._id} className="mt-section-gap">
                    <ProjectsComponent
                      project={project}
                      bg={content.ProjectsPage.BgImage}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
