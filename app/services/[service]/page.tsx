import Image from "next/image";
import { Metadata } from "next";
import { getSingleService } from "@/sanity/sanity.query";
import type { serviceType } from "@/types";
import { PortableText } from "@portabletext/react";
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

  return <div>{service.serviceTitle}</div>;
}
