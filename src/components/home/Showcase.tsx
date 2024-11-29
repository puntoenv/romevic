import Image from "next/image";
import Link from "next/link";

export const Showcase = () => {
  return (
    <section className="flex justify-center items-center w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
          Nuestros Productos
        </h2>
        <div className="flex justify-center items-center gap-5 md:gap-10 xl:gap-20 flex-wrap">
          <Link
            href="/products?colors=acid"
            className="relative group overflow-hidden rounded-lg"
          >
            <Image
              alt="Jeans teñidos con un patrón de tie-dye colorido"
              className="object-cover w-full h-60 transition-all max-md:scale-150 group-hover:scale-150"
              height={300}
              src="/acids.jpeg?height=300&width=400"
              style={{
                aspectRatio: "400/300",
                objectFit: "contain",
              }}
              width={400}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <p className="text-white text-lg font-bold">Colorantes Ácidos</p>
            </div>
          </Link>
          <Link
            href="/products?colors=direct"
            className="relative group overflow-hidden rounded-lg"
          >
            <Image
              alt="Variedad de accesorios teñidos incluyendo bufandas y bolsos"
              className="object-cover w-full h-60 transition-all max-md:scale-150 group-hover:scale-150"
              height={300}
              src="/directs.jpg?height=300&width=400"
              style={{
                aspectRatio: "400/300",
                objectFit: "contain",
              }}
              width={400}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <p className="text-white text-lg font-bold">
                Colorantes Directos
              </p>
            </div>
          </Link>
          <Link
            href="/products?colors=reactive"
            className="relative group overflow-hidden rounded-lg"
          >
            <Image
              alt="Variedad de accesorios teñidos incluyendo bufandas y bolsos"
              className="object-cover w-full h-60 transition-all max-md:scale-150 group-hover:scale-150"
              height={300}
              src="/reactives.jpeg?height=300&width=400"
              style={{
                aspectRatio: "400/300",
                objectFit: "contain",
              }}
              width={400}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <p className="text-white text-lg font-bold">
                Colorantes Reactivos
              </p>
            </div>
          </Link>
          <Link
            href="/products?colors=disperse"
            className="relative group overflow-hidden rounded-lg"
          >
            <Image
              alt="Variedad de accesorios teñidos incluyendo bufandas y bolsos"
              className="object-cover w-full h-60 transition-all max-md:scale-150 group-hover:scale-150"
              height={300}
              src="/disperses.jpeg?height=300&width=400"
              style={{
                aspectRatio: "400/300",
                objectFit: "contain",
              }}
              width={400}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <p className="text-white text-lg font-bold">
                Colorantes Dispersos
              </p>
            </div>
          </Link>
          <Link
            href="/products?colors=basic"
            className="relative group overflow-hidden rounded-lg"
          >
            <Image
              alt="Camiseta teñida de varios colores vibrantes"
              className="object-cover w-full h-60 transition-all max-md:scale-150 group-hover:scale-150"
              height={300}
              src="/basics.jpeg?height=300&width=400"
              style={{
                aspectRatio: "400/300",
                objectFit: "contain",
              }}
              width={400}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <p className="text-white text-lg font-bold">Colorantes Básicos</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
