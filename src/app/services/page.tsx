import Image from "next/image";
import lamboWheel from "@/assets/images/services/lamboWheel.webp";
import showRoom from "@/assets/images/services/showRoom.webp";
import ServiceCard from "@/components/services/ServiceCard";
import { generateMetadata } from '@/lib/metadata';

export const metadata = generateMetadata('Supreme Auto Care | Services', 'Book your detailing appointment today!');

export default function Services() {
  return (
    <main className="flex flex-col justify-between w-full bg-black">
      <section className="flex items-center relative w-full h-[100vh]">
        <Image
          width={4032}
          height={3024}
          src={"/gallery/IMG_2598.jpg"}
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
            <div className="grid grid-flow-row lg:grid-cols-2 gap-8 items-center justify-center">
              <ServiceCard
                title="Detail Wash"
                time="45 Minutes"
                price="$49.99"
                callLink="detail-wash"
                imageSrc={"/gallery/IMG_2173.jpg"}
                imageAlt="Gray Lamborghini"
              />
              <ServiceCard
                title="In Out Express"
                time="1 1/2 Hour"
                price="$99.99"
                callLink="in-out-express"
                imageSrc={"/gallery/IMG_2244.jpg"}
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
                imageSrc={"/gallery/gt2.webp"}
                imageAlt="GT2 RS"
              />
              <ServiceCard
                title="Interior Detail"
                time="2 1/2 Hour"
                price="$149.99"
                callLink="interior-detail"
                imageSrc={"/gallery/porscheInterior.webp"}
                imageAlt="Red Range Rover"
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
              Ceramic Coating + Polish
            </h2>
            <div className="grid grid-flow-row lg:grid-cols-2 gap-8 items-center justify-center">
              <ServiceCard
                title="Ceramic Coating"
                time="6 Hours"
                price="$599.99"
                callLink="ceramic-coating"
                imageSrc={"/gallery/IMG_2706.jpg"}
                imageAlt="Ceramic Coating"
              />
              <ServiceCard
                title="Polish"
                time="5 Hours"
                price="$299.99"
                callLink="polish"
                imageSrc={"/gallery/redLambo.webp"}
                imageAlt="Lamborghini Polish"
              />
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
