import InnerHero from "@/components/InnerHero";
import {
  getCroppedImageSrc,
  getServicesPageContent,
} from "@/sanity/sanity.query";
import type { servicesPageType } from "@/types";

import {
  getServiceLinks,
  getServicesSectionTitles,
} from "@/sanity/sanity.query";

import type { serviceType, serviceSectionType } from "@/types";
import BgDots from "@/components/assets/BgDots";
import ServiceItem from "@/components/ServiceItem";
import LatestProjects from "@/components/LatestProjects";
import MailingListCta from "@/components/MailingListCta";
import ContactSection from "@/components/ContactSection";
import DetailedServiceList from "@/components/DetailedServiceList";

export async function metadata() {
  const servicesContent: servicesPageType[] = await getServicesPageContent();
  return {
    title: "Rosco & Perlini | Services",
    description: servicesContent[0].ServicesPage.pageHeading,
    openGraph: {
      images: servicesContent[0].ServicesPage.pageImage,
    },
  };
}

export default async function Services() {
  const servicesContent: servicesPageType[] = await getServicesPageContent();
  const services: serviceType[] = await getServiceLinks();

  return (
    <div>
      {servicesContent.map((content) => {
        return (
          <div key={content._id}>
            <InnerHero
              title={content.ServicesPage.pageHeading}
              image={content.ServicesPage.pageImage}
              sectionTitle="services"
              imageAltText={content.ServicesPage.pageImage.alt}
              pageNumber="03"
            />

            {/* intro banner */}
            <div
              style={
                {
                  "--image-url": `url(${getCroppedImageSrc(
                    content.ServicesPage.introBgImage
                  )})`,
                } as React.CSSProperties
              }
              className="relative w-full h-full bg-[image:var(--image-url)] bg-cover  mb-20 overflow-hidden my-[56px] xsmall:my-[80px]"
            >
              <div className="hidden small:block absolute top-0 left-0 h-[150%] w-auto mix-blend-multiply">
                <BgDots />
              </div>
              <div className="hidden small:block absolute top-0 left-0 h-[150%] w-auto mix-blend-multiply">
                <BgDots />
              </div>
              <div className="hidden small:block absolute top-0 left-0 h-[150%] w-auto mix-blend-multiply">
                <BgDots />
              </div>

              <div className="absolute bottom-0 right-0 h-full xsmall:h-[120%] small:h-[150%] w-auto mix-blend-multiply rotate-180">
                <BgDots />
              </div>
              <div className="absolute bottom-0 right-0 h-full xsmall:h-[120%] small:h-[150%] w-auto mix-blend-multiply rotate-180">
                <BgDots />
              </div>
              <div className="absolute bottom-0 right-0 h-full xsmall:h-[120%] small:h-[150%] w-auto mix-blend-multiply rotate-180">
                <BgDots />
              </div>
              <div className="absolute bottom-0 right-0 h-full xsmall:h-[120%] small:h-[150%] w-auto mix-blend-multiply rotate-180">
                <BgDots />
              </div>

              <div className="relative text-white pt-[4rem] pb-[6.5rem] px-[5%] xsmall:pt-[6rem] small:flex small:flex-row small:gap-10  small:pt-[12rem] small:pb-[12rem] medium:max-w-[1120px] medium:px-0 mx-auto">
                <div className="small:max-w-[488px] small:mx-auto medium:ml-0">
                  <h2 className="pb-[1.5rem]">
                    {content.ServicesPage.introHeading}
                  </h2>
                  <p className="pt-10">{content.ServicesPage.introText}</p>
                </div>
                <ul className="pt-[3rem] small:max-w-[500px] mx-auto">
                  {services.map((service, index) => {
                    return (
                      <li
                        key={service._id}
                        className="pt-2 xsmall:pt-0 small:pt-[1rem]"
                      >
                        <h4 className="uppercase text-[2rem] xsmall:text-[2.2rem] font-bold tracking-[0.24em]">
                          <span className="hidden xsmall:inline pr-4">–</span>
                          {service.serviceTitle}
                        </h4>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <DetailedServiceList allServices={services} />
          </div>
        );
      })}

      <LatestProjects />
      <div className="my-section-gap xsmall:my-section-gap-xsmall small:my-section-gap-small">
        <MailingListCta />
      </div>
      <ContactSection />
    </div>
  );
}
