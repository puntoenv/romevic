"use client";

type Category = "basicos" | "acidos" | "directos" | "dispersos" | "reactivos";

interface Color {
  name: string;
  hex: string;
  title: string;
  id: number;
  titulo: string;
}

interface Product {
  category: Category;
  colors: Color[];
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import directColors from "@/data/products/direct-colors.json";
import acidColors from "@/data/products/acid-colors.json";
import basicColors from "@/data/products/basic-colors.json";
import disperseColors from "@/data/products/disperse-colors.json";
import reactiveColors from "@/data/products/reactive-colors.json";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ProductsList } from "./ProductsList";

export const ProductsTabs = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const createPageURL = (newColor: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("colores", newColor.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <Tabs
      defaultValue={searchParams.get("colors") ?? "acidos"}
      className="flex flex-col justify-center items-center ml-2 font-semibold text-xl md:text-2xl xl:text-3xl p-8 md:px-16 xl:px-32"
      onValueChange={(value) => createPageURL(value)}
    >
      <TabsList className="flex flex-wrap h-min max-md:py-2">
        <TabsTrigger className="text-xs md:text-base xl:text-lg" value="acidos">
          Colores Ácidos
        </TabsTrigger>
        <TabsTrigger
          className="text-xs md:text-base xl:text-lg"
          value="directos"
        >
          Colores Directos
        </TabsTrigger>
        <TabsTrigger
          className="text-xs md:text-base xl:text-lg"
          value="reactivos"
        >
          Colores Reactivos
        </TabsTrigger>
        <TabsTrigger
          className="text-xs md:text-base xl:text-lg"
          value="dispersos"
        >
          Colores Dispersos
        </TabsTrigger>
        <TabsTrigger
          className="text-xs md:text-base xl:text-lg"
          value="basicos"
        >
          Colores Básicos
        </TabsTrigger>
      </TabsList>
      <TabsContent value="acidos" className="fade-in w-full">
        <ProductsList
          products={acidColors as Product}
          name="Colorantes Ácidos"
        />
      </TabsContent>
      <TabsContent value="directos" className="fade-in w-full">
        <ProductsList
          products={directColors as Product}
          name="Colorantes Directos"
        />
      </TabsContent>
      <TabsContent value="reactivos" className="fade-in w-full">
        <ProductsList
          products={reactiveColors as Product}
          name="Colorantes Reactivos"
        />
      </TabsContent>
      <TabsContent value="dispersos" className="fade-in w-full">
        <ProductsList
          products={disperseColors as Product}
          name="Colorantes Dispersos"
        />
      </TabsContent>
      <TabsContent value="basicos" className="fade-in w-full">
        <ProductsList
          products={basicColors as Product}
          name="Colorantes Básicos"
        />
      </TabsContent>
    </Tabs>
  );
};
