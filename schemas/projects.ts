import { BiImages } from "react-icons/bi";
import { defineField } from "sanity";

const projects = {
  name: "projects",
  title: "Projects",
  description: "Projects Schema",
  type: "document",
  icon: BiImages,
  fields: [
    {
      name: "projectTitle",
      title: "Project Title",
      type: "string",
      description: "Enter the title of the project",
    },
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "Add a custom slug for the URL or generate one from the name",
      options: { source: "projectTitle" },
      validation: (rule) => rule.required(),
    }),
    {
      name: "projectSummary",
      title: "Project Summary",
      type: "text",
    },
    {
      name: "projectBtnText",
      title: "Project Button Text",
      description: "Text shown on project button",
      type: "string",
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "service" }],
        },
      ],
    },
    {
      name: "completionTimeframe",
      title: "Completion Timeframe",
      type: "string",
    },
    {
      name: "projectLocation",
      title: "Project Location",
      type: "string",
    },
    {
      name: "image",
      title: "Homepage Project Image",
      type: "image",
      description: "Upload an image for the image slider on the homepage",
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
      name: "beforeAfter",
      title: "Before / After Images",
      type: "document",
      fields: [
        {
          name: "beforeImage",
          title: "Before image",
          type: "image",
          description: "Upload a BEFORE image",
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
          name: "afterImage",
          title: "After image",
          type: "image",
          description: "Upload an AFTER image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Alt",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "gallery",
      type: "object",
      title: "Gallery",
      fields: [
        {
          name: "images",
          type: "array",
          title: "Images",
          of: [
            {
              name: "image",
              type: "image",
              title: "Image",
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: "alt",
                  type: "string",
                  title: "Alternative text",
                },
              ],
            },
          ],
          options: {
            layout: "grid",
          },
        },
      ],
    },
  ],
};

export default projects;
