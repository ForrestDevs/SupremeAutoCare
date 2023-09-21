import Link from "next/link";

export default function Section1() {
  return (
    <>
      <section className="stack">
        <video
          className="h-screen w-auto object-cover grid place-content-center blur-xs"
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

        <div className="grid place-content-center text-center">
          <div className="mx-auto w-fit">
            <div className="flex flex-col">
              <h1 className="text-white text-sh1 md:text-lh1 mx-8 font-bold italic">
                UNMATHCED QUALITY,
              </h1>
              <h1 className="text-[#ED1C24] text-sh1 md:text-lh1 mx-8 font-bold italic">
                UNFORGETTABLE SHINE
              </h1>
            </div>
            <h2 className="text-white text-sh4 md:text-lh4">
              Experience Detailing That Goes Above And Beyond Your Expectations
            </h2>
          </div>

          <div className="mt-16 border border-slate-900 rounded-2xl hover:bg-[#ED1C24] max-w-fit p-4 mx-auto bg-white">
            <Link href={"/services"}>
              <h2 className="text-black text-sp1 md:text-lp1 font-bold italic uppercase">
                Book Now
              </h2>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
