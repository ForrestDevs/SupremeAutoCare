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
import redLambo from "../../assets/images/gallery/redLamo.webp";
import rover from "../../assets/images/gallery/rover.webp";
import yellowLambo from "../../assets/images/gallery/yellowLambo.webp";

// import audiGold from "../../assets/images/gallery/audiGold.webp"
import { StaticImageData } from "next/image";

export const images: StaticImageData[] = [
  audiGold,
  audiInterior,
  blueRoyce,
  bmwInterior,
  bmwSUV,
  bmwWhite,
  corvetteEngine,
  fastBack,
  gt2,
  hotrod,
  porscheInterior,
  redLambo,
  rover,
  yellowLambo,
];

const imageByIndex = (index: number): StaticImageData =>
  images[index % images.length];

export default imageByIndex;
