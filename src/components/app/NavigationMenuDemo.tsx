"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  // navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Building, Phone, ShoppingBag } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export function NavigationMenuDemo() {
  const pathname = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList className="">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="p-2">
            <div className="flex justify-center items-center gap-2 font-semibold">
              <Building size={15} />
              <span className="hidden md:block">Nosotros</span>
            </div>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-1 md:gap-3 w-[130px] md:w-[410px] p-2 md:p-4">
              <ListItem
                href="/quienes-somos"
                // title="Quienes Somos"
                className={clsx("px-2 md:px-4", {
                  "pointer-events-none": pathname === "/quienes-somos",
                })}
              >
                <span className="text-sky-500 hover:text-sky-500 font-bold text-center text-nowrap md:text-left">
                  Quienes Somos
                </span>
                <span className="font-semibold hidden md:block">
                  Somos una empresa con décadas de experiencia en importación y
                  comercialización de insumos químicos para la industria textil.
                  Ubicados en el corazón de San Juan de Lurigancho, nos
                  esforzamos en brindar productos de alta calidad y un servicio
                  post-venta dedicado, guiando a nuestros clientes en cada paso
                  del proceso.
                </span>
              </ListItem>
              <ListItem
                href="/nuestra-mision"
                className={clsx("px-2 md:px-4", {
                  "pointer-events-none": pathname === "/nuestra-mision",
                })}
              >
                <span className="text-sky-500 hover:text-sky-500 font-bold text-center md:text-left">
                  Nuestra Misión
                </span>
                <span className="font-semibold hidden md:block">
                  Nos dedicamos a empoderar a la industria textil con productos
                  y asesorías que sumen valor y excelencia. Nos comprometemos a
                  proporcionar soluciones efectivas que respaldan a nuestros
                  clientes, desde pequeñas empresas hasta grandes industrias,
                  para que cada proyecto logre resultados de calidad a precios
                  competitivos.
                </span>
              </ListItem>
              <ListItem
                href="/la-vision"
                className={clsx("px-2 md:px-4", {
                  "pointer-events-none": pathname === "/la-vision",
                })}
              >
                <span className="text-sky-500 hover:text-sky-500 font-bold text-center md:text-left">
                  La Visión
                </span>
                <span className="font-semibold hidden md:block">
                  Queremos ser tu primera opción en insumos textiles,
                  reconocidos por nuestra innovación y compromiso con la
                  calidad. Aspiramos a expandir nuestra presencia y colaborar
                  con nuestros clientes en cada desafío, diferenciándonos por un
                  servicio excepcional y un enfoque basado en la mejora
                  continua.
                </span>
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="ml-10">
          <NavigationMenuTrigger className="p-2">
            <div className="flex justify-center items-center gap-2 font-semibold">
              <ShoppingBag size={15} />
              <span className="hidden md:block">Nuestros Productos</span>
            </div>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="">
            <ul className="grid w-[130px] gap-3 md:w-[410px] md:grid-cols-2 p-2 md:p-4">
              <ListItem
                // title="Colores Directos"
                href="/colorantes-textiles?colores=directos"
                className="flex justify-center items-center relative hover:opacity-100 hover:bg-transparent py-6 md:py-4"
              >
                <Image
                  src="/directs.jpg"
                  alt="Colores Directos"
                  width={200}
                  height={100}
                  className="absolute inset-0 object-cover w-full h-full rounded-md opacity-75"
                />
                <span className="absolute md:text-nowrap top-0 left-0 right-0 bottom-0 grid place-content-center text-white font-bold rounded-md hover:bg-foreground/10 transition-colors text-center px-1">
                  Colores Directos
                </span>
              </ListItem>
              <ListItem
                // title="Colores Reactivos"
                href="/colorantes-textiles?colores=reactivos"
                className="flex justify-center items-center relative hover:opacity-100 hover:bg-transparent py-6 md:py-4"
              >
                <Image
                  src="/reactives.jpeg"
                  alt="Colores Reactivos"
                  width={200}
                  height={100}
                  className="absolute inset-0 object-cover w-full h-full rounded-md opacity-75"
                />
                <span className="absolute md:text-nowrap top-0 left-0 right-0 bottom-0 grid place-content-center text-white font-bold rounded-md hover:bg-foreground/10 transition-colors text-center px-1">
                  Colores Reactivos
                </span>
              </ListItem>
              <ListItem
                // title="Colores Ácidos"
                href="/colorantes-textiles?colores=acidos"
                className="flex justify-center items-center relative hover:opacity-100 hover:bg-transparent py-6 md:py-4"
              >
                <Image
                  src="/acids.jpeg"
                  alt="Colores Ácidos"
                  width={200}
                  height={100}
                  className="absolute inset-0 object-cover w-full h-full rounded-md opacity-75"
                />
                <span className="absolute md:text-nowrap top-0 left-0 right-0 bottom-0 grid place-content-center text-white font-bold rounded-md hover:bg-foreground/10 transition-colors text-center px-1">
                  Colores Ácidos
                </span>
              </ListItem>
              <ListItem
                // title="Colores Dispersos"
                href="/colorantes-textiles?colores=dispersos"
                className="flex justify-center items-center relative hover:opacity-100 hover:bg-transparent py-6 md:py-4"
              >
                <Image
                  src="/disperses.jpg"
                  alt="Colores Dispersos"
                  width={200}
                  height={100}
                  className="absolute inset-0 object-cover w-full h-full rounded-md opacity-75"
                />
                <span className="absolute md:text-nowrap top-0 left-0 right-0 bottom-0 grid place-content-center text-white font-bold rounded-md hover:bg-foreground/10 transition-colors text-center px-1">
                  Colores Dispersos
                </span>
              </ListItem>
              <ListItem
                // title="Colores Básicos"
                href="/colorantes-textiles?colores=basicos"
                className="flex justify-center items-center relative hover:opacity-100 hover:bg-transparent py-6 md:py-4"
              >
                <Image
                  src="/basics.webp"
                  alt="Colores Básicos"
                  width={200}
                  height={100}
                  className="absolute inset-0 object-cover w-full h-full rounded-md opacity-75"
                />
                <span className="absolute md:text-nowrap top-0 left-0 right-0 bottom-0 grid place-content-center text-white font-bold rounded-md hover:bg-foreground/10 transition-colors text-center px-1">
                  Colores Básicos
                </span>
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="p-2">
          <Link href="/contactanos" legacyBehavior passHref>
            <NavigationMenuLink className="flex justify-center items-center gap-2 font-semibold text-sm">
              <Phone size={15} />
              <span className="hidden md:block">Contáctanos</span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
