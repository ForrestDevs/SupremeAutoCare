Supreme Auto Care — [Next.js](https://nextjs.org/) marketing site with a [Payload CMS](https://payloadcms.com/) admin for the gallery.

## Getting Started

Copy the environment file and fill it in:

```bash
cp .env.example .env
```

| Variable                | Required | What it is                                                        |
| ----------------------- | -------- | ----------------------------------------------------------------- |
| `DATABASE_URI`          | yes      | Postgres connection string used by Payload                          |
| `PAYLOAD_SECRET`        | yes      | Secret used to sign admin sessions (`openssl rand -hex 32`)         |
| `BLOB_READ_WRITE_TOKEN` | prod     | Vercel Blob token. Without it, uploads are written to local `./media` |

Then create the database tables and start the dev server:

```bash
npm install
npm run migrate
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for the site and
[http://localhost:3000/admin](http://localhost:3000/admin) for the CMS. The first
visit to `/admin` asks you to create an admin user.

## Editing the gallery

`Gallery` in the admin holds the photos shown on `/gallery` and the "Recent Work"
strip on `/ceramic-coating`. Each entry has a title, an image, a category, and a
sort order (lower numbers show up first). Images are uploaded into `Media`.

Until the collection has content, both pages fall back to the photos bundled in
`public/gallery`, so the site never renders an empty gallery. See
`src/lib/gallery.ts`.

## Project layout

```
src/
  app/(frontend)/      the public marketing site
  app/(payload)/       the Payload admin + REST/GraphQL API (generated)
  collections/         Payload collections: Gallery, Media, Users
  migrations/          database migrations, committed to the repo
  payload.config.ts    Payload configuration
```

## Changing the CMS schema

After editing anything under `src/collections`:

```bash
npm run generate:types    # refresh src/payload-types.ts
npm run migrate:create    # write a migration for the schema change
npm run migrate           # apply it locally
```

## Deploying to Vercel

Set `DATABASE_URI`, `PAYLOAD_SECRET`, and `BLOB_READ_WRITE_TOKEN` in the project's
environment variables. `BLOB_READ_WRITE_TOKEN` matters in production — Vercel's
filesystem is read-only, so without it uploads through the admin will fail.

Migrations do not run as part of `next build`. Either run `npm run migrate` against
the production database when the schema changes, or set the Vercel build command to
`payload migrate && next build` so deploys apply them automatically.
