import Image from "next/image";
import { Location, Mail } from "../icons";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="max-sm:text-center flex xl:justify-center w-full py-6 bg-primary text-gray-950 font-bold">
      <div className="px-4 flex flex-col md:flex-row justify-between w-full gap-y-4">
        <div className="w-full flex flex-col md:flex-row justify-start md:justify-between xl:px-10 items-center md:items-start gap-4">
          <div className="flex justify-center flex-shrink-0 items-center gap-1">
            {/* <TestTube className="size-8" /> */}
            <Image src="/icon.png" alt="logo" width={20} height={20} />
            <span className="font-bold">Romevic SRL</span>
          </div>
          <ul className="flex flex-col md:flex-row font-bold text-sm justify-center items-center md:items-start gap-4">
            <Link
              target="_blank"
              href="mailto:romevicsrl@hotmail.com"
              rel="noopener noreferrer"
            >
              <li className="flex gap-x-1 justify-center md:justify-start items-center">
                <Mail className="size-4" />
                <span className="w-min text-nowrap">
                  romevicsrl@hotmail.com
                </span>
              </li>
            </Link>
            {/* <Link
              target="_blank"
              href="https://wa.me/51986526366"
              rel="noopener noreferrer"
            >
              <li className="flex gap-x-1 justify-center md:justify-start items-center">
                <Whatsapp className="size-4" />
                <span>+51 986 526 366</span>
              </li>
            </Link> */}
            <Link
              target="_blank"
              href="https://maps.app.goo.gl/KN2eppAPFehKn1hV6"
              rel="noopener roreferrer"
            >
              <li className="flex gap-x-1 justify-center md:justify-start">
                <Location className="size-4" />
                <span className="w-min text-nowrap">
                  Kilca 201, San Juan de Lurigancho
                </span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  );
};
