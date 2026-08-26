"use client";

import type { ReactNode } from "react";

import { useBookingModal } from "./BookingModal";

export default function BookNowTrigger({ children }: { children: ReactNode }) {
  const { openBooking } = useBookingModal();

  return (
    <button type="button" onClick={openBooking}>
      {children}
    </button>
  );
}
