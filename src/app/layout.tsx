import { ReactNode } from "react";
import "./globals.css";
import { Footer, Header, WhatsappContact } from "@/components/app";
import { Raleway } from "next/font/google";
import { Metadata } from "next";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Colorantes Textiles Romveic",
  description: "Colorantes textiles de calidad para tus telas y prendas",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.romevic.pe/",
  ),
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || "https://www.romevic.pe/",
  },
  keywords:
    "colorantes, textiles, calidad, prendas, telas, colorantes textiles, peru",
  openGraph: {
    title: "Colorantes Textiles Romveic",
    description: "Calidad y color para tus proyectos textiles.",
    url: "https://www.romevic.pe",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <div
          className={`relative flex flex-col min-h-screen ${raleway.className}`}
        >
          <Header />
          {children}
        </div>
        <WhatsappContact />
        <Footer />
      </body>
    </html>
  );
}
