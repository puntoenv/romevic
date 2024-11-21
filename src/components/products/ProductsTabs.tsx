"use client";

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
    params.set("colors", newColor.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <Tabs
      defaultValue={searchParams.get("colors") ?? "direct"}
      className="flex flex-col justify-center items-center ml-2 font-semibold text-xl md:text-2xl xl:text-3xl p-8 md:px-16 xl:px-32"
      onValueChange={(value) => createPageURL(value)}
    >
      <TabsList className="w-min">
        <TabsTrigger value="direct">Colores Directos</TabsTrigger>
        <TabsTrigger value="basic">Colores Básicos</TabsTrigger>
        <TabsTrigger value="disperse">Colores Dispersos</TabsTrigger>
        <TabsTrigger value="reactive">Colores Reactivos</TabsTrigger>
        <TabsTrigger value="acid">Colores Ácidos</TabsTrigger>
      </TabsList>
      <TabsContent value="direct" className="fade-in w-full">
        <ProductsList colors={directColors} name="Colorantes Directos" />
      </TabsContent>
      <TabsContent value="basic" className="fade-in w-full">
        <ProductsList colors={basicColors} name="Colorantes Básicos" />
      </TabsContent>
      <TabsContent value="disperse" className="fade-in w-full">
        <ProductsList colors={disperseColors} name="Colorantes Dispersos" />
      </TabsContent>
      <TabsContent value="reactive" className="fade-in w-full">
        <ProductsList colors={reactiveColors} name="Colorantes Reactivos" />
      </TabsContent>
      <TabsContent value="acid" className="fade-in w-full">
        <ProductsList colors={acidColors} name="Colorantes Ácidos" />
      </TabsContent>
    </Tabs>
  );
};
