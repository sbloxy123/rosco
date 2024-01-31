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

export default async function About() {
  const servicesContent: servicesPageType[] = await getServicesPageContent();
  const services: serviceType[] = await getServiceLinks();
  const serviceSectionHeadings: serviceSectionType[] =
    await getServicesSectionTitles();

  return (
    <div>
      {servicesContent.map((content) => {
        console.log(content.ServicesPage.introBgImage);

        return (
          <div key={content.ServicesPage._id}>
            <InnerHero
              title={content.ServicesPage.pageHeading}
              image={content.ServicesPage.pageImage}
              sectionTitle="services"
              imageAltText={content.ServicesPage.pageImage.alt}
            />
            {/* <div className=" relative my-10 w-screen aspect-[390/504] xsmall:aspect-[744/416] small:aspect-[1440/504] "> */}
            {/* <div className="absolute top-0 left-0 bg-[#6015EF] w-full h-full"> */}
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

              <div className="text-white py-20 px-[5%] small:flex small:flex-row small:gap-10 small:items-center h-full">
                <div className="small:max-w-[488px] small:mx-auto">
                  <h2>{content.ServicesPage.introHeading}</h2>
                  <p className="py-10">{content.ServicesPage.introText}</p>
                </div>
                <ul className="pt-10 small:max-w-[500px] mx-auto">
                  {services.map((service, index) => {
                    return (
                      <li key={service._id} className="pt-2">
                        <h4 className="uppercase text-[2rem] font-bold tracking-[0.24em]">
                          <span className="hidden xsmall:inline pr-4">–</span>
                          {service.serviceTitle}
                        </h4>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* {services.map((service, index) => { */}
            {/*
                        todo:
                          setup component to show 1 service
                          make sure data is in schema
                          pass in data using props
                          setup types
                          use gradient border as a clip path to the title?

                         */}
            {/* </div> */}
            {/* </div> */}
          </div>
        );
      })}
    </div>
  );
}
