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
import ServiceCard from "@/components/services/ServiceCard";

export default function Services() {
  return (
    <main className="flex flex-col justify-between w-full bg-black">
      <section className="flex items-center relative w-full h-[100vh]">
        <Image
          src={hero}
          alt="Abbos Detailing Logo"
          className="h-full w-full object-cover z-1"
          priority
        />

        <div className="z-2 absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-full text-center flex-col gap-2">
          <div className="bg-slate-800/40 w-fit mx-auto">
            <h1 className="text-white text-sh1 md:text-lh1 mx-8 uppercase">
              OUR SUPREME DETAILING SERVICES
            </h1>
            <h2 className="text-slate-300 text-sp1 md:text-lp1 mx-8">
              Book your detailing appointment today!
            </h2>
          </div>
          <div data-theme="light" className="mt-16 btn">
            <a href="#services">
              <h2 className="text-black text-xl md:text-2xl font-medium ">
                Book Now
              </h2>
            </a>
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

      <section id="services" className="w-full bg-white text-black py-10">
        <article className="flex flex-col gap-8 h-full mx-16">
          <div className="flex flex-col items-center justify-evenly gap-8">
            <h2 className="text-sh2 md:text-lh2 uppercase font-light border-b">
              Express Detailing
            </h2>
            <div className="flex flex-col items-center justify-center lg:flex-row gap-8">
              <ServiceCard
                title="Detail Wash"
                time="45 Minutes"
                price="$49.99"
                callLink="detail-wash"
                imageSrc={lamboGray}
                imageAlt="Gray Lamborghini"
              />
              <ServiceCard
                title="In Out Express"
                time="1 1/2 Hour"
                price="$99.99"
                callLink="in-out-express"
                imageSrc={inOut}
                imageAlt="BMW Interior"
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-evenly gap-8">
            <h2 className="text-sh2 md:text-lh2 uppercase font-light border-b">
              Luxury Detailing
            </h2>
            <div className="grid grid-flow-row lg:grid-cols-2 gap-8 items-center justify-center">
              <ServiceCard
                title="Standard Detail"
                time="4 Hour"
                price="$199.99"
                callLink="standard-detail"
                imageSrc={standard}
                imageAlt="Gray Lamborghini"
              />
              <ServiceCard
                title="Interior Detail"
                time="2 1/2 Hour"
                price="$149.99"
                callLink="interior-detail"
                imageSrc={mercedes}
                imageAlt="Gray Lamborghini"
              />
              <ServiceCard
                title="Supreme Detail"
                time="6 Hour"
                price="$299.99"
                callLink="supreme-detail"
                imageSrc={lamboWheel}
                imageAlt="Gray Lamborghini"
              />
              <ServiceCard
                title="Showroom Detail"
                time="8 Hours"
                price="$399.99"
                callLink="showroom-detail"
                imageSrc={showRoom}
                imageAlt="Ford RS interior"
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-evenly gap-4">
            <h2 className="text-sh2 md:text-lh2 uppercase font-light border-b">
              Ceramic Coating + Paint Correction
            </h2>
            <div className="grid grid-flow-row lg:grid-cols-2 gap-8 items-center justify-center">
              <ServiceCard
                title="Ceramic Coating + Paint Correction"
                time="12 Hours"
                price="$1,299.99"
                callLink="ceramic-coating-paint-correction"
                imageSrc={paintCorrectionCoating}
                imageAlt="Black Rolls Royce"
              />
              <ServiceCard
                title="Ceramic Coating + Polish"
                time="8 Hours"
                price="$999.99"
                callLink="ceramic-coating-polish"
                imageSrc={rari}
                imageAlt="Gray Lamborghini"
              />
              <ServiceCard
                title="Ceramic Coating"
                time="6 Hours"
                price="$599.99"
                callLink="ceramic-coating"
                imageSrc={rari}
                imageAlt="Ferrari Logo"
              />
              <ServiceCard
                title="Polish"
                time="5 Hours"
                price="$299.99"
                callLink="polish"
                imageSrc={paintCorrect}
                imageAlt="Lamborghini Polish"
              />
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
