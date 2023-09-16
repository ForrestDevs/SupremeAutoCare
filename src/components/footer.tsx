import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/images/abosLogo.webp";

export default function Footer() {
  const menuItems = [
    { title: "Home", link: "/" },
    { title: "Gallery", link: "/gallery" },
    { title: "Services", link: "/services" },
  ];

  return (
    <footer className="">
        <div className="flex flex-col items-center justify-center space-y-4">
          <Image
            src={Logo}
            alt="Abbos Detailing Logo"
            width={200}
            height={200}
            priority
          />
          <p className="text-center">Tel: (647)534-1245</p>
          <p className="text-center">Email: Abbosdetailing@gmail.com</p>
          <p className="text-center">Location: 88 Crockford Blvd #10, Scarborough, Ontario, M1R 3C3</p>
          <form className="w-full max-w-sm">
            <div className="flex items-center border-b-2 border-teal-500 py-2">
              <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="email" placeholder="Email" aria-label="Email"/>
              <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                Subscribe
              </button>
            </div>
          </form>
        </div>
        
     
    </footer>
  );
}