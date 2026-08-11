import Image from "next/image";
import Link from "next/link";

import redLambo from "@/assets/images/redLambo.webp";
import FaqList from "@/components/ceramic/FaqList";
import PackageCard from "@/components/ceramic/PackageCard";
import { getGalleryPhotos } from "@/lib/gallery";
import { generateMetadata } from "@/lib/metadata";

export const metadata = generateMetadata(
  "Ceramic Coating Scarborough | Supreme Auto Care",
  "10H ceramic coating for exotics, luxury cars and dealer inventory in Scarborough. 5-9 year protection, paint correction included. Book your free paint assessment."
);

// The recent work strip is pulled from Payload, so render on request.
export const dynamic = "force-dynamic";

const BOOKING_LINK = "/services/ceramic-coating";

const STATS = [
  { value: "10H", label: "Coating Hardness" },
  { value: "5–9YR", label: "Protection Life" },
  { value: "1000+", label: "Vehicles Coated" },
  { value: "100%", label: "Returning Clients" },
];

const COMPARISON = {
  columns: ["Carnauba Wax", "Paint Sealant", "Ceramic Coating"],
  rows: [
    { label: "Lasts", values: ["4–6 weeks", "3–6 months", "5–9 years"] },
    { label: "Hardness added", values: ["None", "Minimal", "Up to 10H"] },
    { label: "UV / oxidation guard", values: ["Weak", "Moderate", "Strong"] },
    { label: "Hydrophobic beading", values: ["Fades fast", "Moderate", "Sustained"] },
    { label: "Swirl / chemical resistance", values: ["None", "Low", "High"] },
    {
      label: "Cost over 5 years",
      values: ["$400–$600", "$500–$900", "One-time investment"],
    },
  ],
};

const PACKAGES = [
  {
    tag: "Daily Driver",
    title: "Essential Ceramic",
    subtitle: "1-year SiO2 coating, single layer",
    price: "$599",
    protection: "2-Year Protection",
    features: [
      "Dual-stage decontamination wash",
      "Single-layer SiO2 coating",
      "Wheel faces & tire shine included",
      "Hydrophobic gloss finish",
      "Written 2-year coating warranty",
    ],
    bookLabel: "Book Essential",
  },
  {
    tag: "Most Booked",
    title: "Signature Ceramic",
    subtitle: "Stage 1 correction + 2-layer coating",
    price: "$999",
    protection: "5-Year Protection",
    featured: true,
    features: [
      "Everything in Essential, plus:",
      "Stage 1 machine paint correction",
      "2-layer ceramic coating (bumpers & mirrors incl.)",
      "Wheel barrel & caliper coating",
      "Glass coating for rain-clearing visibility",
      "Written 5-year coating warranty",
    ],
    bookLabel: "Book Signature",
  },
  {
    tag: "Exotic & Show Car",
    title: "Elite Graphene",
    subtitle: "Full correction + graphene ceramic",
    price: "$1,799",
    protection: "7–9 Year Protection",
    features: [
      "Everything in Signature, plus:",
      "Stage 2 correction — full swirl & scratch removal",
      "10H graphene-infused ceramic, self-healing top coat",
      "Full wheel-off wheel & barrel coating",
      "Interior leather / alcantara ceramic guard",
      "Priority booking for Ferrari, Lamborghini, McLaren-tier paint",
    ],
    bookLabel: "Book Elite",
  },
];

const PROCESS = [
  {
    num: "01",
    title: "Inspect & Wash",
    copy: "Foam pre-soak, dual-bucket hand wash, and iron/tar decontamination to strip the paint down to bare clear coat.",
  },
  {
    num: "02",
    title: "Paint Correction",
    copy: "Machine polish removes swirls, water spots and light scratches so the coating locks in clarity, not damage.",
  },
  {
    num: "03",
    title: "Coating Application",
    copy: "Coating is hand-applied panel by panel in a controlled bay, then leveled and inspected under raking light.",
  },
  {
    num: "04",
    title: "Cure & Handoff",
    copy: "Vehicle cures for 24–48 hrs before pickup. You leave with a written warranty and a wash-care guide.",
  },
];

const FAQS = [
  {
    question: "How long does ceramic coating actually last on a daily driver?",
    answer:
      "Our Essential package is rated for 2 years, Signature for 5, and Elite Graphene for 7–9 years, depending on wash habits, parking, and mileage. All coatings come with a written warranty so the timeline isn't a guess.",
  },
  {
    question: "Will ceramic coating stop rock chips or scratches?",
    answer:
      "No coating prevents physical impact damage — for that, paint protection film (PPF) is the right tool, and we can combine both. Ceramic's job is chemical and UV protection, swirl resistance, and keeping the surface easier to clean.",
  },
  {
    question: "Do you work on exotic or matte-finish paint?",
    answer:
      "Yes — matte, satin wrap, and exotic paints need coating-safe products and lower buffer pressure, which is exactly what our correction stages are calibrated for. We'll flag anything paint-specific during your free assessment.",
  },
  {
    question: "How soon can I drive or wash the car after coating?",
    answer:
      "The car can be driven immediately but shouldn't get wet for 24–48 hours while the coating fully cures. We'll send you home with a simple care sheet covering the first two weeks.",
  },
  {
    question: "Do you offer pricing for dealerships coating multiple vehicles?",
    answer:
      "Yes, we run a volume program for dealer and fleet accounts with priority scheduling so vehicles spend less time off the lot. Reach out for a rate sheet.",
  },
];

export default async function CeramicCoating() {
  const recentWork = await getGalleryPhotos({ category: "ceramic-coating", limit: 4 });

  return (
    <main className="flex flex-col justify-between w-full bg-black">
      <section className="flex items-center relative w-full h-[100vh]">
        <Image
          src={redLambo}
          alt="Lamborghini finished with a 10H ceramic coating at Supreme Auto Care"
          className="h-full w-full object-cover z-1"
          priority
        />

        <div className="z-2 absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-full text-center flex-col gap-2">
          <div className="bg-slate-800/40 w-fit mx-auto p-4">
            <p className="text-slate-300 text-sp2 md:text-lp2 uppercase tracking-widest mb-2">
              Scarborough&apos;s Ceramic Coating Specialists
            </p>
            <div className="flex flex-col">
              <p className="text-white text-sh1 md:text-lh1 mx-8 font-bold italic">
                NINE HOURS IN THE BAY,
              </p>
              <p className="text-[#ED1C24] text-sh1 md:text-lh1 mx-8 font-bold italic">
                NINE YEARS ON THE PAINT
              </p>
            </div>
            <h1 className="text-white text-sh4 md:text-lh4 px-6">
              10H ceramic protection with correction included, applied by the same
              two hands every time
            </h1>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-16">
            <div data-theme="light" className="btn">
              <Link href={BOOKING_LINK}>
                <p className="text-black text-sp1 md:text-lp1 font-bold italic uppercase">
                  Book A Free Assessment
                </p>
              </Link>
            </div>
            <div className="btn btn-outline text-white hover:bg-white hover:text-black">
              <a href="#packages">
                <p className="text-sp1 md:text-lp1 font-bold italic uppercase">
                  See Packages
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-black py-12 px-8 md:px-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-8 max-w-6xl mx-auto">
          {STATS.map((stat) => (
            <span
              key={stat.label}
              className="flex flex-col items-start justify-evenly"
            >
              <p className="text-white text-sh2 md:text-lh2 font-light">
                {stat.value}
              </p>
              <p className="text-slate-400 text-sp3 md:text-lp3 font-medium w-full uppercase pt-6 border-t border-gray-700">
                {stat.label}
              </p>
            </span>
          ))}
        </div>
      </section>

      <section className="w-full bg-white text-black py-10">
        <div className="border-l border-gray-600 my-8 mx-8 md:mx-16 pb-8">
          <div className="lg:w-2/3">
            <p className="uppercase text-sh6 md:text-lh6 pl-8 mb-4">Why Ceramic</p>
            <p className="text-sp1 md:text-lp1 border-l-2 border-gray-600 pl-8 mb-6">
              Wax Wipes Off. Sealant Wears Off. Ceramic Bonds In.
            </p>
            <p className="text-sp2 md:text-lp2 pl-8">
              Ceramic coating is a liquid polymer that chemically bonds to your
              clear coat, forming a permanent glass-like layer instead of sitting
              on top like wax. That&apos;s the difference between reapplying every
              few weeks and driving away protected for years.
            </p>
          </div>
        </div>

        <div className="mx-8 md:mx-16 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr>
                <th className="border border-gray-300 p-4" />
                {COMPARISON.columns.map((column, index) => (
                  <th
                    key={column}
                    className={`border border-gray-300 p-4 text-sh5 md:text-lh5 uppercase font-bold ${
                      index === COMPARISON.columns.length - 1 ? "text-[#ED1C24]" : ""
                    }`}
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARISON.rows.map((row) => (
                <tr key={row.label}>
                  <th className="border border-gray-300 bg-gray-100 p-4 text-sp2 md:text-lp2 uppercase font-medium">
                    {row.label}
                  </th>
                  {row.values.map((value, index) => (
                    <td
                      key={`${row.label}-${value}`}
                      className={`border border-gray-300 p-4 text-sp2 md:text-lp2 ${
                        index === row.values.length - 1
                          ? "text-black font-medium"
                          : "text-gray-600"
                      }`}
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mx-8 md:mx-16 mt-4 text-sp3 md:text-lp3 text-gray-500">
          *Hardness (H) refers to pencil hardness — a scale measuring a coating&apos;s scratch resistance, not curing or drying time.
        </p>
      </section>

      <section id="packages" className="w-full bg-black py-10">
        <div className="border-l border-gray-600 my-8 mx-8 md:mx-16 pb-8">
          <div className="lg:w-2/3">
            <p className="text-white uppercase text-sh6 md:text-lh6 pl-8 mb-4">
              Packages
            </p>
            <p className="text-white text-sp1 md:text-lp1 border-l-2 pl-8 mb-6">
              Three Ways To Protect It
            </p>
            <p className="text-slate-400 text-sp2 md:text-lp2 pl-8">
              Every package starts with a full decontamination wash and paint
              inspection — we don&apos;t seal in swirls. Pricing depends on
              vehicle size and paint condition; the numbers below are our typical
              starting point.
            </p>
          </div>
        </div>

        <div className="grid grid-flow-row lg:grid-cols-3 gap-8 mx-8 md:mx-16">
          {PACKAGES.map((pkg) => (
            <PackageCard key={pkg.title} {...pkg} bookLink={BOOKING_LINK} />
          ))}
        </div>
      </section>

      <section className="w-full bg-white text-black py-10">
        <div className="border-l border-gray-600 my-8 mx-8 md:mx-16 pb-8">
          <div className="lg:w-2/3">
            <p className="uppercase text-sh6 md:text-lh6 pl-8 mb-4">The Process</p>
            <p className="text-sp1 md:text-lp1 border-l-2 border-gray-600 pl-8">
              Our Process — How We Get a Long-Lasting Shine
            </p>
          </div>
        </div>

        <div className="grid grid-flow-row sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-8 md:mx-16">
          {PROCESS.map((step) => (
            <article key={step.num} className="border-l-2 border-[#ED1C24] pl-6">
              <p className="text-[#ED1C24] text-sp2 md:text-lp2 mb-4">{step.num}</p>
              <h3 className="text-sh4 md:text-lh4 uppercase font-bold mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sp2 md:text-lp2">{step.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="w-full bg-black py-10">
        <div className="border-l border-gray-600 my-8 mx-8 md:mx-16 pb-8">
          <div className="lg:w-2/3">
            <p className="text-white uppercase text-sh6 md:text-lh6 pl-8 mb-4">
              Who It&apos;s For
            </p>
            <p className="text-white text-sp1 md:text-lp1 border-l-2 pl-8">
              Private Owners. Dealer Lots. Same Standard.
            </p>
          </div>
        </div>

        <div className="grid grid-flow-row lg:grid-cols-2 gap-8 mx-8 md:mx-16">
          <article className="flex flex-col border border-gray-700 p-8">
            <p className="text-slate-400 text-sp2 md:text-lp2 uppercase tracking-widest mb-4">
              Private Clients
            </p>
            <h3 className="text-white text-sh3 md:text-lh3 uppercase font-bold mb-4">
              Your Car, Protected Like It&apos;s Ours
            </h3>
            <p className="text-slate-400 text-sp2 md:text-lp2 grow mb-8">
              Most of what rolls through our bay is someone&apos;s Corvette, Audi,
              or once-a-year Lambo drive day. We treat every panel like it&apos;s
              irreplaceable, because to you, it is. Mobile assessment available for
              GTA-wide pickup on exotic and low-clearance vehicles.
            </p>
            <div data-theme="light" className="btn w-fit">
              <Link href={BOOKING_LINK}>
                <p className="text-black text-sp1 md:text-lp1 font-bold italic uppercase">
                  Book A Private Coating
                </p>
              </Link>
            </div>
          </article>

          <article className="flex flex-col border border-gray-700 p-8">
            <p className="text-slate-400 text-sp2 md:text-lp2 uppercase tracking-widest mb-4">
              Dealer &amp; Fleet Program
            </p>
            <h3 className="text-white text-sh3 md:text-lh3 uppercase font-bold mb-4">
              Lot-Ready In One Visit
            </h3>
            <p className="text-slate-400 text-sp2 md:text-lp2 grow mb-8">
              We work with used car dealerships across the GTA who need consistent,
              fast-turnaround ceramic prep for high-value inventory. Volume pricing,
              priority scheduling, and same-week turnaround so vehicles don&apos;t
              sit off the lot.
            </p>
            <div data-theme="light" className="btn w-fit">
              <Link href="tel:(647)534-1245">
                <p className="text-black text-sp1 md:text-lp1 font-bold italic uppercase">
                  Ask About Dealer Pricing
                </p>
              </Link>
            </div>
          </article>
        </div>
      </section>

      {recentWork.length > 0 && (
        <section className="w-full bg-black py-10">
          <div className="border-l border-gray-600 my-8 mx-8 md:mx-16 pb-8">
            <div className="lg:w-2/3">
              <p className="text-white uppercase text-sh6 md:text-lh6 pl-8 mb-4">
                Recent Work
              </p>
              <p className="text-white text-sp1 md:text-lp1 border-l-2 pl-8">
                Coated, Corrected, Delivered
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mx-8 md:mx-16">
            {recentWork.map((photo) => (
              <Link
                key={photo.id}
                href="/gallery"
                className="relative aspect-square overflow-hidden border border-gray-800"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="w-full bg-black py-10">
        <div className="border-l border-gray-600 my-8 mx-8 md:mx-16 pb-8">
          <div className="lg:w-2/3">
            <p className="text-white uppercase text-sh6 md:text-lh6 pl-8 mb-4">
              Questions We Get Most
            </p>
            <p className="text-white text-sp1 md:text-lp1 border-l-2 pl-8">
              Before You Book
            </p>
          </div>
        </div>

        <div className="mx-8 md:mx-16">
          <FaqList items={FAQS} />
        </div>
      </section>

      <section className="w-full bg-black pb-16">
        <div className="border border-gray-700 mx-8 md:mx-16 p-8 md:p-16 text-center">
          <h2 className="text-white text-sh2 md:text-lh2 uppercase font-bold italic mb-4">
            Let&apos;s Look At Your Paint First
          </h2>
          <p className="text-slate-400 text-sp2 md:text-lp2 max-w-xl mx-auto mb-8">
            Every project starts with a free assessment — no coating gets sold
            before we&apos;ve actually inspected the car. Tell us the make and model
            and we&apos;ll set a time.
          </p>

          <div data-theme="light" className="btn">
            <Link href="tel:(647)534-1245">
              <p className="text-black text-sp1 md:text-lp1 font-bold italic uppercase">
                Call (647) 534-1245
              </p>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-12 text-white">
            <div>
              <span className="block text-slate-500 text-sp3 md:text-lp3 uppercase tracking-widest mb-1">
                Email
              </span>
              <Link
                href="mailto:Abbosdetailing@gmail.com"
                className="text-sp2 md:text-lp2 underline"
              >
                Abbosdetailing@gmail.com
              </Link>
            </div>
            <div>
              <span className="block text-slate-500 text-sp3 md:text-lp3 uppercase tracking-widest mb-1">
                Location
              </span>
              <Link
                href="https://www.google.com/maps/search/?api=1&query=84+Crockford+Blvd+%233,+Scarborough,+Ontario,+M1R+3C3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sp2 md:text-lp2 underline"
              >
                84 Crockford Blvd #3, Scarborough, ON
              </Link>
            </div>
            <div>
              <span className="block text-slate-500 text-sp3 md:text-lp3 uppercase tracking-widest mb-1">
                Instagram
              </span>
              <Link
                href="https://www.instagram.com/abbosdetailing/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sp2 md:text-lp2 underline"
              >
                @abbosdetailing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
