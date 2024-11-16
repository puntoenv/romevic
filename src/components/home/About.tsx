"use client";

import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

type AccordionValues = "item-1" | "item-2" | "item-3";

export const About = () => {
  const [value, setValue] = useState<AccordionValues>();

  return (
    <div className="flex justify-center items-center p-4 md:py-16 xl:px-64">
      <section className="container w-full flex justify-center items-center border px-4 rounded">
        <Accordion
          onValueChange={(newValue) => setValue(newValue as AccordionValues)}
          type="single"
          collapsible
          className="w-full py-2"
          value={value}
        >
          <AccordionItem value="item-1" className="py-2 border-none">
            <AccordionTrigger
              className={clsx(
                "text-gray-950 text-lg md:text-2xl font-bold hover:no-underline px-4 bg-sky-500/10 rounded",
                {
                  "rounded-t rounded-b-none": value === "item-1",
                },
              )}
            >
              Quienes Somos
            </AccordionTrigger>
            <AccordionContent className="flex flex-col sm:flex-row justify-center items-center gap-4 bg-sky-500/10 rounded-b px-4">
              <p className="md:text-lg text-pretty text-black/75">
                Somos una empresa con décadas de experiencia en importación y
                comercialización de insumos químicos para la industria textil.
                Ubicados en el corazón de San Juan de Lurigancho, nos esforzamos
                en brindar productos de alta calidad y un servicio post-venta
                dedicado, guiando a nuestros clientes en cada paso del proceso.
              </p>
              <Image
                className="rounded border w-full sm:w-1/3"
                src="/whoarewe.jpg"
                width={500}
                height={250}
                alt="Quienes Somos"
              />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="py-2 border-none">
            <AccordionTrigger
              className={clsx(
                "text-gray-950 text-lg md:text-2xl font-bold hover:no-underline px-4 bg-sky-500/10 rounded",
                {
                  "rounded-t rounded-b-none": value === "item-2",
                },
              )}
            >
              Nuestra Misión
            </AccordionTrigger>
            <AccordionContent className="bg-sky-500/10 px-4 rounded-b flex flex-col sm:flex-row justify-center items-center gap-4">
              <p className="md:text-lg text-pretty text-black/75">
                Nos dedicamos a empoderar a la industria textil con productos y
                asesorías que sumen valor y excelencia. Nos comprometemos a
                proporcionar soluciones efectivas que respaldan a nuestros
                clientes, desde pequeñas empresas hasta grandes industrias, para
                que cada proyecto logre resultados de calidad a precios
                competitivos.
              </p>
              <Image
                className="rounded border w-full sm:w-1/3"
                src="/ourmission.jpg"
                width={500}
                height={250}
                alt="Nuestra Misión"
              />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="py-2 border-none">
            <AccordionTrigger
              className={clsx(
                "text-gray-950 text-lg md:text-2xl font-bold hover:no-underline px-4 bg-sky-500/10 rounded",
                {
                  "rounded-t rounded-b-none": value === "item-3",
                },
              )}
            >
              La Visión
            </AccordionTrigger>
            <AccordionContent className="flex flex-col sm:flex-row justify-center items-center gap-4 bg-sky-500/10 px-4 rounded-b">
              <p className="md:text-lg text-pretty text-black/75">
                Queremos ser tu primera opción en insumos textiles, reconocidos
                por nuestra innovación y compromiso con la calidad. Aspiramos a
                expandir nuestra presencia y colaborar con nuestros clientes en
                cada desafío, diferenciándonos por un servicio excepcional y un
                enfoque basado en la mejora continua.
              </p>
              <Image
                className="rounded border w-full sm:w-1/3"
                src="/thevision.jpg"
                width={500}
                height={250}
                alt="La Visión"
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
};
