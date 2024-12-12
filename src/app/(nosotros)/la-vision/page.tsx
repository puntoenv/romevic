import { LoadingLogo } from "@/components/app";
import Image from "next/image";

export default function Page() {
  return (
    <LoadingLogo>
      <div className="fade-in ">
        <Image
          className="h-[200px] md:h-[400px] xl:h-[600px] w-full"
          src="/thevision.jpg"
          alt="la-vision"
          height={1000}
          width={1000}
        />
        <div className="flex flex-col items-center justify-center gap-4 p-8">
          <h1 className="text-2xl md:text-4xl font-bold text-sky-500">
            La Visión
          </h1>
          <p className="text-xl md:text-2xl text-pretty">
            Queremos ser tu primera opción en insumos textiles, reconocidos por
            nuestra innovación y compromiso con la calidad. Aspiramos a expandir
            nuestra presencia y colaborar con nuestros clientes en cada desafío,
            diferenciándonos por un servicio excepcional y un enfoque basado en
            la mejora continua.
          </p>
        </div>
        {/* </Card> */}
      </div>
    </LoadingLogo>
  );
}
