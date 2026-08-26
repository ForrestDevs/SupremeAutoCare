"use client";

import { useContext } from "react";
import Link from "next/link";

import { BookingModalContext } from "@/components/booking/BookingModal";

interface PackageCardProps {
  tag: string;
  title: string;
  subtitle: string;
  price: string;
  protection: string;
  features: string[];
  bookLink: string;
  bookLabel: string;
  featured?: boolean;
  opensBookingModal?: boolean;
}

export default function PackageCard({
  tag,
  title,
  subtitle,
  price,
  protection,
  features,
  bookLink,
  bookLabel,
  featured = false,
  opensBookingModal = false,
}: PackageCardProps) {
  const bookingModal = useContext(BookingModalContext);
  return (
    <div
      className={`flex flex-col h-full p-8 border ${
        featured ? "border-[#ED1C24] bg-neutral-950" : "border-gray-700 bg-black"
      }`}
    >
      <span
        className={`w-fit uppercase text-sp3 md:text-lp3 tracking-widest px-3 py-1 mb-6 ${
          featured ? "bg-[#ED1C24] text-white" : "border border-gray-600 text-slate-300"
        }`}
      >
        {tag}
      </span>

      <h3 className="text-white text-sh3 md:text-lh3 uppercase font-bold">{title}</h3>
      <p className="text-slate-400 text-sp2 md:text-lp2 mb-6">{subtitle}</p>

      <p className="text-white text-sh2 md:text-lh2 font-light">
        {price}
        <span className="text-slate-500 text-sp2 md:text-lp2"> + CAD</span>
      </p>
      <p className="text-[#ED1C24] text-sp2 md:text-lp2 uppercase tracking-widest mb-6">
        {protection}
      </p>

      <ul className="flex flex-col grow mb-8">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex gap-3 text-slate-300 text-sp2 md:text-lp2 py-3 border-t border-gray-800 first:border-t-0"
          >
            <span className="text-[#ED1C24]">—</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div data-theme="light" className="btn w-full">
        {opensBookingModal && bookingModal ? (
          <button type="button" onClick={bookingModal.openBooking} className="w-full">
            <p className="text-black text-sp1 md:text-lp1 font-bold italic uppercase">
              {bookLabel}
            </p>
          </button>
        ) : (
          <Link href={bookLink}>
            <p className="text-black text-sp1 md:text-lp1 font-bold italic uppercase">
              {bookLabel}
            </p>
          </Link>
        )}
      </div>
    </div>
  );
}
