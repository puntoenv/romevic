import { Colors, Location, Mail, Whatsapp } from "./icons";

export default function Footer() {
  return (
    <footer className="max-sm:text-center flex justify-center w-full py-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white">
      <div className="container">
        <div className="flex flex-col justify-center items-center sm:flex-row gap-1 lg:gap-8">
          <div className="flex flex-col lg:flex-row justify-center flex-shrink-0 items-center gap-1">
            <div className="flex justify-center items-center gap-2">
              <Colors className="size-6" />
              <span className="font-bold">Romevic</span>
            </div>
            <p className="text-sm flex justify-center items-center">
              <span className="hidden lg:block"> - </span>
              Transformando el mundo, un color a la vez.
            </p>
          </div>
          <ul className="flex flex-col lg:flex-row font-bold text-sm justify-center items-center gap-1 md:gap-4">
            <a
              target="_blank"
              href="mailto:vlen2458@hotmail.com"
              rel="noopener noreferrer"
            >
              <li className="flex gap-x-1 justify-center md:justify-start items-center">
                <Mail className="size-4" />
                <span>vlen2458@hotmail.com</span>
              </li>
            </a>
            <a
              target="_blank"
              href="https://wa.me/51986526366"
              rel="noopener noreferrer"
            >
              <li className="flex gap-x-1 justify-center md:justify-start items-center">
                <Whatsapp className="size-4" />
                <span>+51 986 526 366</span>
              </li>
            </a>
            <a
              target="_blank"
              href="https://maps.app.goo.gl/KN2eppAPFehKn1hV6"
              rel="noopener roreferrer"
            >
              <li className="flex gap-x-1 justify-center md:justify-start items-center">
                <Location className="size-4" />
                <span>Kilca 201, San Juan de Lurigancho</span>
              </li>
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
}
