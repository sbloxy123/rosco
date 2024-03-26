import ContactSection from "@/components/ContactSection";
import InnerHero from "@/components/InnerHero";
import LatestProjects from "@/components/LatestProjects";
import TotPromo from "@/components/TotPromo";
import { getContactUsPageContent } from "@/sanity/sanity.query";
import type { contactPageType } from "@/types";
import contactMap from "../assets/images/contact_map.png";
import { removelineBreakCodeFromHTML } from "@/components/utils/lineBreaks";

export async function metadata() {
  const contactPageContent: contactPageType[] = await getContactUsPageContent();
  return {
    title: "Rosco & Perlini | Contact Us",
    description: removelineBreakCodeFromHTML(
      contactPageContent[0].ContactPage.pageHeading
    ),
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
        return (
          <section key={content.ContactPage._id}>
            <InnerHero
              sectionTitle="contact us"
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
