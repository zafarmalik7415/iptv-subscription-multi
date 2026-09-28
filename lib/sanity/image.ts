import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { dataset, hasSanity, projectId } from "./env";

const builder = hasSanity ? imageUrlBuilder({ projectId, dataset }) : null;

/**
 * Build a CDN URL for a Sanity image reference. Returns `null` when Sanity is
 * not configured or no source was given.
 */
export function urlForImage(source: SanityImageSource | null | undefined) {
  if (!builder || !source) return null;
  return builder.image(source).auto("format").fit("max");
}

export type { SanityImageSource };
