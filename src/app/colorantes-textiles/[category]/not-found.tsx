"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="fade-in grid place-content-center py-48 px-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Color no encontrado</h2>
      <p className="text-muted-foreground mb-6">
        Lo sentimos, el color que estás buscando no existe en nuestro catálogo.
      </p>
      <div>
        <Button className="w-min" onClick={router.back}>
          Volver al catálogo
        </Button>
      </div>
    </div>
  );
}
