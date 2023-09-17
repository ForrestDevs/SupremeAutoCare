import Link from "next/link";
import Image from "next/image";
import hero from "@/assets/images/stefVette.webp";

export default function Services() {
  return (
    <main className="flex flex-col justify-between w-full bg-black">
      <section className="flex items-center relative w-full h-[75vh]">
        <Image
          src={hero}
          alt="Abbos Detailing Logo"
          className="h-full w-[4000px] object-cover z-1 blur-xs"
          priority
        />

        <div className="z-2 absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-full text-center flex-col gap-2">
          <h1 className="text-white text-2xl md:text-4xl font-semibold">
            OUR SUPREME DETAILING SERVICES
          </h1>
          <div className="mt-16 border border-slate-900 rounded-2xl hover:bg-white max-w-fit p-2 mx-auto bg-slate-900">
            <Link href={"/services"}>
              <h2 className="text-slate-200 text-xl md:text-2xl font-medium hover:text-black">
                Book Now
              </h2>
            </Link>
          </div>
        </div>
      </section>

      <section className="flex flex-col w-full relative min-h-[40vh] bg-white px-40 py-16">
        <div className="border-l border-gray-300 bg-red-100 py-4">
          <h2 className="text-left">
            Our Approach
          </h2>
          <p className="border-l-4 border-black">
            We offer a comprehensive range of services to ensure your vehicle
            looks and feels its absolute best. From high-end detailing to
            ceramic coating and paint protection, our team of experienced
            professionals use only the finest products and techniques to give
            your car the attention it deserves.
          </p>
        </div>
      </section>

      <section className="flex w-full min-h-[80vh] bg-black">
        <div>
          <h2>Detailing</h2>
        </div>

        <div>
          <h2>Correction</h2>
        </div>

        <div>
          <h2>Ceramic Coating</h2>
        </div>
      </section>
    </main>
  );
}
