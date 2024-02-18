import ContactSection from "@/components/ContactSection";
import InnerHero from "@/components/InnerHero";
import LatestProjects from "@/components/LatestProjects";
import TotPromo from "@/components/TotPromo";
import { MapProvider } from "@/components/providers/map-provider";
import { MapComponent } from "@/components/Map";
import { getContactUsPageContent } from "@/sanity/sanity.query";

import type { contactPageType } from "@/types";

export default async function contact() {
  const contactPageContent: contactPageType[] = await getContactUsPageContent();

  return (
    <main>
      {contactPageContent.map((content) => {
        const titleWithLineBreaks = content.ContactPage.pageHeading.replace(
          /\\n/g,
          "\n"
        );
        const titleWithoutLineBreaks = content.ContactPage.pageHeading.replace(
          /\\n/g,
          " "
        );
        return (
          <section key={content.ContactPage._id}>
            <InnerHero
              sectionTitle="contact us"
              smallScreenTitle={titleWithLineBreaks}
              title={titleWithoutLineBreaks}
              pageNumber="06"
            />
          </section>
        );
      })}

      <div className="my-section-gap">
        <ContactSection showAllSizes={true} />
      </div>

      <LatestProjects />
      <div className="my-section-gap">
        <TotPromo />
      </div>

      <MapProvider>
        <MapComponent />
      </MapProvider>
    </main>
  );
}
