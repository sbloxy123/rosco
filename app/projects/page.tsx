import InnerHero from "@/components/InnerHero";
import { getProjectsPageContent } from "@/sanity/sanity.query";
import type { projectsPageType } from "@/types";

export default async function Projects() {
  const projectsContent: projectsPageType[] = await getProjectsPageContent();

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
    </div>
  );
}
