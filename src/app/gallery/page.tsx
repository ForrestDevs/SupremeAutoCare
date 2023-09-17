import Link from "next/link";

export default function Gallery() {
  return (
    <main className="flex flex-col justify-between w-full bg-black">
      <section className="flex relative w-full h-[75vh]">
        <video
          className="h-full w-[4000px] absolute top-0 left-0 object-cover z-1 blur-sm"
          controls={false}
          autoPlay
          muted
          loop
        >
          <source src="https://video.wixstatic.com/video/a0b3fa_192ca6f47181454e8c76906d3f08103d/720p/mp4/file.mp4" />
        </video>

        <div className="z-2 absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-full text-center flex-col gap-2">
          <h1 className="text-white text-2xl md:text-4xl font-semibold">
            GALLERY
          </h1>
          <h2 className="text-slate-300 text-xl md:text-2xl font-medium">
            Welcome to our gallery page, where you can browse through stunning
            images of the cars we&apos;ve had the pleasure of working on
          </h2>
          <div className="mt-16 border rounded-xl hover:bg-slate-400 max-w-fit p-2 mx-auto">
            <Link href={"/services"}>
              <h2 className="text-slate-300 text-xl md:text-2xl font-medium">
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
