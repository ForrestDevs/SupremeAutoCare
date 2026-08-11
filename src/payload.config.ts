import path from "path";
import { fileURLToPath } from "url";

import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import { buildConfig } from "payload";
import sharp from "sharp";

import { Gallery } from "@/collections/Gallery";
import { Media } from "@/collections/Media";
import { Users } from "@/collections/Users";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const blobToken = process.env.BLOB_READ_WRITE_TOKEN;

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: " — Supreme Auto Care",
    },
  },
  collections: [Gallery, Media, Users],
  editor: lexicalEditor(),
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
  }),
  secret: process.env.PAYLOAD_SECRET || "",
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  plugins: [
    // Vercel's filesystem is read-only, so uploads go to Blob storage whenever a
    // token is configured. Without one, Payload falls back to the local ./media
    // folder, which is what we want for local development.
    ...(blobToken
      ? [
          vercelBlobStorage({
            enabled: true,
            clientUploads: true,
            collections: { [Media.slug]: true },
            token: blobToken,
          }),
        ]
      : []),
  ],
});
