import InnerHero from "@/components/InnerHero";
import ProjectsFilter from "@/components/ProjectsFilter";
import { getProjectsPageContent, getAllProjects } from "@/sanity/sanity.query";
import type { projectsPageType, projectType } from "@/types";

export default async function Projects() {
  const projectsContent: projectsPageType[] = await getProjectsPageContent();
  const projects: projectType[] = await getAllProjects();

  return (
    <div>
      {projectsContent.map((content) => {
        return (
          <div key={content.ProjectsPage._id}>
            <InnerHero
              title={content.ProjectsPage.pageHeading}
              image={content.ProjectsPage.pageImage}
              sectionTitle="projects"
              imageAltText={content.ProjectsPage.pageImage.alt}
              pageNumber="04"
            />
          </div>
        );
      })}

      <div className="my-section-gap">
        <ProjectsFilter projects={projects} assets={projectsContent} />
      </div>
    </div>
  );
}
