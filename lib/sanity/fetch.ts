import { client } from "./client";

type FetchOptions = {
  params?: Record<string, unknown>;
  /** ISR window in seconds. */
  revalidate?: number;
  tags?: string[];
};

/**
 * Runs a GROQ query, returning `null` when Sanity is not configured or the
 * request fails. Every caller pairs this with a static fallback so a missing
 * project or a transient error never breaks a page render.
 */
export async function sanityFetch<T>(
  query: string,
  { params = {}, revalidate = 60, tags }: FetchOptions = {},
): Promise<T | null> {
  if (!client) return null;

  try {
    return await client.fetch<T>(query, params, {
      // @sanity/client passes these straight through to Next's fetch cache.
      next: { revalidate, tags },
    });
  } catch (error) {
    console.error("[sanity] query failed, using static fallback:", error);
    return null;
  }
}
