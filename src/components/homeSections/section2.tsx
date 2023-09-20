import Image from "next/image";
import nissan from "@/assets/images/nissan.webp";

export default function Section2() {
  return (
    <section className="flex flex-col md:flex-row relative w-full xl:py-16 bg-black">
      <article className="flex items-center m-16 md:w-[50%]">
        <div className="flex flex-col items-start border-l border-gray-600">
          <h3 className="text-white text-sh6 md:text-lh6 mb-4 pl-8">
            ABOUT US
          </h3>
          <h4 className="text-white text-sp1 md:text-lp1 mb-6 border-l-2 pl-8">
            Our Story and Commitment to Excellence
          </h4>

          <p className="text-white text-sp2 md:text-lp2 pl-8">
            At Supreme Auto Care, we&apos;re passionate about cars and dedicated
            to delivering exceptional auto detailing services that exceed our
            clients&apos; expectations. Our commitment to excellence is
            reflected in every aspect of our service. From the products we use
            to the techniques we employ, we go above and beyond to ensure that
            your car receives the attention it deserves. Whether it&apos;s a
            simple wash or a full detail, we treat every vehicle with the same
            level of care and precision.
          </p>
          <p className="text-white text-sp2 md:text-lp2 pl-8">
            If you&apos;re looking for a professional, reliable, and top-quality
            auto detailing service, look no further than Supreme Auto Care.
            Contact us today to schedule your appointment and experience the
            difference for yourself.
          </p>
        </div>
      </article>

      <div className="hidden md:w-[50%] md:flex">
        <Image
          src={nissan}
          alt="Nissan Car"
          className="h-full w-auto object-cover"
          priority
        />
      </div>
    </section>
  );
}
