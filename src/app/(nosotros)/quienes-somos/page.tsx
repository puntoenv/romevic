import { LoadingLogo } from "@/components/app";
import Image from "next/image";

export default function Page() {
  return (
    <LoadingLogo>
      <div className="fade-in ">
        <Image
          className="h-[200px] md:h-[400px] xl:h-[600px] w-full"
          src="/whoarewe.jpg"
          alt="la-vision"
          height={1000}
          width={1000}
        />
        <div className="flex flex-col items-center justify-center gap-4 p-8">
          <h1 className="text-2xl md:text-4xl font-bold text-sky-500">
            ¿Quiénes somos?
          </h1>
          <p className="text-xl md:text-2xl text-pretty">
            Somos una empresa con décadas de experiencia en importación y
            comercialización de insumos químicos para la industria textil.
            Ubicados en el corazón de San Juan de Lurigancho, nos esforzamos en
            brindar productos de alta calidad y un servicio post-venta dedicado,
            guiando a nuestros clientes en cada paso del proceso.
          </p>
        </div>
      </div>
    </LoadingLogo>
  );
}
