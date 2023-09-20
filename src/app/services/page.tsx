import Link from "next/link";
import Image from "next/image";
import hero from "@/assets/images/redLambo.webp";

import inOut from "@/assets/images/services/inOut.webp";
import lamboGray from "@/assets/images/services/lamboGray.webp";
import lamboWheel from "@/assets/images/services/lamboWheel.webp";
import mercedes from "@/assets/images/services/mercedes.webp";
import paintCorrect from "@/assets/images/services/paintCorrect.webp";
import paintCorrectionCoating from "@/assets/images/services/paintCorrection_Coating.webp";
import rari from "@/assets/images/services/rari.webp";
import showRoom from "@/assets/images/services/showRoom.webp";
import standard from "@/assets/images/services/standard.webp";

export default function Services() {
  return (
    <main className="flex flex-col justify-between w-full bg-black">
      <section className="flex items-center relative w-full h-[75vh]">
        <Image
          src={hero}
          alt="Abbos Detailing Logo"
          className="h-full w-full object-cover z-1"
          priority
        />

        <div className="z-2 absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-full text-center flex-col gap-2">
          <div className="bg-slate-800/40 w-fit mx-auto">
            <h1 className="text-white font-cin text-sh1 md:text-lh1 mx-8 uppercase">
              BOOK YOUR DETAILING APPOINTMENT TODAY!
            </h1>
            <h2 className="text-slate-300 font-cin text-sp1 md:text-lp1 mx-8">
              Experience Detailing That Goes Above and Beyond Your Expectations
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

      <section className="flex flex-col w-full bg-black">
        <article className="border-l border-gray-500 m-16 h-full pb-8">
          <h2 className="text-white text-sh6 md:lh6 uppercase font-light pl-8 mb-4">
            Our Approach
          </h2>
          <p className="text-white text-sp1 md:text-lp1 border-l-2 border-white pl-8">
            We offer a comprehensive range of services to ensure your vehicle
            looks and feels its absolute best. From high-end detailing to
            ceramic coating and paint protection, our team of experienced
            professionals use only the finest products and techniques to give
            your car the attention it deserves.
          </p>
        </article>
      </section>

      <section className="w-full bg-black text-white mb-8">
        <article className="flex flex-col gap-8 h-full mx-16">
          <div className="flex flex-col items-center justify-evenly gap-4">
            <h2 className="text-sh2 md:text-lh2 uppercase font-light border-b">
              Express Detailing
            </h2>
            <div className="flex flex-col items-center justify-center lg:flex-row gap-4">
              <div className="flex flex-col bg-gradient-to-r from-slate-500/30 to-slate-800/80 p-6 rounded-lg shadow-2xl w-fit border-2 border-white">
                <Image
                  src={lamboGray}
                  alt="Gray Lamborghini"
                  className="rounded-lg flex-grow"
                  priority
                />
                <div className="flex flex-col gap-2 text-white mt-6">
                  <span className="flex flex-row items-center justify-between">
                    <h3 className="text-sh3 md:text-lh3 uppercase">
                      Detail Wash
                    </h3>
                    <p className="underline">Read More</p>
                  </span>

                  <span className="flex flex-row items-center justify-between">
                    <p className="text-sp2 md:text-lp2 text-slate-200">
                      45 Minutes
                    </p>{" "}
                    <p className="text-sp2 md:text-lp2 text-slate-200">
                      From: $49.99
                    </p>
                  </span>

                  <div className="mt-4 border border-slate-900 rounded-2xl hover:bg-slate-300 max-w-fit p-2 mx-auto bg-white">
                    <Link href={"/services"}>
                      <h2 className="text-black text-xl md:text-2xl font-medium ">
                        Book Now
                      </h2>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-col bg-gradient-to-r from-slate-500/30 to-slate-800/80 p-6 rounded-lg shadow-2xl w-fit border-2 border-white">
                <Image
                  src={inOut}
                  alt="Gray Lamborghini"
                  className="rounded-lg flex-grow"
                  priority
                />
                <div className="flex flex-col gap-2 text-white mt-6">
                  <span className="flex flex-row items-center justify-between">
                    <h3 className="text-sh3 md:text-lh3 uppercase">
                      In Out Express
                    </h3>
                    <p className="underline">Read More</p>
                  </span>

                  <span className="flex flex-row items-center justify-between">
                    <p className="text-sp2 md:text-lp2 text-slate-200">
                      1 1/2 Hour
                    </p>{" "}
                    <p className="text-sp2 md:text-lp2 text-slate-200">
                      From: $99.99
                    </p>
                  </span>

                  <div className="mt-4 border border-slate-900 rounded-2xl hover:bg-slate-300 max-w-fit p-2 mx-auto bg-white">
                    <Link href={"/services"}>
                      <h2 className="text-black text-xl md:text-2xl font-medium ">
                        Book Now
                      </h2>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-evenly gap-4">
            <h2 className="text-sh2 md:text-lh2 uppercase font-light border-b">
              Luxury Detailing
            </h2>
            <div className="flex flex-col items-center justify-center lg:flex-row gap-4">
              <div className="flex flex-col bg-gradient-to-r from-slate-500/30 to-slate-800/80 p-6 rounded-lg shadow-2xl w-fit border-2 border-white">
                <Image
                  src={standard}
                  alt="Gray Lamborghini"
                  className="rounded-lg flex-grow"
                  priority
                />
                <div className="flex flex-col gap-2 text-white mt-6">
                  <span className="flex flex-row items-center justify-between">
                    <h3 className="text-sh3 md:text-lh3 uppercase">
                      Standard Detail
                    </h3>
                    <p className="underline">Read More</p>
                  </span>

                  <span className="flex flex-row items-center justify-between">
                    <p className="text-sp2 md:text-lp2 text-slate-200">
                      4 Hour
                    </p>{" "}
                    <p className="text-sp2 md:text-lp2 text-slate-200">
                      From: $199.99
                    </p>
                  </span>

                  <div className="mt-4 border border-slate-900 rounded-2xl hover:bg-slate-300 max-w-fit p-2 mx-auto bg-white">
                    <Link href={"/services"}>
                      <h2 className="text-black text-xl md:text-2xl font-medium ">
                        Book Now
                      </h2>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-col bg-gradient-to-r from-slate-500/30 to-slate-800/80 p-6 rounded-lg shadow-2xl w-fit border-2 border-white">
                <Image
                  src={mercedes}
                  alt="Gray Lamborghini"
                  className="rounded-lg flex-grow"
                  priority
                />
                <div className="flex flex-col gap-2 text-white mt-6">
                  <span className="flex flex-row items-center justify-between">
                    <h3 className="text-sh3 md:text-lh3 uppercase">
                      Interior Detail
                    </h3>
                    <p className="underline">Read More</p>
                  </span>

                  <span className="flex flex-row items-center justify-between">
                    <p className="text-sp2 md:text-lp2 text-slate-200">
                      2 1/2 Hour
                    </p>{" "}
                    <p className="text-sp2 md:text-lp2 text-slate-200">
                      From: $149.99
                    </p>
                  </span>

                  <div className="mt-4 border border-slate-900 rounded-2xl hover:bg-slate-300 max-w-fit p-2 mx-auto bg-white">
                    <Link href={"/services"}>
                      <h2 className="text-black text-xl md:text-2xl font-medium ">
                        Book Now
                      </h2>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-col bg-gradient-to-r from-slate-500/30 to-slate-800/80 p-6 rounded-lg shadow-2xl w-fit border-2 border-white">
                <Image
                  src={lamboWheel}
                  alt="Gray Lamborghini"
                  className="rounded-lg flex-grow"
                  priority
                />
                <div className="flex flex-col gap-2 text-white mt-6">
                  <span className="flex flex-row items-center justify-between">
                    <h3 className="text-sh3 md:text-lh3 uppercase">
                      Supreme Detail
                    </h3>
                    <p className="underline">Read More</p>
                  </span>

                  <span className="flex flex-row items-center justify-between">
                    <p className="text-sp2 md:text-lp2 text-slate-200">
                      6 Hour
                    </p>{" "}
                    <p className="text-sp2 md:text-lp2 text-slate-200">
                      From: $299.99
                    </p>
                  </span>

                  <div className="mt-4 border border-slate-900 rounded-2xl hover:bg-slate-300 max-w-fit p-2 mx-auto bg-white">
                    <Link href={"/services"}>
                      <h2 className="text-black text-xl md:text-2xl font-medium ">
                        Book Now
                      </h2>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-col bg-gradient-to-r from-slate-500/30 to-slate-800/80 p-6 rounded-lg shadow-2xl w-fit border-2 border-white">
                <Image
                  src={showRoom}
                  alt="Ford RS interior"
                  className="rounded-lg flex-grow"
                  priority
                />
                <div className="flex flex-col gap-2 text-white mt-6">
                  <span className="flex flex-row items-center justify-between">
                    <h3 className="text-sh3 md:text-lh3 uppercase">
                      Showroom Detail
                    </h3>
                    <p className="underline">Read More</p>
                  </span>

                  <span className="flex flex-row items-center justify-between">
                    <p className="text-sp2 md:text-lp2 text-slate-200">
                      8 Hours
                    </p>{" "}
                    <p className="text-sp2 md:text-lp2 text-slate-200">
                      From: $399.99
                    </p>
                  </span>

                  <div className="mt-4 border border-slate-900 rounded-2xl hover:bg-slate-300 max-w-fit p-2 mx-auto bg-white">
                    <Link href={"/services"}>
                      <h2 className="text-black text-xl md:text-2xl font-medium ">
                        Book Now
                      </h2>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-evenly gap-4">
            <h2 className="text-sh2 md:text-lh2 uppercase font-light border-b">
              Ceramic Coating + Correction
            </h2>
            <div className="flex flex-col items-center justify-center lg:flex-row flex-wrap gap-4">
              <div className="flex flex-col bg-gradient-to-r from-slate-500/30 to-slate-800/80 p-6 rounded-lg shadow-2xl w-fit border-2 border-white">
                <Image
                  src={paintCorrectionCoating}
                  alt="Black Rolls Royce"
                  className="rounded-lg flex-grow"
                  priority
                />
                <div className="flex flex-col gap-2 text-white mt-6">
                  <span className="flex flex-row items-center justify-between">
                    <h3 className="text-sh3 md:text-lh3 uppercase">
                      Ceramic Coating + Polish
                    </h3>
                    <p className="underline">Read More</p>
                  </span>

                  <span className="flex flex-row items-center justify-between">
                    <p className="text-sp2 md:text-lp2 text-slate-200">
                      12 Hours
                    </p>{" "}
                    <p className="text-sp2 md:text-lp2 text-slate-200">
                      From: $1,299.99
                    </p>
                  </span>

                  <div className="mt-4 border border-slate-900 rounded-2xl hover:bg-slate-300 max-w-fit p-2 mx-auto bg-white">
                    <Link href={"/services"}>
                      <h2 className="text-black text-xl md:text-2xl font-medium ">
                        Book Now
                      </h2>
                    </Link>
                  </div>
                </div>
              </div>

              {/* <div className="flex flex-col bg-gradient-to-r from-slate-500/30 to-slate-800/80 p-6 rounded-lg shadow-2xl w-fit border-2 border-white">
                <Image
                  src={rari}
                  alt="Gray Lamborghini"
                  className="Ferrari Logo"
                  priority
                />
                <div className="flex flex-col gap-2 text-white mt-6">
                  <span className="flex flex-row items-center justify-between">
                    <h3 className="text-sh3 md:text-lh3 uppercase">
                      Ceramic Coating + Polish
                    </h3>
                    <p className="underline">Read More</p>
                  </span>

                  <span className="flex flex-row items-center justify-between">
                    <p className="text-sp2 md:text-lp2 text-slate-200">
                      8 Hours
                    </p>{" "}
                    <p className="text-sp2 md:text-lp2 text-slate-200">
                      From: $999.99
                    </p>
                  </span>

                  <div className="mt-4 border border-slate-900 rounded-2xl hover:bg-slate-300 max-w-fit p-2 mx-auto bg-white">
                    <Link href={"/services"}>
                      <h2 className="text-black text-xl md:text-2xl font-medium ">
                        Book Now
                      </h2>
                    </Link>
                  </div>
                </div>
              </div> */}

              <div className="flex flex-col bg-gradient-to-r from-slate-500/30 to-slate-800/80 p-6 rounded-lg shadow-2xl w-fit border-2 border-white">
                <Image
                  src={rari}
                  alt="Ferrari Logo"
                  className="rounded-lg flex-grow"
                  priority
                />
                <div className="flex flex-col gap-2 text-white mt-6">
                  <span className="flex flex-row items-center justify-between">
                    <h3 className="text-sh3 md:text-lh3 uppercase">
                      Ceramic Coating
                    </h3>
                    <p className="underline">Read More</p>
                  </span>

                  <span className="flex flex-row items-center justify-between">
                    <p className="text-sp2 md:text-lp2 text-slate-200">
                      6 Hours
                    </p>{" "}
                    <p className="text-sp2 md:text-lp2 text-slate-200">
                      From: $599.99
                    </p>
                  </span>

                  <div className="mt-4 border border-slate-900 rounded-2xl hover:bg-slate-300 max-w-fit p-2 mx-auto bg-white">
                    <Link href={"/services"}>
                      <h2 className="text-black text-xl md:text-2xl font-medium ">
                        Book Now
                      </h2>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-col bg-gradient-to-r from-slate-500/30 to-slate-800/80 p-6 rounded-lg shadow-2xl w-fit border-2 border-white">
                <Image
                  src={paintCorrect}
                  alt="Lamborghini Polish"
                  className="rounded-lg flex-grow"
                  priority
                />
                <div className="flex flex-col gap-2 text-white mt-6">
                  <span className="flex flex-row items-center justify-between">
                    <h3 className="text-sh3 md:text-lh3 uppercase">Polish</h3>
                    <p className="underline">Read More</p>
                  </span>

                  <span className="flex flex-row items-center justify-between">
                    <p className="text-sp2 md:text-lp2 text-slate-200">
                      5 Hours
                    </p>{" "}
                    <p className="text-sp2 md:text-lp2 text-slate-200">
                      From: $299.99
                    </p>
                  </span>

                  <div className="mt-4 border border-slate-900 rounded-2xl hover:bg-slate-300 max-w-fit p-2 mx-auto bg-white">
                    <Link href={"/services"}>
                      <h2 className="text-black text-xl md:text-2xl font-medium ">
                        Book Now
                      </h2>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
