import Link from "next/link";

export default function Section1() {
  return (
    <>
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
          <source src="https://video.wixstatic.com/video/a0b3fa_7a17f2afe1254fd69869d2f84e8c3415/1080p/mp4/file.mp4" />
        </video>

        <div className="flex-col text-center absolute w-full top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-fit mx-auto bg-slate-800/30 ">
            <div className="flex flex-col">
              <h1 className="text-white text-sh1 md:text-lh1 mx-8 font-bold italic">
                UNMATHCED QUALITY,
              </h1>
              <h1 className="text-[#ED1C24] text-sh1 md:text-lh1 mx-8 font-bold italic">
                UNFORGETTABLE SHINE
              </h1>
            </div>
            <h2 className="text-white text-sh4 md:text-lh4 px-6">
              Experience Detailing That Goes Above And Beyond Your Expectations
            </h2>
          </div>

          <div className="mt-16 btn">
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
