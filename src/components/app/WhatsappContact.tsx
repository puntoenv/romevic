import WhatsappLogo from "../icons/WhatsappLogo";

export const WhatsappContact = () => {
  return (
    <div className="md:fixed mb-12 md:bottom-6 lg:bottom-12 md:right-2 lg:right-4 flex flex-col items-center justify-center md:items-end gap-y-4">
      <a
        target="_blank"
        href="https://wa.me/51991360501"
        rel="noopener noreferrer"
        className="w-fit flex items-center justify-end bg-green-400 font-bold rounded-full py-1 px-3 gap-x-2 shadow-md shadow-green-600 border border-green-500 text-gray-950/80 text-sm md:transition-all md:hover:bg-green-500 md:hover:border-green-600 md:hover:shadow-green-700 md:hover:scale-105 md:duration-200"
      >
        <WhatsappLogo className="size-4" />
        <p className="">
          Ventas<span className="hidden md:inline">: 991-360-501</span>
        </p>
      </a>

      <a
        target="_blank"
        href="https://wa.me/51998156086"
        rel="noopener noreferrer"
        className="w-fit flex items-center justify-end bg-green-400 font-bold rounded-full py-1 px-3 gap-x-2 shadow-md shadow-green-600 border border-green-500 text-gray-950/80 text-sm md:transition-all md:hover:bg-green-500 md:hover:border-green-600 md:hover:shadow-green-700 md:hover:scale-105 md:duration-200"
      >
        <WhatsappLogo className="size-4" />
        <p className="">
          Laboratorio<span className="hidden md:inline">: 998-156-086</span>
        </p>
      </a>
    </div>
  );
};
