import Image from "next/image";
import rolls from "@/assets/images/rolls.webp";
import audi from "@/assets/images/audi.webp";
import porsche from "@/assets/images/porsche.webp";
import tesla from "@/assets/images/tesla.webp";
import nissan from "@/assets/images/nissan.webp";
import VideoBG from "@/components/videoBg";
import phantom from "@/assets/images/phantom.webp";
import jeep from "@/assets/images/jeep.webp";
import escalade from "@/assets/images/escalade.webp";
import work from "@/assets/videos/work.mp4";
import teslaParallax from "@/assets/images/teslaParallax.webp";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <VideoBG>
        <>
          <h1 className="text-white">UNMATHCED QUALITY, UNFORGETTABLE SHINE</h1>
          <h2 className="text-white">
            Experience Detailing That Goes Above And Beyond Your Expectations
          </h2>
        </>
      </VideoBG>

      <div className="flex flex-row items-center justify-between gap-1 bg-black">
        <span className="flex flex-col justify-start gap-4">
          <h3 className="text-white uppercase">About Us</h3>
          <h4 className="text-white">Our Story and Commitment to Excellence</h4>
          <p className="text-white">
            At Abbos Detailing, we&apos;re passionate about cars and dedicated to
            delivering exceptional auto detailing services that exceed our
            clients&apos; expectations. Our commitment to excellence is reflected in
            every aspect of our service. From the products we use to the
            techniques we employ, we go above and beyond to ensure that your car
            receives the attention it deserves. Whether it&apos;s a simple wash or a
            full detail, we treat every vehicle with the same level of care and
            precision.
          </p>
          <p className="text-white">
            If you&apos;re looking for a professional, reliable, and top-quality auto
            detailing service, look no further than Abbos Detailing. Contact us
            today to schedule your appointment and experience the difference for
            yourself.
          </p>
        </span>
        <Image
          src={nissan}
          alt="Nissan Car"
          className="dark:invert"
          width={4000}
          height={4000}
          priority
        />
      </div>

      <div className="flex flex-col justify-start items-start gap-4 bg-white h-[120vh]">
        <h3 className="text-black uppercase">Our Services</h3>
        <h4>Going above and beyond for your Vehicle</h4>

        <div className="flex flex-row items-center justify-between">
          <span className="w-[50%]">
            <h3>Interior Detail and Exterior Wash</h3>
            <p>
              Our team uses a combination of steam, shampooing, and vacuuming to
              clean and freshen up all surfaces, including the seats and floors.
              We also remove mild salt stains, wash the mats and door jams, and
              clean the inside windows. This package includes a dual bucket hand
              wash, ceramic wax treatment, and tire shine to protect the paint
              and restore your wheels to their former glory.
            </p>
          </span>

          <Image
            src={jeep}
            alt="Jeep"
            className="dark:invert w-[50%]"
            width={100}
            height={24}
            priority
          />
        </div>

        <div className="flex flex-row items-center justify-between">
          <Image
            src={escalade}
            alt="Escalade"
            className="dark:invert w-[50%]"
            width={100}
            height={24}
            priority
          />
          <span className="w-[50%]">
            <h3>Correction</h3>
            <p>
              We offer two stages of paint correction to restore the showroom
              shine to your vehicle. Our Stage 1 package removes moderate
              swirling and includes protection to make the paint last. This
              package includes a dual bucket hand wash, wheel cleaning, paint
              decontamination, stage 1 cut and polish, ceramic wax treatment,
              and tire shine. Our Stage 2 package is designed to remove heavy
              swirling and light scratches, and includes a stage 2 buff, stage 1
              polish, ceramic wax treatment, and tire shine. Trust our experts
              to provide your car with the highest level of care and attention
              to detail.
            </p>
          </span>
        </div>

        <div className="flex flex-row items-center justify-between">
          <span className="w-[50%]">
            <h3>Ceramic Coating</h3>
            <p>
              Our ceramic coating packages provide the ultimate protection for
              your luxury vehicle. Our team of experts uses only the highest
              quality products and techniques to ensure a flawless finish.
              Ceramic coating adds an extra layer of protection against the
              elements, including UV rays and environmental contaminants. With a
              ceramic coating from Abbos Detailing, you can rest assured that
              your vehicle will maintain its showroom shine for years to come.
            </p>
          </span>

          <Image
            src={phantom}
            alt="Rolls Royce Phantom"
            className="dark:invert w-[50%]"
            width={100}
            height={24}
            priority
          />
        </div>
      </div>

      <div className="w-full h-[50Vh] relative">
        <Image
          src={teslaParallax}
          alt="Tesla Parallax"
          className="dark:invert absolute top-0 left-0 w-full h-full object-cover"
          layout="fill"
          priority
        />

        <div className="relative bg-black text-white p-5 rounded-lg ml-5 mr-5 mt-5 mb-5 w-[50%]">
          <h3>Why Choose Us?</h3>
          <h4>Our Unique Method for Achieving Unmatched Results</h4>
          <p>
            We take pride in our meticulous attention to detail, unparalleled
            customer service, and our commitment to using the highest quality
            products and techniques. Our team of professionals have a passion for
            perfection and will go above and beyond to exceed your expectations.
            Trust us to provide your luxury vehicle with the expert care and
            maintenance it deserves. Experience the ultimate in automotive
            detailing services with Abbos Detailing.
          </p>
        </div>

      </div>

      <div className="flex flex-row w-full h-[50Vh]">
        <div className="w-[50%] overflow-hidden">
          <video
            style={{
              gridArea: "1 / 1",
              zIndex: -1,
              height: "100%", // This should make the video take the full height of the div
              objectFit: "cover", // This will ensure the aspect ratio of the video is maintained while it scales
            }}
            controls={false}
            autoPlay
            muted
            loop
          >
            <source src={work} />
          </video>
        </div>

        <div className="bg-white w-[50%] grid grid-cols-2 grid-rows-2 p-24">
          <h3
            style={{ gridColumn: "span 2" }}
            className="text-2xl font-bold grid-cols-2"
          >
            Abbos Detailing In Numbers
          </h3>

          <span className="text-left">
            <h4 className="text-lg font-semibold">Years of Experience</h4>
            <p className="text-lg">8+</p>
          </span>

          <span className="text-left">
            <h4 className="text-lg font-semibold">Cost Per Service</h4>
            <p className="text-lg">100$+</p>
          </span>

          <span className="text-left">
            <h4 className="text-lg font-semibold">Customers</h4>
            <p className="text-lg">500+</p>
          </span>

          <span className="text-left">
            <h4 className="text-lg font-semibold">Returning Customers</h4>
            <p className="text-lg">100%</p>
          </span>
        </div>
      </div>

      <div className="flex flex-row w-full h-[50Vh] bg-black">
        <div className="w-[50%] p-24 flex flex-col justify-start gap-4">
          <h3 className="font-serif text-white uppercase">Our Work</h3>
          <h4 className="font-serif text-white uppercase">
            Expert Detailing Services For High-End Automobiles
          </h4>
          <p className="font-serif text-white">
            At Abbos Detailing, we specialize in providing expert detailing
            services for high-end automobiles. We understand the importance of
            maintaining your investment, regardless of the make or model. With
            our extensive knowledge and experience, we are equipped to handle
            all types of vehicles and provide the same level of care and
            attention to detail to each one. Trust us to keep your car looking
            and feeling brand new.
          </p>
        </div>

        <div className="w-[50%] grid grid-cols-2 grid-rows-2 p-24">
          <span className="flex flex-col items-center">
            <Image
              src={tesla}
              alt="Tesla Logo"
              className="dark:invert"
              width={120}
              height={28}
              priority
            />
            <h4 className="text-white text-center">TESLA</h4>
          </span>

          <span className="flex flex-col items-center">
            <Image
              src={porsche}
              alt="Porsche Logo"
              className="dark:invert"
              width={120}
              height={28}
              priority
            />
            <h4 className="text-white text-center">Porsche</h4>
          </span>

          <span className="flex flex-col items-center">
            <Image
              src={rolls}
              alt="Rolls Royce Logo"
              className="dark:invert"
              width={120}
              height={28}
              priority
            />
            <h4 className="text-white text-center">Rolls Royce</h4>
          </span>

          <span className="flex flex-col items-center">
            <Image
              src={audi}
              alt="Audi Logo"
              className="dark:invert"
              width={120}
              height={28}
              priority
            />

            <h4 className="text-white text-center">Audi</h4>
          </span>

          {/* <div className="w-[50%] grid grid-cols-2 grid-rows-2 p-24">
            <span>
              <Image
                src={tesla}
                alt="Tesla Logo"
                className="dark:invert"
                width={100}
                height={24}
                priority
              />
              <h4 className="text-white">TESLA</h4>
            </span>

            <span>
              <Image
                src={porsche}
                alt="Porsche Logo"
                className="dark:invert"
                width={100}
                height={24}
                priority
              />
              <h4 className="text-white">Porsche</h4>
            </span>
          </div>

          <div className="w-[50%] grid grid-cols-2 grid-rows-2 p-24">
            
          </div> */}
        </div>
      </div>
    </main>
  );
}
