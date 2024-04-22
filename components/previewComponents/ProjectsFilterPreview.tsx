"use client";

import { projectType } from "@/types";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { SanityDocument } from "next-sanity";
import ProjectsFilter from "../ProjectsFilter";

export default function ProjectsFilterPreview({
  initial,
  originalContent,
  assets,
}: {
  initial: QueryResponseInitial<projectType[]>;
  originalContent: any;
  assets: any;
}) {
  const { data } = useQuery<projectType[] | null>(
    originalContent,
    {},
    { initial }
  );

  return data ? (
    <div>
      <ProjectsFilter projects={data} assets={assets} />
    </div>
  ) : (
    <div className="bg-red-100">No posts found</div>
  );
}
