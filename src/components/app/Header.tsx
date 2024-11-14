"use client";

import Link from "next/link";
import { TestTube } from "../icons";
// import Navbar from "./Navbar";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export const Header = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <header className="px-2 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60 flex justify-center">
      <div className="container flex h-14 items-center justify-between">
        <Link
          aria-disabled={pathname === "/" ? "true" : "false"}
          className={clsx(
            "flex justify-center items-center px-2 space-x-1 md:space-x-2",
            { "pointer-events-none": pathname === "/" },
          )}
          href="/"
        >
          <TestTube className="size-6" />
          <span className="font-bold">Romevic</span>
        </Link>
        {/* <Navbar /> */}
      </div>
    </header>
  );
};
