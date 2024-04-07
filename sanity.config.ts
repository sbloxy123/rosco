import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
interface ServiceDocument {
  _type: string;
  slug?: {
    current: string;
  };
}

export default defineConfig({
  name: "default",
  title: "Sanity Next.js Site",
  projectId: "vjrrsvsn",
  dataset: "production",
  basePath: "/studio",
  CORS: ["https://rosco-liard.vercel.app"],
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
  document: {
    // prev is the result from previous plugins and thus can be composed
    productionUrl: async (prev, context) => {
      const doc: ServiceDocument = context.document;

      // context includes the client and other details
      const { getClient, dataset, document } = context;
      const client = getClient({ apiVersion: "2023-07-16" });

      if (doc._type === "service" && doc.slug) {
        const slug = doc.slug.current; // Directly access the slug

        const params = new URLSearchParams();
        params.set("preview", "true");
        params.set("dataset", dataset);

        return `https://rosco-liard.vercel.app/service/${slug}?${params}`;
      }

      return prev;
    },
  },
});
