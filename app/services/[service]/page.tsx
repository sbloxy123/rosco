import Image from "next/image";
import { Metadata } from "next";
import { getSingleService } from "@/sanity/sanity.query";
import type { serviceType } from "@/types";
import InnerHero from "@/components/InnerHero";
import ServiceBanner from "@/components/ServiceBanner";
// import fallBackImage from "@/public/project.png";

type Props = {
  params: {
    service: string;
  };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.service;
  const service: serviceType = await getSingleService(slug);

  return {
    title: `${service.serviceTitle} | Project`,
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

  return (
    <div>
      <InnerHero
        sectionTitle={service.serviceTitle}
        title={service.serviceSummary}
        image={service.servicePageImage}
        imageAltText={service.servicePageImage.alt}
      />

      <ServiceBanner
        backgroundImage={service.serviceBannerImage}
        serviceTitle={service.serviceTitle}
        serviceText={service.description}
        additionalInfo={service.additionalInfo?.additionalList}
        awardHighlight={service.awardHighlight}
      />
    </div>
  );
}
