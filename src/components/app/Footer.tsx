import Image from "next/image";
import { Facebook, Instagram, Location, Mail, TikTok } from "../icons";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="max-sm:text-center flex xl:justify-center w-full py-6 bg-primary text-gray-950 font-bold">
      <div className="px-4 flex flex-col lg:flex-row justify-between w-full gap-y-4">
        <div className="w-full flex flex-col lg:flex-row justify-start lg:justify-between xl:px-10 items-center lg:items-start gap-4">
          <div className="flex justify-center flex-shrink-0 items-center gap-1">
            {/* <TestTube className="size-8" /> */}
            <Image src="/icon.png" alt="logo" width={20} height={20} />
            <span className="font-bold">Romevic SRL</span>
          </div>
          <ul className="flex flex-col lg:flex-row font-bold text-sm justify-center items-center lg:items-start gap-4">
            <Link
              target="blank"
              href="https://www.facebook.com/romevic.srl.7"
              rel="noopener noreferrer"
            >
              <li className="flex gap-x-1 justify-center md:justify-start">
                <Facebook className="size-4" />
                <span className="text-nowrap">Facebook</span>
              </li>
            </Link>
            <Link
              target="blank"
              href="https://www.tiktok.com/@romevic.srl"
              rel="noopener noreferrer"
            >
              <li className="flex gap-x-1 justify-center md:justify-start">
                <TikTok className="size-4" />
                <span className="text-nowrap">TikTok</span>
              </li>
            </Link>
            <Link
              target="blank"
              href="https://www.tiktok.com/@romevic.srl"
              rel="noopener noreferrer"
            >
              <li className="flex gap-x-1 justify-center md:justify-start">
                <Instagram className="size-4" />
                <span className="text-nowrap">Instagram</span>
              </li>
            </Link>
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
            <Link
              target="_blank"
              href="https://maps.app.goo.gl/KN2eppAPFehKn1hV6"
              rel="noopener noreferrer"
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
