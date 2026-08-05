import Link from "next/link";
import Carousel from "@/components/gallery/Carousel";
import { getGalleryPhotos } from "@/lib/gallery";
import { generateMetadata } from "@/lib/metadata";

export const metadata = generateMetadata(
  "Supreme Auto Care | Gallery",
  "Welcome to our gallery page, where you can browse through stunning images of the cars we have had the pleasure to detail"
);

// Photos are managed in Payload, so render on request instead of baking the
// gallery into the build output.
export const dynamic = "force-dynamic";

export default async function Gallery() {
  const photos = await getGalleryPhotos();

  return (
    <main className="flex flex-col justify-between w-full bg-black">
      <section className="flex relative w-full h-[100vh]">
        <video
          className="h-full w-[4000px] absolute top-0 left-0 object-cover z-1"
          controls={false}
          autoPlay
          muted
          loop
          playsInline // Ensure video auto-plays on mobile devices
          disablePictureInPicture // Prevents iOS native player from opening
          webkit-playsinline="true" // Additional attribute for iOS devices
        >
          <source src="https://video.wixstatic.com/video/a0b3fa_192ca6f47181454e8c76906d3f08103d/720p/mp4/file.mp4" />
        </video>

        <div className="z-2 absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-full text-center flex-col gap-2">
          <div className="bg-slate-800/40 w-fit mx-auto p-4">
            <h1 className="text-white text-sh1 md:text-lh1 mx-8 font-bold italic">
              GALLERY
            </h1>
            <h2 className="text-slate-300 text-sh4 md:text-lh4">
              Welcome to our gallery page, where you can browse through stunning
              images of the cars we&apos;ve had the pleasure to detail
            </h2>
          </div>

          <div data-theme="light" className="mt-16 btn">
            <Link href={"/services"}>
              <p className="text-black text-sp1 md:text-lp1 font-bold italic uppercase">
                Book Now
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="flex w-full min-h-[75vh] py-10 bg-black">
        <div className="flex flex-col items-center w-full gap-4">
          <h2 className="text-white text-sh1 md:text-lh1 uppercase font-light border-b">
            OUR WORK
          </h2>
          <div className="w-full h-full p-6">
            <Carousel photos={photos} />
          </div>
        </div>
      </section>
    </main>
  );
}
