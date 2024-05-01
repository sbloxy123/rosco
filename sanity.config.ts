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
  CORS: ["https://rosco-liard.vercel.app"],
  plugins: [
    structureTool(),
    visionTool(),
    presentationTool({
      previewUrl: {
        // origin: "http://localhost:3000",
        origin: "https://rosco-liard.vercel.app/",
        draftMode: {
          enable: "/api/draft",
        },
      },
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});
