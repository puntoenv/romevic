import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Metadata } from "next";
import { LoadingLogo } from "@/components/app";

export const metadata: Metadata = {
  title: "Colorantes Textiles Romveic",
  description: "Colorantes textiles de calidad para tus telas y prendas",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.romevic.pe/contactanos",
  ),
  alternates: {
    canonical:
      process.env.NEXT_PUBLIC_SITE_URL || "https://www.romevic.pe/contactanos",
  },
  openGraph: {
    title: "Colorantes Textiles Romveic",
    description: "Calidad y color para tus proyectos textiles.",
    url: "https://www.romevic.pe/contactanos",
    type: "website",
    images: [
      {
        url: "https://www.romevic.pe/icon.png",
        width: 800,
        height: 600,
        alt: "Colorantes Textiles Romveic",
      },
    ],
  },
};

export default function ContactSection() {
  return (
    <LoadingLogo>
      <section className="w-full py-12 bg-background fade-in">
        <div className="px-4 md:px-6 flex flex-col justify-center items-center">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Contacto
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Estamos aquí para ayudarte con tus proyectos textiles
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <Card className="p-6 space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                Atención inmediata
              </h3>
              <div className="space-y-2">
                <Link
                  rel="noopener roreferrer"
                  href="https://wa.me/51991360501"
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Ventas: 991-360-501
                </Link>
                <Link
                  rel="noopener roreferrer"
                  href="https://wa.me/51998156086"
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Laboratorio: 998-156-086
                </Link>
              </div>
            </Card>

            <Card className="p-6 space-y-4 flex flex-col">
              <h3 className="text-xl font-semibold flex items-center">
                <MapPin className="h-5 w-5 text-primary" />
                Ubicación
              </h3>
              <Link
                target="_blank"
                href="https://maps.app.goo.gl/KN2eppAPFehKn1hV6"
                rel="noopener roreferrer"
                className="text-muted-foreground"
              >
                Mz Lca 201, San Juan de Lurigancho
              </Link>
            </Card>

            <Card className="p-6 space-y-4 md:col-span-2">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Consultas y pedidos
              </h3>
              <p className="text-muted-foreground">
                Si tienes alguna duda o deseas realizar un pedido, nuestro
                equipo está listo para atenderte.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  rel="noopener roreferrer"
                  href="mailto:romevicsrl@hotmail.com"
                  target="_blank"
                  className="flex-1 flex justify-center items-center bg-sky-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-sky-600 transition-colors"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Enviar correo
                </Link>
                {/* <Button variant="outline" className="flex-1">
                <MessageSquare className="mr-2 h-4 w-4" />
                Chatear por WhatsApp
              </Button> */}
              </div>
            </Card>
          </div>
        </div>
      </section>
    </LoadingLogo>
  );
}
