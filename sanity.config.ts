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
        origin:
          // In Vercel: https://<deployment>.vercel.app
          process.env.NEXT_PUBLIC_SITE_URL ||
          // Fallback when env-var isn’t set (local dev / prod)
          (process.env.VERCEL_ENV === "preview"
            ? `https://${process.env.VERCEL_URL}`
            : "https://roscoandperlini.co.uk"),
        draftMode: { enable: "/api/draft" }, // same as now
      },
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});
