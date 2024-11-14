export const Hero = () => {
  return (
    <section className="fade-in-15 text-center grid place-content-center w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-primary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col justify-center items-center">
          <div className="text-white flex flex-col gap-y-2 md:gap-y-4">
            <h1 className="font-bold tracking-tighter text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Transforma tus telas y tus prendas con Romevic
            </h1>
            <em className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              Liderando en insumos para la industria textil desde 1993
            </em>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
              Nos dedicamos a traer soluciones químicas de calidad que impulsan
              tus proyectos con seguridad y confianza.
            </p>
          </div>
          <div className="space-x-4"></div>
        </div>
      </div>
    </section>
  );
};
