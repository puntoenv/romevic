"use client";

import { notFound, useSearchParams } from "next/navigation";
import { useEffect } from "react";
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
  direct: "Directo",
};

const colors = {
  direct: directColors,
  acid: acidColors,
  disperse: disperseColors,
  basic: basicColors,
  reactive: reactiveColors,
};

export const ColorCard = ({ category }: Props) => {
  const searchParams = useSearchParams();
  const color = searchParams.get("color");

  const colorData = colors[category as keyof typeof colors]?.colors.find(
    (item) => item.title === color,
  );

  useEffect(() => {
    console.log(colorData?.image);
  });

  if (!colorData || colorData?.dontShow) {
    notFound();
  }

  return (
    <div className="fade-in grid place-content-center py-8 px-4">
      <Link href={`/products?colors=${category}`}>
        <Button variant="ghost" className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver al catálogo
        </Button>
      </Link>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-8 bg-muted rounded-lg w-full text-nowrap">
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold mb-2">{colorData.titulo}</h1>
          </div>

          <div className="bg-muted rounded-lg">
            <h2 className="text-xl font-semibold mb-4">
              Especificaciones Técnicas
            </h2>
            <dl className="grid gap-2">
              <div className="grid grid-cols-2">
                <dt className="font-medium">Categoría:</dt>
                <dd>{categories[category as keyof typeof categories]}</dd>
              </div>
              <div className="grid grid-cols-2">
                <dt className="font-medium">Código HEX:</dt>
                <dd>{colorData.hex}</dd>
              </div>
            </dl>
          </div>
        </div>
        <Image
          src={colorData.image}
          className="rounded-lg shadow-lg h-64 w-full"
          style={{}}
          height={500}
          width={500}
          alt="color-image"
        />
      </div>
    </div>
  );
};
