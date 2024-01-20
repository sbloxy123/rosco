import { BiPackage } from "react-icons/bi";
import { defineField } from "sanity";

const service = {
  name: "service",
  title: "Service",
  description: "Service Schema",
  type: "document",
  icon: BiPackage,
  fields: [
    {
      name: "serviceTitle",
      title: "Service Title",
      type: "string",
      description: "Enter the name of the service",
    },
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "Add a custom slug for the URL or generate one from the name",
      options: { source: "serviceTitle" },
      validation: (rule) => rule.required(),
    }),
    {
      name: "serviceSummary",
      title: "Service Summary",
      description: "In a few words, summarise what this service offers",
      type: "string",
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      description: "Upload a cover image for this service",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      description: "Write a full description about this service",
      of: [{ type: "block" }],
    },
  ],
};

export default service;
