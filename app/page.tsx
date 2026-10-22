import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Markets } from "@/components/Markets";
import { Services } from "@/components/Services";
import { Team } from "@/components/Team";
import { Technology } from "@/components/Technology";
import { Why } from "@/components/Why";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Technology />
        <Why />
        <Markets />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
