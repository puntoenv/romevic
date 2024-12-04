import { About, Hero, Services, Showcase } from "@/components/home";

export default function Home() {
  return (
    <main className="fade-in relative">
      <Hero />
      <About />
      <Showcase />
      <Services />
    </main>
  );
}
