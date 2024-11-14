import { Location, Mail, TestTube, Whatsapp } from "../icons";

export const Footer = () => {
  return (
    <footer className="max-sm:text-center flex justify-center w-full py-6 bg-primary  text-white">
      <div className="container">
        <div className="flex flex-col justify-center items-center lg:flex-row gap-4 lg:gap-16">
          <div className="flex flex-col lg:flex-row justify-center flex-shrink-0 items-center gap-1">
            <div className="flex justify-center items-center gap-2">
              <div>
                <TestTube className="size-8" />
              </div>
              <span className="font-bold">Romevic</span>
            </div>
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
};
