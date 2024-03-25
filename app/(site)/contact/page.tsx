import ContactSection from "@/components/ContactSection";
import InnerHero from "@/components/InnerHero";
import LatestProjects from "@/components/LatestProjects";
import TotPromo from "@/components/TotPromo";
import { getContactUsPageContent } from "@/sanity/sanity.query";
import type { contactPageType } from "@/types";
import contactMap from "../assets/images/contact_map.png";

export async function metadata() {
  const contactPageContent: contactPageType[] = await getContactUsPageContent();
  return {
    title: "Rosco & Perlini | Contact Us",
    description: contactPageContent[0].ContactPage.pageHeading,
    openGraph: {
      images: contactMap,
    },
  };
}

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
              // desktopHasLineBreaks={{
              //   hasLineBreaks: true,
              //   titleWithLineBreaks,
              // }}

              title={content.ContactPage.pageHeading}
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
    </main>
  );
}
