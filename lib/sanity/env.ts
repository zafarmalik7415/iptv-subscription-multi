/**
 * Sanity connection settings, read from environment variables.
 *
 * Set these in `.env.local` (see `.env.local.example`). Until a project id and
 * dataset are present the site falls back to the static content in `lib/*.ts`,
 * so the app keeps working with no Sanity project configured.
 */

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.trim() ?? "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET?.trim() || "production";
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION?.trim() || "2024-10-01";

/** Optional read token, only needed for private datasets / draft previews. */
export const readToken = process.env.SANITY_API_READ_TOKEN?.trim() ?? "";

/** True once a Sanity project is wired up; gates every fetch. */
export const hasSanity = Boolean(projectId);
