import configPromise from "@payload-config";
import { getPayload } from "payload";

import { GALLERY_CATEGORIES } from "@/collections/Gallery";
import type { Gallery, Media } from "@/payload-types";

export type GalleryCategory = Gallery["category"];

export type GalleryPhoto = {
  id: string;
  title: string;
  category: GalleryCategory;
  categoryLabel: string;
  alt: string;
  src: string;
  thumbSrc: string;
};

export const categoryLabel = (category: GalleryCategory): string =>
  GALLERY_CATEGORIES.find((option) => option.value === category)?.label ?? category;

/**
 * Photos shipped with the site. They are used until the Gallery collection has
 * content in it, so the gallery never renders empty on a fresh install.
 */
const FALLBACK_PHOTOS: Array<{
  file: string;
  title: string;
  category: GalleryCategory;
}> = [
  { file: "IMG_2173.jpg", title: "Lamborghini Huracan", category: "exterior" },
  { file: "IMG_2178.jpg", title: "Lamborghini Huracan", category: "exterior" },
  { file: "gt2.webp", title: "Porsche GT2 RS", category: "ceramic-coating" },
  { file: "yellowLambo.webp", title: "Lamborghini Huracan", category: "ceramic-coating" },
  { file: "redLambo.webp", title: "Lamborghini Aventador", category: "ceramic-coating" },
  { file: "IMG_2583.jpg", title: "Mercedes-Benz", category: "exterior" },
  { file: "IMG_2592.jpg", title: "Mercedes-Benz", category: "exterior" },
  { file: "IMG_2598.jpg", title: "Mercedes-Benz", category: "paint-correction" },
  { file: "porscheInterior.webp", title: "Porsche Interior", category: "interior" },
  { file: "IMG_2372.jpg", title: "Audi RS", category: "exterior" },
  { file: "IMG_2367.jpg", title: "Audi RS", category: "paint-correction" },
  { file: "IMG_2370.jpg", title: "Audi RS", category: "exterior" },
  { file: "IMG_2146.jpg", title: "BMW", category: "exterior" },
  { file: "benzInteriorRear.jpg", title: "Mercedes-Benz Interior", category: "interior" },
  { file: "IMG_2244.jpg", title: "BMW Interior", category: "interior" },
  { file: "IMG_2239.jpg", title: "BMW Interior", category: "interior" },
  { file: "IMG_2706.jpg", title: "Ceramic Coated Finish", category: "ceramic-coating" },
  { file: "IMG_2690.jpg", title: "Ceramic Coated Finish", category: "ceramic-coating" },
  { file: "IMG_2254.jpg", title: "Audi Interior", category: "interior" },
  { file: "audiInterior.webp", title: "Audi Interior", category: "interior" },
  { file: "IMG_2257.jpg", title: "Audi Interior", category: "interior" },
  { file: "IMG_2262.jpg", title: "Audi Wheels", category: "wheels" },
  { file: "IMG_2390.jpg", title: "Land Rover", category: "exterior" },
  { file: "IMG_2608.jpg", title: "Mercedes-Benz", category: "paint-correction" },
  { file: "redRover.jpg", title: "Range Rover", category: "exterior" },
  { file: "z4.jpg", title: "BMW Z4", category: "exterior" },
];

const fallbackPhotos = (category?: GalleryCategory, limit?: number): GalleryPhoto[] => {
  const photos = FALLBACK_PHOTOS.filter(
    (photo) => !category || photo.category === category
  ).map((photo) => ({
    id: photo.file,
    title: photo.title,
    category: photo.category,
    categoryLabel: categoryLabel(photo.category),
    alt: `${photo.title} detailed by Supreme Auto Care`,
    src: `/gallery/${photo.file}`,
    thumbSrc: `/gallery/${photo.file}`,
  }));

  return limit ? photos.slice(0, limit) : photos;
};

const toPhoto = (doc: Gallery): GalleryPhoto | null => {
  const image = doc.image as Media | number;
  if (typeof image !== "object" || !image?.url) return null;

  return {
    id: String(doc.id),
    title: doc.title,
    category: doc.category,
    categoryLabel: categoryLabel(doc.category),
    alt: image.alt || doc.title,
    src: image.sizes?.full?.url || image.url,
    thumbSrc: image.sizes?.thumbnail?.url || image.url,
  };
};

/**
 * Reads photos out of Payload. Falls back to the bundled photos when the
 * collection is empty or the database is not reachable, so the marketing site
 * keeps rendering even if the CMS is not set up yet.
 */
export const getGalleryPhotos = async (options?: {
  category?: GalleryCategory;
  limit?: number;
}): Promise<GalleryPhoto[]> => {
  const { category, limit } = options ?? {};

  try {
    const payload = await getPayload({ config: configPromise });
    const { docs } = await payload.find({
      collection: "gallery",
      depth: 1,
      limit: limit ?? 100,
      sort: "order",
      ...(category ? { where: { category: { equals: category } } } : {}),
    });

    const photos = docs.map(toPhoto).filter((photo): photo is GalleryPhoto => photo !== null);
    if (photos.length > 0) return photos;
  } catch (error) {
    console.error("Could not read the gallery from Payload, using bundled photos.", error);
  }

  return fallbackPhotos(category, limit);
};
