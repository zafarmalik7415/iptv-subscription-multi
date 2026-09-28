import { defineCliConfig } from "sanity/cli";

/**
 * Fill these in after `npx sanity init --project` (or copy them from
 * https://www.sanity.io/manage). They must match
 * `NEXT_PUBLIC_SANITY_PROJECT_ID` / `NEXT_PUBLIC_SANITY_DATASET` in the
 * Next app's `.env.local`.
 */
export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || "",
    dataset: process.env.SANITY_STUDIO_DATASET || "production",
  },
  /** Lets `sanity dev` auto-update the studio config. */
  autoUpdates: true,
});
