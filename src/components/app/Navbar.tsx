"use client";

import clsx from "clsx";
import { ShoppingBag } from "lucide-react";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-x-4 md:gap-x-8 font-bold">
      {/* <Link
        href="/"
        className={clsx(
          "flex justify-center items-center gap-x-2 py-1 px-2 hover:bg-sky-500/10 rounded transition-colors border border-transparent text-sm",
          {
            "bg-sky-500/10": pathname === "/",
            "pointer-events-none": pathname === "/",
          },
        )}
      >
        <Home size={15} />
        <span className="hidden md:block">Inicio</span>
      </Link> */}
      <Link
        href="/products?colors=acid"
        className={clsx(
          "flex justify-center items-center gap-x-2 py-1 px-2 hover:bg-sky-500/10 rounded transition-colors border border-transparent text-sm",
          {
            "bg-sky-500/10": pathname === "/products",
            "pointer-events-none": pathname === "/products",
          },
        )}
      >
        <ShoppingBag size={15} />
        <span className="hidden md:block">Nuestros Productos</span>
      </Link>
      {/* <Link
        href="/"
        className={clsx(
          "flex justify-center items-center gap-x-2 py-1 px-2 hover:bg-sky-500/10 rounded transition-colors border border-transparent text-sm",
          {
            "bg-black/10": pathname === "/news",
          },
        )}
      >
        <Newspaper size={15} />
        <span className="hidden md:block">Últimas Noticias</span>
      </Link> */}
      {/* <Link
        href="/"
        className={clsx(
          "flex justify-center items-center gap-x-2 py-1 px-2 hover:bg-sky-500/10 rounded transition-colors border border-transparent text-sm",
          {
            "bg-black/10": pathname === "/contact",
          },
        )}
      >
        <Phone size={15} />
        <span className="hidden md:block">Contáctanos</span>
      </Link> */}
    </nav>
  );
}
