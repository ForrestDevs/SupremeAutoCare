export default function Section5() {
  return (
    <section className="flex flex-col relative md:flex-row bg-white">
      <div className="w-full md:w-1/2 order-2 md:order-none">
        <video
          className="w-full md:h-full md:object-cover object-scale-down mx-auto"
          controls={false}
          autoPlay
          muted
          loop
          playsInline // Ensure video auto-plays on mobile devices
          disablePictureInPicture // Prevents iOS native player from opening
          webkit-playsinline="true" // Additional attribute for iOS devices
        >
          <source src="https://video.wixstatic.com/video/a0b3fa_6487d60583a4466cb2175fa40d02039e/1080p/mp4/file.mp4" />
        </video>
      </div>

      <div className="flex flex-col justify-center w-full md:w-1/2 order-1 md:order-none px-20 py-4">
        <h3 className="text-sh3 md:text-lh3 text-left my-4">
          Abbos Detailing In Numbers
        </h3>

        <div className="grid gap-x-16 gap-y-8 grid-cols-2">
          <span className="flex flex-col items-start justify-evenly">
            <p className="text-sh2 md:text-lh2 font-light">8+</p>
            <p className="text-sp2 md:text-lp2 font-medium w-full uppercase pt-6">
              Experience
            </p>
          </span>

          <span className="flex flex-col items-start justify-evenly">
            <p className="text-sh2 md:text-lh2 font-light ">100$+</p>
            <p className="text-sp2 md:text-lp2 font-medium  w-full uppercase pt-6 ">
              Cost Per Service
            </p>
          </span>

          <span className="flex flex-col items-start justify-evenly">
            <p className="text-sh2 md:text-lh2 font-light">500+</p>
            <p className="text-sp2 md:text-lp2 font-medium w-full uppercase pt-6 ">
              Customers
            </p>
          </span>

          <span className="flex flex-col items-start justify-evenly">
            <p className="text-sh2 md:text-lh2 font-light  ">100%</p>
            <p className="text-sp2 md:text-lp2 font-medium w-full uppercase pt-6 ">
              Returning Customers
            </p>
          </span>
        </div>
      </div>
    </section>
  );
}
