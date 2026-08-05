"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

import type { GalleryPhoto } from "@/lib/gallery";

type ThumbProps = {
  selected: boolean;
  photo: GalleryPhoto;
  onClick: () => void;
};

export const Thumb: React.FC<ThumbProps> = ({ selected, photo, onClick }) => {
  return (
    <div className="pl-2 shrink-0 grow-0 basis-1/2 sm:basis-1/3 lg:basis-1/5 cursor-default">
      <button
        onClick={onClick}
        type="button"
        className="h-44 w-full overflow-hidden block cursor-pointer touch-manipulation"
      >
        <div className="relative h-full w-full">
          <Image
            className={`object-cover transition-opacity duration-200 transform scale-[90%] ${
              selected ? "opacity-100" : "opacity-20"
            }`}
            fill
            sizes="200px"
            src={photo.thumbSrc}
            alt={photo.alt}
          />
        </div>
      </button>
    </div>
  );
};

type PropType = {
  photos: GalleryPhoto[];
};

const Carousel: React.FC<PropType> = ({ photos }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel();
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

  if (photos.length === 0) return null;

  const selectedPhoto = photos[selectedIndex] ?? photos[0];

  return (
    <div className="h-full w-full bg-black">
      <div className="overflow-hidden w-full" ref={emblaMainRef}>
        <div className="flex touch-pan-y -ml-2 select-none">
          {photos.map((photo, index) => (
            <div className="pl-2 min-w-full" key={photo.id}>
              <div className="relative w-full h-[45vh] md:h-[60vh]">
                <Image
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 80vw"
                  src={photo.src}
                  alt={photo.alt}
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-1 pt-4 text-center">
        <p className="text-white text-sh4 md:text-lh4 uppercase">
          {selectedPhoto.title}
        </p>
        <p className="text-slate-400 text-sp2 md:text-lp2 uppercase tracking-widest">
          {selectedPhoto.categoryLabel}
        </p>
      </div>

      <div className="py-6">
        <div className="overflow-hidden w-full" ref={emblaThumbsRef}>
          <div className="flex select-none cursor-default w-full">
            {photos.map((photo, index) => (
              <Thumb
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                photo={photo}
                key={photo.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
