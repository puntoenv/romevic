import { Whatsapp } from "../icons";

export const WhatsappContact = () => {
  return (
    <a
      target="_blank"
      href="https://wa.me/51986526366"
      rel="noopener noreferrer"
      className="fixed bottom-20 lg:bottom-5 right-4 xl:right-12 z-50 flex items-center justify-center h-8 bg-green-500 font-bold rounded-full py-5 px-2 xl:px-4 gap-x-2 shadow-md shadow-green-900 border border-green-500 text-gray-900/90 xl:hover:border-green-600 xl:hover:bg-green-600 xl:hover:text-white xl:transition-all xl:hover:scale-105 xl:duration-300"
    >
      <Whatsapp className="" />
      <span className="hidden xl:block">+51 986 526 366</span>
    </a>
  );
};
