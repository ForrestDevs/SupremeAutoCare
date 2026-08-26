"use client";

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";

const CALENDAR_SRC = "https://api.leadconnectorhq.com/widget/group/3nrW5erBjaJKQQUFDZWq";

type BookingModalContextValue = {
  openBooking: () => void;
};

export const BookingModalContext = createContext<BookingModalContextValue | null>(null);

export function BookingModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const openBooking = useCallback(() => setIsOpen(true), []);
  const closeBooking = useCallback(() => setIsOpen(false), []);

  return (
    <BookingModalContext.Provider value={{ openBooking }}>
      {children}
      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4"
          onClick={closeBooking}
        >
          <div
            className="relative w-full max-w-2xl h-[85vh] bg-white"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeBooking}
              aria-label="Close booking calendar"
              className="absolute -top-10 right-0 text-white text-sp2 uppercase tracking-widest"
            >
              Close ✕
            </button>
            <iframe
              src={CALENDAR_SRC}
              title="Book a service"
              style={{ width: "100%", height: "100%", border: "none" }}
            />
          </div>
        </div>
      )}
    </BookingModalContext.Provider>
  );
}

export function useBookingModal() {
  const ctx = useContext(BookingModalContext);
  if (!ctx) {
    throw new Error("useBookingModal must be used within a BookingModalProvider");
  }
  return ctx;
}
