import { LoadingLogo } from "@/components/app";
import Image from "next/image";

export default function Page() {
  return (
    <LoadingLogo>
      <div className="fade-in ">
        <Image
          className="h-[300px] md:h-[400px] xl:h-[500px] w-full"
          src="/ourmission.jpg"
          alt="la-vision"
          height={720}
          width={1000}
          loading="eager"
        />
        <div className="flex flex-col items-center justify-center gap-4 p-8">
          <h1 className="text-3xl md:text-6xl font-bold text-sky-500">
            Nuestra Misión
          </h1>
          <p className="text-2xl md:text-4xl text-pretty">
            Nuestra misión es ser la empresa líder en la fabricación de
            colorantes textiles en el Perú, brindando productos de alta calidad
            y un servicio personalizado a nuestros clientes.
          </p>
        </div>
      </div>
    </LoadingLogo>
  );
}
