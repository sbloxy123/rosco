import ContactSection from "@/components/ContactSection";
import InnerHero from "@/components/InnerHero";
import MailingListCta from "@/components/MailingListCta";
import ProjectsFilter from "@/components/ProjectsFilter";
import TotPromo from "@/components/TotPromo";
import { getProjectsPageContent, getAllProjects } from "@/sanity/sanity.query";
import type { projectsPageType, projectType } from "@/types";

export async function metadata() {
  const projectsContent: projectsPageType[] = await getProjectsPageContent();
  return {
    title: "Rosco & Perlini | Projects",
    description: projectsContent[0].ProjectsPage.pageHeading,
    openGraph: {
      images: projectsContent[0].ProjectsPage.pageImage,
    },
  };
}

export default async function Projects() {
  const projectsContent: projectsPageType[] = await getProjectsPageContent();
  const projects: projectType[] = await getAllProjects();

  return (
    <div>
      {projectsContent.map((content) => {
        return (
          <div key={content._id}>
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

      <div className="my-section-gap xsmall:my-section-gap-xsmall small:my-section-gap-small">
        <TotPromo />
      </div>
      <div className="my-section-gap xsmall:my-section-gap-xsmall small:my-section-gap-small">
        <MailingListCta />
      </div>
      <ContactSection />
    </div>
  );
}
