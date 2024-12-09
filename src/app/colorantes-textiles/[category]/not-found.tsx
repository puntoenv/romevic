import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="fade-in grid place-content-center py-48 px-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Color no encontrado</h2>
      <p className="text-muted-foreground mb-6">
        Lo sentimos, el color que estás buscando no existe en nuestro catálogo.
      </p>
      <Link href="/products?colors=direct">
        <Button>Volver al catálogo</Button>
      </Link>
    </div>
  );
}
