import Image from "next/image";
import rolls from "@/assets/images/rolls.webp";
import audi from "@/assets/images/audi.webp";
import porsche from "@/assets/images/porsche.webp";
import tesla from "@/assets/images/tesla.webp";
import nissan from "@/assets/images/nissan.webp";
import phantom from "@/assets/images/phantom.webp";
import jeep from "@/assets/images/jeep.webp";
import escalade from "@/assets/images/escalade.webp";
import teslaParallax from "@/assets/images/teslaParallax.webp";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-between w-full">
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
          <source src="https://video.wixstatic.com/video/a0b3fa_7a17f2afe1254fd69869d2f84e8c3415/1080p/mp4/file.mp4" />
        </video>

        <div className="z-2 absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-full text-center flex-col gap-2">
          <div className="bg-slate-800/40 mx-14">
            <h1 className="text-white font-cin text-sh2 sm:text-sh1 md:text-lh1 mx-8">
              UNMATHCED QUALITY, UNFORGETTABLE SHINE
            </h1>
            <h2 className="text-slate-300 font-cin text-sp1 md:text-lp1">
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

      <section className="flex flex-col md:flex-row w-full xl:py-16 bg-gradient-to-tr from-black from-85% to-slate-800">
        <div className="flex items-center m-16 md:w-[50%]">
          <div className="flex flex-col items-start border-l border-gray-600">
            <h3 className="text-white text-sh6 md:text-lh6 mb-4 pl-8">
              ABOUT US
            </h3>
            <h4 className="text-white text-sp1 md:text-lp1 mb-6 border-l-2 pl-8">
              Our Story and Commitment to Excellence
            </h4>

            <p className="text-white text-sp2 md:text-lp2 pl-8">
              At Supreme Auto Care, we&apos;re passionate about cars and
              dedicated to delivering exceptional auto detailing services that
              exceed our clients&apos; expectations. Our commitment to
              excellence is reflected in every aspect of our service. From the
              products we use to the techniques we employ, we go above and
              beyond to ensure that your car receives the attention it deserves.
              Whether it&apos;s a simple wash or a full detail, we treat every
              vehicle with the same level of care and precision.
            </p>
            <p className="text-white text-sp2 md:text-lp2 pl-8">
              If you&apos;re looking for a professional, reliable, and
              top-quality auto detailing service, look no further than Supreme
              Auto Care. Contact us today to schedule your appointment and
              experience the difference for yourself.
            </p>
          </div>
        </div>

        <div className="hidden md:w-[50%] md:flex">
          <Image
            src={nissan}
            alt="Nissan Car"
            className="h-full w-auto object-cover"
            priority
          />
        </div>
      </section>

      <section className="flex flex-col w-full bg-white">
        <div className="border-l border-gray-600 my-8 pb-8 ml-16">
          <div className="w-1/3 ">
            <h3 className="text-black uppercase text-sh6 md:text-lh6 pl-8 mb-4">
              Services
            </h3>
            <h4 className="text-black text-sp1 md:text-lp1 border-l-2 border-gray-600 pl-8">
              Going Above and Beyond for Your Vehicle
            </h4>
          </div>
        </div>

        <div className="flex flex-col mx-12">
          <div className="flex flex-col md:flex-row justify-center">
            <div className="flex items-center w-full md:w-1/2 order-1 md:order-none">
              <div className="m-12">
                <h3 className="text-black text-sh2 md:text-lh2">
                  Interior Detail and Exterior Wash
                </h3>
                <p className="text-black text-sp2 md:text-lp2">
                  Our team uses a combination of steam, shampooing, and
                  vacuuming to clean and freshen up all surfaces, including the
                  seats and floors. We also remove mild salt stains, wash the
                  mats and door jams, and clean the inside windows. This package
                  includes a dual bucket hand wash, ceramic wax treatment, and
                  tire shine to protect the paint and restore your wheels to
                  their former glory.
                </p>
              </div>
            </div>

            <div className="flex w-full md:w-1/2 order-2 md:order-none">
              <Image
                src={jeep}
                alt="Jeep"
                className="object-scale-down mx-auto"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center">
            <div className="flex w-full md:w-1/2 order-2 md:order-none">
              <Image
                src={escalade}
                alt="Escalade"
                className="object-scale-down mx-auto"
                priority
              />
            </div>

            <div className="flex items-center w-full md:w-1/2 order-1 md:order-none">
              <div className="m-12">
                <h3 className="text-black text-sh2 md:text-lh2">Correction</h3>
                <p className="text-black text-sp2 md:text-lp2">
                  We offer two stages of paint correction to restore the
                  showroom shine to your vehicle. Our Stage 1 package removes
                  moderate swirling and includes protection to make the paint
                  last. This package includes a dual bucket hand wash, wheel
                  cleaning, paint decontamination, stage 1 cut and polish,
                  ceramic wax treatment, and tire shine. Our Stage 2 package is
                  designed to remove heavy swirling and light scratches, and
                  includes a stage 2 buff, stage 1 polish, ceramic wax
                  treatment, and tire shine. Trust our experts to provide your
                  car with the highest level of care and attention to detail.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center">
            <div className="flex items-center w-full md:w-1/2 order-1 md:order-none">
              <div className="m-12">
                <h3 className="text-black text-sh2 md:text-lh2">
                  Ceramic Coating
                </h3>
                <p className="text-black text-sp2 md:text-lp2">
                  Our ceramic coating packages provide the ultimate protection
                  for your luxury vehicle. Our team of experts uses only the
                  highest quality products and techniques to ensure a flawless
                  finish. Ceramic coating adds an extra layer of protection
                  against the elements, including UV rays and environmental
                  contaminants. With a ceramic coating from Abbos Detailing, you
                  can rest assured that your vehicle will maintain its showroom
                  shine for years to come.
                </p>
              </div>
            </div>

            <div className="flex w-full md:w-1/2 order-2 md:order-none">
              <Image
                src={phantom}
                alt="Rolls Royce Phantom"
                className="object-scale-down mx-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="flex relative w-full min-h-[40vh]">
        <Image
          src={teslaParallax}
          alt="Tesla Parallax"
          className="dark:invert absolute top-0 left-0 w-full h-full object-cover"
          priority
        />

        <div className="relative bg-black text-white rounded-lg m-16 py-8 px-4 w-[60%] md:w-[40%] h-fit">
          <div className="border-l">
            <h3 className="text-white text-sh6 md:text-lh6 pl-8 mb-6">
              Why Choose Us?
            </h3>
            <h4 className="text-white text-sh3 md:text-lh3 border-l-2 pl-8 mb-6">
              Our Unique Method for Achieving Unmatched Results
            </h4>
            <p className="text-white text-sp2 md:text-lp2 pl-8">
              We take pride in our meticulous attention to detail, unparalleled
              customer service, and our commitment to using the highest quality
              products and techniques. Our team of professionals have a passion
              for perfection and will go above and beyond to exceed your
              expectations. Trust us to provide your luxury vehicle with the
              expert care and maintenance it deserves. Experience the ultimate
              in automotive detailing services with Abbos Detailing.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row bg-white">
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

          <div className="grid gap-24 grid-cols-2">
            <span className="flex flex-col items-start justify-evenly">
              <p className="text-sh2 md:text-lh2 font-mont font-light">8+</p>
              <p className="text-sp2 md:text-lp2 font-pf font-medium w-full uppercase pt-6">
                Experience
              </p>
            </span>

            <span className="flex flex-col items-start justify-evenly">
              <p className="text-sh2 md:text-lh2 font-mont font-light ">
                100$+
              </p>
              <p className="text-sp2 md:text-lp2 font-pf font-medium  w-full uppercase pt-6 ">
                Cost Per Service
              </p>
            </span>

            <span className="flex flex-col items-start justify-evenly">
              <p className="text-sh2 md:text-lh2 font-mont font-light">500+</p>
              <p className="text-sp2 md:text-lp2 font-pf font-medium w-full uppercase pt-6 ">
                Customers
              </p>
            </span>

            <span className="flex flex-col items-start justify-evenly">
              <p className="text-sh2 md:text-lh2 font-mont font-light  ">
                100%
              </p>
              <p className="text-sp2 md:text-lp2 font-pf font-medium w-full uppercase pt-6 ">
                Returning Customers
              </p>
            </span>
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row bg-black items-center">
        <div className="flex items-center w-full md:w-1/2 m-16 mr-4 pr-24 h-full md:h-auto">
          <div className="border-l">
            <h3 className="text-white uppercase text-sh6 md:text-lh6 font-medium pl-8 mb-6">
              Our Work
            </h3>

            <h4 className="text-white text-sh3 md:text-lh3 border-l-2 pl-8 mb-12 font-thin">
              Expert Detailing Services For High-End Automobiles
            </h4>

            <p className="text-white text-sp2 md:text-lp2 pl-8">
              At Abbos Detailing, we specialize in providing expert detailing
              services for high-end automobiles. We understand the importance of
              maintaining your investment, regardless of the make or model. With
              our extensive knowledge and experience, we are equipped to handle
              all types of vehicles and provide the same level of care and
              attention to detail to each one. Trust us to keep your car looking
              and feeling brand new.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 grid gap-16 grid-cols-2 m-16 pr-24 h-full md:h-auto items-center md:items-start">
          <div className="flex flex-col items-center m-4 w-full h-full ">
            <Image
              src={tesla}
              alt="Tesla Logo"
              priority
              className="w-24 h-24"
            />
            <h4 className="text-white text-center uppercase mt-2 text-lg">
              TESLA
            </h4>
          </div>

          <div className="flex flex-col items-center m-4 w-full h-full ">
            <Image
              src={porsche}
              alt="Porsche Logo"
              priority
              className="w-24 h-24"
            />
            <h4 className="text-white text-center uppercase mt-2 text-lg">
              Porsche
            </h4>
          </div>

          <div className="flex flex-col items-center m-4 w-full h-full">
            <Image
              src={rolls}
              alt="Rolls Royce Logo"
              priority
              className="w-24 h-24"
            />
            <h4 className="text-white text-center uppercase mt-2 text-lg">
              Rolls Royce
            </h4>
          </div>

          <div className="flex flex-col items-center m-4 w-full h-full">
            <Image src={audi} alt="Audi Logo" priority className="w-24 h-24" />
            <h4 className="text-white text-center uppercase mt-2 text-lg">
              Audi
            </h4>
          </div>
        </div>
      </section>
    </main>
  );
}
