// Fix-up script: updates Gallery entries with the correct title and category,
// matched by the original filename, using data recovered from Luke's original
// deployment (supreme-auto-care.vercel.app/gallery).
//
// Run with:  node --env-file=.env --import tsx fix-gallery-titles.mjs

import { getPayload } from 'payload'
import config from './src/payload.config.ts'

// filename -> { title, category }
const CORRECTIONS = {
  'IMG_2173.jpg': { title: 'Lamborghini Huracan', category: 'exterior' },
  'IMG_2178.jpg': { title: 'Lamborghini Huracan', category: 'exterior' },
  'gt2.webp': { title: 'Porsche GT2 RS', category: 'ceramic-coating' },
  'yellowLambo.webp': { title: 'Lamborghini Huracan', category: 'ceramic-coating' },
  'redLambo.webp': { title: 'Lamborghini Aventador', category: 'ceramic-coating' },
  'IMG_2583.jpg': { title: 'Mercedes-Benz', category: 'exterior' },
  'IMG_2592.jpg': { title: 'Mercedes-Benz', category: 'exterior' },
  'IMG_2598.jpg': { title: 'Mercedes-Benz', category: 'paint-correction' },
  'porscheInterior.webp': { title: 'Porsche Interior', category: 'interior' },
  'IMG_2372.jpg': { title: 'Audi RS', category: 'exterior' },
  'IMG_2367.jpg': { title: 'Audi RS', category: 'paint-correction' },
  'IMG_2370.jpg': { title: 'Audi RS', category: 'exterior' },
  'IMG_2146.jpg': { title: 'BMW', category: 'exterior' },
  'benzInteriorRear.jpg': { title: 'Mercedes-Benz Interior', category: 'interior' },
  'IMG_2244.jpg': { title: 'BMW Interior', category: 'interior' },
  'IMG_2239.jpg': { title: 'BMW Interior', category: 'interior' },
  'IMG_2706.jpg': { title: 'Ceramic Coated Finish', category: 'ceramic-coating' },
  'IMG_2690.jpg': { title: 'Ceramic Coated Finish', category: 'ceramic-coating' },
  'IMG_2254.jpg': { title: 'Audi Interior', category: 'interior' },
  'audiInterior.webp': { title: 'Audi Interior', category: 'interior' },
  'IMG_2257.jpg': { title: 'Audi Interior', category: 'interior' },
  'IMG_2262.jpg': { title: 'Audi Wheels', category: 'wheels' },
  'IMG_2390.jpg': { title: 'Land Rover', category: 'exterior' },
  'IMG_2608.jpg': { title: 'Mercedes-Benz', category: 'paint-correction' },
  'redRover.jpg': { title: 'Range Rover', category: 'exterior' },
  'z4.jpg': { title: 'BMW Z4', category: 'exterior' },
}

async function run() {
  const payload = await getPayload({ config })

  let updated = 0
  let skipped = 0

  for (const [filename, fix] of Object.entries(CORRECTIONS)) {
    // 1. Find the Media doc for this filename.
    const mediaResult = await payload.find({
      collection: 'media',
      where: { filename: { equals: filename } },
      limit: 1,
    })

    if (mediaResult.docs.length === 0) {
      console.log(`⚠ No media found for ${filename}, skipping`)
      skipped++
      continue
    }
    const mediaId = mediaResult.docs[0].id

    // 2. Find the Gallery doc pointing at that Media doc.
    const galleryResult = await payload.find({
      collection: 'gallery',
      where: { image: { equals: mediaId } },
      limit: 1,
    })

    if (galleryResult.docs.length === 0) {
      console.log(`⚠ No gallery entry found for ${filename}, skipping`)
      skipped++
      continue
    }
    const galleryDoc = galleryResult.docs[0]

    // 3. Update it.
    await payload.update({
      collection: 'gallery',
      id: galleryDoc.id,
      data: {
        title: fix.title,
        category: fix.category,
      },
    })

    console.log(`✔ ${filename} -> "${fix.title}" (${fix.category})`)
    updated++
  }

  console.log(`\nDone. Updated ${updated}, skipped ${skipped}.`)
  process.exit(0)
}

run()
