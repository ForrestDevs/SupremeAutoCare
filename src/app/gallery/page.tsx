import Link from "next/link";

export default function Gallery() {
  return (
    <main className="flex flex-col justify-between w-full bg-black">
      <section className="flex relative w-full h-[75vh]">
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
          <div className="bg-slate-800/40 mx-14">
            <h1 className="text-white font-cin text-sh2 sm:text-sh1 md:text-lh1 mx-8 uppercase">
              Gallery
            </h1>
            <h2 className="text-slate-300 font-cin text-sp1 md:text-lp1">
              Where you can browse through stunning images of the cars
              we&apos;ve had the pleasure to detail
            </h2>
          </div>

          <div className="mt-16 border border-slate-900 rounded-2xl hover:bg-slate-300 max-w-fit p-2 mx-auto bg-white">
            <Link href={"/services"}>
              <h2 className="text-black text-xl md:text-2xl font-medium ">
                Book Now
              </h2>
            </Link>
          </div>
        </div>
      </section>

      <section className="flex w-full min-h-[75vh]"></section>
    </main>
  );
}
