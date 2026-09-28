# IPTV Pro — Sanity Studio

Standalone content Studio for the Next.js site in the parent folder. It is a
separate package with its own `node_modules` and is **not** part of the Next
build.

```bash
npm install
npx sanity login
npx sanity init --project      # create the project, dataset: production
npx sanity dataset import seed.ndjson production   # load current site content
npm run dev                    # http://localhost:3333
npx sanity deploy              # hosted editor at https://<name>.sanity.studio
```

Full walkthrough (including wiring the Next app): `../SANITY_SETUP.md`.

- `schemaTypes/` — content model
- `structure.ts` — Studio sidebar (singletons pinned to the top)
- `seed.ndjson` — the current site content, importable in one command
