import Image from "next/image";
import { Metadata } from "next";
import { getSingleService } from "@/sanity/sanity.query";
import type { serviceType } from "@/types";
import InnerHero from "@/components/InnerHero";
import ServiceBanner from "@/components/ServiceBanner";
import { getServiceLinks } from "@/sanity/sanity.query";
import MailingListCta from "@/components/MailingListCta";
import ContactSection from "@/components/ContactSection";
import DetailedServiceList from "@/components/DetailedServiceList";
import ServiceImageSlideshow from "@/components/ServiceImageSlideshow";

type Props = {
  params: {
    service: string;
  };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.service;
  const service: serviceType = await getSingleService(slug);

  return {
    title: `Service | ${service.serviceTitle}`,
    description: service.serviceSummary,
    openGraph: {
      images: service.coverImage?.image || "add-a-fallback-project-image-here",
      title: service.serviceTitle,
      description: service.serviceSummary,
    },
  };
}

export default async function Service({ params }: Props) {
  const slug = params.service;
  const service: serviceType = await getSingleService(slug);
  const allServices: serviceType[] = await getServiceLinks();

  const titleWithLineBreaks = service.serviceSummary.replace(/\\n/g, "\n");
  const titleWithoutLineBreaks = service.serviceSummary.replace(/\\n/g, " ");

  return (
    <div>
      <InnerHero
        sectionTitle={service.serviceTitle}
        desktopHasLineBreaks={{
          hasLineBreaks: true,
          titleWithLineBreaks: titleWithLineBreaks,
        }}
        title={titleWithoutLineBreaks}
        image={service.servicePageImage}
        imageAltText={service.servicePageImage.alt}
      />

      <ServiceBanner
        backgroundImage={service.serviceBannerImage}
        serviceTitle={service.serviceTitle}
        serviceText={service.description}
        additionalInfo={service.additionalInfo?.additionalList}
        awardHighlight={service.awardHighlight}
        asideList={service.serviceAsideList}
      />
      <ServiceImageSlideshow />

      <DetailedServiceList allServices={allServices} />

      <div className="my-section-gap xsmall:my-section-gap-xsmall small:my-section-gap-small">
        <MailingListCta />
      </div>
      <ContactSection />
    </div>
  );
}
