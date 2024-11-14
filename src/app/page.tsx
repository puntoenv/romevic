import { About, Hero, Services, Showcase } from "@/components/home";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <Services />
      <Showcase />
    </main>
  );
}
