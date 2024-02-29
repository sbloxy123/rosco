import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

export default defineConfig({
  name: "default",
  title: "Sanity Next.js Site",

  projectId: "vjrrsvsn",
  dataset: "production",
  basePath: "/studio",
  CORS: ["https://rosco-liard.vercel.app"],
  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
