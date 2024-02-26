import { BiPackage } from "react-icons/bi";
import { defineField } from "sanity";

const service = {
  name: "service",
  title: "Services",
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
      title: "Service Summary Title",
      description: "In a few words, summarise what this service offers",
      type: "string",
    },
    {
      name: "coverImage",
      title: "Swiper Cover Image",
      type: "image",
      description: "Upload a cover image for this service's swiper component",
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
      name: "servicePageImage",
      title: "Cover Image for service component",
      type: "image",
      description:
        "Upload a cover image for this service's component in the Services page",
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
      name: "serviceBannerImage",
      title: "Background Image for Service Banner",
      type: "image",
      description:
        "Upload a background image for this service's banner component",
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
      description: "Full description about this service",
      of: [{ type: "block" }],
    },

    {
      name: "serviceAsideList",
      title: "Service Aside List",
      description: "Will revert to award if empty",
      type: "document",
      fields: [
        {
          name: "listIntro",
          title: "Intro Text for Summary List",
          type: "string",
        },
        {
          name: "summaryList",
          title: "Summary List",
          type: "array",
          of: [
            {
              name: "listItem",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "additionalInfo",
      title: "Additional Information",
      description: "Ability to add sub category details to this service",
      type: "document",
      fields: [
        {
          name: "additionalList",
          title: "Additional Information List",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "listItem",
                  title: "Title",
                  type: "string",
                },
                {
                  name: "listItemDetails",
                  title: "Text",
                  type: "text",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "awardHighlight",
      title: "Award",
      type: "document",
      fields: [
        {
          name: "awardDate",
          title: "Award Date",
          type: "string",
        },
        {
          name: "awardTitle",
          title: "Award Title",
          type: "string",
          description:
            "add '\\n' to the text where you want text to return on a new line",
        },
        {
          name: "awardLogo",
          title: "Award Logo",
          type: "image",
          description: "Upload the award logo",
          fields: [
            {
              name: "alt",
              title: "Alt",
              type: "string",
              description:
                "describe what is in the image let search engines know what is being shown",
            },
          ],
        },
      ],
    },
  ],
  extends: "page",
};

export default service;
