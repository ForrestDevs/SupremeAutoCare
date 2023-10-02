import audiGold from "../../assets/images/gallery/audiGold.webp";
import audiInterior from "../../assets/images/gallery/audiInterior.webp";
import blueRoyce from "../../assets/images/gallery/blueRoyce.webp";
import bmwInterior from "../../assets/images/gallery/bmwInterior.webp";
import bmwSUV from "../../assets/images/gallery/bmwSUV.webp";
import bmwWhite from "../../assets/images/gallery/bmwWhite.webp";
import corvetteEngine from "../../assets/images/gallery/corvetteEngine.webp";
import fastBack from "../../assets/images/gallery/fastBack.webp";
import gt2 from "../../assets/images/gallery/gt2.webp";
import hotrod from "../../assets/images/gallery/hotrod.webp";
import porscheInterior from "../../assets/images/gallery/porscheInterior.webp";
import redLambo from "../../assets/images/gallery/redLambo.webp";
import rover from "../../assets/images/gallery/rover.webp";
import yellowLambo from "../../assets/images/gallery/yellowLambo.webp";

// import audiGold from "../../assets/images/gallery/audiGold.webp"
import { StaticImageData } from "next/image";

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

  

// export const images: StaticImageData[] = [
//   gt2,
//   yellowLambo,
//   redLambo,
//   audiGold,
//   audiInterior,
//   blueRoyce,
//   bmwInterior,
//   bmwSUV,
//   bmwWhite,
//   corvetteEngine,
//   fastBack,

//   hotrod,
//   porscheInterior,

//   rover,
// ];

// const imageByIndex = (index: number): StaticImageData =>
//   images[index % images.length];

// export default imageByIndex;
