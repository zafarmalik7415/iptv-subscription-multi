# Sanity CMS setup

The site now reads its content from Sanity, with the old static files in
`lib/*.ts` kept as a fallback. Until you complete step 3 below the site runs
exactly as before — no project, no env vars needed.

What is editable in Sanity:

| Studio document        | Powers                                                        |
| ---------------------- | ------------------------------------------------------------ |
| **Site settings**      | brand name, WhatsApp number, support email, footer tagline  |
| **Home page**          | hero, pricing section heading + shared features, how-it-works, devices strip |
| **Features**           | the 6 feature cards on the home page                         |
| **Pricing plans**      | the 1 / 3 / 6 / 12-month plan cards                          |
| **Testimonials**       | the review cards                                             |
| **FAQs**               | home-page FAQ + FAQ structured data                          |
| **Device guides**      | the step-by-step tabs on `/installation-guide`               |
| **Installation extras**| "Before you start" cards + tips list                         |
| **Countries**          | every `/iptv-subscription-*` page, menus, sitemap            |
| **Blog** (posts / authors / categories) | `/blog` and `/blog/[slug]` (rich text)     |

---

## 1. Install the Studio

```bash
cd sanity
npm install
```

## 2. Log in and create the project

```bash
npx sanity login          # opens the browser
npx sanity init --project # choose "Create new project", dataset name: production
```

`sanity init` writes the project id into `sanity/.env` (as
`SANITY_STUDIO_PROJECT_ID`). If it doesn't, copy it from
<https://www.sanity.io/manage> into `sanity/.env` (see `sanity/.env.example`).

## 3. Point the Next app at the project

```bash
cd ..
cp .env.local.example .env.local
```

Fill in `.env.local`:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=<your project id>
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-10-01
```

Restart `npm run dev`. The site now pulls from Sanity (and still falls back to
the static files for any document type you haven't filled in yet).

## 4. Load the current site content into Sanity (optional but recommended)

`sanity/seed.ndjson` contains every piece of the current site (countries, FAQs,
features, testimonials, plans, device guides, home-page copy, site settings).
Import it once so you start from the live content instead of blank documents:

```bash
cd sanity
npx sanity dataset import seed.ndjson production
```

Re-running the import replaces those documents (the ids are fixed), so it is
safe to run again after editing `seed.ndjson`. It does **not** touch blog posts.

## 5. Edit content

```bash
cd sanity
npm run dev            # local Studio at http://localhost:3333
```

To get a hosted editor your team can use without running anything locally:

```bash
npx sanity deploy      # pick a hostname -> https://<name>.sanity.studio
```

## 6. Optional: draft previews / private dataset

Create a **Viewer** token at <https://www.sanity.io/manage> → API → Tokens and
put it in `.env.local` as `SANITY_API_READ_TOKEN=...`.

---

## How it fits together

```
lib/sanity/env.ts       env vars + `hasSanity` flag
lib/sanity/client.ts    read-only @sanity/client (null when unconfigured)
lib/sanity/fetch.ts     sanityFetch(): returns null on missing config / error
lib/sanity/queries.ts   GROQ, projected to match lib/sanity/types.ts
lib/content.ts          getCountries(), getFaqs(), getPosts(), ... -> Sanity or static fallback
```

Components take the data as optional props and keep a built-in default, so they
still render if called with nothing. Pages (`app/**`) are the only place that
calls `lib/content.ts`.

Content is cached with `revalidate: 60`. To make edits show up instantly,
add a webhook in Sanity (Manage → API → Webhooks) that calls a revalidation
route, or lower the `revalidate` value in `lib/sanity/fetch.ts`.
