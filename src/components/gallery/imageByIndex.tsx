export const imagePublic: string[] = [
  "IMG_2173.jpg",
  "IMG_2178.jpg",
  "gt2.webp",
  "yellowLambo.webp",
  "redLambo.webp",
  "IMG_2583.jpg",
  "IMG_2592.jpg",
  "IMG_2598.jpg",
  "porscheInterior.webp",
  "IMG_2372.jpg",
  "IMG_2367.jpg",
  "IMG_2370.jpg",
  "IMG_2146.jpg",
  "benzInteriorRear.jpg",
  "IMG_2244.jpg",
  "IMG_2239.jpg",
  "IMG_2706.jpg",
  "IMG_2690.jpg",
  "IMG_2254.jpg",
  "audiInterior.webp",
  "IMG_2257.jpg",
  "IMG_2262.jpg",
  "IMG_2390.jpg",
  "IMG_2608.jpg",
  "redRover.jpg",
  "z4.jpg",
];

export const imagePublicByIndex = (index: number): string =>
  `/gallery/${imagePublic[index % imagePublic.length]}`;

