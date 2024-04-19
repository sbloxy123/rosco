import ContactSection from "@/components/ContactSection";
import InnerHero from "@/components/InnerHero";
import LatestProjects from "@/components/LatestProjects";
import TotPromo from "@/components/TotPromo";
import {
  contactPageInitialContent,
  getContactUsPageContent,
} from "@/sanity/sanity.query";
import type { contactPageType } from "@/types";
import contactMap from "../assets/images/contact_map.png";
import { removelineBreakCodeFromHTML } from "@/components/utils/lineBreaks";
import InnerHeroPreview from "@/components/previewComponents/InnerHeroPreview";
import { draftMode } from "next/headers";
import { loadQuery } from "@/sanity/lib/store";
import { SanityDocument } from "next-sanity";

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

  const initialContactPageContent = await loadQuery<SanityDocument>(
    contactPageInitialContent,
    {},
    {
      // Because of Next.js, RSC and Dynamic Routes this currently
      // cannot be set on the loadQuery function at the "top level"
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );

  return (
    <main>
      {draftMode().isEnabled ? (
        <InnerHeroPreview
          pageVariable="ContactPage"
          initial={initialContactPageContent.data[0]}
          sectionTitle="contact us"
          pageNumber="06"
          originalContent={contactPageInitialContent}
        />
      ) : (
        <InnerHero
          title={contactPageContent[0].ContactPage.pageHeading}
          sectionTitle="contact us"
          pageNumber="06"
        />
      )}

      {/* {contactPageContent.map((content) => {
        return (
          <section key={content.ContactPage._id}>
            <InnerHero
              sectionTitle="contact us"
              title={content.ContactPage.pageHeading}
              pageNumber="06"
            />
          </section>
        );
      })} */}

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
