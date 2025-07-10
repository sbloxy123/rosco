import { createClient } from "@sanity/client";

import { apiVersion, dataset, projectId, useCdn } from "./env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  token: process.env.SANITY_API_READ_TOKEN,
  // These settings are overridden in
  // ./sanity/lib/store.ts when draftMode is enabled
  perspective: "published",
  stega: {
    enabled: false,
    studioUrl: "/studio",
  },
});
