import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { TailwindIndicator } from "@/components/custom/tailwindIndicator";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/logo/logoTransparent.png";
import { Facebook, Instagram } from "lucide-react";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";

// Font files can be colocated inside of `app`
const Futura = localFont({
  src: [
    {
      path: "../../public/fonts/Supreme/FuturaBold.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../../public/fonts/Supreme/FuturaBoldItalic.ttf",
      weight: "700",
      style: "bold italic",
    },
    {
      path: "../../public/fonts/Supreme/FuturaBook.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Supreme/FuturaCondensed.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Supreme/FuturaHeavy.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/Supreme/FuturaHeavyOblique.ttf",
      weight: "900",
      style: "oblique",
    },
    {
      path: "../../public/fonts/Supreme/FuturaLight.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Supreme/FuturaMedium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  display: "swap",
});

const font = Playfair_Display({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Supreme Auto Care",
  description: "Professional detailing and ceramic coating services in Scarborough, Ontario",
  keywords: ["auto detailing", "ceramic coating", "car wash", "Scarborough", "Ontario"],
  authors: [{ name: "Supreme Auto Care" }],
  creator: "Supreme Auto Care",
  publisher: "Supreme Auto Care",
  metadataBase: new URL('http://localhost:3000'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body className={`${Futura.className} min-h-screen bg-black`}>
        <header className="w-full backdrop-filter backdrop-blur-sm bg-slate-600/10 fixed top-0 right-0 z-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex max-w-screen-xl mx-auto items-center justify-between px-4 sm:px-8">
              <Link href="/" className="flex-shrink-0">
                <Image
                  src={Logo}
                  alt="Supreme Auto Care Logo"
                  width={200}
                  height={200}
                  priority
                  className="p-2 w-auto h-auto max-w-[150px] sm:max-w-[200px]"
                />
              </Link>

              <nav className="hidden sm:block">
                <ul className="flex items-center justify-start gap-6">
                  <li key="home">
                    <Link href="/" className="text-white hover:text-gray-300 transition-colors">
                      <span className="text-white underline text-sm sm:text-base md:text-lg">
                        Home
                      </span>
                    </Link>
                  </li>
                  <li key="gallery">
                    <Link href="/gallery" className="text-white hover:text-gray-300 transition-colors">
                      <span className="text-white underline text-sm sm:text-base md:text-lg">
                        Gallery
                      </span>
                    </Link>
                  </li>
                  <li key="services">
                    <Link href="/services" className="text-white hover:text-gray-300 transition-colors">
                      <span className="text-white underline text-sm sm:text-base md:text-lg">
                        Services
                      </span>
                    </Link>
                  </li>
                </ul>
              </nav>

              {/* Mobile Navigation */}
              <nav className="sm:hidden">
                <ul className="flex items-center justify-start gap-4">
                  <li>
                    <Link href="/" className="text-white text-xs">Home</Link>
                  </li>
                  <li>
                    <Link href="/gallery" className="text-white text-xs">Gallery</Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-white text-xs">Services</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="min-h-screen">
          {children}
        </main>

        <Analytics />

        <footer className="flex flex-col lg:flex-row items-center justify-evenly gap-4 p-6 bg-black text-white bottom-0 w-full mt-auto">
          <div className="h-full order-1 lg:order-none">
            <Image
              src={Logo}
              alt="Supreme Auto Care Logo"
              width={250}
              height={250}
              priority
              className="w-auto h-auto max-w-[200px] sm:max-w-[250px]"
            />
          </div>

          <div className="flex flex-col sm:items-center lg:items-start gap-4 h-full order-3 lg:order-none w-full lg:w-auto">
            <Link 
              href="tel:(647)534-1245"
              className="hover:text-gray-300 transition-colors"
            >
              <strong className="text-sm sm:text-base">Tel: </strong>
              <span className="text-sm sm:text-base">(647)534-1245</span>
            </Link>
            <Link 
              href="mailto:Abbosdetailing@gmail.com"
              className="hover:text-gray-300 transition-colors"
            >
              <strong className="text-sm sm:text-base">Email: </strong>
              <span className="text-sm sm:text-base underline">
                Abbosdetailing@gmail.com
              </span>
            </Link>
            <Link
              href="https://www.google.com/maps/search/?api=1&query=88+Crockford+Blvd+%2310,+Scarborough,+Ontario,+M1R+3C3"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              <strong className="text-sm sm:text-base">Location: </strong>
              <span className="text-sm sm:text-base underline">
                88 Crockford Blvd #10, Scarborough, Ontario, M1R 3C3
              </span>
            </Link>

            <div className="flex flex-row items-center justify-start sm:justify-center lg:justify-start gap-8 w-full">
              <Link 
                href="https://www.facebook.com/Abbo.Detailing"
                className="hover:text-gray-300 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </Link>
              <Link 
                href="https://www.instagram.com/abbosdetailing/"
                className="hover:text-gray-300 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </Link>
            </div>
          </div>
        </footer>

        <TailwindIndicator />
      </body>
    </html>
  );
}
