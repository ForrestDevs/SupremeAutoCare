"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
// import imageByIndex from "./imageByIndex";
import { imagePublicByIndex } from "./imageByIndex";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type ThumbProps = {
  selected: boolean;
  imgSrc: string;
  index: number;
  onClick: () => void;
};

export const Thumb: React.FC<ThumbProps> = (props) => {
  const { selected, imgSrc, index, onClick } = props;

  return (
    <div
      className={`pl-2 w-full cursor-default ${selected ? "opacity-100" : ""}`}
    >
      <button
        onClick={onClick}
        type="button"
        className="min-w-[150px] h-44 w-full overflow-hidden block cursor-pointer touch-manipulation"
      >
        <Image
          className={`h-full object-cover transition-opacity duration-200 transform scale-[90%] ${
            selected ? "opacity-100" : "opacity-20"
          }`}
          width={400}
          height={400}
          src={imgSrc}
          alt="Your alt text"
          priority
        />
      </button>
    </div>
  );
};

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const Carousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on("select", onSelect);
    emblaMainApi.on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className="h-full w-full bg-black">
      <div className="overflow-hidden w-full" ref={emblaMainRef}>
        <div className="flex touch-pan-y -ml-2 select-none">
          {slides.map((index) => (
            <div className="pl-2 min-w-full max-h-[50vh]" key={index}>
              <div className="overflow-hidden h-full">
                <Image
                  width={600}
                  height={500}
                  className="m-auto"
                  src={imagePublicByIndex(index)}
                  alt="Your alt text"
                  priority
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-6">
        <div className="overflow-hidden w-full" ref={emblaThumbsRef}>
          <div className="flex select-none cursor-default w-full">
            {slides.map((index) => (
              <Thumb
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
                imgSrc={imagePublicByIndex(index)}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
