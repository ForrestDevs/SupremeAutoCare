import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/images/abosLogo.webp";

export default function Header() {
  const menuItems = [
    { title: "Home", link: "/" },
    { title: "Gallery", link: "/gallery" },
    { title: "Services", link: "/services" },
  ];

  return (
    <header className="w-full backdrop-filter backdrop-blur-sm bg-slate-600/10 absolute top-0 right-0 z-10 transition ease-in-out duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="flex max-w-screen-xl mx-auto items-center justify-between px-8 trasition ease-in-out duration-500">

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
              {menuItems.map((item) => (
                <li key={item.title}>
                  <Link href={item.link}>
                    <span className="text-white">{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

        </div>
      </div>
    </header>
  );
}
