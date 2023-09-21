import Image from "next/image";
import rolls from "@/assets/images/home/rolls.webp";
import audi from "@/assets/images/home/audi.webp";
import porsche from "@/assets/images/home/porsche.webp";
import tesla from "@/assets/images/home/tesla.webp";

export default function Section6() {
  return (
    <section className="flex flex-col relative lg:flex-row bg-black items-center">
      <article className="flex items-center w-full lg:w-1/2 m-16 mr-4 pr-24 h-full lg:h-auto">
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
      </article>

      <div className="w-full lg:w-1/2 grid gap-16 grid-cols-2 m-16 pr-24 h-full lg:h-auto items-center lg:items-start">
        <div className="flex flex-col items-center m-4 w-full h-full ">
          <Image src={tesla} alt="Tesla Logo" priority className="w-24 h-24" />
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
  );
}
