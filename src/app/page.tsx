import { About, Hero, Services, Showcase } from "@/components/home";
// import Head from "next/head";

export default function Home() {
  return (
    <>
      {/* <Head>
        <title>Romevic - Colorantes Textiles</title>
        <meta
          name="description"
          content="Explora nuestra variedad de colorantes textiles en Romevic, calidad y color vibrante para tus proyectos."
        />
        <meta
          name="keywords"
          content="colorantes textiles, teñido de ropa, productos textiles"
        />
      </Head> */}
      <main className="fade-in relative">
        <meta></meta>
        <Hero />
        <Services />
        <Showcase />
        <About />
      </main>
    </>
  );
}
