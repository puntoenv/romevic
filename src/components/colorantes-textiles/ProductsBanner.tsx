import Image from "next/image";

export const ProductsBanner = () => {
  return (
    <section className="relative">
      <Image
        className="w-full h-24 md:h-full"
        src="/products-banner.jpg"
        alt="Products Banner"
        width={2000}
        height={500}
        loading="eager"
      />
      <div className="grid place-content-center text-2xl md:text-4xl xl:text-8xl font-semibold absolute top-0 left-0 right-0 bottom-0">
        <h1>Colorantes Textiles</h1>
      </div>
    </section>
  );
};
