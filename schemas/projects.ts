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
      description: "In a few words, summarise the project involved",
      type: "string",
    },
    {
      name: "projectBtnText",
      title: "Project Button Text",
      description: "Text shown on project button",
      type: "string",
    },
    {
      name: "image",
      title: "Project Image",
      type: "image",
      description: "Upload an image for this project",
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
};

export default projects;
