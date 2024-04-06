// sanity/sanity.client.ts

import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "vjrrsvsn",
  dataset: "production",
  apiVersion: "2023-07-16",
  useCdn: false,
};

const client = createClient(config);

export default client;

// import "server-only";
// import {
//   createClient,
//   type ClientConfig,
//   type QueryParams,
// } from "@sanity/client";
// import { projectId, dataset, apiVersion, token } from "@/sanity/sanity.api";

// const config: ClientConfig = {
//   projectId,
//   dataset,
//   apiVersion,
//   useCdn: false,
//   token,
// };

// const client = createClient(config);
// // export default client;

// export async function sanityFetch<QueryResponse>({
//   query,
//   qParams,
//   tags,
// }: {
//   query: string;
//   qParams?: QueryParams;
//   tags: string[];
// }): Promise<QueryResponse> {
//   return client.fetch<QueryResponse>(query, qParams, {
//     cache: "force-cache",
//     next: { tags },
//   });
// }
