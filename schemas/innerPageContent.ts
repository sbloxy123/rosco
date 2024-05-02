import { BiInfoSquare } from "react-icons/bi";

const innerPageContent = {
  name: "innerPage",
  title: "Innerpage Content",
  type: "document",
  icon: BiInfoSquare,
  fields: [
    {
      name: "aboutPage",
      title: "About Page Content",
      type: "document",
      fields: [
        {
          name: "pageHeading",
          title: "About Page Hero Heading",
          description:
            "Heading for the About Page. --add '\\n'(desktop), '\\tabletn' or '\\mobilen' to the text where you want text to return on a new line.",
          type: "string",
        },
        {
          name: "pageImage",
          title: "About Page Hero Image",
          type: "image",
          description: "Upload an About Us Hero image",
          options: { hotspot: true },
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
        {
          name: "introHeading",
          title: "Heading",
          description: "Heading for introduction on About Page ('Who we are')",
          type: "string",
        },
        {
          name: "introText",
          title: "Introduction Text",
          description: "Introduction text on About Page ('Who we are')",
          type: "array",
          of: [{ type: "block" }],
        },
        {
          name: "introBgImage",
          title: "Background Image",
          type: "image",
          description: "Background image for intro text",
          options: { hotspot: true },
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
        {
          name: "featureText",
          title: "Feature text",
          description:
            "Text in highlight box. --add '\\n'(desktop), '\\tabletn' or '\\mobilen' to the text where you want text to return on a new line.",
          type: "text",
        },
        {
          name: "contentArea",
          title: "Content Area Text",
          type: "array",
          of: [{ type: "block" }],
        },
      ],
      extends: "page",
    },

    {
      name: "ServicesPage",
      title: "Services Page Content",
      type: "document",
      fields: [
        {
          name: "pageHeading",
          title: "Services Page Hero Heading",
          description: "Heading for the Service Page",
          type: "string",
        },
        {
          name: "pageImage",
          title: "Services Page Hero Image",
          type: "image",
          description: "Upload a Service Hero image",
          options: { hotspot: true },
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
        {
          name: "introBgImage",
          title: "Services Page Background Image",
          type: "image",
          description: "Background image for intro text",
          options: { hotspot: true },
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
        {
          name: "introHeading",
          title: "Heading",
          description:
            "Heading for introduction on Services Page ('Who we are') --add '\\n'(desktop), '\\tabletn' or '\\mobilen' to the text where you want text to return on a new line.",
          type: "string",
        },
        {
          name: "introText",
          title: "Introduction Text",
          description: "Introduction text on Services Page ('Who we are')",
          type: "text",
        },
      ],

      extends: "page",
    },

    {
      name: "ProjectsPage",
      title: "Projects Page Content",
      type: "document",
      fields: [
        {
          name: "pageHeading",
          title: "Projects Page Hero Heading",
          description:
            "Heading for the Projects Page. --add '\\n' to the text where you want text to return on a new line.  *NOTE - this only applies to desktop screen sizes",
          type: "string",
        },
        {
          name: "pageImage",
          title: "Projects Page Hero Image",
          type: "image",
          description: "Upload a Projects Hero image",
          options: { hotspot: true },
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
        {
          name: "BgImage",
          title: "Background Image / Texture",
          type: "image",
          description: "Background image for each project",
          options: { hotspot: true },
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
      extends: "page",
    },
    {
      name: "FaqPage",
      title: "FAQ Page Content",
      type: "document",
      fields: [
        {
          name: "pageHeading",
          title: "FAQ Page Hero Heading",
          description: "Heading for the FAQ Page",
          type: "string",
        },
        {
          name: "pageImage",
          title: "FAQ Page Hero Image",
          type: "image",
          description: "Upload a FAQ Hero image",
          options: { hotspot: true },
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
        {
          name: "introTitle",
          title: "FAQ Page Introduction Title",
          description: "Heading for the FAQ Introduction",
          type: "string",
        },
        {
          name: "introMessage",
          title: "FAQ Page Introduction Message",
          description:
            "Message for the FAQ Introduction --add '\\n' to the text where you want text to return on a new line.  *NOTE - this only applies on mobile screens",
          type: "text",
        },
        {
          name: "formPlaceholder",
          title: "FAQ Search Placeholder text",
          description: "text inside search form to prompt user",
          type: "string",
        },
      ],
      extends: "page",
    },

    {
      name: "ContactPage",
      title: "Contact Page Content",
      type: "document",
      fields: [
        {
          name: "pageHeading",
          title: "Contact Page Hero Heading",
          description:
            "Heading for the Contact Page. --add '\\n'(desktop), '\\tabletn' or '\\mobilen' to the text where you want text to return on a new line.",
          type: "string",
        },
        {
          name: "pageImage",
          title: "Contact Page Hero Image",
          type: "image",
          description: "Upload a Contact Hero image",
          options: { hotspot: true },
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

  // Include the common "Page" schema
  extends: "page",

  preview: {
    prepare(value: Record<string, any>) {
      return {
        title: value.title || "Inner-page Content", // adjust as needed based on your fields
      };
    },
  },
};

export default innerPageContent;
