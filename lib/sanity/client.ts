import { createClient, type SanityClient } from "@sanity/client";

import { apiVersion, dataset, hasSanity, projectId, readToken } from "./env";

/**
 * Shared read-only client. `null` when no project is configured so callers can
 * cheaply fall back to static content.
 */
export const client: SanityClient | null = hasSanity
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
      perspective: "published",
      token: readToken || undefined,
    })
  : null;
