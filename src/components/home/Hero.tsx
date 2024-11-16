"use client";

import Image from "next/image";

export const Hero = () => {
  return (
    <>
      <div className="relative bg-gradient-to-t from-transparent via-white to-primary image pb-32 md:pb-48 lg:pb-64">
        <section className="w-full px-4 py-8 md:py-8 md:px-4 lg:py-16 lg:px-8 xl:px-16">
          <div className="text-gray-950 flex flex-col gap-y-2 md:gap-y-4">
            <h1 className="text-center font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Transforma tus telas y prendas con Romevic
            </h1>
            <em className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              Liderando en insumos para la industria textil desde 1993
            </em>
            <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl">
              Nos dedicamos a traer soluciones químicas de calidad que impulsan
              tus proyectos con seguridad y confianza.
            </p>
          </div>
        </section>
        <div className="flex absolute bottom-0 left-0 right-0 items-center -z-10">
          <Image
            src="/dye-1.jpeg"
            alt="hero"
            width={600}
            height={300}
            className="h-64 md:h-64 lg:h-80 grow hidden xl:block"
          />
          <Image
            src="/dye-2.jpeg"
            alt="hero"
            width={600}
            height={300}
            className="md:h-64 lg:h-80 hidden md:block grow"
          />
          <Image
            src="/dye-3.jpeg"
            alt="hero"
            width={600}
            height={300}
            className="md:h-64 lg:h-80 grow"
          />
        </div>
      </div>
    </>
  );
};
