import Image from "next/image";
import phantom from "@/assets/images/phantom.webp";
import jeep from "@/assets/images/jeep.webp";
import escalade from "@/assets/images/escalade.webp";

export default function Section3() {
  return (
    <section className="flex flex-col relative w-full bg-white text-black">
      <div className="border-l border-gray-600 my-8 pb-8 ml-16">
        <div className="w-1/3 ">
          <h3 className="uppercase text-sh6 md:text-lh6 pl-8 mb-4">
            Services
          </h3>
          <h4 className="text-sp1 md:text-lp1 border-l-2 border-gray-600 pl-8">
            Going Above and Beyond for Your Vehicle
          </h4>
        </div>
      </div>

      <div className="flex flex-col mx-12">
        <div className="flex flex-col md:flex-row justify-center">
          <article className="flex items-center w-full md:w-1/2 order-1 md:order-none">
            <div className="m-12">
              <h3 className="text-sh2 md:text-lh2">
                Interior Detail and Exterior Wash
              </h3>
              <p className="text-sp2 md:text-lp2">
                Our team uses a combination of steam, shampooing, and vacuuming
                to clean and freshen up all surfaces, including the seats and
                floors. We also remove mild salt stains, wash the mats and door
                jams, and clean the inside windows. This package includes a dual
                bucket hand wash, ceramic wax treatment, and tire shine to
                protect the paint and restore your wheels to their former glory.
              </p>
            </div>
          </article>

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

          <article className="flex items-center w-full md:w-1/2 order-1 md:order-none">
            <div className="m-12">
              <h3 className="text-sh2 md:text-lh2">Correction</h3>
              <p className="text-sp2 md:text-lp2">
                We offer two stages of paint correction to restore the showroom
                shine to your vehicle. Our Stage 1 package removes moderate
                swirling and includes protection to make the paint last. This
                package includes a dual bucket hand wash, wheel cleaning, paint
                decontamination, stage 1 cut and polish, ceramic wax treatment,
                and tire shine. Our Stage 2 package is designed to remove heavy
                swirling and light scratches, and includes a stage 2 buff, stage
                1 polish, ceramic wax treatment, and tire shine. Trust our
                experts to provide your car with the highest level of care and
                attention to detail.
              </p>
            </div>
          </article>
        </div>

        <div className="flex flex-col md:flex-row justify-center">
          <article className="flex items-center w-full md:w-1/2 order-1 md:order-none">
            <div className="m-12">
              <h3 className="text-sh2 md:text-lh2">
                Ceramic Coating
              </h3>
              <p className="text-sp2 md:text-lp2">
                Our ceramic coating packages provide the ultimate protection for
                your luxury vehicle. Our team of experts uses only the highest
                quality products and techniques to ensure a flawless finish.
                Ceramic coating adds an extra layer of protection against the
                elements, including UV rays and environmental contaminants. With
                a ceramic coating from Abbos Detailing, you can rest assured
                that your vehicle will maintain its showroom shine for years to
                come.
              </p>
            </div>
          </article>

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
  );
}
