import Link from "next/link";

export default function Section1() {
  return (
    <>
      <div className="h-[100vh]"></div>
      <section className="fixed flex w-full h-[100vh] -z-1">
        <video
          className="h-full w-auto absolute top-0 left-0 object-cover z-1"
          controls={false}
          autoPlay
          muted
          loop
          playsInline // Ensure video auto-plays on mobile devices
          disablePictureInPicture // Prevents iOS native player from opening
          webkit-playsinline="true" // Additional attribute for iOS devices
        >
          <source src="https://video.wixstatic.com/video/a0b3fa_7a17f2afe1254fd69869d2f84e8c3415/1080p/mp4/file.mp4" />
        </video>

        <div className="z-2 absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-full text-center flex-col gap-2">
          <div className="bg-slate-800/40 mx-auto w-fit">
            <h1 className="text-white font-cin text-sh1 lg:text-lh1 mx-8">
              UNMATHCED QUALITY, UNFORGETTABLE SHINE
            </h1>
            <h2 className="text-slate-300 font-cin text-sp1 lg:text-lp1">
              Experience Detailing That Goes Above And Beyond Your Expectations
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
    </>
  );
}
