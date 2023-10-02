import AnimatedContainer from "../custom/AnimatedContainer";
import Image from "next/image";
import teslaParallax from "@/assets/images/home/teslaParallax.webp";

export default function Section4() {
  return (
    <section className="flex relative w-full min-h-[40vh]">
      <Image
        src={teslaParallax}
        alt="Tesla Parallax"
        className="absolute w-full h-full object-cover z-1"
        priority
      />

      <article className="relative bg-black text-white rounded-lg m-16 py-8 px-4 w-[60%] md:w-[40%] h-fit">
        <div className="border-l">
          <p className="text-white text-sh6 md:text-lh6 pl-8 mb-6">
            Why Choose Us?
          </p>
          <p className="text-white text-sh3 md:text-lh3 border-l-2 pl-8 mb-6">
            Our Unique Method for Achieving Unmatched Results
          </p>
          <h2 className="text-white text-sp2 md:text-lp2 pl-8">
            We take pride in our meticulous attention to detail, unparalleled
            customer service, and our commitment to using the highest quality
            products and techniques. Our team of professionals have a passion
            for perfection and will go above and beyond to exceed your
            expectations. Trust us to provide your luxury vehicle with the
            expert care and maintenance it deserves. Experience the ultimate in
            automotive detailing services with Supreme Auto Care.
          </h2>
        </div>
      </article>
    </section>
  );
}
