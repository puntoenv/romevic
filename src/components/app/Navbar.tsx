"use client";

import clsx from "clsx";
import { Phone, ShoppingBag } from "lucide-react";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-x-1 md:gap-x-2 font-bold">
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
        <Building size={15} />
        <span className="hidden md:block">Nosotros</span>
      </Link> */}
      <Link
        href="/colorantes-textiles?colores=acidos"
        className={clsx(
          "flex justify-center items-center gap-x-2 py-1 px-2 hover:bg-sky-500/10 rounded transition-colors border border-transparent text-sm",
          {
            "bg-sky-500/10": pathname === "/colorantes-textiles",
            "pointer-events-none": pathname === "/colorantes-textiles",
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
      <Link
        href="/contactanos"
        className={clsx(
          "flex justify-center items-center gap-x-2 py-1 px-2 hover:bg-sky-500/10 rounded transition-colors border border-transparent text-sm",
          {
            "bg-black/10": pathname === "/contactanos",
          },
        )}
      >
        <Phone size={15} />
        <span className="hidden md:block">Contáctanos</span>
      </Link>
    </nav>
  );
}
