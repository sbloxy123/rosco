import ContactSection from "@/components/ContactSection";
import FaqSearch from "@/components/FaqSearch";
import InnerHero from "@/components/InnerHero";
import BgDots from "@/components/assets/BgDots";
import InnerHeroPreview from "@/components/previewComponents/InnerHeroPreview";
import { removelineBreakCodeFromHTML } from "@/components/utils/lineBreaks";
import { loadQuery } from "@/sanity/lib/store";
import {
  faqPageInitialContent,
  getFaqPageContent,
  getFaqs,
} from "@/sanity/sanity.query";
import type { faqPageType } from "@/types";
import { SanityDocument } from "next-sanity";
import { draftMode } from "next/headers";
import { Suspense } from "react";
interface Faq {
  _id: string;
  question: string;
  answer: string;
}

export async function metadata() {
  const faqPageContent: faqPageType[] = await getFaqPageContent();
  return {
    title: "Rosco & Perlini | FAQs",
    description: removelineBreakCodeFromHTML(
      faqPageContent[0].FaqPage.pageHeading
    ),
    openGraph: {
      images: faqPageContent[0].FaqPage.pageImage.image,
    },
  };
}

export default async function faqs() {
  const faqPageContent: faqPageType[] = await getFaqPageContent();
  const faqs: Faq[] = await getFaqs();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const initialFaqPageContent = await loadQuery<SanityDocument>(
    faqPageInitialContent,
    {},
    {
      // Because of Next.js, RSC and Dynamic Routes this currently
      // cannot be set on the loadQuery function at the "top level"
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Suspense fallback={<div>Loading search parameters...</div>}>
        {draftMode().isEnabled ? (
          <InnerHeroPreview
            pageVariable="FaqPage"
            initial={initialFaqPageContent.data[0]}
            sectionTitle="FAQ's"
            pageNumber="05"
            originalContent={faqPageInitialContent}
          />
        ) : (
          <InnerHero
            title={faqPageContent[0].FaqPage.pageHeading}
            image={faqPageContent[0].FaqPage.pageImage}
            sectionTitle="FAQ's"
            imageAltText={faqPageContent[0].FaqPage.pageImage.alt}
            pageNumber="05"
          />
        )}

        {faqPageContent.map((content) => {
          const messageWithLineBreaks = content.FaqPage.introMessage.replace(
            /\\n/g,
            "\n"
          );
          const messageWithoutLineBreaks = content.FaqPage.introMessage.replace(
            /\\n/g,
            " "
          );

          return (
            <div key={content.FaqPage._id}>
              {/* <InnerHero
                title={content.FaqPage.pageHeading}
                image={content.FaqPage.pageImage}
                sectionTitle="FAQ's"
                imageAltText={content.FaqPage.pageImage.alt}
                pageNumber="05"
              /> */}
              <div className="relative bg-theme-dark overflow-hidden pt-[5rem] pb-[16rem] px-[5%] xsmall:pt-[5.2rem] xsmall:pb-[10rem] small:pt-[9rem] small:pb-[20rem] small:px-layout-small mt-section-gap">
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

                <div className="relative small:max-w-[1120px] small:mx-auto">
                  <h2 className="text-white leading-[4.3rem]">
                    {content.FaqPage.introTitle}
                  </h2>

                  {/* mobile only: */}
                  <div className="xsmall:hidden pt-[3.5rem] pr-[10%]">
                    {messageWithLineBreaks.split("\n").map((line, index) => {
                      return (
                        <p key={index} className="text-white font-[500]">
                          {line}
                        </p>
                      );
                    })}
                  </div>
                  {/* tablet +  */}
                  <div className="hidden xsmall:block pt-[5rem] pr-0 xsmall:max-w-[59.4rem] small:max-w-[101.5rem] ">
                    {messageWithoutLineBreaks.split("\n").map((line, index) => {
                      return (
                        <p key={index} className="text-white font-[500]">
                          {line}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>

              <FaqSearch
                placeholder={content.FaqPage.formPlaceholder}
                faqs={faqs}
              />
            </div>
          );
        })}
        <div className="mt-[10rem] xsmall:mt-[12rem]">
          <ContactSection />
        </div>
      </Suspense>
    </main>
  );
}
