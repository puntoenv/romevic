"use client";

import { notFound, useSearchParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import directColors from "@/data/products/direct-colors.json";
import acidColors from "@/data/products/acid-colors.json";
import disperseColors from "@/data/products/disperse-colors.json";
import basicColors from "@/data/products/basic-colors.json";
import reactiveColors from "@/data/products/reactive-colors.json";

interface Props {
  category: string;
}

const categories = {
  directos: "Directo",
  acidos: "Ácido",
  dispersos: "Disperso",
  basicos: "Básico",
  reactivos: "Reactivo",
};

const colors = {
  directos: directColors,
  acidos: acidColors,
  dispersos: disperseColors,
  basicos: basicColors,
  reactivos: reactiveColors,
};

export const ColorCard = ({ category }: Props) => {
  const searchParams = useSearchParams();
  const color = searchParams.get("color");

  const colorData = colors[category as keyof typeof colors]?.colors.find(
    (item) => item.title === color,
  );

  if (!colorData || colorData?.dontShow) {
    notFound();
  }

  return (
    <div className="fade-in grid place-content-center py-8 px-4">
      <Link href={`/colorantes-textiles?colores=${category}`}>
        <Button variant="ghost" className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver al catálogo
        </Button>
      </Link>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 p-8 bg-muted rounded-lg w-full text-nowrap">
        <div className="space-y-6">
          <div>
            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mb-2">
              {colorData.titulo}
            </h1>
          </div>

          <div className="bg-muted rounded-lg">
            <h2 className="text-sm md:text-lg lg:text-xl font-semibold mb-4">
              Especificaciones Técnicas
            </h2>
            <dl className="grid gap-2 text-sm md:text-lg lg:text-xl">
              <div className="grid grid-cols-2">
                <dt className="font-medium">Categoría:</dt>
                <dd>{categories[category as keyof typeof categories]}</dd>
              </div>
              <div className="grid grid-cols-2">
                <dt className="font-medium">Código:</dt>
                <dd>{colorData.name.split(" ").slice(1).join(" ")}</dd>
              </div>
            </dl>
          </div>
        </div>
        <Image
          loading="eager"
          src={colorData.image}
          className="rounded-lg shadow-lg md:h-64 w-full"
          height={720}
          width={1440}
          alt="color-image"
        />
      </div>
    </div>
  );
};
