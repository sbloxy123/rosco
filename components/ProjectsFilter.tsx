"use client";
import { useState, useRef } from "react";
import type { projectType, projectsPageType } from "@/types";
import BgDots from "./assets/BgDots";
import ProjectsComponent from "./ProjectComponent";
import FilterButton from "./common/FilterButton";
import { getAllProjects } from "@/sanity/sanity.query";

export default function ProjectsFilter({
  projects,
  assets,
}: {
  projects: projectType[];
  assets: projectsPageType[];
}) {
  const ref = useRef<HTMLInputElement>(null);
  const [filters, setFilters] = useState<{ id: number; category: string }[]>(
    []
  );

  const handleFilter = (category: string) => {
    // Check if the category already exists in the filters array
    const filterIndex = filters.findIndex(
      (filter) => filter.category === category
    );

    if (filterIndex !== -1) {
      // Remove the filter if it already exists
      const updatedFilters = [...filters];
      updatedFilters.splice(filterIndex, 1);
      setFilters(updatedFilters);
    } else {
      // Add the filter if it doesn't exist
      const newFilter: { id: number; category: string } = {
        id: filters.length, // Assign a unique ID to the filter
        category: category,
      };
      setFilters([...filters, newFilter]);
    }
  };

  const handleFilterToggle = () => {
    if (filters.length === categoriesArray.length) {
      // If all categories are already selected, clear all filters
      setFilters([]);
    } else {
      // Otherwise, populate filters with all categories
      setFilters(
        categoriesArray.map((category, index) => ({ id: index, category }))
      );
    }
  };

  let categories = new Set<string>();
  projects.forEach((project) => {
    project.categories.forEach((category) => {
      if (category !== "") {
        categories.add(category);
      }
    });
  });

  const categoriesArray = Array.from(categories);

  // Store all projects once
  const allProjects = [...projects];

  return (
    <div>
      <div className="relative bg-theme-dark overflow-hidden pt-[3.7rem] pb-[5rem] px-[5%] xsmall:pt-[4.2rem] small:pt-[9rem] small:pb-[11rem] small:px-layout-small">
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
        <div className="relative">
          <h2 className="text-white">Latest Projects</h2>

          <div className="uppercase text-[1.6rem] font-semibold tracking[0.06em] text-white flex justify-between pt-[3.5rem] pb-[3.3rem] xsmall:pt-[5rem] small:pt-[6rem] small:pb-[4rem]">
            <p className="">Filter by</p>
            <div className="flex gap-[1.5rem] items-center">
              <p>view all</p>

              <div
                className="bg-white rounded-full w-[56px] h-[28px] relative flex justify-start items-center px-[2px] cursor-pointer"
                onClick={() => handleFilterToggle()}
              >
                <span
                  className={`w-[23.33px] aspect-square rounded-[100%] bg-theme-purple ${
                    filters.length === categoriesArray.length
                      ? "ml-auto"
                      : "ml-0"
                  }`}
                  style={{ transition: "all 5s ease" }}
                ></span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 xsmall:flex-row flex-wrap">
            {categoriesArray.map((category, index) => {
              const filterMatch = filters.some(
                (filter) => filter.category === category
              );
              return (
                <div key={index} className="xsmall:w-fit">
                  <FilterButton
                    key={index}
                    text={category}
                    selected={filterMatch} // Pass the boolean value of filterMatch
                    onClick={() => handleFilter(category)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        {assets.map((content) => (
          <div key={content.ProjectsPage._id}>
            {assets.map((content) => (
              <div key={content.ProjectsPage._id}>
                {/* Map over all projects to filter based on the category */}
                {allProjects
                  .filter((project) =>
                    filters.length > 0
                      ? filters.some((filter) =>
                          project.categories.includes(filter.category)
                        )
                      : true
                  )
                  .map((filteredProject) => (
                    <div
                      key={filteredProject._id}
                      className="mt-section-gap small:mt-[325px]"
                    >
                      <ProjectsComponent
                        project={filteredProject}
                        bg={content.ProjectsPage.BgImage}
                      />
                    </div>
                  ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
