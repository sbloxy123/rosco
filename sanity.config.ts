import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { presentationTool } from "sanity/presentation";

export default defineConfig({
  name: "default",
  title: "Sanity Next.js Site",

  projectId: "vjrrsvsn",
  dataset: "production",
  basePath: "/studio",
  CORS: ["https://roscoandperlini.co.uk"],
  plugins: [
    structureTool(),
    visionTool(),
    presentationTool({
      previewUrl: {
        // ① use NEXT_PUBLIC_SITE_URL when present …
        origin:
          process.env.NEXT_PUBLIC_SITE_URL ||
          // ② …otherwise fall back to localhost for dev
          "http://localhost:3000",
        draftMode: { enable: "/api/draft" },
      },
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});
