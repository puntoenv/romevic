import { LoadingLogo } from "@/components/app";
import Image from "next/image";

export default function Page() {
  return (
    <LoadingLogo>
      <div className="fade-in ">
        <Image
          className="h-[300px] md:h-[400px] xl:h-[500px] w-full"
          src="/thevision.jpg"
          alt="la-vision"
          height={720}
          width={1440}
          loading="eager"
        />
        <div className="flex flex-col items-center justify-center gap-4 p-8">
          <h1 className="text-3xl md:text-6xl font-bold text-sky-500">
            La Visión
          </h1>
          <p className="text-2xl md:text-4xl text-pretty">
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
