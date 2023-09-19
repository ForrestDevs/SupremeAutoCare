import "./globals.css";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { TailwindIndicator } from "@/components/tailwindIndicator";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/images/abosLogo.webp";
import { Facebook, Instagram } from "lucide-react";

const font = Playfair_Display({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Supreme Auto Care",
  description: "Detailing and Ceramic Coating in Scarborough, Ontario",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <header className="w-full backdrop-filter backdrop-blur-sm bg-slate-600/10 absolute top-0 right-0 z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex max-w-screen-xl mx-auto items-center justify-between px-8">
              <Link href="/">
                <Image
                  src={Logo}
                  alt="Abbos Detailing Logo"
                  width={200}
                  height={200}
                  priority
                />
              </Link>

              <nav>
                <ul className="flex items-center justify-start gap-6">
                  <li key="home">
                    <Link href="/">
                      <span className="text-white underline text-sh3 md:text-lh3">Home</span>
                    </Link>
                  </li>
                  <li key="gallery">
                    <Link href="/gallery">
                      <span className="text-white underline text-sh3 md:text-lh3">Gallery</span>
                    </Link>
                  </li>
                  <li key="services">
                    <Link href="/services">
                      <span className="text-white underline text-sh3 md:text-lh3">Services</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        {children}
        <footer className="bg-white pb-16 mx-8 pt-8">
          <div className="flex flex-row items-center justify-evenly">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <Image
                src={Logo}
                alt="Abbos Detailing Logo"
                width={250}
                height={250}
                priority
              />
              <div className="flex flex-col items-start justify-evenly gap-4">
                <p className="text-black text-sp2 md:text-lp2">
                  <strong>Tel:</strong> (647)534-1245
                </p>
                <p className="text-black text-sp2 md:text-lp2">
                  <strong>Email:</strong> Abbosdetailing@gmail.com
                </p>
                <p className="text-black text-sp2 md:text-lp2">
                  <strong>Location:</strong> 88 Crockford Blvd #10, Scarborough,
                  Ontario, M1R 3C3
                </p>
                <div className="flex flex-row items-center justify-start gap-8 w-full">
                  <Link href={"https://www.facebook.com/Abbo.Detailing"}>
                    <Facebook />
                  </Link>
                  <Link href={"https://www.instagram.com/abbosdetailing/"}>
                    <Instagram />
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start justify-start ">
              <h4 className="text-black text-sp2 md:text-lp2 uppercase font-semibold mb-6">
                Subscribe
              </h4>
              <p className="text-black text-sp2 md:text-lp2 mb-6">
                Sign up to recive promotional updates
              </p>
              <form className="w-full max-w-sm">
                <div className="flex items-center py-2">
                  <input
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="email"
                    placeholder="Email"
                    aria-label="Email"
                  />
                  <button
                    className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                    type="button"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </footer>
        <TailwindIndicator />
      </body>
    </html>
  );
}
