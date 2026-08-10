// Bulk-import script: uploads every photo in public/gallery into Payload's
// Media + Gallery collections, guessing a title and category from the filename.
//
// Run with:  node bulk-import-gallery.mjs
// (from the project root, inside the Codespace terminal, with .env filled in)

import { getPayload } from 'payload'
import config from './src/payload.config.ts'
import fs from 'fs'
import path from 'path'

const GALLERY_DIR = path.resolve('./public/gallery')

// Category guess based on keywords found in the filename (case-insensitive).
function guessCategory(filename) {
  const f = filename.toLowerCase()
  if (f.includes('interior')) return 'interior'
  if (f.includes('wheel')) return 'wheels'
  if (f.includes('coating') || f.includes('ceramic')) return 'ceramic-coating'
  if (f.includes('correction') || f.includes('paint')) return 'paint-correction'
  return 'exterior'
}

// Turn a filename like "bmwWhite.webp" or "IMG_2583.jpg" into a readable title.
function guessTitle(filename) {
  const base = filename.replace(/\.[^.]+$/, '') // strip extension
  if (/^IMG_\d+$/i.test(base)) {
    return `Detail Photo ${base.replace(/^IMG_/i, '')}`
  }
  // Insert a space before each capital letter, then title-case it.
  const spaced = base.replace(/([a-z])([A-Z])/g, '$1 $2')
  return spaced
    .split(/[\s_-]+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

async function run() {
  const payload = await getPayload({ config })

  const files = fs
    .readdirSync(GALLERY_DIR)
    .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
    .sort()

  console.log(`Found ${files.length} photos in public/gallery. Starting import...\n`)

  let order = 0
  for (const filename of files) {
    const filePath = path.join(GALLERY_DIR, filename)
    const title = guessTitle(filename)
    const category = guessCategory(filename)

    try {
      const fileBuffer = fs.readFileSync(filePath)
      const mimetype =
        filename.endsWith('.png') ? 'image/png' :
        filename.endsWith('.webp') ? 'image/webp' : 'image/jpeg'

      // 1. Create the Media doc (this uploads the actual file to Vercel Blob).
      const media = await payload.create({
        collection: 'media',
        data: { alt: title },
        file: {
          data: fileBuffer,
          mimetype,
          name: filename,
          size: fileBuffer.length,
        },
      })

      // 2. Create the Gallery doc, pointing at that Media doc.
      await payload.create({
        collection: 'gallery',
        data: {
          title,
          image: media.id,
          category,
          order,
        },
      })

      console.log(`✔ ${filename} -> title: "${title}", category: "${category}"`)
      order += 10
    } catch (err) {
      console.error(`✘ FAILED: ${filename}`, err.message)
    }
  }

  console.log('\nDone. Check the admin panel to review titles/categories and adjust as needed.')
  process.exit(0)
}

run()
