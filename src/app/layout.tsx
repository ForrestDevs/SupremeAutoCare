import "./globals.css";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { TailwindIndicator } from "@/components/tailwindIndicator";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/images/abosLogo.webp";

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
                      <span className="text-white">Home</span>
                    </Link>
                  </li>
                  <li key="gallery">
                    <Link href="/gallery">
                      <span className="text-white">Gallery</span>
                    </Link>
                  </li>
                  <li key="services">
                    <Link href="/services">
                      <span className="text-white">Services</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        {children}
        <footer className="bg-white">
          <div className="flex flex-row">
            <Image
              src={Logo}
              alt="Abbos Detailing Logo"
              width={200}
              height={200}
              priority
            />
            <p className="text-center">Tel: (647)534-1245</p>
            <p className="text-center">Email: Abbosdetailing@gmail.com</p>
            <p className="text-center">
              Location: 88 Crockford Blvd #10, Scarborough, Ontario, M1R 3C3
            </p>
            <form className="w-full max-w-sm">
              <div className="flex items-center border-b-2 border-teal-500 py-2">
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
        </footer>
        <TailwindIndicator />
      </body>
    </html>
  );
}
