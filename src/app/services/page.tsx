import Image from "next/image";
import ServiceCard from "@/components/services/ServiceCard";
import { generateMetadata as generateMeta } from "@/lib/metadata";
import { getServices } from "@/lib/payload";
import type { Service } from "@/payload-types";

export const metadata = generateMeta(
  "Supreme Auto Care | Services",
  "Book your detailing appointment today!"
);

// Group services by category
function groupServicesByCategory(services: Service[]) {
  return services.reduce((acc, service) => {
    const category = service.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(service);
    return acc;
  }, {} as Record<string, Service[]>);
}

const categoryTitles = {
  express: "Express Detailing",
  luxury: "Luxury Detailing", 
  coating: "Ceramic Coating + Polish",
};

export default async function Services() {
  const services = await getServices();
  const servicesByCategory = groupServicesByCategory(services);

  return (
    <main className="flex flex-col justify-between w-full bg-black">
      <section className="flex items-center relative w-full h-[100vh]">
        <Image
          width={4032}
          height={3024}
          src="/gallery/IMG_2598.jpg"
          alt="Supreme Auto Care detailing showcase"
          className="h-full w-full object-cover z-1"
          priority
        />

        <div className="z-2 absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-full text-center flex-col gap-2">
          <div className="bg-slate-800/40 w-fit mx-auto">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mx-8 uppercase">
              OUR SUPREME DETAILING SERVICES
            </h1>
            <h2 className="text-slate-300 text-base sm:text-lg md:text-xl lg:text-2xl mx-8">
              Book your detailing appointment today!
            </h2>
          </div>
          <div className="mt-16">
            <a 
              href="#services"
              className="bg-white text-black px-6 py-3 rounded-lg font-bold italic uppercase hover:bg-gray-100 transition-colors"
            >
              Book Now
            </a>
          </div>
        </div>
      </section>

      <section className="flex flex-col w-full bg-black">
        <article className="border-l border-gray-500 m-16 h-full pb-8">
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl uppercase font-light pl-8 mb-4">
            Our Approach
          </h2>
          <p className="text-white text-sm sm:text-base md:text-lg border-l-2 border-white pl-8">
            We offer a comprehensive range of services to ensure your vehicle
            looks and feels its absolute best. From high-end detailing to
            ceramic coating and paint protection, our team of experienced
            professionals use only the finest products and techniques to give
            your car the attention it deserves.
          </p>
        </article>
      </section>

      <section id="services" className="w-full bg-white text-black py-10">
        <article className="flex flex-col gap-8 h-full mx-4 sm:mx-8 lg:mx-16">
          {Object.entries(servicesByCategory).map(([category, categoryServices]) => (
            <div key={category} className="flex flex-col items-center justify-evenly gap-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl uppercase font-light border-b">
                {categoryTitles[category as keyof typeof categoryTitles] || category}
              </h2>
              <div className="grid grid-flow-row lg:grid-cols-2 gap-8 items-center justify-center w-full">
                {categoryServices.map((service) => (
                  <ServiceCard
                    key={service.id}
                    title={service.title}
                    time={service.duration}
                    price={service.price}
                    callLink={service.slug}
                    imageSrc={
                      typeof service.image === 'object' && service.image?.url
                        ? service.image.url
                        : '/gallery/IMG_2173.jpg' // fallback image
                    }
                    imageAlt={
                      typeof service.image === 'object' && service.image?.alt
                        ? service.image.alt
                        : service.title
                    }
                    description={service.description}
                  />
                ))}
              </div>
            </div>
          ))}
          
          {services.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                Services are being updated. Please check back soon or contact us directly.
              </p>
            </div>
          )}
        </article>
      </section>
    </main>
  );
}
