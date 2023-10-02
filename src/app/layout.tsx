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
import EmailForm from "@/components/EmailForm";

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

// export const metadata: Metadata = {
//   title: "Supreme Auto Care",
//   description: "Detailing and Ceramic Coating in Scarborough, Ontario",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <head />
      <body className={`${Futura.className} h-screen`}>
        <header className="w-full backdrop-filter backdrop-blur-sm bg-slate-600/10 fixed top-0 right-0 z-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex max-w-screen-xl mx-auto items-center justify-between px-8">
              <Link href="/">
                <Image
                  src={Logo}
                  alt="Abbos Detailing Logo"
                  width={200}
                  height={200}
                  priority
                  className="p-2"
                />
              </Link>

              <nav>
                <ul className="flex items-center justify-start gap-6">
                  <li key="home">
                    <Link href="/">
                      <span className="text-white underline text-sh3 md:text-lh3">
                        Home
                      </span>
                    </Link>
                  </li>
                  <li key="gallery">
                    <Link href="/gallery">
                      <span className="text-white underline text-sh3 md:text-lh3">
                        Gallery
                      </span>
                    </Link>
                  </li>
                  <li key="services">
                    <Link href="/services">
                      <span className="text-white underline text-sh3 md:text-lh3">
                        Services
                      </span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        {children}
        <Analytics />
        <footer className="flex flex-col lg:flex-row items-center justify-evenly gap-4 p-6 bg-black text-white bottom-0 w-full">
          <div className="h-full order-1 lg:order-none ">
            <Image
              src={Logo}
              alt="Abbos Detailing Logo"
              width={250}
              height={250}
              priority
            />
          </div>

          <div className="flex flex-col sm:items-center lg:items-start gap-4 h-full order-3 lg:order-none w-full lg:w-auto">
            <Link href="tel:(647)534-1245">
              <strong className="text-lp2">Tel: </strong>
              <span className="text-lp2">(647)534-1245</span>
            </Link>
            <Link href="mailto:Abbosdetailing@gmail.com">
              <strong className="text-lp2">Email: </strong>
              <span className="text-lp2 underline">
                Abbosdetailing@gmail.com
              </span>
            </Link>
            <Link
              href="https://www.google.com/maps/search/?api=1&query=88+Crockford+Blvd+%2310,+Scarborough,+Ontario,+M1R+3C3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong className="text-lp2">Location: </strong>
              <span className="text-lp2 underline">
                88 Crockford Blvd #10, Scarborough, Ontario, M1R 3C3
              </span>
            </Link>

            <div className="flex flex-row items-center justify-start sm:justify-center lg:justify-start gap-8 w-full">
              <Link href={"https://www.facebook.com/Abbo.Detailing"}>
                <Facebook />
              </Link>
              <Link href={"https://www.instagram.com/abbosdetailing/"}>
                <Instagram />
              </Link>
            </div>
          </div>

          {/* <div className="flex flex-col sm:items-center lg:items-start h-full order-2 lg:order-none w-full lg:w-auto">
            <h4 className="text-lp2 uppercase font-semibold mb-6">Subscribe</h4>
            <p className="text-lp2 mb-6">
              Sign up to recive promotional updates
            </p>

            <EmailForm />
          </div> */}
        </footer>
        <TailwindIndicator />
      </body>
    </html>
  );
}
