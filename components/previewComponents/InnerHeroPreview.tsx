"use client";

import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { SanityDocument } from "next-sanity";
import { getServicesPageContent } from "@/sanity/sanity.query";
import InnerHero from "../InnerHero";

export default function InnerHeroPreview({
  initial,
  sectionTitle,
  pageNumber,
}: {
  initial: QueryResponseInitial<SanityDocument>;
  sectionTitle: string;
  pageNumber: string;
}) {
  const { data } = useQuery<SanityDocument | null>(
    getServicesPageContent,
    {},
    { initial }
  );

  return data ? (
    <div>
      <InnerHero
        title={data[0].ServicesPage.pageHeading}
        image={data[0].ServicesPage.pageImage}
        sectionTitle={sectionTitle}
        imageAltText={data[0].ServicesPage.pageImage.alt}
        pageNumber={pageNumber}
      />
    </div>
  ) : (
    <div className="bg-red-100">No posts found</div>
  );
}
