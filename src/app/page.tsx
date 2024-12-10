import { LoadingLogo } from "@/components/app";
import { About, Hero, Services, Showcase } from "@/components/home";
// import Head from "next/head";

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
