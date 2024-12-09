import { LoadingLogo } from "@/components/app";
import { About, Hero, Services, Showcase } from "@/components/home";
import { Metadata } from "next";
// import Head from "next/head";

export const metadata: Metadata = {
  title: "Colorantes Textiles Romveic",
  description: "Colorantes textiles de calidad para tus telas y prendas",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.romevic.pe/",
  ),
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || "https://www.romevic.pe/",
  },
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

export default function Home() {
  return (
    <LoadingLogo>
      <main className="fade-in relative fade-out">
        <Hero />
        <Services />
        <Showcase />
        <About />
      </main>
    </LoadingLogo>
  );
}
