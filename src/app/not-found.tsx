"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Beaker } from "lucide-react";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-[calc(100vh-57px)] bg-background flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-card rounded-lg shadow-2xl p-8 text-center space-y-6">
        <div className="flex justify-center space-x-4 mb-6">
          <Beaker className="h-12 w-12 text-sky-600" />
          <Beaker className="h-12 w-12 text-sky-200" />
          <Beaker className="h-12 w-12 text-sky-800" />
        </div>

        <h1 className="text-6xl font-bold text-primary">404</h1>

        <h2 className="text-2xl font-semibold text-foreground">
          Fórmula no encontrada
        </h2>

        <p className="text-muted-foreground max-w-md mx-auto">
          Parece que esta página se ha decolorado. Nuestro equipo de expertos
          está trabajando en una nueva fórmula para restaurarla.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button
            onClick={() => router.back()}
            className="flex items-center justify-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al catálogo anterior
          </Button>
          {/* <Button variant="outline" onClick={() => router.push("/")}>
            Ir al laboratorio principal
          </Button> */}
        </div>

        {/* <div className="mt-8 pt-6 border-t border-border text-sm text-muted-foreground">
          <p>¿Necesitas ayuda para encontrar el colorante adecuado?</p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 mt-2">
            <a
              href="https://wa.me/51991360501"
              className="flex items-center hover:text-primary transition-colors duration-300"
            >
              <Phone className="h-4 w-4 mr-1" />
              Ventas: 991-360-501
            </a>
            <a
              href="https://wa.me/51998156086"
              className="flex items-center hover:text-primary transition-colors duration-300"
            >
              <Phone className="h-4 w-4 mr-1" />
              Laboratorio: 998-156-086
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
}
